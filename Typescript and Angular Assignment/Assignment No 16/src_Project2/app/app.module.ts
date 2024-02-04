import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAddPipe } from './my-add.pipe';
import { MyMulPipe } from './my-mul.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyAddPipe,
    MyMulPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
