import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearaingComponent } from './learaing/learaing.component';

const routes: Routes = [
  { path: 'learn', component: LearaingComponent },
  {
    path:"auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
