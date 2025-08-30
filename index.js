// heart icon Functionalities
let loveCount = 0;
const loveCountNumber = document.getElementById("love-count");
const loveIcon = document.getElementsByClassName("love-icon")
 
  for(loveIconButton of loveIcon){
    loveIconButton.addEventListener("click", function(){
      loveCount++
      loveCountNumber.innerText = loveCount
    })
  }



// copy button function
let copyButton = document.querySelectorAll(".copyButton");
let copyCount = 0;
let copyCounter = document.getElementById("copyCounter");

for (let copy of copyButton) {
  copy.addEventListener("click", function () {
    let cardBody = copy.parentElement.parentElement;
    let number = cardBody.querySelector(".number").innerText;
    copyCount++;
    copyCounter.innerText = copyCount;
    navigator.clipboard.writeText(number);

    alert("Number copied: " + number);
  });
}


     
  

// Call Buttons Functionalities


let cardInformation = document.querySelectorAll(".call-btn");
let coinCount = document.getElementById("coin-count")
let historyContainer = document.getElementById("historyContainer")
historyContainer.innerText = ""
let clearBtn = document.getElementById("clearHistory")



for (let cardInfo of cardInformation) {
  cardInfo.addEventListener("click", function () {
    
    let card = cardInfo.parentElement.parentElement;
    let totalCoinNumber = parseInt(coinCount.innerText);
    let title = card.querySelector(".title").innerText;
    let serviceNumber = card.querySelector(".service-number").innerText;

    if (totalCoinNumber >= 20) {
      coinCount.innerText = totalCoinNumber - 20;
      alert(title + " " + serviceNumber);
      let time = new Date().toLocaleTimeString();
      let div = document.createElement("div");
      
      div.innerHTML = `
         <div class="flex justify-between items-center  bg-[#fafafa] p-5 mx-[20px] rounded-[8px] mt-5">


          <div>
            <p class="text-[18px] font-semibold">${title}</p>
            <p class="text-[18px]">${serviceNumber}</p>
            </div>
            <div>
            <p class="text-[18px]">${time}</p>
          </div>
         </div>
      `;

    
      // History container
      historyContainer.appendChild(div);
      
    } 
    else{
      alert("You don't have enough coinsYou need at least 20 coins to make a call.")
    }
    

    
  });

  clearBtn.addEventListener("click",function(){
    historyContainer.innerHTML = " "
  })


  
}
  

