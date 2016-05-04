import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

rmui = {};

rmui.setPalette = function (palette) {
  return getMuiTheme(palette);
};

rmui._defaultTheme = getMuiTheme(LightBaseTheme);

rmui.setComponentThemes = theme => {
  rmui.muiTheme = getMuiTheme(theme);
};

rmui.getComponentThemes = () => {
  const { muiTheme, _defaultTheme } = rmui;
  return muiTheme || _defaultTheme;
};

rmui.getPalette = () => getMuiTheme(LightBaseTheme).palette;

rmui.afObjectFieldReady = new ReactiveVar(false);

rmui.afArrayFieldReady = new ReactiveVar(false);
