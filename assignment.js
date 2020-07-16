//* JavaScript program to Convert Feet unit to Mile
function feetToMile(input) {
    if (input < 0) {
        console.log("You may not entered valid input. Please check!");
    }
    let feet = parseFloat(input);
    let miles = 0.000189394 * feet;
    console.log("Value in Mile : " + miles.toFixed(6));
}
//! Output check
feetToMile(10);



//* JavaScript program to determine amount of wood
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        console.log("Please! Enter valid input.");
    }

    totalWood = (chair * 1) + (table * 3) + (bed * 5);
    console.log("Total wood needed : " + totalWood + "cf.");
}
//! Output check
woodCalculator(1, 5, 10);



//* JavaScript program to calculate total Brick
function brickCalculator(floor) {
    let totalBrick;
    if (floor <= 0) {
        console.log("Sorry! Negative input not allowed.");
        return;
    }
    if (floor <= 10) {
        totalBrick = floor * 15 * 1000;
    } else if (floor <= 20) {
        totalBrick = (10 * 15 * 1000) + ((floor - 10) * 12 * 1000);
    } else {
        totalBrick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000);
    }
    console.log("Total brick needed to build the building: " + totalBrick);
}
//! Output check
brickCalculator(25);




//* JavaScript program to find Tiny Friend
function tinyFriend(friends) {
    if (friends.length == 0) {
        console.log("Please enter a valid list.");
        return;
    }

    let tiny = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length < tiny.length) {
            tiny = friends[i];
        }
    }
    console.log("Tiny friend is: " + tiny);
}
//! Output check
tinyFriend(['jahed', 'omi', 'bush']);