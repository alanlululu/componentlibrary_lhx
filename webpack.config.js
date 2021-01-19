const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    
    mode:'none',//Webpack4.0 会在默认情况下开启 mode=production，这会无差别的压缩我们的 tree.js 和 tree.min.js，这不是我们想要的，禁用它。
    
    entry:{//入口
        testlhx:"./src/index.js",
        "testlhx.min":"./src/index.js"
    },

    output:{//出口
        filename:"[name].js",
        libraryExport:"default",//打包出来的组件直接对外暴露 default 属性，否则我们调用的时候需要 new Tree.default()
        library:'testlhx',//library=Tree 表示对外暴露的组件叫什么，如果这个地方修改成了 library=Bar，那我们调用的时候就是 new Bar()
        libraryTarget:'umd',//采用 UMD (Universal Module Definition) 的方式打包 js，同时支持在 CommonJS、AMD 和全局变量使用。

    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,//通过 include 设置只压缩 min.js 结尾的文件
            }),
        ],
    },
}