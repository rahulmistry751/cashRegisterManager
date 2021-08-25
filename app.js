// Selectors
const billAmount=document.getElementById("bill-am");
const paidAmount=document.getElementById("paid-am");
const checkBtn=document.getElementById("check-btn");
const nextBtn=document.getElementById("next-btn");
const returnAmount=document.querySelector(".return-am");
const paidSection=document.querySelector(".paid-section");
const numOfNotes=document.querySelectorAll(".numOfNotes");
const warning=document.querySelector(".warning");
//
let paid=0;let bill=0;
// Event listeners
checkBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    paid=Number(paidAmount.value);
    bill=Number(billAmount.value);
    //console.log(paid);
    if(!paid){ // checks if paid amount is entered
        returnAmount.style.color="red";
        returnAmount.innerText="Please enter a paid amount";
    }
    
    else if(bill===paid){ //Checks if return change is 0
        returnAmount.style.color="Black";
        returnAmount.innerHTML=`<h3>All is settled</h3>`;
        clearnotes();
    }
    else if(bill>paid){   //Checks if paid amount is valid
        returnAmount.style.color="red";
        returnAmount.innerText="Paid amount is lesser than Bill amount, Please enter valid Paid amount";
        clearnotes();
    }
    else{
        returnAmount.style.color="Black";
        returnAmount.innerHTML=`<h3>Return change: ${paid-bill}</h3>`;
        clearnotes();
        calculateChange(paid,bill);
    }
    
    //console.log(bill.value);
//console.log(paid.value);
})
nextBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    bill=Number(billAmount.value);
    //console.log(bill);
    if(bill&& bill!=0){  //Checks for valid bill amount
        warning.innerText="";
        paidSection.classList.add("active");
    }
    else{
        warning.style.color="red";
        warning.innerText="Please enter valid amount";
    }
    
})

function calculateChange(paid,bill){
   
    let notes=[2000,500,100,20,10,5,1];
    let temp=paid-bill;  
    for(i=0;i<notes.length;i++){
        if(temp>=notes[i]){    // Checks for notes smaller than the change value
            // Saves the number of notes needs for a particular note
            numOfNotes[i].innerText=Math.floor(temp/notes[i]);   
            if(Math.floor(temp%notes[i])===0){  //Checks if change is settled
                break;
            }
            else{
                temp=temp%notes[i];  // Checks for next note change
            }
        }
       

    }
}
function clearnotes(){  //Clears note table on second calculation
    for(note of numOfNotes){
        note.innerText='';
    }
}