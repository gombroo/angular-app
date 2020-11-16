import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';


@NgModule({
  declarations: [MusicComponent],
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule
  ]
})
export class MusicModule { }
