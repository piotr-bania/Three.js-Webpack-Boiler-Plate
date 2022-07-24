const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name][contenthash].js',
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },

    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },

    module: {
        rules: [

            // HTML
            {
                test: /\.html$/,
                use: ["html-loader"]
            },

            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            // CSS
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            // Url
            {
                test: /\.hdr$/,
                use: "url-loader"
            },

            // Images
            {
                test: /\.(png|pdf)$/,
                use: [{
                    loader: 'file-loader',
                    // options: {
                    //     outputPath: 'assets/images/'
                    // }
                }]
            },

            // Models
            {
                test: /\.(glb|gltf|fbx|obj)$/,
                use: [{
                    loader: 'file-loader',
                    // options: {
                    //     outputPath: 'assets/models/'
                    // }
                }]
            },

            // Shaders
            // {
            //     test: /\.(glsl|vs|fs|vert|frag)$/,
            //     exclude: /node_modules/,
            //     use: [
            //         'raw-loader',
            //         'glslify-loader'
            //     ]
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test | ThreeJS',
            filename: 'index.html',
            template: 'src/template.html',
            minify: true
        })
    ]
}