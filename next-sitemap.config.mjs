import fs from 'fs'
import path from 'path'

const config = {
    siteUrl: 'https://thebrightbyte.com',
    generateSitemap: true,
    generateIndexSitemap: false,
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 1.0,
    sitemapSize: 5000,
    additionalPaths: async () => {

        const staticPages = [
            '/',
            '/about',
            '/career',
            '/comparison',
            '/expertise',
            '/insights',
            '/solutions',
            '/policy'

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
            return `/insights/${fileName}`
        })

        const solutionsDir = path.join(process.cwd(), 'src/cases')
        const solutionsFiles = getAllMarkdownFiles(solutionsDir)

        const dynamicSolutionsPages = solutionsFiles.map((file) => {
            const fileName = path.basename(file, '.md')
            return `/solutions/${fileName}`
        })

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
            ...dynamicBlogPages.map(loc => ({
                loc,
                changefreq: 'daily',
                priority: 0.8,
            })),
            ...dynamicSolutionsPages.map(loc => ({
                loc,
                changefreq: 'daily',
                priority: 0.8,
            })),
        ]

        return allPaths
    },

    exclude: ['/assets/*', '/_next/*', '/tpost/*', '/products/*', '/services/*', '/search/*', '/lander/*', '/collections/*'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: [
                    '/',
                    '/*.js',
                    '/*.css',
                    '/*.gif',
                    '/*.jpg',
                    '/*.png',
                    '/*.webp',
                    '/*.md'
                ],
                disallow: [
                    '/assets/*',
                    '/_next/*',
                    '/tpost/*',
                    '/products/*',
                    '/services/*',
                    '/search/*',
                    '/lander/*',
                    '/collections/*',
                    '*/&',
                    '/*?'
                ]
            },
            {
                userAgent: 'Googlebot',
                allow: [
                    '/',
                    '/*.js',
                    '/*.css',
                    '/*.gif',
                    '/*.jpg',
                    '/*.png',
                    '/*.webp',
                    '/*.md'
                ],
                disallow: [
                    '/assets/*',
                    '/_next/*',
                    '/tpost/*',
                    '/products/*',
                    '/services/*',
                    '/search/*',
                    '/lander/*',
                    '/collections/*',
                    '*/&',
                    '/*?'
                ]
            },
            { userAgent: 'RookeeBot', disallow: '/' },
            { userAgent: 'Twitterbot', allow: '/' },
            { userAgent: 'Facebot', allow: '/' },
            { userAgent: 'facebookexternalhit', allow: '/' }
        ],
        additionalSitemaps: [
            'https://thebrightbyte.com/sitemap.xml',
        ],
    },
}

export default config
