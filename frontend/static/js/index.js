import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import Settings from './views/Settings.js';

function navigateTo(url) {
	// show the url in the path
	history.pushState(null, '', url);
	// call
	router();
}

async function router() {
	const routes = [
		{ path: '/', view: Dashboard },
		{ path: '/posts', view: Posts },
		{ path: '/settings', view: Settings },
	];

	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			// location.pathname is the path behind the url
			// suppose we are locating at http:localhost:5500/dashboard
			// now the location.pathname is "/dashboard"
			isMatch: location.pathname === route.path,
		};
	});

	let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		};
	}

	// view is a reference to a view class like Dashboard
	const view = new match.route.view();
	// injects the html of the view class to the app container
	document.querySelector('#app').innerHTML = await view.getHtml();
}

// when users navigate through the history (using go back in the top left corner 
// of browser), recall the function router.
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
	document.body.addEventListener('click', (e) => {
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
		// matches() method od the Element interface tests if the element would be
		// selected by the specified CSS selector
		if (e.target.matches('[data-link]')) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});

	router();
});
