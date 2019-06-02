// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(42 - blocks)
}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264)
}

function distanceTravelledInFeet(begin, end) {
    return Math.abs((begin - end) * 264)
}

function calculatesFarePrice(begin, end) {
    if (distanceTravelledInFeet(begin, end) < 400) {
        return 0
    }
    else if (distanceTravelledInFeet(begin, end) > 400 && distanceTravelledInFeet(begin, end) < 2000) {
        return ((distanceTravelledInFeet(begin, end) - 400) * .02)
    }
    else if (distanceTravelledInFeet(begin, end) > 2000 && distanceTravelledInFeet(begin, end) < 2499) {
        return 25
    }
    else if (distanceTravelledInFeet(begin, end) > 2500) {
        return 'cannot travel that far'
    }
}