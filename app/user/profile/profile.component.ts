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

    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private _authService: AuthService,
        private _router: Router) { }

    ngOnInit(): void {
        if (!this._authService.currentUser)
            this._router.navigate(["user/login"]);
            
        this.firstName = new FormControl(
            this._authService.currentUser.firstName,
            [Validators.required,
            Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(
            this._authService.currentUser.lastName,
            Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
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
        return this.firstName.valid ||
            this.firstName.untouched;
    }

    validateLastName() {
        return this.lastName.valid ||
            this.lastName.untouched;
    }
}