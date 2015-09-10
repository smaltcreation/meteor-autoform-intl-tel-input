AutoForm.addInputType('intl-tel', {
    template: 'afInputIntlTel',
    valueOut: function () {
        return this.intlTelInput('getNumber');
    }
});

Template.afInputIntlTel.helpers({
    attributes: function () {
        return _.omit(this.atts, 'intlTelOptions');
    }
});

Template.afInputIntlTel.onRendered(function () {
    this.$('input').intlTelInput(this.data.atts.intlTelOptions);
});

Template.afInputIntlTel.onDestroyed(function () {
    this.$('input').intlTelInput('destroy');
});
