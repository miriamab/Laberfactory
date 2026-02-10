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
		const episodes = parseRSSFeed(rssText);
		
		return new Response(JSON.stringify(episodes), {
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

function parseRSSFeed(rssText) {
	const episodes = [];
	
	// Extract all <item> elements
	const itemRegex = /<item>(.*?)<\/item>/gs;
	const items = rssText.match(itemRegex) || [];
	
	// Function to decode HTML entities and preserve paragraphs
	function decodeHTMLEntities(text) {
		return text
			// Decode HTML entities first
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&amp;/g, '&')
			.replace(/&quot;/g, '"')
			.replace(/&#039;/g, "'")
			.replace(/&apos;/g, "'")
			.replace(/&nbsp;/g, ' ')
			// Convert paragraph and break tags to newlines
			.replace(/<\/p>\s*<p>/gi, '\n\n')
			.replace(/<p>/gi, '')
			.replace(/<\/p>/gi, '\n\n')
			.replace(/<br\s*\/?>\s*<br\s*\/?>/gi, '\n\n')
			.replace(/<br\s*\/?>/gi, '\n')
			// Remove all other HTML tags
			.replace(/<[^>]*>/g, '')
			// Normalize multiple spaces but keep newlines
			.replace(/ +/g, ' ')
			.replace(/\n /g, '\n')
			.replace(/ \n/g, '\n')
			// Remove excessive newlines (more than 2)
			.replace(/\n{3,}/g, '\n\n')
			.trim();
	}
	
	items.forEach((item, index) => {
		// Extract title
		const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title>(.*?)<\/title>/);
		const title = titleMatch ? titleMatch[1].trim() : '';
		
		// Extract description
		const descMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || item.match(/<description>(.*?)<\/description>/);
		let description = descMatch ? descMatch[1].trim() : '';
		// Remove HTML tags and decode entities
		description = decodeHTMLEntities(description).substring(0, 200);
		
		// Extract full description - try multiple fields and use the longest one
		const summaryMatch = item.match(/<itunes:summary><!\[CDATA\[(.*?)\]\]><\/itunes:summary>/s) || 
		                     item.match(/<itunes:summary>(.*?)<\/itunes:summary>/s);
		const contentMatch = item.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s) ||
		                     item.match(/<content:encoded>(.*?)<\/content:encoded>/s);
		const descFullMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/s) ||
		                      item.match(/<description>(.*?)<\/description>/s);
		
		// Get all possible descriptions and choose the longest one
		const possibleDescriptions = [
			summaryMatch ? summaryMatch[1].trim() : '',
			contentMatch ? contentMatch[1].trim() : '',
			descFullMatch ? descFullMatch[1].trim() : ''
		].filter(d => d.length > 0);
		
		let fullDescription = possibleDescriptions.length > 0 
			? possibleDescriptions.reduce((a, b) => a.length > b.length ? a : b)
			: description;
		
		fullDescription = decodeHTMLEntities(fullDescription);
		
		// Extract publication date
		const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
		const releaseDate = pubDateMatch ? new Date(pubDateMatch[1]).toISOString().split('T')[0] : '';
		
		// Extract duration
		const durationMatch = item.match(/<itunes:duration>(.*?)<\/itunes:duration>/);
		let duration = durationMatch ? durationMatch[1].trim() : '00:00';
		
		// Format duration to MM:SS or HH:MM:SS
		if (duration && !duration.includes(':')) {
			// Convert seconds to MM:SS or HH:MM:SS
			const totalSeconds = parseInt(duration);
			const hours = Math.floor(totalSeconds / 3600);
			const minutes = Math.floor((totalSeconds % 3600) / 60);
			const seconds = totalSeconds % 60;
			
			if (hours > 0) {
				duration = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
			} else {
				duration = `${minutes}:${String(seconds).padStart(2, '0')}`;
			}
		}
		
		episodes.push({
			id: items.length - index, // Reverse order so newest is #1
			title: title || `Episode ${index + 1}`,
			description: description || 'Keine Beschreibung verfügbar.',
			fullDescription: fullDescription || description || 'Keine Beschreibung verfügbar.',
			duration: duration,
			releaseDate: releaseDate
		});
	});
	
	return episodes;
}
