import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box/info-box.component';
import { WarningBoxComponent } from './warning-box/warning-box.component';
import { ButtonComponent } from './button/button.component';
//import { CardComponent } from './card/card.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    InfoBoxComponent,
    WarningBoxComponent,
    ButtonComponent,
    //CardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    InfoBoxComponent,
    WarningBoxComponent,
    ButtonComponent,
    //CardComponent
  ]
})
export class SharedModule { }
