import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: Http) {
    // console.log('Hello StorageProvider Provider');
  }


  //localStorage 公共方法

  //缓存数据
  set(key,value){
    // JSON.stringify  序列化 将对象转化为字符串
    localStorage.setItem(key,JSON.stringify(value));
  }

  //取到缓存数据
  get(key){
    // JSON.parse  反序列化 将字符串转化对象
    return JSON.parse(localStorage.getItem(key));
  }

  //移除缓存数据
  remove(key){
    localStorage.removeItem(key);
  }

}
