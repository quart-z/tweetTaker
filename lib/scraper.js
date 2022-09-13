import axios from 'axios';
import * as cherrio from 'cherrio';




async function getHTML (url) {

	const { data:html } = await axios.get('https://twitter.com/wesbos',); // gets html, as variable html

	return html
}

async function getTwitterFollowers(html) {
	// loead cherrio
	const cheerio = require('cheerio');
	const $ = cherrio.load(html);
	console.log($.html());
}

export { getHTML, getTwitterFollowers };