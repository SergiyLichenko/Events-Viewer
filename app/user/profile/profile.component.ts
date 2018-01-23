import { Component, Inject } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../shared/auth.service";
import { Router } from "@angular/router";
import { TOASTR_TOKEN, IToastr } from "../../common/toastr.service";


@Component({
    templateUrl: "app/user/profile/profile.component.html",
    styleUrls: ["app/user/profile/profile.component.css"]
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;

    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private authService: AuthService,
        @Inject(TOASTR_TOKEN) private toastr: IToastr,
        private router: Router) { }

    ngOnInit(): void {
        if (!this.authService.currentUser)
            this.router.navigate(["user/login"]);

        this.firstName = new FormControl(
            this.authService.currentUser.firstName,
            [Validators.required,
            Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(
            this.authService.currentUser.lastName,
            Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    cancel() {
        this.router.navigate(["events"]);
    }

    saveProfile(profileForm) {
        if (profileForm.invalid) return;

        this.authService.updateCurrentUser(
            profileForm.firstName,
            profileForm.lastName);
        this.toastr.success("Profile saved!");
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