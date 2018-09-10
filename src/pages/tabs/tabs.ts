import { Component } from '@angular/core';

import { VideoPage } from '../video/video';             //视频根页面
import { ResourcesPage } from '../resources/resources'; //资源根页面
import { CirclePage } from '../circle/circle';          //圈子根页面
import { ArticlePage } from '../article/article';       //文章根页面
import { MinePage } from '../mine/mine';                //我的根页面

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  VideoPage = VideoPage;            //视频根页面
  ResourcesPage = ResourcesPage;    //资源根页面
  CirclePage = CirclePage;          //圈子根页面
  ArticlePage = ArticlePage;        //文章根页面
  MinePage = MinePage;              //我的根页面

  constructor() {

  }
}
