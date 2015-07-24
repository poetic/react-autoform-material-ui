AutoForm.addInputType("button", {
  template: "afInputButton_reactAutoformMaterialUi"
});

const { RaisedButton } = mui;
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
      <RaisedButton type="button" label={this.props.atts.label} secondary={true} />
      </div>
    );
  }
});

Template['afInputButton_reactAutoformMaterialUi'].helpers({
  Button: function(){
    return Button;
  },
  atts: function(){
    let atts = this.atts;
    return atts;
  }
});
