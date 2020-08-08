'use strict';
console.log('--- loading handler: _');

const timeEl= document.querySelector('.time');


// change the background image handler


const beBtn = document.querySelector('#be-btn');
const etBtn = document.querySelector('#et-btn');
const idBtn = document.querySelector('#id-btn');
const joBtn = document.querySelector('#jo-btn');
const trBtn = document.querySelector('#tr-btn');

function beBgImg(){
    document.body.style.backgroundImage = "url('/images/BE_marius_badstuber_unsplash.jpg')";  
};


function etBgImg(){
    document.body.style.backgroundImage = "url('/images/ET_mulugeta_wolde_unsplash.jpg')";     
};



function idBgImg(){
    document.body.style.backgroundImage = "url('/images/ID_rashel_ochoa_unsplash.jpg')";
};


function joBgImg(){
    document.body.style.backgroundImage = "url('/images/JO_brian_kairuz_unsplash.jpg')";
};


function trBgImg(){
    document.body.style.backgroundImage = "url('/images/TR_yonatan_anugerah_unsplash.jpg')";
};


console.log('--- finished handler: _');

