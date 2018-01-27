import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';

import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [
        LoginComponent,
        ProfileComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        UserRoutingModule],
    providers: [],
})
export class UserModule {

}
