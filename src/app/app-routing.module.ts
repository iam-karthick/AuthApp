import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EvantsComponent } from './evants/evants.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { 
    path: '', 
    component:  LoginComponent
  },
  { 
    path: 'register',
    component:  RegisterComponent
  },
  { 
    path: 'evants', 
    component:  EvantsComponent,
    canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule {

}