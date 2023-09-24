const options = document.querySelector("#option");
const eventDiv = document.querySelector("#eventDiv");

options.addEventListener('change', ()=>{
    if (options.value==='FOOD'){
        eventDiv.classList.remove('hidden');
    } else {
        eventDiv.classList.add('hidden');
    }
})
