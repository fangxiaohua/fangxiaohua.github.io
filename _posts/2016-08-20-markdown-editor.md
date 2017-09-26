---
layout: post
title:  "markdown 基本语法和编辑器推荐"
date:   2016-08-20
categories: markdown
tags: markdown
published: true
author: fangxiaohua
---

* content
{:toc}

博客搭建完成了，接下来便要开始写文章了，由于jekyll和github对markdown都是十分友好的，自然而然就会选择markdown来编写博文，可是还没想好要写什么，可是看着blog空荡荡的也不是个事，所以干脆想到了不如写一篇关于markdown的博文来作为博客的开篇吧，也正好培养一下自己用md写文章的写作方式。




## 是什么
* Markdown 是一种用来`写作`的`轻量级`「`标记语言`」
* 它用简洁的语法代替排版，而不像一般我们用的字处理软件 Word 或 Pages 有大量的排版、字体设置。
* 它使我们专心于码字，用`「标记」语法`，来代替常见的排版格式。
* 例如此文从`内容到格式`，`甚至插图`，`键盘`就可以`通通搞定`了
* Markdown 从写作到完成，导出格式随心所欲，你可以`导出 HTML 格式`的文件用来网站发布，也可以十分方便的`导出 PDF 格式`，这种格式写出的`简历`更能得到 `HR 的好感`。
* 甚至可以利用 github pages ,直接上传md文章至github，github集成了jekyll会生成网页用来分享你的文章。

## 优势

1. [专注写作] 专注你的文字内容而不是排版样式。
2. [多种导出] 轻松的导出 HTML、PDF 和本身的 .md 文件。
3. [容易编辑] 纯文本内容，兼容所有的文本编辑器与字处理软件。
4. [简单易用] 简单，可读，直观。适合所有人的写作语言。

## 基本语法
### 1. 标题
如果一段文字被定义为标题，只要在这段文字前加 # 号即可。
```markdown
# 一级标题
## 二级标题
### 三级标题
```

![](https://fangxiaohua.github.io/blog/images/post/markdown-editor/title.png)
 
总共六级标题，`建议在井号后加一个空格`，这是最标准的 Markdown 语法

### 2. 列表
`无序列表`只需要在文字前加上 `- `或` *` 

![](https://fangxiaohua.github.io/blog/images/post/markdown-editor/list_ul.png)

`有序列表`则直接在文字前加 `1.` `2.` `3.`

![](https://fangxiaohua.github.io/blog/images/post/markdown-editor/list_ol.png)

符号要和文字之间加上一个字符的`空格`

### 3. 引用

只需要在文本前加入 `>` 这种尖括号（大于号）即可

这种语法生成效果：
> 引用

### 4. 图片与链接

插入链接与插入图片的语法很像，`区别在一个 !号`


```markdown
使用 [我是个链接](http://www.baidu.com "this is title") //来标记普通链接,插入图片的地址需要图床
```

这种语法生成效果： [我是个链接](http://www.baidu.com "this is title")


```markdown
![我是个图片](https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png "this is title") //来标记图片。
```

这种语法生成效果： ![我是个图片](https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png "this is title")

`引号内的 title 文字是可选的`，链接也可以使用`相对路径`。

![](https://fangxiaohua.github.io/blog/images/post/markdown-editor/link_and_img.png)

### 5. 粗体与斜体

用`两个` `*`或`_` 包含一段文本就是`粗体`的语法，

```markdown
__粗体__    **粗体**
```

这种语法生成效果： __粗体__    **粗体**

用`一个` `*`或`_` 包含一段文本就是斜体的语法。

```markdown
_斜体_    *斜体*
```

这种语法生成效果： _斜体_    *斜体*

### 6. 表格

```markdown
| Tables      | row 1         | row 2       |
| ----------- |:-------------:| ---------- :|
| col 1       | Baidu         | baidu.com   |
| col 2       | Alibaba       | taobao.com  |
| col 3       | Tencent       | qq.com      |
```
这种语法生成效果：

| Tables      | row 1         | row 2       |
| ----------- |:-------------:| ---------- :|
| col 1       | Baidu         | baidu.com   |
| col 2       | Alibaba       | taobao.com  |
| col 3       | Tencent       | qq.com      |

### 7. 代码块
用两个 ``` 把中间的代码`包裹`。
```markdown
    ```javascript
        console.log("this is javascript console");
    ```
```

这种语法生成效果：

```javascript
    console.log("this is javascript console");
```

### 8. 分割线
分割线的语法只需要另起一行，输入`***`即可。


### 9. 段落
使用一个或多个空行分隔内容段来生成段落。

### 11. 更多
[md 中文语法说明](http://wowubuntu.com/markdown/#list)

## 编辑器推荐

目前来看，支持 Markdown 语法的编辑器有很多，包括很多网站（例如简书）也支持了 Markdown 的文字录入。


### Remarkable - Linux
[Remarkable - Linux](https://remarkableapp.github.io/linux/screenshots.html) 实时预览，主流格式导出，外观现代化，开源，体积小巧 [视频预览](https://remarkableapp.github.io/linux.html)

### Mou - Mac
[Mou](http://25.io/mou/) 两栏界面，直观清爽，功能简洁到位

### ReText - Linux
[ReText](https://sourceforge.net/projects/retext/) ReText是基于Python的，所以必须首先安装PyThon

###  简书 | Dillinger | MaHua | via | Lucifr  -  web
网页版，可直接使用

### MarkdownPad - Window
 需要安装  Microsoft .NET Framework 4.0

### Drafts - IOS

### Moeditor - 全平台

[Moeditor](https://moeditor.org/) 简洁好用又好看，支持全平台，Menci大佬开发。

github上已经开源：[GitHub - Moeditor/Moeditor: Your all-purpose markdown editor](https://github.com/Moeditor/Moeditor)

### 测试工具
[https://daringfireball.net/projects/markdown/dingus](https://daringfireball.net/projects/markdown/dingus)

### 自己写一个
网上解析markdown的库很多，我们完全可以自己创建markdown编辑器,下面的例子就是写的一个小例子
```html
//markdown 库用的是开源的showdown
//https://github.com/showdownjs/showdown
<!DOCTYPE html>
<html>
    <head>
        <title>MarkDown</title>
        <script type="text/javascript" src="showdown.min.js"></script>
    </head>
    <style>
        body {
            font-family: "Helvetica Neue", Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
            font-size: 16px;
            line-height: 1.42857143;
            color: #333;
            background-color: #fff;
        }
        ul li {
            line-height: 24px;
        }
        blockquote {
            border-left:#eee solid 5px;
            padding-left:20px;
        }
        code {
            color:#D34B62;
            background: #F9F2F4;
        }
        textarea {
            height:400px;
            width:600px;
        }
    </style>
    <body>
        <div>
            <textarea id="content" onkeyup="compile()"></textarea>
            <div id="result"></div>
        </div>
        <script type="text/javascript">
            function compile(){
                var text = document.getElementById("content").value;
                var converter = new Showdown.converter();
                var html = converter.makeHtml(text);
                document.getElementById("result").innerHTML = html;
            }
        </script>
    </body>
</html>
```