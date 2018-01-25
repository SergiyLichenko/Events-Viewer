import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[location-validator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: LocationValidator,
        multi: true,
    }],
})
export class LocationValidator implements Validator {

    public validate(formGroup: FormGroup): { [key: string]: any } {
        const address = (<any>formGroup.controls).address;
        const city = (<any>formGroup.controls).city;
        const country = (<any>formGroup.controls).country;
        const onlineUrl = (<any>(formGroup.root as FormGroup).controls).onlineUrl;

        if ((address && address.value && city && city.value && country && country.value)
            || (onlineUrl && onlineUrl.value))
            return null;
        return { validateLocation: false };
    }

}
