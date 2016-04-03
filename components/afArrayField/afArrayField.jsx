import React from 'react';
import {
  Card,
  CardHeader,
  CardText,
  CardActions,
  RaisedButton,
  FontIcon,
  Avatar
} from 'material-ui';

let set = false;
const afArrayField = React.createClass({

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
    rmui.afArrayFieldReady.set(parentNode);
  },
  render: function() {

    return (
      <div>
        <Card >
          <CardHeader
            title={this.props.atts.title.toLocaleUpperCase()}
            subtitle={this.props.atts.err}
            avatar={<Avatar>{this.props.atts.title[0].toLocaleUpperCase()}</Avatar>}
            showExpandableButton={true}
            >
          </CardHeader>
          <CardText expandable={true}>
            <div ref='placeholder'>

            </div>
          </CardText>
          <CardActions>
          </CardActions>
        </Card>
      </div>
    );
  }
});


Template.afArrayField_reactAutoformMaterialUi.helpers({
  atts(){
    let atts = {};
    atts.title = this.atts.name;
    atts.err = "";

    //Check validity
    let isInvalid = Blaze._globalHelpers.afFieldIsInvalid({name:this.atts.name})
    if(isInvalid){
      atts.err = Blaze._globalHelpers.afFieldMessage();
    }
    return atts;
  },
  afArrayComp() {
    return afArrayField
  },
  arrFields() {
    if((typeof rmui.afArrayFieldReady.get() === 'object') && !set){
      let arrayObj =  AutoForm.arrayTracker.getField(AutoForm.getFormId(),this.atts.name);
      arrayObj = arrayObj[0].current;

      let qfTemplate = Template.afQuickField;
      set = true;

      _.map(arrayObj,function(key){

        return Blaze.renderWithData(qfTemplate,{name:key}, rmui.afArrayFieldReady.get())
      })
    }
  }
});
