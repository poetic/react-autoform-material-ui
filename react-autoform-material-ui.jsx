ThemeManager = new mui.Styles.ThemeManager();
injectTapEventPlugin();

//Hooks Object defined here. Thanks Autoform but we'll take it from here
const hooksObject = {

  // Called when any submit operation succeeds
  onSubmit: function(formType, result) {
    Object.keys(ramui_errors).forEach(function(key){ 
      ramui_errors[key].set('');
    })
  },

  // Called when any submit operation fails
  onError: function(formType, error) {    
    let formId = AutoForm.getFormId();
    
     Object.keys(ramui_errors).forEach(function(key){ 
      ramui_errors[key].set('');
    })
    error.invalidKeys.map(function(key,index) {
      if (index==0) 
      {
        ramui_errors[formId+key.name].set(error.message); 
      }
      else
      {
        ramui_errors[formId+key.name].set(key.type);
      }
    })
  },

};
AutoForm.addHooks(null, hooksObject);
