const config = {
    siteUrl: 'https://www.zarubin.co.uk/',
    generateSitemap: true,
    generateIndexSitemap: true,
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 1.0,
    sitemapSize: 5000,
    additionalPaths: async () => {

        const staticPages = [
            '/about',
            '/career',
            '/comparison',
            '/expertise',
            '/solutions',
        ]

        const dynamicPages = [
            '/blog',
        ]
        const allPaths = [
            ...staticPages.map(loc => ({
                loc,
                changefreq: 'daily',
                priority: 0.8,
            })),
            ...dynamicPages.map(loc => ({
                loc,
                changefreq: 'daily',
                priority: loc === '/blog' ? 0.8 : 0.7,
            })),
        ]

        return allPaths
    },
}

export default config
