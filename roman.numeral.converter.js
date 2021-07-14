function convertToRoman(num) {
  let rNum = [];
  let rNumObj = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

for(var n in rNumObj){
    while(num >= rNumObj[n]){
      num -= rNumObj[n];
      rNum.push(n);
    }
  }


 return rNum.join("");
}