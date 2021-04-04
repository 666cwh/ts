"use strict";
var compontent;
(function (compontent) {
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = 'Header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    compontent.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    compontent.Content = Content;
})(compontent || (compontent = {}));
/**
 * 命名空间(namespace):避免全局变量生成,类似模块化
 */
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            this.user = {
                name: 'cheng',
            };
            new compontent.Header();
            new compontent.Content();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
