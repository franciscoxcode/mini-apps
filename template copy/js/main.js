function XO(str){
    let xs = str.toLowerCase().split('').filter(x => x === 'x').length
    let os = str.toLowerCase().split('').filter(o => o === 'o').length
    console.log(xs === os ? true : false)
    }

XO('xXoOxO')