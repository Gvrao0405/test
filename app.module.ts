import { SpaceXService } from './service/space-x.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceXComponent } from './space-x/space-x.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceXComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [SpaceXService],
  bootstrap: [AppComponent]
})
export class AppModule { }
