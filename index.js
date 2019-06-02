function distanceFromHqInBlocks(distance){
  if (distance > 42){
  return distance - 42;
  } else {
    return 42 - distance;
  }
}

function distanceFromHqInFeet(distance){
  return 264 * distanceFromHqInBlocks(distance);
}

function distanceTravelledInFeet(start, end){
  if (end > start){
  return (end - start) * 264;
  } else{
  return (start - end) * 264;
  }
}

function calculatesFarePrice(start, end){
  const total = distanceTravelledInFeet(start, end);
  if (total <= 400){
    return 0;
  } else if (400 < total && total < 2000){
    return 0.02 * (total - 400);
  } else if (2000 < total && total < 2500){
    return 25;
  } else {
    return "cannot travel that far"
  }
}