import { Routes } from '@angular/router';
import { HoomeComponent } from './hoome/hoome.component';


export const routes: Routes = [
	{ path: '', redirectTo: 'hoome', pathMatch: 'full' },
	{ path: 'hoome', component: HoomeComponent }
];
