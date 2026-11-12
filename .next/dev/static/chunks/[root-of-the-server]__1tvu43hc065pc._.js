(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/index\" }", (function(__turbopack_context__){
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
"[project]/components/About/About1.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const About1 = ({ clientHeight })=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const quoteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "About1.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "About1.useLayoutEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: "none",
                            duration: 0.1
                        }
                    }).fromTo(quoteRef.current.querySelector(".about-1"), {
                        opacity: 0.2
                    }, {
                        opacity: 1
                    }).to(quoteRef.current.querySelector(".about-1"), {
                        opacity: 0.2,
                        delay: 0.5
                    }).fromTo(quoteRef.current.querySelector(".about-2"), {
                        opacity: 0.2
                    }, {
                        opacity: 1
                    }, "<").to(quoteRef.current.querySelector(".about-2"), {
                        opacity: 0.2,
                        delay: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: sectionRef.current,
                        start: "center 80%",
                        end: "center top",
                        scrub: 0,
                        animation: tl
                    });
                }
            }["About1.useLayoutEffect.ctx"]);
            return ({
                "About1.useLayoutEffect": ()=>ctx.revert()
            })["About1.useLayoutEffect"];
        }
    }["About1.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        "aria-label": "About",
        className: "w-full relative select-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"} section-container`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: quoteRef,
                className: "font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "about-1 leading-tight",
                        children: [
                            "I'm a passionate Engineer who's focused on building scalable and performant apps.",
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/About/About1.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "about-2 leading-tight",
                        children: [
                            "I take responsibility to craft a good user experience using modern frontend architecture.",
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/About/About1.js",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/About/About1.js",
                lineNumber: 54,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/About/About1.js",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/About/About1.js",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About1, "UVCEIW5APLRAB9Syei3+dbDDtas=");
_c = About1;
const __TURBOPACK__default__export__ = About1;
var _c;
__turbopack_context__.k.register(_c, "About1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/About/About2.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const About2 = ({ clientHeight })=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const quoteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "About2.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "About2.useLayoutEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: "none",
                            duration: 0.1
                        }
                    }).from(quoteRef.current, {
                        opacity: 0,
                        duration: 2
                    }).to(quoteRef.current.querySelector(".about-3"), {
                        backgroundPositionX: "100%",
                        duration: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: sectionRef.current,
                        start: "center bottom",
                        end: "center center",
                        scrub: 0,
                        animation: tl
                    });
                }
            }["About2.useLayoutEffect.ctx"]);
            return ({
                "About2.useLayoutEffect": ()=>ctx.revert()
            })["About2.useLayoutEffect"];
        }
    }["About2.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        "aria-label": "Philosophy",
        className: "w-full relative select-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${clientHeight > 650 ? "py-80" : "py-72"} section-container`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                ref: quoteRef,
                className: "font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center",
                children: [
                    "I have a",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "about-3 font-bold",
                        style: {
                            background: "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
                            backgroundSize: "200% 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        },
                        children: "strong"
                    }, void 0, false, {
                        fileName: "[project]/components/About/About2.js",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    "obsession for attention to detail."
                ]
            }, void 0, true, {
                fileName: "[project]/components/About/About2.js",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/About/About2.js",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/About/About2.js",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About2, "UVCEIW5APLRAB9Syei3+dbDDtas=");
