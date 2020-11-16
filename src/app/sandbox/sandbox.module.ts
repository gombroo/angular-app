import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';


@NgModule({
  declarations: [SandboxComponent],
  imports: [
    CommonModule,
    SandboxRoutingModule,
    SharedModule
  ]
})
export class SandboxModule { }
