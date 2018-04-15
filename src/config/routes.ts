import {Routes} from '@angular/router';
import {DashboardComponent} from '../app/pages/dashboard/dashboard.component';
import {UsersComponent} from '../app/pages/users/users.component';

export const ROUTES: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            text: 'Dashboard'
        }
    },
    {
        path: 'users',
        component: UsersComponent,
        data: {
            text: 'Users'
        }
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        data: {
            text: ''
        }
    }
];
