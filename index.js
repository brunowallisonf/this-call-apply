"use strict"

const { watch, promises: { readFile } } = require("fs")
class File {
    watch(event, filename) {
        this.showContent(filename)
        console.log(Array.prototype.slice.call(arguments))
    }
    async showContent(filename) {
        // console.log((await readFile(filename)).toString())
    }
}
console.log("brunos2")
const file = new File()
// watch(__filename, () => file.watch.call({ showContent: () => { console.log("here") } }, null, __filename))
// //watch(__filename, () => file.watch.apply({ showContent: () => { console.log("here") } }, [null, __filename]))
watch(__filename, file.watch.bind(file))