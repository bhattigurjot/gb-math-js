const add = (a,b) => {
    return a+b
}

class vec2d {
    constructor(_x=0, _y=0) {
        this.x = _x;
        this.y = _y;
    }

    setX(_x) {
        this.x = _x;
    }
}

export { vec2d, add as default }