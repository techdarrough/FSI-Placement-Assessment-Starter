// Thank you for taking the time to review this code :)
// Selctors 
let gbTableCell = document.querySelector('#qty-gb')
let ccTableCell = document.querySelector('#qty-cc')
let sugarTableCell = document.querySelector('#qty-sugar')
let totalTableCell = document.querySelector('#qty-total')


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
let total = 0




// Code to update name display Than 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbButtonPlus.addEventListener('click', function() {
    gb = gb + 1 
    total = gb + cc + sugar
    // console.log(gb)
   gbTableCell.textContent = gb
   
   totalTableCell.textContent = total 
//    localStorage.setItem('gb', gb)

    
})

gbButtonMinus.addEventListener('click', function() {
    gb = gb - 1 
    total = gb + cc + sugar
    // totalTableCell.textContent = total 
    // console.log(gb)
   
   if(gb <= 0){
    gb = 0
    // console.log(gb)
    gbTableCell.textContent = gb
} else {
    gbTableCell.textContent = gb
}
// cond for total 
if(total <= 0){
    total = 0
    // console.log('total reset')
    totalTableCell.textContent = total
} else {
    totalTableCell.textContent = total 
    // console.log(total)
}


//    localStorage.setItem('gb', gb)

})

// Chocolate Chips cookies counted here
ccButtonPlus.addEventListener('click', function() {
    cc = cc + 1 
    total = gb + cc + sugar
    // console.log(cc)
   ccTableCell.textContent = cc
   totalTableCell.textContent = total 
//    localStorage.setItem('cc', cc)

})

ccButtonMinus.addEventListener('click', function() {
    cc = cc - 1 
    total = gb + cc + sugar
    // console.log(cc)
    if(cc <= 0){
        cc = 0
        // console.log(gb)
        ccTableCell.textContent = cc
    } else {
        ccTableCell.textContent = cc
        
    }

    // cond for total 
    if(total <= 0){
        total = 0
        // console.log('total reset')
        totalTableCell.textContent = total
    } else {
        totalTableCell.textContent = total 
        // console.log(total)
    }
//    localStorage.setItem('cc', cc)

})

// sugar cookies counted here 

sugarButtonPlus.addEventListener('click', function() {
    sugar = sugar + 1 
    total = gb + cc + sugar
    // console.log(sugar)
   sugarTableCell.textContent = sugar
   totalTableCell.textContent = total 
//    localStorage.setItem('sugar', sugar)

})

sugarButtonMinus.addEventListener('click', function() {
    sugar = sugar - 1 
    total = gb + cc + sugar
    // console.log(sugar)
    if(sugar <= 0){
        sugar = 0
        // console.log(gb)
        sugarTableCell.textContent = sugar
    } else {
        sugarTableCell.textContent = sugar
        
    }

    // cond for total 
    if(total <= 0){
        total = 0
        // console.log('total reset')
        totalTableCell.textContent = total
    } else {
        totalTableCell.textContent = total 
        // console.log(total)
    }
//    localStorage.setItem('sugar', sugar)

})