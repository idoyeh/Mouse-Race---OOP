class Chase extends Element {
    constructor(size, speed) {
        super(size, speed);
    }

    // creating a shape - Rectangle
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(leftElement, topElement, 1.5 * tileSize, tileSize);
    }

    // Chasing the cursor, check left and top position's cursor
    moveTo() {

        let checkLeftPosition = cursor.offsetLeft - (leftElement + canvas.offsetLeft) > 0;
        let checkTopPosition = cursor.offsetTop - (topElement + canvas.offsetTop) > 0;

        if (isStart) {
            if (checkLeftPosition) {
                this.movePlayerRight();
            }
            else {
                this.movePlayerLeft();
            }

            if (checkTopPosition) {
                this.movePlayerBottom();
            }
            else {
                this.movePlayerTop();
            }
        }
    }

}
