 function compareStudy(){
     var mark1 = document.getElementById("markOne").value*1;
     var mark2 = document.getElementById("markTwo").value*1;
     var mark3 = document.getElementById("markThree").value*1;
     var mark4 = document.getElementById("markFour").value*1;
      var inputOne = document.getElementById("markFive").value;
    if(inputOne == "A"){
        inputOne = 2;
        document.getElementById("yourTotalMark").innerHTML = `tổng điểm bạn cộng : ${inputOne}`
    }else if(inputOne == "B"){
        inputOne = 1.5;
        document.getElementById("yourTotalMark").innerHTML = `Tong điểm bạn cộng : ${inputOne}`
    }else if(inputOne == "C"){
        inputOne = 1.0;
        document.getElementById("yourTotalMark").innerHTML = `Tong điểm bạn cộng : ${inputOne}`
    }

      var choosingObject = document.getElementById("markSix").value;
    if(choosingObject == 1){
        choosingObject = 1;
        document.getElementById("yourTotalMark").innerHTML = `tong diem ban cong la : ${choosingObject}`
    }else if(choosingObject == 2){
        choosingObject = 2
        document.getElementById("yourTotalMark").innerHTML = `tong diem ban cong la : ${choosingObject}`
    }else if(choosingObject ==3){
        choosingObject = 3;
        document.getElementById("yourTotalMark").innerHTML = `tong diem ban cong la : ${choosingObject}`
    }
     var totalMark = mark1 + mark2 + mark3 + inputOne + choosingObject;
     if(totalMark <= mark4){
         document.getElementById("yourTotalMark").innerHTML = `Ban da rot`
     }else if(totalMark >= mark4){
         document.getElementById("yourTotalMark").innerHTML = `bạn đã đậu`
     }
 } 
function calcMoney(){
    var resultMoney= "";
    var infoResult = ""
    var nameInput = document.getElementById("name").value;
    var amountElectric = document.getElementById("electricCount").value*1;
    if(amountElectric>= 0 && amountElectric <=50){
        resultMoney = `${amountElectric * 500} + vnd`
    }else if(amountElectric >= 51 && amountElectric <=100){
        resultMoney = `${amountElectric *650} + vnd`
    }else if(amountElectric >= 101 && amountElectric <= 200 ){
        resultMoney = `${amountElectric *850} + vnd`
    }else if(amountElectric >= 201 && amountElectric <=350){
        resultMoney = `${amountElectric *1100} + vnd`
    }else{
        resultMoney = `${amountElectric * 1300}  vnd`
    }
    infoResult = `Thong tin đầy đủ là : ${nameInput} tổng số điện là : ${resultMoney}`
    document.getElementById("totalElectric").innerHTML = infoResult;
}