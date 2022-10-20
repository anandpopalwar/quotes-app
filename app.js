
function  generateRandomQuote(){
   let randomQuote= document.getElementById('randomQuote');
   let randomQuoteAuthor= document.getElementById('randomQuoteAuthor');
   let random = Math.floor(Math.random()*1600);

    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // if(randomAuthor1.length>0){

    randomQuote.innerHTML=(data[random].text);
    randomQuoteAuthor.innerHTML=(data[random].author)
    
      randomAuthor1.innerHTML=(data[random+1].author)
      
      randomAuthor2.innerHTML=(data[random+3].author)
      randomAuthor3.innerHTML=(data[random-3].author)
    // }
    
  });
  

  // Math.floor(Math.random()*1600);

  

}