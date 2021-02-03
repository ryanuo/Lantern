## 1.查看效果

![](https://cdn.jsdelivr.net/gh/Rr210/image@master/hexo/4/dl.png)

## 2.自定义内容

1. 可自定义灯笼`字体`
```css
/* 修改灯笼的字体 */
.d-box .d1::after{
    content: '牛年吉祥';}
.d-box1 .d1::after{
    content: '万事顺利';
}
```
2. 可自定义灯笼`大小,位置`	
```css
.d-box{
    position: fixed;
    width: 330px;
    /* 自定义灯笼的位置 */
    right: 0;
    top: 0;
    /* 自定义灯笼大小 */
    transform: scale(0.8);
}
.d-box1{
    position: fixed;
    width: 330px;
    /* 自定义灯笼的位置 */
    left: 0;
    top: 0;
    /* 自定义灯笼大小 */
    transform: scale(0.8);
}
```
3. 适配移动端，可设置`隐藏`，或者显示一个/调节`灯笼的大小`，`默认一个`
4. 可自定义灯笼的`阴影颜色,大小`

## 3.使用方法

1. 直接引用`index.html`中的body里面的内容
2. 加入`dl.css`
3. 第一个文件夹内的css是未使用css3`box-sizing:border-box`(不适配，不用看这个)

## 4. 博客地址

- 原创[Harryの心阁](https://u.mr90.top)
- 转载请标明出处，尊重原创作者 https://u.mr90.top/posts/8914/