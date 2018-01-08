import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";


@Component({
    templateUrl: "app/user/profile/profile.component.html",
    styleUrls: ["app/user/profile/profile.component.css"]
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;

    constructor(private _authService: AuthService,
        private _router: Router) { }

    ngOnInit(): void {
        if (!this._authService.currentUser)
            this._router.navigate(["user/login"]);
            
        let firstName = new FormControl(
            this._authService.currentUser.firstName,
            [Validators.required,
            Validators.pattern('[a-zA-Z].*')]);
        let lastName = new FormControl(
            this._authService.currentUser.lastName,
            Validators.required);

        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        });
    }

    cancel() {
        this._router.navigate(["events"]);
    }

    saveProfile(profileForm) {
        if (profileForm.invalid) return;

        this._authService.updateCurrentUser(
            profileForm.firstName,
            profileForm.lastName);
    }

    validateFirstName() {
        return this.profileForm.controls.firstName.valid ||
            this.profileForm.controls.firstName.untouched;
    }

    validateLastName() {
        return this.profileForm.controls.lastName.valid ||
            this.profileForm.controls.lastName.untouched;
    }
}