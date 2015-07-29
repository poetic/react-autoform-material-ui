AutoForm.setDefaultTemplate('reactAutoformMaterialUi');

const componentsLink ='/components/#';

const { 
  LeftNav,
  AppBar,
  RaisedButton,
  Menu,
  MenuItem,
  FontIcon,
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  MenuDivider
   } = mui;

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
       <AppBar title={

        <RaisedButton linkButton={true} href="/demo"
        id='demo_btn'
         secondary={true}
          label="Demo / quickForm Playground">
       </RaisedButton>

     }
        style={{position:'fixed'}}
        iconElementLeft={ <RaisedButton linkButton={true} href="/"
         secondary={true} label="React Autoform Material-UI / Docs">
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

  render() {
    let menuItems = [];
     menuItems.push({
        type: MenuItem.Types.LINK, 
        payload: '/#overview', 
        text: 'Overview'
          });
     menuItems.push({
        type: MenuItem.Types.SUBHEADER,
        text: 'Components'
          });

    for (let comp in Schemas.ComponentForm._schema){
      menuItems.push({
        type: MenuItem.Types.LINK, 
        payload: '/components/#' + comp, 
        text: comp
          })
    }
    return (
      <div>
          <Menu menuItems={menuItems}>
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

Template['menu'].helpers({
  menu: function(){
    return MenuComponent;
  }
});

Template['components'].helpers({
  components() {
    let hash = componentsController.getParams().hash;
    location = '/components/#'+hash;
    // console.dir(hash);
    return Components;
  }

});

Template['appBar'].helpers({
  appBar(){
    return AppBarComponent;
  }
})

  Template['appBar'].rendered = function() {
      $('#demo_btn').parent().css({
        'margin-top': '1%',
    left: '30%',
    'position': 'relative'
  })
  }


