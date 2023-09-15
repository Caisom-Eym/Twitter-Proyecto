const btnPost = document.getElementById("btn-post")
const containerPost = document.getElementById("container-post")
let nameUserPostArray = [["Redigit","@Demilogic","redigit.jpg"],["dimden","@dimdenEFF","dimden.jpg"],["ara.agni","@Araceli23908252","agni.jpg"],["Rulombo","@RulomboTV","RulomboTV.jpg"],["Guinxu","@guinxu","guinxu.jpg"],["Jensen Ackles","@JensenAckles","JensenAckles.jpg"],["Eym","@Caisom_Eym","Caisom.jpg"]]
let messagePost = []
const imgPost = ["Prince.jpg","RulomboTV.jpg"]

fragmento = ""
const crearPost = ()=> {
    messagePost = [
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi praesentium tenetur molestias obcaecati aperiam iusto veniam corporis officia iste, amet voluptatum est deserunt culpa quia ad ipsa! Ratione, perspiciatis id.`,
        `Me tomo un café y le damos por twitch`,
        `Lorem ipsum dolor sit`,
        `Esto funciona`,
        `Muy buena imagen
            <br><div class="img-post-container"><img src="assets/perfil/${nameUserPostArray[Math.floor(Math.random()*7)][2]}" class="img-post"></div>`,
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi praesentium tenetur molestias obcaecati aperiam iusto veniam corporis officia iste, amet voluptatum est deserunt culpa quia ad ipsa! Ratione, perspiciatis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi praesentium tenetur molestias obcaecati aperiam iusto veniam corporis officia iste, amet voluptatum est deserunt culpa quia ad ipsa! Ratione, perspiciatis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi praesentium tenetur molestias obcaecati aperiam iusto veniam corporis officia iste, amet voluptatum est deserunt culpa quia ad ipsa! Ratione, perspiciatis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi praesentium tenetur molestias obcaecati aperiam iusto veniam corporis officia iste, amet voluptatum est deserunt culpa quia ad ipsa! Ratione, perspiciatis id. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi praesentium tenetur molestias obcaecati aperiam iusto veniam corporis officia iste, amet voluptatum est deserunt culpa quia ad ipsa! Ratione, perspiciatis id.`
    ]
    numberUserRandom = Math.floor(Math.random()*7)
    numberTextRandom = Math.floor(Math.random()*6)
    post = `
                    <div class="post">
                        <div class="post-perfil">
                            <img src="assets/perfil/${nameUserPostArray[numberUserRandom][2]}" alt="" class="post-perfil-img">
                        </div>
                        <div class="post-container">
                            <div class="post-text">
                                <div class="post-user">
                                    <div class="post-name-ID-time">
                                        <span class="name">${nameUserPostArray[numberUserRandom][0]}</span>
                                        <span class="nameID">${nameUserPostArray[numberUserRandom][1]}</span>
                                        <span class="dot">•</span>
                                        <span class="time">${Math.floor(Math.random()*24)}h</span>
                                        <div class="moreOptions-post">
                                            <svg viewBox="0 0 24 24" class="svg-user-post">
                                                <g>
                                                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 
                                                    .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                                                    </path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p class="post-content">${messagePost[numberTextRandom]}</p>                       
                            </div>
                            <div class="post-info">
                                <div class="cont-info">
                                    <svg viewBox="0 0 24 24" class="svg-comment svg-post" id="svg-comment">
                                        <g>
                                            <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 
                                            7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 
                                            2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 
                                            3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span class="info-post" id="info-comment">${Math.floor(Math.random()*999)}</span>
                                </div>
                                <div class="cont-info">
                                    <svg viewBox="0 0 24 24"  class="svg-ret svg-post" id="svg-ret">
                                        <g>
                                            <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 
                                            0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 
                                            1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span class="info-post" id="info-ret">${Math.floor(Math.random()*999)}</span>
                                </div>
                                <div class="cont-info">
                                    <svg viewBox="0 0 24 24" class="svg-like svg-post" id="svg-like">
                                        <g>
                                            <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 
                                            5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 
                                            6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 
                                            2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 
                                            2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 
                                            4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span class="info-post" id="svg-like">${Math.floor(Math.random()*999)}</span>
                                </div>
                                <div class="cont-info">
                                    <svg viewBox="0 0 24 24" class="svg-view svg-post" id="svg-view">
                                        <g>
                                            <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z">
                                            </path>
                                        </g>
                                    </svg>
                                    <span class="info-post" id="info-view">${Math.floor(Math.random()*999)}</span>
                                </div>
                                <div class="cont-info">
                                    <svg viewBox="0 0 24 24" class="svg-share svg-post" id="svg-share">
                                        <g>
                                            <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 
                                            3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 
                                            .5-.22.5-.5L19 15h2z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>
    `
    fragmento += post 
}

const unirPost = ()=> {
    containerPost.innerHTML += fragmento

}


btnPost.addEventListener("click",()=>{
    crearPost()
    unirPost()
})

cantidadPost = 0

window.addEventListener("scroll",()=>{
    scroll = window.scrollY
    tamaño = containerPost.clientHeight
    mitad = tamaño/1.5
    if (scroll > mitad) {
        for (i = 0; i < 20; i++) {
        crearPost()
        }
        unirPost()
        cantidadPost++
        if (cantidadPost == 5){
            for (i = 0; i <100; i++) containerPost.removeChild(containerPost.firstChild)
            cantidadPost = 0
        }
    }
})



for (i=0; i<10;i++) {
crearPost()
}
unirPost()
