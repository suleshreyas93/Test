Problem Statement:
Nordstrom is running a promotion: Any customer who spends more than $100 will receive 2 free gifts. 
The value of those 2 free gifts is equivalent to 10% of the purchase value.
For example, if someone purchases a handbag for $600, the customer will receive a gift at $10 value and a second gift at $50 value.
The goal is to come up with an algorithm to identify a pair of gifts for any customers who purchases more than $100 worth of products.

Assumptions:

- Answer in written in node.js
- There's at least one pair of gifts that will add up to the correct gift value.
- We do not want to give a customer the same gift twice

Example:
- Given this list of gifts [1, 6, 6, 10] 
- For a purchase price of 110 the function should return [0,3] (1+10=11=110*10%)
- For a purchase price of 120 should return [1,2] (6+6=12=120*10%)

--------------------------------------------------------------------------------

Steps to run the program
- Make sure you have Node.js installed on your machine
- Navigate to the folder where PairOfGifts.js file is saved
- Open terminal in that folder
- Type "node PairOfGifts.js" to execute the program