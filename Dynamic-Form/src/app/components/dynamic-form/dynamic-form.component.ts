import {Component, inject, Input} from '@angular/core';
import {FormInterface} from "../../interface/form.interface";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  @Input() form!:FormInterface;
  private _fb=inject(FormBuilder);
}
