function calcPopust() {
    let cijena = document.querySelector('.cijena').value;
    let snizenje = document.querySelector('.sniz').value;
    let x = parseFloat(cijena) / 100 * parseInt(snizenje);
    Number(x).toFixed(2);
    document.querySelector('.konacno').innerText = x;
}
