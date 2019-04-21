webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var _Reposlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reposlist */ "./components/Reposlist.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\GithubClient-master\\GithubClient-master\\components\\User.js";




var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_1__["default"], {
    overlayStyle: {
      overflowY: 'hidden'
    },
    contentStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: '10px',
      backgroundColor: '#d3cce3',
      overflowY: 'scroll',
      height: '90vh',
      width: '80vw'
    },
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "userListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: props.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "userListInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, props.name, " (", props.login, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Location: ", props.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapperRepoFollow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "reposGists",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Public Repositories: ", props.repos), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Public Gists: ", props.gists)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "followingFollowers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Followers: ", props.followers), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Following: ", props.following))))),
    modal: true,
    closeOnDocumentClick: true,
    lockScroll: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Reposlist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: props.login,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

})
//# sourceMappingURL=index.js.2266cef8739d1936bfca.hot-update.js.map