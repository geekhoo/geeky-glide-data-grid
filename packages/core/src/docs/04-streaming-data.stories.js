import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { GridCellKind } from "../internal/data-grid/data-grid-types.js";
import {} from "../data-editor/data-editor.js";
import { DataEditorAll as DataEditor } from "../data-editor-all.js";
import { SimpleThemeWrapper } from "../stories/story-utils.js";
import { DocWrapper, Highlight, Marked, Wrapper } from "./doc-wrapper.js";
export default {
    title: "Glide-Data-Grid/Docs",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const StreamingData = () => {
    const highlightDataRef = React.useRef([
        {
            name: "Deidre Morris",
            company: "GONKLE",
            email: "deidremorris@gonkle.com",
            phone: "+1 (867) 507-3332",
            update: 0,
        },
        {
            name: "Sheryl Craig",
            company: "EVENTAGE",
            email: "sherylcraig@eventage.com",
            phone: "+1 (869) 520-2227",
            update: 0,
        },
        {
            name: "Lidia Bowers",
            company: "ANOCHA",
            email: "lidiabowers@anocha.com",
            phone: "+1 (808) 414-3826",
            update: 0,
        },
        {
            name: "Jones Norton",
            company: "REPETWIRE",
            email: "jonesnorton@repetwire.com",
            phone: "+1 (875) 582-3320",
            update: 0,
        },
        {
            name: "Lula Bruce",
            company: "COMDOM",
            email: "lulabruce@comdom.com",
            phone: "+1 (873) 452-2472",
            update: 0,
        },
        {
            name: "Larsen Montgomery",
            company: "SQUISH",
            email: "larsenmontgomery@squish.com",
            phone: "+1 (893) 482-3651",
            update: 0,
        },
        {
            name: "Becky Bright",
            company: "COMCUR",
            email: "beckybright@comcur.com",
            phone: "+1 (879) 494-2331",
            update: 0,
        },
        {
            name: "Charlotte Rowland",
            company: "FROLIX",
            email: "charlotterowland@frolix.com",
            phone: "+1 (861) 439-2134",
            update: 0,
        },
        {
            name: "Sonya Hensley",
            company: "GEEKETRON",
            email: "sonyahensley@geeketron.com",
            phone: "+1 (802) 553-2194",
            update: 0,
        },
        {
            name: "Stephenson Guthrie",
            company: "EXOSWITCH",
            email: "stephensonguthrie@exoswitch.com",
            phone: "+1 (903) 449-3271",
            update: 0,
        },
        {
            name: "Mcmillan Cline",
            company: "TURNLING",
            email: "mcmillancline@turnling.com",
            phone: "+1 (982) 496-2454",
            update: 0,
        },
        {
            name: "Kemp Davis",
            company: "TETRATREX",
            email: "kempdavis@tetratrex.com",
            phone: "+1 (859) 594-2982",
            update: 0,
        },
        {
            name: "Matilda Levy",
            company: "SLOFAST",
            email: "matildalevy@slofast.com",
            phone: "+1 (841) 521-2444",
            update: 0,
        },
        {
            name: "Hattie Simpson",
            company: "COMTRAK",
            email: "hattiesimpson@comtrak.com",
            phone: "+1 (962) 587-3805",
            update: 0,
        },
        {
            name: "Kinney Munoz",
            company: "IDETICA",
            email: "kinneymunoz@idetica.com",
            phone: "+1 (921) 513-2012",
            update: 0,
        },
        {
            name: "Lambert Raymond",
            company: "TURNABOUT",
            email: "lambertraymond@turnabout.com",
            phone: "+1 (919) 519-2442",
            update: 0,
        },
        {
            name: "Bryant Dunlap",
            company: "BYTREX",
            email: "bryantdunlap@bytrex.com",
            phone: "+1 (872) 583-2883",
            update: 0,
        },
    ]);
    const dataRef = React.useRef([
        {
            name: "Deidre Morris",
            company: "GONKLE",
            email: "deidremorris@gonkle.com",
            phone: "+1 (867) 507-3332",
            update: 0,
        },
        {
            name: "Sheryl Craig",
            company: "EVENTAGE",
            email: "sherylcraig@eventage.com",
            phone: "+1 (869) 520-2227",
            update: 0,
        },
        {
            name: "Lidia Bowers",
            company: "ANOCHA",
            email: "lidiabowers@anocha.com",
            phone: "+1 (808) 414-3826",
            update: 0,
        },
        {
            name: "Jones Norton",
            company: "REPETWIRE",
            email: "jonesnorton@repetwire.com",
            phone: "+1 (875) 582-3320",
            update: 0,
        },
        {
            name: "Lula Bruce",
            company: "COMDOM",
            email: "lulabruce@comdom.com",
            phone: "+1 (873) 452-2472",
            update: 0,
        },
        {
            name: "Larsen Montgomery",
            company: "SQUISH",
            email: "larsenmontgomery@squish.com",
            phone: "+1 (893) 482-3651",
            update: 0,
        },
        {
            name: "Becky Bright",
            company: "COMCUR",
            email: "beckybright@comcur.com",
            phone: "+1 (879) 494-2331",
            update: 0,
        },
        {
            name: "Charlotte Rowland",
            company: "FROLIX",
            email: "charlotterowland@frolix.com",
            phone: "+1 (861) 439-2134",
            update: 0,
        },
        {
            name: "Sonya Hensley",
            company: "GEEKETRON",
            email: "sonyahensley@geeketron.com",
            phone: "+1 (802) 553-2194",
            update: 0,
        },
        {
            name: "Stephenson Guthrie",
            company: "EXOSWITCH",
            email: "stephensonguthrie@exoswitch.com",
            phone: "+1 (903) 449-3271",
            update: 0,
        },
        {
            name: "Mcmillan Cline",
            company: "TURNLING",
            email: "mcmillancline@turnling.com",
            phone: "+1 (982) 496-2454",
            update: 0,
        },
        {
            name: "Kemp Davis",
            company: "TETRATREX",
            email: "kempdavis@tetratrex.com",
            phone: "+1 (859) 594-2982",
            update: 0,
        },
        {
            name: "Matilda Levy",
            company: "SLOFAST",
            email: "matildalevy@slofast.com",
            phone: "+1 (841) 521-2444",
            update: 0,
        },
        {
            name: "Hattie Simpson",
            company: "COMTRAK",
            email: "hattiesimpson@comtrak.com",
            phone: "+1 (962) 587-3805",
            update: 0,
        },
        {
            name: "Kinney Munoz",
            company: "IDETICA",
            email: "kinneymunoz@idetica.com",
            phone: "+1 (921) 513-2012",
            update: 0,
        },
        {
            name: "Lambert Raymond",
            company: "TURNABOUT",
            email: "lambertraymond@turnabout.com",
            phone: "+1 (919) 519-2442",
            update: 0,
        },
        {
            name: "Bryant Dunlap",
            company: "BYTREX",
            email: "bryantdunlap@bytrex.com",
            phone: "+1 (872) 583-2883",
            update: 0,
        },
    ]);
    const getContent = React.useCallback((cell) => {
        const [col, row] = cell;
        const dataRow = dataRef.current[row];
        const indexes = ["name", "company", "email", "phone"];
        const d = dataRow[indexes[col]];
        return {
            kind: GridCellKind.Text,
            allowOverlay: true,
            displayData: d,
            data: d,
        };
    }, []);
    const getContentHighlighted = React.useCallback((cell) => {
        const [col, row] = cell;
        const dataRow = highlightDataRef.current[row];
        const indexes = ["name", "company", "email", "phone"];
        const d = dataRow[indexes[col]];
        return {
            kind: GridCellKind.Text,
            allowOverlay: true,
            displayData: d,
            data: d,
            lastUpdated: dataRow.update,
        };
    }, []);
    const columns = React.useMemo(() => {
        return [
            {
                title: "Name",
                id: "name",
            },
            {
                title: "Company",
                id: "company",
            },
            {
                title: "Email",
                id: "email",
            },
            {
                title: "Phone",
                id: "phone",
            },
        ];
    }, []);
    const ref = React.useRef(null);
    const onButtonClick = () => {
        // Swap the emails of 2 random people
        const randomRow1 = Math.floor(Math.random() * dataRef.current.length);
        const randomRow2 = Math.floor(Math.random() * dataRef.current.length);
        const temp = dataRef.current[randomRow1].email;
        dataRef.current[randomRow1].email = dataRef.current[randomRow2].email;
        dataRef.current[randomRow2].email = temp;
        ref.current?.updateCells([randomRow1, randomRow2].map(r => ({ cell: [2, r] })));
    };
    const onHighlightButtonClick = () => {
        // Swap the emails of 2 random people
        const randomRow1 = Math.floor(Math.random() * highlightDataRef.current.length);
        const randomRow2 = Math.floor(Math.random() * highlightDataRef.current.length);
        const temp = highlightDataRef.current[randomRow1].email;
        highlightDataRef.current[randomRow1].email = highlightDataRef.current[randomRow2].email;
        highlightDataRef.current[randomRow2].email = temp;
        highlightDataRef.current[randomRow1].update = performance.now();
        highlightDataRef.current[randomRow2].update = performance.now();
        ref.current?.updateCells([randomRow1, randomRow2].map(r => ({ cell: [2, r] })));
    };
    return (_jsxs(DocWrapper, { children: [_jsx(Marked, { children: `
# Streaming Data

> Glide Data Grid is capable of streaming hundreds of thousands of updates per second. You won't need that, but every millisecond the grid doesn't take is another millisecond your app has to process data and remain responsive.

Streaming data is done as a two step process.

1. Update the data backing store.
2. Inform the Glide Data Grid of the changed data.

The Grid does not care of the data is coming down over the wire or being generated locally. Informing the grid of changes to the data is done by calling the \`updateCells\` function on a bound ref.` }), _jsx(Highlight, { children: `
const ref = React.useRef<DataEditorRef | null>(null);

return <DataEditor {...rest} ref={ref} />
` }), _jsx(Marked, { children: `
Data can now be updated by calling mutating the backing store and using the ref to update cells.` }), _jsx(Highlight, { children: `
const onButtonClick = () => {
    // Swap the emails of 2 random people
    const randomRow1 = Math.floor(Math.random()*data.length);
    const randomRow2 = Math.floor(Math.random()*data.length);

    const temp = data[randomRow1].email;
    data[randomRow1].email = data[randomRow2].email;
    data[randomRow2].email = temp;

    ref.current?.updateCells([randomRow1, randomRow2].map(r => ({ cell: [2, r]})));
}
` }), _jsx("button", { onClick: onButtonClick, children: "Swappy Swappy" }), _jsx(Wrapper, { height: 400, children: _jsx(DataEditor, { ref: ref, getCellContent: getContent, columns: columns, rows: dataRef.current.length }) }), _jsx(Marked, { children: `
## Showing updates
        
If \`getContent\` is updated to also return the last time a cell was updated the data grid will highlight cells as they update.` }), _jsx(Highlight, { children: `
const getContent = React.useCallback((cell: Item): GridCell => {
    const [col, row] = cell;
    const data = fetchDataFromBackend(col, row);
    return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        displayData: data.value,
        data: data.value,
        lastUpdated: data.updatedAt,
    };
}, []);
` }), _jsx(Marked, { children: `
> Note that timestamps are based on performance.now() and not Date.now(). This is to ensure that timestamps always increase monotonically and nothing weird will happen if the clock adjusts.` }), _jsx("button", { style: { marginTop: 16 }, onClick: onHighlightButtonClick, children: "Swapity Swap Swap" }), _jsx(Wrapper, { height: 600, children: _jsx(DataEditor, { ref: ref, getCellContent: getContentHighlighted, columns: columns, rows: dataRef.current.length }) })] }));
};
StreamingData.storyName = "04. Streaming Data";
