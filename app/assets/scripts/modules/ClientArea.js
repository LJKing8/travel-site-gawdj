import Axios from 'axios'
class ClientArea {
    constructor(){
        this.injectHTML()
        this.form= document.querySelector(".client-area__form")
        this.field= document.querySelector(".client-area__input")
        this.contentArea = document.querySelector(".client-area__content-area")
        this.events
    }
    events() {
        this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
        })
    }
    sendRequest(){
        Axios.post("https://vigorous-hugle-2c47da.netlify.com/.netlify/functions/secret-area",{password: this.field.value})
        .then(response => {
            this.form.remove()
            this.contentArea.innerHTML=response.data
        })
        .catch(()=>{
            this.contentArea.innerHTML= `<p class="client-area__error">That secret phrase is not correct. Try again.</p>`
            this.field.value= ''
            this.field.focus()
        })
    }
    injectHTML(){
        document.body.insertAdjacentHTML('beforeend',`
        <div class="wrapper wrapper--medium">
        <h2 class="section-title section-title--blue">Secret Client Area</h2>
        <form class="client-area__form" action="https://a.udemycdn.com/2019-11-14_23-07-18-ce230ae2f50763c06bf1416f26e29dc9/original.html?nva=20200229234133&amp;token=02e66ec749de8fb0aef0f">
          <input class="client-area__input" type="text" placeholder="Enter the secret phrase">
          <button class="btn btn--orange">Submit</button>
        </form>
        <div class="client-area__content-area"></div>
      </div>
        `)
    }
}

export default ClientArea