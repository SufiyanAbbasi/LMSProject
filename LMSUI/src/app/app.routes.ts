import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "**", component:PagenotfoundComponent}
];
