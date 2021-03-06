import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const { RaisedButton } = require('material-ui');

AutoForm.addInputType("reset", {
  template: "afInputReset_reactAutoformMaterialUi"
});
const ResetButton = React.createClass({

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
      <RaisedButton type="reset" label={this.props.atts.name} secondary={true} />
      </div>
    );
  }
});

Template['afInputReset_reactAutoformMaterialUi'].helpers({
  Reset: function(){
    return ResetButton;
  },
  atts: function(){
    return this.atts;
  }
});
