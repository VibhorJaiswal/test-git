console.log("connected");


if (window.innerWidth < 800) {
    let temp = document.querySelectorAll('#card');
    for (let i = 0; i < 4; i++) {
        temp[i].setAttribute("class", "row card");
        temp[i].id = "";
    }
}


// materialize

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { duration: 300 });
});



$(document).ready(function () {
    $(".dropdown-trigger").dropdown();
});

