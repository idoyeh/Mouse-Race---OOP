class Game {
    constructor() { }

    // start
    start() {
        // start button
        $("#btn_type_player_chose").on("click", () => {
            cancel = setInterval(this.displayScore, 1000);

            window.document.body.addEventListener('mousemove', Cursor.mouseMove);
            $("#modal-start").css("display", "none");
            isStart = true;

            this.createElement();
            Cursor.drawCursor();
            init();

            this.drawGame();
            cancelGame = setInterval(this.drawGame, 1000 / speed);

        });

        // new game button
        $("#btn_new_game").on("click", () => {
            window.location.reload();
        });
    }

    // display score
    displayScore() {
        Score.incrementSeconds();
        $('#score').text("score: " + Score.seconds);
    }

    // create Element
    createElement() {
        if (document.getElementById("chase_btn").checked) { // Chase
            element = new Chase(tileSize, speed);
        }
        else if (document.getElementById("escape_btn").checked) { // Escape
            element = new Escape(tileSize, speed);
        }
        else if (document.getElementById("random_btn").checked) { // Random
            element = new Random(tileSize, speed);
        }
    }

    drawGame() {
        // clear screen function
        this.clearScreen = function () {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        this.clearScreen();
        element.moveTo();
        element.draw();
        element.hitTarget();

        if (isStop) {
            clearInterval(cancelGame);
        }
    }
    
}