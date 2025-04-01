import { MetadataRoute } from "next"

// TypeScript ensures you don't make structural mistakes
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://tacknowledge.co.uk/sitemap.xml",
    host: "https://tacknowledge.co.uk",
  }
}
