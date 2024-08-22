import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import {} from "../../data-editor/data-editor.js";
import { BeautifulWrapper, Description, MoreInfo, useMockDataGenerator, KeyName, defaultProps, } from "../../data-editor/stories/utils.js";
import { GridCellKind } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
import { DataEditorAll } from "../../data-editor-all.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
let num = 1;
function rand() {
    return (num = (num * 16_807) % 2_147_483_647);
}
export const RapidUpdates = () => {
    const { cols, getCellContent, setCellValueRaw } = useMockDataGenerator(100);
    const ref = React.useRef(null);
    const countRef = React.useRef(0);
    const displayCountRef = React.useRef(null);
    React.useEffect(() => {
        let rafID = 0;
        const sendUpdate = () => {
            const cells = [];
            const now = performance.now();
            for (let x = 0; x < 5000; x++) {
                const col = Math.max(10, rand() % 100);
                const row = rand() % 10_000;
                setCellValueRaw([col, row], {
                    kind: GridCellKind.Text,
                    data: x.toString(),
                    displayData: `${x}k`,
                    themeOverride: x % 5 !== 0
                        ? {
                            bgCell: "#f2fff4",
                            textDark: "#00d41c",
                        }
                        : {
                            bgCell: "#fff6f6",
                            textDark: "#d40000",
                        },
                    allowOverlay: true,
                    lastUpdated: now,
                });
                cells.push({ cell: [col, row] });
            }
            countRef.current += 5000;
            if (displayCountRef.current !== null) {
                displayCountRef.current.textContent = `${countRef.current}`;
            }
            ref.current?.updateCells(cells);
            rafID = window.requestAnimationFrame(sendUpdate);
        };
        sendUpdate();
        return () => {
            cancelAnimationFrame(rafID);
        };
    }, [setCellValueRaw]);
    return (_jsx(BeautifulWrapper, { title: "Rapid updating", description: _jsxs(_Fragment, { children: [_jsx(Description, { children: "Data grid can support many thousands of updates per seconds. The data grid can easily update data faster than a human can read it, more importantly the faster the data grid can update, the more time your code can spend doing more valuable work." }), _jsxs(MoreInfo, { children: ["Updates processed: ", _jsx(KeyName, { ref: displayCountRef }), " We could do this faster but we wrote a really crappy data store for this demo which is actually slowing down the data grid."] })] }), children: _jsx(DataEditorAll, { ...defaultProps, ref: ref, getCellContent: getCellContent, columns: cols, rows: 10_000 }) }));
};
