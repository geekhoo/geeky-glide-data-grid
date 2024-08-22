import React from "react";
import { type RowMarkerOptions } from "../../data-editor/data-editor.js";
declare const _default: {
    title: string;
    decorators: ((Story: React.ComponentType) => import("react/jsx-runtime").JSX.Element)[];
};
export default _default;
interface RowMarkersProps {
    markers: RowMarkerOptions["kind"];
}
export declare const RowMarkers: React.VFC<RowMarkersProps>;
