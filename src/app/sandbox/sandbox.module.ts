import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';


@NgModule({
  declarations: [SandboxComponent, ChildComponent, ParentComponent],
  imports: [
    CommonModule,
    SandboxRoutingModule,
    SharedModule
  ]
})
export class SandboxModule { }
