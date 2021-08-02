import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { POSComponent } from './pos.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path:"",component:POSComponent},
  { path:"tables",component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class POSRoutingModule { }
