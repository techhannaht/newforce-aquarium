const database = {
   fish: [],
   tips: [],
   locations: [],
}

function makeFish(image, name, species, size, location, ...food){
    const fish = {
        image: image,
        name: name,
        species: species,
        size: size,
        location: location,
        food: food,
    };
    database.fish.push(fish);
}

function makeTip(...tip) {
    database.tips.push(...tip);
}

function makeLocation(quote, image, city, country) {
    const location = {
        quote: quote,
        image: image,
        city: city,
        country: country,
    };
    database.locations.push(location)
}

makeLocation(
    "Visit Sesame Street! ",
    "https://pixy.org/download/1328071/",
    "Sesame Street",
    "Muppet World"
)

makeLocation(
    "Be careful around these parts, folks!",
    "https://qph.cf2.quoracdn.net/main-qimg-86757366fbaa0214697d641898731a2e-lq",
    "The Ocean",
    "Big Dawg's Domain"
)

makeLocation(
    "Joel loves his 2 bed and 2 bath on Bibby St!",
    "https://ap.rdcpix.com/837044274/22f024e2cb12ae6133fcae13caac2372l-m0od-w1024_h768_x2.jpg",
    "Chuck City",
    "USA"
)

makeLocation(
    "AP frequently visits this apartment complex!",
    "https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/cacb0cb54d8576419fbfb131bd1bf8f5-full.jpg",
    "C STREET!",
    "USA"
)


makeTip(
    "Step 1: Test the Water Quality.",
    "Step 2: Remove Algae.",
    "Step 3: Prune the Plants.",
    "Step 4: Turn off Equipment.",
    "Step 5: Vacuum the Substrate.",
    "Step 6: Clean the Filter.",
    "Step 7: Refill the Water.",
    "Step 8: Turn on Equipment."
)

makeFish(
    "https://cdn.drawception.com/drawings/958097/KoPRhG5XlM.png",
    "Kermit",
    "Kermit Fish",
    2,
    "S Street",
    "Bugs"
)

makeFish(
    "https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg",
    "Big Dawg",
    "Great White Shark",
    10,
    "Da Streets",
    "Weaker fish"
)
makeFish(
    "https://i1.sndcdn.com/avatars-pzQMLDOkLxqL2UPX-Rn1Jvg-t500x500.jpg",
    "Joel",
    "Skinny Fish",
    7,
    "Bibby Street",
    "South Beach Diet"
)
makeFish(
    "https://i.pinimg.com/474x/e4/73/4e/e4734efaed57f5d9a800586dd85e43a5.jpg",
    "AP",
    "Lobster",
    4,
    "Big Dawg Rd",
    "CHUMPS"
)

export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

export const getTips = () => {
    return [...database.tips];
}

export const getLocation = () => {
    return database.locations.map(copyOfSingleLocationObject => ({...copyOfSingleLocationObject}))
}

