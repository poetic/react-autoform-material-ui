AutoForm.addInputType("file", {
  template: "afInputFile_reactAutoformMaterialUi"
});
const {RaisedButton} = mui;
const File = React.createClass({
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
      <RaisedButton type="file" label={this.props.atts.name} secondary={true}>
	  </RaisedButton>
	  </div>
    );
  }
});
Template["afInputFile_reactAutoformMaterialUi"].helpers({
	atts:function(){
		return this.atts;
	},
	File: function(){
		return File;
	}
})