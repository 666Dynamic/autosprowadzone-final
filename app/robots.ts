import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/w-budowie", "/test-logos", "/promo/"],
      },
    ],
    sitemap: "https://sprowadzoneauto.pl/sitemap.xml",
  };
}
