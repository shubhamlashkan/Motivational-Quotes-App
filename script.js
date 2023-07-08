const dataContainer = document.getElementById('cardContainer');
fetch('https://type.fit/api/quotes')
.then(response=>response.json())
.then(data=>{
    //console.log(data)
    data.forEach(item=>{
        //console.log(item.text );
        //console.log(item.author);
        if(item.author!=null){
            const card = document.createElement('div')
        card.classList.add('card');

        const nameElement = document.createElement('h2');
        nameElement.textContent = item.text;
        card.appendChild(nameElement);

        const authorElement = document.createElement('p');
        authorElement.textContent = item.author;
        card.appendChild(authorElement);

        const a = document.createElement('a')
        const link = document.createTextNode('Tweet this');
        a.appendChild(link);
        a.title = 'Tweet This';
        a.target="_blank";
        a.style.float = 'right';
        a.style.textDecoration='none';
        a.style.fontSize='1rem';
        var finaltext = item.text + '%0A%0A' + 'Developed by: @shubhamlashkan';
        a.href='https://twitter.com/intent/tweet?text='+finaltext;

        card.appendChild(a);
        dataContainer.appendChild(card);
        }
        


    })
}).catch(error=>
    console.error(error));