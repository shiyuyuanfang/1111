import { Component, ViewChild,NgZone } from '@angular/core'; // 引入 ViewChild NgZone 模块，为实现监听屏幕滚动
import { IonicPage, NavController, NavParams,Content} from 'ionic-angular';// 引入 Content 模块，为实现监听屏幕滚动

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage{

  @ViewChild(Content) content: Content;
  @ViewChild('one') stickone;  //在 html 页面中 的某个标签中 写上 “ #one ”

  public pageList = ["原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址","原文网址",];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ngzone: NgZone //声明 NgZone 该模块
              ) {


  }

  //声明周期函数  当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发
  ionViewDidLoad() {
    this.content.ionScroll.subscribe(($event: any) => {
      this.ngzone.run(() => {//如果在页面滑动过程中对数据进行修改，页面是不会重构的。所以在对应的操作中需要使用如下方法，使页面能够重构。
        $event.scrollTop;//当前滑动的距离
        console.log($event.scrollTop);
        this.stickone.nativeElement//获取html中标记为one的元素
        console.log(this.stickone.nativeElement)
      })
    })
  }







}
