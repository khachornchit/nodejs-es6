console.log("Working with files");
let fileManager = require('./fileManager');
let fileName = __dirname + '/../../data/log.json';
fileManager.createFile(fileName);

let data = {
    data: [{
        type: "articles",
        id: "1",
        attributes: {
            title: "JSON:API paints my bikeshed!",
            body: "The shortest article. Ever."
        },
        relationships: {
            author: {
                data: { "id": "42", "type": "people" }
            }
        }
    }],
    included: [
        {
            type: "people",
            id: "42",
            attributes: {
                name: "John"
            }
        }
    ]
}

let appendData = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [
        {
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}

data.superHero = appendData;

fileManager.saveFile(data, fileName);

fileManager.readFile(fileName);