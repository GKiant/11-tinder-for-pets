import pets from './data.js';
import { renderProfile } from './index.js';

const mainContainer = document.getElementById('main-content');

const swipedProfiles = [];
const likedProfiles = [];

const setCrossButton = () => {
  const nopeBadge = document.getElementById('badge-nope');
  nopeBadge.style.display = 'block';
  pets[0].hasBeenSwiped = true;
  swipedProfiles.push(pets.shift());

  setTimeout(() => {
    nopeBadge.style.display = 'none';
    renderProfile();
  }, 1000);
};

const setLikeButton = () => {
  const likeBadge = document.getElementById('badge-like');
  likeBadge.style.display = 'block';
  pets[0].hasBeenLiked = true;

  likedProfiles.push(pets.shift());

  setTimeout(() => {
    likeBadge.style.display = 'none';
    renderProfile();
  }, 1000);
};

const renderResult = (likedData, swipedData) => {
  mainContainer.innerHTML = `
  <div class="end-page-container">
    <h2>LIKED PROFILES</h2>
    <div id="liked-container" class="liked-container"></div>
    <h2>SWIPED PROFILES</h2>
    <div id="swiped-container" class="swiped-container"></div>
  </div> 
  `;
  likedData.forEach((element) => {
    document.getElementById('liked-container').innerHTML += `
        <div class="result-container">
          <img class="result-profile-pic" src="${element.avatar}" alt="" />
          <h3 class="result-profile-title">${element.name}, ${element.age}</h3>
        </div>
    `;
  });
  swipedData.forEach((element) => {
    document.getElementById('swiped-container').innerHTML += `
        <div class="result-container">
          <img class="result-profile-pic" src="${element.avatar}" alt="" />
          <h3 class="result-profile-title">${element.name}, ${element.age}</h3>
        </div>
    `;
  });
};

export {
  setCrossButton,
  setLikeButton,
  swipedProfiles,
  likedProfiles,
  renderResult,
};
