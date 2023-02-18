//THE FURTUNE TELLER 
function furtuneTeller(jobTitle,location,partnerName,numberOfChildren){
    let result =`your wii be an, ${jobTitle}in ${location} and married to ${partnerName} with ${numberOfChildren} kids`
    return result 
  }
  console.log(furtuneTeller('Engineer','Yaba','Eminent',7))
  console.log(furtuneTeller('Banker','Mushin','Rosh',8))
  console.log(furtuneTeller('Engineer','Surulere','Poch',9))
  
  //THE PUPPY AGE CALCULATOR n 
  function calculateDogAge(pupyage){
    result = pupyage*7
    let age= `Your doggie is ${result} years old in dog years`
    return age
  }
  console.log(calculateDogAge(3))
  console.log(calculateDogAge(15))
  console.log(calculateDogAge(35))
  
  //THE LIFETIME SUPPLY CALCULATOR
  function CalculateSupply(age, amountPerDay){
    const DAYS_IN_YEAR = 365 
    const MAX_AGE = 105
    result = (MAX_AGE -age)*amountPerDay*DAYS_IN_YEAR
    let amountConsumed = `you will need ${result} to last you untill the ripe old age of ${age}`
    return amountConsumed
  }
  console.log(CalculateSupply(5,15))
  console.log(CalculateSupply(2,10))
  console.log(CalculateSupply(25,5))

  //THE GEOMETRIZER
  // CALCULATE CIRCUMFERENCE 
  function calcCircumference(radius){
   const pi = 22/7
   result = 2*pi*radius
   let cirCumference = `The circuference is ${result}`
   return cirCumference
  }
   console.log(calcCircumference(3))
   console.log(calcCircumference(1.5))  
   console.log(calcCircumference(7))

 // CALCULATE AREA
function calcArea(radius){
    const pi = 22/7
    result =  pi*radius**2
    let Area = `The araea is ${result}`
    return Area
   }
    console.log(calcArea(3))
    console.log(calcArea(1.5))  
    console.log(calcArea(7))

    //THE TEMPERATURE CONVERTER 
    //CONVERSION FROM CELSIUS TO FAHRENHELT
    function celsiusToFahrenheit(celsius){
        fahrenhelt = (1.8*celsius)+32
        let result = `${celsius}^oC is ${fahrenhelt}^oF `
        return result
    }
    console.log(celsiusToFahrenheit(23))
    console.log(celsiusToFahrenheit(-15))
    console.log(celsiusToFahrenheit(98))

    //CONVERSION FROM FAHRENHHELT
    function fahrenheitToCelsius(fahrenhelt){
        celsius = (fahrenhelt-32)+5/9
        let result = `${fahrenhelt}^oF is ${celsius}^oC `
        return result
    }
    console.log(fahrenheitToCelsius(23))
    console.log(fahrenheitToCelsius(-15))
    console.log(fahrenheitToCelsius(98))

