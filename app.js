const   quoteText = document.querySelector(".quote"),
        authorName = document.querySelector(".author .name"),
        soundBtn = document.querySelector(".sound"),
        copyBtn = document.querySelector(".copy"),
        quoteBtn = document.querySelector("button");

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(quoteText.innerText);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    const cb = navigator.clipboard;
    const quote = document.querySelector('p');
    cb.writeText(quote.innerText).then(() => alert('Text copied'));
});

quoteBtn.addEventListener("click", randomQuote)