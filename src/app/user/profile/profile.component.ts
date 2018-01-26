import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IToastr, TOASTR_TOKEN } from '../../common/toastr.service';
import { AuthService } from '../shared/auth.service';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
    public profileForm: FormGroup;

    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private authService: AuthService,
                @Inject(TOASTR_TOKEN) private toastr: IToastr,
                private router: Router) { }

    public ngOnInit(): void {
        if (!this.authService.currentUser)
            this.router.navigate(['user/login']);

        this.firstName = new FormControl(
            this.authService.currentUser.firstName,
            [Validators.required,
            Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(
            this.authService.currentUser.lastName,
            Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
        });
    }

    public cancel() {
        this.router.navigate(['events']);
    }

    public saveProfile(profileForm) {
        if (profileForm.invalid) return;

        this.authService.updateCurrentUser(
            profileForm.firstName,
            profileForm.lastName)
            .subscribe((x) => this.toastr.success('Profile saved!'));
    }

    public validateFirstName() {
        return this.firstName.valid ||
            this.firstName.untouched;
    }

    public validateLastName() {
        return this.lastName.valid ||
            this.lastName.untouched;
    }

    public onLogout() {
        this.authService.logoutUser().subscribe((x)=> {
            this.router.navigate(['/user/login']);
        });
    }
}
