
let quotes=[

    'Information technology','Reforms in Indian diplomacy','Importance of voting',
    'Fundamental rights in daily life',
    'Sustainable development in urban areas',
    'Organic gardening practices',
    'Mental stability in youth',
    'Facts in world rather than fiction stories ( bermuda triangle facts..)',
    'Civil servants and their impact in society',
    'Your opinion on national education policy 2020',
    'Women impoverment in rural areas your ideas and perspective',
    'Effect of colors for human mood',
    'Growth of an country based on way of roads and road construction',
    'Startup knowledge for school students! Justify it?',
    'Trade barriers serve higher goals',
    'About Recession',
    'Women empowerment',
    'Food and nutrition in daily life for better standards',
    'Predicting india @ 2030',
    'Organic farming',
    'Real history of india and its civilization',
    'Lost city of dwaraka do you believe it? If yes justify if not  why?',
    'Population control in india 🇮🇳',
    'Mens need to learn cooking for their future survive.',
    'Is it necessary to grow population in Russia', 
    'About Skill scarcity in India',
    'Relationship between pet and owner',
    'Indian education system should be continue to british colonial style or change to our ancient vedic style',
    

];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="icons/favicon.png">
    <p>${quotes[index]}</p>
    <img src="icons/favicon.png">
   </div>

    `;
    div.innerHTML=quote;
    
}

