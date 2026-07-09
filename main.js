const form = document.querySelector("form");
const costPrice = document.querySelector("#costPrice");
const costSale = document.querySelector("#costSale");
const result = document.querySelector(".result");

/**
 @param {number} costPrice
 @param {number} priceSell
 @returns {string} 
 */

 function calculateMargin(costPrice, priceSell){
    const marginResult = ((priceSell - costPrice) / costPrice) * 100

    if(marginResult < 20) {
        return `Margem baixa! Atenção ao prejuízo.`
    } else if (marginResult > 50 ){
        return `Margem excelente!`
    } else {
        return `Margem ideal! Ótimo retorno.`
    }
 }

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const cPrice = Number(costPrice.value);
  const cSale = Number(costSale.value);

  const calcForm = calculateMargin(cPrice,cSale);
  result.textContent = calcForm;
})