Package.describe({
    name: 'smaltcreation:autoform-intl-tel-input',
    version: '1.0.0',
    summary: 'International telephone input for autoform'
});

Npm.depends({
    'intl-tel-input': '6.0.6'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');

    // Packages
    api.use([
        'underscore',
        'templating',
        'aldeed:autoform@5.3.2'
    ], 'client');

    // Files
    api.addFiles([
        // Lib
        '.npm/package/node_modules/intl-tel-input/build/img/flags.png',
        '.npm/package/node_modules/intl-tel-input/build/img/flags@2x.png',
        '.npm/package/node_modules/intl-tel-input/build/css/intlTelInput.css',
        '.npm/package/node_modules/intl-tel-input/build/js/intlTelInput.min.js',
        '.npm/package/node_modules/intl-tel-input/lib/libphonenumber/build/utils.js',
        // Input
        'autoform-intl-tel-input.html',
        'autoform-intl-tel-input.js'
    ], 'client');
});
