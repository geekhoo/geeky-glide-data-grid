import React from "react";
import { type RowMarkerOptions } from "../../data-editor/data-editor.js";
declare const _default: {
    title: string;
    decorators: ((Story: React.ComponentType) => import("react/jsx-runtime").JSX.Element)[];
};
export default _default;
interface RowSelectionsProps {
    rowSelect: "none" | "single" | "multi";
    rowSelectionMode: "auto" | "multi";
    rowMarkersKind: RowMarkerOptions["kind"];
    rowMarkersCheckboxStyle: RowMarkerOptions["checkboxStyle"];
}
export declare const RowSelections: React.FC<RowSelectionsProps>;
