function romanosHasta9(num){
    let romano="";
    let x=num;
    if(num>=5 && num<9) {
        romano="V"; num=num-5;
    }
    else{
        if(num==4) {
            return "IV";
        }
        if(num==9) {
            return "IX";
        }
    }
    for(let i=1;i<=num;i++){
        romano=romano+"I";
    }
    return romano;
  }



export default romanosHasta9;
