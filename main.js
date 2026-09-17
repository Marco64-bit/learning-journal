import data from './data.js';

const journeySection = document.getElementById('journey');

// convert data list to string html
const getHtmlData = function() {
    let dataHtml = ''
    for (let i = 1; i < data.length; i++){
        dataHtml += `
            <article>
                <img src="${data[i].img}"
                     alt="${data[i].title}">
                <p class="blog-date">
                    <time>${data[i].date}</time>
                </p>
                <h2>${data[i].title}</h2>
                <p>${data[i].description}</p>
                <a href="${data[i].link}" class="btn">${data[i].link}</a>
            </article>
        `
    }
    return dataHtml
}

// render html to the DOM
export function renderHtml() {
    document.getElementById('blogs').innerHTML = getHtmlData();
}

// Get HTML for the main journey
function getJourneyHtml() {
    journeySection.style.background = `rgba(0, 0, 0, 0.7) url(${data[0].img})`;
    return `
    <p class="main-date">
        <time>${data[0].date}</time>
    </p>
    <h1 class="main-title">${data[0].title}</h1>
    <p class="desc">${data[0].description}</p>`
}

function renderJourneyHtml() {
    journeySection.innerHTML = getJourneyHtml();
}

renderHtml();

if (document.title === 'My Learning Journal') renderJourneyHtml();