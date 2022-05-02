const cards = ["Guadalupe", "Ollie", "Aki"]

function writeCards(cards) {
    let thanks = []
    for (let i = 0; i < cards.length; i++)
    thanks.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    return thanks
}
writeCards()

function countDown(start) {
    let i = start
    while (i >= 0) {
    console.log(i)
    i--
}}
