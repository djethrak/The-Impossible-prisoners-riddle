
function loadRiddle(randomizedHash, prisonerNo) {
    // The time complexity O(noOfBoxToOpen)

    var noOfBoxToOpen = 50
    var hashSize = 100
    var positionOfPointeer = prisonerNo
    var doNotKill = false

    for (let i = 0; i <= noOfBoxToOpen; i++) {
        if (randomizedHash[positionOfPointeer] == prisonerNo) {
            doNotKill = true
            i = noOfBoxToOpen+1
        }
        if (positionOfPointeer == hashSize) {
            positionOfPointeer = 1
        }
        else{
            positionOfPointeer++
        }
        
    }

    return doNotKill

}