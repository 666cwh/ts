define("component", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = 'Header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    exports.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    exports.Content = Content;
});
define("page", ["require", "exports", "component"], function (require, exports, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Page = /** @class */ (function () {
        function Page() {
            new component_1.Header();
            new component_1.Content();
        }
        return Page;
    }());
    exports.Page = Page;
});
