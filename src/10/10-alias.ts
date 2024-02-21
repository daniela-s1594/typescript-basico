(() => {
  type UserID = string | number | boolean;
  
  //literal types
  type Sizes =  'S' | 'M' | 'L' | 'XL' ;
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';
  //   shirtSize = 's';
  //   shirtSize = 'sdfhfkgjlk';
  
    let userId: UserID;
    function greeting(userId: UserID, size: Sizes) {
      if (typeof userId === "string") {
        console.log(`string ${userId.toLowerCase()}`);
      }
    }
    greeting(1111,'S');
    greeting('143324','M')
})();
