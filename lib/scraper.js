import axios from 'axios';
import cheerio from 'cheerio';




async function getHTML (url) {

	const { data:html } = await axios.get('https://twitter.com/TheRock',); // gets html, as variable html

	return html
}

async function getTwitterFollowers(html) {
	// loead cherrio
	require('cheerio');
	const $ = cheerio.load(html);

	const profileName = $('[href="/TheRock/followers"]');
	console.log($.html());
}

export { getHTML, getTwitterFollowers };