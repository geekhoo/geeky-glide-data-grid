import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { ImageOverlayEditorStyle } from "./image-overlay-editor-style.js";
import { Carousel } from "react-responsive-carousel";
import { EditPencil } from "../../../common/utils.js";
/** @category Renderers */
export const ImageOverlayEditor = p => {
    const { urls, canWrite, onEditClick, renderImage } = p;
    const filtered = urls.filter(u => u !== "");
    if (filtered.length === 0) {
        return null;
    }
    const allowMove = filtered.length > 1;
    return (_jsxs(ImageOverlayEditorStyle, { "data-testid": "GDG-default-image-overlay-editor", children: [_jsx(Carousel, { showArrows: allowMove, showThumbs: false, swipeable: allowMove, emulateTouch: allowMove, infiniteLoop: allowMove, children: filtered.map(url => {
                    const innerContent = renderImage?.(url) ?? _jsx("img", { draggable: false, src: url });
                    return (_jsx("div", { className: "gdg-centering-container", children: innerContent }, url));
                }) }), canWrite && onEditClick && (_jsx("button", { className: "gdg-edit-icon", onClick: onEditClick, children: _jsx(EditPencil, {}) }))] }));
};
