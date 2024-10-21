console.log('it works');

const rowPhotoEl = document.querySelector('.row_photo');
const rowEl = document.querySelector('.row')
//const overlayEl = document.querySelector('.overlay')
//const overLayEl = document.getElementById("overlay")

//const img_fullEL = document.getElementById('img_full')
const overLayimgEL= document.getElementById("img_full[i]");
console.log(overLayimgEL);


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
                        <img src="${url}" onclick="on()" class="overlay_img" alt="">
                        </div>
                        <div>
                        <h2 class="description ">${title}</h2> 
                        </div>       
                     </div> `


                postElements+= markup
    } console.log(postElements)
    
    
    rowPhotoEl.innerHTML= postElements

    const images = document.querySelectorAll('img');
    const overLayImg = document.querySelectorAll('.overlay_img');
    images.forEach((image) => { //console.log(image.src)
        image.addEventListener('click', function onOff() {
           document.getElementById("overlay").style.display = "block";
           overLayImg.src = image.src;
        })      
        });


        //funzione di off con click sull'overlay

        const overlayEl = document.getElementById("overlay");

        overlayEl.addEventListener ('click', function off() {
        overlayEl.style.display = "none";}
)


});


   

    
     /*const img = postsPhoto.forEach((post) =>{ 
        post.addEventListener('click'=>function On( imgUrl , overlay){
            const overLayEl = document.getElementById("overlay")+post.url
        })
        //console.log (post.url)
        }         )*/
    

 
    
    /*
    const overLayimgEL= document.getElementById("img_full[i]");
    console.log(overLayimgEL);
    
  /*overLayEl.addEventListener('click', function On() {

    overLayEl.style.display = "block";

    //overLayEl.innerHTML = `${url}`--> sbagliata l'ovrlay deve essere mostrata insieme all'immagine
}*/

    //overLayEl.style.display = "none";

    //const overLayEl = document.getElementById("overlay").style.display = "none"; --> inserito in CSS

    
  
/*
        
    
})


function on(imgUrl) {
    const overLayEl = document.getElementById("overlay") //.style.display = "block";
    

    overLayimgEL.src = imgUrl;
    overLayEl.style.display = "block";
    //.style.display = "block";

  }
  function off() {
    const overlayEl = document.getElementById("overlay");
    overlayEl.style.display = "none";  // Nascondi l'overlay
}
  /*function off(url) {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("img_full").style.display = "none";
  }*/


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
   





