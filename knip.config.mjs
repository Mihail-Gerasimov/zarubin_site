const config = {
    entry: [
        'app/**/*.tsx',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.jsx',
        'src/**/*.js',
        'src/**/*.jsx',
        'src/**/*.ts',
        'src/**/*.tsx',
    ],
    ignore: [
        'node_modules/**',
        'next.config.js',
        'public/**',
        '.next/**',
        'src/assets/**',
    ],
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    tsConfig: './tsconfig.json',
    projectFiles: [
        '.eslintrc.json',
        '.gitignore',
        'next.config.mjs',
    ],
}

export default config