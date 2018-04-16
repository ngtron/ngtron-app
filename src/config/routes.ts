import {Routes} from '@angular/router';
import {DashboardComponent} from '../app/pages/dashboard/dashboard.component';
import {UsersComponent} from '../app/pages/users/users.component';
import {EditUserComponent} from '../app/pages/users/edit-user/edit-user.component';

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
        path: 'users/edit',
        component: EditUserComponent,
        data: {
            text: 'Create User'
        }
    },
    {
        path: 'users/edit/:id',
        component: EditUserComponent,
        data: {
            text: 'Edit User'
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
