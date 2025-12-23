import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { serverCpn } from './server/server.cpn';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent
    ,serverCpn
  ],
  imports: [
    BrowserModule,
    FormsModule
    ,CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
