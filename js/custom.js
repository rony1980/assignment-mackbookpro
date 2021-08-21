// Extra Cost function
function costUpdate(GB, PriceId) {
    const ramPrice = document.getElementById(GB).value;
    const memoryCost = document.getElementById(PriceId);
    memoryCost.innerText = ramPrice;
}

const memory16Gb = document.getElementById('memory-16gb').addEventListener('click', function () {
    costUpdate('memory-16gb', 'extra-memory'); // value = $0
})
const memory8Gb = document.getElementById('memory-8gb').addEventListener('click', function () {
    costUpdate('memory-8gb', 'extra-memory'); // value = $180
})
const ssd256Gb = document.getElementById('ssd-256').addEventListener('click', function () {
    costUpdate('ssd-256', 'extra-storage'); // value = $0
})
const ssd512Gb = document.getElementById('ssd-512').addEventListener('click', function () {
    costUpdate('ssd-512', 'extra-storage');  // value = $100
})
const ssd1Tb = document.getElementById('ssd-1tb').addEventListener('click', function () {
    costUpdate('ssd-1tb', 'extra-storage'); // value = $180
})
const freeShipping = document.getElementById('free-shipping').addEventListener('click', function () {
    costUpdate('free-shipping', 'delivery-charge'); // value = $0
})
const paidShipping = document.getElementById('paid-shipping').addEventListener('click', function () {
    costUpdate('paid-shipping', 'delivery-charge'); // value = $20
})

