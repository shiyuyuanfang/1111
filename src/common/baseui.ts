//本文件为共用组件类库
//共用组件类包括：
//           showLoading    加载中...  登录中...
//           showToast      动态提示弹出框...


//引入Loading, LoadingController组件
import { Loading, LoadingController,ToastController,Toast } from 'ionic-angular';


export abstract class BaseUI{
  constructor(){}  // 默认有一个constructor(){}为空

  //自己书写一个 protected 方法为 showLoading 显示正在加载弹出框
  protected  showLoading(loadingCtrl:LoadingController, message:string):Loading{
    let loader = loadingCtrl.create({
      content: message, // 加载时显示的文字 接收传进来的参数
      dismissOnPageChange:true // 当页面发生改变的时候自动dismiss掉弹出框
    });
    loader.present();
    return loader;
  }

  //自己书写一个 protected 方法为 showToast 显示正在登录失败弹出框
  protected  showToast(toastCtrl:ToastController, message:string):Toast{
    let toast = toastCtrl.create({
      message: message, // 显示的文字 接收传进来的参数
      duration: 3000, //显示时间为三秒钟
      position: 'top' //弹出框显示位置
    });
    toast.present();
    return toast;
  }
}
