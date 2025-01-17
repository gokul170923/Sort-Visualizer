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
        "MergeSort":MergeSort,
        "QuickSort":QuickSort,
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







async function merge( l,mid,r){
        n1 = mid-l+1 , n2 = r-mid;
        a1 = [] , a2 = [];
        for(let i=0;i<n1;i++){
                a1[i]=array[i+l];
                MainBox.childNodes[i + l].style.backgroundColor = red;
        }
        for(let i=0;i<n2;i++){
                a2[i] = array[i+mid+1];
                MainBox.childNodes[i + mid+1].style.backgroundColor = purple;
        }
        let j=0,k=0;
        for(let i=l;i<=r;i++){
                await delay();
                if( j <n1 && k<n2){
                        if(a1[j]<a2[k]){
                                array[i] = a1[j];
                                MainBox.childNodes[i].style.height = `${a1[j]}px`;
                                j++;
                        }else{
                                array[i]=a2[k];
                                MainBox.childNodes[i].style.height = `${a2[k]}px`;
                                k++;
                        }
                }
                else if(j<n1){
                        array[i] = a1[j];
                        MainBox.childNodes[i].style.height = `${a1[j]}px`;
                        j++;
                }
                else{
                        array[i]=a2[k];
                        MainBox.childNodes[i].style.height = `${a2[k]}px`;
                        k++;
                }
                swapSound();
        }
        for(let i=l;i<=r;i++){
                MainBox.childNodes[i].style.backgroundColor = green;
        }
        CompleteSound();
}

async function mergesort(l , r){
        if(l>=r) return;
        let mid = Math.floor((l+r)/2);
        await mergesort(l,mid);
        await mergesort(mid+1,r);
        await merge(l,mid,r);

}

async function MergeSort(){
        let n = array.length;
        await mergesort(0,n-1);     
}







async function partison(l,r){
        MainBox.childNodes[r].style.backgroundColor = red;
        let start = l,end = r-1;
        while(start<=end){
                MainBox.childNodes[start].style.backgroundColor = purple;
                MainBox.childNodes[end].style.backgroundColor = purple;
                await delay();
                if(array[start]<array[r]){
                        MainBox.childNodes[start].style.backgroundColor = pink;
                        start++;
                }
                else{
                        let temp = array[end];
                        array[end]=array[start];
                        array[start]= temp;
                        swapSound();

                        MainBox.childNodes[end].style.height = `${array[end]}px`;
                        MainBox.childNodes[start].style.height = `${array[start]}px`;

                        MainBox.childNodes[end].style.backgroundColor = pink;
                        end--;
                }
    
        }

        let temp =array[r];
        array[r] = array[start];
        array[start]= temp;

        MainBox.childNodes[r].style.height = `${array[r]}px`;
        MainBox.childNodes[start].style.height = `${array[start]}px`;

        MainBox.childNodes[r].style.backgroundColor = pink;
        MainBox.childNodes[start].style.backgroundColor = green;
        CompleteSound();
        return start;
}
    
    
async function quicksort(l, r){
        if(l>r) return;
        let mid  = await partison(l,r);
        await quicksort(l,mid-1);
        await quicksort(mid+1,r);
    
}
    
async function QuickSort(){
        let n = array.length;
        await quicksort(0,n-1);
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