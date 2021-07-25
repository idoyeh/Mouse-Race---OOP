class Cursor {
    constructor() {
    }

    // start Cursor position
    static drawCursor() {
        cursor.style.left = canvas.offsetLeft + element.randomPosition() + "px";
        cursor.style.top = canvas.offsetTop + element.randomPosition() + "px";
    }

    static mouseMove(event) {
        var x = event.clientX;
        var y = event.clientY;

        // if cursor in canvas range, move.
        if (x >= canvas.offsetLeft && x <= canvas.offsetLeft + canvas.offsetWidth &&
            y >= canvas.offsetTop && y <= canvas.offsetTop + canvas.offsetHeight) {
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
        }
    }

}
