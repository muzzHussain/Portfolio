const textDisplay = document.getElementById('typing')
const phrases = ['Muzammil Hussain', '.']
let i = 0
let j = 0

function loop() {

    if ( i < phrases.length) {
        console.log(phrases[i])

        if ( j < phrases[i].length ) {
            console.log(phrases[i][j])
        }
    }



}
