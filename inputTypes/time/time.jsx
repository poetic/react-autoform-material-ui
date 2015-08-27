AutoForm.addInputType("time", {
  template: "afInputTime_react-autoform-material-ui",
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
    return (
      <TimePicker
        format="24hr"
        pedantic={true}
        errorText={Session.get(this.props.atts.err)} 
        id={this.props.atts.id} name={this.props.atts.id}
        data-schema-key={this.props.atts.dsk} />
    );
  }
});

Template["afInputTime_react-autoform-material-ui"].helpers({
	atts(){
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
	},
	Time(){
		return Time;
	}
})