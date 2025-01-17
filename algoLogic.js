const pink = "#edade1";
const green = "#4caf50";
const purple = "#c600ff";
const red = "#FF6961";
const swapSound = ()=>{ playSound(400,100) };
const CompleteSound = ()=>{ playSound(1000,100) };
const SortingName = {
        "BubbleSort":BubbleSort,
        "SelectionSort":SelectionSort,
        "InsertionSort":InsertionSort,
};


async function BubbleSort(){
        let n = array.length;
        for(let i =0;i<n;i++){
                for(let j = 0;j<n-i-1;j++){
                        
                        MainBox.childNodes[j].style.backgroundColor = purple;
                        MainBox.childNodes[j+1].style.backgroundColor = purple;
                        
                        
                        await delay();
                        
                        if(array[j]>array[j+1]){
                                
                                swapSound();

                                let temp = array[j];
                                array[j] = array[j+1];
                                array[j+1] = temp;
                                
                                MainBox.childNodes[j].style.height = `${array[j]}px`;
                                MainBox.childNodes[j+1].style.height = `${array[j+1]}px`;
                                
                        }
                        MainBox.childNodes[j].style.backgroundColor = pink;
                        MainBox.childNodes[j+1].style.backgroundColor = pink;
                }
                
                CompleteSound();
                MainBox.childNodes[n-i-1].style.backgroundColor = green;
        }
}

async function SelectionSort(){
        let n = array.length;
        for(let i=0;i<n;i++){
                let mini = i;
                MainBox.childNodes[mini].style.backgroundColor = red;
                for(let j = i+1;j<n;j++){
                        MainBox.childNodes[j].style.backgroundColor = purple;
                        await delay();
                        
                        if( array[mini]  > array[j]){
                                swapSound();
                                MainBox.childNodes[mini].style.backgroundColor = pink;
                                mini = j;
                                MainBox.childNodes[mini].style.backgroundColor = red;
                        }
                        if(mini!=j) MainBox.childNodes[j].style.backgroundColor = pink;
                }
                if(mini!=i){
                        let temp = array[i];
                        array[i] = array[mini];
                        array[mini] = temp;
                        MainBox.childNodes[i].style.height = `${array[i]}px`;
                        MainBox.childNodes[mini].style.height = `${array[mini]}px`;
                        MainBox.childNodes[mini].style.backgroundColor = pink;
                }
                CompleteSound();
                MainBox.childNodes[i].style.backgroundColor = green;
        }
}

async function InsertionSort(){
        let n = array.length;
        for(let i=0;i<n;i++){
                MainBox.childNodes[i].style.backgroundColor = purple;
                let j = i-1 , temp = array[i];
                
                await delay();
                MainBox.childNodes[i].style.backgroundColor = pink;

                while(j>=0 && array[j]>temp){
                        array[j+1] = array[j];
                        MainBox.childNodes[j+1].style.height = `${array[j]}px`;
                        swapSound();
                        j--;
                }
                array[j+1] = temp;
                MainBox.childNodes[j+1].style.height = `${temp}px`;
                MainBox.childNodes[j+1].style.backgroundColor = purple;
                await delay();
                
                MainBox.childNodes[j+1].style.backgroundColor = green;
                MainBox.childNodes[i].style.backgroundColor = green;
                CompleteSound();
        }
}








StartButton.addEventListener("click",()=>{

        GenerateButton.disabled = true;
        StartButton.disabled = true;
        SortingType.disabled = true;
        SizeSlider.disabled = true;

        SortingName[SortingType.value]()
        .catch((err)=>{
                alert("An error occurred during sorting. Please try again.");
                console.log(err);
        })
        .finally(()=>{

                GenerateButton.disabled = false;
                StartButton.disabled = false;
                SortingType.disabled = false;
                SizeSlider.disabled = false;

        });
});