(() => {
//   let myNumber: number = undefined;
//   let myString: string = null;
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  let myNumber: number | null = null;
  let myString: string | undefined = undefined;

function hi(name:string | null){
    let hello:string = 'Hola';
    if (name) {
        hello += ' name';
    }else{
        hello += ' nobody';
    }
    console.log(hello);
}

function hiV2(name: string | null){
    let hello:string = 'Hola';
    hello += name?.toLowerCase() || 'nobody';
}


hi('Nicolas');
hi(null);

hiV2('Nicolas');
hiV2(null);

})();
