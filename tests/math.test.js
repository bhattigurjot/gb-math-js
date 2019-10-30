import {vec2d} from '../src/math'

let v1 = undefined
let v2 = undefined

beforeEach(() => {
    v1 = new vec2d(2,2)
    v2 = new vec2d(3,3)
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
    let v_r = v1.add(v2)
    expect(v_r.x).toBe(5)
    expect(v_r.y).toBe(5)
    expect(v_r).toMatchObject({x: 5, y: 5})

    let v3 = vec2d.addVectors(v1, v2)
    expect(v3).toMatchObject({x: 5, y: 5})
})

test('Should return correct subtraction resultant vector', () => {
    let v3 = vec2d.subVectors(v1, v2)
    expect(v3).toMatchObject({x: -1, y: -1})
})

test('Should return correct multiplication resultant vector (Vector by a Scalar)', () => {
    let v3 = vec2d.mulScalar(v1, 5)
    expect(v3).toMatchObject({x: 10, y: 10})

    let v4 = vec2d.mulScalar(v1, -6)
    expect(v4).toMatchObject({x: -12, y: -12})
})

test('Should return correct division resultant vector (Vector by a Scalar)', () => {
    let v3 = vec2d.divScalar(v1, 5)
    expect(v3).toMatchObject({x: 0.4, y: 0.4})

    let v4 = vec2d.divScalar(v1, -4)
    expect(v4).toMatchObject({x: -0.5, y: -0.5})

    //edge case - when result is non-terminating - expecting 5 decimal places
    let v5 = vec2d.divScalar(v1, -6)
    expect(v5).toMatchObject({x: -0.33333, y: -0.33333})

    //edge case - divide by zero
    // let v6 = vec2d.divScalar(v1, 0)
    // expect(v6).toMatchObject({x: Infinity, y: Infinity})
    expect(vec2d.divScalar(v1, 0)).rejects.toThrowError(new Error("Cannot divide by zero"))
})