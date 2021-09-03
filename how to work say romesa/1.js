function checkCashRegister(price, cash, cid) {
    var change = Math.round((cash - price)*100);
    var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
    var sum = 0;
    var finCid = []; var value = [];
    var sumOfCid = function(cid){
      var mapCid = cid.map(x => Math.round(x[1]*100));
      for(var i = 0; i < mapCid.length; i++){
        if(change >= currency[i]) {
          sum += mapCid[i]
        }   
      }; return sum;
    }; 
   var leftCurr = sumOfCid(cid) 
    if(change === leftCurr) {
      return{status: "CLOSED", change: cid};
    } else if (change > leftCurr) {
      return{status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      for (var i = currency.length - 1; i > -1; i--){
        while(change >= currency[i]){
          change -= currency[i];
          cid[i][1] -= (currency[i])/100;
          value.push([cid[i][0], ])
          return {status: "OPEN", change: value}
        } 
      }  
    }
   }
   console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
   console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
   console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);