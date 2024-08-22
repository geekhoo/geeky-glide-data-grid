import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { styled } from "@linaria/react";
import React from "react";
import { useLayer } from "react-laag";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, defaultProps, useAllMockedKinds, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Header menus", description: _jsx(_Fragment, { children: _jsxs(Description, { children: ["Headers on the data grid can be configured to support menus. We provide the events and the menu icon, you provide the menu. The menu icon can be modified via the", " ", _jsx(PropName, { children: "menuIcon" }), " prop."] }) }), children: _jsx(Story, {}) }) })),
    ],
};
const SimpleMenu = styled.div `
    width: 175px;
    padding: 8px 0;
    border-radius: 6px;
    box-shadow:
        0px 0px 1px rgba(62, 65, 86, 0.7),
        0px 6px 12px rgba(62, 65, 86, 0.35);

    display: flex;
    flex-direction: column;

    background-color: white;
    font-size: 13px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
        "Helvetica Neue", sans-serif;

    .danger {
        color: rgba(255, 40, 40, 0.8);
        :hover {
            color: rgba(255, 40, 40, 1);
        }
    }

    > div {
        padding: 6px 8px;
        color: rgba(0, 0, 0, 0.7);
        :hover {
            background-color: rgba(0, 0, 0, 0.05);
            color: rgba(0, 0, 0, 0.9);
        }
        transition: background-color 100ms;
        cursor: pointer;
    }
`;
export const HeaderMenus = () => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useAllMockedKinds();
    const realCols = React.useMemo(() => {
        return cols.map((c, index) => {
            if (index === 2) {
                return {
                    ...c,
                    hasMenu: true,
                    menuIcon: "dots",
                    overlayIcon: "rowOwnerOverlay",
                };
            }
            else if (index === 3) {
                return {
                    ...c,
                    hasMenu: true,
                    menuIcon: "headerUri",
                };
            }
            return {
                ...c,
                hasMenu: true,
            };
        });
    }, [cols]);
    const [menu, setMenu] = React.useState();
    const isOpen = menu !== undefined;
    const { layerProps, renderLayer } = useLayer({
        isOpen,
        auto: true,
        placement: "bottom-end",
        triggerOffset: 2,
        onOutsideClick: () => setMenu(undefined),
        trigger: {
            getBounds: () => ({
                left: menu?.bounds.x ?? 0,
                top: menu?.bounds.y ?? 0,
                width: menu?.bounds.width ?? 0,
                height: menu?.bounds.height ?? 0,
                right: (menu?.bounds.x ?? 0) + (menu?.bounds.width ?? 0),
                bottom: (menu?.bounds.y ?? 0) + (menu?.bounds.height ?? 0),
            }),
        },
    });
    const onHeaderMenuClick = React.useCallback((col, bounds) => {
        setMenu({ col, bounds });
    }, []);
    const onHeaderClicked = React.useCallback(() => {
        // eslint-disable-next-line no-console
        console.log("Header clicked");
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, onHeaderMenuClick: onHeaderMenuClick, onHeaderClicked: onHeaderClicked, columns: realCols, onCellContextMenu: (_, e) => e.preventDefault(), onCellEdited: setCellValue, onColumnResize: onColumnResize, rows: 1000 }), isOpen &&
                renderLayer(_jsxs(SimpleMenu, { ...layerProps, children: [_jsx("div", { onClick: () => setMenu(undefined), children: "These do nothing" }), _jsx("div", { onClick: () => setMenu(undefined), children: "Add column right" }), _jsx("div", { onClick: () => setMenu(undefined), children: "Add column left" }), _jsx("div", { className: "danger", onClick: () => setMenu(undefined), children: "Delete" })] }))] }));
};
