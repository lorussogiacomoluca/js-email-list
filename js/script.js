//Recupero elementi dal DOM
const emailList = document.getElementById('email-list')
const button = document.getElementById('button')

//Generate email address Function
const generateEmail = (num) =>{
    //Empty array
    let genEmails = []
    //Empty string
    let string = ''
    //FOR Loop
    for(let i = 0; i < num; i++){
        //AJAX Request
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
            //Pushing email address in array
            genEmails.push(resp.data.response)
            //Check if emails address generated are 10
            if (genEmails.length === num){
                //generating string
                string = genEmails.map(email => `<li class="list-group-item" >${email}</li>`).join('');
                //inner.HTML the string
                emailList.innerHTML = string
            }
        })
    }
}

//Invoke FUuntion
generateEmail(10)

//Show Toast
button.addEventListener('click', () => {
    generateEmail(10);
    
    //Sweet Alert
    Swal.fire({
        title: "Completato!",
        text: "Ecco 10 nuovi indirizzi email!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        position: "center"
    });
})



