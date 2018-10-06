// Code your solution in this file.
function lowerCaseDrivers(driversArray) {
  return driversArray.map(x => x.toLowerCase());
}

function nameToAttributes(driversArray) {
  return driversArray.map( x => splitName(x) );
}

function splitName(fullName) {
  const nameArray = fullName.split(" ");
  return { firstName: nameArray[0], lastName: nameArray[1]};
}

function attributesToPhrase(driversArray) {
  return driversArray.map(
    x => `${x.name} is from ${x.hometown}`
  );
}
