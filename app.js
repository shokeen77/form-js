function tableWithShow(){
    const word = document.getElementById('word').value;
    // const checked = document.getElementById('checked').value;
    // const radio = document.getElementById('radio').value;
   
  

    if(word && checked  && radio){
        const tableElement = document.getElementById('table');
            const trElement = document.createElement('tr');
            const tbodyElement = document.createElement('tbody');
            const nameEle = document.createElement('td');
            const emailEle = document.createElement('td');
            nameEle.innerHTML = word;
            // nameEle.innerHTML = checked;
            // nameEle.innerHTML = radio;
           trElement.appendChild(nameEle);
           tbodyElement.appendChild(trElement);
           tableElement.appendChild(tbodyElement);
    }

}
