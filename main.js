function message(){
    var Name = document.getElementById('studentName');
    var Email = document.getElementById('email');
    var Address = document.getElementById('address');
    var Mobile = document.getElementById('mobile');
    var Profession = document.getElementById('profession');
    var Subject = document.getElementById('subject');
   
    var Batch = document.getElementById('batch');
    var Payment = document.getElementById('payment');
    

    var Tx = document.getElementById('tx');
   

    var Requirement = document.getElementById('requirement');

    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || Email.value === '' || Address.value === '' || Mobile.value === '' || Profession.value === '' || Subject.value === '' || Batch.value === '' || Payment.value === '' || Tx.value === '' ){
        danger.style.display = 'block'; 
    } 

    else{
        setTimeout(() => {
            Name.value = '';
            Email.value = '';
            Address.value = '';
            Mobile.value = '';
            Profession.value = '';
            Payment.value = '';
            
            Tx.value = '';
            
            Requirement.value = '';

        }, 2000);

        success.style.display = 'block';
    }
    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}
