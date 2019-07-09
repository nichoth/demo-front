var { h } = require('preact')
var evs = require('../../EVENTS').hello

function Foo (match) {
    return function fooView (props) {
        return <div>
            foo route... hello {props.foo}

            <form onSubmit={props.emit(evs.world)}>
                <input type="text" name="example" />
                <button>Click</button>
            </form>

            <div>
                <pre>
                    <code>
                        {JSON.stringify(props, null, 2)}
                    </code>
                </pre>
            </div>
        </div>
    }
}

module.exports = Foo

