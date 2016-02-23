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

const { TimePicker } = mui;
const Time = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentDidMount() {
    let comp = this.getDOMNode();
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
    let domNode = React.findDOMNode(this);
    $(domNode).val(obj.value)
  },

  render() {
    let defaultValue = this.timeProcessor();

    let timeComponent = [
      <TimePicker
        format="24hr"
        pedantic={true}
        errorText={this.props.atts.err}
        id={this.props.atts.id} name={this.props.atts.id}
        data-schema-key={this.props.atts.dsk}
        />
    ]

    timeComponent.push(
      <rmui.stylableTime
        onChange={this._getValue}
        value={defaultValue} />
    )

    let renderedComponent = this.props.atts.attributes.stylable ? timeComponent[1] : timeComponent[0]

    return (
      <div
        data-schema-key={this.props.atts.dsk}
        value={defaultValue}
        >
        {renderedComponent}
      </div>
    )
  }
});

Template["afInputTime_reactAutoformMaterialUi"].helpers({
  atts(){
    let atts = new ReactAutoformUtility(this.atts);
    atts.stylable = this.stylable;
    atts.value = this.value;

    return atts;
  },
  Time(){
    return Time;
  }
})
