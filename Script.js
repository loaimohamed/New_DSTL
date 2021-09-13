var xhr = new XMLHttpRequest();
xhr.open("GET", "Data.json");
var listM = document.getElementById("listM");
xhr.onload = function () {
    jsonFile();
    colorSystem();
}
function jsonFile() {
    var informationZ = JSON.parse(xhr.responseText);
    var cvb = informationZ;
    for (l = 0; l < Object.keys(cvb).length - 1; l++) {
        var trE = document.createElement("tr");
        for (i = 0; i < 8; i++) {
            var tdE = document.createElement("td");
            tdE.innerHTML = cvb[l].List[i];
            trE.appendChild(tdE);
        }
        listM.appendChild(trE);
    }
}
xhr.send();
var ageRatings = ["+18", "+17", "+16", "+15"];
function colorSystem() {
    var colorSys = document.getElementsByTagName("tr");
    for (let i = 1; i < colorSys.length; i++) {
        var mark = document.createElement("span"),
            listName = colorSys[i].children[0];
        mark.classList.add("boxmarks");
        search = colorSys[i].children[6].innerHTML;
        mark.onselectstart = (n) => n.preventDefault();
        mark.onclick = function () {}
        if (search.indexOf("+12") != -1) { mark.classList.add("rPG"); mark.innerHTML = "+12" };
        if (search.indexOf("+15") != -1) { mark.classList.add("r15"); mark.innerHTML = "+15" };
        if (search.indexOf("+17") != -1) { mark.classList.add("rMA"); mark.innerHTML = "+17" };
        if (search.indexOf("+16") != -1) { mark.classList.add("r16"); mark.innerHTML = "+16" };
        if (search.indexOf("+18") != -1) { mark.classList.add("rR"); mark.innerHTML = "+18" };
        listName.insertAdjacentElement("afterbegin", mark);
    }
}