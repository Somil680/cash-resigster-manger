const billamount    = document.querySelector("#bill-amount" );
const givenamount   = document.querySelector("#given-amount");
const btn           = document.querySelector("#button"      );
const totalnotes    = document.querySelectorAll(".no-of-notes");
// const reset = document.querySelector("#resetbutton");

const notes = [ 2000 ,500 ,200,100 ,50, 20 ,10 ,5 ,1];
console.log(notes);

// reset.addEventListener(myreset);
// console.log("reset")
// function myreset(){
//   document.getElementById('resetform').reset();
// }


btn.addEventListener("click" , function cashManager(){
// console.log("clicked");
let bill  =Math.floor(billamount.value);
let given =Math.floor(givenamount.value);
// console.log(bill ,given);
let amountreturn = given - bill
// console.log(amountreturn);

    if (bill <= given){
        calculateamount(amountreturn)
    }else{
         alert('WE READY FOR WASHING THE PLATES!!!!!!')
    }

  })
  function calculateamount(amountreturn){
    for(let i= 0; i<notes.length; i++){
    const  noofnotes = Math.trunc(amountreturn/notes[i]);
      amountreturn =amountreturn % notes[i]
          console.log(notes[i],(noofnotes))
          totalnotes[i].innerText = noofnotes ; 
        }
      }

 
   
   
    
  
