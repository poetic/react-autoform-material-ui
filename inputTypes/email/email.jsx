AutoForm.addInputType("email", {
  template: "afInputEmail_reactAutoformMaterialUi",
  contextAdjust: function (context) {
    if (typeof context.atts.maxlength === "undefined" && typeof context.max === "number") {
      context.atts.maxlength = context.max;
    }
    return context;
  }
});

const { TextField } = mui;
const Email = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
errorText:"",
  render: function() {
    return (
      <div>
      <TextField
        floatingLabelText={this.props.atts.name}
        errorText={this.errorText}
        onChange={this._handleFloatingInputChange} />
      </div>
    );
  },
  _handleFloatingInputChange: function(){
   //Handle verification/validation here
  }
});
Template['afInputEmail_reactAutoformMaterialUi'].helpers({
  Email: function(){
    return Email;
  },
  atts: function() {    
    return this.atts;
  }
});