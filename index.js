function findMatching(drivers, searchString) {
    return drivers.filter(driver => driver.toLowerCase() === searchString.toLowerCase());
}
function fuzzyMatch(drivers, startingLetters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(startingLetters.toLowerCase()));
}
function matchName(drivers, searchString) {
    return drivers.filter(driver => driver.name === searchString);
}
