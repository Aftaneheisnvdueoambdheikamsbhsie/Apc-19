let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(`${item} added to cart!`);
}

function viewCart() {
    console.log("Cart Contents:", cart);
    let cartDetails = cart.map(i => `${i.item}: ${i.price}`).join('\n');
    alert(cartDetails);
}

function checkout() {
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    let receiptContent = `Items Purchased:\n` + cart.map(i => `${i.item}: ${i.price}`).join('\n') + `\nTotal: ${total}`;
    downloadReceipt(receiptContent);
}

function downloadReceipt(content) {
    let blob = new Blob([content], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "receipt.txt";
    link.click();
}
