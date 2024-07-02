export interface FormInterface{
  "title":string;
  "primaryBtn":string;
  "secondaryBtn":string;
  "formControl":formControlInterface[];
}
interface formControlInterface {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  class: string;
  type: string;
  radioOptions:string[]
  options:optionInterface[];
  validators: validatorInterface[];
}

interface validatorInterface {
  validatorName?: string;
  required?: boolean;
  minlength?:boolean;
  maxlength?:boolean;
  pattern?:boolean;
  message?: string;
}
interface  optionInterface{
  id?:number,
  value?:string
}
