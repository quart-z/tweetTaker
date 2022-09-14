import axios from 'axios';
import cheerio from 'cheerio';




async function getHTML (url) {

	const { data:html } = await axios.get('https://twitter.com/wesbos',); // gets html, as variable html

	return html
}

async function getTwitterFollowers(html) {
	// loead cherrio
	require('cheerio');
	const $ = cheerio.load(html);
	console.log($);
}

export { getHTML, getTwitterFollowers };