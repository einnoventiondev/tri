$(document).ready(function () {
    function addLocation(x, y) {
        // let e = document.createElement('dot');
        // $(e).addClass("map-dot");
        let map = document.createElement('div');
        let dot = document.createElement('div');
        let outerDot = document.createElement('div');
        let innerDot = document.createElement('div');

        map.classList.add('map-dot');
        dot.classList.add('dot-relative');
        outerDot.classList.add('map-tab-dot__bg');
        innerDot.classList.add('map-tab-dot__inner');

        dot.appendChild(outerDot);
        dot.appendChild(innerDot);
        map.appendChild(dot);

        let adjX = x - 50; //click happens in center
        let adjY = y - 50;

        $(map).css("left", adjX);
        $(map).css("top", adjY);

        $('#map-view .container').append(map);

        return map;
    }
});