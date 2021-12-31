const emailReceiver = 'rhomairama.dev@gmail.com';

function submitForm() {
  // Parsing data / Get data --------------------------------------
  let name = document.getElementById('input-name').value;
  let email = document.getElementById('input-email').value;
  let phone = document.getElementById('input-phone').value;
  let subject = document.getElementById('input-subject').value;
  let message = document.getElementById('input-message').value;

  // alert(`
  //         name: ${nameData}
  //         email: ${emailData}
  //         phone number: ${phoneData}
  //         subject: ${subjectData}
  //         message: ${messageData}
  //       `);

  // Validation ---------------------------------------------------
  if (name == '') {
    return alert('Name input fields must be not empty');
  } else if (email == '') {
    return alert('Email input fields must be not empty');
  } else if (phone == '') {
    return alert('Phone input fields must be not empty');
  } else if (subject == '') {
    return alert('Subject input fields must be not empty');
  } else if (message == '') {
    return alert('Message input fields must be not empty');
  }

  // Mail to ---------------------------------------------------------
  const a = document.createElement('a');
  // a.href = 'mailto:' + emailReceiver + 'subject=' + subject + 'body=Hello my name ' + name + ', ' + subject + ',' + message;
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message}`;
  a.click();

  // Store data to object ---------------------------------------------
  let dataObject = {
    name: name,
    email: email,
    phoneNumber: phone,
    subject: subject,
    message: message,
  };
  console.log(dataObject);
}
