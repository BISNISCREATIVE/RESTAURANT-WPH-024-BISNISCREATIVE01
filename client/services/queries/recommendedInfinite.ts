import { useEffect, useState, useRef, useCallback } from "react";
import axios from "@/services/api/axios";
import type { MenuItem } from "@/types";

export function useRecommendedInfinite(pageSize = 12) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPage = useCallback(async (p: number) => {
    setLoading(true);
    try {
      const res = await axios.get("/resto", { params: { page: p, limit: pageSize } });
      const payload = res.data?.data ?? res.data ?? {};
      const list = payload?.restaurants ?? [];
      const mapped: MenuItem[] = (list || []).map((resto: any) => ({
        id: `resto-${resto.id}`,
        name: resto.name ?? "Restaurant",
        price: Number(resto?.priceRange?.min ?? 0) || 0,
        image: Array.isArray(resto.images) && resto.images.length ? resto.images[0] : resto.logo ?? "/placeholder.svg",
        category: null,
        restaurantId: Number(resto.id) || 0,
        restaurantName: resto.name ?? null,
      }));

      setItems((prev) => [...prev, ...mapped]);
      const pagination = payload?.pagination;
      if (pagination) {
        setHasMore((p) => p < pagination.totalPages);
      } else {
        setHasMore((mapped.length ?? 0) === pageSize);
      }
    } catch (err) {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [pageSize]);

  useEffect(() => {
    // load first page
    fetchPage(1);
    setPage(1);
  }, [fetchPage]);

  const loadMore = async () => {
    if (loading || !hasMore) return;
    const next = page + 1;
    setPage(next);
    await fetchPage(next);
  };

  const reset = () => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    fetchPage(1);
  };

  return { items, loading, hasMore, loadMore, reset };
}
