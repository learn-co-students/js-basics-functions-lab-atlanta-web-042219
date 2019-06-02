// Code your solution in this file!
function distanceFromHqInBlocks (input) {
  return Math.abs(input - 42)
}

function distanceFromHqInFeet (input) {
  return distanceFromHqInBlocks(input) * 264
}

function distanceTravelledInFeet (start, end) {
  return Math.abs(end - start) * 264
}

function calculatesFarePrice (start, end) {
  const feet = distanceTravelledInFeet(start, end);
  if (feet < 400) {
    return 0;
  } else if (feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}