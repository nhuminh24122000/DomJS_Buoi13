// BT1: Tính lương nhân viên

function calcSalary() {
    var sal = document.getElementById("salary").value;
    var numDay = document.getElementById("day").value;
    var totalSalary = 0;

    if (sal>0 && numDay>=0) {
        totalSalary = sal * numDay
    } else {
        alert("Dữ liệu nhập không hợp lệ!!!");
    }

    document.getElementById("txtSalary").innerHTML = "Tiền lương nhân viên là: "+ new Intl.NumberFormat('vn-VN').format(totalSalary);

}
document.getElementById("btnCalcSalary").onclick = calcSalary;


// BT2: Tính giá trị trung bình

function calcAverage() {
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var num3 = Number(document.getElementById("number3").value);
    var num4 = Number(document.getElementById("number4").value);
    var num5 = Number(document.getElementById("number5").value);

    var totalAverage = (num1 + num2 + num3 + num4 + num5) / 5;

    document.getElementById("txtAverage").innerHTML = "Giá trị trung bình là: " + totalAverage;
}

document.getElementById("btnCalcAverage").onclick = calcAverage;


// Bài tập 3: Quy đổi tiền

function converter() {
    var curr = document.getElementById("currency").value;

    if (curr > 0) {
        var converterCurr = curr * 23500;
    } else {
        alert("Số tiền nhập không hợp lệ!!!");
    }

    document.getElementById("txtConverter").innerHTML = "Số tiền VND là: " + new Intl.NumberFormat('vn-VN').format(converterCurr);

}

document.getElementById("btnConverter").onclick = converter;


// Bài tập 4: Tính diện tích, chu vi hình chữ nhật

function calcRetangle() {
    var lengthRec = Number(document.getElementById("length").value);
    var breadthRec = Number(document.getElementById("breadth").value);

    if (lengthRec>0 && breadthRec>0) {
        var area = lengthRec * breadthRec;
        var perimeter = (lengthRec + breadthRec) * 2;
    } else {
        alert("Dữ liệu nhập không hợp lệ!!!");
    }

    document.getElementById("txtCalcRectangle").innerHTML = "Diện tích: " + area + " , Chu vi: " + perimeter;
}

document.getElementById("btnCalcRectangle").onclick = calcRetangle;


// Bài tập 5: Tính tổng 2 ký số

function calcDigits() {
    var num = Number(document.getElementById("number").value);

    if (Number.isInteger(num) && num >= 10 && num < 100) {
        var totalDigits = Math.floor(num / 10) + (num % 10);
    } else {
        alert("Mời nhập lại một số nguyên dương có 2 chữ số!!!");
    }

    document.getElementById("txtCalcDigits").innerHTML = "Tổng 2 ký số là: " + totalDigits;
}

document.getElementById("btnCalcDigits").onclick = calcDigits;