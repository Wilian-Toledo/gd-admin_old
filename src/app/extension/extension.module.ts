import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtensionCreateComponent } from './extension-create/extension-create.component';
import { ExtensionListComponent } from './extension-list/extension-list.component';
import { ExtensionDetailComponent } from './extension-detail/extension-detail.component';
import { ExtensionService } from './extension.service';
import { ExtensionComponent } from './extension.component';
import { ExtensionRoutingModule } from './extension.routing';
import { FormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { PipesModule } from '../shared/pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';

export let options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    ExtensionCreateComponent, 
    ExtensionComponent,
    ExtensionListComponent, 
    ExtensionDetailComponent
  ],
  imports: [
    CommonModule,
    ExtensionRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
  ],
  providers: [
    ExtensionService
  ]
})
export class ExtensionModule { }
