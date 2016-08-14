/**
 * Created by Bane.Shi.
 * Copyright MoenSun
 * User: Bane.Shi
 * Date: 16/5/26
 * Time: 14:39
 */
'use strict';
import path from 'path';
import webpack from 'webpack';
import colors from 'colors';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TransferWebpackPlugin from 'transfer-webpack-plugin';
import Clean from 'clean-webpack-plugin';

let config = {
    entry:{
        main  : './example/main.jsx',
    },
    output:{
        path: './html',
        filename:'[name].bundle.js',
        publicPath: ''
    },
    resolve:{
        alias:{

        },
        root: path.join(__dirname, 'example'),
        extensions: ['', '.js','.jsx'],
    },
    module:{
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader' ,
                query:{
                    presets:['es2015','react'],
                    plugins:['transform-runtime']
                },
            },
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            {test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css!sass?sourceMap") },
            {test: /\.(png|jpg|gif)$/,loader: "url?limit=2500" },
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
        ]
    },
    plugins:[
        new Clean(['html']),
        new TransferWebpackPlugin([
             {from: 'data', to: 'data'}
        ], path.join(__dirname, 'example')),
        new webpack.ProvidePlugin({
            _ : 'lodash',
            $ : 'jquery',
            jQuery : 'jquery'
        }),
        new ExtractTextPlugin('[name].bundle.css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new HtmlWebpackPlugin({
            title:'Moensun React Strap',
            template: './example/index.ejs',
            hash: true,
            minify: {
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true
            }
        }),
    ]
}

module.exports = config;