async function simuliereVerzoegerung(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addiereNachVerzoegerung(a, b, ms) {
    await simuliereVerzoegerung(ms);
    const ergebnis = a + b;
    console.log(`Das Ergebnis ist: ${ergebnis}`);
}

addiereNachVerzoegerung(3, 7, 2000); //addiert nach 2 Sekunden 3 und 7 und gibt die Summe aus
