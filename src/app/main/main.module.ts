import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HoomeComponent } from '@src/app/main/hoome/hoome.component';
import { MainRoutingModule } from '@src/app/main/main-routing.module';



@NgModule({
	declarations: [HoomeComponent],
	imports: [
		CommonModule,
		MainRoutingModule,
	],
	providers: [],
	bootstrap: []
})
export class MainModule { }
