var Alexa = require('alexa-sdk');
const responses = require('./responses.json');



//RANDOM NAME GENERATOR

var nameOne = ["Porter", "Fucky", "Chinker", "Swiggy","Frosty", "Albert", "Rufus", "Julio", "Squank",
                "Jorge", "Jeffy", "Olly", "Swamy", "Reed", "Dillern", "Wagner", "Keith",
                "Doddy", "Terry", "Carlos", "Chuck", "Chichi", "Chachi", "Penelope", "Dog",
                "Xander", "Edwin", "Eduardo", "Alfonso", "Winston", "Toby", "Alfred",
                "Bruce", "Morty", "Denton", "Charlie", "Wong", "Wang", "Vaughn", "Davion",
                "Warren", "Laqueefa", "Lauren", "Leonard", "Jackson", "Franz", "Dingus",
                "Martin", "Dipso", "Chandler", "Pizzle", "Darrel", "Cragg", "Johnny",
                "Peter", "Davey", "Lonny", "Flavtarian", "Pecker", "Jamal", "Shaqueefa", "Morris",
                "Mark", "Borf", "Mork", "Micky", "Carl", "Jord", "Frank", "Camtron",
                "Carlton", "Al", "Stentin", "Rob", "Donatello", "Ricky", "Polly", "Raphael","Bryan","Dallas"];


var nameTwo = ["Wolf", "Frosty", "Wisp","Crap","Kill", "Spit", "Speed", "Ooze",
                "Licker", "Frump", "Spinkle", "Mingle", "Bork", "Dendo", "Hurf", "Stank",
                "Stinky", "Dirty", "Pork", "Freizen", "Spank", "Dick", "Dong", "Spork",
                "Sludge", "Slime", "Booger","Dragon", "Spickle", "Clam", "Piss", "Shit", "Fart",
                "Dumpster", "Mink", "Blob", "Winkle", "Piss", "Pork", "Hollow",
                "Smelly", "Grundle", "Broken", "Pickle", "Wank", "Plunk", "Mic"];

var nameThree = ["howell", "funnel", "bucket",
                 "knuckles", "toes", "pecker", "butt", "nickers", "burger", "pants",
                 "dripper", "logg", "bottom", "feetz", "wagon", "flicker",
                 "chucker", "warden", "narf", "boy", "cheese", "snizzle", "stick", "stein",
                 "wintz", "stern", "rash", "schmidt", "fideous", "funker", "dong",
                 "wang", "wad", "fell", "born", "piss", "stench", "odor", "cockles", 
                 "tooth", "potter", "train", "potty"];

function fullName(){
    var a = Math.floor(Math.random() * nameOne.length) + 1;
    var b = Math.floor(Math.random() * nameTwo.length) + 1;
    var c = Math.floor(Math.random() * nameThree.length) + 1;
    var name = nameOne[a] + " " + nameTwo[b] + nameThree[c];
    return name;
};


//DOTA STUFF

var heroes = ['Abaddon', 'Alchemist', 'Ancient Apparition', 'Anti-Mage', 'Arc Warden', 'Axe','Bane', 'Batrider','Beastmaster','Bloodseeker','Bounty Hunter',
              'Brewmaster','Bristleback','Broodmother','Centaur Warrunner ','Chaos Knight','Chen','Clinkz','Clockwerk','Crystal Maiden','Dark Seer','Dazzle',
              'Death Prophet','Disruptor','Doom','Dragon Knight','Drow Ranger','Earth Spirit','Earthshaker','Elder Titan','Ember Spirit','Enchantress','Enigma',
              'Faceless Void','Gyrocopter','Huskar','Invoker','Io','Jakiro','Juggernaut','Keeper of the Light','Kunkka','Legion Commander','Leshrac','Lich',
              'Lifestealer','Lina','Lion','Lone Druid','Luna','Lycan','Magnus','Medusa','Meepo','Mirana','Morphling','Naga Siren','Nature\'s Prophet','Necrophos',
              'Night Stalker','Nyx Assassin','Ogre Magi','Omniknight','Oracle','Outworld Devourer','Phantom Assassin','Phantom Lancer','Phoenix','Puck','Pudge',
              'Pugna','Queen of Pain','Razor','Riki','Rubick','Sand King','Shadow Demon','Shadow Fiend','Shadow Shaman','Silencer','Skywrath Mage','Slardar','Slark',
              'Sniper','Spectre','Spirit Breaker','Storm Spirit','Sven','Techies','Templar Assassin','Terrorblade','Tidehunter','Timbersaw','Tinker','Tiny','Treant Protector',
              'Troll Warlord','Tusk','Underlord','Undying','Ursa','Vengeful Spirit','Venomancer','Viper','Visage','Warlock','Weaver','Windranger','Winter Wyvern',
              'Witch Doctor','Wraith King','Zeus', 'Monkey King', 'Dark Willow', 'Pangolin']


//RANDOM HERO PICKER

function randomHero(){
    var a = Math.floor(Math.random() * heroes.length) + 1;
    var hero = heroes[a];
    return hero;
};


//RANDOM TEAM COMP

// var players = ['Bogdan', 'Rob', 'Ben', 'Allen', 'Dylan', 'Chris', 'Zack'];

// function randomTeam(){



// }; 


//THIS CODE MAKES ALEXA WORK

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {

    'LaunchRequest': function () {
        this.emit(':ask', responses.LaunchRequest.ask);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', responses["AMAZON.HelpIntent"].ask);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', responses["AMAZON.StopIntent"].tell);
    },
    'AMAZON.CancelIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'SessionEndedRequest': function () {
        this.emit('AMAZON.StopIntent');
    },
    'Unhandled': function () {
        this.emit('AMAZON.HelpIntent');
    },
    'RandomName': function () {
        var name = fullName();
        this.response.speak('your name is ' + name);
        this.emit(':responseReady');
        name = "";
    },
    'RandomHero': function() {
        var heroName = randomHero();
        this.response.speak('you should play ' + heroName);
        this.emit(':responseReady');
        heroName = "";
    },
    // 'RandomTeam': function() {
    //     var teamComp = randomTeam();
    //     this.response.speak();
    //     this.emit(':responseReady');
    //     teamComp = "";
    // }




};




