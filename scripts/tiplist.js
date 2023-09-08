import {getTips} from './database.js'

export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipList">'

    // Create HTNL representations of each fish here
    for (const singleTip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div class="tip_list">${singleTip}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}