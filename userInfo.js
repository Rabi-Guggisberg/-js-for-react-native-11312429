const arrayManipulation = require("./arrayManipulation")

let idCounter = 1

function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("Match the arguments to have the same length")
    }

    const profiles = []

    for (let i = 0; i < names.length; i++) {
        const {originalname, modifiedname} = {originalname: names[i], modifiedname: modifiedNames[i]}   
        
        profiles[i] = {originalname, modifiedname, id: idCounter++}
    }

    return profiles
}

const names = ["John", "Kofi", "Paul", "Rabi", "Evans"]
const processArray = arrayManipulation.processArray([4,2,7,8,9])
const modifiedname = arrayManipulation.formatArrayStrings(names, processArray)
const profiles = createUserProfiles(names, modifiedname)
console.log(profiles)