const percentageEquivalentValueOfGifts = 0.1;

const listOfGifts = [1,6,6,10];
console.log("list of gifts: ", listOfGifts);
console.log("--------------------------------");

let purchaseValue = 110;
console.log("Purchase value: ", purchaseValue);
let result = pairOfGifts(listOfGifts, purchaseValue);
console.log("pair of gifts: ", result);
console.log("--------------------------------");

purchaseValue = 120;
console.log("Purchase value: ", purchaseValue);
result = pairOfGifts(listOfGifts, purchaseValue);
console.log("pair of gifts: ", result);
console.log("--------------------------------");

purchaseValue = 12;
console.log("Purchase value: ", purchaseValue);
result = pairOfGifts(listOfGifts, purchaseValue);
console.log("pair of gifts: ", result);

/**
 * Calculate the percentage equivalent of purchase value.
 * Eg: 10% of 100 = 10
 * * @param purchaseValue 
 */
function calculatePercentageEquivalentValueOfGifts(purchaseValue) 
{
    return purchaseValue * percentageEquivalentValueOfGifts; // for our problem we have assument the percentage to be 10%
}

/**
 * Find the pair of gifts from the gift array such that they add up to target percentage equivalent of purchase value.
 * Time complexity of this function is O(n^2);
 * @param listOfGifts 
 * @param purchaseValue 
 */
function pairOfGifts(listOfGifts, purchaseValue)
{
    let resultArray = [];
    try
    {
        if (purchaseValue > 100)
        {
            const targetValue = calculatePercentageEquivalentValueOfGifts(purchaseValue);
            for (let i = 0; i < listOfGifts.length; i++)
            {
                for (let j = i + 1; j < listOfGifts.length; j++)
                {
                    if (listOfGifts[j] === targetValue - listOfGifts[i])
                    {
                        return [i , j];
                    }
                }
            }
        }
        else
        {
            throw("Purhcase value has to greater than 100 dollars");
        }
    }
    catch(e)
    {
        console.log(e);
    }
    return resultArray;

}