AutoForm.addInputType("radio", {
  template: "afRadio_reactAutoformMaterialUi",
  valueOut: function () {
    if (this.is(":checked")) {
      return this.val();
    }
  },
  valueConverters: {
    "stringArray": function (val) {
      if (typeof val === "string" && val.length > 0) {
        return [val];
      }
      return val;
    }
  }
});
const { RadioButton,RadioButtonGroup } = mui;
const Radio = React.createClass({

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
      <RadioButtonGroup name={this.props.atts.name} >
        <RadioButton
            value="true"
            label={this.props.atts.name}
            name={this.props.atts.name}
             />
       </RadioButtonGroup>
    );
  }
});
Template["afRadio_reactAutoformMaterialUi"].helpers({
  atts: function() {

    return this.atts;
  },
  Radio: function(){
    return Radio;
  }
});