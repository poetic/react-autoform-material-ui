ReactAutoformUtility = function(atts){

	try
	{
	 this.label =  (AutoForm.getSchemaForField(atts.name).label == null || undefined) ? atts.name : AutoForm.getSchemaForField(atts.name).label ;
	}catch(e)
	{
	 console.warn(e);
	}
    
  this.attributes = atts;
	this.formId = AutoForm.getFormId();
	this.schema = AutoForm.getFormSchema();
	this.context = this.schema.namedContext();
	this.id = atts.id;
	this.name = atts.name;
	this.dsk = atts['data-schema-key'];
  
  if(ramui_errors[this.formId+this.name]){
    this.err  = ramui_errors[this.formId+this.name].get();
  }else{
    ramui_errors[this.formId+this.name] = new ReactiveVar();
    ramui_errors[this.formId+this.name].set('')
    this.err = ramui_errors[this.formId+this.name].get();
  }

  	return this;
  }

