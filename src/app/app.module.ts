import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ButtonComponent } from './partials/button/button.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CollaborateComponent } from './pages/collaborate/collaborate.component';
import { EventsComponent } from './pages/events/events.component';
import { RoundtablesComponent } from './pages/roundtables/roundtables.component';
import { AmreadingComponent } from './pages/amreading/amreading.component';
import { ArticleComponent } from './pages/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    BlogsComponent,
    CollaborateComponent,
    EventsComponent,
    RoundtablesComponent,
    AmreadingComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
