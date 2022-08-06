/**
 * interface TreeNode {
 *    value: number
 *    left: TreeNode | null
 *    right: TreeNode | null
 * }
 */
// module.exports = {
//     shiftTree(tree) {
//         const arrTreeValues = []

//         const treeTraversal = (treeNode, currentIndex = 0) => {
//             const leftValue = arrTreeValues.length - 1 < currentIndex ? null : arrTreeValues[currentIndex]
//             arrTreeValues[currentIndex] = treeNode.value
//             treeNode.value = leftValue

//             if (treeNode.left !== null && treeNode.left !== undefined) {
//                 treeTraversal(treeNode.left, currentIndex + 1)
//                 treeTraversal(treeNode.right, currentIndex + 1)
//             }
//         }

//         treeTraversal(tree)

//         return tree
//     }
// }

module.exports = {
    shiftTree(tree) {
        const stackTreeNodes = [tree]
        const stackIndexNodes = [0]
        const arrTreeValues = []

        while(stackTreeNodes.length) {
            const treeNode = stackTreeNodes.pop()
            const currentIndex = stackIndexNodes.pop()

            const leftValue = arrTreeValues.length - 1 < currentIndex ? null : arrTreeValues[currentIndex]
            arrTreeValues[currentIndex] = treeNode.value
            treeNode.value = leftValue

            if (treeNode.left !== null && treeNode.left !== undefined) {
                stackTreeNodes.push(treeNode.right)
                stackIndexNodes.push(currentIndex + 1)

                stackTreeNodes.push(treeNode.left)
                stackIndexNodes.push(currentIndex + 1)
            }
        }

        return tree
    }
}
