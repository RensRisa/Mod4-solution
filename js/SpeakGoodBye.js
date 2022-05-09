(function (window) {
    var byeSpeaker = {};
    byeSpeaker.name = "Good Bye";
    byeSpeaker.speak = function () {
        console.log(byeSpeaker.name + " ");
    }

    window.byeSpeaker = byeSpeaker; 

})(window);
