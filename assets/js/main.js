console.log('it works');

const rowPhotoEl = document.querySelector('.row_photo');
const rowEl = document.querySelector('.row')
//const overlayEl = document.querySelector('.overlay')
//const overLayEl = document.getElementById("overlay")

//const img_fullEL = document.getElementById('img_full')


axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(response =>{

    //richiesta

    console.log(response);

    const postsPhoto = response.data;

    let postElements = ''

    for(let i= 0; i <postsPhoto.length; i++){

        const post = postsPhoto[i];

        const{title, url, thumbnailUrl} = post
        const markup =  ` 
                    <div class="col-3 col_photo hover_photo">
                        <span class="dot"></span>
                        <div class="card photo_space">
                        <img src="${url}" onclick="on()" class="img_full${i}" alt="">
                        </div>
                        <div>
                        <h2 class="description ">${title}</h2> 
                        </div>       
                     </div> `


                postElements+= markup
    } console.log(postElements)
    
    
    rowPhotoEl.innerHTML= postElements

    

    
  /*overLayEl.addEventListener('click', function On() {

    overLayEl.style.display = "block";

    //overLayEl.innerHTML = `${url}`--> sbagliata l'ovrlay deve essere mostrata insieme all'immagine
}*/

    //overLayEl.style.display = "none";

    //const overLayEl = document.getElementById("overlay").style.display = "none"; --> inserito in CSS

    
  

        
    
})


function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("img_full1").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("img_full1").style.display = "none";
  }

/*img_fullEL.addEventListener('click', function() {
    if (document.getElementById("overlay").style.display = "none" ) {
        document.getElementById("overlay").style.display = "block";
    } 
    else if(document.getElementById("overlay").style.display = "block") {
        
    }
})*/
/*function on() {
 

    document.getElementById("overlay")
    .style.display = "block";
    }*/
  

   

    

//document.addEventListener("click", 
   





