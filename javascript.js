
    $("#keyWordsButton").on("click", function(event) {
        var keywords = $("#keywords").val();
        event.preventDefault();
    })

    $("#yearButton").on("click", function(event) {
        var year = $("#year").val();
        event.preventDefault();
    })

    var url = "https://api.nytimes.com/svc/archive/v1/2016/1.json";
    url += '?' + $.param({
        'api-key':"a37f87b8092245b5b1e6d60c602534f0"
    });
    $.ajax({
    url: url,
    method: 'GET',
    }).done(function(result) {
    console.log(result);
    }).fail(function(err) {
    throw err;
    })

