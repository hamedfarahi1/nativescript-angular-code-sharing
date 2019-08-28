import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HoomeComponent } from '@src/app/main/hoome/hoome.component';
import { MainRoutingModule } from '@src/app/main/main-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';



@NgModule({
	declarations: [HoomeComponent],
	imports: [
		NativeScriptCommonModule,
		MainRoutingModule
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class MainModule { }
