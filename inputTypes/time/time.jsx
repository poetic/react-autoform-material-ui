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

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <TimePicker format="ampm" hintText="12hr Format" name={this.props.atts.name}  />
    );
  }
});

Template["afInputTime_react-autoform-material-ui"].helpers({
	atts: function(){
		return this.atts;
	},
	Time: function(){
		return Time;
	}
})