Package.describe({
  name: 'poetic:react-autoform-material-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  
  api.use([
    'react',
    'react-template-helper',
    'poetic:react-material-ui',
    'templating',
    'underscore',
    'aldeed:autoform@4.0.0 || 5.0.0',
    'aldeed:collection2'
  ],'client');

  api.addFiles([
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
    'inputTypes/date/date.html',
    'inputTypes/date/date.jsx',
    'inputTypes/email/email.html',
    'inputTypes/email/email.jsx',
    'inputTypes/file/file.html',
    'inputTypes/file/file.jsx',
    'inputTypes/password/password.html',
    'inputTypes/password/password.jsx',
    'inputTypes/radio/radio.html',
    'inputTypes/radio/radio.jsx',
    'inputTypes/reset/reset.html',
    'inputTypes/reset/reset.jsx',
    'inputTypes/select/select.html',
    'inputTypes/select/select.jsx',
    'inputTypes/select-multiple/select-multiple.html',
    'inputTypes/select-multiple/select-multiple.jsx',
    'inputTypes/button/button.html',
    'inputTypes/button/button.jsx',
    'inputTypes/text/text.html',
    'inputTypes/text/text.jsx',
    'inputTypes/textarea/textarea.html',
    'inputTypes/textarea/textarea.jsx',
    'inputTypes/submit/submit.html',
    'inputTypes/submit/submit.jsx',
    'inputTypes/time/time.html',
    'inputTypes/time/time.jsx',
    'react-autoform-material-ui.jsx'
    ],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('react-autoform-material-ui');
  api.addFiles('react-autoform-material-ui-tests.js');
});
