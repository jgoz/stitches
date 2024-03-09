import * as Stitches from '@implydata/stitches-core';
export declare const config: {
    prefix: "";
    media: {};
    theme: {
        colors: {
            primary: string;
        };
    };
    themeMap: import("@implydata/stitches-core/types/config").DefaultThemeMap;
    utils: {
        bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
            color: import("@implydata/stitches-core/types/css-util").WithPropertyValue<"backgroundColor">;
        };
        c: (value: Stitches.ScaleValue<'colors'>) => {
            color: import("@implydata/stitches-core/types/css-util").WithScaleValue<"colors">;
        };
    };
}, css: import("@implydata/stitches-core/types/stitches").CssFunctionType<{}, {
    colors: {
        primary: string;
    };
}, import("@implydata/stitches-core/types/config").DefaultThemeMap, {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: import("@implydata/stitches-core/types/css-util").WithPropertyValue<"backgroundColor">;
    };
    c: (value: Stitches.ScaleValue<'colors'>) => {
        color: import("@implydata/stitches-core/types/css-util").WithScaleValue<"colors">;
    };
}>;
export declare const colorValue1: Stitches.PropertyValue<'backgroundColor', typeof config>;
export declare const colorValue2: Stitches.PropertyValue<'backgroundColor', typeof config>;
export declare const colorToken: Stitches.ScaleValue<'colors', typeof config>;
export declare const box: import("@implydata/stitches-core/types/styled-component").CssComponent<never, {}, {}, import("@implydata/stitches-core/types/css-util").CSS<{}, {
    colors: {
        primary: string;
    };
}, import("@implydata/stitches-core/types/config").DefaultThemeMap, {
    bg: (value: Stitches.PropertyValue<'backgroundColor'>) => {
        color: import("@implydata/stitches-core/types/css-util").WithPropertyValue<"backgroundColor">;
    };
    c: (value: Stitches.ScaleValue<'colors'>) => {
        color: import("@implydata/stitches-core/types/css-util").WithScaleValue<"colors">;
    };
}>>;
