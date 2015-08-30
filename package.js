Package.describe({
    name: 'poetic:react-autoform-material-ui',
    version: '0.0.3',
    // Brief, one-line summary of the package.
    summary: 'Render your Autoform, using Material-UI components',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/poetic/react-autoform-material-ui',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'react@0.1.7',
        'react-template-helper@0.1.2',
        'poetic:react-material-ui@0.0.2',
        'templating@1.1.1',
        'underscore@1.0.3',
        'bigdsk:inputmask@3.1.63',
        'aldeed:autoform@5.3.1',
        'aldeed:collection2@2.3.3'
    ], 'client');
    api.imply([
      'poetic:react-material-ui',
      'bigdsk:inputmask',
      'react'
      ]);
    api.addFiles([
         //Load Lib Files
        'lib/utility.jsx',
        'lib/errors.jsx',

        //Load components here
        'components/quickform/quickform.html',
        'components/quickform/quickform.jsx',
        'components/afFormGroup/afFormGroup.html',
        'components/afFormGroup/afFormGroup.jsx',

        //Load custom input types here
        'inputTypes/boolean-checkbox/boolean-checkbox.html',
        'inputTypes/boolean-checkbox/boolean-checkbox.jsx',
        'inputTypes/boolean-radios/boolean-radios.html',
        'inputTypes/boolean-radios/boolean-radios.jsx',
        'inputTypes/button/button.html',
        'inputTypes/button/button.jsx',
        'inputTypes/checkbox/checkbox.html',
        'inputTypes/checkbox/checkbox.jsx',
        'inputTypes/contenteditable/contenteditable.html',
        'inputTypes/contenteditable/contenteditable.jsx',
        'inputTypes/date/date.html',
        'inputTypes/date/date.jsx',
        'inputTypes/email/email.html',
        'inputTypes/email/email.jsx',
        'inputTypes/file/file.html',
        'inputTypes/file/file.jsx',
        'inputTypes/number/number.html',
        'inputTypes/number/number.jsx',
        'inputTypes/password/password.html',
        'inputTypes/password/password.jsx',
        'inputTypes/radio/radio.html',
        'inputTypes/radio/radio.jsx',
        'inputTypes/range/range.html',
        'inputTypes/range/range.jsx',
        'inputTypes/reset/reset.html',
        'inputTypes/reset/reset.jsx',
        'inputTypes/select/select.html',
        'inputTypes/select/select.jsx',
        'inputTypes/tel/tel.html',
        'inputTypes/tel/tel.jsx',
        'inputTypes/select-radio/select-radio.html',
        'inputTypes/select-radio/select-radio.jsx',
        'inputTypes/text/text.html',
        'inputTypes/text/text.jsx',
        'inputTypes/textarea/textarea.html',
        'inputTypes/textarea/textarea.jsx',
        'inputTypes/submit/submit.html',
        'inputTypes/submit/submit.jsx',
        'inputTypes/time/time.html',
        'inputTypes/time/time.jsx',
        'react-autoform-material-ui.jsx'
    ], 'client');
});
