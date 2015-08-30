ThemeManager = new mui.Styles.ThemeManager();
injectTapEventPlugin();

//Hooks Object defined here. Thanks Autoform but we'll take it from here
const hooksObject = {

  // Called when any submit operation succeeds
  onSuccess: function(formType, result) {
      Object.keys(rmc_errors).forEach(function(key){ 
        delete rmc_errors[key]
      })
  },

  // Called when any submit operation fails
  onError: function(formType, error) {    
    let formId = AutoForm.getFormId();
    error.invalidKeys.map(function(key,index) {
      if (index==0) 
      {
        rmc_errors[formId+key.name] = error.message; 
      }
      else
      {
        rmc_errors[formId+key.name] = key.type
      }

    })
  },

};
AutoForm.addHooks(null, hooksObject);
