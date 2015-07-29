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
      <RaisedButton type="file" label={this.props.atts.name} secondary={true} id={this.props.atts.id} name={this.props.atts.id}
       data-schema-key={this.props.atts.dsk} />
	  </div>
    );
  }
});
Template["afInputFile_reactAutoformMaterialUi"].helpers({
	atts:function(){
    let atts = new ReactAutoformUtility(this.atts);
		return atts;
	},
	File: function(){
		return File;
	}
})