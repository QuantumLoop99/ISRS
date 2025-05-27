import { Routes } from '@angular/router';
import { AboutComponent } from './navigation/about/about.component';
import { ContactComponent } from './navigation/contact/contact.component';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

];

