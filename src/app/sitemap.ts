import { MetadataRoute } from "next";
import { locales } from "@/i18n";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/#about", "/#projects", "/#skills", "/#contact"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${SITE_CONFIG.url}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_CONFIG.url}/${l}${route}`])
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
