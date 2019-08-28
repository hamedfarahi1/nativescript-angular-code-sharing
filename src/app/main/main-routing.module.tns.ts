import { NgModule } from '@angular/core';
import { routes } from '@src/app/main/main.routes';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class MainRoutingModule { }
