'use strict';
console.log('--- loading handler: _');

const timeEl= document.querySelector('.time');


// change the background image handler


const beBtn = document.querySelector('#be-btn');
const etBtn = document.querySelector('#et-btn');
const idBtn = document.querySelector('#id-btn');
const joBtn = document.querySelector('#jo-btn');
const trBtn = document.querySelector('#tr-btn');

const changeH1 = document.querySelector('.countryName');
const changeH2 = document.querySelector('.placeName');



// Belgium
function beBgImg(){

    document.body.style.backgroundImage = "url('./images/BE_marius_badstuber_unsplash.jpg')";   
    changeH1.innerHTML='BELGIUM';
    changeH2.innerHTML='Grote Markt, Brussels';

};


// Ethiopia
function etBgImg(){

    document.body.style.backgroundImage = "url('./images/ET_mulugeta_wolde_unsplash.jpg')";
    changeH1.innerHTML='ETHIOPIA';
    changeH2.innerHTML='Addis Ababa'; 

};



// Indonesia
function idBgImg(){
    document.body.style.backgroundImage = "url('./images/ID_rashel_ochoa_unsplash.jpg')";
    changeH1.innerHTML='INDONESIA';
    changeH2.innerHTML='Jakarta'; 
};

// Jordan
function joBgImg(){
    document.body.style.backgroundImage = "url('./images/JO_brian_kairuz_unsplash.jpg')";
    changeH1.innerHTML='JORDAN';
    changeH2.innerHTML='Petra'; 
};


// Turkey
function trBgImg(){
    document.body.style.backgroundImage = "url('./images/TR_yonatan_anugerah_unsplash.jpg')";
    changeH1.innerHTML='TURKEY';
    changeH2.innerHTML='Ankara'; 
};

// selecting buttons for changing time
document.querySelector('#countries')

console.log('--- finished handler: _');

