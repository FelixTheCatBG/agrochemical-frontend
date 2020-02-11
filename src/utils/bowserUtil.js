import Bowser from "bowser";


/**
    Checks:

    mobile: ${browser.mobile}
    tablet: ${browser.tablet}
    desktop: ${browser.desktop}

    windows: ${browser.windows}
    android: ${browser.android}
    macOS: ${browser.macOS}
    ios: ${browser.ios}

    chrome: ${browser.chrome}
    edge: ${browser.edge}
    firefox: ${browser.firefox}
    IE: ${browser.IE}
    safari: ${browser.safari}
 */

class BrowserUtil {
    constructor () {

        this.browser = Bowser.getParser(window.navigator.userAgent);

        // Device Type
        this.mobile = this.browser.getPlatformType() === "mobile";

        this.tablet = this.browser.getPlatformType() === "tablet";

        this.desktop = this.browser.getPlatformType() === "desktop";

        // Operating Systems
        this.android = this.browser.getOSName() === "Android";

        this.windows = this.browser.getOSName() === "Windows";

        this.macOS = this.browser.getOSName() === "macOS"; // for MAC-s

        this.ios = this.browser.getOSName() === "iOS"; // For Mobile devices

        // Browsers
        this.chrome = this.browser.getBrowserName() === "Chrome";

        this.firefox = this.browser.getBrowserName() === "Firefox";

        this.safari = this.browser.getBrowserName() === "Safari";

        this.IE = this.browser.getBrowserName() === "Internet Explorer";

        this.edge = this.browser.getBrowserName() === "Edge";
    }
}

const browser = new BrowserUtil();

export default browser;