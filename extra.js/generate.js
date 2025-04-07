function generatesentences (desc , arr){
    let base = `the ${arr.lenght } $ {desc} are`
    const index= arr.lenght - 1
    for(let i =0; i<arr.length ; i++){
        if(let i === index) {
            base+= arr[i]
        }
        else {
            basestring +=marr[i] +","
        }

    }
    return base
}
const sentences = generatesentences("best ai" , ["chatgpt4" , "perplexity" , "gemini"])
console.log(sentences)