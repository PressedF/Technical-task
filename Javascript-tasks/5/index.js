    var arr = new Array(5);

    function fillArray() {
        for(let i = 0; i < arr.length; i++){
            arr[i] = Math.floor(Math.random() * (100 + 100 + 1) - 100);
        }
            
    }

    function replaceFromArray () {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < 0) arr[i] = 0;
        }
    }

    function addToArray() {
        for(let i = 0; i < arr.length; i++){
            if((i % 2 !== 0) && (arr[i] === 0))
                arr.splice(i, 0, -1);
        }
            
    }
        
      
    fillArray();
    replaceFromArray();
    addToArray();
    console.log(arr);