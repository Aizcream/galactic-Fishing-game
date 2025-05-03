export async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const res = await fetch(`https://api-game.bloque.app${endpoint}`);
  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}
