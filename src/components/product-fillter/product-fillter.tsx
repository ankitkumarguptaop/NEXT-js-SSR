// app/products/ProductSearch.tsx
"use client";

import { Box } from "@mui/material";
import { useState } from "react";

export default function ProductSearch() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);

  const handleSearch = async () => {
    const res = await fetch(
      `/api/products?search=${search}&limit=${limit}&page=${page}`
    );
    const data = await res.json();
    setProducts(data);
  };

  return (
    <Box>
      <Box>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="border p-2 rounded"
        />
      </Box>
    </Box>
  );
}
