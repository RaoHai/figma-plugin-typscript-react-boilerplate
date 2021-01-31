const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = (env, argv) => ({
    entry: {
        bundle: './src/index.tsx',
        ui: './index.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
          }
        ],
    },
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
    plugins: [
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin({
        inject: true,
        filename: 'ui.html',
        template: './src/ui.html',
      }),
      // Inlines chunks with `runtime` in the name
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/bundle/]),
    ],
});
