function romanosHasta9(num){
    let romano="";
    if(num==4) {
        romano="IV"; num=num-4;
    }
    if(num>=5) {
        romano="V"; num=num-5;
    }
    for(let i=1;i<=num;i++){
        romano=romano+"I";
    }
    return romano;
  }

export default romanosHasta9;
