/* global describe, it, expect */
import uniqueInteger, { avoidClashes } from './index'

describe('uniqueInteger', () => {
  it('should generate a unique id', () => {
    const idOne = uniqueInteger()
    const idTwo = uniqueInteger()
    expect(idOne).not.toEqual(idTwo)
  })

  it('should generate a unique id that is an integer', () => {
    const id = uniqueInteger()
    expect(typeof id).toBe('number')
    expect(id).toBe(Math.floor(id))
  })

  it('should generate safe ids', () => {
    const size = 10 ** 5
    const ids = new Array(size).fill().map(() => uniqueInteger())
    expect(ids).toHaveLength(size)
    ids.forEach(id => {
      expect(id).toBeLessThan(Number.MAX_SAFE_INTEGER)
      expect(id).toBeGreaterThan(Number.MIN_SAFE_INTEGER)
    })
  })

  it('should generate a large number of ids that are all unique', () => {
    const size = 10 ** 6
    console.time('uniqueIntegers Test')
    console.warn(`Testing ${size} unique ids`)

    const ids = new Array(size).fill().map(() => uniqueInteger())
    expect(ids).toHaveLength(size)
    const uniqueIntegers = [...new Set(ids)]
    expect(uniqueIntegers).toHaveLength(size)
    expect(uniqueIntegers).toMatchObject(ids)
    console.timeEnd('uniqueIntegers Test')
  })
})

describe('avoidClashes', () => {
  const floor = 0
  const ceiling = 10000000

  it(`If floor and ceiling are supplied, it should generate ids that are < ${floor} && > ${ceiling}`, () => {
    const size = 10 ** 5
    const options = { ceiling, floor }

    const ids = new Array(size).fill().map(() => avoidClashes(options))
    expect(ids).toHaveLength(size)
    ids.forEach(id => expect(id < floor || id > ceiling).toBeTruthy())
  })
})
