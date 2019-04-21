webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/List.js":
false,

/***/ "./components/UserList.js":
/*!********************************!*\
  !*** ./components/UserList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useGithubListFetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useGithubListFetcher */ "./hooks/useGithubListFetcher.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Loader */ "./components/Loader.js");
/* harmony import */ var _helperFuncs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helperFuncs */ "./helperFuncs.js");


var _jsxFileName = "C:\\Users\\User\\Desktop\\GithubClient-master\\GithubClient-master\\components\\UserList.js";








var UserList = function UserList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useGithubListFetcher = Object(_hooks_useGithubListFetcher__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      isLoading = _useGithubListFetcher.isLoading,
      data = _useGithubListFetcher.data,
      doFetch = _useGithubListFetcher.doFetch;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var debouncedScroll = Object(_helperFuncs__WEBPACK_IMPORTED_MODULE_7__["debounced"])(600, handleScroll);
    window.addEventListener('scroll', debouncedScroll);
    return function () {
      return window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScroll]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setPage(page + 1);
    doFetch("https://api.github.com/search/users?q=language:javascript+type:user&sort=followers&order=desc&page=".concat(page, "&per_page=10"));
  }

  console.log(page);

  if (!data) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "userList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data).map(function (user) {
    var myUser = data[user];
    var id = myUser.id,
        avatar_url = myUser.avatar_url,
        name = myUser.name,
        login = myUser.login,
        location = myUser.location,
        public_repos = myUser.public_repos,
        public_gists = myUser.public_gists,
        followers = myUser.followers,
        following = myUser.following;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: login,
      url: avatar_url,
      name: name,
      login: login,
      location: location && location.length > 100 ? "Troll Location" : location,
      repos: public_repos,
      gists: public_gists,
      followers: followers,
      following: following,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    });
  })), isLoading ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }) : "");
};

/* harmony default export */ __webpack_exports__["default"] = (UserList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UserList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserList */ "./components/UserList.js");
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageLayout */ "./components/PageLayout.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\GithubClient-master\\GithubClient-master\\pages\\index.js";





var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PageLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.bc5321f179048da0ed24.hot-update.js.map