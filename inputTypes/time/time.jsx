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

  render() {
    let timeComponent = [
      <TimePicker
        format="24hr"
        pedantic={true}
        errorText={this.props.atts.err}
        id={this.props.atts.id} name={this.props.atts.id}
        data-schema-key={this.props.atts.dsk} />
    ]

    timeComponent.push(
      <rmui.stylableTime value={this.props.atts.value} />
    )

    let renderedComponent = this.props.atts.attributes.stylable ? timeComponent[1] : timeComponent[0]

    return renderedComponent
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
