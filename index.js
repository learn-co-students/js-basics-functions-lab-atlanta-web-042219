// Code your solution in this file!

function distanceFromHqInBlocks(blockNumber){
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}


function distanceFromHqInFeet(blockNumber){
 return distanceFromHqInBlocks(blockNumber) * 264
}


function distanceTravelledInFeet(startBlock, endBlock){
  return Math.abs((endBlock - startBlock)) * 264
}


function calculatesFarePrice(startBlock, endBlock){
  var dist = distanceTravelledInFeet(startBlock, endBlock)
  if (dist < 400) {
    return 0;
  } else if(dist > 400 && dist < 2000) {
    return (dist - 400) * 0.02;
  } else if(dist > 2000 && dist < 2500){
    return 25;
  } else {
    return "cannot travel that far";
  }
}
