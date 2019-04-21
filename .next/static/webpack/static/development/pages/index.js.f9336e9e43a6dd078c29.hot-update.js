webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Reposlist.js":
/*!*********************************!*\
  !*** ./components/Reposlist.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var _hooks_useGithubReposFetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGithubReposFetcher */ "./hooks/useGithubReposFetcher.js");


var _jsxFileName = "C:\\Users\\User\\Desktop\\GithubClient-master\\GithubClient-master\\components\\Reposlist.js";






var ReposList = function ReposList(props) {
  var user = props.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useGithubReposFetche = Object(_hooks_useGithubReposFetcher__WEBPACK_IMPORTED_MODULE_5__["default"])(user, page),
      isLoading = _useGithubReposFetche.isLoading,
      data = _useGithubReposFetche.data,
      doFetch = _useGithubReposFetche.doFetch;

  var deBouncedScroll = debounced(500, handleScroll);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function getUserParentScroll(user) {
      var ourUser = document.getElementById(user);

      if (ourUser) {
        ourUser.parentNode.addEventListener('scroll', handleScroll);
      }
    }

    getUserParentScroll(user);
    return function () {
      return document.getElementById(user).parentNode.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  function handleScroll(e) {
    //if( e.target.offsetHeight + e.target.scrollTop !== e.target.scrollHeight) return;
    if (e.target.scrollTop >= e.target.scrollHeight - e.target.offsetHeight) {
      console.log('bottom');
      setPage(page + 1);
      doFetch("https://api.github.com/users/".concat(user, "/repos?sort=updated&type=owner&direction=desc&page=").concat(page, "&per_page=10"));
      console.log(page);
      console.log(user);
    }
  }

  function debounced(delay, fn) {
    var timerId;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(function () {
        fn.apply(void 0, args);
        timerId = null;
      }, delay);
    };
  }

  if (!data) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    id: user,
    className: "repoList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data).map(function (repo) {
    var myRepo = data[repo];
    var license = myRepo.license,
        id = myRepo.id,
        full_name = myRepo.full_name,
        description = myRepo.description,
        stargazers_count = myRepo.stargazers_count,
        watchers_count = myRepo.watchers_count,
        forks_count = myRepo.forks_count;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      id: id,
      name: full_name,
      description: description || "No Desciption",
      license: license && license.name ? license.name : "No License",
      stars: stargazers_count || "0",
      watchers: watchers_count || "0",
      forks: forks_count || "0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    });
  }), isLoading ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }) : ""));
};

/* harmony default export */ __webpack_exports__["default"] = (ReposList);

/***/ })

})
//# sourceMappingURL=index.js.f9336e9e43a6dd078c29.hot-update.js.map