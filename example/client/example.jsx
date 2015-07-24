AutoForm.setDefaultTemplate('reactAutoformMaterialUi');

const componentsLink = 'http://'+location.host + '#';

const { LeftNav, AppBar,RaisedButton,Menu,MenuItem,FontIcon,Toolbar,ToolbarGroup,ToolbarTitle } = mui;

const AppBarComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: mui.Styles.ThemeManager().getCurrentTheme()
    };
  },
 _toggle(e){
    e.preventDefault();
    this.refs.leftNav.toggle();
  },
  render() {
    return (
      <div>
       <AppBar title="" style={{position:'fixed'}}
        iconElementLeft={ <RaisedButton linkButton={true} href="https://github.com/poetic/react-autoform-material-ui"
         secondary={true} label="React Autoform Material-UI"  disabled={true}>
       </RaisedButton>}

        onLeftIconButtonTouchTap={this._toggle}
        iconElementRight={ <RaisedButton linkButton={true} href="https://github.com/poetic/react-autoform-material-ui"
         secondary={true} label="Github">
       <FontIcon className="muidocs-icon-custom-github"/>
       </RaisedButton>} />
      </div>
    
  )}
  });

const MenuComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: mui.Styles.ThemeManager().getCurrentTheme()
    };
  },

 _handleItemTouchTap(e,child) {
  e.preventDefault();
    console.log('Tapped!');
  },

  render() {
    let menuItems = [];
    for (let comp in Schemas.ComponentForm._schema){
      menuItems.push({
        type: MenuItem.Types.LINK, 
        payload: componentsLink + comp, 
        text: Schemas.ComponentForm._schema[comp].autoform.type
          })
    }
    return (
      <div>
          <Menu menuItems={menuItems} onItemTouchTap={this._handleItemTouchTap}>
           </Menu>
      </div>
    
  )}
  });

const TabsComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: mui.Styles.ThemeManager().getCurrentTheme()
    };
  },
  render() {
    return (
      <Toolbar style={{'padding':'50px'}} >
        <ToolbarGroup float="center">
          <RaisedButton linkButton={true} href="https://github.com/poetic/react-autoform-material-ui" secondary={true} label="Docs/Playground">
          </RaisedButton>
          <RaisedButton linkButton={true} href="https://github.com/poetic/react-autoform-material-ui" secondary={true} label="QuickForm Demo">
          </RaisedButton>
        </ToolbarGroup>
      </Toolbar>
  )}
  });

Template["menu"].helpers({
  menu: function(){
    return MenuComponent;
  }
});

Template["components"].helpers({
  components() {
    return Components;
  },
    jsonObj() {
      let params = homeController.getParams();
      location.hash = "#" + params.hash;
      return (params.hash == null) ? 'Pick a component to see its structure' : JSON.stringify(Schemas.ComponentForm._schema[params.hash]);;
     }
});

Template["appBar"].helpers({
  appBar(){
    return AppBarComponent;
  }
})
Template["quickForm"].rendered = function() {

  console.dir("here");
}



