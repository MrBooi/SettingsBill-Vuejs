// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

let textInputBill = new Vue({
    el: '.textInputBill',
    data : {    
      callTotal: 0.00,
      smsTotal : 0.00,
      billType:''
    },
    computed : {
        grandTotal: function (){
          return  this.callTotal+ this.smsTotal;
        },
       changeColor : function () {
        let total= this.grandTotal;
        if(total>50.00){
          return 'danger'    
         }
         if (total >30.00 && total <50.00) { 
          return 'warning'
         }
      } 
    },
    
    methods : {
      add : function() {
        let billType = this.billType.trim();
       
        if (billType === 'call') {
           this.callTotal +=2.75;
        }
        else if(billType === 'sms'){
         this.smsTotal +=0.75;
        }

   
      }
    }
})