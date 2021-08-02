import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main.component";



const routes: Routes = [

  { path:'',component:MainComponent,
  
    children:[
      { path:'',redirectTo:"dashbord",pathMatch:"full"},
      { path:'dashbord',loadChildren: ()=> import('./dashbord/dashbord.module').then(m=>m.DashbordModule)},
      { path:'users',loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
