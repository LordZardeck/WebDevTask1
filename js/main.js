/**
 * Root application ViewModel. Handles switching between pages, 
 * verifing that an application is not attempting to switch
 * to an invalid page.
 */
function AppViewModel(defaultPage) {
	if(AppViewModel.isValidPage(defaultPage))
		defaultPage = new LoginPageViewModel();

	// Create the observable that determines which page
	// template is loaded in the page container
	this.currentPage = ko.observable(defaultPage);	
}

// Verifies that a provided object is a valid page
AppViewModel.isValidPage = function(page) {
	return typeof page != "undefined" && page["_template"];
}

AppViewModel.prototype.init = function() {
	// Apply knockout bindings
	ko.applyBindings(this);
}

// Verifty the page then update the observable with it
AppViewModel.prototype.changePage = function(newPage) {
	if(!AppViewModel.isValidPage(newPage))
		throw new Error("Cannot change to an invalid page.");

	this.currentPage(newPage);
}

function LoginPageViewModel() {
	this._template = "login-page";
}

function RegisterPageViewModel() {
	this._template = "register-page";
}

	// Create a new instance of the root view model
var app = new AppViewModel(new LoginPageViewModel()),
	// Create a new instance if Director.js router
	router = new Router({
		"/login": function() {
			app.changePage(new LoginPageViewModel());
		},
		"/register": function() {
			app.changePage(new RegisterPageViewModel());
		}
	});

// Configure router to utilize HTML5 History API
router.configure({html5history: true});

// Initialize router to listen onto incoming routes
router.init();
// Initialize root ViewModel
app.init();