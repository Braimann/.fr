import { MetadataRoute } from 'next';
import { villesData } from '@/lib/villes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://allosupport.fr';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/depannage-informatique-france/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // City pages
  const cityPages = villesData.map((ville) => ({
    url: `${baseUrl}/depannage-informatique-${ville.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...cityPages];
}
