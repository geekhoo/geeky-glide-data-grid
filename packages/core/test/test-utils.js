import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable sonarjs/no-duplicate-string */
import * as React from "react";
import { fireEvent, act, cleanup } from "@testing-library/react";
import { DataEditor, GridCellKind, } from "../src/index.js";
import { vi } from "vitest";
const BOOLEAN_DATA_LOOKUP = [true, false, undefined, null];
function getMockBooleanData(row) {
    return BOOLEAN_DATA_LOOKUP[row % BOOLEAN_DATA_LOOKUP.length];
}
export function sendClick(el, options, runTimers) {
    fireEvent.mouseDown(el, options);
    if (runTimers === true)
        act(() => {
            vi.runAllTimers();
        });
    fireEvent.mouseUp(el, options);
    if (runTimers === true)
        act(() => {
            vi.runAllTimers();
        });
    fireEvent.click(el, options);
}
export function sendTouchClick(el, options) {
    fireEvent.touchStart(el, options);
    fireEvent.touchEnd(el, {
        ...options,
        changedTouches: options.touches,
    });
    fireEvent.click(el, {
        clientX: options?.touches?.[0]?.clientX,
        clientY: options?.touches?.[0]?.clientY,
        pointerType: "touch",
        ...options,
    });
}
export const makeCell = (cell) => {
    const [col, row] = cell;
    switch (col) {
        case 0: {
            return {
                kind: GridCellKind.RowID,
                allowOverlay: false,
                data: `Data: ${col}, ${row}`,
            };
        }
        case 3: {
            return {
                kind: GridCellKind.Number,
                allowOverlay: true,
                data: 10,
                displayData: `${row}`,
            };
        }
        case 4: {
            return {
                kind: GridCellKind.Drilldown,
                allowOverlay: false,
                data: [
                    {
                        img: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
                        text: "Foobar",
                    },
                ],
            };
        }
        case 5: {
            return {
                kind: GridCellKind.Protected,
                allowOverlay: false,
            };
        }
        case 6: {
            return {
                kind: GridCellKind.Bubble,
                allowOverlay: false,
                data: ["Foobar"],
            };
        }
        case 7: {
            return {
                kind: GridCellKind.Boolean,
                allowOverlay: false,
                data: getMockBooleanData(row),
                readonly: row === 5,
            };
        }
        case 8: {
            return {
                kind: GridCellKind.Text,
                allowOverlay: true,
                data: `Data: ${col}, ${row}`,
                displayData: `שלום ${col}, ${row}`,
            };
        }
        case 9: {
            return {
                kind: GridCellKind.Markdown,
                allowOverlay: true,
                data: `# Header: ${col}, ${row}`,
            };
        }
        case 10: {
            return {
                kind: GridCellKind.Uri,
                allowOverlay: true,
                data: `https://example.com/${col}/${row}`,
            };
        }
        // No default
    }
    if (col > 10) {
        throw new Error(`Unexpected column: ${col}`);
    }
    return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        data: `Data: ${col}, ${row}`,
        displayData: `${col}, ${row}`,
        allowWrapping: true,
    };
};
export const basicProps = {
    columns: [
        {
            title: "A",
            width: 150,
            icon: "headerRowID",
        },
        {
            title: "B",
            width: 160,
            icon: "headerCode",
        },
        {
            title: "C",
            width: 170,
            icon: "headerNumber",
        },
        {
            title: "D",
            width: 180,
            icon: "headerString",
        },
        {
            title: "E",
            width: 40,
            icon: "headerBoolean",
        },
        {
            title: "F",
            width: 50,
            icon: "headerUri",
        },
        {
            title: "G",
            width: 60,
            icon: "headerVideoUri",
        },
        {
            title: "H",
            width: 70,
            icon: "headerEmoji",
        },
        {
            title: "I",
            width: 80,
            icon: "headerImage",
        },
        {
            title: "J",
            width: 90,
            icon: "headerPhone",
        },
        {
            title: "K",
            width: 90,
            icon: "headerPhone",
        },
    ],
    getCellContent: makeCell,
    getCellsForSelection: true,
    groupHeaderHeight: 32,
    headerHeight: 36,
    rowHeight: 32,
    onRowAppended: () => undefined,
    trailingRowOptions: {
        hint: "New row",
        sticky: true,
        tint: true,
    },
    rows: 1000,
};
export function getCellCenterPositionForDefaultGrid(cell) {
    const [col, row] = cell;
    const xStart = basicProps.columns.slice(0, col).reduce((acc, curr) => acc + curr.width, 0);
    const xOffset = basicProps.columns[col].width / 2;
    const yStart = basicProps.headerHeight + row * basicProps.rowHeight;
    const yOffset = basicProps.rowHeight / 2;
    return [xStart + xOffset, yStart + yOffset];
}
export function prep(resetTimers = true) {
    const scroller = document.getElementsByClassName("dvn-scroller").item(0);
    if (scroller !== null) {
        vi.spyOn(scroller, "clientWidth", "get").mockImplementation(() => 1000);
        vi.spyOn(scroller, "clientHeight", "get").mockImplementation(() => 1000);
        vi.spyOn(scroller, "offsetWidth", "get").mockImplementation(() => 1000);
        vi.spyOn(scroller, "offsetHeight", "get").mockImplementation(() => 1000);
    }
    act(() => {
        vi.runAllTimers();
    });
    if (resetTimers) {
        vi.useRealTimers();
    }
    else {
        act(() => {
            vi.runAllTimers();
        });
    }
    return scroller;
}
export const Context = p => {
    return (_jsxs(_Fragment, { children: [p.children, _jsx("div", { id: "portal" })] }));
};
// eslint-disable-next-line react/display-name
export const EventedDataEditor = React.forwardRef((p, ref) => {
    const [sel, setSel] = React.useState(p.gridSelection);
    const [extraRows, setExtraRows] = React.useState(0);
    const onGridSelectionChange = React.useCallback((s) => {
        setSel(s);
        p.onGridSelectionChange?.(s);
    }, [p]);
    const onRowAppened = React.useCallback(() => {
        setExtraRows(cv => cv + 1);
        void p.onRowAppended?.();
    }, [p]);
    return (_jsx(DataEditor, { ...p, ref: ref, gridSelection: sel, onGridSelectionChange: onGridSelectionChange, rows: p.rows + extraRows, onRowAppended: p.onRowAppended === undefined ? undefined : onRowAppened }));
});
export function standardAfterEach() {
    vi.clearAllTimers();
    cleanup();
}
export function standardBeforeEach() {
    // delete (window as any).ResizeObserver;
    // window.ResizeObserver = vi.fn().mockImplementation(() => ({
    //     observe: vi.fn(),
    //     unobserve: vi.fn(),
    //     disconnect: vi.fn(),
    // }));
    Element.prototype.scrollTo = vi.fn();
    Element.prototype.scrollBy = vi.fn();
    Object.assign(navigator, {
        clipboard: {
            writeText: vi.fn(() => Promise.resolve()),
            readText: vi.fn(() => Promise.resolve(`Sunday	Dogs	https://google.com
Monday	Cats	https://google.com
Tuesday	Turtles	https://google.com
Wednesday	Bears	https://google.com
Thursday	"L  ions"	https://google.com
Friday	Pigs	https://google.com
Saturday	"Turkeys and some ""quotes"" and
a new line char ""more quotes"" plus a tab  ."	https://google.com`)),
        },
    });
    Element.prototype.getBoundingClientRect = () => ({
        bottom: 1000,
        height: 1000,
        left: 0,
        right: 1000,
        top: 0,
        width: 1000,
        x: 0,
        y: 0,
        toJSON: () => "",
    });
    Object.defineProperties(HTMLElement.prototype, {
        offsetWidth: {
            get() {
                return 1000;
            },
        },
    });
    Image.prototype.decode = vi.fn();
    vi.spyOn(console, "error").mockImplementation((...args) => {
        const [message] = args;
        if (/Warning: An update to .* inside a test was not wrapped in act\(...\)/.test(message)) {
            throw new Error("An update was made outside of act() function: " + message);
        }
        // If you still want to see the error messages in the console, you can uncomment the next line:
        // console.warn(...args);
    });
}
