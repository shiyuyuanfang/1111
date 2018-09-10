import { Injectable } from '@angular/core';
import { Http,Jsonp,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

//引入共用自定义config服务
import { ConfigProvider } from '../../providers/config/config';

/*
  Generated class for the HttpServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServicesProvider {
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(public config: ConfigProvider,
              public jsonp: Jsonp,
              public http: Http) {
    // console.log('Hello HttpServicesProvider Provider');
  }


  //请求数据的方法 异步请求需要callback返回
  requestData(apiUrl,callback){
    if(apiUrl.indexOf("?")==-1){
      var api = this.config.apiUrl + apiUrl +'?callback=JSONP_CALLBACK';
    }else{
      var api = this.config.apiUrl + apiUrl +'&callback=JSONP_CALLBACK';
    }
    this.jsonp.get(api).subscribe(function(data){
      callback(data['_body']); //将请求到的数据callback回去
    },function(err){
      console.log(err);
    })
  }


  //post提交数据方法
  doPost(apiUrl,json,callback){
    var api = this.config.apiUrl + apiUrl;
    this.http.post(api,JSON.stringify(json),{headers:this.headers}).subscribe(function(res){
      callback(res.json());
    })
  }




}
