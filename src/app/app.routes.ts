import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './component/service/auth.guard';
import { HomeNavbarComponent } from './component/home-navbar/home-navbar.component';
import { MainComponent } from './component/main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './component/about/about.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'layout',
        component: LayoutComponent,
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        children: [
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            },
            {
                path: 'main',
                component: MainComponent
            },
            {
                path: 'homeco',
                component: HomeNavbarComponent,
            }, {
                path: 'about',
                component: AboutComponent
            }
        ]
    }
];