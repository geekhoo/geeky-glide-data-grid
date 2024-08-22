import React from "react";
declare const _default: {
    title: string;
    decorators: ((Story: React.ComponentType) => import("react/jsx-runtime").JSX.Element)[];
};
export default _default;
interface InputBlendingGridProps {
    rangeBlending: "mixed" | "exclusive";
    columnBlending: "mixed" | "exclusive";
    rowBlending: "mixed" | "exclusive";
    rangeMultiSelect: "none" | "cell" | "rect" | "multi-cell" | "multi-rect";
    columnMultiSelect: "none" | "single" | "multi";
    rowMultiSelect: "none" | "single" | "multi";
}
export declare const InputBlending: React.FC<InputBlendingGridProps>;
