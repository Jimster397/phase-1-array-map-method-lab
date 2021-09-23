const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   tutorials.map(function(cb, context){
//     return titleCased.charAt(0).toUpperCase() + titleCased.slice(1)
//   }) 
  
  
//   //return tutorials
// }
// const caps = (cb, context).split(' ').map(capitalize).join(" ")
// caps;
// function titleCased () {
//     let newArray = tutorials.map((array) => {
//     return array.split(" ") + array.charAt(0).toUpperCase() + array.join(' ') //+ array.substr(1) 
//   }); 
//   return newArray;
//   }
  
  //tutorials.map(tutorial => 
  // tutorial.charAt(0).toUpperCase()+ tutorial.substr(1));
  //console.log(tutorials)
  const titleCased = () => {
    let newOne = tutorials.map(function whatever(element){
      let arrayOfWords = element.split(" ");
      let innerArray = arrayOfWords.map(function(elements){
        let capitals = elements[0].toUpperCase() + elements.slice(1)
        return capitals
      })
      let final =innerArray.join(' ')
      console.log(final)
      return final;
    })
    return newOne
  }
  console.log(titleCased())