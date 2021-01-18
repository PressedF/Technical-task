function printTriangle() {
	const array = new Array(5);
	const length = array.length;
	
	
	let str = '';
	
    for(let i = 1; i < length; i++){
        for(let j = i; j < length; j++) str += ' ';
        for(let j = 1; j <= i; j++){
            str += '#';
            str += ' ';
        }
        str += '\n';
    }
    
    console.log(str);
}


printTriangle();