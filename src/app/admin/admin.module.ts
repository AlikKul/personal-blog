import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateNewPostPageComponent } from './create-new-post-page/create-new-post-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/modules/shared.module';
import { EditPostPageComponent } from './edit-post-page/edit-post-page.component';
import { AuthGuard } from './shared/services/auth.guard';
import { NotificationComponent } from './shared/components/notification/notification.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    CreateNewPostPageComponent,
    DashboardComponent,
    EditPostPageComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: 'login', component: LoginPageComponent},
          {path: 'newpost', component: CreateNewPostPageComponent, canActivate: [AuthGuard]},
          {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
          {path: 'edit/:id', component: EditPostPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})

export class AdminModule {}
