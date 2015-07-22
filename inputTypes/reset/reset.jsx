AutoForm.addInputType("reset", {
  template: "afInputReset_reactAutoformMaterialUi"
});
const { RaisedButton } = mui;
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