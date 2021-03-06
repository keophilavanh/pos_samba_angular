import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:'',redirectTo:"auth",pathMatch:"full"},
  { path:'main', loadChildren: ()=> import('./main/main.module').then(m=> m.MainModule)},
  { path:'auth', loadChildren: ()=> import('./auth/auth.module').then(m=> m.AuthModule)},
  { path:'pos', loadChildren: ()=> import('./pos/pos.module').then(m=> m.POSModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
