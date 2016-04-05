import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const { RadioButtonGroup,RadioButton } = require('material-ui');

AutoForm.addInputType("boolean-radios", {
  template: "afBooleanRadioGroup_reactAutoformMaterialUi",
  valueOut: function () {
    if (this.find('input[value=false]').is(":checked")) {
      return false;
    } else if (this.find('input[value=true]').is(":checked")) {
      return true;
    }
  },
  valueConverters: {
    "string": function (val) {
      if (val === true) {
        return "TRUE";
      } else if (val === false) {
        return "FALSE";
      }
      return val;
    },
    "stringArray": function (val) {
      if (val === true) {
        return ["TRUE"];
      } else if (val === false) {
        return ["FALSE"];
      }
      return val;
    },
    "number": function (val) {
      if (val === true) {
        return 1;
      } else if (val === false) {
        return 0;
      }
      return val;
    },
    "numberArray": function (val) {
      if (val === true) {
        return [1];
      } else if (val === false) {
        return [0];
      }
      return val;
    }
  }
});
const RadioButtonGroupClass = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
   
      <RadioButtonGroup errorText={this.props.atts.err} id={this.props.atts.id} name={this.props.atts.id} data-schema-key={this.props.atts.dsk} >
        <RadioButton
            value={true}
            label={this.props.atts.trueLabel} />
        <RadioButton
          value={false}
          label={this.props.atts.falseLabel}/>
       </RadioButtonGroup>
     
    );
  }
});
Template["afBooleanRadioGroup_reactAutoformMaterialUi"].helpers({

  BooleanRadios(){
    return RadioButtonGroupClass;
  },
  atts() {
    let atts = new ReactAutoformUtility(this.atts);

    //Check atts object for label values, if not default to True or False
 
    atts.trueLabel = (this.atts.trueLabel == undefined || null) ? "True" : this.atts.trueLabel;
    atts.falseLabel = (this.atts.falseLabel == undefined || null) ? "False" : this.atts.falseLabel;

    return atts;
  }
});
