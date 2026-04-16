import citiesData from "./data/cities.json";

export interface City {
  name: string;
  name_en: string;
  country: string;
  region: string;
  primary_element: string;
  secondary_element: string;
  lat: number;
  lng: number;
  basis: string;
  experiences: string[];
  tags: string[];
}

export const cities: City[] = citiesData as City[];

export function getByElement(element: string): City[] {
  return cities.filter(c => c.primary_element === element);
}

export function getByCountry(country: string): City[] {
  return cities.filter(c => c.country === country);
}

export function match(
  favorableElements: string[],
  options?: { limit?: number; country?: string }
): City[] {
  const limit = options?.limit ?? 5;
  let pool = options?.country
    ? cities.filter(c => c.country === options.country)
    : cities;

  const scored = pool.map(city => {
    let score = 0;
    if (favorableElements.includes(city.primary_element)) score += 3;
    if (favorableElements.includes(city.secondary_element)) score += 1;
    return { city, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.filter(s => s.score > 0).slice(0, limit).map(s => s.city);
}

export function search(query: string): City[] {
  const q = query.toLowerCase();
  return cities.filter(c =>
    c.name.includes(q) ||
    c.name_en.toLowerCase().includes(q) ||
    c.tags.some(t => t.includes(q))
  );
}

export const stats = {
  total: cities.length,
  byElement: Object.fromEntries(
    ["木", "火", "土", "金", "水"].map(e => [e, cities.filter(c => c.primary_element === e).length])
  ),
  byCountry: Object.fromEntries(
    [...new Set(cities.map(c => c.country))].map(cc => [cc, cities.filter(c => c.country === cc).length])
  ),
};
