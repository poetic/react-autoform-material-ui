import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const { TextField } = require('material-ui');

AutoForm.addInputType("text", {
  template: "afInputText_reactAutoformMaterialUi",
  valueOut: function () {
    return this.val();
  },
  valueConverters: {
    "stringArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          return $.trim(item);
        });
      }
      return val;
    },
    "number": AutoForm.Utility.stringToNumber,
    "numberArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToNumber(item);
        });
      }
      return val;
    },
    "boolean": AutoForm.Utility.stringToBool,
    "booleanArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToBool(item);
        });
      }
      return val;
    },
    "date": AutoForm.Utility.stringToDate,
    "dateArray": function (val) {
      if (typeof val === "string") {
        val = val.split(",");
        return _.map(val, function (item) {
          item = $.trim(item);
          return AutoForm.Utility.stringToDate(item);
        });
      }
      return val;
    }
  },
  contextAdjust: function (context) {
    if (typeof context.atts.maxlength === "undefined" && typeof context.max === "number") {
      context.atts.maxlength = context.max;
    }
    context.atts.value = context.value;
    return context;
  }
});

const TextFieldClass = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    const muiTheme = rmui.getComponentThemes();
    return {
      muiTheme,
    };
  },
  render: function() {
    return (
      <TextField
        floatingLabelText={this.props.atts.label}
        defaultValue={this.props.atts.value}
        fullWidth={true}
        errorText={this.props.atts.err}
        errorStyle={this.props.atts.errorStyle}
        id={this.props.atts.id}
        data-schema-key={this.props.atts.dsk}
      />
    );
  }
});
Template['afInputText_reactAutoformMaterialUi'].helpers({
  TextField(){
    return TextFieldClass;
  },
  atts() {
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
  }
});
