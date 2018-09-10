This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

```bash
  1、使用ionic3项目模板首先要配置ionic项目运行环境
  2、要配置环境先安装node.js(安装方法百度)
  3、node -v 查看是否安装成功
  4、npm -v 查看npm是否安装成功
  5、npm install -g cordova ionic 安装全局的 cordova 和 ionic
  6、ionic -v 查看ionic是否安装成功
  7、克隆该项目到本地
  8、cd到项目根目录
  9、npm install 安装依赖项
  10、ionic serve 运行该项目
  
```

### ionic2 -- ionScroll页面滑动监听:


```bash

一、引入相关模块
    import { NgZone, ViewChild } from '@angular/core';
    import { Content } from 'ionic-angular';
    
二、标注@ViewChild()
export class ProductPage { 
    @ViewChild(Content) content: Content;
    //括号中的值在html页面中标注的时候，名称不能其他属性相同。如该文件已经有一个pnavs的变量，则会报错。
    @ViewChild('one') stickone;
    @ViewChild('two') sticketwo;
    @ViewChild('three') stickhree;
}

三、html文件中标记
  <ion-list #one>
  <ion-list #two>
  <ion-list #three >

四、对页面的滑动进行监听
    ionViewDidLoad() {
        this.content.ionScroll.subscribe(($event: any) => {
            this.ngzone.run(() => {//如果在页面滑动过程中对数据进行修改，页面是不会重构的。所以在对应的操作中需要使用如下方法，使页面能够重构。
                $event.scrollTop;//当前滑动的距离
                this.stickone.nativeElement//获取html中标记为one的元素
                this.sticktwo.nativeElement//获取html中标记为two的元素
                this.stickthree.nativeElement//获取html中标记为three的元素
            })
        })
    }

五、注意：参考网址: https://www.jianshu.com/p/850237397360
```

