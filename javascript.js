alert("Welcome to Akan Names Webpage!");
function akan() {
    var d = parseFloat(document.getElementById('day').value);
    var m = parseFloat(document.getElementById('month').value);
    var y = parseFloat(document.getElementById('year').value);
    var c = (y - 1) / 100 + 1;
    var dayoftheweek = (c / 4 - 2 * c - 1 + 5 * y / 4 + 26 * (m + 1) / 10 + d) % 7;
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(dayoftheweek);
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var choice = document.querySelector('input[name="gender"]:checked').value;
    console.log(choice);
    if (d>31 || d<1){
        document.getElementById("d").innerHTML = ("The input day doesn't exist");
    }
    else if (m>12 || m<1){
        document.getElementById("m").innerHTML = ("The input month doesn't exist");
    }
    else if (y>2019 || y<1){
        document.getElementById("y").innerHTML = ("The input year doesn't exist");
    }
    else{ 
        document.getElementById('result').innerHTML = day[Math.round(dayoftheweek)];

    if (choice === "female" ) {
        console.log(female[Math.round(dayoftheweek)]);
        document.getElementById ('Akan').innerHTML = female[Math.round(dayoftheweek)];
    }
    else if (choice === "male") {
        console.log(male[Math.round(dayoftheweek)]);
        document.getElementById('Akan').innerHTML = male[Math.round(dayoftheweek)];
    }
    else {
        console.log("Invalid output");
    }
}
}