class Pet {
  constructor(data) {
    Object.assign(this, data);
  }

  setBeenSwiped() {
    this.hasBeenSwiped = true;
  }

  setBeenLiked() {
    this.hasBeenLiked = true;
  }

  getNewPetHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
    return `
        <img class="profile-pic" src="${avatar}" alt="" />
        <img
          id="badge-like"
          class="decision-badge badge-like"
          src="./img/badge-like.png"
          alt=""
        />
        <img  
          id="badge-nope"        
          class="decision-badge badge-nope"
          src="./img/badge-nope.png"
          alt=""
        />
        <div class="profile-text-container">
          <h1 class="profile-title">${name}, ${age}</h1>
          <p class="profile-description">${bio}</p>
        </div>
    `;
  }
}

export default Pet;
