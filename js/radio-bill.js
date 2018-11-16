// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


let radioInputBill = new Vue({
    el: '.radioInputBill',
    data : {    
        callTotalTwo: 0.00,
        smsTotalTwo : 0.00,
         picked:''
    },
    computed : {
        grandTotalTwo: function (){
          return  this.callTotalTwo+ this.smsTotalTwo;
        },
       changeColor : function () {
        let total= this.grandTotalTwo;
        if(total>50.00){
          return 'danger'    
         }
         if (total >30.00 && total <50.00) { 
          return 'warning'
         }
      } 
    },
    
    methods : {
      AddTwo : function() {
        let billType = this.picked.trim();
     
        if (billType === 'call') {
           this.callTotalTwo +=2.75;
        }
        else if(billType === 'sms'){
         this.smsTotalTwo +=0.75;
        }
      }
    }
})