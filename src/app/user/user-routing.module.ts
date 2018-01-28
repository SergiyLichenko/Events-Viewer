import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileGuardService } from './profile-guard.service';
import { ProfileCanDeactivateService } from './profile-can-deactivate.service';

const userRoutes: Routes = [
    {
        path: 'user',
        children: [
            { path: 'profile', component: ProfileComponent , canActivate: [ProfileGuardService], canDeactivate: [ProfileCanDeactivateService] },
            { path: 'login', component: LoginComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ]
})
export class UserRoutingModule {
}