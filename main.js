

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
            let obj = {
                name : firstN.value,
                mail : mailInput.value,
                phone: phoneInput.value,
                time: timeInput.value
            }
            localStorage.setItem(mail, JSON.stringify(obj));

            getUserInfo(obj);   



        }

        function getUserInfo(user)
        {
            let childHtml = `<li class = "listData">${user.name} ${user.mail} ${user.phone} will arrive at ${user.time}<br> <button class = "btn"> Delete</button>  <button class = "edit"> Edit</button> </li>`
            dataAvail.innerHTML = dataAvail.innerHTML + childHtml;

        }
        
        function deleteData(e)
        {
            if(e.target.classList.contains = "btn"){
                console.log('Deleted');
                let li =e.target.parentElement;
                dataAvail.removeChild(li);
            }
        }


        