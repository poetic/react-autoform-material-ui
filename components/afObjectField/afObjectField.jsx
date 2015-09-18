const {
  Card,
  CardHeader,
  CardText,
  Avatar
} = mui;

let set = false;
const objectField = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  componentDidMount() {
    let parentNode = React.findDOMNode(this.refs.placeholder);
    rmui.afObjectFieldReady.set(parentNode);
  },
  render: function() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.props.atts.title.toLocaleUpperCase()}
            avatar={<Avatar>{this.props.atts.title[0].toLocaleUpperCase()}</Avatar>}
            showExpandableButton={true}
            >
          </CardHeader>
          <CardText expandable={true}>
            <div ref='placeholder' >
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
});


Template.afObjectField_reactAutoformMaterialUi.helpers({
  atts(){
    let atts = {};
    atts.title = this.name;
    return atts;
  },
  objectField() {
    return objectField
  },
  getFields() {
    if(typeof rmui.afObjectFieldReady.get() === 'object' && !set){

      let qfTemplate = Template.afQuickFields;
      set = true;
      return Blaze.renderWithData(qfTemplate,{name:this.name,fields:this.name}, rmui.afObjectFieldReady.get())
    }
  }
});
