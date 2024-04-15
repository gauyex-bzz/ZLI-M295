function verdoppeln(zahl, callback) {
    setTimeout(function() {
        callback(zahl * 2);
    }, 1000);

}
verdoppeln(5, function(ergebnis) {
    console.log('Das Ergebnis ist:', ergebnis);
});