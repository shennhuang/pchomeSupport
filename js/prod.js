var addProd = function(nextFunc) {
    if ($('#ButtonContainer button')[0]) {
        if ($('#ButtonContainer button')[0].innerText == "加入24h購物車"){
            $('#ButtonContainer button')[0].click()
        }
    } else {
        setTimeout(addProd.bind(this),10000);
    }
}

addProd();