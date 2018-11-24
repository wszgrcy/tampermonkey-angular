# TampermonkeyAngular
- 这个是一个利用Angular编译项目在油猴脚本中使用的一个模板项目
- 使用Angular elements实现在油猴中调用

## Build
- `npm run build`
> 可以让油猴允许文件地址,然后`// @require      file:///D:\xxx\tampermonkey-angular\element.js`这样启动
> 也可以将`element.js`文件直接全部复制过去

## 油猴特定方法
- 建议导入脚本(上面两种方法)后,再在脚本中初始化元素,传入全局方法
```ts
    let ele = document.createElement('custom-root');
    ele.gmHttp = GM_xmlhttpRequest;
    document.body.appendChild(ele)
```

## 运行时期
- 有部分网址貌似会删除自定义元素的方法?(还是说不允许,结果待定),所以请将运行时期调整为`document-start`,然后生成元素等的页面加载完成
## 已知问题
- `@Input('xxxx') yyy` 貌似是不能接受别名的,测试`xxxx`拿不到数据,但是官方文档显示支持 
- 路由自然是没啥用的(即使有用.....你为啥要在人家网址上写路由)