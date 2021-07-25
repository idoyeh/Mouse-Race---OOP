class Element {
    constructor(size, speed) {
        this.size = size;
        this.speed = speed;
    }

    hitTarget() {
        // Compare object1 with object2
        if (this.rectIntersect(leftElement + canvas.offsetLeft, topElement + canvas.offsetTop, tileSize, tileSize, cursor.offsetLeft, cursor.offsetTop, 20, 20)) {
            document.body.removeEventListener('mousemove', Cursor.mouseMove);
            clearInterval(cancel);
            isStop = true;

            $("#modal-end").css("display", "block");
            isStart = false;
            $('#display_score').html("score: " + Score.seconds);
        }
    }

    // detect collision
    rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
        
        // Check x and y for overlap
        if ((x2 >= x1 - (w2 / 2) && x2 <= x1 + w1 + w2) && (y2 >= y1 - (h2 / 2) && y2 <= y1 + h1 + h2)) {
            return true;
        }
        return false;
    }

    // random integer from 1 to 400 in canvas
    randomPosition() {
        // Returns a random integer from 1 to 400:
        return Math.floor(Math.random() * canvas.width) + 1;
    }

    // move Player Left
    movePlayerLeft() {
        this.movePlayerLeftRight(-(step));
    }

    // move Player Right
    movePlayerRight() {
        this.movePlayerLeftRight(step);
    }

    // move Player Top
    movePlayerTop() {
        this.movePlayerTopBottom(-(step));
    }

    // move Player Bottom
    movePlayerBottom() {
        this.movePlayerTopBottom(step);
    }

    // move Player to Left and Right
    movePlayerLeftRight(delta) {
        let newPos = leftElement + delta;
        if (newPos >= 0 && newPos <= (canvas.width - tileSize)) {
            leftElement = newPos;
        }
        else { isLimit = true; }
    }

    // move Player to Top and Bottom
    movePlayerTopBottom(delta) {
        let newPos = topElement + delta;
        if (newPos >= 0 && newPos <= (canvas.height - tileSize)) {
            topElement = newPos;
        }
        else { isLimit = true; }
    }

}
