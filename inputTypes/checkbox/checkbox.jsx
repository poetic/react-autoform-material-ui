AutoForm.addInputType('checkbox', {
  template: 'afCheckboxGroup_reactAutoformMaterialUi',
  valueOut: function () {
    return this.val();
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
        selected: (_.contains(context.value, opt.value)),
        atts: itemAtts
      });
    });
    return context;
  }
});

const { Checkbox } = mui;
const CheckboxComponent = React.createClass({

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
       <Checkbox
        id={this.props.atts.id}
        className='rmc_check'
        name={this.props.atts.id}
        data-schema-key={this.props.atts.dsk} 
        value={this.props.atts.value}
        label={this.props.atts.label}/>
    );
  }
});
// Template.afCheckboxGroup_reactAutoformMaterialUi.events({
//   'change .rmc_check' (e) {
//     this.atts.value = !this.atts.value;
    
//   }
// })
Template.afCheckboxGroup_reactAutoformMaterialUi.helpers({
  atts() {
    
    let atts = new ReactAutoformUtility(this.atts);
    this.atts = atts;
    return atts;
  },
  checkbox() {
    return CheckboxComponent;
  }
});
