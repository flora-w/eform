## 
## 2019.08.15 无聊而写   
## 其实当初搭建时想使用 TypeScript 来写 React  

antd  
axios  
--Babel-polyfill  PS: Babel-runtime更佳  -> 由于Babel版本问题现已替换成新方法兼容IE 
React  
Redux  
React-router-dom v4  
Immutable      
Redux-thunk     
React-Redux    
Redux-Immutable    
React-intl  国际化    
Scss 没外网使用less  

npm i -D less less-loader 
另webpack.config.js
rules [
  ...
  {test: /\.(less)$/, 
   exclude: /\.module\.css$/,
   use: getStyleLoaders(
        {importLoaders: 2}, 
	 'less-loader'), 
   }
]
