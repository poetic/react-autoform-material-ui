AutoForm.addInputType("boolean-radios", {
  template: "afBooleanRadioGroup_reactAutoformMaterialUi",
  valueOut: function () {
    if (this.find('input[value=false]').is(":checked")) {
      return false;
    } else if (this.find('input[value=true]').is(":checked")) {
      return true;
    }
  },
  valueConverters: {
    "string": function (val) {
      if (val === true) {
        return "TRUE";
      } else if (val === false) {
        return "FALSE";
      }
      return val;
    },
    "stringArray": function (val) {
      if (val === true) {
        return ["TRUE"];
      } else if (val === false) {
        return ["FALSE"];
      }
      return val;
    },
    "number": function (val) {
      if (val === true) {
        return 1;
      } else if (val === false) {
        return 0;
      }
      return val;
    },
    "numberArray": function (val) {
      if (val === true) {
        return [1];
      } else if (val === false) {
        return [0];
      }
      return val;
    }
  }
});
const { RadioButtonGroup,RadioButton } = mui;
const RadioButtonGroupClass = React.createClass({

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
      <div>
      <RadioButtonGroup name={this.props.atts.name} >
        <RadioButton
            value="true"
            label={this.props.atts.trueLabel} />
        <RadioButton
          value="false"
          label={this.props.atts.falseLabel}/>
       </RadioButtonGroup>
       </div>
    );
  }
});
Template["afBooleanRadioGroup_reactAutoformMaterialUi"].helpers({

  BooleanRadios: function(){
    return RadioButtonGroupClass;
  },
  atts: function () {
    let atts = this.atts;

    //Check atts object for label values, if not default to True or False
    try
    {
      if(atts.trueLabel.length == 0){
        atts.trueLabel = "True";
      }
    }catch(e){
      atts.trueLabel = "True";
    }
    try
    {
     if(atts.falseLabel.length == 0){
            atts.trueLabel = "False";
          }
    }catch(e){

      atts.falseLabel = "False";
    }
    return this.atts;
  }
});
