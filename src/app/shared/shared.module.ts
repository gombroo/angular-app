import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { WarningBoxComponent } from './warning-box/warning-box.component';

@NgModule({
  declarations: [
    InfoBoxComponent,
    WarningBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoBoxComponent,
    WarningBoxComponent
  ]
})
export class SharedModule { }
