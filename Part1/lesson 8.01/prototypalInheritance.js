const l = console.log
const obj = {
    method: function() {
        l("method in obj")
    }
}
const obj2 = {}
obj2.__proto__ = obj
obj2.method()