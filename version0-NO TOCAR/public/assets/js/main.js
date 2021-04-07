'use strict';

const inputsTextConfig = [
  {
    inputClass: '.js-name',
    cardClass: '.js-preview-name',
    defaultValue: 'Mary Shelly',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.js-job',
    cardClass: '.js-preview-job',
    defaultValue: 'Master of creatures',
    cardPrefix: '',
    cardElementAttribute: 'innerHTML',
  },
  {
    inputClass: '.js-email',
    cardClass: '.js-preview-email',
    defaultValue: '',
    cardPrefix: 'mailto:',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-phone',
    cardClass: '.js-preview-phone',
    defaultValue: '',
    cardPrefix: '',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-linkedin',
    cardClass: '.js-preview-linkedin',
    defaultValue: '',
    cardPrefix: 'https://www.linkedin.com/in/',
    cardElementAttribute: 'href',
  },
  {
    inputClass: '.js-github',
    cardClass: '.js-preview-github',
    defaultValue: '',
    cardPrefix: 'https://www.github.com/',
    cardElementAttribute: 'href',
  },
];

function updateAllInputs() {
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    const cardElement = document.querySelector(inputTextConfig.cardClass);

    let newValue = inputElement.value;

    if (inputTextConfig.cardElementAttribute === 'innerHTML') {
      if (inputElement.value === '') {
        newValue = inputTextConfig.defaultValue;
      } else {
        newValue = inputElement.value;
      }

      cardElement.innerHTML = newValue;
    } else if (inputTextConfig.cardElementAttribute === 'href') {
      if (inputElement.value === '') {
        newValue = '#';
      } else {
        newValue = newValue.replace(inputTextConfig.cardPrefix, '');
        newValue = inputTextConfig.cardPrefix + newValue;
      }
      cardElement.href = newValue;
    }
  }
  // eslint-disable-next-line no-undef
  saveInLocalStorage();
}
const inputTextElements = document.querySelectorAll('.js-input-text');

for (const inputTextElement of inputTextElements) {
  inputTextElement.addEventListener('keyup', updateAllInputs);
}

'use strict';

const headerElements = document.querySelectorAll('.collapsable__header');

for (const element of headerElements) {
  element.addEventListener('click', collapsableHandler);
}

function collapsableHandler(event) {
  const sectionElement = event.currentTarget.closest('.js-collapsable');

  const sectionElements = document.querySelectorAll('.js-collapsable');
  for (const section of sectionElements) {
    if (sectionElement === section) {
      section.classList.toggle('collapsed');
    } else {
      section.classList.add('collapsed');
    }
  }
}

'use strict';

const paletteElements = document.querySelectorAll('.js-palette');
const cardElement = document.querySelector('.js-card');
let checkedPalette = 0;

function handlerPalette() {
  cardElement.classList.remove('palette-0', 'palette-1', 'palette-2');
  const checkedPaletteElement = document.querySelector('.js-palette:checked');
  checkedPalette = checkedPaletteElement.value;
  cardElement.classList.add('palette-' + checkedPalette);
  // eslint-disable-next-line no-undef
  saveInLocalStorage();
}

for (const paletteElement of paletteElements) {
  paletteElement.addEventListener('change', handlerPalette);
}

// handlerPalette();

'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
let photo = '';

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  photo = fr.result;
  updatePhoto();

  // eslint-disable-next-line no-undef
  saveInLocalStorage();
}

function updatePhoto() {
  const currentPhoto = photo;
  if (currentPhoto !== '') {
    profilePreview.style.backgroundImage = `url(${currentPhoto})`;
    profileImage.style.backgroundImage = `url(${currentPhoto})`;
  }
}
// eslint-disable-next-line no-unused-vars
function clearPhoto() {
  photo = '';
  profilePreview.style.backgroundImage = '';
  profileImage.style.backgroundImage = '';
}

function fakeFileClick(ev) {
  ev.preventDefault();
  fileField.click();
}

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

'use strict';

