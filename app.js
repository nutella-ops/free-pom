var date = new Date();
var dateArray = [date.getMonth(), date.getFullYear()];
// var DD = Date().slice(8, 10);
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
    var entryArray = Array.from(document.getElementsByClassName("entry")).map(function (elem) {
        console.log(elem);
        return elem.innerText;
    })
    download(MM + YY +".json", JSON.stringify(entryArray)); 
     
}

var main = function () {
    "use strict";

    var postComment = function() {
        var $newComment = $("<p>")
        var $usrInput = $(".comment-input input").val();
        var $wipeInput = $(".comment-input input").val("");
        // var date = new Date();
        date

        if ($usrInput !== "") {
            $newComment.hide();
            $newComment.addClass("entry")
            $newComment.text($usrInput + ", " + date); 
            $(".comments").append($newComment);
            $newComment.fadeIn();
            $wipeInput;
        }

        if ($usrInput == "") {
            //do nothing
        }
    };

    $(".comment-input input").on("keydown", function (event) {
        if (event.keyCode == 13) {
            makeJson();
        };
    });

    $(".comment-input input").on("keydown", function (event) {
        if (event.keyCode == 13) {
            postComment();
        };
    });
};

$(document).ready(main);