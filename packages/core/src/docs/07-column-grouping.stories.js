import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { GridCellKind } from "../internal/data-grid/data-grid-types.js";
import { DataEditorAll as DataEditor } from "../data-editor-all.js";
import { SimpleThemeWrapper } from "../stories/story-utils.js";
import { DocWrapper, Highlight, Marked, Wrapper } from "./doc-wrapper.js";
export default {
    title: "Glide-Data-Grid/Docs",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
const data = [
    {
        name: "Deidre Morris",
        company: "GONKLE",
        email: "deidremorris@gonkle.com",
        phone: "+1 (867) 507-3332",
    },
    {
        name: "Sheryl Craig",
        company: "EVENTAGE",
        email: "sherylcraig@eventage.com",
        phone: "+1 (869) 520-2227",
    },
    {
        name: "Lidia Bowers",
        company: "ANOCHA",
        email: "lidiabowers@anocha.com",
        phone: "+1 (808) 414-3826",
    },
    {
        name: "Jones Norton",
        company: "REPETWIRE",
        email: "jonesnorton@repetwire.com",
        phone: "+1 (875) 582-3320",
    },
    {
        name: "Lula Bruce",
        company: "COMDOM",
        email: "lulabruce@comdom.com",
        phone: "+1 (873) 452-2472",
    },
    {
        name: "Larsen Montgomery",
        company: "SQUISH",
        email: "larsenmontgomery@squish.com",
        phone: "+1 (893) 482-3651",
    },
    {
        name: "Becky Bright",
        company: "COMCUR",
        email: "beckybright@comcur.com",
        phone: "+1 (879) 494-2331",
    },
    {
        name: "Charlotte Rowland",
        company: "FROLIX",
        email: "charlotterowland@frolix.com",
        phone: "+1 (861) 439-2134",
    },
    {
        name: "Sonya Hensley",
        company: "GEEKETRON",
        email: "sonyahensley@geeketron.com",
        phone: "+1 (802) 553-2194",
    },
    {
        name: "Stephenson Guthrie",
        company: "EXOSWITCH",
        email: "stephensonguthrie@exoswitch.com",
        phone: "+1 (903) 449-3271",
    },
    {
        name: "Mcmillan Cline",
        company: "TURNLING",
        email: "mcmillancline@turnling.com",
        phone: "+1 (982) 496-2454",
    },
    {
        name: "Kemp Davis",
        company: "TETRATREX",
        email: "kempdavis@tetratrex.com",
        phone: "+1 (859) 594-2982",
    },
    {
        name: "Matilda Levy",
        company: "SLOFAST",
        email: "matildalevy@slofast.com",
        phone: "+1 (841) 521-2444",
    },
    {
        name: "Hattie Simpson",
        company: "COMTRAK",
        email: "hattiesimpson@comtrak.com",
        phone: "+1 (962) 587-3805",
    },
    {
        name: "Kinney Munoz",
        company: "IDETICA",
        email: "kinneymunoz@idetica.com",
        phone: "+1 (921) 513-2012",
    },
    {
        name: "Lambert Raymond",
        company: "TURNABOUT",
        email: "lambertraymond@turnabout.com",
        phone: "+1 (919) 519-2442",
    },
    {
        name: "Bryant Dunlap",
        company: "BYTREX",
        email: "bryantdunlap@bytrex.com",
        phone: "+1 (872) 583-2883",
    },
];
export const ColumnGrouping = () => {
    const getContent = React.useCallback((cell) => {
        const [col, row] = cell;
        const dataRow = data[row];
        const indexes = ["name", "company", "email", "phone"];
        const d = dataRow[indexes[col]];
        return {
            kind: GridCellKind.Text,
            allowOverlay: true,
            displayData: d,
            data: d,
        };
    }, []);
    const columns = React.useMemo(() => {
        return [
            {
                title: "Name",
                id: "name",
                group: "Core",
            },
            {
                title: "Company",
                id: "company",
                group: "Core",
            },
            {
                title: "Email",
                id: "email",
                group: "Extra",
            },
            {
                title: "Phone",
                id: "phone",
                group: "Extra",
            },
        ];
    }, []);
    return (_jsxs(DocWrapper, { children: [_jsx(Marked, { children: `
# Column Grouping

Columns can be grouped by assinging them a group. Easy peasy.` }), _jsx(Highlight, { children: `
const columns = React.useMemo<GridColumn[]>(() => {
    return [
        {
            title: "Name",
            id: "name",
            group: "Core",
        },
        {
            title: "Company",
            id: "company",
            group: "Core",
        },
        {
            title: "Email",
            id: "email",
            group: "Extra",
        },
        {
            title: "Phone",
            id: "phone",
            group: "Extra",
        },
    ];
}, []);
` }), _jsx(Wrapper, { height: 500, children: _jsx(DataEditor, { getCellContent: getContent, columns: columns, rows: data.length }) })] }));
};
ColumnGrouping.storyName = "07. Column Grouping";
