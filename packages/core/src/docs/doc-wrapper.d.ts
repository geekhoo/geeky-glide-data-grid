import React from "react";
export interface WrapperProps {
    height: number;
}
export declare const Wrapper: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & WrapperProps>;
export declare const Highlight: React.VFC<{
    children: string;
}>;
export declare const Marked: React.VFC<{
    children: string;
}>;
export declare const PropName: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> & Record<never, unknown>>;
export declare const Description: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & Record<never, unknown>>;
export declare const MoreInfo: import("@linaria/react").StyledComponent<React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & Record<never, unknown>>;
export declare const DocWrapper: React.FC;
