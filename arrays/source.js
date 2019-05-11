// check if a string is  pangram
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