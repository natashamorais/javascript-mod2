// const button = document.querySelector(".tweet-composer__button")
// const timeline = document.querySelector(".tweets-timeline__box")

//-------------soluçao original usando createTextNode----------------------------
// button.addEventListener("click", function (e) {
//     e.preventDefault()

//     const tweet= document.createElement("div")
//     const tweetInput = document.getElementById("tweetComposerInput").value
//     const newTweet = document.createTextNode(tweetInput)

//     tweet.appendChild(newTweet) 
//     timeline.insertBefore(tweet, timeline.childNodes[0])


// })
//----------------------solução com innerHTML
// button.addEventListener("click", function (e) {
//     e.preventDefault()

//     const tweet= document.createElement("div")
//     const tweetInput = document.getElementById("tweetComposerInput").value


//    // tweet.innerHTML = `<p> ${tweetInput}</p>`
//     // timeline.insertBefore(tweet, timeline.childNodes[0])

//})

const button = document.querySelector(".tweet-composer__button")
const timeline = document.querySelector(".tweets-timeline")

button.addEventListener("click", function (e) {
    e.preventDefault()
    const tweetInput = document.getElementById("tweetComposerInput")

    if (tweetInput.value === null || tweetInput.value === "" || tweetInput.value === undefined) {

        return false
    }





    const boxTweet = document.createElement("div")
    boxTweet.className = "tweets-timeline__box"

    const tweet = document.createElement("p")
    tweet.className = "tweets-timeline__tweet"
    tweet.innerHTML = tweetInput.value

    const header = document.createElement("div")
    header.className = "tweets-timeline__header"
    header.innerHTML = `
    <span class="tweets-timeline__name">ana.js</span>
    <span class="tweets-timeline__username">@naluhh</span>
    <span class="tweets-timeline__date">1 de ago</span>
    `

    const footer = document.createElement("div")
    footer.className = "tweets-timeline__footer"
    footer.innerHTML = `<button class = "tweets-timeline__delete-button"> Excluir </button>`

    boxTweet.appendChild(header)
    boxTweet.appendChild(tweet)
    boxTweet.appendChild(footer)

    timeline.insertBefore(boxTweet, timeline.childNodes[0])

    tweetInput.value = ""
    
    const botaoExcluir = document.querySelector(".tweets-timeline__delete-button")// 
    
    botaoExcluir.addEventListener("click", function (event) {
        event.preventDefault()
        boxTweet.remove()
    })




})

