import pets from './data.js';
import Pet from './Pet.js';
import {
  setCrossButton,
  setLikeButton,
  swipedProfiles,
  likedProfiles,
  renderResult,
} from './utils.js';

const getNewProfile = () => {
  const newProfile = new Pet(pets[0]);
  return newProfile;
};

document.getElementById('cross-btn').addEventListener('click', () => {
  setCrossButton();
});
document.getElementById('like-btn').addEventListener('click', setLikeButton);

const renderProfile = () => {
  if (pets.length) {
    document.getElementById('profile-container').innerHTML =
      getNewProfile().getNewPetHtml();
  } else {
    renderResult(likedProfiles, swipedProfiles);
  }
};

renderProfile();

export { renderProfile, getNewProfile };
