import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListComponent } from './cafeList/cafeList.component';

//librerias adicionales
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule} from 'primeng/image'
import { DialogModule } from 'primeng/dialog';
@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ImageModule
  ],
  exports: [CafeListComponent],
  declarations: [CafeListComponent]
})
export class CafeModule { }
