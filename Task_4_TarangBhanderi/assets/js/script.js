var links = document.querySelectorAll('.nav-item');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

var button = document.querySelectorAll('.productbtn');
button.forEach(link => {
    link.addEventListener('click', function() {
        button.forEach(link => link.classList.remove('activated'));
        this.classList.add('activated');
    });
});


function collepsedMenu() {
    document.querySelector('.sidebar').classList.toggle('collepsed');
}

function openCard(product) {
    var i;
    var x = document.getElementsByClassName("cards");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(product).style.display = "block";
}