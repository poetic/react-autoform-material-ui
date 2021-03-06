import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const { RadioButton,RadioButtonGroup } = require('material-ui');

AutoForm.addInputType("radio", {
  template: "afRadio_reactAutoformMaterialUi",
  valueOut: function () {
    if (this.is(":checked")) {
      return this.val();
    }
  },
  valueConverters: {
    "stringArray": function (val) {
      if (typeof val === "string" && val.length > 0) {
        return [val];
      }
      return val;
    }
  }
});
const Radio = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <RadioButtonGroup id={this.props.atts.id} name={this.props.atts.id}
       data-schema-key={this.props.atts.dsk} >
        <RadioButton
            value={true}
            label={this.props.atts.name}/>
       </RadioButtonGroup>
    );
  }
});
Template["afRadio_reactAutoformMaterialUi"].helpers({
  atts() {
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
  },
  Radio(){
    return Radio;
  }
});
