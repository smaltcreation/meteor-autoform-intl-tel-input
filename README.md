# meteor-autoform-intl-tel-input
International phone input for autoform package.
*@See [Bluefieldscom/intl-tel-input](https://github.com/Bluefieldscom/intl-tel-input) jQuery plugin.*
``` console
meteor add smaltcreation:autoform-intl-tel-input
```

## Usage
In your `SimpleSchema` object, `autoform` has to be type of `'intl-tel'`:
``` javascript
  phone: {
      type: String,
      autoform: {
          type: 'intl-tel',
          class: 'form-control',
          intlTelOptions: {
              autoFormat: true,
              defaultCountry: 'FR',
              utilsScript: 'lib/libphonenumber/build/utils.js'
          }
      }
  }
```
* **type**: `'intl-tel'`
* **class**: `'form-control'`
* **intlTelOptions**: *@See [intl-tel-input options](https://github.com/Bluefieldscom/intl-tel-input#options)*

## Style
If you want the `vertical-form` style of bootstrap, add in your `.css` file:
``` css
.intl-tel-input {
    width: 100%;
}
```
