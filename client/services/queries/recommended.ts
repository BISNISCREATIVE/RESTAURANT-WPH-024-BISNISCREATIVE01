import { useQuery } from "@tanstack/react-query";
import axios from "@/services/api/axios";
import type { MenuItem } from "@/types";

function normalizeMenu(raw: any, restaurantId?: number, restaurantName?: string): MenuItem {
  const id = raw?.id ?? raw?._id ?? raw?.menuId ?? raw?.foodId ?? "";
  const name = raw?.foodName ?? raw?.name ?? raw?.title ?? "Untitled";
  const price = Number(raw?.price ?? raw?.cost ?? 0) || 0;
  const image = raw?.image ?? raw?.imageUrl ?? raw?.photo ?? null;
  return {
    id: String(id),
    name: String(name),
    price,
    image,
    category: raw?.type ?? raw?.category ?? null,
    restaurantId: Number(restaurantId ?? 0) || 0,
    restaurantName: restaurantName ?? null,
  } as MenuItem;
}

export function useRecommendedQuery() {
  return useQuery({
    queryKey: ["recommended"],
    queryFn: async (): Promise<MenuItem[]> => {
      // Primary: try the /resto/recommended endpoint provided by the foody API
      try {
        const res = await axios.get("/resto/recommended");
        const payload = res.data?.data ?? res.data;
        const recs = payload?.recommendations ?? payload?.recommendation ?? null;
        if (Array.isArray(recs) && recs.length) {
          const items: MenuItem[] = [];
          for (const r of recs) {
            const restoId = r?.id ?? r?.restaurantId ?? 0;
            const restoName = r?.name ?? r?.restaurantName ?? null;
            const sample = r?.sampleMenus ?? r?.sampleMenu ?? r?.menus ?? r?.sample ?? [];
            if (Array.isArray(sample) && sample.length) {
              for (const m of sample) items.push(normalizeMenu(m, restoId, restoName));
            }
          }
          if (items.length) return items;
        }
      } catch (err) {
        // ignore and fallback
      }

      // Fallback: request list of restaurants and map to pseudo-menu items using images/priceRange
      try {
        const r = await axios.get("/resto", { params: { page: 1, limit: 12 } });
        const payload = r.data?.data ?? r.data ?? {};
        const list = payload?.restaurants ?? payload ?? [];
        if (Array.isArray(list) && list.length) {
          const items: MenuItem[] = list.slice(0, 12).map((resto: any) => ({
            id: `resto-${resto.id}`,
            name: resto.name ?? "Restaurant",
            price: Number(resto?.priceRange?.min ?? resto?.price ?? 0) || 0,
            image: Array.isArray(resto.images) && resto.images.length ? resto.images[0] : resto.logo ?? null,
            category: null,
            restaurantId: Number(resto.id) || 0,
            restaurantName: resto.name ?? null,
          }));
          return items;
        }
      } catch (err) {
        // ignore
      }

      return [];
    },
    staleTime: 30_000,
  });
}
