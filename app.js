Window.localStorage;
var pastJson = JSON.parse(localStorage.getItem('json'));

var date = new Date();
var dateArray = [date.getMonth(), date.getFullYear()];
var DD = Date().slice(8, 10);
var MM = Date().slice(4, 7);
var YY = Date().slice(11,15);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

var makeJson = function () {
    "use strict";
    // var currentJson = pastJson + entryArray();
    download(DD + MM + YY +".json", JSON.stringify(pastJson + entryArray()));
}

var entryArray = function() {
    return Array.from(document.getElementsByClassName("entry")).map(function (elem) {
        console.log(elem);
        return elem.innerText;
    })
}

var entryString = function() {
    JSON.stringify(entryArray());
}

var main = function () {
    "use strict";
    
    var postComment = function() {
        var $newComment = $("<p>")
        var $usrInput = $(".comment-input input").val();
        var $wipeInput = $(".comment-input input").val("");
        var date = new Date();

        if ($usrInput !== "") {
            $newComment.hide();
            $newComment.addClass("entry")
            $newComment.text($usrInput + ", " + date + "\n"); 
            $(".comments").append($newComment);
            $newComment.fadeIn();
            $wipeInput;
        }

        if ($usrInput == "") {
            return null;
        }
    };

    $(".comment-input button").on("click", function (event) {
        makeJson();
        // localStorage.setItem('json', "");
        pastJson = localStorage.clear();
        window.location.reload();
        
    });

    $(".comment-input input").on("keydown", function (event) {
        if (event.keyCode == 13) {
            postComment();
            // var currentJson = pastJson + entryArray();
            localStorage.setItem('json', JSON.stringify(pastJson + entryArray()));  
        };
    });
};

$(document).ready(main);