// let componentsController;
Router.configure({
    layoutTemplate: 'pageTemplate'
});
Router.route('/', function() {
	
  this.render('home');
})
Router.route('/demo', function() {
  this.render('demo');
})
Router.route('/components', function() {
	componentsController = this;
	  this.render('components');
})



