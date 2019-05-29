import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'admin',
      loadChildren: './modules/admin/admin.module#AdminModule',
      canActivate: [AuthGuard]
    }, {
      path: 'login',
      component: LoginComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
