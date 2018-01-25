import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
  
import { ProfileComponent } from './profile/profile.component';

import { userRoutes } from './user.routes';

@NgModule({
    declarations: [
        LoginComponent,
        ProfileComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(userRoutes)],
    providers: [],
})
export class UserModule {

}
