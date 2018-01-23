import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { GetDataService } from './services/get-data.service';
import { GetDataFromConstructorComponent } from './get-data-from-constructor/get-data-from-constructor.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildComponent } from './view-child/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GetDataFromConstructorComponent,
    LifecycleHooksComponent,
    ViewChildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
