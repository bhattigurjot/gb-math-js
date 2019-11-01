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

        let x = (_v1.x / _s)
        let y = (_v1.y / _s)
        let x_decimal_digits = x.toString().split(".")[1].length
        let y_decimal_digits = y.toString().split(".")[1].length

        if(x_decimal_digits > 5 || y_decimal_digits > 5) {
            x = parseFloat(x.toFixed(5))
            y = parseFloat(y.toFixed(5))
        }

        // let x = parseFloat((_v1.x / _s).toFixed(5))
        // let y = parseFloat((_v1.y / _s).toFixed(5))
        return new vec2d(x, y)
    }

    static dotProduct(_v1, _v2) {
        let s = (_v1.x * _v2.x) + (_v1.y * _v2.y)
        return s
    }

    //cross product on 2-D vectors results in a scalar value, not a vector product.
    static crossProduct(_v1, _v2) {
        let s = (_v1.x * _v2.y) - (_v1.y * _v2.x)
        return s
    }

    //TODO: handle errors and exceptions that can return NaN
    static magnitude(_v1) {
        let m = Math.sqrt((_v1.x * _v1.x) + (_v1.y * _v1.y))
        return m
    }

    static magnitudeSquared(_v1) {
        let ms = (_v1.x * _v1.x) + (_v1.y * _v1.y)
        return ms
    }
}

export { vec2d }