AutoForm.addInputType("range", {
  template: "afInputRange_reactAutoformMaterialUi",
  valueOut: function () {
    debugger;
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

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div>
      <Slider value={this.props.atts.value} max={this.props.atts.max} min={this.props.atts.min}
      error={Session.get(this.props.atts.err)} 
        id={this.props.atts.id} name={this.props.atts.id}
       data-schema-key={this.props.atts.dsk} />
      </div>
    );
  }
});

Template["afInputRange_reactAutoformMaterialUi"].helpers({
  atts(){

    let atts = new ReactAutoformUtility(this.atts);
    atts.min =  /[0-9]i/.test(this.min) ? this.min : 0;
    atts.max =  /[0-9]i/.test(this.max) ? this.max : 100;
    atts.value = /[0-9]i/.test(this.value) ? this.value: 0;
    return atts;
  },
  Range(){

    return Range;
  }
})