

const formInput = document.querySelector('#my_form');
        const firstN = document.querySelector('#fname');
        const mailInput = document.querySelector('#mail');
        const phoneInput = document.querySelector('#phone');
        const timeInput = document.querySelector('#time');
        const msg = document.querySelector('.msg');
        const afterSubmit = document.querySelector('.submitted');
        
        let dataAvail = document.getElementById('items');

        dataAvail.addEventListener('click' , deleteData);

        function deleteData(e)
        {
            if(e.target.classList.contains('btn'))
            {
                confirm('Are you sure?')
                {
                    let li = e.target.parentElement;
                    dataAvail.removeChild(li);
                }
            }
        }
        
        
        

        

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
            localStorage.removeItem(mail);

            afterSubmit.innerHTML = 'Success!!';
            setTimeout(() => afterSubmit.remove(), 3000);
            
            firstN.value = '';
            mailInput.value = '';
            phoneInput.value = '';
            timeInput.value = '';
            var data = document.createElement('li');

            let details1 = JSON.stringify(myObj);
            

            data.appendChild(document.createTextNode(details1));
            data.style.fontSize = '20px';
            let libtn = document.createElement('button');
            let txtbtn = document.createTextNode('delete');
            libtn.appendChild(txtbtn);
            libtn.className = 'btn';
            data.appendChild(libtn);
            var insert4 = document.querySelector('div .data-header');

            var insert3 = document.querySelector('h2 .insertbeforespan');
            dataAvail.insertBefore(data, insert3);
            
            

        }

        


        