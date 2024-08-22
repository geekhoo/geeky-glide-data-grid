import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { useLayer } from "react-laag";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Tooltips", className: "double", description: _jsxs(Description, { children: ["Using the ", _jsx(PropName, { children: "onItemHovered" }), " event makes it easy to create tooltips. This story is intentionally forced to scroll vertically so layout in scrolling documents can be confirmed."] }), children: _jsx(Story, {}) }) })),
    ],
};
const zeroBounds = {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
};
export const Tooltips = () => {
    const { cols, getCellContent } = useMockDataGenerator(6);
    const [tooltip, setTooltip] = React.useState();
    const timeoutRef = React.useRef(0);
    const onItemHovered = React.useCallback((args) => {
        if (args.kind === "cell") {
            window.clearTimeout(timeoutRef.current);
            setTooltip(undefined);
            timeoutRef.current = window.setTimeout(() => {
                setTooltip({
                    val: `Tooltip for ${args.location[0]}, ${args.location[1]}`,
                    bounds: {
                        // translate to react-laag types
                        left: args.bounds.x,
                        top: args.bounds.y,
                        width: args.bounds.width,
                        height: args.bounds.height,
                        right: args.bounds.x + args.bounds.width,
                        bottom: args.bounds.y + args.bounds.height,
                    },
                });
            }, 1000);
        }
        else {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = 0;
            setTooltip(undefined);
        }
    }, []);
    React.useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
    const isOpen = tooltip !== undefined;
    const { renderLayer, layerProps } = useLayer({
        isOpen,
        triggerOffset: 4,
        auto: true,
        container: "portal",
        trigger: {
            getBounds: () => tooltip?.bounds ?? zeroBounds,
        },
    });
    return (_jsxs(_Fragment, { children: [_jsx(DataEditor, { ...defaultProps, onItemHovered: onItemHovered, getCellContent: getCellContent, columns: cols, rowMarkers: "both", rows: 1000 }), isOpen &&
                renderLayer(_jsx("div", { ...layerProps, style: {
                        ...layerProps.style,
                        padding: "8px 12px",
                        color: "white",
                        font: "500 13px Inter",
                        backgroundColor: "rgba(0, 0, 0, 0.85)",
                        borderRadius: 9,
                    }, children: tooltip.val }))] }));
};
