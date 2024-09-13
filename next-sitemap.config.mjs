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
            '/blog',
            '/solutions',
            '/solutions/avangard',
            '/solutions/fcdm',
            '/solutions/grid_capital',
            '/solutions/kama',
            '/solutions/nashe_zoloto',
            '/solutions/nis',
            '/solutions/norilsk',
            '/solutions/oazis',
            '/solutions/stocks_soccer',
            '/solutions/t_bank',
            '/solutions/lux_today',
        ]

        const dynamicPages = [
            '/blog',
        ]
        const allPaths = [
            ...staticPages.map(loc => ({
                loc,
                changefreq: 'daily',
                priority: 1.0,
            })),
            ...dynamicPages.map(loc => ({
                loc,
                changefreq: 'daily',
                priority: 0.8,
            })),
        ]

        return allPaths
    },

    exclude: ['/assets/*', '/_next/*', '/tpost/*'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: '/assets/*' },
            { userAgent: '*', disallow: '/_next/*' },
            { userAgent: '*', disallow: '/tpost/*' },
        ],
    },
}

export default config
