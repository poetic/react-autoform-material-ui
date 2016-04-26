import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'react-dom': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const ReactDOM = require('react-dom');
const { Checkbox } = require('material-ui');

AutoForm.addInputType("boolean-checkbox", {
  template: "afCheckbox_reactAutoformMaterialUi",
  valueOut: function () {
    return !!this.is(":checked");
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
  },
  contextAdjust: function (context) {
    if (context.value === true) {
      context.atts.checked = "";
    }
    //don't add required attribute to checkboxes because some browsers assume that to mean that it must be checked, which is not what we mean by "required"
    delete context.atts.required;
    return context;
  }
});
const CheckboxClass = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    const muiTheme = rmui.getComponentThemes();
    return {
      muiTheme,
    };
  },

  componenetDidMount() {
    this.onChange();
  },

  onChange() {
    const { checkbox, checkboxContainer } = this.refs;
    const checkboxNode = ReactDOM.findDOMNode(checkboxContainer);
    $(checkboxNode).val(checkbox.isChecked());
  },

  render() {
    const {
      label,
      err,
      id,
      dsk,
      value,
    } = this.props.atts;
    return (
      <div
        ref="checkboxContainer"
        data-schema-key={ dsk }
      >
        <Checkbox
          label={ label }
          ref="checkbox"
          errorText={ err }
          id={ id }
          defaultChecked={ value }
          onCheck={ this.onChange }
        />
      </div>
    );
  }
});
Template["afCheckbox_reactAutoformMaterialUi"].helpers({
  BooleanCheckbox() {
    return CheckboxClass;
  },
  atts() {
    const atts = new ReactAutoformUtility(this.atts);
    atts.value = this.value || atts.value;
    return atts;
  }
});

