import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'react-dom': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');


const React = require('react');
const ReactDOM = require('react-dom');
const { TimePicker } = require('material-ui');

AutoForm.addInputType("time", {
  template: "afInputTime_reactAutoformMaterialUi",
  valueConverters: {
    "stringArray": function (val) {
      if (typeof val === "string" && val.length > 0) {
        return [val];
      }

      return val;
    }
  }
});
const Time = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    const muiTheme = rmui.getComponentThemes();
    return {
      muiTheme,
    };
  },

  componentDidMount() {
    let comp = ReactDOM.findDOMNode(this.refs.timeContainer);
    $(comp).val(this.timeProcessor());
  },

  timeProcessor() {
    let {value} = this.props.atts;
    let timeValue = value || '';

    if(timeValue) {
      let timeObject = timeValue.split(':');

      //This step ensures there is a valid time format
      let hour = '0' + timeObject[0];
      hour = hour.slice(hour.length-2);
      let minute = '0' + timeObject[1];
      minute = minute.slice(minute.length-2);

      timeValue = hour +':'+ minute;
    }

    return timeValue;
  },

  _getValue(event, obj) {
    let domNode = ReactDOM.findDOMNode(this);
    $(domNode).val(obj.value)
  },

  render() {
    const defaultValue = this.timeProcessor();
    const { atts } = this.props;

    const timeComponent = [
      <TimePicker
        format="24hr"
        pedantic={true}
        errorText={this.props.atts.err}
        id={this.props.atts.id} name={this.props.atts.id}
        data-schema-key={this.props.atts.dsk}
        />
    ];

    timeComponent.push(
      <rmui.stylableTime
        onChange={this._getValue}
        value={defaultValue}
        disable={ atts.disable }
      />
    )

    let renderedComponent = this.props.atts.attributes.stylable ? timeComponent[1] : timeComponent[0]

    return (
      <div
        data-schema-key={this.props.atts.dsk}
        ref="timeContainer"
        value={defaultValue}
        >
        {renderedComponent}
      </div>
    )
  }
});

Template["afInputTime_reactAutoformMaterialUi"].helpers({
  atts() {
    const atts = new ReactAutoformUtility(this.atts);
    atts.disable = this.disable || this.atts.disable;
    atts.stylable = this.stylable;
    atts.value = this.value;

    return atts;
  },
  Time(){
    return Time;
  }
});
