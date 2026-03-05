<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');

// Hole Feed-URL von iTunes
$podcastId = '1856938434';
$itunesJson = @file_get_contents("https://itunes.apple.com/lookup?id={$podcastId}&entity=podcast");

if ($itunesJson) {
    $data = json_decode($itunesJson, true);
    if (!empty($data['results'][0]['feedUrl'])) {
        $feedUrl = $data['results'][0]['feedUrl'];
        $rssText = @file_get_contents($feedUrl);
        
        if ($rssText) {
            // Wir geben den RAW XML Text als JSON zurück
            echo json_encode(["rssText" => $rssText]);
            exit;
        }
    }
}

http_response_code(500);
echo json_encode(["error" => "Failed to load podcast"]);
