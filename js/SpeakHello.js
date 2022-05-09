(function (window) {
    var helloSpeaker = {};
    helloSpeaker.name = "Hello";
    helloSpeaker.speak = function () {
        console.log(helloSpeaker.name + " ");
    }

    window.helloSpeaker = helloSpeaker;

})(window);
