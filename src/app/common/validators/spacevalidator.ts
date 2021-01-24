import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { rejects } from 'assert';

export class SpaceValidator {
    static cannotContainSpace(control: AbstractControl) {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'cdk') {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
