import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainLayoutComponent } from './shared/componets/main-layout/main-layout.component';
import { PostComponent } from './shared/componets/post/post.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreviewPipe } from './shared/pipes/preview.pipe';
import { PostPageComponent } from './post-page/post-page.component';
import { SharedModule } from './shared/modules/shared.module';
import { SearchPostPipe } from './shared/pipes/search-post.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainLayoutComponent,
    PostComponent,
    AboutPageComponent,
    PreviewPipe,
    PostPageComponent,
    SearchPostPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
