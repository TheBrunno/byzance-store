const datingRingContainer = document.querySelector('.dating-ring-container')
const engagementRingContainer = document.querySelector('.engagement-ring-container')

function choiceProducts(){
    let contDating = 0; let contEngagement = 0;
    for(product in allProducts){
        let template = 
        `<div class="${allProducts[product][7]}-item">
        <figure><img src="${allProducts[product][0][0]}"></figure>
        <span class="name-item">${allProducts[product][1]}</span>
        <span class="old-price">De: ${Number(allProducts[product][2]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}</span>
        <span class="price">Por: ${Number(allProducts[product][3]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}</span>
        <span class="division">${allProducts[product][4]}x de ${(Number(allProducts[product][3]) / Number(allProducts[product][4])).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}</span>
        </div>`
        if(allProducts[product][7] == "ring-dating"){
            contDating++
            if(contDating <= 4){
                datingRingContainer.innerHTML += template
            }
            console.log(datingRingContainer.innerHTML)
        }else if(allProducts[product][7] == "ring-engagement"){
            contEngagement++
            if(contEngagement <= 4){
                engagementRingContainer.innerHTML += template
            }
        }
    }
}
choiceProducts()