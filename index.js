function driversWithRevenueOver(drivers, rev) {
  return drivers.filter( driver => driver.revenue > rev);
};

function driverNamesWithRevenueOver(drivers, rev) {
  return driversWithRevenueOver(drivers, rev).map(driver => driver.name);
}

function exactMatch(drivers, rev) {
  return drivers.filter( drivers => drivers[Object.keys(rev)[0]] === rev[Object.keys(rev)[0]] );
}

function exactMatchToList(drivers, rev) {
  return exactMatch(drivers, rev).map(driver => driver.name)
}
