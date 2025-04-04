//Recupero elementi dal DOM
const list = document.getElementById('email-list')
const button = document.getElementById('button')

// dichiarazione delle variabili che ci servono
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

//Generate email address Function
const generateEmail = (domList) =>{
//     //Empty array
//     let genEmails = []
//     //Empty string
//     let string = ''
//     //FOR Loop
//     for(let i = 0; i < num; i++){
//         //AJAX Request
//         axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) =>{
//             //Pushing email address in array
//             genEmails.push(resp.data.response)
//             //Check if emails address generated are 10
//             if (genEmails.length === num){
//                 //generating string
//                 string = genEmails.map(email => `<li class="list-group-item" >${email}</li>`).join('');
//                 //inner.HTML the string
//                 emailList.innerHTML = string
//             }
//         })
//     }
    domList.innerHTML = ''
    for(let i=0; i<10; i++){
        axios.get(endpoint).then((res) => {
            let li = `<li class="list-group-item">${res.data.response}</li>`
            domList.innerHTML += li
        })
    }
}

//Invoke FUuntion
generateEmail(list)

//Show Toast
button.addEventListener('click', () => {
    generateEmail(list);
    
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



