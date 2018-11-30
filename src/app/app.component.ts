import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  /**用于传入油猴的跨域请求方法使用 */
  @Input() gmHttp
  title = '自定义元素初始化';
  constructor() {

  }
  ngOnInit(): void {
    console.log(this.gmHttp)
    console.log(unsafeWindow)
    console.log(window)
  }
}
