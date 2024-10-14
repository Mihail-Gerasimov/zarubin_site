import fs from 'fs'
import path from 'path'

const config = {
    siteUrl: 'https://www.thebrightbyte.com/',
    generateSitemap: true,
    generateIndexSitemap: false,
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

        const getAllMarkdownFiles = (dirPath, arrayOfFiles = []) => {
            const files = fs.readdirSync(dirPath)

            files.forEach((file) => {
                const filePath = path.join(dirPath, file)
                if (fs.statSync(filePath).isDirectory()) {
                    arrayOfFiles = getAllMarkdownFiles(filePath, arrayOfFiles)
                } else if (file.endsWith('.md')) {
                    arrayOfFiles.push(filePath)
                }
            })

            return arrayOfFiles
        }

        const expertiseDir = path.join(process.cwd(), 'src/expertise')
        const expertiseFiles = getAllMarkdownFiles(expertiseDir)

        const dynamicExpertisePages = expertiseFiles.map((file) => {
            const fileName = path.basename(file, '.md')
            return `/expertise/${fileName}`
        })

        const blogDir = path.join(process.cwd(), 'src/posts')
        const blogFiles = getAllMarkdownFiles(blogDir)

        const dynamicBlogPages = blogFiles.map((file) => {
            const fileName = path.basename(file, '.md')
            return `/blog/${fileName}`
        })

        // const dynamicPages = [
        //     '/blog',
        // ]
        const allPaths = [
            ...staticPages.map(loc => ({
                loc,
                changefreq: 'daily',
                priority: 1.0,
            })),
            ...dynamicExpertisePages.map(loc => ({
                loc,
                changefreq: 'daily',
                priority: 1.0,
            })),
            // ...dynamicPages.map(loc => ({
            //     loc,
            //     changefreq: 'daily',
            //     priority: 0.8,
            // })),
            ...dynamicBlogPages.map(loc => ({
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
            { userAgent: '*', allow: '/*.js' },
            { userAgent: '*', allow: '/*.css' },
            { userAgent: '*', allow: '/*.gif' },
            { userAgent: '*', allow: '/*.jpg' },
            { userAgent: '*', allow: '/*.png' },
            { userAgent: '*', disallow: '/assets/*' },
            { userAgent: '*', disallow: '/_next/*' },
            { userAgent: '*', disallow: '/tpost/*' },
            { userAgent: '*', disallow: '*/&' },
            { userAgent: '*', disallow: '/*?' },
            { userAgent: 'Googlebot', allow: '/' },
            { userAgent: 'Googlebot', allow: '/*.js' },
            { userAgent: 'Googlebot', allow: '/*.css' },
            { userAgent: 'Googlebot', allow: '/*.gif' },
            { userAgent: 'Googlebot', allow: '/*.jpg' },
            { userAgent: 'Googlebot', allow: '/*.png' },
            { userAgent: 'Googlebot', disallow: '/assets/*' },
            { userAgent: 'Googlebot', disallow: '/_next/*' },
            { userAgent: 'Googlebot', disallow: '/tpost/*' },
            { userAgent: 'Googlebot', disallow: '*/&' },
            { userAgent: 'Googlebot', disallow: '/*?' },
            { userAgent: 'RookeeBot', disallow: '/' },
            { userAgent: 'Twitterbot', allow: '/' },
            { userAgent: 'Facebot', allow: '/' },
            { userAgent: 'facebookexternalhit', allow: '/' },
        ],
        additionalSitemaps: [
            'https://www.thebrightbyte.com/sitemap.xml',
        ],
    },
}

export default config
