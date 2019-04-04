import crc32 from 'crc-32'
import uuid from 'uuid/v1'

/**
 * @description Generate a unique integer - *default exported function*
```javascript
import uniqueInteger from 'unique-integer'

const id = uniqueInteger()
```
 * @return {number} A unique integer
 */
function uniqueInteger () {
  const id = uuid()
  return crc32.str(id)
}

export default uniqueInteger

/**
 * @description Generate a unique integer avoiding a particular range
```javascript
import assert from 'assert'
import { avoidClashes } from 'unique-integer'

const ceiling = 1000
const floor = 0
const id = avoidClashes({ ceiling, floor })
assert(id > ceiling)
assert(id < floor)
```
 * @param {Object} options
 * @param {number} options.ceiling - lower bound of the range to avoid
 * @param {number} options.floor - upper bound of the range to avoid
 * @return {number} A unique integer
 */
function avoidClashes ({ ceiling, floor }) {
  const id = uniqueInteger()
  // If it's not outside the clash bounds, try again
  return (id > ceiling || id < floor) ? id : avoidClashes({ ceiling, floor })
}

export { avoidClashes }
