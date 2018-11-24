import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const custNgElement = createCustomElement(AppComponent, { injector })
    customElements.define('custom-root', custNgElement);
    console.log('构造', document)
    //doc 直接导入可以,在油猴中导入也可以
    // window.onload = () => {
    //   let ele = document.createElement('custom-root');
    //   console.log(ele)
    //   document.body.appendChild(ele)
    // }
  }
  ngDoBootstrap() {
    console.log('开始启动')
  }
}
