AutoForm.addInputType("number", {
  template: "afInputNumber_reactAutoformMaterialUi",
  valueOut: function () {
    return AutoForm.Utility.stringToNumber(this.val());
  },
  valueConverters: {
    "string": function (val) {
      if (typeof val === "number") {
        return val.toString();
      }
      return val;
    },
    "stringArray": function (val) {
      if (typeof val === "number") {
        return [val.toString()];
      }
      return val;
    },
    "numberArray": function (val) {
      if (typeof val === "number") {
        return [val];
      }
      return val;
    },
    "boolean": function (val) {
      if (val === 0) {
        return false;
      } else if (val === 1) {
        return true;
      }
      return val;
    },
    "booleanArray": function (val) {
      if (val === 0) {
        return [false];
      } else if (val === 1) {
        return [true];
      }
      return val;
    }
  },
  contextAdjust: function (context) {
    if (typeof context.atts.max === "undefined" && typeof context.max === "number") {
      context.atts.max = context.max;
    }
    if (typeof context.atts.min === "undefined" && typeof context.min === "number") {
      context.atts.min = context.min;
    }
    if (typeof context.atts.step === "undefined" && context.decimal) {
      context.atts.step = '0.01';
    }
    return context;
  }
});

const { TextField } = mui;
const Number = React.createClass({

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
      <TextField floatingLabelText={this.props.atts.label} type="number"
       errorText={Session.get(this.props.atts.err)}
        id={this.props.atts.id} name={this.props.atts.id}
       data-schema-key={this.props.atts.dsk} />
    );
  }
});
Template['afInputNumber_reactAutoformMaterialUi'].helpers({
  Number: function(){
    return Number;
  },
  atts: function() {
    let atts = this.atts;
    return atts;
  }
});