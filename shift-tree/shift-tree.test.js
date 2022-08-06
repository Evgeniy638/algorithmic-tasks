const { shiftTree } = require('./index')
const { treeArgs, treeResult } = require('./mock')


test("shiftTree должнг корректно сдвигать значения", () => {
    expect(shiftTree(treeArgs)).toEqual(treeResult)
})
