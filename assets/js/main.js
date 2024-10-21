console.log('it works');

const rowPhotoEl = document.querySelector('.row_photo');
const rowEl = document.querySelector('.row')
//const overlayEl = document.querySelector('.overlay')
const overLayEl = document.getElementById("overlay")


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
                        <img src="${url}" onclick="on()" class="img_full" alt="">
                        </div>
                        <div>
                        <h2 class="description ">${title}</h2> 
                        </div>       
                     </div> `


                postElements+= markup
    } console.log(postElements)
    
    
    rowPhotoEl.innerHTML= postElements

    
  overLayEl.addEventListener('click', function On() {

    overLayEl.style.display = "block";

    //overLayEl.innerHTML = `${url}`--> sbagliata l'ovrlay deve essere mostrata insieme all'immagine
}

    //overLayEl.style.display = "none";

    //const overLayEl = document.getElementById("overlay").style.display = "none"; --> inserito in CSS

    
  )

        
    
})
/*function on() {
 

    document.getElementById("overlay")
    .style.display = "block";
    }*/
  

   

    

//document.addEventListener("click", 
   





