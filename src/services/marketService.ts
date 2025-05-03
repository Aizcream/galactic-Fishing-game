// src/services/marketService.ts
import { fetchFromAPI } from "./apiService";

export interface MarketItem {
  id: string;
  name: string;
  type: string;
  description: string;
  cost: number;
}

export async function getMarketItems(): Promise<MarketItem[]> {
  const data = await fetchFromAPI<{ items: MarketItem[] }>("/game/market");
  return data.items;
}
