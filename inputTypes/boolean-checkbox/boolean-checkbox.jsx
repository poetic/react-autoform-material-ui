import React from 'react';
import { Checkbox } from 'material-ui' ;

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

  getChildContext: function() {
    const muiTheme = rmui.getComponentThemes();
    return {
      muiTheme,
    };
  },

  render: function() {
    return (
      <div>
      <Checkbox label={this.props.atts.label}
       errorText={this.props.atts.err} id={this.props.atts.id} data-schema-key={this.props.atts.dsk}/>
      </div>
    );
  }
});
Template["afCheckbox_reactAutoformMaterialUi"].helpers({
  BooleanCheckbox: function(){
    return CheckboxClass;
  },
  atts: function(){
        let atts = new reactUtility(this.atts);
    return atts;
  }
})