function getUserData() {
  return {
    // eslint-disable-next-line no-undef
    photo: photo,
    palette: parseInt(document.querySelector('.js-palette:checked').value),
    name: document.querySelector('.js-name').value,
    job: document.querySelector('.js-job').value,
    email: document.querySelector('.js-email').value,
    phone: document.querySelector('.js-phone').value,
    linkedin: document.querySelector('.js-linkedin').value,
    github: document.querySelector('.js-github').value,
  };
}

// eslint-disable-next-line no-unused-vars
function saveInLocalStorage() {
  const userData = getUserData();
  const userDataInString = JSON.stringify(userData);
  localStorage.setItem('userData', userDataInString);
}

// eslint-disable-next-line no-unused-vars
function getFromLocalStorage() {
  const userDataInString = localStorage.getItem('userData');
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    document.querySelector('.js-name').value = userData.name;
    document.querySelector('.js-job').value = userData.job;
    document.querySelector('.js-email').value = userData.email;
    document.querySelector('.js-phone').value = userData.phone;
    document.querySelector('.js-linkedin').value = userData.linkedin;
    document.querySelector('.js-github').value = userData.github;
    // eslint-disable-next-line no-undef
    photo = userData.photo;
    const paletteElements = document.querySelectorAll('.js-palette');
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }

    // eslint-disable-next-line no-undef
    updateAllInputs();
    // eslint-disable-next-line no-undef
    handlerPalette();
    // eslint-disable-next-line no-undef
    updatePhoto();
  }
}

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const shareButton = document.querySelector('.js-share-btn');
const cardResult = document.querySelector('.js-shareclick');

const twitterHiddenElement = document.querySelector('.js-twitter-share');

let shareLink = '';

function handleCreateBtn(ev) {
  ev.preventDefault();

  fetchAPI();

  shareButton.classList.remove('share__button');
  shareButton.classList.add('share__button--dis');
  shareButton.disabled = true;
  twitterHiddenElement.classList.remove('hidden-share');
}

shareButton.addEventListener('click', handleCreateBtn);

function fetchAPI() {
  const url = 'https://profileawesome.herokuapp.com/card';
  const data = getUserData();
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log('Server response:', data);
      if (data.success === true) {
        data.cardURL;
        shareLink = data.cardURL;
        const linkElement = document.querySelector('.js-card-link');
        linkElement.innerHTML = `<a href="${shareLink}" class="shareclick__text js-shareclick" target="_blank">${shareLink}</a>;`;
      } else {
        cardResult.innerHTML = data.error;
      }
    });
}

/* eslint-disable no-undef */

'use strict';

const buttonElement = document.querySelector('.js-reset');

function resetAll() {
  for (const inputTextConfig of inputsTextConfig) {
    const inputElement = document.querySelector(inputTextConfig.inputClass);
    inputElement.value = inputTextConfig.defaultValue;
  }

  clearPhoto();
  updateAllInputs();
  clearInputs();
}

function clearInputs() {
  const inputNameElement = document.querySelector('.js-name');
  const inputJobElement = document.querySelector('.js-job');
  inputJobElement.value = '';
  inputNameElement.value = '';
  shareButton.classList.remove('share__button--dis');
  shareButton.disabled = false;
  shareButton.classList.add('share__button');
  twitterHiddenElement.classList.add('hidden-share');
}

buttonElement.addEventListener('click', resetAll);

/* eslint-disable no-undef */
'use strict';

const twitterElement = document.querySelector('.js-twitter-btn');
const twitterLinkElement = document.querySelector('.js-twitter-link');

function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${shareLink}`;
}
twitterElement.addEventListener('click', handleTwitterShare);

'use strict';

const formElement = document.querySelector('.js-form');

function preventSubmit(event) {
  event.preventDefault();
}
formElement.addEventListener('submit', preventSubmit);

// eslint-disable-next-line no-undef
getFromLocalStorage();

// eslint-disable-next-line no-undef
updateAllInputs();
// eslint-disable-next-line no-undef
handlerPalette();
// eslint-disable-next-line no-undef
updatePhoto();

//# sourceMappingURL=main.js.map
