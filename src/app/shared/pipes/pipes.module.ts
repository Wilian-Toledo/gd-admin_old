import { ZipcodePipe } from './zipcode.pipe';
import { DocumentPipe } from './document.pipe';
import { PhonePipe } from './phone.pipe';
import { NgModule } from '@angular/core';
import { OrderByPipe } from './order-by.pipe';
import { AccountSearchPipe } from './account-search.pipe';

@NgModule({
    declarations: [
        ZipcodePipe,
        DocumentPipe,
        PhonePipe,
		OrderByPipe,
		AccountSearchPipe
    ],
    exports: [
        ZipcodePipe,
        DocumentPipe,
        PhonePipe,
		OrderByPipe,
		AccountSearchPipe
    ]
})
export class PipesModule { }
