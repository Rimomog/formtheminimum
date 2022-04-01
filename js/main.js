function minValue(values){
    //your code here
      return Number(values.sort().filter( (element, index) => values.indexOf(element) === index).join(''))
  }