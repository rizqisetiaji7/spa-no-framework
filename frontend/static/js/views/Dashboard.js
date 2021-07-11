import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Dashboard");
	}

	async getHtml() {
		return `
			<h1>Welcome Back, Rizqi.</h1>
			<p>This is the <b>Dashboard</b> page.</p>
			<a href="/posts" data-link>View recent posts</a>
		`;
	}
}