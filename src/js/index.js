var menuToggle = document.getElementById("menuToggle");
var burgerMenu = document.getElementById("burgerMenu");
var messageId = document.getElementById("messageId");
var registrId = document.getElementById("registrId");
var teachId = document.getElementById("teachId");

var bar1Id = document.getElementById("bar1Id");
var bar2Id = document.getElementById("bar2Id");
var bar3Id = document.getElementById("bar3Id");

var suspicionId = document.getElementById("suspicionId");
var thingId = document.getElementById("thingId");
var declarationId = document.getElementById("declarationId");
var verdictId = document.getElementById("verdictId");



menuToggle.onclick = function() {
    var x = document.getElementById("menu");
    if (x.style.opacity === "1") {
        x.style.opacity = "0";
        x.style.transition = "1s";
        burgerMenu.style.background = "rgba(255, 255, 255, 0.1)";

        bar1Id.style.backgroundColor = "white";
        bar2Id.style.backgroundColor = "white";
        bar3Id.style.backgroundColor = "white";

        // bar1Id.style.backgroundColor = "blue";


    } else {
        x.style.display = "block";
        x.style.opacity = "1";
        x.style.transition = "1s";
        // burgerMenu.style.opacity = "1";
        burgerMenu.style.backgroundColor = "white";
        bar1Id.style.backgroundColor = "#37A4E5";
        // bar2Id.style.backgroundColor = "blue";
        bar3Id.style.backgroundColor = "#37A4E5";


        setInterval(function() {
            messageId.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        }, 4000);
        setInterval(function() {
            registrId.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        }, 5000);
        setInterval(function() {
            teachId.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        }, 4500);
    }
};
burgerMenu.onclick = function() {
    this.classList.toggle("change");
};

function suspicion(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        // console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        suspicionId.innerHTML = current;
        current++;

    }, 4000);
}

suspicion(1386, 113860);

function thing(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        thingId.innerHTML = current;
        current++;

    }, 7000);
}
thing(386, 1050);

function declaration(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        declarationId.innerHTML = current;
        current++;

    }, 5000);
}
declaration(18303, 100050);

function verdict(from, to) {
    let current = from;
    let timerId = setInterval(function() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        verdictId.innerHTML = current;
        current++;

    }, 9000);
}
verdict(92, 1050);

// document.getElementById("myInput").onkeyup = function() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     ul.style.display = "block";

//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";

//         } else {
//             li[i].style.display = "none";
//             li[i].onclick = function() {
//                 ul.style.display = "none";
//             };
//         }
//     }
// };