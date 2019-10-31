import {vec2d} from '../src/math'

let v1 = undefined
let v2 = undefined

beforeEach(() => {
    v1 = new vec2d(2,5)
    v2 = new vec2d(3,4)
})

test('Should create a new vector with zero values', () => {
    let v = new vec2d()
    expect(v.x).toBe(0)
    expect(v.y).toBe(0)
})

test('Should be able to change vector components', () => {
    v1.x = 5
    v1.y = 3
    expect(v1.x).toBe(5)
    expect(v1.y).toBe(3)
    expect(v1).toMatchObject({x: 5, y: 3}) // an optional way to check the values
})

test('Should return correct addition resultant vector', () => {
    let v_add = v1.add(v2)
    expect(v_add.x).toBe(5)
    expect(v_add.y).toBe(9)
    expect(v_add).toMatchObject({x: 5, y: 9})

    let v_add_2 = vec2d.addVectors(v1, v2)
    expect(v_add_2).toMatchObject({x: 5, y: 9})
})

test('Should return correct subtraction resultant vector', () => {
    let v_sub = vec2d.subVectors(v1, v2)
    expect(v_sub).toMatchObject({x: -1, y: 1})
})

test('Should return correct multiplication resultant vector (Vector by a Scalar)', () => {
    let v_mul_1 = vec2d.mulScalar(v1, 5)
    expect(v_mul_1).toMatchObject({x: 10, y: 25})

    let v_mul_2 = vec2d.mulScalar(v1, -6)
    expect(v_mul_2).toMatchObject({x: -12, y: -30})
})

test('Should return correct division resultant vector (Vector by a Scalar)', () => {
    let v_div_1 = vec2d.divScalar(v1, 5)
    expect(v_div_1).toMatchObject({x: 0.4, y: 1})

    //another edge case - when one result is without decimal digits i.e. a whole number.
    //this gives an error - cannot read property length for 'y'

    let v_div_2 = vec2d.divScalar(v1, -4)
    expect(v_div_2).toMatchObject({x: -0.5, y: -1.25})

    //edge case - when result is non-terminating - expecting 5 decimal places
    let v_div_3 = vec2d.divScalar(v1, -6)
    expect(v_div_3).toMatchObject({x: -0.33333, y: -0.83333})

    //there will not be any case where one value(either x or y) will be terminating
    //and the other non-terminating because of being divided by the same denominator.

    //edge case - divide by zero
    let v_div_4 = () => {
        vec2d.divScalar(v1, 0)
    }
    expect(v_div_4).toThrow("Cannot divide by zero")
})

test('Should return the Dot Product of two vectors', () => {
    let v_dot = vec2d.dotProduct(v1, v2)
    expect(v_dot).toBe(26)
})

test('Should return the Cross Product of two vectors', () => {
    let v_cross = vec2d.crossProduct(v1, v2)
    expect(v_cross).toBe(-7)
})