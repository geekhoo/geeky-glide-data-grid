import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { CompactSelection, GridCellKind, } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import range from "lodash/range.js";
import chunk from "lodash/chunk.js";
import { BeautifulWrapper } from "../../data-editor/stories/utils.js";
import { Description } from "../doc-wrapper.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
function useAsyncData(pageSize, maxConcurrency, getRowData, toCell, onEdited, gridRef) {
    pageSize = Math.max(pageSize, 1);
    const loadingRef = React.useRef(CompactSelection.empty());
    const dataRef = React.useRef([]);
    const [visiblePages, setVisiblePages] = React.useState({ x: 0, y: 0, width: 0, height: 0 });
    const visiblePagesRef = React.useRef(visiblePages);
    visiblePagesRef.current = visiblePages;
    const onVisibleRegionChanged = React.useCallback(r => {
        setVisiblePages(cv => {
            if (r.x === cv.x && r.y === cv.y && r.width === cv.width && r.height === cv.height)
                return cv;
            return r;
        });
    }, []);
    const getCellContent = React.useCallback(cell => {
        const [col, row] = cell;
        const rowData = dataRef.current[row];
        if (rowData !== undefined) {
            return toCell(rowData, col);
        }
        return {
            kind: GridCellKind.Loading,
            allowOverlay: false,
        };
    }, [toCell]);
    const loadPage = React.useCallback(async (page) => {
        loadingRef.current = loadingRef.current.add(page);
        const startIndex = page * pageSize;
        const d = await getRowData([startIndex, (page + 1) * pageSize]);
        const vr = visiblePagesRef.current;
        const damageList = [];
        const data = dataRef.current;
        for (const [i, element] of d.entries()) {
            data[i + startIndex] = element;
            for (let col = vr.x; col <= vr.x + vr.width; col++) {
                damageList.push({
                    cell: [col, i + startIndex],
                });
            }
        }
        gridRef.current?.updateCells(damageList);
    }, [getRowData, gridRef, pageSize]);
    const getCellsForSelection = React.useCallback((r) => {
        return async () => {
            const firstPage = Math.max(0, Math.floor(r.y / pageSize));
            const lastPage = Math.floor((r.y + r.height) / pageSize);
            for (const pageChunk of chunk(range(firstPage, lastPage + 1).filter(i => !loadingRef.current.hasIndex(i)), maxConcurrency)) {
                await Promise.allSettled(pageChunk.map(loadPage));
            }
            const result = [];
            for (let y = r.y; y < r.y + r.height; y++) {
                const row = [];
                for (let x = r.x; x < r.x + r.width; x++) {
                    row.push(getCellContent([x, y]));
                }
                result.push(row);
            }
            return result;
        };
    }, [getCellContent, loadPage, maxConcurrency, pageSize]);
    React.useEffect(() => {
        const r = visiblePages;
        const firstPage = Math.max(0, Math.floor((r.y - pageSize / 2) / pageSize));
        const lastPage = Math.floor((r.y + r.height + pageSize / 2) / pageSize);
        for (const page of range(firstPage, lastPage + 1)) {
            if (loadingRef.current.hasIndex(page))
                continue;
            void loadPage(page);
        }
    }, [loadPage, pageSize, visiblePages]);
    const onCellEdited = React.useCallback((cell, newVal) => {
        const [, row] = cell;
        const current = dataRef.current[row];
        if (current === undefined)
            return;
        const result = onEdited(cell, newVal, current);
        if (result !== undefined) {
            dataRef.current[row] = result;
        }
    }, [onEdited]);
    return {
        getCellContent,
        onVisibleRegionChanged,
        onCellEdited,
        getCellsForSelection,
    };
}
export const ServerSideData = () => {
    const ref = React.useRef(null);
    const getRowData = React.useCallback(async (r) => {
        await new Promise(res => setTimeout(res, 300));
        return range(r[0], r[1]).map(rowIndex => [`1, ${rowIndex}`, `2, ${rowIndex}`]);
    }, []);
    const columns = React.useMemo(() => {
        return [
            {
                title: "A",
                width: 150,
            },
            {
                title: "B",
                width: 200,
            },
        ];
    }, []);
    const args = useAsyncData(50, 5, getRowData, React.useCallback((rowData, col) => ({
        kind: GridCellKind.Text,
        data: rowData[col],
        allowOverlay: true,
        displayData: rowData[col],
    }), []), React.useCallback((cell, newVal, rowData) => {
        const [col] = cell;
        if (newVal.kind !== GridCellKind.Text)
            return undefined;
        const newRow = [...rowData];
        newRow[col] = newVal.data;
        return newRow;
    }, []), ref);
    return (_jsx(BeautifulWrapper, { title: "Server Side Data", description: _jsx(Description, { children: "Glide data grid is fully ready to handle your server side data needs. This example condenses the implementation into a single custom hook and loads in pages of 50. We are using 300ms sleeps, but network transactions should work the same." }), children: _jsx(DataEditor, { ref: ref, ...args, width: "100%", columns: columns, rows: 3000, rowMarkers: "both" }) }));
};
ServerSideData.parameters = {
    options: {
        showPanel: false,
    },
};
