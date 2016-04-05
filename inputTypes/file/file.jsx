import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'react': '0.14.x',
  'material-ui': '0.13.4',
}, 'poetic:react-autoform-material-ui');

const React = require('react');
const { RaisedButton } = require('material-ui');



AutoForm.addInputType("file", {
  template: "afInputFile_reactAutoformMaterialUi"
});
const File = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  _handleChange: function(e){
    console.log(e.target.value)
  },
  _openFileDialog: function(){
    const fileUploadDom = this.refs.fileUpload;
    fileUploadDom.click();
  },

  render: function() {
    return (
      <div>
        <RaisedButton label={this.props.atts.name} secondary={true} id={this.props.atts.id}
          onClick={this._openFileDialog}
        />
        <input
          ref="fileUpload"
          data-schema-key={this.props.atts.dsk}
          type="file"
          name={this.props.atts.dsk}
          style={{"display" : "none"}}
          onChange={this._handleChange}/>
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
