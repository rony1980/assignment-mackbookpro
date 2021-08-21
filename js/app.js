//calculate total price
function calculateTotal(spanTotalPrice, spanTotal) {
    let totalPrice = 0;
    totalPrice = totalPrice + parseInt(document.getElementById('best-price').innerText);
    totalPrice = totalPrice + parseInt(document.getElementById('extra-memory').innerText);
    totalPrice = totalPrice + parseInt(document.getElementById('extra-storage').innerText);
    totalPrice = totalPrice + parseInt(document.getElementById('delivery-charge').innerText);
    document.getElementById(spanTotalPrice).innerText = totalPrice;
    document.getElementById(spanTotal).innerText = totalPrice;
}

// Extra Cost function
function costUpdate(itemId, PriceId) {
    const itemPrice = document.getElementById(itemId).value;
    const itemCost = document.getElementById(PriceId);
    itemCost.innerText = itemPrice;
    calculateTotal('total-price', 'total');
}

const memory8Gb = document.getElementById('memory-8gb').addEventListener('click', function () {
    costUpdate('memory-8gb', 'extra-memory'); // value = $0
})
const memory16Gb = document.getElementById('memory-16gb').addEventListener('click', function () {
    costUpdate('memory-16gb', 'extra-memory'); // value = $180
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

// Promo Code
document.getElementById('promo-code-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code').value;
    let bestPrice = 1299;
    if (promoCode == 'stevekaku') {
        bestPrice = parseInt(document.getElementById('best-price').innerText);
        bestPrice = 1299 - (1299 * 20) / 100;
    }
    else {
        alert("Promo Code Not Matched!!");
    }
    document.getElementById('best-price').innerText = Math.round(bestPrice);
    calculateTotal('total-price', 'total');
})