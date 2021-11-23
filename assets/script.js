// Thank you for taking the time to review this code :)
// Selctors 
let gbTableCell = document.querySelector('#qty-gb')
let ccTableCell = document.querySelector('#qty-cc')
let sugarTableCell = document.querySelector('#qty-sugar')


//buttons 
let gbButtonPlus = document.getElementById('add-gb')
let gbButtonMinus = document.getElementById('minus-gb')
let ccButtonPlus = document.getElementById('add-cc')
let ccButtonMinus = document.getElementById('minus-cc')
let sugarButtonPlus = document.getElementById('add-sugar')
let sugarButtonMinus = document.getElementById('minus-sugar')

// name
let yourName = "Preston Darrough" // replaced

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbButtonPlus.addEventListener('click', function() {
    gb = gb + 1 
    // console.log(gb)
   gbTableCell.textContent = gb
//    localStorage.setItem('gb', gb)

    
})

gbButtonMinus.addEventListener('click', function() {
    gb = gb - 1 
    // console.log(gb)
   gbTableCell.textContent = gb
//    localStorage.setItem('gb', gb)

})

// Chocolate Chips cookies counted here
ccButtonPlus.addEventListener('click', function() {
    cc = cc + 1 
    // console.log(cc)
   ccTableCell.textContent = cc
//    localStorage.setItem('cc', cc)

})

ccButtonMinus.addEventListener('click', function() {
    cc = cc - 1 
    // console.log(cc)
   ccTableCell.textContent = cc
//    localStorage.setItem('cc', cc)

})

// sugar cookies counted here 

sugarButtonPlus.addEventListener('click', function() {
    sugar = sugar + 1 
    // console.log(sugar)
   sugarTableCell.textContent = sugar
//    localStorage.setItem('sugar', sugar)

})

sugarButtonMinus.addEventListener('click', function() {
    sugar = sugar - 1 
    // console.log(sugar)
   sugarTableCell.textContent = sugar
//    localStorage.setItem('sugar', sugar)

})