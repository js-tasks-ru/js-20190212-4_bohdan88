module.exports = {
    entry: './modules/app.js',
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    watch: true,
    watchOptions: {
            aggregateTimeout:100
    },
};
