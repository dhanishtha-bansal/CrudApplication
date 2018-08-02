import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';

imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
]

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
