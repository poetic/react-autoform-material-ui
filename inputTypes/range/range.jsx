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
  getInitialState() {
    return ({
      trackValue:this.props.atts.value
    })
  },
  _getValue(event, value) {
    let domNode = React.findDOMNode(this);
    $(domNode).val(value)

    let trackerHandle = $(domNode).find('.react-draggable')[0]
    let trackValue = Math.round(value)

    $(trackerHandle).text(trackValue)

  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div className='rmuiRange' data-schema-key={this.props.atts.dsk}>
        <Slider value={this.props.atts.value} max={this.props.atts.max} min={this.props.atts.min}
          error={Session.get(this.props.atts.err)}
          id={this.props.atts.id} name={this.props.atts.id}
          onChange={this._getValue}
        />
      </div>
    );
  }
});

Template.afInputRange_reactAutoformMaterialUi.helpers({
  atts(){

    let atts = new ReactAutoformUtility(this.atts);
    atts.min =  _.isNumber(this.min) ? this.min : 0;
    atts.max =  _.isNumber(this.max) ? this.max : 100;
    atts.value = _.isNumber(this.value) ? this.value: 0;
    return atts;
  },
  Range(){

    return Range;
  }
})
