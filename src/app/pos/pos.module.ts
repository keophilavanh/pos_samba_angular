import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { POSRoutingModule } from './pos-routing.module';
import { POSComponent } from '../pos/pos.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [POSComponent, TableComponent],
  imports: [
    CommonModule,
    POSRoutingModule
  ]
})
export class POSModule { }
