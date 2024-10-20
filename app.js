import { languages, subtleColors, countries } from "./assets/constants.js";
const API_KEY = "e74229580e4579c4918d05f08e24edf0";
let currentLanguage = "en";
const languageQuery = `&languages=${currentLanguage}`;
let currentCountry = "in";
const countryQuery = `&country=${currentCountry}`
const baseUrl = `https://api.mediastack.com/v1/news?access_key=${API_KEY}${languageQuery}${countryQuery}`;
const container = document.getElementById("news-card-container");
const searchBar = document.getElementById("searchBar");
const searchQuery = document.getElementById("searchQuery");
const languagesTag = document.getElementById("languages");
const CountryTag = document.getElementById("country");
const Category = document.getElementsByName("category");

let totalColors = subtleColors.length;
let currentColor = Math.floor(Math.random() * totalColors);

const removeDuplicates = (array) => {
    const uniqueArray = array.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue.title)) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);
    return uniqueArray;
}

window.addEventListener("load", () => {
    document.body.style.backgroundColor = subtleColors[currentColor].color;
})

languages.forEach((language) => {
    let option = document.createElement("option");
    option.innerText = language.language;
    option.value = language.code;
    languagesTag.append(option);
})

countries.forEach((country) => {
    let option = document.createElement("option");
    option.innerText = country.country;
    option.value = country.code;
    CountryTag.append(option);
})

const fetchNews = (url) => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            showNews(data.data);
        })
}

const handleSearch = (e) => {
    e.preventDefault();
    let searchValue = searchQuery.value;
    searchValue = searchValue.split(" ");
    searchValue = searchValue.join(",");
    let desiredUrl = `${baseUrl}&keywords=${searchValue}`;
    fetchNews(desiredUrl);
}

searchBar.addEventListener("submit", handleSearch);

let createCard = (news) => {
    console.log(news)
    let card = document.createElement("div");
    card.setAttribute("class", "news-card");
    let img = document.createElement("img");
    img.setAttribute("src", news.image)
    img.setAttribute("alt", news.title);
    let heading = document.createElement("h2");
    heading.innerText = news.title;
    let auth = document.createElement("p");
    auth.innerText = `${news.author} | ${news.published_at}`;
    let description = document.createElement("p")
    description.innerText = news.description;
    let readmore = document.createElement("a");
    readmore.innerText = "Read more...."
    readmore.setAttribute("href", news.url);
    card.append(img, heading, auth, description, readmore);
    container.append(card);
}

let showNews = (articles) => {
    console.log(Array.isArray(articles));
    container.innerHTML = "";
    articles = removeDuplicates(articles);
    articles.forEach((news) => {
        if (news.image)
            createCard(news);
    });
}

let hangleLanguangeChange = () => {
    currentLanguage = languagesTag.value;
    fetchNews(baseUrl);
}

languagesTag.addEventListener("change", hangleLanguangeChange);
languagesTag.value = "en";

let handleCountryChange = () => {
    currentCountry = CountryTag.value.toLowerCase();
    fetchNews(baseUrl);
}

CountryTag.addEventListener("change", handleCountryChange);
CountryTag.value = "IN";

Category.forEach(element => {
    element.addEventListener('change', (e) => {
        let desiredUrl = baseUrl + `&categories=${e.target.value}`;
        fetchNews(desiredUrl);
    })
});
fetchNews(baseUrl);