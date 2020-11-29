'use strict'

const table = document.querySelector('table')

const obj = {
    sortingMethod: false,
    count: 0
}

const defaultRows = Array.from(table.querySelectorAll("tr"));

function sortTable(columnIndex) {

    const dirModifier = !!obj.sortingMethod ? -1 : 1;
    const tBody = table.tBodies[0]
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ columnIndex + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ columnIndex + 1 })`).textContent.trim();

        if(+aColText && +bColText) {
            return +aColText > +bColText ? (1 * dirModifier) : (-1 * dirModifier);
        }
        
        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
        
    });

    tBody.append(...sortedRows)




    obj.sortingMethod = !obj.sortingMethod
    obj.count = obj.count + 1

    console.log(obj.count)
}


sortTable(2)

