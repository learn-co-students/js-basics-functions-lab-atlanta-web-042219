// Code your solution in this file!
let hQ = 42;
let pickUp = 43;

function distanceFromHqInBlocks(pickUp){
  if (pickUp > hQ){
    return (pickUp - hQ);
  }
  else
  {
    return (hQ - pickUp);
  }
}

function distanceFromHqInFeet(pickUp){
return distanceFromHqInBlocks(pickUp) * 264;
}
//
//
function distanceTravelledInFeet(hQ, pickUp){
  return Math.abs(pickUp - hQ) * 264;
}
//
function calculatesFarePrice(hQ, pickUp){
  const distance = distanceTravelledInFeet(hQ, pickUp);

  if (distance <= 400){return 0;}
  else if
  (distance > 400 && distance <= 2000){return (distance - 400) * .02;}
  else if
  (distance > 2000 && distance < 2500){return 25;}
  else if
  (distance > 2500){return 'cannot travel that far';
}
}
