chrome.storage.local.get({
    ProgramAuto: false,
    CreditNum: ''
}, items => {
    if (items.ProgramAuto) {
        setCredit(items.CreditNum, send());
    }
})

function setCredit(creditNum) {
    if ($('#multi_CVV2Num')[0] && $('#multi_card_no_sel')[0].value) {
        $('#multi_CVV2Num')[0].value = creditNum;
    } else {
        setTimeout(setCredit.bind(this, creditNum), 500)
    }
}

function send() {
    if ($('#btnSubmit')[0] && $('#multi_CVV2Num')[0].value) {
        console.log('click');
        // $('#btnSubmit')[0].click();
    } else {
        setTimeout(send.bind(this), 500)
    }
}