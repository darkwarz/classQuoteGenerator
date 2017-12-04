/*global $*/
$(document).ready(function() {
    function getQuote () {
        $.ajax ({
            method: "GET", 
        url : 'https://got-quotes.herokuapp.com/quotes',
        success: function (response) {
            $('#quote').text(response.quote);
            //document.getElementById('quote.innerHTML = response.quote')
            $('#character').text(response.character);
            //document.getElementById('character').innerHTML = response.character;
            }
        });
    }
        getQuote();
    $('#getQuote').on('click', function(event) {
        //event.preventDefault(); // prevents refreash of page
        getQuote();
    });
    
    //function Quote(getQuote()) {
        //getElementById('getQuote.innerHTML = response.quote')
        //getElementById('getQuote.textContent = reponse.quoteText')
})
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
