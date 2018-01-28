import { CanDeactivate } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


export class ProfileCanDeactivateService implements CanDeactivate<ProfileComponent> {
    canDeactivate(component: ProfileComponent): boolean {
        if (component.isDirty())
            return window.confirm('You have not saved changes, do you really want to cancel?');

        return true;
    }
}