// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()
        event.stopPropagation()        
        if (!form.checkValidity()) {
        
        } 
        else {
          document.getElementById('liveAlertPlaceholder').innerHTML = 
          '<div class ="alert alert-success" role="alert">'+
          'success'+
          '</div>'   
          // alert('success')     
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()