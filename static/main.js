console.log('Hello world  is js')

const postsBox = document.getElementById('posts-box')
const spinnerBox = document.getElementById('spinner-box')
const loadBtn = document.getElementById('load-btn')
const loadBox = document.getElementById('loading-box')

let visible = 3

const handleGetData = () =>{
    $.ajax({
        type: 'GET',
        url: `/inmuebles-json/${visible}/`,
        success: function(response){
            /* console.log(response.max) */
            maxSize = response.max
            const data = response.data
            /*Quitar la clase not-visible?? para que si se vea */
            spinnerBox.classList.remove('not-visible')
            setTimeout(()=>{
                spinnerBox.classList.add('not-visible')
                data.map(inmueble=>{
                    console.log(inmueble.id)
                    postsBox.innerHTML += `<div class="card p-3 mt-3 mb-3">
                                           ${inmueble.name}
                                            <br>
                                           ${inmueble.body}
                                           </div>" `
                })
                if(maxSize){
                    console.log('done')
                    loadBox.innerHTML="<h4> No hay mas inmuebles que mostrar</h4>"
                }
            }, 500)

           
            /* con este if indico que no hay mas  */
           
        },
        error: function(error){
            console.log(error)
        }
    })
}

/* Aqui corre la primera vez por si solo */
handleGetData()

loadBtn.addEventListener('click',()=>{
    /* increase the visible by 3 */ 
    visible += 3
    /* Aqui vuelve a correr de 3 en 3 */
    handleGetData()

})