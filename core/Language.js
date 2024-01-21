//https://www.cnblogs.com/morango/p/15185442.html
export const getBrowserLang = function () {
    let browserLang = navigator.language
        ? navigator.language
        : navigator.browserLanguage;
    let defaultBrowserLang = "";
    if (
        browserLang.toLowerCase() === "us" ||
        browserLang.toLowerCase() === "en" ||
        browserLang.toLowerCase() === "en_us"
    ) {
        defaultBrowserLang = "en_US";
    } else {
        defaultBrowserLang = "zh_CN";
    }
    return defaultBrowserLang;
};