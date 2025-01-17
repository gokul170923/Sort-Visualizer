const MainBox = document.getElementsByClassName("main")[0];
const GenerateButton = document.querySelector(".header .childs:nth-child(1) .buttons");
const SortingType = document.querySelector(".header .childs:nth-child(2) select");
const SizeSlider = document.querySelector(".header .childs:nth-child(3) input");
const SpeedSlider = document.querySelector(".header .childs:nth-child(4) input");
const StartButton = document.querySelector(".header .childs:nth-child(5) .buttons");



let array;

function MakeBars(val){
        let div = document.createElement("div");
        div.className = "bars";
        div.style.height = `${val}px`;
        MainBox.appendChild(div);
}

GenerateButton.addEventListener("click",()=>{
        MainBox.innerHTML = "";
        array = [];
        let n = SizeSlider.value;
        for(let i=0;i<n;i++){
                let height = Math.floor(Math.random() * (500 - 10 + 1)) + 10;
                array.push(height);
                MakeBars(height); 
        }
});