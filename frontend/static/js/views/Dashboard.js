import AbstractView from './AbstractView.js';

class Dashboard extends AbstractView {
	constructor() {
		super();
		this.setTitle('Dashboard');
	}

	async getHtml() {
		return `
      <h1>Dashboard</h1>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
    `;
	}
}

export default Dashboard;
