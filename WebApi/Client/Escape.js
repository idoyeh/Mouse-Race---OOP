class Escape extends Element {
    constructor(size, speed) {
        super(size, speed);
    }

    // creating a shape - Square
    draw() {
        ctx.fillStyle = 'orange';
        ctx.fillRect(leftElement, topElement, tileSize, tileSize);
    }

    hitTarget() {
        // Compare object1 with object2
        if (this.rectIntersect(leftElement + canvas.offsetLeft, topElement + canvas.offsetTop, tileSize, tileSize, cursor.offsetLeft, cursor.offsetTop, 20, 20)) {
            round++;

            // display modal round
            if (round < 3) {
                $("#modal-round").css("display", "block");
                init();
                $('#display_round').html("סיבוב מספר: " + round);
                setTimeout(function () {
                    $("#modal-round").css("display", "none");
                }, 750);
            }
        }

        // end game - after 3 rounds
        if (round == 3) {
            document.body.removeEventListener('mousemove', Cursor.mouseMove);
            clearInterval(cancel);
            isStop = true;
            $("#modal-end").css("display", "block");
            isStart = false;
            $('#display_score').html("score (seconds + 3 round * 5 points): " + (Score.seconds + round * 5));
        }
    }

    // Escape from the cursor
    // move to random positions.move at size pixel
    moveTo() {
        // Returns a random integer from 1 to 4:
        let num = Math.floor(Math.random() * 4) + 1;

        if (isStart) {
            switch (num) {
                case 1:
                    this.movePlayerLeft();
                    break;
                case 2:
                    this.movePlayerRight();
                    break;
                case 3:
                    this.movePlayerTop();
                    break;
                case 4:
                    this.movePlayerBottom();
                    break;
            }
        }
    }

}
