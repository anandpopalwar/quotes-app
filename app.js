let randomAuthor=[]

// let body=document.querySelector('body')
// let color=['red','blue','green','yellow','brown']
function  generateRandomQuote(){
   fetch("https://type.fit/api/quotes")
   .then(function(response) {
     return response.json();
    })
    .then(function(data) {
      

          let randomAuthor=[]
          let randomQuote= document.getElementById('randomQuote');
          randomQuote.classList.remove('center')
          let randomQuoteAuthor= document.getElementById('randomQuoteAuthor');

          let random = Math.floor(Math.random()*data.length);
         
          randomQuote.innerHTML=(data[random].text);
          randomQuoteAuthor.innerHTML=(data[random].author)
          randomQuoteAuthor.addEventListener('click',renderSelectedQuotes)

          randomAuthor.push(data[random].author)
          randomAuthor.push(data[random+5].author)
          randomAuthor.push(data[random+3].author)



          let authorContainer= document.getElementById('authorContainer');
          authorContainer.innerHTML=''
          randomAuthor.map((x)=>{
            if(x != null){
              let author =document.createElement('div');
              author.classList.add('randomAuthor1');
              author.innerHTML=x;
              author.addEventListener('click',renderQuotes)
              authorContainer.appendChild(author);
            }
          })
          console.log(randomAuthor);
          // body.style.background=black;
          // const colorindex=parseInt[Math.random()*color.length]
          // body.style.background=color[colorindex];
          // body.style.transition='linear 1s';

      });
    }


function rennderRandomAuthor(){
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
   })
   .then(function(data) {
     

         let randomAuthor=[]
         let randomQuote= document.getElementById('randomQuote');
         randomQuote.classList.remove('center')
         let randomQuoteAuthor= document.getElementById('randomQuoteAuthor');

         let random = Math.floor(Math.random()*data.length);
        
        //  randomQuote.innerHTML=(data[random].text);
        //  randomQuoteAuthor.innerHTML=(data[random].author)

         randomAuthor.push(data[random].author)
         randomAuthor.push(data[random+5].author)
         randomAuthor.push(data[random+3].author)



         let authorContainer= document.getElementById('authorContainer');
         authorContainer.innerHTML=''
         randomAuthor.map((x)=>{
           if(x != null){
             let author =document.createElement('div');
             author.classList.add('randomAuthor1');
             author.innerHTML=x;
             author.addEventListener('click',renderQuotes)
             authorContainer.appendChild(author);
           }
         })
         console.log(randomAuthor);
     });
   


}




function renderQuotes(e){
  let requestedAuthor = e.target.innerHTML;
  let listContainer = document.getElementById('listContainer')
  document.getElementById('authorname').innerHTML=requestedAuthor;
  listContainer.innerHTML=''
  
  // console.log(listContainer)
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let requestedQuote = data.filter((x)=>{
      return x.author==requestedAuthor;
    }).map((x)=>{
      let div = document.createElement('div');
      div.classList.add('quotes');
      div.innerHTML = x.text;
      listContainer.appendChild(div);
      console.log(x)
    })
    console.log(requestedQuote)
    rennderRandomAuthor();
   });

}


function renderSelectedQuotes(e){
  let requestedAuthor = e.target.innerHTML;
  let listContainer = document.getElementById('listContainer')
  document.getElementById('authorname').innerHTML=requestedAuthor;
  listContainer.innerHTML=''


  // console.log(listContainer)
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let requestedQuote = data.filter((x)=>{
      return x.author==requestedAuthor;
    }).map((x)=>{
      let div = document.createElement('div');
      div.classList.add('quotes');
      div.innerHTML = x.text;
      listContainer.appendChild(div);
      console.log(x)
    })
    console.log(requestedQuote)
    // rennderRandomAuthor();
   });

}
    
