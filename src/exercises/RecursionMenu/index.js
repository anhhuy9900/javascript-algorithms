// Input
const arr = [
    {
        name: 'root cate 1',
        children: [
            {
                name: 'parent cate 2',
                children: [
                    {
                        name: 'child cate 3',
                        children: []
                    }
                ]
            }
        ],
    }, 
    {
        name: 'root cate 2',
        children: []
    }
]

// Output
// - Root Cate 1
// -- parent Cate 2
// --- child Cate 1
// - Root Cate 2

function renderMenu(arr, flag = '-', nArr = [], level = 0) {
    if (!arr.length) return [];
    arr.forEach((el) => {
        nArr.push({
            name: el.name,
            flag,
            level: ++level
        })
        if (el.children.length) {
            return renderMenu(el.children, `${flag}-`, nArr, level)
        }
    })

    return nArr
}

console.log(renderMenu(arr));