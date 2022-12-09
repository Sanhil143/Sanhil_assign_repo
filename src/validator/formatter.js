function trim(name){
      // const name = "   Sanhil Rai   "
      const trimmedName = name.trim()
      console.error(trimmedName)
      
}

function changeToLowerCase(bookName){
      // const bookName = "EncYclOpEdiA"
      const lowerName = bookName.toLowerCase()
      console.error(lowerName);
}

function changeToUpperCase(carName){
      // const carName = "harrier"
      const upperName = carName.toUpperCase()
      console.error(upperName);
}

module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase

