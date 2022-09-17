function getFirstValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            console.log(arr[0])
        }
        
    }
}

getFirstValue([3, 2, 4]);

// function any (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(typeof arr[i])
//     }
// }

// any([1, 2]);