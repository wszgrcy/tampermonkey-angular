import { Component, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  /**用于传入油猴的跨域请求方法使用 */
  @Input() gmHttp;
  title = '自定义元素初始化';
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
    // doc 当改变的值需要显示时,请启用强制变更检测
    // cd.detectChanges()
  }
  ngOnInit(): void {
    console.log(this.gmHttp);
    console.log(unsafeWindow);
    console.log(window);

  }

}
