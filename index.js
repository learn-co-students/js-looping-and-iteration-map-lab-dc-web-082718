// Code your solution in this file.
function lowerCaseDrivers(driversArray){
  return driversArray.map(driver => driver.toLowerCase())
}

function nameToAttributes(driversArray){
  return driversArray.map(function(driver){
    return Object.assign({}, {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]})
  })
}

function attributesToPhrase(driversHash){
  return driversHash.map(driver => `${driver.name} is from ${driver.hometown}`)
}
