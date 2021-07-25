class Random extends Element {
    constructor(size, speed) {
        super(size, speed);
    }

    // creating a shape - Circle
    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.arc(leftElement, topElement, tileSize / 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Escape from the cursor
    // move in a straight line.move at size pixel
    moveTo() {
        if (isFirstTime == true) {
            num = Math.floor(Math.random() * 4) + 1;
            isFirstTime = false;
        }

        //if we get to the border, then we'll jump to a random place.
        if (isLimit == true) {
            num = Math.floor(Math.random() * 4) + 1;
            isLimit = false;
        }

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
