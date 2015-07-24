AutoForm.addInputType("range", {
  template: "afInputRange_reactAutoformMaterialUi",
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
  }
});

const { Slider } = mui;
const Range = React.createClass({

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
      <div>
      <Slider name={this.props.atts.name} value={this.props.atts.value} max={this.props.atts.max} min={this.props.atts.min} />
      </div>
    );
  }
});

Template["afInputRange_reactAutoformMaterialUi"].helpers({
  atts: function(){

    let atts = this.atts;
    atts.min =  /[0-9]i/.test(this.min) ? this.min : 0;
    atts.max =  /[0-9]i/.test(this.max) ? this.max : 100;
    atts.value = /[0-9]i/.test(this.value) ? this.value: 50;
    return atts;
  },
  Range: function(){

    return Range;
  }
})