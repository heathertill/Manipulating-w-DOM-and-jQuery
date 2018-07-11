// #1
$('document').ready(function () {
    $('<input id=btn value="Click Me!">').appendTo('#num1')
    $('#btn').click(function () {
        alert('Thank you for clicking the button!!')
    })

    // #2
    $('#textBox').attr('placeholder', 'Type your message here')
    $('#txtBtn').click(function () {
        let $textInput = $('#textBox').val();
        alert($textInput);
    })

    // #3
    $('#num3').mouseover(function () {
        $('#num3').css('background', 'lightblue')
    })

    $('#num3').mouseout(function () {
        $('#num3').css('background', 'transparent')
    })

    // #4
    $('<p id=num4P>Two roads diverged in a wood, and I- I took the one less traveled by, And that has made all the difference. Robert Frost</p>').appendTo('#num4')
    function randomColor(colors) {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
            (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    $('#num4P').on('click', function () {
        $('#num4P').css('color', randomColor)
    })

    // #5
    $('<input id=spanBtn value="Click Me, Click Me!">').appendTo('#num5')
    $('#spanBtn').click(function () {
        $('#num5').append('<span>Heather</span>')
    })

    // #6
    let friends = ['Margaret', 'Heather', 'Gina', 'Kristina', 'Sharon', 'Jenifer', 'Tonya', 'Jennifer', 'Beth', 'Tina'];

    $('#ulInput').on('click', function () {
        for (i = 0; i < friends.length; i++) {
            $('<li>' + friends[i] + '</li>').appendTo('#ulNum6')
        }
    })
})
