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

test('Should return correct addition vector', () => {
    let v_r = v1.add(v2)
    expect(v_r.x).toBe(5)
    expect(v_r.y).toBe(5)
    expect(v_r).toMatchObject({x: 5, y: 5})

    let v3 = vec2d.addVectors(v1, v2)
    expect(v3).toMatchObject({x:5, y: 5})
})