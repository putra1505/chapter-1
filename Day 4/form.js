// struktur variable
// kata_kunci nama_variable = nilai

//ketika menyimpan string bla bla
//let nama = "Putra";
//let umur = 17 

// menampilkan nilai dari 2 variable seklaigus, menggunakan simbol +
//let biodata = 'nama : ' + nama + '  umur : ' + umur;

//  Tamplate string
//let biodata2=`Nama : ${nama}
//Umur : ${umur}`;
 
//console.log (biodata)
//console.log (biodata2)

function showData() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value
    
    //console.log(name)
//    alert(`
//        Name : ${name}
//        Email : ${email}    
//        Phone : ${phone}
//        Subject : ${subject}
//        Message : ${message}`)

// validation
    if (name == '') {
        alert('Name input field must be not empty')
    }
    if (email == '') {
        alert('Email input field must be not empty')
    }
    if (phone == '') {
        alert('Phone input field must be not empty')
    }
    if (subject == '') {
        alert('Subject input field must be not empty')
    }
    if (message == '') {
        alert('Message input field must be not empty')
    }
// proses mailto
    let emailReceiver = "rangga5mei2001@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto: ${emailReceiver} ?subject= ${subject}&body=hello my name ${name}, ${subject}, ${message}`

    a.click()

//store data to object
    let dataObject ={
        dataName : name,
        dataEmail : email,
        dataPhone : phone,
        dataSubject : subject,
        dataMessage : message
    }
    console.log(dataObject)
}



