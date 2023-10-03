/*
This code was written By Enarebebe Abraham
mail:enarebebenatthan@gmail.com
*/



function generateRandomArray(array) {
    // randomly generated N  length array 0 <= A[N] <= N

    var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}


function createRandomHash(array) {
    // random hash table to make searching O(1)
    var randomArray = generateRandomArray(array)
    var newHash = {}
    for (let i = 0; i < array.length; i++) {
        if (randomArray[i] != undefined) {
            
        newHash[i+1] = randomArray[i]
        }
    }
    return newHash
}

function createArray(arrayLength) {
    
    for (var array=[],i=1;i<arrayLength;++i) array[i]=i;

    return array
}

function prisonerFound(randomizedHash, prisonerNo) {
    // The time complexity O(noOfBoxToOpen)

    var noOfBoxToOpen = 50
    var hashSize = 100
    var positionOfPointeer = prisonerNo
    var doNotKill = false
    var arrayOfVal = []

    for (let i = 0; i <= noOfBoxToOpen; i++) {
        arrayOfVal.push(randomizedHash[positionOfPointeer])
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
    console.log(prisonerNo, arrayOfVal, doNotKill);
    return doNotKill

}

function loadResult(N) {
    var prisonerArray = createArray(N)
    var randomHash = createRandomHash(prisonerArray)
    for (let i = 0; i < prisonerArray.length; i++) {
        if (!prisonerFound(randomHash,prisonerArray[i])) {
            // kill all prisoners
            console.log('kill all prisoners', );
            i=prisonerArray.length;
        }
    }
}
loadResult(100)