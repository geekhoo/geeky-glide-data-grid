import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { GridCellKind, } from "../internal/data-grid/data-grid-types.js";
import { DataEditorAll as DataEditor } from "../data-editor-all.js";
import { SimpleThemeWrapper } from "../stories/story-utils.js";
import { DocWrapper, Highlight, Marked, Wrapper } from "./doc-wrapper.js";
import { useLayer } from "react-laag";
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
export const Menus = () => {
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
                hasMenu: true,
            },
            {
                title: "Company",
                id: "company",
                hasMenu: true,
            },
            {
                title: "Email",
                id: "email",
                hasMenu: true,
            },
            {
                title: "Phone",
                id: "phone",
                hasMenu: true,
            },
        ];
    }, []);
    const onHeaderMenuClickedStage1 = React.useCallback((col, position) => {
        window.alert("Header menu clicked " + col + JSON.stringify(position));
    }, []);
    const [showMenu, setShowMenu] = React.useState();
    const onHeaderMenuClickedStage2 = React.useCallback((col, bounds) => {
        setShowMenu({ col, bounds });
    }, []);
    const { renderLayer, layerProps } = useLayer({
        isOpen: showMenu !== undefined,
        triggerOffset: 4,
        onOutsideClick: () => setShowMenu(undefined),
        trigger: {
            getBounds: () => ({
                bottom: (showMenu?.bounds.y ?? 0) + (showMenu?.bounds.height ?? 0),
                height: showMenu?.bounds.height ?? 0,
                left: showMenu?.bounds.x ?? 0,
                right: (showMenu?.bounds.x ?? 0) + (showMenu?.bounds.width ?? 0),
                top: showMenu?.bounds.y ?? 0,
                width: showMenu?.bounds.width ?? 0,
            }),
        },
        placement: "bottom-start",
        auto: true,
        possiblePlacements: ["bottom-start", "bottom-end"],
    });
    return (_jsxs(DocWrapper, { children: [_jsx(Marked, { children: `
# Menus

Glide Data Grid doesn't come with built in menus. Instead it is evented and ready to work with whatever menus you want 
to use. Let's learn how to add basic menus using [react-laag](https://www.react-laag.com/). Adding menu drop down indicators to headers is as simple
as passing a bool and listening to click events using \`onHeaderMenuClick\`.` }), _jsx(Highlight, { children: `
const columns = React.useMemo<GridColumn[]>(() => {
    return [
        {
            title: "Name",
            id: "name",
            hasMenu: true,
        },
        {
            title: "Company",
            id: "company",
            hasMenu: true,
        },
        {
            title: "Email",
            id: "email",
            hasMenu: true,
        },
        {
            title: "Phone",
            id: "phone",
            hasMenu: true,
        },
    ];
}, []);

const onHeaderMenuClick = React.useCallback((col: number, position: Rectangle) => {
    window.alert("Header menu clicked " + col + JSON.stringify(position));
}, []);

return <DataEditor {...rest} onHeaderMenuClick={onHeaderMenuClick} />;
` }), _jsx(Wrapper, { height: 200, children: _jsx(DataEditor, { getCellContent: getContent, columns: columns, rows: data.length, onHeaderMenuClick: onHeaderMenuClickedStage1 }) }), _jsx(Marked, { children: `
The provided coordinates are in page space. This makes it trivial to use [react-laag](https://www.react-laag.com/) to create a basic menu. Some 
styling would go a long way here.` }), _jsx(Highlight, { children: `
const [showMenu, setShowMenu] = React.useState<{ bounds: Rectangle; col: number }>();

const onHeaderMenuClick = React.useCallback((col: number, bounds: Rectangle) => {
    setShowMenu({ col, bounds });
}, []);

const { renderLayer, layerProps } = useLayer({
    isOpen: showMenu !== undefined,
    triggerOffset: 4,
    onOutsideClick: () => setShowMenu(undefined),
    trigger: {
        getBounds: () => ({
            bottom: (showMenu?.bounds.y ?? 0) + (showMenu?.bounds.height ?? 0),
            height: showMenu?.bounds.height ?? 0,
            left: showMenu?.bounds.x ?? 0,
            right: (showMenu?.bounds.x ?? 0) + (showMenu?.bounds.width ?? 0),
            top: showMenu?.bounds.y ?? 0,
            width: showMenu?.bounds.width ?? 0,
        }),
    },
    placement: "bottom-start",
    auto: true,
    possiblePlacements: ["bottom-start", "bottom-end"],
    });

return <>
    <DataEditor {...rest} onHeaderMenuClick={onHeaderMenuClick} />
    {showMenu !== undefined &&
        renderLayer(
            <div
                {...layerProps}
                style={{
                    ...layerProps.style,
                    width: 300,
                    padding: 4,
                    borderRadius: 8,
                    backgroundColor: "white",
                    border: "1px solid black",
                }}>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        )}
</>;
` }), _jsxs(Wrapper, { height: 200, children: [_jsx(DataEditor, { getCellContent: getContent, columns: columns, rows: data.length, onHeaderMenuClick: onHeaderMenuClickedStage2 }), showMenu !== undefined &&
                        renderLayer(_jsx("div", { ...layerProps, style: {
                                ...layerProps.style,
                                width: 300,
                                padding: 4,
                                borderRadius: 8,
                                backgroundColor: "white",
                                border: "1px solid black",
                            }, children: _jsxs("ul", { children: [_jsx("li", { children: "Item 1" }), _jsx("li", { children: "Item 2" }), _jsx("li", { children: "Item 3" })] }) }))] })] }));
};
Menus.storyName = "09. Menus";
