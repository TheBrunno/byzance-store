const bestSellerContainer = document.querySelector('.best-seller-container')

function choiceBestSellerItems(){
    let bigs = new Array()
    for(product in allProducts){
        if(bigs.length >= 4){
            if(allProducts[product][5] > bigs[bigs.length-1]){
                bigs.pop()
                bigs.push(allProducts[product][5])
                bigs.sort().reverse()
            }
        }else{
            bigs.push(allProducts[product][5])
            bigs.sort().reverse()
        }
    }
    for(number in bigs){
        let equal = false
        for(product in allProducts){
            if(allProducts[product][5] == bigs[number]){
                for(ele in bestSellerItems){
                    if(bestSellerItems[ele][1] == allProducts[product][1]){
                        equal = false
                        break
                    }
                    equal = true
                }
                if(equal){
                    bestSellerItems.push(allProducts[product])
                    break
                }
                if(bestSellerItems.length == 0){
                    bestSellerItems.push(allProducts[product])
                }
            }
        }
    }
    for(i in bestSellerContainer.children){
        for(num in bestSellerContainer.children[i].children){
            const instructions = [
                `<img src="${bestSellerItems[i][0][0]}">`,
                bestSellerItems[i][1],
                `De: ${Number(bestSellerItems[i][2]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}`,
                `Por: ${Number(bestSellerItems[i][3]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}`,
                `${bestSellerItems[i][4]}x de ${(bestSellerItems[i][3] / bestSellerItems[i][4]).toLocaleString("pt-br", {style:'currency', currency:'Brl'})}`
            ]
            bestSellerContainer.children[i].children[num].innerHTML = instructions[num]
        }
    }
}

choiceBestSellerItems()