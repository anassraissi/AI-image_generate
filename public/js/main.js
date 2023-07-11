
    // document.querySelector('#image-form').addEventListener("submit",onsubmit)
    document.getElementById('image-form').addEventListener('submit', function (event) {
      event.preventDefault(); //katmna3 tload page tatsali

      const prompt=document.querySelector('#prompt').value;
      const size=document.querySelector('#size').value;

      if (prompt === '') {
          alert('Please add some text');
          return;
        }

        generateImageRequest(prompt, size);
        
        async function generateImageRequest(prompt, size) {
        try {
          ShowSpinner();
          const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',

            },
            body: JSON.stringify({
              prompt,
              size,
            }),
          });
          
          
          if (!response.ok) {
            RemoveSpinner();
            throw new Error('That image could not be generated');
          }



          const data=await response.json()
          console.log(data)
          RemoveSpinner();
            
            
          }
          catch(err){
            console.log(err);
            document.querySelector('.msg').textContent=err;
  }
} 


function ShowSpinner(){
  document.querySelector('.spinner').classList.add('show')
}
function RemoveSpinner(){
  document.querySelector('.spinner').classList.remove('show')
  
}
// }
    });
   
