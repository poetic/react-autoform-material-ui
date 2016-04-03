import React from 'react';
import { TextField } from 'material-ui';

AutoForm.addInputType("email", {
  template: "afInputEmail_reactAutoformMaterialUi",
  contextAdjust: function (context) {
    if (typeof context.atts.maxlength === "undefined" && typeof context.max === "number") {
      context.atts.maxlength = context.max;
    }
    context.atts.value = context.value;
    return context;
  },
  valueOut() {
    return this.val();
  }
});


const Email = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    const muiTheme = rmui.getComponentThemes();
    return {
      muiTheme 
    };
  },

  render: function() {
    return (

      <TextField
        floatingLabelText={this.props.atts.label}
        fullWidth={true}
        type="email"
        defaultValue={this.props.atts.value}
        errorText={this.props.atts.err}
        id={this.props.atts.id} name={this.props.atts.id}
        data-schema-key={this.props.atts.dsk} />

    );
  }
});

Template['afInputEmail_reactAutoformMaterialUi'].helpers({
  Email(){
    return Email;
  },
  atts() {
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
  }
});
