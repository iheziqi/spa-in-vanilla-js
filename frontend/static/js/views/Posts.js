import AbstractView from './AbstractView.js';

class Posts extends AbstractView {
	constructor() {
		super();
		this.setTitle('Dashboard');
	}

	async getHtml() {
		return `
      <h1>Posts</h1>
      <p>
        You are viewing the posts!
      </p>
    `;
	}
}

export default Posts;
