Package.describe({
    name: 'smaltcreation:autoform-intl-tel-input',
    version: '2.0.0',
    summary: 'International telephone input for autoform'
});

Npm.depends({
    'intl-tel-input': '12.1.9'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');

    // Packages
    api.use([
        'underscore',
        'templating',
        'aldeed:autoform'
    ], 'client');


    // Files
    api.addFiles([
        // Input
        'autoform-intl-tel-input.html',
        'autoform-intl-tel-input.js',

        // Plugin files
        '.npm/package/node_modules/intl-tel-input/build/css/intlTelInput.css',
        '.npm/package/node_modules/intl-tel-input/build/js/intlTelInput.min.js'
    ], 'client');

    // Lib
    api.addAssets([
        '.npm/package/node_modules/intl-tel-input/build/img/flags.png',
        '.npm/package/node_modules/intl-tel-input/build/img/flags@2x.png',
        '.npm/package/node_modules/intl-tel-input/build/js/utils.js'
    ], 'client');
});
