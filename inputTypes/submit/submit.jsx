AutoForm.addInputType("submit", {
  template: "afInputSubmit_reactAutoformMaterialUi"
});
const { RaisedButton } = mui;
const Submit = React.createClass({

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

      <RaisedButton type="submit" label="Submit" secondary={true} >
      </RaisedButton>
    );
  }
});

Template["afInputSubmit_reactAutoformMaterialUi"].helpers({
	Submit: function(){

		return Submit;
	},
  atts: function(){
    return this.atts;
  }
})