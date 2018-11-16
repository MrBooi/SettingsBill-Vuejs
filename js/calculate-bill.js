//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

// let calculateBill = new Vue({
//     el: '.calculateBill',
//     data : {
//       billTotal : 0,      
//       // add this
//       billString: ''
//     },
//     methods : {
//         calculate : function() {
//             let billParts = this.billString.split(',');
//             let totalBill = 0;
//             // calculate the totalBill 
//              for (let i = 0; i < billParts.length; i++) {
//                  if (billParts[i] ==='call') {
//                      totalBill +=2.75;
//                  }else if(billParts[i] === 'sms'){
//                     totalBill +=0.75;
//                  }
//              }
       
//             // display the total bill on the screen by setting the total value to billTotal
//             this.billTotal = totalBill;
//         }
//     }
//   });


let calculateBill = new Vue({
  el: '.calculateBill',
  data : {
    // remove this
    // billTotal : 12.25,    
    billString: ''
  },
  computed : {
    // add this
    billTotal : function () {
      let billParts = this.billString.split(',');
      let totalBill = 0;
      // calculate the totalBill
             for (let i = 0; i < billParts.length; i++) {
                 if (billParts[i] ==='call') {
                     totalBill +=2.75;
                 }else if(billParts[i] === 'sms'){
                    totalBill +=0.75;
                 }
             }
      return totalBill;
    }, 
     changeColor : function () {
      let total= this.billTotal;
      if(total>30.00){
        return 'danger'    
       }
       if (total >20.00 && total <30.00) { 
        return 'warning'
       }
    } 
    
  },
  
  methods : {
    // remove this
    // calculate : function() {
      // calculate logic moves into - billTotal
    // }
  }
});


