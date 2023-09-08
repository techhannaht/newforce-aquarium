import {getLocation} from './database.js'

export const LocationsList = () => {
   
    const locations = getLocation()

  
    let htmlString = '<article class="locationsList">'

    for (const singleLocation of locations) {

        htmlString += `<section class="location card">
            <div><img  class="location__img image--card" src="${singleLocation.image}" /></div>
            <div class="location__qutoe">${singleLocation.quote}</div>
            <div class="location__city">${singleLocation.city}</div>
            <div class="location__country">${singleLocation.country}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}