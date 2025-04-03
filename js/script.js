//Recupero elementi dal DOM
const emailList = document.getElementById('email-list')

//AJAX Request
axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
    console.log(resp.data.response)
})