function distanceFromHqInBlocks(block) {
	if (block > 42)
		return block - 42;
	else
		return 42 - block;
}

function distanceFromHqInFeet(block) {
	return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(startblock, endblock) {
	return Math.abs(startblock - endblock) * 264;
}

function calculatesFarePrice(startblock, endblock) {
	const distance = distanceTravelledInFeet(startblock, endblock)

	if (distance <= 400)
		return 0;

	if (400 < distance && distance <= 2000)
		return (distance - 400) * 0.02;

	if (2000 < distance && distance < 2500)
		return 25;

	else
		return 'cannot travel that far';
}
