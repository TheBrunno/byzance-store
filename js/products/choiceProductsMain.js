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
    ],
]

function choiceProducts(){
    for(product in allProducts){
        let template = 
        `<div class="${allProducts[product][7]}-item">
        <figure><img src="${allProducts[product][0][0]}"></figure>
        <span class="name-item">${allProducts[product][1]}</span>
        <span class="old-price">De: ${Number(allProducts[product][2]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}</span>
        <span class="price">Por: ${Number(allProducts[product][3]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}</span>
        <span class="division">${allProducts[product][4]}x de ${(Number(allProducts[product][3]) / Number(allProducts[product][4])).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}</span>
        </div>`
        for(l in locals){
            if(allProducts[product][7] == locals[l][0]){
                locals[l][2]++
                if(locals[l][2] <= 4){
                    locals[l][1].innerHTML += template
                }            
            }
        }
    }
}
choiceProducts()