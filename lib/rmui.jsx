import {
  Styles,
} from 'material-ui';

const { ThemeManager, LightRawTheme } = Styles;
rmui = {};

rmui.setPalette = function(palette) {
  ThemeManager.setPalette(palette)
}

rmui._defaultTheme = ThemeManager.getMuiTheme(LightRawTheme);

rmui.setComponentThemes = theme => {
  rmui.muiTheme = ThemeManager.getMuiTheme(theme);
}

rmui.getComponentThemes = () => {
  const { muiTheme, _defaultTheme } = rmui;
  return muiTheme || _defaultTheme; 
}

rmui.getPalette = () => {
  return ThemeManager.palette
}

rmui.afObjectFieldReady = new ReactiveVar(false);

rmui.afArrayFieldReady = new ReactiveVar(false);

