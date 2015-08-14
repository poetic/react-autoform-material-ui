AutoForm.addInputType('select-checkbox', {
  template: 'afCheckboxGroup_reactAutoformMaterialUi',
  valueIsArray: true,
  valueOut: function () {
    var val = [];
    this.find('input[type=checkbox]').each(function () {
      if ($(this).is(":checked")) {
        val.push($(this).val());
      }
    });
    return val;
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
const Checkbox = React.createClass({

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
        name={this.props.attsname}
        value={this.props.atts.value}
        label={this.props.atts.label}/>
    );
  }
});
Template['afCheckboxGroup_reactAutoformMaterialUi'].helpers({
  atts() {
    // let atts = _.clone(this.atts);
    let atts = new ReactAutoformUtility(this.atts);
    if (this.selected) {
      atts.checked = "";
    }
    // remove data-schema-key attribute because we put it
    // on the entire group
    // delete atts['data-schema-key'];
    return atts;
  },
checkbox() {
  return Checkbox
}
});
