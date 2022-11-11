

const formInput = document.querySelector('#my_form');
        const firstN = document.querySelector('#fname');
        const mailInput = document.querySelector('#mail');
        const phoneInput = document.querySelector('#phone');
        const timeInput = document.querySelector('#time');
        const msg = document.querySelector('.msg');
        const afterSubmit = document.querySelector('.submitted');
        

        formInput.addEventListener('submit', addValues)
        let details = [];

        function addValues(e) {
            e.preventDefault();
            if (firstN.value === '' || mailInput.value === '' || phoneInput.value === '' || timeInput.value === '')
            {
                msg.innerHTML = '<p>Please Enter all fields</p>';

                setTimeout(() => msg.remove(), 3000);
            }

            let myObj = {
                name: firstN.value,
                mail: mailInput.value,
                phone: phoneInput.value,
                time: timeInput.value
            }
            
            details.push(myObj);
            

            localStorage.setItem('user', JSON.stringify(details));
            

            afterSubmit.innerHTML = 'Success!!';
            setTimeout(() => afterSubmit.remove(), 3000);
            
            firstN.value = '';
            mailInput.value = '';
            phoneInput.value = '';
            timeInput.value = '';

        }

        