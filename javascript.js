function birth() {
    var d = parseFloat(document.getElementById('d').value);
    var m = parseFloat(document.getElementById('m').value);
    var y = parseFloat(document.getElementById('y').value);
    var c = (y - 1) / 100 + 1;
    var dayoftheweek = (c / 4 - 2 * c - 1 + 5 * y / 4 + 26 * (m + 1) / 10 + d) % 7;
    console.log(dayoftheweek);
    document.getElementById('result').innerHTML = Math.round(dayoftheweek);
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var choice = document.getElementById('select').value;
    if (choice === "female") {
        console.log(female[Math.round(dayoftheweek)]);
        document.getElementById ('Akan').innerHTML = female[Math.round(dayoftheweek)];
    }
    else if (choice === "male") {
        console.log(male[Math.round(dayoftheweek)]);
        document.getElementById('Akan').innerHTML = female[Math.round(dayoftheweek)];
    }
    else {
        console.log("Invalid input");
    }
}
