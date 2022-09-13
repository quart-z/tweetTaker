import { getHTML, getTwitterFollowers } from './lib/scraper';

async function go() {
	getTwitterFollowers(await getHTML ('https://www.twitter.com/wesbos'));
}

go();