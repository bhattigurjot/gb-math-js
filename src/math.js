class vec2d {
    constructor(_x=0, _y=0) {
        this.x = _x
        this.y = _y
    }

    add(_v) {
        return new vec2d(this.x + _v.x, this.y + _v.y)
    }

    static addVectors(_v1, _v2) {
        return new vec2d(_v1.x + _v2.x, _v1.y + _v2.y)
    }

    static subVectors(_v1, _v2) {
        return new vec2d(_v1.x - _v2.x, _v1.y - _v2.y)
    }

    static mulScalar(_v1, _s) {
        return new vec2d(_v1.x * _s, _v1.y * _s)
    }

    static divScalar(_v1, _s) {
        if(_s === 0) {
            throw new Error("Cannot divide by zero")
        }

        let x = parseFloat((_v1.x / _s).toFixed(5))
        let y = parseFloat((_v1.y / _s).toFixed(5))
        return new vec2d(x, y)
    }
}

export { vec2d }