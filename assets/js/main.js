console.log('it works');

const rowPhotoEl = document.querySelector('.row_photo');
const rowEl = document.querySelector('.row')
//const overlayEl = document.querySelector('.overlay')
//const overLayEl = document.getElementById("overlay")

//const img_fullEL = document.getElementById('img_full')
const overLayimgEL= document.querySelectorAll(".overlay_img");
//console.log(overLayimgEL);


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
                        <img src="${url}" onclick="on()" class="" alt="">
                        </div>
                        <div>
                        <h2 class="description ">${title}</h2> 
                        </div>       
                     </div> `


                postElements+= markup
    } console.log(postElements)
    
    
    rowPhotoEl.innerHTML= postElements

    const overlayEl = document.getElementById("overlay");

    let postOverLay = ''
    postsPhoto.forEach((postOver)=>{
            const{ url} = postOver
            const markup =  `                     
                        <img src="${url}" onclick="on()" class="overlay_img" alt="">
                         `
            postOverLay+=  markup
        } 
        
    ) ;

    overlayEl.innerHTML = postOverLay;

   
    const overLayimgEL= document.querySelectorAll(".overlay_img");

    overLayimgEL.forEach((image)=> image.addEventListener('click', function on() {
            overlayEl.style.display = "block";  // Mostra l'overlay quando si clicca su un'immagine
        }));
    /*overLayimgEL.addEventListener('click', function on(){
        overLayElnew.style.display = "block";})*/

    
})

    
/*

        //const postOver = postsPhoto[i];

        const{ url} = postOver
        const markup =  `                     
                        <img src="${url}" onclick="on()" class="overlay_img" alt="">
                         `

                        postOverLay+= markup

                
    } console.log(postOverLay)
     
    overlayEl.innerHTML= postOverLay;

    const images = document.querySelectorAll('img');
    const overLayImg = document.querySelectorAll('.overlay_img');
    images.forEach((image) => { //console.log(image.src)
        image.addEventListener('click', function onOff() {
           document.getElementById("overlay").style.display = "block";
           
        })      
        });


        //funzione di off con click sull'overlay

       

        overlayEl.addEventListener ('click', function off() {
        overlayEl.style.display = "none";}
)


});


 */