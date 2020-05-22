getEle();
function getEle() {
    if ($('.cart_box')[0]) {
        $('.CC a')[0].click();
    } else if ($(".s_empty")[0]) {
        location.reload();
    } else {
        setTimeout(getEle.bind(this), 500)
    }
}