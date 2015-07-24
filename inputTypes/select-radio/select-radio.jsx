AutoForm.addInputType("select-radio", {
  template: "afRadioGroup_reactAutoformMaterialUi",
  valueOut: function () {
    return this.find('input[type=radio]:checked').val();
  },
  contextAdjust: function (context) {
    var itemAtts = _.omit(context.atts);

    // build items list
    context.items = [];

    // Add all defined options
    _.each(context.selectOptions, function(opt) {
      context.items.push({
        name: context.name,
        label: opt.label,
        value: opt.value,
        // _id must be included because it is a special property that
        // #each uses to track unique list items when adding and removing them
        // See https://github.com/meteor/meteor/issues/2174
        _id: opt.value,
        selected: (opt.value === context.value),
        atts: itemAtts
      });
    });

    return context;
  }
});
const { RadioButtonGroup,RadioButton } = mui;
const selectRadio = React.createClass({

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
        {this.props.atts.items.map(function(result) {
                return <RadioButton key={result.id}  value={result.value}
          label={result.label}/>;
              })}
      </RadioButtonGroup>
    );
  },
  _handleFloatingInputChange: function(){
   //Handle verification/validation here
  }
});

Template["afRadioGroup_reactAutoformMaterialUi"].helpers({
  atts() {
    let atts = this.atts;
    atts.items = this.items;
    return atts;
  },
  selectRadio() {

    return selectRadio;
  }
});