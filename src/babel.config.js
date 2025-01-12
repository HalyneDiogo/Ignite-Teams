module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
    ],
    plugins: [
        'module-resolver',
        {
            root: ['./src'],
            alias: {
                '@assets': './src/assets',
                '@components': './src/components',
                '@routes': './src/routes',
                '@screens': './src/screens',
                '@storage': './src/storage',
                '@theme': './src/theme',
                '@utils': './src/utils',
            },
        }
    ],
};