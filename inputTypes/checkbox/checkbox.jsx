import checkVersions from '../../check-versions.jsx';

checkVersions();

const React = require('react');
const { Checkbox } = require('material-ui');

AutoForm.addInputType('checkbox', {
  template: 'afCheckboxGroup_reactAutoformMaterialUi',
  valueOut() {
    return this.value;
  },
  contextAdjust(context) {
    context.value = context.selectOptions[0].value;
    context.atts.value = context.value;
    return context;
  }
});

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
