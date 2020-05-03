// Your code here
const mapToNegativize = (array) => {
    return array.map(number => number * -1)
}

const mapToNoChange = (array) => {
    return array.map(number => number)
}

const mapToDouble = (array) => {
    return array.map(number => number * 2)
}

const mapToSquare = (array) => {
   return array.map(number => number * number)
}

const reduceToTotal = (array, startingValue = 0) => {
    return array.reduce((accum, initialValue) => accum + initialValue, startingValue)}

const reduceToAllTrue = (array) => {
    if (array.reduce(element => !element)){
        return false
    }
    else {
        return true
    }
}

const reduceToAnyTrue = (array) => {
    if (array.reduce(element => !element)){
        return false
    }
    else {
        return true
    }
}