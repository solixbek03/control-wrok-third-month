const elForm = document.querySelector(".hero__form");
let elSelect = elForm.querySelector(".hero__select");
let elBread = document.querySelector(".results__spanBread");

elSelect.addEventListener('click', function(evt){
  evt.preventDefault();

  let elSelectVall = elSelect.value;

  if (elSelectVall == 'Yupqa') {
    elBread.textContent = 'Yupqa';
  } else if (elSelectVall == 'Ortacha') {
    elBread.textContent = `O'rtacha`;
  } else if (elSelectVall == 'Qalin') {
    elBread.textContent = 'Qalin';
  }
})

// ================================= SECOND Form ======================================================

let elRadioF = document.querySelector(".hero__radioF");
let elRadioS = document.querySelector(".hero__radioS");
let elRadioT = document.querySelector(".hero__radioT");
let elSizeF = document.querySelector(".radioF__input");
let elSizeS = document.querySelector(".radioS__input");
let elSizeT = document.querySelector(".radioT__input");
let elSize = document.querySelector(".results__spanSize");

elRadioF.addEventListener('click', function(evt){
  evt.preventDefault();

  let elRadioFcheck = elRadioF.checked;

  if (elRadioFcheck == true) {
    elSize.textContent = '';
    elSize.textContent = elSizeF.textContent;
  }
})

elRadioS.addEventListener('click', function(evt){
  evt.preventDefault();

  let elRadioScheck = elRadioS.checked;

  if (elRadioScheck == true) {
    elSize.textContent = '';
    elSize.textContent = elSizeS.textContent;
  }
})

elRadioT.addEventListener('click', function(evt){
  evt.preventDefault();

  let elRadioTcheck = elRadioT.checked;

  if (elRadioTcheck == true) {
    elSize.textContent = '';
    elSize.textContent = elSizeT.textContent;
  }
})

// ========================================== Third Form =============================================


let elFormCheckbox = document.querySelector('.hero__formS');
let elList = document.querySelector('.results__listF');
let createLiF = document.createElement('li');
let createLiS = document.createElement('li');
let createLiT = document.createElement('li');
let createLiFF = document.createElement('li');
let createLiFS = document.createElement('li');
let createLiFT = document.createElement('li');
let elCheckboxF = document.querySelector('.hero__checkboxF');
let elCheckboxS = document.querySelector('.hero__checkboxS');
let elCheckboxT = document.querySelector('.hero__checkboxT');
let elCheckboxFF = document.querySelector('.hero__checkboxFF');
let elCheckboxFS = document.querySelector('.hero__checkboxFS');
let elCheckboxFT = document.querySelector('.hero__checkboxFT');
let pomidor = 'Pomidor';
let kurka = 'Kurka goshti';
let zaytun = 'Zaytun';
let tuzlanganBodiring = 'Tuzlangan bodiring';
let qoziqorin = 'Qoziqorin';
let qazi = 'Qazi';

elCheckboxF.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxF.checked == true) {
    createLiF.textContent = pomidor;
    elList.appendChild(createLiF);
  } else if (elCheckboxF.checked == false) {
    elList.removeChild(createLiF);
  }
})

elCheckboxS.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxS.checked == true) {
    createLiS.textContent = kurka;
    elList.appendChild(createLiS);
  } else if (elCheckboxS.checked == false) {
    elList.removeChild(createLiS);
  }
})

elCheckboxT.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxT.checked == true) {
    createLiT.textContent = zaytun;
    elList.appendChild(createLiT)
  } else if (elCheckboxT.checked == false) {
    elList.removeChild(createLiT)
  }
})

elCheckboxFF.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxFF.checked == true) {
    createLiFF.textContent = tuzlanganBodiring;
    elList.appendChild(createLiFF)
  } else if (elCheckboxFF.checked == false) {
    elList.removeChild(createLiFF)
  }
})

elCheckboxFS.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxFS.checked == true) {
    createLiFS.textContent = qoziqorin;
    elList.appendChild(createLiFS)
  } else if (elCheckboxFS.checked == false) {
    elList.removeChild(createLiFS)
  }
})

elCheckboxFT.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxFT.checked == true) {
    createLiFT.textContent = qazi;
    elList.appendChild(createLiFT)
  } else if (elCheckboxFT.checked == false) {
    elList.removeChild(createLiFT)
  }
})

// ============================== Fourth Form ===========================================================
let createLiChili = document.createElement('li');
let createLiSausage = document.createElement('li');
let elcheckboxSF = document.querySelector('.checkboxF');
let elcheckboxSS = document.querySelector('.checkboxS');
let elListF = document.querySelector('.results__listS')
let chili = 'Achchiq';
let sausage = 'Sasiskali'

elcheckboxSF.addEventListener('change', function(event){
  event.preventDefault();

  if (elcheckboxSF.checked == true) {
    createLiChili.textContent = chili;
    elListF.appendChild(createLiChili)
  } else if (elcheckboxSF.checked == false) {
    elListF.removeChild(createLiChili)
  }
})

elcheckboxSS.addEventListener('change', function(event){
  event.preventDefault();

  if (elcheckboxSS.checked == true) {
    createLiSausage.textContent = sausage;
    elListF.appendChild(createLiSausage)
  } else if (elcheckboxSS.checked == false) {
    elListF.removeChild(createLiSausage)
  }
})