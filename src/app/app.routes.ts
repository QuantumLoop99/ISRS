import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'application', component: ApplicationFormComponent },
    {path: 'signup', component: SignupComponent, title: 'Sign Up'},
    {path: 'signin', component: SigninComponent, title: 'Sign In'},
    { path: '', redirectTo: '/home', pathMatch: 'full' } 

];
