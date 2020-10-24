$(document).ready(function() { 
        var randomQuote = '' + "Nothing easy in the World" + '';
        $("#new-quote").click(function() {                $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en", function(responseText) { 
                $("#text").html('"' + responseText.quoteText + '"');
                $("#author").html("- " + responseText.quoteAuthor);
randomQuote = responseText.text;  
            });                    
        });
        $("#tweet-quote").click(function() {
     window.open("https://twitter.com/intent/tweet?text="+'"'+randomQuote+'"');
        });
    });