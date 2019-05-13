//1.Check if a string is  pangram
    const blankRemover = (arr) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === ' '){
                arr.splice(i, 1);
                i--;
            }
        }
        return arr;
    }

    const isPangram = (sentence) => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let ok = blankRemover(sentence.toLowerCase().split('').sort());
        for(let i = 0; i < alphabet.length; i++){
            if(ok.includes(alphabet[i])){
                alphabet.splice(i, 1);
                i--;
            }
        }
        return true ? (alphabet.length < 1) : false;    

    }

    const sentence = 'The quick brown fox jumps over the lazy dog';
    console.log(isPangram(sentence));



//2.Write a JavaScript program to remove duplicate items from an array.
    const dupRemover = (arr) => {
        let unique = [... new Set(arr)]; //spread operator, Set and new
        return unique;
    }
    let a = [1, 2, 5, 7, 1, 5, 4, 89, 5];
    console.log(dupRemover(a));



//3.Write a JavaScript function to sort the following array of objects by title value. 
    const books = [
        {
            title: 'The Hunger Games',
            author: 'Suzanne Collins'
        },
        {
            title: 'Fahrenheit 451',
            author: 'Ray Bradury'
        },
        {
            author: 'Paulo Coelho',
            title: '11 Minutes'
        },
        {
            author: 'Patrick Suskind',
            title: 'Perfume: The Story of a Murderer'
        }
    ];
    const titles = books.map(book => book.title).sort();
    console.log(titles);



//4.Write a JavaScript program to find a pair of elements
//(indices of the two numbers) from an given array whose sum equals a specific target number
    const target = 60;
    const arr = [10, 20, 30, 10, 40, 90, 60];
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                console.log(`${arr[i]} with index of ${i} and ${arr[j]} with index of ${j}`);
            }
        }
    }
