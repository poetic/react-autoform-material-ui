import React from 'react';
import { RaisedButton } from 'material-ui';
AutoForm.addInputType("button", {
  template: "afInputButton_reactAutoformMaterialUi"
});

const Button = React.createClass({

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
      <RaisedButton type="button" label={this.props.atts.label} secondary={true} id={this.props.atts.id} 
      name={this.props.atts.id} data-schema-key={this.props.atts.dsk} />
      </div>
    );
  }
});

Template['afInputButton_reactAutoformMaterialUi'].helpers({
  Button: function(){
    return Button;
  },
  atts: function(){
    let atts = new ReactAutoformUtility(this.atts);
    return atts;
  }
});
