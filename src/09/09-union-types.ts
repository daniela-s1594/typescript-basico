(() => {
 let userId: string | number ;
 userId = 1212122;
 userId = 'waasssa';


 function greeting(myText:string | number) {
  if (typeof myText === 'string') {
    console.log(`string ${myText.toLowerCase()}`);
  } else{
    console.log(`number ${myText.toFixed(2)}`);
  }
};
 greeting(1134.34124);
 greeting('HELLO');
//  greeting(null);
//  greeting({});
})();