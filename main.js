import data from './data.js';

const journeySection = document.getElementById('journey');
let index = 1;
const viewMoreBtn = document.getElementById('view-more');
viewMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderHtml();
})
const hamburgerBtn = document.getElementById('hamburger-btn');
hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('mobile-nav').classList.toggle('hidden');
})
// convert data list to string HTML
const getHtmlData = function() {
    let dataHtml = ''
    for (let i = index; i < data.length; i++){
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
        index++;
        if (i % 6 === 0) break;
        if (i === data.length - 1) viewMoreBtn.style.display = 'none';
    }

    return dataHtml
}

// render HTML to the DOM
export function renderHtml() {
    document.getElementById('blogs').innerHTML += getHtmlData();
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