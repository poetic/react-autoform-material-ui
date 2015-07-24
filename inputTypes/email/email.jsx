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
getInitialState() {
    return {
      errorText: 'This field is required.'
    }
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
_value() {
this.getValue();
},
  render: function() {
    return (
      <div>
      <TextField
        floatingLabelText={this.props.atts.name}
        errorText={this.state.errorText}
        onChange={this._handleErrorInputChange} />
      </div>
    );
  },
   _handleErrorInputChange(e) {
    let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    let val = 'This field is required.';
    if(e.target.value.length){
      val = re.test(e.target.value) ? '': 'Invalid Email address';
    }
      this.setState({
      errorText: val
    });
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