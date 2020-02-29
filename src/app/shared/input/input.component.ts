import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    @Input() label: string;
    @Input() control: FormControl;

    constructor() {
    }

    ngOnInit() {
    }

    showErrors() {
        console.log(this.control);
        const { dirty, touched, errors } = this.control;
        return dirty && touched && errors;
    }
}
