import { Directive } from "@angular/core";
import { Validator, FormGroup, NG_VALIDATORS } from "@angular/forms";


@Directive({
    selector: '[location-validator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: LocationValidator,
        multi: true
    }]
})
export class LocationValidator implements Validator {

    validate(formGroup: FormGroup): { [key: string]: any } {
        const address = formGroup.controls['address'];
        const city = formGroup.controls['city'];
        const country = formGroup.controls['country'];
        const onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if ((address && address.value && city && city.value && country && country.value)
            || (onlineUrl && onlineUrl.value))
            return null;
        return { validateLocation: false };
    }

}