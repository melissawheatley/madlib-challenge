'use strict';

const madLib={};

const madLibrary = {
    pluralNoun1: "bears",
    adjective1: "pretty",
    noun: "street",
    typeOfFood: "mexican",
    articleOfClothing: "dickey",
    verbEndingIning: "wallowing",
    pluralNoun2: "trees",
    pluralNoun3: "lasers",
    numberVal: "113",
    celebrity: "Taylor Swift",
    color: "golden rod",
    verbEndingIning2: "licking",
    typeOfFood: "Italian sweets",
    pluralNoun: "concrete shoes",
    adjective2: "gloomy",
    adjective3: "claustrophobic"
 }


if(!localStorage.getItem('madLibraryData')){
    console.log('setting madlib library');
    populateStorage();
}else{
    console.log("get library");
    getDB();
}

function populateStorage(){
    const dbObjToString = JSON.stringify(madLibrary);
    localStorage.setItem('madLibraryData', dbObjToString);
}


function getDB(){
    const db = localStorage.getItem('madLibraryData');
    const parseDB = JSON.parse(db);
    console.log('pluralNoun', parseDB.pluralNoun);
    document.getElementById('main').innerHTML=`Would it surprise you to learn that the most majestic ${parseDB.pluralNoun} in the world eat garbage? Well, they do! Everything from ${parseDB.adjective} soda cans to ${parseDB.noun}-stained ${parseDB.typeOfFood} boxes to used ${parseDB.articleOfClothing} - and more! Some have been spotted ${parseDB.verbEndingIning} dumpsters and then using their long ${parseDB.pluralNoun1} to spear as many bags of ${parseDB.pluralNoun2} as they can before being caught. According to an interview with the Number Minutes News, ${parseDB.celebrity} once came home to find a/an ${parseDB.color} unicorn ${parseDB.verbEndingIning2} up in the recycling bin. The poor thing had mistaken leftover ${parseDB.pluralNoun3} for dried up plural noun. "It was a/an ${parseDB.adjective3} mistake. I am a good cook!"`;
}





