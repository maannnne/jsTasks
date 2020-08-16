// let arr = [10, 20, 30, 10, 40, 90, 60];
// let arr1 = [1, 2, 3];
  
// let arr3 = [1,1,1,1,1,1,1];
// let arr4 = [1, 2, 3, 4, 5, 6];



// // // //1.Check if a string is pangram
// // //     const blankRemover = (arr) => {
// // //         for(let i = 0; i < arr.length; i++){
// // //             if(arr[i] === ' '){
// // //                 arr.splice(i, 1);
// // //                 i--;
// // //             }
// // //         }
// // //         return arr;
// // //     }

// // //     const isPangram = (sentence) => {
// // //         const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// // //         let ok = blankRemover(sentence.toLowerCase().split('').sort());
// // //         for(let i = 0; i < alphabet.length; i++){
// // //             if(ok.includes(alphabet[i])){
// // //                 alphabet.splice(i, 1);
// // //                 i--;
// // //             }
// // //         }
// // //         return true ? (alphabet.length < 1) : false;    

// // //     }

// // //     const sentence = 'The quick brown fox jumps over the lazy dog';
// // //     console.log(isPangram(sentence));





// // //3.Write a JavaScript function to sort the following array of objects by title value. 
// //     const books = [
// //         {
// //             title: 'The Hunger Games',
// //             author: 'Suzanne Collins'
// //         },
// //         {
// //             title: 'Fahrenheit 451',
// //             author: 'Ray Bradury'
// //         },
// //         {
// //             author: 'Paulo Coelho',
// //             title: '11 Minutes'
// //         },
// //         {
// //             author: 'Patrick Suskind',
// //             title: 'Perfume: The Story of a Murderer'
// //         }
// //     ];
// //     const titles = books.map(book => book.title).sort();
// //     console.log(titles);


//done!!!!!!!!!

//Write a JavaScript function to find if an array contains a specific element.
    console.clear();
    const retSpecElem = (arr, elem) => {
        return true ? arr.includes(elem) : false;
    }

    let arr2 = [2, 3 ,4, 5, 6];
    console.log(retSpecElem(arr2, 4));




//Write a JavaScript function to get a random item from an array.
    console.clear();
    const randomElem = (arr) => {
        let randomIndex = Math.floor(Math.random()*arr.length);
        return arr[randomIndex];
    } 


    let arr5 = ['a', 'b', 'c'];
    console.log(randomElem(arr5));

    
//Write a JavaScript program to remove duplicate items from an array.
    console.clear();
    const dupRemover = (arr) => {
        let noDupicArray = arr.filter((elem, index) => {
            console.log(index + '   -   ' + arr.indexOf(elem));
            //indexof-ը հետ ա տալիս առաջին անգամ հանդիպածի ինդեքսը, իսկ 
            //index-ը հենց տվյալ պահի էլեմենտի ինդեքսն ա
            return arr.indexOf(elem) === index;
            //վերջում վերադարձվում են էն էլեմենտները, որոնք տվյալ պահի ինդեքսը
            //համընկել ա առաջին ինդեքսի հետ
        });
        return noDupicArray;
    }
    
    let a = [1, 2, 5, 1, 5];
    console.log(dupRemover(a));


    
//Write a JavaScript function to remove a specific element from an array.
    console.clear();
    const remSpecElem = (arr, elemInd) => {
        arr.splice(elemInd, 1); //this will give me the element, 
        //but as i need the array without that element, i will do this...
        return arr;
        
    }
    let arr6 = ['a', 'b', 'c', 'd', 'e'];
    console.log(remSpecElem(arr6, 2));


//Write a JavaScript function to merge two arrays and remove all duplicates elements.
console.clear();
const mergeAndRemove = (arr1, arr2) => {
    let arr = arr1.concat(arr2);
    const noDupicMupic = arr.filter((elem, index) => {
        return arr.indexOf(elem) === index;
    });
    return noDupicMupic;
}

let arr7 = ['x', 'y', 'z'];
let arr8 = ['x', 'w', 'v'];
console.log(mergeAndRemove(arr7, arr8));

//Write a JavaScript program to find a pair of elements
//(indices of the two numbers) from an given array whose sum equals a specific target number.
console.clear();
const luckyPair = (arr, target) => {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        for(let j = i; j < len; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
    return 'No Such pair!';
}

let arr9 = [1, 4, 8, 3];
let target = 7;
console.log(luckyPair(arr9, target));


//Write a JavaScript program to shuffle an array.
const shuffle = (arr) => {
    let len = arr.length;
    let randomIndex = Math.floor(Math.random() * len);
    for(let i = 0; i <= randomIndex; i++) {

    }
}

let arr10 = [1, 2, 3, 4];
console.log(shuffle(arr10));