import data from './data.js';
import {renderHtml} from "./main";

const getJourneyHtml = function() {
    return `
        <p>
            <time>${data[0].date}</time>
        </p>
        <h1>${data[0].title}</h1>
        <p class="desc">${data[0].description}</p>
        <img class="main-img" src="${data[0].img}"
             alt="${data[0].title}">
    `
}

function renderJourneyHtml() {
    const journeySection = document.getElementById('journey');
    const journeyDesc = journeySection.innerHTML;
    journeySection.innerHTML = getJourneyHtml();
    journeySection.innerHTML += journeyDesc;
}

renderJourneyHtml();

