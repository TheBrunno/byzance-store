const bestSellerContainer = document.querySelector('.best-seller-container')

function choiceBestSellerItems(){
  let big = new Array()
  for(product in allProducts){
    if(big.length >= 4){
      if(Number(allProducts[product][5]) > Number(big[big.length-1])){
          big.pop()
          big.push(allProducts[product][5])
        }
    }else{ big.push(allProducts[product][5]) }
    big.sort(function(a, b){ return a - b }).reverse()
  }
  for(number in big){
    let equal = false
    for(product in allProducts){
      if(allProducts[product][5] == big[number]){
        for(ele in bestSellerItems){
          if(bestSellerItems[ele][1] == allProducts[product][1]){
            equal = false
            break
          }
          equal = true
        }
        if(equal || bestSellerItems.length == 0){
          bestSellerItems.push(allProducts[product])
          break
        }
      }
    }
  }
  for(product of bestSellerItems){
      bestSellerContainer.innerHTML += createHtmlTemplate('best-seller-item product', product)
  }
}

choiceBestSellerItems()
