function shortenUrl() {
    const originalUrl = document.getElementById('original-url').value;

    // Simple check for a valid URL
    if (!isValidUrl(originalUrl)) {
        alert('Please enter a valid URL');
        return;
    }

    // In a real-world scenario, you would make an API request to a server to generate a short URL
    // For simplicity, we'll use a basic method here
    const shortUrl = generateShortUrl(originalUrl);

    // Display the result
    document.getElementById('shortened-url').href = shortUrl;
    document.getElementById('shortened-url').textContent = shortUrl;
    document.getElementById('result').classList.remove('hidden');
}

function isValidUrl(url) {
    // Basic URL validation
    const urlPattern = /^(https?:\/\/)?www\.[\w\.-]+\.[a-z]{2,}([\/\w\.-]*)*\/?$/;
    return urlPattern.test(url);
}

function generateShortUrl(originalUrl) {
    // In a real-world scenario, you would make an API request to a server to generate a short URL
    // For simplicity, we'll use a basic method here
    return 'http://short.url/' + Math.random().toString(36).substr(2, 8);
}