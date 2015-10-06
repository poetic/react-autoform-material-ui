rmui = {};

rmui.setPalette = function(palette) {
  ThemeManager.setPalette(palette)
}

rmui.setComponentThemes = function(componenetThemes) {
  ThemeManager.setComponentThemes(componenetThemes)
}

rmui.getPalette = function() {
  return ThemeManager.palette
}

rmui.afObjectFieldReady = new ReactiveVar(false);

rmui.afArrayFieldReady = new ReactiveVar(false);

