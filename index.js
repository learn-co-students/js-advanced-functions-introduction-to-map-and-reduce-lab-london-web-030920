// Your code here

const mapToNegativize = (array) => {
    return array.map(number => number * -1)
}

////// proving can do there way ///////
const mapToNoChange = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++ ) {
      newArray.push(array[i])
    }
    return newArray
}

const mapToDouble = (array) => {
    return array.map(number => number * 2)
}

const mapToSquare = (array) => {
    return array.map(number => Math.pow(number, 2))
}

///////////// proving i can do it ther way /////////////
const reduceToTotal = (array, starting=0) => {
    let number = starting 
    for (let i = 0; i < array.length; i++ ) {
        number += array[i]
    }
    return number
}

function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }