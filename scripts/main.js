import { getFish } from './database.js'

const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
}

import { getTips } from './database.js'

const allTips = getTips()

for (const singleTips of allTips) {
    console.log(singleTips)
}

import { getLocation } from './database.js'

const allLocations = getLocation()

for (const singleLocation of allLocations) {
    console.log(singleLocation)
}



// Import the FishList function from the correct module
import {FishList} from './Fishlist.js'

let FinalFishList = document.querySelector('#fish-list')

FinalFishList.innerHTML = FishList()


import {TipList} from './tiplist.js'

let FinalTipList = document.querySelector('#tips')

FinalTipList.innerHTML = TipList()


import {LocationsList} from './locationlist.js'

let FinalLocationsList = document.querySelector('#locations')

FinalLocationsList.innerHTML = LocationsList()