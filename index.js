// heart icon Functionalities
let loveCount = 0;
const loveCountNumber = document.getElementById("love-count");
const loveIcon = document.getElementsByClassName("love-icon")

for(let i = 0; i<loveIcon.length;i++){
    loveIcon[i].addEventListener("click",function(){
        loveCount++;
 
        console.log(loveCount)
        loveCountNumber.innerText = loveCount
    })
}

// Call Buttons Functionalities


let cardInformation = document.querySelectorAll(".call-btn");
let coinCount = document.getElementById("coin-count")


for (let cardInfo of cardInformation) {
  cardInfo.addEventListener("click", function () {
    
    let card = cardInfo.parentElement.parentElement;
    let totalCoinNumber = parseInt(coinCount.innerText);
    let title = card.querySelector(".title").innerText;
    let serviceNumber = card.querySelector(".service-number").innerText;

    if (totalCoinNumber >= 20) {
      coinCount.innerText = totalCoinNumber - 20;
      alert(title + " " + serviceNumber);
    } else {
      alert("No Coin");
    }

    
    

    
  });

  const data = {};
}
  

