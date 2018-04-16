import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CdkTableModule} from '@angular/cdk/table';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {MenuComponent} from './components/menu/menu.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ROUTES} from '../config/routes';
import {UsersComponent} from './pages/users/users.component';
import {HashLocationStrategy} from '@angular/common';
import {SideNavMenuModule} from 'mat-sidenav-menu';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';

const config: SocketIoConfig = {
    url: 'http://localhost:3000',
    options: {}
};

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        DashboardComponent,
        UsersComponent,
        EditUserComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        CdkTableModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        SideNavMenuModule,
        RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: HashLocationStrategy}),
        SocketIoModule.forRoot(config)
    ],
    providers: [HashLocationStrategy],
    bootstrap: [AppComponent]
})
export class AppModule {
}
