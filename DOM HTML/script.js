// #1
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.createElement('button');
    let text = document.createTextNode('Click Me');
    btn.appendChild(text);
    num1.appendChild(btn);
    btn.addEventListener('click', function () {
        alert('Thank you for clicking the button!!')
        
    })
    
    
    // #2
    textBox.placeholder = 'Type your message here'
    textBox.name = 'name'
    txtBtn.addEventListener('click', function () {
        textInput = document.querySelector('textarea[name="name"]').value;
        alert(textInput);
    })

    // #3
    num3.addEventListener('mouseover', function () {
        document.getElementById('num3').style.background = 'lightblue'
    })
    num3.addEventListener('mouseout', function () {
        document.getElementById('num3').style.background = 'transparent'
        
    })

    // #4
    let paragraph = document.createElement('p');
    paragraph.id = 'num4Paragraph';
    let paraText = document.createTextNode('Two roads diverged in a wood, and I- I took the one less traveled by, And that has made all the difference. Robert Frost')
    num4.appendChild(paragraph);
    paragraph.appendChild(paraText);

    num4.addEventListener('click', function () {
        function randomColor() {
            return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
                (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        }
        paragraph.style.color = randomColor();
    })
    let spanButton = document.createElement('input');
    spanButton.id = 'spanButton';
    spanButton.type = 'submit';
    spanButton.value = 'Click Me, Click Me!!!';
    num5.appendChild(spanButton);
    

    // #5
    function newSpan() {
        let divSpan = document.createElement('span');
        let spanText = document.createTextNode('Heather');
        num5.appendChild(divSpan)
        divSpan.appendChild(spanText);
    }
    spanButton.addEventListener('click', newSpan)

    // #6
    let friends = ['Margaret', 'Heather', 'Gina', 'Kristina', 'Sharon', 'Jenifer', 'Tonya', 'Jennifer', 'Beth', 'Tina'];
    
    function newLi() {
        for (i = 0; i < friends.length; i++) {
        let li = document.createElement('li');
        let liText = document.createTextNode(friends[i]);
        ulNum6.appendChild(li);
        li.appendChild(liText);
        }
    }
    ulInput.addEventListener('click', newLi)
})

