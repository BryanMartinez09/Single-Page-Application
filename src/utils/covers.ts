// src/utils/covers.ts
export const COVERS = [
  // Música / artistas / instrumentos (Unsplash, uso libre con atribución)
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495339640168-bc2c2fd1fd95?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514809812284-2c43ee76bebe?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop',
];

// Mapea cualquier string a un índice del pool de manera estable.
export function coverFor(name: string) {
  const seed = Array.from(name).reduce((a, c) => a + c.charCodeAt(0), 0);
  return COVERS[seed % COVERS.length];
}
