import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildCssLoaders} from './loaders/buildCssLoaders';
import {buildBabelLoader} from './loaders/buildBabelLoader';


export function buildLoaders(option: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = buildCssLoaders(option.isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true
                            }
                        }
                    ]
                }
            }
        }],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const codeBabelLoader = buildBabelLoader({...option, isTsx: false});
    const tsxCodeBabelLoader = buildBabelLoader({...option, isTsx: true});

    return [
        cssLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        svgLoader,
        fileLoader,
    ];
}