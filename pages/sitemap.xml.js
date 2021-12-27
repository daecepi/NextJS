import React from "react";
import { getSitemapUrls } from "../lib/api";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
	// Urls fetching
	const sitemapEntries = await getSitemapUrls();

	// Schema printing (add <changefreq>monthly</changefreq> if Google policies accept it)
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapEntries
			.map((entry) => {
				return `
          <url>
            <loc>${entry?.url || ""}</loc>
            <lastmod>${
							new Date(
								entry?.dateUpdated || new Date().toISOString()
							).toISOString() || ""
						}</lastmod>
            <priority>1.0</priority>
          </url>
        `;
			})
			.join("")}
    </urlset>
  `;

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;
