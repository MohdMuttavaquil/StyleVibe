import Fuse from 'fuse.js'
import { showAlertToast } from '../utlis/toast'

// Find best Categori for items 
const categoryKeywords = {
    "mens were": ["jeans", "shirt", "tshirt", "men wear", "jackets", "for men"],
    "womens were": ["Saree", "Lehenga", "Top", "womens were", "for women", "kurti"],
    "Jewelary": ["ring", "necklace"],
    "shose": ["sports shoes", "casual shoes", "Boot", "shose"],
    "mens Accessories": ["watch", "perfume", "belt", "for men"],
    "Beauity Products": ["lipstick", "foundation", "cream", "makeup", "for women"],
    "kids wear": ["kids", "boy", "girl", "children"]
}
const setCategoy = (word) => {

    for (const category in categoryKeywords) {
        if (categoryKeywords[category].some(keyword => word.includes(keyword))) {
            return category;
        }
    }
}


// Fix Search items spelling
const categories = ["jeans", "shirt", "tshirt", "shoes", "menwear", "Saree", "Lehenga", "womens were", "watch", "perfume", "ring", "necklace", "lipstick", "makeup", "foundation", "cream", "Top", "kids were", "belt", "kids", "boy", "girl", "children", "shose for men", "shose", "sports shoes", "casual shoes", "kurti", "for men", "for women"];
const fuse = new Fuse(categories, { includeScore: true })

const fixMistake = (value) => {

    const name = fuse.search(value)
    if (name.length > 0) {
        const word = name[0].item
        const result = setCategoy(word)
        return result
    } else {
        showAlertToast(`${value} did not find any items `)
    }

}

export { fixMistake }