_c = About2;
const __TURBOPACK__default__export__ = About2;
var _c;
__turbopack_context__.k.register(_c, "About2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Button/Button.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2f$Button$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Button/Button.module.scss [client] (css module)");
;
;
const Button = ({ href, onClick, children, classes, type, ...otherProps })=>{
    let additionalClasses = "";
    if (classes) {
        additionalClasses = classes;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        onClick: onClick,
        className: `
        ${type === "primary" ? !otherProps.disable ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2f$Button$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].primary__button : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2f$Button$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].primary__disabledButton : !otherProps.disable ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2f$Button$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].secondary__button : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2f$Button$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].secondary__disabledButton}
          ${additionalClasses}
      `,
        ...otherProps,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Button/Button.js",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Collaboration/Collaboration.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Collaboration = ({ clientHeight })=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const quoteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Collaboration.useEffect": ()=>{
            const smallScreen = document.body.clientWidth < 767;
            const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: "none"
                }
            });
            timeline.from(quoteRef.current, {
                opacity: 0,
                duration: 2
            }).to(quoteRef.current.querySelector(".text-strong"), {
                backgroundPositionX: "100%",
                duration: 1
            });
            const slidingTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: "none"
                }
            });
            slidingTl.to(sectionRef.current.querySelector(".ui-left"), {
                xPercent: smallScreen ? -500 : -150
            }).from(sectionRef.current.querySelector(".ui-right"), {
                xPercent: smallScreen ? -500 : -150
            }, "<");
            const st1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: sectionRef.current,
                start: "center bottom",
                end: "center center",
                scrub: 1,
                animation: timeline
            });
            const st2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                animation: slidingTl
            });
            return ({
                "Collaboration.useEffect": ()=>{
                    timeline.kill();
                    slidingTl.kill();
                    st1.kill();
                    st2.kill();
                }
            })["Collaboration.useEffect"];
        }
    }["Collaboration.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        "aria-label": "Collaboration",
        className: "w-full relative select-none my-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${clientHeight > 650 ? "py-36" : "py-48"} section-container flex flex-col`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-left transform-gpu",
                    children: [
                        Array(5).fill(" Software Engineering Problem Solving Software Architecture ").reduce((str, el)=>str.concat(el), ""),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Collaboration/Collaboration.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    ref: quoteRef,
                    className: "mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center",
                    children: [
                        "Interested in",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-strong font-semibold",
                            style: {
                                background: "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
                                backgroundSize: "200% 100%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            },
                            children: "Collaboration"
                        }, void 0, false, {
                            fileName: "[project]/components/Collaboration/Collaboration.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "?"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Collaboration/Collaboration.js",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 md:mt-8 opacity-40 text-6xl sm:text-7xl font-semibold whitespace-nowrap ui-right transform-gpu",
                    children: [
                        Array(5).fill(" Agile Development Frontend Development React Native Development ").reduce((str, el)=>str.concat(el), ""),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Collaboration/Collaboration.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Collaboration/Collaboration.js",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Collaboration/Collaboration.js",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Collaboration, "hkE2u+vFtRkeoPO6KpIIMiy8BIQ=");
_c = Collaboration;
const __TURBOPACK__default__export__ = Collaboration;
var _c;
__turbopack_context__.k.register(_c, "Collaboration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contact/Contact.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/use-sfx.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2f$Reveal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal/Reveal.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2f$Contact$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Contact/Contact.module.scss [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
let filter = null;
const loadFilter = ()=>__turbopack_context__.A("[project]/node_modules/bad-words/lib/badwords.js [client] (ecmascript, async loader)").then(({ default: Filter })=>{
        if (!filter) {
            filter = new Filter();
            filter.removeWords("hell", "god", "shit");
        }
    });
const clean = (text)=>filter && /\w/.test(text) ? filter.clean(text) : text;
const toastOptions = {
    style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontFamily: "sans-serif"
    }
};
const empty = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error("Please fill the required fields", {
        id: "error"
    });
const error = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].error("Error sending your message", {
        id: "error"
    });
const success = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].success("Message sent successfully", {
        id: "success"
    });
const Contact = ()=>{
    _s();
    const initialState = {
        name: "",
        email: "",
        message: ""
    };
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const [mailerResponse, setMailerResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("not initiated");
    const buttonElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSfx"])();
    const handleChange = ({ target })=>{
        const { id, value } = target;
        setFormData((prevVal)=>{
            if (value.trim() !== prevVal[id] && value.trim().length > prevVal[id].trim().length) {
                return {
                    ...prevVal,
                    [id]: clean(value.trim())
                };
            } else {
                return {
                    ...prevVal,
                    [id]: value
                };
            }
        });
    };
    const emptyForm = ()=>{
        setFormData(initialState);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const { name, email, message } = {
            name: formData.name,
            email: formData.email,
            message: formData.message
        };
        if (name === "" || email === "" || message === "") {
            empty();
            return;
        }
        sfx.play("charge-up", {
            rate: 2
        });
        Promise.all([
            loadFilter().catch(()=>{}),
            __turbopack_context__.A("[project]/components/Contact/mailer.js [client] (ecmascript, async loader)")
        ]).then(([, { default: mail }])=>mail({
                name: clean(name),
                email: clean(email),
                message: clean(message)
            })).then((res)=>{
            if (res.status === 200) {
                setMailerResponse("success");
                emptyForm();
            } else {
                setMailerResponse("error");
            }
        }).catch((err)=>{
            setMailerResponse("error");
            console.error(err);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            loadFilter();
        }
    }["Contact.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            if (mailerResponse === "not initiated") return;
            if (mailerResponse === "success") {
                success();
            } else if (mailerResponse === "error") {
                error();
            }
            const timer = setTimeout({
                "Contact.useEffect.timer": ()=>{
                    setMailerResponse("not initiated");
                }
            }["Contact.useEffect.timer"], 10000);
            return ({
                "Contact.useEffect": ()=>clearTimeout(timer)
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], [
        mailerResponse
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            const buttonEl = buttonElementRef.current;
            const handleButtonClick = {
                "Contact.useEffect.handleButtonClick": (e)=>{
                    if (!buttonElementRef.current.classList.contains("active")) {
                        buttonElementRef.current.classList.add("active");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(buttonElementRef.current, {
                            keyframes: [
                                {
                                    "--left-wing-first-x": 50,
                                    "--left-wing-first-y": 100,
                                    "--right-wing-second-x": 50,
                                    "--right-wing-second-y": 100,
                                    duration: 0.2,
                                    onComplete () {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(buttonElementRef.current, {
                                            "--left-wing-first-y": 0,
                                            "--left-wing-second-x": 40,
                                            "--left-wing-second-y": 100,
                                            "--left-wing-third-x": 0,
                                            "--left-wing-third-y": 100,
                                            "--left-body-third-x": 40,
                                            "--right-wing-first-x": 50,
                                            "--right-wing-first-y": 0,
                                            "--right-wing-second-x": 60,
                                            "--right-wing-second-y": 100,
                                            "--right-wing-third-x": 100,
                                            "--right-wing-third-y": 100,
                                            "--right-body-third-x": 60
                                        });
                                    }
                                },
                                {
                                    "--left-wing-third-x": 20,
                                    "--left-wing-third-y": 90,
                                    "--left-wing-second-y": 90,
                                    "--left-body-third-y": 90,
                                    "--right-wing-third-x": 80,
                                    "--right-wing-third-y": 90,
                                    "--right-body-third-y": 90,
                                    "--right-wing-second-y": 90,
                                    duration: 0.2
                                },
                                {
                                    "--rotate": 50,
                                    "--left-wing-third-y": 95,
                                    "--left-wing-third-x": 27,
                                    "--right-body-third-x": 45,
                                    "--right-wing-second-x": 45,
                                    "--right-wing-third-x": 60,
                                    "--right-wing-third-y": 83,
                                    duration: 0.25
                                },
                                {
                                    "--rotate": 60,
                                    "--plane-x": -8,
                                    "--plane-y": 40,
                                    duration: 0.2
                                },
                                {
                                    "--rotate": 40,
                                    "--plane-x": 45,
                                    "--plane-y": -300,
                                    "--plane-opacity": 0,
                                    duration: 0.375,
                                    onComplete () {
                                        setTimeout({
                                            "Contact.useEffect.handleButtonClick": ()=>{
                                                buttonElementRef.current.removeAttribute("style");
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(buttonElementRef.current, {
                                                    opacity: 0,
                                                    y: -8
                                                }, {
                                                    opacity: 1,
                                                    y: 0,
                                                    clearProps: true,
                                                    duration: 0.3,
                                                    onComplete () {
                                                        buttonElementRef.current.classList.remove("active");
                                                    }
                                                });
                                            }
                                        }["Contact.useEffect.handleButtonClick"], 1800);
                                    }
                                }
                            ]
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(buttonElementRef.current, {
                            keyframes: [
                                {
                                    "--text-opacity": 0,
                                    "--border-radius": 0,
                                    "--left-wing-background": "#9f55ff",
                                    "--right-wing-background": "#9f55ff",
                                    duration: 0.11
                                },
                                {
                                    "--left-wing-background": "#8b31ff",
                                    "--right-wing-background": "#8b31ff",
                                    duration: 0.14
                                },
                                {
                                    "--left-body-background": "#9f55ff",
                                    "--right-body-background": "#9f55ff",
                                    duration: 0.25,
                                    delay: 0.1
                                },
                                {
                                    "--trails-stroke": 171,
                                    duration: 0.22,
                                    delay: 0.22
                                },
                                {
                                    "--success-opacity": 1,
                                    "--success-x": 0,
                                    duration: 0.2,
                                    delay: 0.15
                                },
                                {
                                    "--success-stroke": 0,
                                    duration: 0.15
                                }
                            ]
                        });
                    }
                }
            }["Contact.useEffect.handleButtonClick"];
            buttonEl.addEventListener("click", handleButtonClick);
            return ({
                "Contact.useEffect": ()=>buttonEl.removeEventListener("click", handleButtonClick)
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: "none"
                }
            });
            tl.from(sectionRef.current.querySelectorAll(".staggered-reveal"), {
                opacity: 0,
                duration: 0.5,
                stagger: 0.5
            }, "<");
            const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: sectionRef.current.querySelector(".contact-wrapper"),
                start: "100px bottom",
                end: "center center",
                scrub: 0,
                animation: tl
            });
            return ({
                "Contact.useEffect": ()=>{
                    tl.kill();
                    st.kill();
                }
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MENULINKS"][4].ref,
        "aria-label": "Contact",
        className: "jsx-794ad1596ac19eac" + " " + "mt-30 w-full relative select-none bg-black pt-20 sm:pt-10 md:pt-5 lg:pt-1 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-794ad1596ac19eac",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Toaster"], {
                    toastOptions: toastOptions
                }, void 0, false, {
                    fileName: "[project]/components/Contact/Contact.js",
                    lineNumber: 293,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Contact/Contact.js",
                lineNumber: 292,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-794ad1596ac19eac" + " " + "section-container flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-794ad1596ac19eac" + " " + "flex flex-col contact-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-794ad1596ac19eac" + " " + "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-794ad1596ac19eac" + " " + "uppercase tracking-widest text-gray-light-1 staggered-reveal",
                                        children: "CONTACT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact/Contact.js",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-794ad1596ac19eac" + " " + "text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact/Contact.js",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 297,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-794ad1596ac19eac" + " " + "text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal",
                                children: [
                                    "Get In Touch.",
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 305,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact/Contact.js",
                        lineNumber: 296,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "jsx-794ad1596ac19eac" + " " + "pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem] staggered-reveal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2f$Reveal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-794ad1596ac19eac" + " " + "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "name",
                                            value: formData.name,
                                            onChange: handleChange,
                                            required: true,
                                            className: "jsx-794ad1596ac19eac" + " " + "block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "name",
                                            className: "jsx-794ad1596ac19eac" + " " + "absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact/Contact.js",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 311,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2f$Reveal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-794ad1596ac19eac" + " " + "relative mt-14",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            id: "email",
                                            value: formData.email,
                                            onChange: handleChange,
                                            required: true,
                                            className: "jsx-794ad1596ac19eac" + " " + "block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "email",
                                            className: "jsx-794ad1596ac19eac" + " " + "absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact/Contact.js",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 330,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2f$Reveal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-794ad1596ac19eac" + " " + "relative mt-14",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "message",
                                            value: formData.message,
                                            onChange: handleChange,
                                            required: true,
                                            className: "jsx-794ad1596ac19eac" + " " + "block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-purple bg-transparent rounded-[0.6rem] transition-all duration-200"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 351,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "message",
                                            className: "jsx-794ad1596ac19eac" + " " + "absolute top-0 left-0 h-14 flex items-center pl-4 text-lg font-mono transform transition-all",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact/Contact.js",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 349,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact/Contact.js",
                        lineNumber: 310,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-794ad1596ac19eac" + " " + "mt-9 mx-auto link",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: buttonElementRef,
                            disabled: formData.name === "" || formData.email === "" || formData.message === "" ? true : false,
                            onClick: handleSubmit,
                            className: "jsx-794ad1596ac19eac" + " " + (__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2f$Contact$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].button || ""),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-794ad1596ac19eac",
                                    children: "Send ->"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact/Contact.js",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-794ad1596ac19eac" + " " + (__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2f$Contact$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].success || ""),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 16 16",
                                            className: "jsx-794ad1596ac19eac",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "3.75 9 7 12 13 5",
                                                className: "jsx-794ad1596ac19eac"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Contact/Contact.js",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Sent"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact/Contact.js",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 33 64",
                                    className: "jsx-794ad1596ac19eac" + " " + (__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2f$Contact$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].trails || ""),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60",
                                            className: "jsx-794ad1596ac19eac"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60",
                                            className: "jsx-794ad1596ac19eac"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact/Contact.js",
                                    lineNumber: 387,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-794ad1596ac19eac" + " " + (__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2f$Contact$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].plane || ""),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-794ad1596ac19eac" + " " + (__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2f$Contact$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].left || "")
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 392,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-794ad1596ac19eac" + " " + (__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2f$Contact$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].right || "")
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact/Contact.js",
                                            lineNumber: 393,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact/Contact.js",
                                    lineNumber: 391,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact/Contact.js",
                            lineNumber: 368,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Contact/Contact.js",
                        lineNumber: 367,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-794ad1596ac19eac" + " " + "mt-16 pt-8 border-t border-[#ffffff15] flex flex-col md:flex-row items-center justify-around gap-6 text-center staggered-reveal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-794ad1596ac19eac" + " " + "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-794ad1596ac19eac" + " " + "text-gray-light-2 text-xs uppercase tracking-wider font-mono",
                                        children: "Primary Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact/Contact.js",
                                        lineNumber: 400,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CONTACT_DETAILS"].email}`,
                                        className: "jsx-794ad1596ac19eac" + " " + "text-white hover:text-purple text-base sm:text-lg font-mono transition-colors mt-1 link",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CONTACT_DETAILS"].email
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact/Contact.js",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 399,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-794ad1596ac19eac" + " " + "hidden md:block w-px h-8 bg-[#ffffff20]"
                            }, void 0, false, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 410,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-794ad1596ac19eac" + " " + "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-794ad1596ac19eac" + " " + "text-gray-light-2 text-xs uppercase tracking-wider font-mono",
                                        children: "Alternative Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact/Contact.js",
                                        lineNumber: 412,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CONTACT_DETAILS"].alternativeEmail}`,
                                        className: "jsx-794ad1596ac19eac" + " " + "text-white hover:text-purple text-base sm:text-lg font-mono transition-colors mt-1 link",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CONTACT_DETAILS"].alternativeEmail
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact/Contact.js",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 411,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-794ad1596ac19eac" + " " + "hidden md:block w-px h-8 bg-[#ffffff20]"
                            }, void 0, false, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 422,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-794ad1596ac19eac" + " " + "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-794ad1596ac19eac" + " " + "text-gray-light-2 text-xs uppercase tracking-wider font-mono",
                                        children: "Location / Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact/Contact.js",
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-794ad1596ac19eac" + " " + "text-white text-base sm:text-lg font-mono mt-1",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["CONTACT_DETAILS"].location
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact/Contact.js",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact/Contact.js",
                                lineNumber: 423,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact/Contact.js",
                        lineNumber: 398,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Contact/Contact.js",
                lineNumber: 295,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "794ad1596ac19eac",
                children: "input,label,textarea{cursor:none}input:hover,textarea:hover{box-shadow:0 0 .3rem #7000ff}input:active,input:focus,textarea:active,textarea:focus{box-shadow:0 0 .3rem #000}input:focus+label,input:valid+label{height:50%;padding-left:0;transform:translateY(-100%)}textarea:focus+label,textarea:valid+label{height:17%;padding-left:0;transform:translateY(-100%)}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Contact/Contact.js",
        lineNumber: 286,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Contact, "AKPE+mUfDRsCESR59z0Pf5pPGwU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSfx"]
    ];
});
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Cursor/Cursor.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
const Cursor = ({ isDesktop })=>{
    _s();
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const follower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cursor.useEffect": ()=>{
            if (isDesktop && document.body.clientWidth > 767) {
                follower.current.classList.remove("hidden");
                cursor.current.classList.remove("hidden");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                    cursor.current,
                    follower.current
                ], {
                    xPercent: -50,
                    yPercent: -50
                });
                const moveCircle = {
                    "Cursor.useEffect.moveCircle": (e)=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor.current, {
                            x: e.clientX,
                            y: e.clientY,
                            duration: 0.1,
                            ease: "none"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(follower.current, {
                            x: e.clientX,
                            y: e.clientY,
                            duration: 0.3,
                            ease: "none"
                        });
                    }
                }["Cursor.useEffect.moveCircle"];
                const hover = {
                    "Cursor.useEffect.hover": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor.current, {
                            scale: 0.5,
                            duration: 0.3
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(follower.current, {
                            scale: 3,
                            duration: 0.3
                        });
                    }
                }["Cursor.useEffect.hover"];
                const unHover = {
                    "Cursor.useEffect.unHover": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(cursor.current, {
                            scale: 1,
                            duration: 0.3
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(follower.current, {
                            scale: 1,
                            duration: 0.3
                        });
                    }
                }["Cursor.useEffect.unHover"];
                document.addEventListener("mousemove", moveCircle);
                document.querySelectorAll(".link").forEach({
                    "Cursor.useEffect": (el)=>{
                        el.addEventListener("mouseenter", hover);
                        el.addEventListener("mouseleave", unHover);
                    }
                }["Cursor.useEffect"]);
                return ({
                    "Cursor.useEffect": ()=>{
                        document.removeEventListener("mousemove", moveCircle);
                        document.querySelectorAll(".link").forEach({
                            "Cursor.useEffect": (el)=>{
                                el.removeEventListener("mouseenter", hover);
                                el.removeEventListener("mouseleave", unHover);
                            }
                        }["Cursor.useEffect"]);
                    }
                })["Cursor.useEffect"];
            }
        }
    }["Cursor.useEffect"], [
        cursor,
        follower,
        isDesktop
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursor,
                className: "bg-white rounded-full mix-blend-difference fixed top-0 left-0 w-4 h-4 select-none pointer-events-none z-50 hidden"
            }, void 0, false, {
                fileName: "[project]/components/Cursor/Cursor.js",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: follower,
                className: "bg-white/[0.02] border border-white/[0.2] rounded-full fixed top-0 left-0 w-10 h-10 select-none pointer-events-none z-50 hidden"
            }, void 0, false, {
                fileName: "[project]/components/Cursor/Cursor.js",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Cursor/Cursor.js",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Cursor, "i4u/gfTkp5uByNTOtQ2BMvkUU0Y=");
_c = Cursor;
const __TURBOPACK__default__export__ = Cursor;
var _c;
__turbopack_context__.k.register(_c, "Cursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer/Footer.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
/* eslint-disable @next/next/no-img-element */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/use-sfx.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button/Button.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2f$Reveal$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal/Reveal.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$FooterBg$2f$FooterBg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer/FooterBg/FooterBg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profiles$2f$Profiles$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Profiles/Profiles.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$tailwind$2e$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/tailwind.config.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const Footer = ()=>{
    _s();
    const [playbackRate, setPlaybackRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0.75);
    const sfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSfx"])();
    const handleClick = ()=>{
        const newRate = playbackRate + 0.1;
        sfx.play("heart", {
            rate: newRate
        });
        setPlaybackRate(newRate);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full relative select-none bg-cover",
        style: {
            backgroundImage: `linear-gradient(to right, ${__TURBOPACK__imported__module__$5b$project$5d2f$tailwind$2e$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["theme"].colors.indigo.light}, ${__TURBOPACK__imported__module__$5b$project$5d2f$tailwind$2e$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__["theme"].colors.indigo.dark})`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$FooterBg$2f$FooterBg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Footer/Footer.js",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2f$Reveal$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full pt-32",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-container flex flex-col h-full justify-end z-10 items-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-medium text-3xl md:text-4xl text-center",
                                children: "Feel free to connect on social media."
                            }, void 0, false, {
                                fileName: "[project]/components/Footer/Footer.js",
                                lineNumber: 32,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profiles$2f$Profiles$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/components/Footer/Footer.js",
                                    lineNumber: 36,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer/Footer.js",
                                lineNumber: 35,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `#${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MENULINKS"][4].ref}`,
                                    classes: "link",
                                    type: "secondary",
                                    children: "Let's Talk"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer/Footer.js",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer/Footer.js",
                                lineNumber: 38,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-white text-sm sm:text-base font-medium tracking-wide mt-8",
                                children: [
                                    "Developed with",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleClick,
                                        className: "link cursor-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block animate-bounce",
                                            children: "❤️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer/Footer.js",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer/Footer.js",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    "by ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "Build Verse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer/Footer.js",
                                        lineNumber: 52,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer/Footer.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer/Footer.js",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Footer/Footer.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Footer/Footer.js",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/footer-curve.svg",
                className: "w-full rotate-180",
                alt: "footer curve",
                loading: "eager",
                height: 180
            }, void 0, false, {
                fileName: "[project]/components/Footer/Footer.js",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer/Footer.js",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Footer, "7VCrnHSGEvNkt5rpC5EJTbrlnNs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSfx"]
    ];
});
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer/FooterBg/FooterBg.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Meteors$2f$Meteors$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer/Meteors/Meteors.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$FooterBg$2f$FooterBg$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Footer/FooterBg/FooterBg.module.scss [client] (css module)");
;
;
;
const FooterBg = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$FooterBg$2f$FooterBg$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].top,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Meteors$2f$Meteors$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Footer/FooterBg/FooterBg.js",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$FooterBg$2f$FooterBg$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].background,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$FooterBg$2f$FooterBg$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].background__one
                    }, void 0, false, {
                        fileName: "[project]/components/Footer/FooterBg/FooterBg.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$FooterBg$2f$FooterBg$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].background__two
                    }, void 0, false, {
                        fileName: "[project]/components/Footer/FooterBg/FooterBg.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer/FooterBg/FooterBg.js",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer/FooterBg/FooterBg.js",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FooterBg;
const __TURBOPACK__default__export__ = FooterBg;
var _c;
__turbopack_context__.k.register(_c, "FooterBg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer/Meteors/Meteors.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cn.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Meteors = ({ number = 10 })=>{
    _s();
    const [meteorStyles, setMeteorStyles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Meteors.useEffect": ()=>{
            const styles = [
                ...new Array(number)
            ].map({
                "Meteors.useEffect.styles": ()=>({
                        top: -5,
                        left: Math.floor(Math.random() * window.innerWidth) + "px",
                        animationDelay: Math.random() * 1 + 0.2 + "s",
                        animationDuration: Math.floor(Math.random() * 9 + 2) + "s"
                    })
            }["Meteors.useEffect.styles"]);
            setMeteorStyles(styles);
        }
    }["Meteors.useEffect"], [
        number
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            ...meteorStyles
        ].map((style, idx)=>// Meteor Head
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10]"),
                style: style,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent"
                }, void 0, false, {
                    fileName: "[project]/components/Footer/Meteors/Meteors.js",
                    lineNumber: 30,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, idx, false, {
                fileName: "[project]/components/Footer/Meteors/Meteors.js",
                lineNumber: 22,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/Footer/Meteors/Meteors.js",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Meteors, "LgJ77fXlqleGhiFbXJwv5JjzZB0=");
_c = Meteors;
const __TURBOPACK__default__export__ = Meteors;
var _c;
__turbopack_context__.k.register(_c, "Meteors");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header/Header.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/use-sfx.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$SoundBar$2f$SoundBar$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header/SoundBar/SoundBar.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Header = ({ children })=>{
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSfx"])();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[handleClick]": (e)=>{
            sfx.play(e.target.checked ? "pop" : "pop-down");
        }
    }["Header.useCallback[handleClick]"], [
        sfx
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[handleKeyDown]": (e)=>{
            if (e.key === "Escape" && inputRef.current?.checked) {
                inputRef.current.checked = false;
            }
        }
    }["Header.useCallback[handleKeyDown]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "Header.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], [
        handleKeyDown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "w-full fixed top-0 py-8 z-50 select-none bg-gradient-to-b from-black shadow-black transition-all duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between section-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#home",
                    className: "link",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: "/logo.svg",
                        alt: "Logo - Build Verse",
                        width: 25,
                        height: 25
                    }, void 0, false, {
                        fileName: "[project]/components/Header/Header.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Header/Header.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "outer-menu relative flex items-center gap-8 z-[1]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$SoundBar$2f$SoundBar$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/Header/Header.js",
                            lineNumber: 43,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            "aria-labelledby": "menu",
                            "aria-label": "menu",
                            className: "checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0",
                            type: "checkbox",
                            onClick: handleClick
                        }, void 0, false, {
                            fileName: "[project]/components/Header/Header.js",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hamburger w-6 h-6 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-none w-full bg-white duration-300 flex items-center justify-center"
                            }, void 0, false, {
                                fileName: "[project]/components/Header/Header.js",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/Header/Header.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header/Header.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header/Header.js",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Header/Header.js",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "ncQVnN2ID2PGf8VAtRhi72/MwWE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSfx"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header/Menu/Menu.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Menu = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Menu.useEffect": ()=>{
            const anchorNodes = document.querySelectorAll('a[href^="#"]');
            const handleClick = {
                "Menu.useEffect.handleClick": ()=>{
                    const checkbox = document.querySelector(".checkbox-toggle");
                    if (checkbox) checkbox.checked = false;
                }
            }["Menu.useEffect.handleClick"];
            anchorNodes.forEach({
                "Menu.useEffect": (el)=>{
                    el.addEventListener("click", handleClick);
                }
            }["Menu.useEffect"]);
            return ({
                "Menu.useEffect": ()=>{
                    anchorNodes.forEach({
                        "Menu.useEffect": (el)=>{
                            el.removeEventListener("click", handleClick);
                        }
                    }["Menu.useEffect"]);
                }
            })["Menu.useEffect"];
        }
    }["Menu.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-none overflow-hidden flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center opacity-0 overflow-y-auto overflow-x-hidden flex flex-none justify-center items-center max-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-none py-4 px-0 m-0 block max-h-screen",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MENULINKS"].map((el)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "p-0 m-6 text-2xl block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline",
                                href: `#${el.ref}`,
                                children: el.name
                            }, void 0, false, {
                                fileName: "[project]/components/Header/Menu/Menu.js",
                                lineNumber: 31,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, el.name, false, {
                            fileName: "[project]/components/Header/Menu/Menu.js",
                            lineNumber: 30,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/Header/Menu/Menu.js",
                    lineNumber: 28,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Header/Menu/Menu.js",
                lineNumber: 27,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Header/Menu/Menu.js",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Header/Menu/Menu.js",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Menu, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Menu;
const __TURBOPACK__default__export__ = Menu;
var _c;
__turbopack_context__.k.register(_c, "Menu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header/SoundBar/SoundBar.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cn.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const SoundBar = ()=>{
    _s();
    const soundBarEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const togglePlayPause = ()=>{
        if (!isPlaying) soundBarEl.current.play();
        else soundBarEl.current.pause();
        setIsPlaying((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cn"])("soundBars link top-1 right-14 flex items-center justify-center", isPlaying && "play"),
        onClick: togglePlayPause,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/components/Header/SoundBar/SoundBar.js",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/components/Header/SoundBar/SoundBar.js",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/components/Header/SoundBar/SoundBar.js",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/components/Header/SoundBar/SoundBar.js",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: soundBarEl,
                src: "/sounds/song.mp3",
                loop: true,
                preload: "none"
            }, void 0, false, {
                fileName: "[project]/components/Header/SoundBar/SoundBar.js",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header/SoundBar/SoundBar.js",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SoundBar, "xx6elzS6CkXeMeD/E+QvQEQl1dM=");
_c = SoundBar;
const __TURBOPACK__default__export__ = SoundBar;
var _c;
__turbopack_context__.k.register(_c, "SoundBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero/Hero.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typed.js/dist/typed.module.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Button/Button.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profiles$2f$Profiles$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Profiles/Profiles.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2f$Hero$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Hero/Hero.module.scss [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const options = {
    strings: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["TYPED_STRINGS"],
    typeSpeed: 50,
    startDelay: 600,
    backSpeed: 50,
    backDelay: 8000,
    loop: true
};
const Hero = ({ fadeIn })=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typedElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lottieRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Hero.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useLayoutEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: "none"
                        }
                    }).to(sectionRef.current, {
                        opacity: 1,
                        duration: 1
                    }).fromTo(sectionRef.current.querySelectorAll(".staggered-reveal"), {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.2
                    }, "<");
                }
            }["Hero.useLayoutEffect.ctx"]);
            return ({
                "Hero.useLayoutEffect": ()=>ctx.revert()
            })["Hero.useLayoutEffect"];
        }
    }["Hero.useLayoutEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const typed = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typed$2e$js$2f$dist$2f$typed$2e$module$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"](typedElementRef.current, options);
            return ({
                "Hero.useEffect": ()=>typed.destroy()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        typedElementRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            let animation;
            let cancelled = false;
            const mql = window.matchMedia("(min-width: 1024px)");
            const load = {
                "Hero.useEffect.load": ()=>{
                    mql.removeEventListener("change", load);
                    Promise.all([
                        __turbopack_context__.A("[project]/node_modules/lottie-web/build/player/lottie_light.js [client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/public/lottie/lottie.json.[json].cjs [client] (ecmascript, async loader)")
                    ]).then({
                        "Hero.useEffect.load": ([{ default: lottie }, { default: animationData }])=>{
                            if (cancelled || !lottieRef.current) return;
                            animation = lottie.loadAnimation({
                                container: lottieRef.current,
                                renderer: "svg",
                                loop: true,
                                autoplay: true,
                                animationData
                            });
                        }
                    }["Hero.useEffect.load"]);
                }
            }["Hero.useEffect.load"];
            if (mql.matches) load();
            else mql.addEventListener("change", load);
            return ({
                "Hero.useEffect": ()=>{
                    cancelled = true;
                    mql.removeEventListener("change", load);
                    animation?.destroy();
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MENULINKS"][0].ref,
        "aria-label": "Introduction",
        style: fadeIn ? {
            opacity: 0
        } : undefined,
        className: "jsx-cb47287d00fe587c" + " " + "w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "cb47287d00fe587c",
                children: ".typed-cursor{font-size:2rem}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-cb47287d00fe587c" + " " + "flex flex-col pt-40 md:pt-0 select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                        className: "jsx-cb47287d00fe587c" + " " + `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2f$Hero$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].intro} font-mono font-medium text-indigo-light staggered-reveal`,
                        children: "Hi, my name is"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero/Hero.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-cb47287d00fe587c" + " " + `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2f$Hero$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].heroName} text-white text-6xl font-semibold`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-cb47287d00fe587c" + " " + `relative ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2f$Hero$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].emphasize} staggered-reveal`,
                                children: "Build"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero/Hero.js",
                                lineNumber: 99,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-cb47287d00fe587c" + " " + "staggered-reveal",
                                children: " Verse"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero/Hero.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero/Hero.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-cb47287d00fe587c",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            ref: typedElementRef,
                            className: "jsx-cb47287d00fe587c" + " " + "staggered-reveal text-3xl text-gray-light-3 font-mono leading-relaxed"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero/Hero.js",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Hero/Hero.js",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cb47287d00fe587c" + " " + "staggered-reveal",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profiles$2f$Profiles$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/Hero/Hero.js",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Hero/Hero.js",
                        lineNumber: 110,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-cb47287d00fe587c" + " " + "staggered-reveal pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Button$2f$Button$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `#${__TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MENULINKS"][4].ref}`,
                            classes: "link",
                            type: "primary",
                            children: "Let's Talk"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero/Hero.js",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Hero/Hero.js",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero/Hero.js",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: lottieRef,
                className: "jsx-cb47287d00fe587c" + " " + "absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
            }, void 0, false, {
                fileName: "[project]/components/Hero/Hero.js",
                lineNumber: 119,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero/Hero.js",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "dEZQMKGKEpGP81emJJDWOTHRJcA=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons/external.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
const IconExternal = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-external-link",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "External Link"
            }, void 0, false, {
                fileName: "[project]/components/Icons/external.js",
                lineNumber: 13,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            }, void 0, false, {
                fileName: "[project]/components/Icons/external.js",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "15 3 21 3 21 9"
            }, void 0, false, {
                fileName: "[project]/components/Icons/external.js",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "10",
                y1: "14",
                x2: "21",
                y2: "3"
            }, void 0, false, {
                fileName: "[project]/components/Icons/external.js",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons/external.js",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconExternal;
const __TURBOPACK__default__export__ = IconExternal;
var _c;
__turbopack_context__.k.register(_c, "IconExternal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons/external.js [client] (ecmascript) <export default as IconExternal>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconExternal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$external$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$external$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/external.js [client] (ecmascript)");
}),
"[project]/components/Icons/github.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
const IconGithub = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-github",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        }, void 0, false, {
            fileName: "[project]/components/Icons/github.js",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Icons/github.js",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconGithub;
const __TURBOPACK__default__export__ = IconGithub;
var _c;
__turbopack_context__.k.register(_c, "IconGithub");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons/github.js [client] (ecmascript) <export default as IconGithub>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconGithub",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$github$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$github$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/github.js [client] (ecmascript)");
}),
"[project]/components/Icons/icon.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/Icons/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$mail$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__ = __turbopack_context__.i("[project]/components/Icons/mail.js [client] (ecmascript) <export default as IconMail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$linkedin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLinkedin$3e$__ = __turbopack_context__.i("[project]/components/Icons/linkedin.js [client] (ecmascript) <export default as IconLinkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$instagram$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconInstagram$3e$__ = __turbopack_context__.i("[project]/components/Icons/instagram.js [client] (ecmascript) <export default as IconInstagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$twitter$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTwitter$3e$__ = __turbopack_context__.i("[project]/components/Icons/twitter.js [client] (ecmascript) <export default as IconTwitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$github$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconGithub$3e$__ = __turbopack_context__.i("[project]/components/Icons/github.js [client] (ecmascript) <export default as IconGithub>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$external$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternal$3e$__ = __turbopack_context__.i("[project]/components/Icons/external.js [client] (ecmascript) <export default as IconExternal>");
;
;
const Icon = ({ name })=>{
    switch(name){
        case "mail":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$mail$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconMail$3e$__["IconMail"], {}, void 0, false, {
                fileName: "[project]/components/Icons/icon.js",
                lineNumber: 13,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "github":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$github$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconGithub$3e$__["IconGithub"], {}, void 0, false, {
                fileName: "[project]/components/Icons/icon.js",
                lineNumber: 15,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "linkedin":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$linkedin$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconLinkedin$3e$__["IconLinkedin"], {}, void 0, false, {
                fileName: "[project]/components/Icons/icon.js",
                lineNumber: 17,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "instagram":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$instagram$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconInstagram$3e$__["IconInstagram"], {}, void 0, false, {
                fileName: "[project]/components/Icons/icon.js",
                lineNumber: 19,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        case "twitter":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$twitter$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconTwitter$3e$__["IconTwitter"], {}, void 0, false, {
                fileName: "[project]/components/Icons/icon.js",
                lineNumber: 21,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$external$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconExternal$3e$__["IconExternal"], {}, void 0, false, {
                fileName: "[project]/components/Icons/icon.js",
                lineNumber: 23,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
    }
};
_c = Icon;
const __TURBOPACK__default__export__ = Icon;
var _c;
__turbopack_context__.k.register(_c, "Icon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons/icon.js [client] (ecmascript) <export default as Icon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$icon$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$icon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/icon.js [client] (ecmascript)");
}),
"[project]/components/Icons/index.js [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$mail$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/mail.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$github$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/github.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$linkedin$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/linkedin.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$instagram$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/instagram.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$twitter$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/twitter.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$external$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/external.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$icon$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/icon.js [client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons/instagram.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
const IconInstagram = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-instagram",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5"
            }, void 0, false, {
                fileName: "[project]/components/Icons/instagram.js",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            }, void 0, false, {
                fileName: "[project]/components/Icons/instagram.js",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17.5",
                y1: "6.5",
                x2: "17.51",
                y2: "6.5"
            }, void 0, false, {
                fileName: "[project]/components/Icons/instagram.js",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons/instagram.js",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconInstagram;
const __TURBOPACK__default__export__ = IconInstagram;
var _c;
__turbopack_context__.k.register(_c, "IconInstagram");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons/instagram.js [client] (ecmascript) <export default as IconInstagram>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconInstagram",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$instagram$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$instagram$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/instagram.js [client] (ecmascript)");
}),
"[project]/components/Icons/linkedin.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
const IconLinkedin = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-linkedin",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            }, void 0, false, {
                fileName: "[project]/components/Icons/linkedin.js",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "9",
                width: "4",
                height: "12"
            }, void 0, false, {
                fileName: "[project]/components/Icons/linkedin.js",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "4",
                cy: "4",
                r: "2"
            }, void 0, false, {
                fileName: "[project]/components/Icons/linkedin.js",
                lineNumber: 16,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons/linkedin.js",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconLinkedin;
const __TURBOPACK__default__export__ = IconLinkedin;
var _c;
__turbopack_context__.k.register(_c, "IconLinkedin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons/linkedin.js [client] (ecmascript) <export default as IconLinkedin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconLinkedin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$linkedin$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$linkedin$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/linkedin.js [client] (ecmascript)");
}),
"[project]/components/Icons/mail.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
const IconMail = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-mail",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }, void 0, false, {
                fileName: "[project]/components/Icons/mail.js",
                lineNumber: 14,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "22,6 12,13 2,6"
            }, void 0, false, {
                fileName: "[project]/components/Icons/mail.js",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons/mail.js",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconMail;
const __TURBOPACK__default__export__ = IconMail;
var _c;
__turbopack_context__.k.register(_c, "IconMail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons/mail.js [client] (ecmascript) <export default as IconMail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconMail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$mail$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$mail$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/mail.js [client] (ecmascript)");
}),
"[project]/components/Icons/twitter.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
const IconTwitter = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-twitter",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
        }, void 0, false, {
            fileName: "[project]/components/Icons/twitter.js",
            lineNumber: 14,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Icons/twitter.js",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = IconTwitter;
const __TURBOPACK__default__export__ = IconTwitter;
var _c;
__turbopack_context__.k.register(_c, "IconTwitter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Icons/twitter.js [client] (ecmascript) <export default as IconTwitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconTwitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$twitter$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$twitter$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons/twitter.js [client] (ecmascript)");
}),
"[project]/components/Loader/Loader.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Loader/Loader.module.scss [client] (css module)");
;
;
const Loader = ({ exiting, replayFlyBy, onExited })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].screen} ${exiting ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].exit : ""} ${replayFlyBy ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].replay : ""}`,
        onAnimationEnd: (e)=>{
            if (exiting && e.target === e.currentTarget) onExited();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].loader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Loader/Loader.js",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Loader/Loader.js",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Loader/Loader.js",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Loader/Loader.js",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Loader/Loader.js",
                            lineNumber: 13,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].base,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Loader/Loader.js",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].face
                                }, void 0, false, {
                                    fileName: "[project]/components/Loader/Loader.js",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Loader/Loader.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Loader/Loader.js",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].progress
                }, void 0, false, {
                    fileName: "[project]/components/Loader/Loader.js",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Loader/Loader.js",
            lineNumber: 11,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Loader/Loader.js",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Profiles/Profiles.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/Icons/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$icon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Icon$3e$__ = __turbopack_context__.i("[project]/components/Icons/icon.js [client] (ecmascript) <export default as Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profiles$2f$Profiles$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Profiles/Profiles.module.scss [client] (css module)");
;
;
;
;
const Profiles = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Profiles$2f$Profiles$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].profile,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SOCIAL_LINKS"] && __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SOCIAL_LINKS"].map(({ name, url })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: url,
                className: "link",
                rel: "noreferrer",
                target: "_blank",
                "aria-label": name,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2f$icon$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Icon$3e$__["Icon"], {
                    name: name
                }, void 0, false, {
                    fileName: "[project]/components/Profiles/Profiles.js",
                    lineNumber: 18,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, name, false, {
                fileName: "[project]/components/Profiles/Profiles.js",
                lineNumber: 10,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/components/Profiles/Profiles.js",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Profiles;
const __TURBOPACK__default__export__ = Profiles;
var _c;
__turbopack_context__.k.register(_c, "Profiles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProgressIndicator/ProgressIndicator.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const ProgressIndicator = ()=>{
    _s();
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProgressIndicator.useEffect": ()=>{
            const handleScroll = {
                "ProgressIndicator.useEffect.handleScroll": ()=>{
                    const totalScroll = document.body.scrollTop || document.documentElement.scrollTop;
                    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                    const scrolled = totalScroll / windowHeight;
                    if (progressRef.current) {
                        progressRef.current.style.transform = `scaleX(${scrolled})`;
                    }
                }
            }["ProgressIndicator.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "ProgressIndicator.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["ProgressIndicator.useEffect"];
        }
    }["ProgressIndicator.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "progress w-full fixed top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: progressRef,
            className: "progress-bar"
        }, void 0, false, {
            fileName: "[project]/components/ProgressIndicator/ProgressIndicator.js",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ProgressIndicator/ProgressIndicator.js",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProgressIndicator, "gYIbohfI5V1j/arJ8hbSQuZOLQk=");
_c = ProgressIndicator;
const __TURBOPACK__default__export__ = ProgressIndicator;
var _c;
__turbopack_context__.k.register(_c, "ProgressIndicator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Projects/ProjectTile/ProjectTile.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vanilla$2d$tilt$2f$lib$2f$vanilla$2d$tilt$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/vanilla-tilt/lib/vanilla-tilt.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$ProjectTile$2f$ProjectTile$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Projects/ProjectTile/ProjectTile.module.scss [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$images$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Projects/images.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const tiltOptions = {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    gyroscope: false
};
const ProjectTile = ({ project, classes, isDesktop })=>{
    _s();
    const projectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { name, imageKey, description, gradient, url, tech } = project;
    const image = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$images$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PROJECT_IMAGES"][imageKey];
    let additionalClasses = "";
    if (classes) {
        additionalClasses = classes;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectTile.useEffect": ()=>{
            const node = projectCard.current;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vanilla$2d$tilt$2f$lib$2f$vanilla$2d$tilt$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].init(node, tiltOptions);
            return ({
                "ProjectTile.useEffect": ()=>node?.vanillaTilt?.destroy()
            })["ProjectTile.useEffect"];
        }
    }["ProjectTile.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: url || undefined,
        className: `overflow-hidden rounded-3xl snap-start link ${additionalClasses}`,
        target: "_blank",
        rel: "noreferrer",
        style: {
            maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
            flex: "1 0 auto",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: projectCard,
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$ProjectTile$2f$ProjectTile$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].projectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`,
            style: {
                background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                    src: "/project-bg.svg",
                    alt: "",
                    className: "absolute w-full h-full top-0 left-0 opacity-20 rounded-3xl",
                    fill: true
                }, void 0, false, {
                    fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                    src: image,
                    alt: name,
                    placeholder: "blur",
                    fill: true,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$ProjectTile$2f$ProjectTile$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].projectImage,
                    style: {
                        aspectRatio: `${image.width} / ${image.height}`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !isDesktop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 w-full h-20",
                    style: {
                        background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
                    lineNumber: 67,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-medium text-2xl sm:text-3xl z-10 pl-2 pt-2 transform-gpu",
                    style: {
                        transform: "translateZ(3rem)"
                    },
                    children: name
                }, void 0, false, {
                    fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `
            ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$ProjectTile$2f$ProjectTile$2e$module$2e$scss__$5b$client$5d$__$28$css__module$29$__["default"].techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden
          `,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col pb-8",
                        children: tech.map((el, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                className: `${i % 2 === 0 && "ml-16"} mb-4`,
                                src: `/projects/tech/${el}.svg`,
                                alt: el,
                                height: 45,
                                width: 45
                            }, el, false, {
                                fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
                                lineNumber: 87,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg z-10 tracking-wide font-medium text-white transform-gpu",
                    style: {
                        transform: "translateZ(0.8rem)"
                    },
                    children: description
                }, void 0, false, {
                    fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
            lineNumber: 45,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Projects/ProjectTile/ProjectTile.js",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProjectTile, "kHUBHNwee+942iStnj1Gc7nzwY4=");
_c = ProjectTile;
const __TURBOPACK__default__export__ = ProjectTile;
var _c;
__turbopack_context__.k.register(_c, "ProjectTile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Projects/Projects.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$ProjectTile$2f$ProjectTile$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Projects/ProjectTile/ProjectTile.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Projects = ({ isDesktop, clientHeight })=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            let projectsScrollTrigger;
            let projectsTimeline;
            if (isDesktop) {
                [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
            } else {
                const projectWrapper = sectionRef.current.querySelector(".project-wrapper");
                projectWrapper.style.width = "calc(100vw - 1rem)";
                projectWrapper.style.overflowX = "scroll";
            }
            const [revealTimeline, revealScrollTrigger] = getRevealSt();
            return ({
                "Projects.useEffect": ()=>{
                    projectsScrollTrigger && projectsScrollTrigger.kill();
                    projectsTimeline && projectsTimeline.kill();
                    revealScrollTrigger && revealScrollTrigger.kill();
                    revealTimeline && revealTimeline.progress(1);
                }
            })["Projects.useEffect"];
        }
    }["Projects.useEffect"], [
        sectionRef,
        sectionTitleRef,
        isDesktop
    ]);
    const getRevealSt = ()=>{
        const revealTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            defaults: {
                ease: "none"
            }
        });
        revealTl.from(sectionRef.current.querySelectorAll(".staggered-reveal"), {
            opacity: 0,
            duration: 0.5,
            stagger: 0.5
        }, "<");
        const scrollTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 0,
            animation: revealTl
        });
        return [
            revealTl,
            scrollTrigger
        ];
    };
    const getProjectsSt = ()=>{
        const timeline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            defaults: {
                ease: "none"
            }
        });
        const sidePadding = document.body.clientWidth - sectionRef.current.querySelector(".inner-container").clientWidth;
        const elementWidth = sidePadding + sectionRef.current.querySelector(".project-wrapper").clientWidth;
        sectionRef.current.style.width = `${elementWidth}px`;
        const width = window.innerWidth - elementWidth;
        const duration = `${elementWidth / window.innerHeight * 100}%`;
        timeline.to(sectionRef.current, {
            x: width
        }).to(sectionTitleRef.current, {
            x: -width
        }, "<");
        const scrollTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: sectionRef.current,
            start: "top top",
            end: duration,
            scrub: 0,
            pin: true,
            animation: timeline,
            pinSpacing: "margin"
        });
        return [
            timeline,
            scrollTrigger
        ];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MENULINKS"][2].ref,
        "aria-label": "Projects",
        className: `${isDesktop && "min-h-screen"} w-full relative select-none section-container transform-gpu`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col inner-container transform-gpu",
                    ref: sectionTitleRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "uppercase tracking-widest text-gray-light-1 staggered-reveal",
                            children: "PROJECTS"
                        }, void 0, false, {
                            fileName: "[project]/components/Projects/Projects.js",
                            lineNumber: 96,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal",
                            children: "My Projects"
                        }, void 0, false, {
                            fileName: "[project]/components/Projects/Projects.js",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal",
                            children: [
                                "Some things I've built with love, expertise and a pinch of magical ingredients.",
                                " "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Projects/Projects.js",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Projects/Projects.js",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${clientHeight > 650 ? "mt-12" : "mt-8"} flex project-wrapper no-scrollbar w-fit staggered-reveal`,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PROJECTS"].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$ProjectTile$2f$ProjectTile$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            classes: index === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["PROJECTS"].length - 1 ? "" : "mr-8 xs:mr-10 sm:mr-12",
                            project: project
                        }, project.name, false, {
                            fileName: "[project]/components/Projects/Projects.js",
                            lineNumber: 113,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/components/Projects/Projects.js",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Projects/Projects.js",
            lineNumber: 91,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Projects/Projects.js",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Projects, "/gB2iTDHaUEhSNdgwrYQHHTrZCc=");
_c = Projects;
const __TURBOPACK__default__export__ = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Projects/images.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECT_IMAGES",
    ()=>PROJECT_IMAGES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$nextboss$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$nextboss$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/nextboss.webp.mjs { IMAGE => "[project]/public/projects/nextboss.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$ready$2d$ai$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$ready$2d$ai$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/ready-ai.webp.mjs { IMAGE => "[project]/public/projects/ready-ai.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$round1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$round1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/round1.webp.mjs { IMAGE => "[project]/public/projects/round1.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$react$2d$native$2d$directory$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$react$2d$native$2d$directory$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/react-native-directory.webp.mjs { IMAGE => "[project]/public/projects/react-native-directory.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$buywow$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$buywow$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/buywow.webp.mjs { IMAGE => "[project]/public/projects/buywow.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$bot9$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$bot9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/bot9.webp.mjs { IMAGE => "[project]/public/projects/bot9.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$dukaan$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$dukaan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/dukaan.webp.mjs { IMAGE => "[project]/public/projects/dukaan.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$airbnb$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$airbnb$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/airbnb.webp.mjs { IMAGE => "[project]/public/projects/airbnb.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$medium$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$medium$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/medium.webp.mjs { IMAGE => "[project]/public/projects/medium.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$inshorts$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$inshorts$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/inshorts.webp.mjs { IMAGE => "[project]/public/projects/inshorts.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$tesla$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$tesla$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/projects/tesla.webp.mjs { IMAGE => "[project]/public/projects/tesla.webp (static in ecmascript, tag client)" } [client] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
const PROJECT_IMAGES = {
    nextboss: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$nextboss$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$nextboss$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    "ready-ai": __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$ready$2d$ai$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$ready$2d$ai$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    round1: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$round1$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$round1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    "react-native-directory": __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$react$2d$native$2d$directory$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$react$2d$native$2d$directory$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    buywow: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$buywow$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$buywow$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    bot9: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$bot9$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$bot9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    dukaan: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$dukaan$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$dukaan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    airbnb: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$airbnb$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$airbnb$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    medium: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$medium$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$medium$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    inshorts: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$inshorts$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$inshorts$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    tesla: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$tesla$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$projects$2f$tesla$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reveal/Reveal.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [client] (ecmascript)");
;
;
const Reveal = ({ children, distance = "4rem", duration = 1 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: distance
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration,
            ease: [
                0.5,
                0,
                0,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Reveal/Reveal.js",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Reveal;
const __TURBOPACK__default__export__ = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Skills/Skills.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
/* eslint-disable @next/next/no-img-element */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const Skills = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Skills.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Skills.useLayoutEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: "none"
                        }
                    }).from(sectionRef.current.querySelectorAll(".staggered-reveal"), {
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.5
                    }, "<");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: sectionRef.current.querySelector(".skills-wrapper"),
                        start: "100px bottom",
                        end: "center center",
                        scrub: 0,
                        animation: tl
                    });
                }
            }["Skills.useLayoutEffect.ctx"]);
            return ({
                "Skills.useLayoutEffect": ()=>ctx.revert()
            })["Skills.useLayoutEffect"];
        }
    }["Skills.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MENULINKS"][1].ref,
        "aria-label": "Skills",
        className: "w-full relative select-none mt-44",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-container py-16 flex flex-col justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/right-pattern.svg",
                    alt: "",
                    className: "absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block",
                    loading: "lazy",
                    height: 700,
                    width: 320
                }, void 0, false, {
                    fileName: "[project]/components/Skills/Skills.js",
                    lineNumber: 41,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col skills-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "uppercase tracking-widest text-gray-light-1 staggered-reveal",
                                    children: "SKILLS"
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills/Skills.js",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal",
                                    children: "My Skills"
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills/Skills.js",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal",
                                    children: [
                                        "I like to take responsibility to craft aesthetic user experience using modern frontend architecture.",
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Skills/Skills.js",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Skills/Skills.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal",
                                    children: "LANGUAGES AND TOOLS"
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills/Skills.js",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center flex-wrap gap-6 staggered-reveal",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SKILLS"].languagesAndTools.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: `/skills/${skill}.svg`,
                                            alt: skill,
                                            width: 50,
                                            height: 50
                                        }, skill, false, {
                                            fileName: "[project]/components/Skills/Skills.js",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills/Skills.js",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Skills/Skills.js",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal",
                                    children: "LIBRARIES AND FRAMEWORKS"
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills/Skills.js",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-6 transform-gpu staggered-reveal",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SKILLS"].librariesAndFrameworks.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: `/skills/${skill}.svg`,
                                            alt: skill,
                                            width: 50,
                                            height: 50
                                        }, skill, false, {
                                            fileName: "[project]/components/Skills/Skills.js",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/components/Skills/Skills.js",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Skills/Skills.js",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mr-16 xs:mr-20 mb-6 staggered-reveal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4",
                                            children: "DATABASES"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills/Skills.js",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-6 transform-gpu",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SKILLS"].databases.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                    src: `/skills/${skill}.svg`,
                                                    alt: skill,
                                                    width: 50,
                                                    height: 50
                                                }, skill, false, {
                                                    fileName: "[project]/components/Skills/Skills.js",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills/Skills.js",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Skills/Skills.js",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "staggered-reveal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4",
                                            children: "Other"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills/Skills.js",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-6 transform-gpu",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SKILLS"].other.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                    src: `/skills/${skill}.svg`,
                                                    alt: skill,
                                                    width: 50,
                                                    height: 50
                                                }, skill, false, {
                                                    fileName: "[project]/components/Skills/Skills.js",
                                                    lineNumber: 117,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Skills/Skills.js",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Skills/Skills.js",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Skills/Skills.js",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Skills/Skills.js",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Skills/Skills.js",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Skills/Skills.js",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Skills, "yqF7T+tKntlof91biRl/L8yJNLk=");
_c = Skills;
const __TURBOPACK__default__export__ = Skills;
var _c;
__turbopack_context__.k.register(_c, "Skills");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Work/DotPattern/DotPattern.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cn.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const DotPattern = ({ width = 16, height = 16, x = 0, y = 0, cx = 1, cy = 1, cr = 1, className, ...props })=>{
    _s();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-0 h-full w-full fill-[#a3a3a3]/80", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                    id: id,
                    width: width,
                    height: height,
                    patternUnits: "userSpaceOnUse",
                    patternContentUnits: "userSpaceOnUse",
                    x: x,
                    y: y,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        id: "pattern-circle",
                        cx: cy,
                        cy: cy,
                        r: cr
                    }, void 0, false, {
                        fileName: "[project]/components/Work/DotPattern/DotPattern.js",
                        lineNumber: 36,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Work/DotPattern/DotPattern.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Work/DotPattern/DotPattern.js",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "100%",
                height: "100%",
                strokeWidth: 0,
                fill: `url(#${id})`
            }, void 0, false, {
                fileName: "[project]/components/Work/DotPattern/DotPattern.js",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Work/DotPattern/DotPattern.js",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DotPattern, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = DotPattern;
const __TURBOPACK__default__export__ = DotPattern;
var _c;
__turbopack_context__.k.register(_c, "DotPattern");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Work/StickyScroll/StickyScroll.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Work$2f$DotPattern$2f$DotPattern$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Work/DotPattern/DotPattern.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cn.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const backgroundColors = [
    "#000000"
];
const linearGradients = [
    "linear-gradient(to bottom right, #ef008f, #6ec3f4)",
    "linear-gradient(to bottom right, #6ec3f4, #7038ff)",
    "linear-gradient(to bottom right, #7038ff, #c9c9c9)"
];
const StickyScroll = ({ contentItems })=>{
    _s();
    const [activeCard, setActiveCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useScroll"])({
        container: containerRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const cardLength = contentItems.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollYProgress, "change", {
        "StickyScroll.useMotionValueEvent": (latest)=>{
            const cardsBreakpoints = contentItems.map({
                "StickyScroll.useMotionValueEvent.cardsBreakpoints": (_, index)=>index / cardLength - 0.1
            }["StickyScroll.useMotionValueEvent.cardsBreakpoints"]);
            const closestBreakpointIndex = cardsBreakpoints.reduce({
                "StickyScroll.useMotionValueEvent.closestBreakpointIndex": (acc, breakpoint, index)=>{
                    const distance = Math.abs(latest - breakpoint);
                    if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                        return index;
                    }
                    return acc;
                }
            }["StickyScroll.useMotionValueEvent.closestBreakpointIndex"], 0);
            setActiveCard(closestBreakpointIndex);
        }
    }["StickyScroll.useMotionValueEvent"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Work$2f$DotPattern$2f$DotPattern$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                cr: 1,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cn"])("[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)] rounded-2xl py-3 px-2 md:px-0 z-20")
            }, void 0, false, {
                fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-14 bg-gradient-to-b from-black to-transparent z-10 rounded-2xl"
            }, void 0, false, {
                fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black to-transparent z-10 rounded-2xl"
            }, void 0, false, {
                fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: containerRef,
                animate: {
                    backgroundColor: backgroundColors[activeCard % backgroundColors.length]
                },
                className: "h-[28rem] flex justify-center space-x-10 p-4 rounded-2xl outline outline-1 outline-gray-dark-1 overflow-y-auto no-scrollbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                contentItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: activeCard === index ? 1 : 0.3
                                                },
                                                className: "text-2xl font-bold text-slate-100",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: activeCard === index ? 1 : 0.3
                                                },
                                                className: "text-lg text-slate-300 max-w-sm mt-4",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, item.title + index, true, {
                                        fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-40"
                                }, void 0, false, {
                                    fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            backgroundImage: linearGradients[activeCard % linearGradients.length]
                        },
                        className: "hidden lg:block h-60 w-80 rounded-xl bg-white sticky top-10 overflow-hidden",
                        children: contentItems[activeCard].content ?? null
                    }, void 0, false, {
                        fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Work/StickyScroll/StickyScroll.js",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StickyScroll, "tYMf12PW1Lzp72cvY8vA0fccgcQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = StickyScroll;
const __TURBOPACK__default__export__ = StickyScroll;
var _c;
__turbopack_context__.k.register(_c, "StickyScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Work/Tabs/Tabs.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/use-sfx.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/cn.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Tab = ({ index, tab, activeTab, handleOnClick, setIsHovering })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onMouseDown: ()=>handleOnClick(index),
        onMouseEnter: ()=>setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false),
        className: "relative px-4 py-1 rounded-full cursor-none link",
        style: {
            transformStyle: "preserve-3d"
        },
        children: [
            activeTab.value === tab.value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layoutId: "clickedbutton",
                transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.7
                },
                className: "absolute inset-0 bg-gray-dark-2 rounded-full"
            }, void 0, false, {
                fileName: "[project]/components/Work/Tabs/Tabs.js",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$cn$2e$js__$5b$client$5d$__$28$ecmascript$29$__["cn"])("relative text-white top-[3px]", tab.value !== activeTab.value && "hover:text-gray-light-3"),
                children: tab.title
            }, void 0, false, {
                fileName: "[project]/components/Work/Tabs/Tabs.js",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Work/Tabs/Tabs.js",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Tab;
const TabsContent = ({ tabs, isHovering })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        children: tabs.map((tab, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layoutId: tab.value,
                style: {
                    scale: 1 - index * 0.1,
                    top: isHovering ? index * -50 : 0,
                    zIndex: -index,
                    opacity: index < 3 ? 1 - index * 0.1 : 0
                },
                animate: {
                    y: tab.value === tabs[0].value ? [
                        0,
                        40,
                        0
                    ] : 0
                },
                className: "w-full h-full absolute top-0 left-0 mt-24 md:mt-20",
                children: tab.content
            }, tab.value, false, {
                fileName: "[project]/components/Work/Tabs/Tabs.js",
                lineNumber: 42,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/components/Work/Tabs/Tabs.js",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = TabsContent;
const Tabs = ({ tabItems })=>{
    _s();
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tabs, setTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(tabItems);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(tabItems[0]);
    const sfx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSfx"])();
    const handleOnClick = (index)=>{
        const updatedTabs = [
            ...tabItems
        ];
        const selectedTab = updatedTabs.splice(index, 1);
        updatedTabs.unshift(selectedTab[0]);
        setTabs(updatedTabs);
        setActiveTab(updatedTabs[0]);
        sfx.play("tab-switch");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "staggered-reveal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-12 flex flex-row justify-center items-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
                children: tabItems.map((tab, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tab, {
                        index: index,
                        tab: tab,
                        activeTab: activeTab,
                        handleOnClick: handleOnClick,
                        setIsHovering: setIsHovering
                    }, tab.title, false, {
                        fileName: "[project]/components/Work/Tabs/Tabs.js",
                        lineNumber: 83,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/Work/Tabs/Tabs.js",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContent, {
                tabs: tabs,
                activeTab: activeTab,
                isHovering: isHovering
            }, activeTab.value, false, {
                fileName: "[project]/components/Work/Tabs/Tabs.js",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Work/Tabs/Tabs.js",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Tabs, "eaHbXrdrAA2mojOus/T259nkMYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$use$2d$sfx$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSfx"]
    ];
});
_c2 = Tabs;
const __TURBOPACK__default__export__ = Tabs;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Tab");
__turbopack_context__.k.register(_c1, "TabsContent");
__turbopack_context__.k.register(_c2, "Tabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Work/Work.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Work$2f$Tabs$2f$Tabs$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Work/Tabs/Tabs.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Work$2f$StickyScroll$2f$StickyScroll$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Work/StickyScroll/StickyScroll.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const Work = ({ isDesktop })=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tabItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Work.useMemo[tabItems]": ()=>[
                {
                    title: "Grapevine",
                    value: "grapevine",
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Work$2f$StickyScroll$2f$StickyScroll$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        isDesktop: isDesktop,
                        contentItems: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WORK_CONTENTS"].GRAPEVINE
                    }, void 0, false, {
                        fileName: "[project]/components/Work/Work.js",
                        lineNumber: 17,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                },
                {
                    title: "Dukaan",
                    value: "dukaan",
                    content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Work$2f$StickyScroll$2f$StickyScroll$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        isDesktop: isDesktop,
                        contentItems: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["WORK_CONTENTS"].DUKAAN
                    }, void 0, false, {
                        fileName: "[project]/components/Work/Work.js",
                        lineNumber: 27,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }
            ]
    }["Work.useMemo[tabItems]"], [
        isDesktop
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Work.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Work.useEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: "none"
                        }
                    }).from(sectionRef.current.querySelectorAll(".staggered-reveal"), {
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.5
                    }, "<");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: sectionRef.current.querySelector(".work-wrapper"),
                        start: "100px bottom",
                        end: "center center",
                        scrub: 0,
                        animation: tl
                    });
                }
            }["Work.useEffect.ctx"]);
            return ({
                "Work.useEffect": ()=>ctx.revert()
            })["Work.useEffect"];
        }
    }["Work.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2e$js__$5b$client$5d$__$28$ecmascript$29$__["MENULINKS"][3].ref,
        "aria-label": "Work Experience",
        className: "w-full relative select-none xs:mt-40 sm:mt-72 mb-96",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/left-pattern.svg",
                className: "absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block",
                loading: "lazy",
                height: 700,
                width: 320,
                alt: "left pattern"
            }, void 0, false, {
                fileName: "[project]/components/Work/Work.js",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-container py-16 flex flex-col justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col work-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "uppercase tracking-widest text-gray-light-1 staggered-reveal",
                                    children: "WORK"
                                }, void 0, false, {
                                    fileName: "[project]/components/Work/Work.js",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal",
                                    children: "Experience"
                                }, void 0, false, {
                                    fileName: "[project]/components/Work/Work.js",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal",
                                    children: [
                                        "A quick recap of where I've worked.",
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Work/Work.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Work/Work.js",
                            lineNumber: 77,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Work$2f$Tabs$2f$Tabs$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            tabItems: tabItems
                        }, void 0, false, {
                            fileName: "[project]/components/Work/Work.js",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Work/Work.js",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Work/Work.js",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Work/Work.js",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Work, "sYGrGGSRpiVihaoBTHMif6k+neo=");
_c = Work;
const __TURBOPACK__default__export__ = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/constants.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT_DETAILS",
    ()=>CONTACT_DETAILS,
    "GTAG",
    ()=>GTAG,
    "MENULINKS",
    ()=>MENULINKS,
    "METADATA",
    ()=>METADATA,
    "PROJECTS",
    ()=>PROJECTS,
    "SKILLS",
    ()=>SKILLS,
    "SOCIAL_LINKS",
    ()=>SOCIAL_LINKS,
    "TYPED_STRINGS",
    ()=>TYPED_STRINGS,
    "WORK_CONTENTS",
    ()=>WORK_CONTENTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
const METADATA = {
    author: "Build Verse",
    title: "Build Verse | Creative Digital & Product Engineering",
    description: "Build Verse is a passionate digital product engineering studio, dedicated to crafting aesthetic, responsive, and modern web and mobile applications.",
    siteUrl: "https://buildverse.dev/",
    twitterHandle: "@buildverse",
    keywords: [
        "Build Verse",
        "Product Studio",
        "Frontend Engineering",
        "Full Stack Development",
        "React Native",
        "Next.js",
        "Web Development",
        "UI/UX Design",
        "Portfolio"
    ].join(", "),
    image: "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
    language: "English",
    themeColor: "#000000"
};
const MENULINKS = [
    {
        name: "Home",
        ref: "home"
    },
    {
        name: "Skills",
        ref: "skills"
    },
    {
        name: "Projects",
        ref: "projects"
    },
    {
        name: "Work",
        ref: "work"
    },
    {
        name: "Contact",
        ref: "contact"
    }
];
const TYPED_STRINGS = [
    "A pragmatic Product & Engineering Studio",
    "We build high-performance web applications",
    "We create aesthetic and modern digital experiences"
];
const CONTACT_DETAILS = {
    email: "contact@buildverse.dev",
    alternativeEmail: "hello@buildverse.dev",
    location: "Worldwide / Remote",
    availability: "Available for new projects & collaborations"
};
const SOCIAL_LINKS = [
    {
        name: "mail",
        url: "mailto:contact@buildverse.dev"
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/company/buildverse/"
    },
    {
        name: "github",
        url: "https://github.com/buildverse"
    },
    {
        name: "instagram",
        url: "https://www.instagram.com/buildverse/"
    },
    {
        name: "twitter",
        url: "https://x.com/buildverse"
    }
];
const SKILLS = {
    languagesAndTools: [
        "html",
        "css",
        "javascript",
        "typescript",
        "sass",
        "nodejs",
        "webpack",
        "vite",
        "firebase",
        "figma",
        "tanstack"
    ],
    librariesAndFrameworks: [
        "expo",
        "react",
        "redux",
        "nextjs",
        "tailwindcss",
        "styledcomponents",
        "antdesign",
        "chakra-ui"
    ],
    databases: [
        "mysql",
        "mongodb"
    ],
    other: [
        "git",
        "cursor",
        "sanity"
    ]
};
const PROJECTS = [
    {
        name: "NextBoss",
        imageKey: "nextboss",
        description: "Get hired through DMs not resumes 🤝",
        gradient: [
            "#FF69B4",
            "#FFB6C1"
        ],
        url: null,
        tech: [
            "typescript",
            "react",
            "expo",
            "react-query"
        ]
    },
    {
        name: "ReadyAI",
        imageKey: "ready-ai",
        description: "AI that gets you interview ready 🎯",
        gradient: [
            "#F4D03F",
            "#58D68D"
        ],
        url: "https://play.google.com/store/apps/details?id=com.app.readyai",
        tech: [
            "typescript",
            "react"
        ]
    },
    {
        name: "Grapevine Round1 AI",
        imageKey: "round1",
        description: "Ace your round one in 9 minutes  💼",
        gradient: [
            "#5D4037",
            "#8D6E63"
        ],
        url: "https://play.google.com/store/apps/details?id=com.app.gvine",
        tech: [
            "typescript",
            "react",
            "react-query"
        ]
    },
    {
        name: "React Native Directory",
        imageKey: "react-native-directory",
        description: "Search & filter React Native libraries via Raycast ⌨️",
        gradient: [
            "#000000",
            "#1A1A1A"
        ],
        url: "https://www.raycast.com/buildverse/react-native-directory",
        tech: [
            "typescript",
            "react",
            "expo",
            "raycast"
        ]
    },
    {
        name: "Buywow",
        imageKey: "buywow",
        description: "Official Wow Skin Science app 🌿",
        gradient: [
            "#FFD54F",
            "#FFB300"
        ],
        url: "https://play.google.com/store/apps/details?id=co.tapcart.app.id_99G6QNo3nu",
        tech: [
            "typescript",
            "react",
            "react-query"
        ]
    },
    {
        name: "Bot9",
        imageKey: "bot9",
        description: "Automate support with AI 🤖",
        gradient: [
            "#3F51B5",
            "#7986CB"
        ],
        url: "https://bot9.ai/",
        tech: [
            "typescript",
            "react",
            "nextjs",
            "tailwindcss"
        ]
    },
    {
        name: "Dukaan",
        imageKey: "dukaan",
        description: "Shopify for India 🛍️",
        gradient: [
            "#1976D2",
            "#1565C0"
        ],
        url: "https://play.google.com/store/apps/details?id=com.dukaan.app",
        tech: [
            "typescript",
            "react",
            "firebase",
            "tailwindcss",
            "react-query"
        ]
    },
    {
        name: "Tesla",
        imageKey: "tesla",
        description: "Built with Expo 🏎️",
        gradient: [
            "#0F172A",
            "#1E293B"
        ],
        url: "https://github.com/buildverse/tesla",
        tech: [
            "javascript",
            "expo"
        ]
    },
    {
        name: "Airbnb",
        imageKey: "airbnb",
        description: "Built with NextJS + Tailwind CSS 🛏️",
        gradient: [
            "#1F2937",
            "#6B7280"
        ],
        url: "https://buildverse-airbnb.vercel.app/",
        tech: [
            "javascript",
            "react",
            "nextjs",
            "mapbox",
            "tailwindcss"
        ]
    },
    {
        name: "Medium",
        imageKey: "medium",
        description: "Built with NextJS + Tailwind CSS ✍🏻",
        gradient: [
            "#FF9800",
            "#F57C00"
        ],
        url: "https://buildverse-medium.vercel.app/",
        tech: [
            "typescript",
            "react",
            "nextjs",
            "tailwindcss",
            "sanity"
        ]
    },
    {
        name: "Inshorts",
        imageKey: "inshorts",
        description: "Voice-enabled news using Alan AI 🎙",
        gradient: [
            "#6366F1",
            "#4F46E5"
        ],
        url: "https://buildverse-inshorts.netlify.app/",
        tech: [
            "javascript",
            "react",
            "chakra-ui",
            "alan"
        ]
    }
];
const WORK_CONTENTS = {
    GRAPEVINE: [
        {
            title: "Grapevine",
            description: "Grapevine is your anonymous office chat, letting coworkers speak openly, share gossip and connect without filters. Building on that same belief, Round1 AI brings it to hiring using AI-driven interviews to replace guesswork with genuine and meaningful conversations.",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex items-center justify-center text-white px-4",
                children: "Connect anonymously. Share freely."
            }, void 0, false, {
                fileName: "[project]/constants.js",
                lineNumber: 210,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Pioneering",
            description: "Hiring was broken — manual, biased, and slow. We launched Round1 AI to fix that: authentic voice interviews, built-in bias checks and real-time insights. Today, it powers thousands of interviews each week, letting teams hire smarter, faster and fairer.",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex items-center justify-center text-white px-4",
                children: "Senior Frontend Engineer"
            }, void 0, false, {
                fileName: "[project]/constants.js",
                lineNumber: 220,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Elevate",
            description: "The early web app struggled with slow performance and zero retention. I rebuilt it from the ground up with a sleek UI, faster load times and SEO-optimized. Then seeded a rich content layer to spark discovery. The payoff? 6x more impressions and 10x the organic installs all without ads, just momentum.",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex items-center justify-center text-white px-4",
                children: "Frontend Engineer"
            }, void 0, false, {
                fileName: "[project]/constants.js",
                lineNumber: 230,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }
    ],
    DUKAAN: [
        {
            title: "Dukaan",
            description: "Dukaan is a platform that enables businesses to launch their online stores at ease.",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex items-center justify-center text-white px-4",
                children: "Revolutionizing commerce, one click at a time"
            }, void 0, false, {
                fileName: "[project]/constants.js",
                lineNumber: 242,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Transformation",
            description: "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex items-center justify-center text-white px-4",
                children: "Senior Frontend Engineer"
            }, void 0, false, {
                fileName: "[project]/constants.js",
                lineNumber: 252,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Evolution",
            description: "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex items-center justify-center text-white px-4",
                children: "Frontend Engineer"
            }, void 0, false, {
                fileName: "[project]/constants.js",
                lineNumber: 262,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Optimization",
            description: "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full flex items-center justify-center text-white px-4",
                children: "Frontend Engineer Intern"
            }, void 0, false, {
                fileName: "[project]/constants.js",
                lineNumber: 272,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }
    ]
};
const GTAG = "G-5HCTL2TJ5W";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/dist/ScrollTrigger.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Loader/Loader.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header/Header.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Menu$2f$Menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Header/Menu/Menu.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgressIndicator$2f$ProgressIndicator$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProgressIndicator/ProgressIndicator.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cursor$2f$Cursor$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Cursor/Cursor.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2f$Hero$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Hero/Hero.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2f$About1$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/About/About1.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2f$Skills$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Skills/Skills.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2f$About2$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/About/About2.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$Projects$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Projects/Projects.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Work$2f$Work$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Work/Work.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Collaboration$2f$Collaboration$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Collaboration/Collaboration.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2f$Contact$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Contact/Contact.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer/Footer.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$log$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/log.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$intro$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/intro.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].config({
    nullTargetWarn: false
});
const Page = ({ isLive, isDesktop, clientHeight })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Header$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Header$2f$Menu$2f$Menu$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 27,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgressIndicator$2f$ProgressIndicator$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 29,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Cursor$2f$Cursor$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                isDesktop: isDesktop
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 30,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "img",
                        className: "text-gray-light-1 opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96 tracking-widest font-bold",
                        children: "BUILD VERSE"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 32,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed top-0 left-0 h-screen w-screen -z-1"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 38,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Hero$2f$Hero$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        fadeIn: isLive
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 39,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2f$About1$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        clientHeight: clientHeight
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 40,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Skills$2f$Skills$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 41,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$About$2f$About2$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        clientHeight: clientHeight
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 42,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Projects$2f$Projects$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        isDesktop: isDesktop,
                        clientHeight: clientHeight
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 43,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Work$2f$Work$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        isDesktop: isDesktop
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 44,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Collaboration$2f$Collaboration$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        clientHeight: clientHeight
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 45,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Contact$2f$Contact$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 46,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 31,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2f$Footer$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 48,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Page;
const LOADER_MS = 1800;
const FLY_BY_MS = 150;
const FLY_BY_LATE_MS = 450;
const EXIT_FALLBACK_MS = 2000;
const markIntroSeen = ()=>{
    try {
        sessionStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$intro$2e$js__$5b$client$5d$__$28$ecmascript$29$__["INTRO_SEEN_KEY"], "1");
    } catch  {}
};
function Home() {
    _s();
    const [viewport, setViewport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLoader, setShowLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [replayFlyBy, setReplayFlyBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLoading = viewport === null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const seen = "introSeen" in document.documentElement.dataset;
            const introMs = reducedMotion ? 0 : seen ? FLY_BY_MS : LOADER_MS;
            let timer;
            let exitTimer;
            const stopWaiting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$intro$2e$js__$5b$client$5d$__$28$ecmascript$29$__["whenShown"])({
                "Home.useEffect.stopWaiting": (shownAt)=>{
                    timer = setTimeout({
                        "Home.useEffect.stopWaiting": ()=>{
                            window.scrollTo({
                                top: 0,
                                behavior: "instant"
                            });
                            markIntroSeen();
                            setReplayFlyBy(seen && !reducedMotion && performance.now() - shownAt > FLY_BY_LATE_MS);
                            setViewport({
                                isDesktop: typeof window.orientation === "undefined" && navigator.userAgent.indexOf("IEMobile") === -1,
                                clientHeight: window.innerHeight
                            });
                            exitTimer = setTimeout({
                                "Home.useEffect.stopWaiting": ()=>setShowLoader(false)
                            }["Home.useEffect.stopWaiting"], EXIT_FALLBACK_MS);
                        }
                    }["Home.useEffect.stopWaiting"], Math.max(0, shownAt + introMs - performance.now()));
                }
            }["Home.useEffect.stopWaiting"]);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$log$2e$js__$5b$client$5d$__$28$ecmascript$29$__["displayFancyLogs"])();
            return ({
                "Home.useEffect": ()=>{
                    stopWaiting();
                    clearTimeout(timer);
                    clearTimeout(exitTimer);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!showLoader) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].refresh();
        }
    }["Home.useEffect"], [
        showLoader
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Loader$2f$Loader$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                exiting: !isLoading,
                replayFlyBy: replayFlyBy,
                onExited: ()=>setShowLoader(false)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 116,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Page, {
                isLive: !isLoading,
                isDesktop: viewport?.isDesktop ?? true,
                clientHeight: viewport?.clientHeight ?? 0
            }, isLoading ? "static" : "live", false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(Home, "13DJfA2MJNrrs6tY4FdhhRufKgo=");
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "Page");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/airbnb.webp.mjs { IMAGE => \"[project]/public/projects/airbnb.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$airbnb$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/airbnb.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$airbnb$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1920,
    height: 3544,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtYAAABXRUJQVlA4TMoAAAAvA8ABAM1VICICHgjACQQAAACAAIEjMAEhAABQEAAgAAgAAHgAAAAAAAAAAAAA4AEQJITAtkgAAADwQIBNAAAAAM7/bXpUQSQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AEAgc49EGATAAAAgPNvnp6UCAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgIKAIpfci463Vl9+TjfLYjopnQ8M3eznN1EFLJbTjDvmHRsHzZxSxehTu17QCV/BcJD/uZcOTUAOnFMEA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/bot9.webp.mjs { IMAGE => \"[project]/public/projects/bot9.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$bot9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/bot9.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$bot9$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 583,
    height: 864,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtwAAABXRUJQVlA4TM8AAAAvBMABAM1VICICHghACgMAAIDf51sPsdAbCIABAAAAAAAAAAAAAAAAAAAAAAAAAAwAAADqNsMSkAAAAHgg4EQAAAAA53/L9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChtHgi4DQQAAMD5X6Iz7B8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0MFEI+9wgQqChQp0geiLiFEcXMEWe7pc3PZgPuz/zmHFXtu/Z/fRt6JHQeWv+HqS2SGChw1yTUrJLb41bgMA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/buywow.webp.mjs { IMAGE => \"[project]/public/projects/buywow.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$buywow$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/buywow.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$buywow$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 510,
    height: 908,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAvA8ABAM1VICICHggACQAAAAAAZwBAA4EBwAAAAAAAAAAAAAAAAAAABgMAAMAMAIYhMvcGKAAAAA8EgAQAAADg/Fuhjs8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYMADDbJ5MHggACQAAAMD5J0AY9M8GAAYAAAAAAAAAAAAAAAAAAAAAAAAAgAHAAxB4b7iOXDZ+oAFA+qP2lk+Vxa3RyYiBvITHWsR4s96p85Idf4jqbP4pgtNQJ0ydy6Y8AGbtFuXClvSWBw=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/dukaan.webp.mjs { IMAGE => \"[project]/public/projects/dukaan.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$dukaan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/dukaan.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$dukaan$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 564,
    height: 1204,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtIAAABXRUJQVlA4TMYAAAAvA8ABAM1VICICHgiwCQAAAICVExDACQQCAAAAAAgAAA4IAAIAAAAAAAAAAAAAAAAAAEGi6h0AAMADAUaBAAAAOP/Jwt4BBASkAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAdTsPBNgEAAAA4PznBQAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAACgOBAAEEXP3y2y/w3JD3mWaV6mdQfjtL8MeyUWOXaQqe7Qq3PKHu10WZrHSp+xrMTxt6LgAICEoHR1bCY="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/inshorts.webp.mjs { IMAGE => \"[project]/public/projects/inshorts.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$inshorts$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/inshorts.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$inshorts$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1536,
    height: 2032,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRugAAABXRUJQVlA4TNsAAAAvBcABAM1VICICHgiACQMAAIBVmZJzFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAASAlAm60NAADAAwExgQAAADj/u2UBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD05bd5ICgrDAAAAOd/7z6EAQEMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIANTEt1kYRU6kSBbdgz4z/ubVtRwytoavfzywOvnvPc2j55eRPLQLQCxonbtHtLfbnKisgcWn8ATDH2ot9t/zgv55OXQMUlNxCCJBAA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/medium.webp.mjs { IMAGE => \"[project]/public/projects/medium.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$medium$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/medium.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$medium$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1125,
    height: 2247,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtgAAABXRUJQVlA4TMwAAAAvA8ABAM1VICICHggACQAAAABgeNgwYAAGeAZgAAMAAAAAAAAAAwAwAANsGA8DAAAADyCDjTcAAIAHAmwCAAAAcP7P64hIBAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBQCgCRS4IsHAmwCAAAAcP79JgEIRAgAAAAAAAAAAIAACAAAAADoAAAAAAAAACQEIQmAkkNkKYK+Yvmf6Pp5Uoc4RliiZ1ZLbZJHJS/Sk8xyenLUm+htt2du0rIi89Ty7RcTMHWDJsEBFvDQcA8="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/nextboss.webp.mjs { IMAGE => \"[project]/public/projects/nextboss.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$nextboss$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/nextboss.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$nextboss$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1320,
    height: 2607,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtYAAABXRUJQVlA4TMkAAAAvA8ABAM1VICICHgjACQQAAAB/wBR5ACkAAAACQAIAAGAgABAAAgAAAAAAAAAEBIFRAAAAANACAADwQABOIAAAAM5/h4ICGSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAin9QJ6VWHggwCgQAAMD5bwvHCwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBAroe2SE476Exj+TqifhRrrCO5MeuUf/KKb+3v+/0T9zMzzbEH1AZjoa13BKEVOtO+Wo8KAMlwgQEA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/react-native-directory.webp.mjs { IMAGE => \"[project]/public/projects/react-native-directory.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$react$2d$native$2d$directory$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/react-native-directory.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$react$2d$native$2d$directory$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 708,
    height: 1410,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRrwAAABXRUJQVlA4TK8AAAAvA8ABAM1VICICHgjACQQAAIDtlq8tAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBepGkFAADwQIYJAAAAAM5/kQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIAcD2SYAAAAAOD8lwIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAigixwwwetUiEQAFyE5METBUD4AqhrG3z13fWZ1R+J3+18TAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/ready-ai.webp.mjs { IMAGE => \"[project]/public/projects/ready-ai.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$ready$2d$ai$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/ready-ai.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$ready$2d$ai$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 430,
    height: 854,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRs4AAABXRUJQVlA4TMEAAAAvA8ABAM1VICICHggwDQAAAIDGlh8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYhbDwAAwAMBOQEAAAA4/1tBESABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtUntPRBgEwAAAIDz79pPIYAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECEoK63yBozwxBvJdp8Z03ubEo3u/sfZlUvWK0nTADl7eGjAcTDT7GRMI75lnuJb9ya+KDMAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/round1.webp.mjs { IMAGE => \"[project]/public/projects/round1.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$round1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/round1.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$round1$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 554,
    height: 1028,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRswAAABXRUJQVlA4TL8AAAAvA8ABAM1VICICHgiwCQAAAIDfAwABEAAAAgECgAAAAAAAAAAAAAAAAAAAAQEA4gAAgKBONTgAAMADwTABAAAAOP/9SQAgBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQHFwF/z0QDBMAAACA89+eEO8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACACD1yGonrX9maeaOLL7bmeyum+NXf+tGCEMzZhkawIMPADfVtAEkytBJkO5cL+7LAAA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/projects/tesla.webp.mjs { IMAGE => \"[project]/public/projects/tesla.webp (static in ecmascript, tag client)\" } [client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$tesla$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/projects/tesla.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$projects$2f$tesla$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1170,
    height: 2343,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRtQAAABXRUJQVlA4TMgAAAAvA8ABAM1VICICHgiwCQAAAAAvCRFKDwAAAAAAACAAAAQASAAAAAAAADCgCAACAAoACgIBAAAAAMADATYBAAAAOP8t1a/0gIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAIgAIgfJA0E4gAAAAzv+lNAhAQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYIDcAD41ljk3ksA9SESsksTmWx5Wj3GYA0jamdg7T7num0+g3SkOmC5fXWc0m+q/wWf+ZiHMPAO5wsHAA=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/cn.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [client] (ecmascript)");
;
;
const cn = (...inputs)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/intro.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTRO_SEEN_KEY",
    ()=>INTRO_SEEN_KEY,
    "introScript",
    ()=>introScript,
    "whenShown",
    ()=>whenShown
]);
const INTRO_SEEN_KEY = "devfolio:intro-seen";
const introScript = `(function(){var d=document,h=d.documentElement;try{history.scrollRestoration="manual"}catch(e){}var n=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];try{(sessionStorage.getItem("${INTRO_SEEN_KEY}")||n&&(n.type==="reload"||n.type==="back_forward"))&&(h.dataset.introSeen="")}catch(e){}if(!d.prerendering&&d.visibilityState==="visible")return;h.dataset.introWaiting="";var f=function(){if(d.prerendering||d.visibilityState!=="visible")return;delete h.dataset.introWaiting;d.removeEventListener("visibilitychange",f);d.removeEventListener("prerenderingchange",f)};d.addEventListener("visibilitychange",f);d.addEventListener("prerenderingchange",f)})()`;
const isWaiting = ()=>"introWaiting" in document.documentElement.dataset;
const whenShown = (callback)=>{
    if (!isWaiting()) {
        const navigation = performance.getEntriesByType("navigation")[0];
        const loadedHere = !navigation || new URL(navigation.name).pathname === location.pathname;
        const firstPaint = loadedHere && performance.getEntriesByType("paint")[0];
        callback(Math.max(navigation?.activationStart ?? 0, firstPaint?.startTime ?? performance.now()));
        return ()=>{};
    }
    const onShow = ()=>{
        if (isWaiting()) return;
        stop();
        callback(performance.now());
    };
    const stop = ()=>{
        document.removeEventListener("visibilitychange", onShow);
        document.removeEventListener("prerenderingchange", onShow);
    };
    document.addEventListener("visibilitychange", onShow);
    document.addEventListener("prerenderingchange", onShow);
    return stop;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/log.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "displayFancyLogs",
    ()=>displayFancyLogs
]);
const displayFancyLogs = ()=>{
    console.log("%c  ____        _ _     _ __     __               \n | __ ) _   _(_) | __| |\\ \\   / /__ _ __ ___  ___ \n |  _ \\| | | | | |/ _` | \\ \\ / / _ \\ '__/ __|/ _ \\\n | |_) | |_| | | | (_| |  \\ V /  __/ |  \\__ \\  __/\n |____/ \\__,_|_|_|\\__,_|   \\_/ \\___|_|  |___/\\___|\n", "color: #6b17e8;");
    console.log("%c Welcome to Build Verse :)", "color: #6b17e8; padding: 6px;");
    // Easter egg hint
    console.log("%c 💡 Psst! There's a secret hiding in plain sight. Follow your heart, it might lead to something... interesting.", "color: #6b17e8; font-style: italic; padding: 6px;");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/use-sfx.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSfx",
    ()=>useSfx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const REGISTRY = {
    pop: {
        src: "/sounds/multi-pop.mp3"
    },
    "pop-down": {
        src: "/sounds/pop-down.mp3"
    },
    "tab-switch": {
        src: "/sounds/mouse-click.mp3"
    },
    heart: {
        src: "/sounds/glug-a.mp3",
        volume: 0.5
    },
    "charge-up": {
        src: "/sounds/charge-up.wav"
    }
};
const cache = new Map();
const getHowl = (name)=>{
    if (!cache.has(name)) {
        const { src, volume } = REGISTRY[name];
        cache.set(name, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Howl"]({
            src: [
                src
            ],
            volume
        }));
    }
    return cache.get(name);
};
const reduceMotion = ()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const useSfx = ()=>{
    _s();
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSfx.useCallback[play]": (name, opts)=>{
            if (reduceMotion()) return;
            const howl = getHowl(name);
            if (opts?.rate) howl.rate(opts.rate);
            howl.stop();
            howl.play();
        }
    }["useSfx.useCallback[play]"], []);
    return {
        play
    };
};
_s(useSfx, "27skXGjC4S3t4Zuia8EsUdVzh/Y=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "TURBOPACK_CHUNK_UPDATE_LISTENERS_GLOBAL",
    ()=>TURBOPACK_CHUNK_UPDATE_LISTENERS_GLOBAL,
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
const TURBOPACK_CHUNK_UPDATE_LISTENERS_GLOBAL = 'TURBOPACK_CHUNK_UPDATE_LISTENERS';
let lastSeenHmrVersion;
function connect({ addMessageListener, sendMessage, onUpdateError = console.error, chunkUpdateListenersGlobal }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                if (lastSeenHmrVersion === undefined && msg.data !== undefined) {
                    lastSeenHmrVersion = msg.data.hmrVersion;
                }
                handleSocketConnected(sendMessage);
                break;
            case 'turbopack-message':
                lastSeenHmrVersion = msg.hmrVersion;
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
            case 'server-component-changes':
                lastSeenHmrVersion = msg.hmrVersion;
                break;
            default:
                break;
        }
    });
    const global = globalThis;
    const queued = global[chunkUpdateListenersGlobal];
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    global[chunkUpdateListenersGlobal] = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource,
        hmrVersion: lastSeenHmrVersion
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
]})(),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/index.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/index.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[project]/components/Button/Button.module.scss [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "primary__button": "Button-module-scss-module__gW1A4G__primary__button",
  "secondary__button": "Button-module-scss-module__gW1A4G__secondary__button",
});
}),
"[project]/components/Contact/Contact.module.scss [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "Contact-module-scss-module__KLt7nW__button",
  "left": "Contact-module-scss-module__KLt7nW__left",
  "plane": "Contact-module-scss-module__KLt7nW__plane",
  "right": "Contact-module-scss-module__KLt7nW__right",
  "success": "Contact-module-scss-module__KLt7nW__success",
  "trails": "Contact-module-scss-module__KLt7nW__trails",
});
}),
"[project]/components/Footer/FooterBg/FooterBg.module.scss [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "background": "FooterBg-module-scss-module__lWafBa__background",
  "background__one": "FooterBg-module-scss-module__lWafBa__background__one",
  "background__two": "FooterBg-module-scss-module__lWafBa__background__two",
  "first": "FooterBg-module-scss-module__lWafBa__first",
  "top": "FooterBg-module-scss-module__lWafBa__top",
});
}),
"[project]/components/Hero/Hero.module.scss [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "emphasize": "Hero-module-scss-module__rtoUUG__emphasize",
  "fadeAppear": "Hero-module-scss-module__rtoUUG__fadeAppear",
  "growHorizontal": "Hero-module-scss-module__rtoUUG__growHorizontal",
  "heroName": "Hero-module-scss-module__rtoUUG__heroName",
  "intro": "Hero-module-scss-module__rtoUUG__intro",
});
}),
"[project]/components/Loader/Loader.module.scss [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrive": "Loader-module-scss-module__je2hNq__arrive",
  "base": "Loader-module-scss-module__je2hNq__base",
  "exit": "Loader-module-scss-module__je2hNq__exit",
  "face": "Loader-module-scss-module__je2hNq__face",
  "fadeIn": "Loader-module-scss-module__je2hNq__fadeIn",
  "fadeOut": "Loader-module-scss-module__je2hNq__fadeOut",
  "fazer1": "Loader-module-scss-module__je2hNq__fazer1",
  "fazer2": "Loader-module-scss-module__je2hNq__fazer2",
  "fazer3": "Loader-module-scss-module__je2hNq__fazer3",
  "fazer4": "Loader-module-scss-module__je2hNq__fazer4",
  "flyBy": "Loader-module-scss-module__je2hNq__flyBy",
  "flyByAgain": "Loader-module-scss-module__je2hNq__flyByAgain",
  "load": "Loader-module-scss-module__je2hNq__load",
  "loader": "Loader-module-scss-module__je2hNq__loader",
  "progress": "Loader-module-scss-module__je2hNq__progress",
  "replay": "Loader-module-scss-module__je2hNq__replay",
  "screen": "Loader-module-scss-module__je2hNq__screen",
  "speeder": "Loader-module-scss-module__je2hNq__speeder",
  "takeoff": "Loader-module-scss-module__je2hNq__takeoff",
  "wipe": "Loader-module-scss-module__je2hNq__wipe",
});
}),
"[project]/components/Profiles/Profiles.module.scss [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "profile": "Profiles-module-scss-module__RsVZ4a__profile",
});
}),
"[project]/components/Projects/ProjectTile/ProjectTile.module.scss [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "projectImage": "ProjectTile-module-scss-module__PxaKeG__projectImage",
  "projectTile": "ProjectTile-module-scss-module__PxaKeG__projectTile",
  "techIcons": "ProjectTile-module-scss-module__PxaKeG__techIcons",
});
}),
"[project]/public/projects/airbnb.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/airbnb.2qa4g8pxs98uk.webp");}),
"[project]/public/projects/bot9.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/bot9.0yo0djyq4g8sc.webp");}),
"[project]/public/projects/buywow.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/buywow.2zvf7r03s5jy_.webp");}),
"[project]/public/projects/dukaan.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/dukaan.41w8fmixaov44.webp");}),
"[project]/public/projects/inshorts.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/inshorts.08ealfs-r5oxj.webp");}),
"[project]/public/projects/medium.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/medium.1qnip0o0jt--3.webp");}),
"[project]/public/projects/nextboss.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/nextboss.2vhkcnyffepbi.webp");}),
"[project]/public/projects/react-native-directory.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/react-native-directory.2854ak8on9zgi.webp");}),
"[project]/public/projects/ready-ai.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ready-ai.1s6mg6r8hc5ui.webp");}),
"[project]/public/projects/round1.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/round1.16wvk4c53d_5f.webp");}),
"[project]/public/projects/tesla.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/tesla.2frdoe2q1_u8x.webp");}),
"[project]/tailwind.config.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const defaultTheme = __turbopack_context__.r("[project]/node_modules/tailwindcss/defaultTheme.js [client] (ecmascript)");
module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}"
    ],
    theme: {
        screens: {
            xs: "475px",
            ...defaultTheme.screens
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            black: "#000000",
            purple: "#8b31ff",
            red: "#cf0000",
            green: "#00ac56",
            indigo: {
                light: "#9f55ff",
                dark: "#7000ff"
            },
            gray: {
                light: {
                    1: "#f0f0f0",
                    2: "#dbdbdb",
                    3: "#aaaaaa",
                    4: "#8a8a8a"
                },
                dark: {
                    1: "#323133",
                    2: "#242225",
                    3: "#1e1b20",
                    4: "#1a171e",
                    5: "#120e16"
                }
            }
        },
        fontFamily: {
            sans: [
                "var(--font-calibre)"
            ],
            mono: [
                "var(--font-jetbrains-mono)"
            ]
        },
        extend: {
            animation: {
                meteor: "meteor 5s linear infinite"
            },
            keyframes: {
                meteor: {
                    "0%": {
                        transform: "rotate(215deg) translateX(0)",
                        opacity: 1
                    },
                    "70%": {
                        opacity: 1
                    },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: 0
                    }
                }
            }
        }
    },
    plugins: []
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1tvu43hc065pc._.js.map