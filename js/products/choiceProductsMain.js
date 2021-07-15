const datingRingContainer = document.querySelector('.dating-ring-container')
const engagementRingContainer = document.querySelector('.engagement-ring-container')
let locals = [
    [
        "ring-dating", // type of product
        datingRingContainer, // local
        0 // amount
    ],
    [
        "ring-engagement",
        engagementRingContainer,
        0
    ]
]

function choiceProducts(){
  for(product of allProducts){
    for(l in locals){
      if(product[7] == locals[l][0]){
        locals[l][2]++
        if(locals[l][2] <= 4){
          locals[l][1].innerHTML += createHtmlTemplate(`${product[7]}-item product`, product)
        }
      }
    }
  }
}
choiceProducts()
