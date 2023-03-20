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


function romanos(num){
    var res=num%10;
    var base=num/10;
    base=Math.trunc(base);
    var romano="";
    if(base>0) {
        if(base==1) romano="X";
        if(base==2) romano="XX";
        if(base==3) romano="XXX";
        if(base==4) romano="XL";
    }
    if(res>0) romano=romano+romanosHasta9(res);
    return romano;
}


export default romanos;
