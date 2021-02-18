function decoder(encodedString)
{
    const reversedString = encodedString.split("").reverse().join("")
    const phrase = []

    for(i = 0; i <= (reversedString.length - 1); i = i + 2) {
        const ascii = reversedString.substr(i, 3)
        
        if (ascii >= 126) {
            phrase.push(reversedString.substr(i,2))
        } else {
            phrase.push(ascii)
            i++
        }
    }

    return String.fromCharCode.apply(null, phrase)
}

const encodedString = "41110100111199101862337377638562361151110148";

console.log(decoder(encodedString));
