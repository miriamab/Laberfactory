export async function GET() {
	try {
		// Get RSS feed URL from iTunes API
		const podcastId = '1856938434';
		const itunesResponse = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&entity=podcast`);
		const itunesData = await itunesResponse.json();
		
		if (!itunesData.results || itunesData.results.length === 0) {
			return new Response(JSON.stringify({ error: 'Podcast not found' }), {
				status: 404,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const feedUrl = itunesData.results[0].feedUrl;
		
		// Fetch RSS feed
		const rssResponse = await fetch(feedUrl);
		const rssText = await rssResponse.text();
		
		// Parse RSS feed
		
		
		return new Response(JSON.stringify({ rssText }), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error fetching episodes:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch episodes' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

}
