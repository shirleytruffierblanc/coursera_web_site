
function billingFunction() {
    if (document.getElementById('same').checked) {
        document.getElementById('billingMail').value =
            document.getElementById('shippingMail').value;
   document.getElementById('billingName').value =
            document.getElementById('shippingName').value;
    document.getElementById('billingSubject').value =
            document.getElementById('shippingSubject').value;
    }

    else {
        document.getElementById('billingName').value = '';
        document.getElementById('billingMail').value = '';
        ocument.getElementById('billingSubject').value = '';
    }
    
}