import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import type { MenuItem } from "@/types";

const RECOMMENDED_BASE = (import.meta as any).env?.VITE_RECOMMENDED_API_BASE ||
  "https://berestaurantappformentee-production.up.railway.app";

const client = Axios.create({ baseURL: RECOMMENDED_BASE, timeout: 10000 });

async function tryFetch(path: string) {
  try {
    const res = await client.get(path);
    return res.data ?? null;
  } catch (err) {
    return null;
  }
}

function normalizeItems(raw: any[]): MenuItem[] {
  return (raw || []).map((r: any) => {
    const id = r?.id ?? r?._id ?? r?.menuId ?? r?.productId ?? r?.foodId ?? "";
    const name = r?.name ?? r?.foodName ?? r?.title ?? "Untitled";
    const priceRaw = r?.price ?? r?.cost ?? r?.harga ?? r?.priceRp ?? 0;
    const price = Number(priceRaw ?? 0) || 0;
    const image = r?.image ?? r?.imageUrl ?? r?.img ?? r?.photo ?? null;
    const restaurantId = Number(r?.restaurantId ?? r?.restoId ?? r?.restaurant?.id ?? 0) || 0;
    return {
      id: String(id),
      name: String(name),
      price,
      image,
      category: r?.category ?? r?.type ?? null,
      restaurantId,
      restaurantName: r?.restaurant?.name ?? r?.restaurantName ?? null,
    } as MenuItem;
  });
}

export function useRecommendedQuery() {
  return useQuery({
    queryKey: ["recommended"],
    queryFn: async (): Promise<MenuItem[]> => {
      const candidatePaths = [
        "/menus",
        "/products",
        "/items",
        "/foods",
        "/menu",
        "/product",
        "/api/menus",
        "/api/products",
        "/api/items",
      ];

      for (const p of candidatePaths) {
        const data = await tryFetch(p);
        if (!data) continue;
        // possible shapes: array, { data: [...] }, { items: [...] }, { results: [...] }
        let list: any[] | undefined;
        if (Array.isArray(data)) list = data;
        else if (Array.isArray(data.data)) list = data.data;
        else if (Array.isArray(data.items)) list = data.items;
        else if (Array.isArray(data.results)) list = data.results;
        else if (Array.isArray(data.menus)) list = data.menus;

        if (list && list.length) return normalizeItems(list);
      }

      // fallback: try root / endpoint
      const root = await tryFetch("/");
      if (root) {
        let list: any[] | undefined;
        if (Array.isArray(root)) list = root;
        else if (Array.isArray(root.data)) list = root.data;
        if (list && list.length) return normalizeItems(list);
      }

      return [];
    },
    staleTime: 30_000,
  });
}
