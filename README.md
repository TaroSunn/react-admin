# 项目环境搭建

## 安装插件
```
yarn add react-router-dom axios
yarn add less less-loader -D
```

### 配置less

暴露webpack 配置,暴露之前 请前提交修改
```
yarn eject
```

修改webpack.config.js, 配置参考 sass-loader
```
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
```

```
{
  test: lessRegex,
  exclude: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'less-loader'
  ),
  sideEffects: true,
},
{
  test: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
    },
    'less-loader'
  ),
},
```

### antd安装
```
yarn add antd
```

#### 按需加载

```
yarn add babel-plugin-import
```

`package.json`添加babel配置

```
"plugins": [
  [
    "import",
    {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // true 加载less文件 
    }
  ]
]
```

配置 全局样式

将 `style`改为`true`时报错
```
if (preProcessor) {
  loaders.push({
    loader: require.resolve(preProcessor),
    options: {
      sourceMap: isEnvProduction && shouldUseSourceMap,
      javascriptEnabled:true,
      modifyVars: {
        'primary-color': 'red', // 主题色
      },
    },
  });
}
```

## 项目主页

### 左侧导航

## 天气 api

```
https://www.tianqiapi.com/api/?version=v1
```