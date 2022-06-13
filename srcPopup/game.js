document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.feedback').addEventListener('click', onclick, false)

    function onclick() {
        document.getElementById('bod').innerHTML = '' +
            // '<h1>Please consider filling in the quick form below, alternatively </h1>' +
            '<iframe width = "475" height = "250" src = "https://vclock.com/embed/timer/#theme=0&ampm=1&sound=xylophone" frameborder = "0" allowfullscreen> </iframe>'
    }
})