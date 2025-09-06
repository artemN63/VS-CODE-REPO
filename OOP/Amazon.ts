// Create a class for AmazonSearchPage
// This class will help us test Amazon's product search platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Amazon - Online Shopping for Electronics, Apparel, Computers, Books")
// Variable 2: Store the maximum items allowed in shopping cart as a whole number (like 50 or 100)
// Variable 3: Store the minimum product rating for recommendations as a decimal number (like 4.2 or 4.5)

class AmazonSearchPage {

    expectedHomePageTitle = "Amazon - Online Shopping for Electronics, Apparel, Computers, Books"
    maxItemsPerShoppingCart = 50
    minProductRate = 4.2

// Add 1 method that performs Amazon search testing:
    // Method 1: Find products with names ending with a specific word
    // This method takes two arguments: product names array like ["Gaming Laptop", "Wireless Mouse", "Bluetooth Headset"], and ending word as text (like "Mouse")
    // This method gives back a list of matching product names like ["Wireless Mouse"]
    // STEP 1: Create an empty array to store matching products
    // STEP 2: Use a for loop to go through each product name in the provided array
    // STEP 3: Inside the loop, use the split(" ") string method to separate the product name into words
    // STEP 4: Get the last word by using [words.length - 1] on the split result
    // STEP 5: Use the toLowerCase() string method on this last word
    // STEP 6: Check if this last word equals the ending word parameter (also convert ending word to lowercase)
    // STEP 7: If they match, add the original product name to your matching array
    // STEP 8: After the loop, give back the array of matching product names

    findProductWithSpecificWord(productNames: string[], desiredWord: string): string[] {

        let productResult: string[] = []

        for(let i = 0; i < productNames.length; i++) {

            let separateWords = productNames[i].split(' ')

            if(desiredWord.toLowerCase() === separateWords[separateWords.length - 1].toLowerCase()) {

                productResult.push(productNames[i])

            }

        }

        return productResult

    }

}

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call the method from your class copy with this specific test case:
// Call findProductsEndingWithWord(["Gaming Laptop", "Wireless Mouse", "Bluetooth Headset", "Computer Mouse", "Smart Watch"], "Mouse") and print the result


let amazon = new AmazonSearchPage()

console.log(amazon.findProductWithSpecificWord(["Gaming Laptop", "Wireless Mouse", "Bluetooth Headset", "Computer Mouse", "Smart Watch"], "Mouse"))