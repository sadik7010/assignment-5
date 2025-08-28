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