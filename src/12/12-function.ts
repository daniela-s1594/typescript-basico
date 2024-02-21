(() => {
    type Sizes =  'S' | 'M' | 'L' | 'XL' ;
    function createProductToJson(
        title:string,
        createdAt:Date,
        stock:number,
        size: Sizes
    ) {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const createProductToJsonV2 = (
        title:string,
        createdAt:Date,
        stock:number,
        size?: Sizes
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const producto1 = createProductToJson('P1', new Date(),12,'S');
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.stock);

    const producto2 = createProductToJsonV2('P2', new Date(),16);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.stock);
})();
