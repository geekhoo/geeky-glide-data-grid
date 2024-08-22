import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import {} from "../../data-editor/data-editor.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { GridCellKind } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
// A few supported mime types for drag and drop into cells.
const SUPPORTED_IMAGE_TYPES = new Set(["image/png", "image/gif", "image/bmp", "image/jpeg"]);
export const DropEvents = () => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useAllMockedKinds();
    const [highlights, setHighlights] = React.useState([]);
    const [lastDropCell, setLastDropCell] = React.useState();
    const onDrop = React.useCallback((cell, dataTransfer) => {
        setHighlights([]);
        if (dataTransfer === null) {
            return;
        }
        const { files } = dataTransfer;
        // This only supports one image, for simplicity.
        if (files.length !== 1) {
            return;
        }
        const [file] = files;
        if (!SUPPORTED_IMAGE_TYPES.has(file.type)) {
            return;
        }
        const imgUrl = URL.createObjectURL(file);
        setCellValue(cell, {
            kind: GridCellKind.Image,
            data: [imgUrl],
            allowOverlay: true,
            readonly: true,
        }, true, true);
        setLastDropCell(cell);
    }, [setCellValue]);
    const onDragOverCell = React.useCallback((cell, dataTransfer) => {
        if (dataTransfer === null) {
            return;
        }
        const { items } = dataTransfer;
        // This only supports one image, for simplicity.
        if (items.length !== 1) {
            return;
        }
        const [item] = items;
        if (!SUPPORTED_IMAGE_TYPES.has(item.type)) {
            return;
        }
        const [col, row] = cell;
        if (getCellContent(cell).kind === GridCellKind.Image) {
            setHighlights([
                {
                    color: "#44BB0022",
                    range: {
                        x: col,
                        y: row,
                        width: 1,
                        height: 1,
                    },
                },
            ]);
        }
        else {
            setHighlights([]);
        }
    }, [getCellContent]);
    const onDragLeave = React.useCallback(() => {
        setHighlights([]);
    }, []);
    return (_jsx(BeautifulWrapper, { title: "Drop events", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["You can drag and drop into cells by using ", _jsx(PropName, { children: "onDragOverCell" }), " and", " ", _jsx(PropName, { children: "onDrop" }), "."] }), _jsx("div", { children: lastDropCell === undefined ? (_jsx(MoreInfo, { children: "Nothing dropped, yet" })) : (_jsx(_Fragment, { children: _jsxs(MoreInfo, { children: ["You last dropped in cell ", _jsx(PropName, { children: JSON.stringify(lastDropCell) })] }) })) })] }), children: _jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, onCellEdited: setCellValue, onColumnResize: onColumnResize, rows: 1000, onDrop: onDrop, onDragOverCell: onDragOverCell, onDragLeave: onDragLeave, highlightRegions: highlights, rowMarkers: "none" }) }));
};
