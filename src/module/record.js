const axios = require('axios');
const url = '/src/content/news.json';


axios.get(url)
.then(function(response){
  //console.log(response);
  let data = response.data.news;

 // return data.map(function(news) {

    const markup = `
        <div class="items my-card-container grid">
        ${data.map(news => `
        <div class="item mdc-card grid-item ${news.tag}">
        <div class="mdc-card__primary"> 
        <div class="title mdc-card__title"> ${news.title} </div>
        <div class="description mdc-card__supporting-text"> ${news.description} </div>
        <div class="description mdc-card__supporting-text"> ${news.tag} </div>
        </div>
        </div>`).join('')}</div>`; 

    document.querySelector('#app').innerHTML = markup;
    //console.log(markup);

}); 
  