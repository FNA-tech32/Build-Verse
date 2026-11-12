module.exports = [
"[externals]/@emailjs/browser [external] (@emailjs/browser, cjs, [project]/node_modules/@emailjs/browser)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("@emailjs/browser-fc2245fe966c37a9", () => require("@emailjs/browser-fc2245fe966c37a9"));

module.exports = mod;
}),
"[project]/components/Contact/mailer.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emailjs$2f$browser__$5b$external$5d$__$2840$emailjs$2f$browser$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$29$__ = __turbopack_context__.i("[externals]/@emailjs/browser [external] (@emailjs/browser, cjs, [project]/node_modules/@emailjs/browser)");
;
const mail = ({ name, email, message })=>__TURBOPACK__imported__module__$5b$externals$5d2f40$emailjs$2f$browser__$5b$external$5d$__$2840$emailjs$2f$browser$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$29$__["default"].send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, {
        name,
        email,
        message
    }, {
        publicKey: process.env.NEXT_PUBLIC_USER_ID,
        limitRate: {
            throttle: 10000
        }
    });
const __TURBOPACK__default__export__ = mail;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1dreu8z9ce6u-._.js.map