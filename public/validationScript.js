const contactForm = document.querySelector('.feedback');

var fname = document.getElementById('name');
// var lname = document.getElementById('lname');
var address = document.getElementById('address');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var comment = document.getElementById('comments');





contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
   
        var emailCheckRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        console.log(email);
        if(email.value.length > 0 & !emailCheckRegEx.test(email.value)) {
            alert('Please enter a valid email');
            return;
        }
    
    
    
    
        
        var phonenoRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        console.log(phone)
        if(phone.value.length > 0 & !phonenoRegEx.test(phone.value))
            {
            alert("Please enter the phone number format");
             return;
            };
    

    alert( ' Thank you for submitting the form.');
    // document.getElementById("form").reset();


    let formData = {
        name: fname.value,
        // lname: lname.value,
        address: address.value,
        phone: phone.value,
        email: email.value,
        comment: comment.value
    }
    console.log(formData);


    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText)
        if(xhr.responseText == 'success'){
            alert('Email sent')
            fname.value = '';
            // lname.value = '';
            address.value = '';
            phone.value = '';
            email.value = '';
            comment.value = ''
        }
    }

    xhr.send(JSON.stringify(formData));
    
    document.getElementById("myform").reset();
    alert('Email Sent');
});



    

   

   






