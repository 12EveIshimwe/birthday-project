function birth {
    var day = parseFloat(document.getElementById('day').value);
    var month = parseFloat(document.getElementById('month').value);
    var year = parseFloat(document.getElementById('day').value);
    var c = (y - 1) / 100 + 1;
    var dayoftheweek = (c / 4 - 2 * c - 1 + 5 * y / 4 + 26 * (m + 1) / 10 + d) % 7;
    console.log(dayoftheweek);
    document.getElementById('result').innerHTML = Math.round(dayof the week);
    va