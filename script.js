const share = document.querySelector('.share');

const newDivHtml = `
<div class='sharePopup'>
<p class="popUpText">SHARE</p>
    <img src="images/icon-facebook.svg" alt="facebook" class="fb">
    <img src="images/icon-twitter.svg" alt="twitter" class="tw">
    <img src="images/icon-pinterest.svg" alt="pinterest" class="pin">
</div>
`

share.addEventListener('mouseover', (e) => {
    console.log('event listener has been called')
    share.insertAdjacentHTML("beforebegin", newDivHtml)
    
});
