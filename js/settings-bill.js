// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

let billWithSetting = new Vue ({
  el: '.billWithSetting',
  data :{
      callCost :0,
      smsCost  :0,
      warnLevel :0,
      critLevel :0,
      
      picked:'',
      smsTotal:0,
      callTotal:0
  },
  computed :{
      grandTotal : function (){
       return parseFloat(this.smsTotal)+parseFloat(this.callTotal);
      },
      changeColor : function () {
        let warningLevel =parseFloat(this.warnLevel); 
        let criticalLevel = parseFloat(this.critLevel);
        let total  = this.grandTotal;
        
       
        if(total > criticalLevel){
             return 'danger';
         }
          if (total > warningLevel && total <=criticalLevel) {
           
            return 'warning';
        }
    
        
    
      }
  },
  methods : {
      update: function () {    
    },
      add : function () {
        let billType = this.picked.trim();
     
        if (billType === 'call') {
           this.callTotal += parseFloat(this.callCost);
        }
        else if(billType === 'sms'){
         this.smsTotal += parseFloat(this.smsCost);
        } 

      
      }
  }


})