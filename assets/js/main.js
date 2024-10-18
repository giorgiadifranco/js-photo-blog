console.log('it works');

const rowPhotoEl = document.querySelector('.row_photo');


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
                    <div class="col-sm-12 col-md-3 col-lg-1 col_photo hover_photo">
                        <span class="dot"></span>
                        <div class="card photo_space">
                        <img src="${url}" alt="">
                        </div>
                        <div>
                        <h2 class="description ">${title}</h2> 
                        </div>       
                     </div> `


                postElements+= markup
    } console.log(postElements)
    /*postsPhoto.forEach(post =>{

        const {title, url, thumbnailUrl} = post

        const markup =  ` 
                    <div class="col-sm-12 col-md-3 col-lg-1 col_photo hover_photo">
                        <span class="dot"></span>
                        <div class="card photo_space">
                            ${thumbnailUrl}
                        </div>
                        <div>
                        <h2 class="description ">${title}</h2> 
                        </div>       
                     </div> `


                postElements+= markup

        }*/
    
        rowPhotoEl.innerHTML= postElements

        
       
        
})





