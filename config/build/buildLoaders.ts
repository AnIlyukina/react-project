import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildCssLoaders} from './loaders/buildCssLoaders';
import {buildBabelLoader} from './loaders/buildBabelLoader';


export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoaders(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = buildBabelLoader(isDev);

    return [
        cssLoader,
        babelLoader,
        typescriptLoader,
        svgLoader,
        fileLoader,
    ];
}