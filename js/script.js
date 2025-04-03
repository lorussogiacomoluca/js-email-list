//Recupero elementi dal DOM
const emailList = document.getElementById('email-list')

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
                string = genEmails.map(email => `<li>${email}</li>`).join('');
                //inner.HTML the string
                emailList.innerHTML = string
            }
        })
    }
}