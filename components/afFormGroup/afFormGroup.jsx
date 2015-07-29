Template["afFormGroup_reactAutoformMaterialUi"].helpers({
    addInputField() {
        var result, skipInputType, type;
        skipInputType = [
            'checkbox',
            'checkbox-group',
            'boolean-checkbox',
            'select-radio',
            'select-checkbox-inline',
            'select-radio-inline',
            'boolean-radios',
            'toggle',
            'switch'
        ];
        type = AutoForm.getInputType(this);
        result = !_.contains(skipInputType, type);
        return result;
    },
    skipLabel() {
        var result, skipLabelTypes, type;
        skipLabelTypes = [
            'checkbox',
            'checkbox-group',
            'boolean-checkbox',
            'select-radio',
            'select-checkbox-inline',
            'select-radio-inline',
            'boolean-radio',
            'toggle',
            'switch'
        ];
        type = AutoForm.getInputType(this);
        result = this.skipLabel || _.contains(skipLabelTypes, type);
        return result;
    },
    atts() {
        let atts = this;
        return atts;
    }
});