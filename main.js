function message(){
    var Name = document.getElementById('name');
    var Email = document.getElementById('email');
    var Address = document.getElementById('address');
    var Mobile = document.getElementById('mobile');
    var Profession = document.getElementById('profession');
    var Subject = document.getElementById('subject');
   
    var Batch = document.getElementById('batch');
    var Bkash = document.getElementById('bkash');
    var Nogod = document.getElementById('nogod');
    var Cash = document.getElementById('cash');

    var Bkashtx = document.getElementById('bkashtx');
    var Nogodtx = document.getElementById('nogodtx');
    var CashDate = document.getElementById('cashdate');

    var Requirement = document.getElementById('requirement');

    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || Email.value === '' || Address.value === '' || Mobile.value === '' || Profession.value === '' || Subject.value === '' || Batch.value === '' ){
        danger.style.display = 'block'; 
    } 

    else{
        setTimeout(() => {
            Name.value = '';
            Email.value = '';
            Address.value = '';
            Mobile.value = '';
            Profession.value = '';
            Bkash.value = '';
            Nogod.value = '';
            Cash.value = '';
            Bkashtx.value = '';
            Nogodtx.value = '';
            CashDate.value = '';
            Requirement.value = '';

        }, 2000);

        success.style.display = 'block';
    }
    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}
