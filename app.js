const API_KEY = "dfe6b505e6ab4615b0617af82ce29a64";
const container = document.getElementById("news-card-container");
let x = {
    "source": {
        "id": "google-news",
        "name": "Google News"
    },
    "author": "Yahoo Finance",
    "title": "European Stocks Drop on Weak Earnings; Pound Falls: Markets Wrap - Yahoo Finance",
    "description": null,
    "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPX3FTLXBOM1ZkV0VPUmlGMlJsUHNBQ2pXVnJ5VG1KVTROaVpaYUlEQWNHazBGQXhmVWdjOUl4Q29EcEZicjJSbllqN3k3WTdBdV9lRUVnMFNETW1yVjR5STBMSnhxd2FjZHIzSmFDVGlxek1zOGtZcjFSZ0dTa2pJeg?oc=5",
    "urlToImage": null,
    "publishedAt": "2024-10-16T09:43:50Z",
    "content": null
}

let createCard = (news) => {
    console.log(news)
    let card = document.createElement("div");
    card.setAttribute("class", "news-card");
    let img = document.createElement("img");
    img.setAttribute("src", news.urlToImage)
    img.setAttribute("alt", news.title);
    let heading = document.createElement("h2");
    heading.innerText = news.title;
    let auth = document.createElement("p");
    auth.innerText = `${news.author} | ${news.publishedAt}`;
    let description = document.createElement("p")
    description.innerText = news.description;
    card.append(img,heading,auth,description);
    container.append(card);
}

let showNews = (articles) => {
    console.log(Array.isArray(articles));
    articles.forEach((news) => createCard(news) );
}


fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2024-09-17&sortBy=publishedAt&apiKey=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.articles);
        console.log(Array.isArray(data.articles));
        showNews(data.articles);
    })