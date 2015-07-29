ReactAutoformUtility = function(atts){


    this.label =  (AutoForm.getSchemaForField(atts.name).label == null || undefined) ? atts.name : AutoForm.getSchemaForField(atts.name).label ;
    this.attributes = atts;
	this.formId = AutoForm.getFormId();
	this.schema = AutoForm.getFormSchema();
	this.context = this.schema.namedContext();
	this.id = atts.id;
	this.name = atts.name;
	this.dsk = atts['data-schema-key'];
  

   this.err  = this.formId+this.name;

  	return this;
  }

