function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42;
  } else {
    return 42 - block;
  }
}

function distanceFromHqInFeet(block) {
  let blocks = distanceFromHqInBlocks(block);
  return (blocks * 264);
}

function distanceTravelledInFeet(num1, num2) {
  if (num1 > num2) {
    let blocks1 = (num1 - num2);
    return (blocks1 * 264);
  } else {
    let blocks2 = (num2 - num1);
    return (blocks2 * 264);
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2499) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}