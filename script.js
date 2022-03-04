let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
   const title = document.getElementById('main-title')
   title.innerText = 'Welcome! My name is DOM Toretto.'
  // Part 2
   const body = document.querySelector('body')
   body.style.backgroundColor = 'teal'
  // Part 3
  const fav = document.getElementById('favorite-things')
  fav.removeChild(fav.lastElementChild)
  // Part 4
  const sTitle = document.querySelectorAll('special-title')
  sTitle.forEach((title) => {
    title.style.fontSize = '2rem'
  })
  // Part 5
  const removeRace = document.getElementById('past-races')
    removeRace.removeChild(removeRace.children[3])
  // Part 6
  const newItem = document.createElement('li');
  newItem.innerHTML = 'New York City';
  document.getElementById('past-races').appendChild(newItem);
  // Part 7
  const newDiv = document.createElement('div')
  document.getElementById('dom-adventures').append(newDiv)
  newDiv.classList.add('blog-post')

 const newH1 = document.createElement('h1')
 document.querySelector('.blog-post').append(newH1)
  newH1.innerHTML = 'New York City'

  const newP = document.createElement('p')
  document.querySelector('.blog-post').append(newP)
  newP.innerHTML = 'I raced with Pizza Rat'
}
