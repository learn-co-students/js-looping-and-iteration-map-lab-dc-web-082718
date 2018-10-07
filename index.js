// Code your solution in this file.

function lowerCaseDrivers(obj) {
  return obj.map(function(driverName) {
    return driverName.toLowerCase();
  })
}

function nameToAttributes(arr) {
  return arr.map(function(name) {
    return Object.assign({}, {firstName: name.split(' ')[0]}, {lastName: name.split(' ')[1]})
  });
}

function attributesToPhrase(arr) {
  return arr.map(function(obj) {
    return `${obj.name} is from ${obj.hometown}`
  });
}
