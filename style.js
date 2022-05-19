

function generate () {
    let topLeft = document.getElementById('topLeft').value
    let topRight = document.getElementById('topRight').value
    let bottomLeft = document.getElementById('bottomLeft').value
    let bottomRight = document.getElementById('bottomRight').value

    let str =   `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px `


    let box = document.querySelector('.box')
    box.style.borderRadius =   `${str}`;

    textareaId.value = 'border-radius: ' + str;
    
}
for(let item of document.querySelectorAll('input')) {
    item.addEventListener('input', generate)
}
generate ()

// BUTTON COPY
function copy () {
    let copyText = document.getElementById("textareaId");
    
    copyText.select();
    document.execCommand('copy')
  
}
  document.querySelector('#copyBtn').addEventListener('click', copy)
  

 
