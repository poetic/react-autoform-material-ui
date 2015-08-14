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
      <RadioButtonGroup id={this.props.atts.id} name={this.props.atts.id}
       data-schema-key={this.props.atts.dsk} >
        <RadioButton
            value={true}
            label={this.props.atts.name}/>
       </RadioButtonGroup>
    );
  }
});
Template["afRadio_reactAutoformMaterialUi"].helpers({
  atts() {
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
  },
  Radio(){
    return Radio;
  }
});