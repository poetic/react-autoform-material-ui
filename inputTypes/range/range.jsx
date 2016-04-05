import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'react-dom': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const ReactDOM = require('react-dom');
const { Slider } = require('material-ui');

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

const Range = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getInitialState() {
    return ({
      trackValue:this.props.atts.value
    })
  },
  componentDidMount(){
    let defaultValue = this.props.atts.value
    this._getValue(null, defaultValue)

    let rmuiRange = this.refs.rmuiRange
    let handleStyle = rmuiRange.getStyles().handle



  },
  _getValue(event, value) {
    let domNode = ReactDOM.findDOMNode(this);
    $(domNode).val(value)

    let trackerHandle = $(domNode).find('.react-draggable')[0]
    let trackValue = Math.round(value)

  },
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div className='rmuiRange' data-schema-key={this.props.atts.dsk}>
        <Slider defaultValue={this.props.atts.value}
          value={this.props.atts.value}
          max={this.props.atts.max} min={this.props.atts.min}
          error={Session.get(this.props.atts.err)}
          id={this.props.atts.id} name='rmuiRange'
          onChange={this._getValue}
          ref='rmuiRange'
          >
        </Slider>
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
