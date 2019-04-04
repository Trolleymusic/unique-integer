## Functions

<dl>
<dt><a href="#uniqueInteger">uniqueInteger()</a> ⇒ <code>number</code></dt>
<dd><p>Generate a unique integer - <em>default exported function</em></p>
<pre><code class="lang-javascript">import uniqueInteger from &#39;unique-integer&#39;

const id = uniqueInteger()
</code></pre>
</dd>
<dt><a href="#avoidClashes">avoidClashes(options)</a> ⇒ <code>number</code></dt>
<dd><p>Generate a unique integer avoiding a particular range</p>
<pre><code class="lang-javascript">import assert from &#39;assert&#39;
import { avoidClashes } from &#39;unique-integer&#39;

const ceiling = 1000
const floor = 0
const id = avoidClashes({ ceiling, floor })
assert(id &gt; ceiling)
assert(id &lt; floor)
</code></pre>
</dd>
</dl>

<a name="uniqueInteger"></a>

## uniqueInteger() ⇒ <code>number</code>
Generate a unique integer - *default exported function*
```javascript
import uniqueInteger from 'unique-integer'

const id = uniqueInteger()
```

**Kind**: global function  
**Returns**: <code>number</code> - A unique integer  
<a name="avoidClashes"></a>

## avoidClashes(options) ⇒ <code>number</code>
Generate a unique integer avoiding a particular range
```javascript
import assert from 'assert'
import { avoidClashes } from 'unique-integer'

const ceiling = 1000
const floor = 0
const id = avoidClashes({ ceiling, floor })
assert(id > ceiling)
assert(id < floor)
```

**Kind**: global function  
**Returns**: <code>number</code> - A unique integer  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.ceiling | <code>number</code> | lower bound of the range to avoid |
| options.floor | <code>number</code> | upper bound of the range to avoid |

