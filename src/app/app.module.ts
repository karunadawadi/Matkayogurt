import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/sharepage/navbar/navbar.component';
import { FooterComponent } from './components/sharepage/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { VideoComponent } from './components/home/video/video.component';
import { CoverpageComponent } from './components/home/coverpage/coverpage.component';
import { FormComponent } from './components/form/form.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  imports:[
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    VideoComponent,
    CoverpageComponent,
    FormComponent
  ],
  providers: [{
    provide: LocationStrategy, 
    useClass: PathLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
