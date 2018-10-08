function lowerCaseDrivers(list) {
  return list.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(drvr) {
    const first = drvr.split(" ")[0];
    const last = drvr.split(" ")[1];
    return {firstName: first, lastName: last };
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    const name = driver.name;
    const hometown = driver.hometown;
    return `${name} is from ${hometown}`;
  })
}
