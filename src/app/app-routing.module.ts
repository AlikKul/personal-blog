import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MainLayoutComponent } from './shared/componets/main-layout/main-layout.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PostPageComponent } from './post-page/post-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', component: HomePageComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'about', component: AboutPageComponent},
      {path: 'post/:id', component: PostPageComponent}
    ]
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
