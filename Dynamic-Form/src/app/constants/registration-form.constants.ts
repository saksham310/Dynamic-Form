export const registerFormConfig = {
  formTitle: "Registration",
  saveBtn: "Register",
  cancelBtn: "Cancel",
  formControls: [
    {
      "name": "firstName",
      "label": "First Name",
      "placeholder": "Enter your Name",
      "value": "",
      "class": "col-md-6",
      "type": "text",
      "validators": [
        {
          "validatorName": "required",
          "required": true,
          "message": "first name is required"
        }
      ]
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "placeholder": "Enter your Name",
      "value": "",
      "class": "col-md-6",
      "type": "text",
      "validators": [
        {
          "validatorName": "required",
          "required": true,
          "message": "Last name is required"
        }
      ]
    },
    {
      "name": "email",
      "label": "Email",
      "placeholder": "Enter your email",
      "value": "",
      "class": "col-md-6",
      "type": "email",
      "validators": [
        {
          "validatorName": "required",
          "required": true,
          "message": "email is required"
        },
        {
          "validatorName": "email",
          "email": true,
          "message": "email is not valid"
        }
      ]
    },
    {
      "name": "gender",
      "label": "Gender",
      "placeholder": "Choose your gender",
      "radioOptions": [
        "Male",
        "Female"
      ],
      "class": "col-md-6",
      "type": "radio",
      "validators": [
        {
          "validatorName": "required",
          "required": true,
          "message": "Selection is required"
        }
      ]
    },
    {
      "name": "role",
      "label": "Role",
      "placeholder": "Choose your role",
      "options": [
        {
          "id": 1,
          "value": "Cook"
        },
        {
          "id": 2,
          "value": "Planner"
        },
        {
          "id": 3,
          "value": "Enthusiast"
        }
      ],
      "class": "col-md-6",
      "type": "select",
      "validators": [
        {
          "validatorName": "required",
          "required": true,
          "message": "Selection is required"
        }
      ]
    }
  ]
}
