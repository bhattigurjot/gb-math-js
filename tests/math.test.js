import add, {vec2d} from '../src/math'

test('demo function test', () => {
    expect(add(1,1)).toBe(2)
})

test('demo class test', () => {
    const v = new vec2d()
    expect(v.x).toBe(0)
    expect(v.y).toBe(0)
    v.setX(5)
    expect(v.x).toBe(5)
})