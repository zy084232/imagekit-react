import React, { createContext, PureComponent } from 'react';
import PropTypes from 'prop-types';

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var version$1 = "1.4.3";
var errorMessages = {
  MANDATORY_INITIALIZATION_MISSING: {
    message: "Missing urlEndpoint during SDK initialization",
    help: ""
  },
  INVALID_TRANSFORMATION_POSITION: {
    message: "Invalid transformationPosition parameter",
    help: ""
  },
  PRIVATE_KEY_CLIENT_SIDE: {
    message: "privateKey should not be passed on the client side",
    help: ""
  },
  MISSING_UPLOAD_DATA: {
    message: "Missing data for upload",
    help: ""
  },
  MISSING_UPLOAD_FILE_PARAMETER: {
    message: "Missing file parameter for upload",
    help: ""
  },
  MISSING_UPLOAD_FILENAME_PARAMETER: {
    message: "Missing fileName parameter for upload",
    help: ""
  },
  MISSING_AUTHENTICATION_ENDPOINT: {
    message: "Missing authentication endpoint for upload",
    help: ""
  },
  MISSING_PUBLIC_KEY: {
    message: "Missing public key for upload",
    help: ""
  },
  AUTH_ENDPOINT_TIMEOUT: {
    message: "The authenticationEndpoint you provided timed out in 60 seconds",
    help: ""
  },
  AUTH_ENDPOINT_NETWORK_ERROR: {
    message: "Request to authenticationEndpoint failed due to network error",
    help: ""
  },
  UPLOAD_ENDPOINT_NETWORK_ERROR: {
    message: "Request to ImageKit upload endpoint failed due to network error",
    help: ""
  },
  INVALID_UPLOAD_OPTIONS: {
    message: "Invalid uploadOptions parameter",
    help: ""
  }
};

function respond(isError, response, callback) {
  if (typeof callback == "function") {
    if (isError) {
      callback(response, null);
    } else {
      callback(null, response);
    }
  }
}

var request = function request(formData, options, callback) {
  generateSignatureToken(options, function (err, signaturObj) {
    if (err) {
      return respond(true, err, callback);
    } else {
      formData.append("signature", (signaturObj === null || signaturObj === void 0 ? void 0 : signaturObj.signature) || "");
      formData.append("expire", String((signaturObj === null || signaturObj === void 0 ? void 0 : signaturObj.expire) || 0));
      formData.append("token", (signaturObj === null || signaturObj === void 0 ? void 0 : signaturObj.token) || "");
      uploadFile(formData, function (err, responseSucessText) {
        if (err) {
          return respond(true, err, callback);
        }

        return respond(false, responseSucessText, callback);
      });
    }
  });
};

var generateSignatureToken = function generateSignatureToken(options, callback) {
  var xhr = new XMLHttpRequest();
  xhr.timeout = 60000;
  xhr.open('GET', options.authenticationEndpoint);

  xhr.ontimeout = function (e) {
    respond(true, errorMessages.AUTH_ENDPOINT_TIMEOUT, callback);
  };

  xhr.onerror = function () {
    respond(true, errorMessages.AUTH_ENDPOINT_NETWORK_ERROR, callback);
  };

  xhr.onload = function () {
    if (xhr.status === 200) {
      try {
        var body = JSON.parse(xhr.responseText);
        var obj = {
          signature: body.signature,
          expire: body.expire,
          token: body.token
        };
        respond(false, obj, callback);
      } catch (ex) {
        respond(true, ex, callback);
      }
    } else {
      try {
        var error = JSON.parse(xhr.responseText);
        respond(true, error, callback);
      } catch (ex) {
        respond(true, ex, callback);
      }
    }
  };

  xhr.send();
  return;
};

var uploadFile = function uploadFile(formData, callback) {
  var uploadFileXHR = new XMLHttpRequest();
  uploadFileXHR.open('POST', 'https://upload.imagekit.io/api/v1/files/upload');

  uploadFileXHR.onerror = function () {
    respond(true, errorMessages.UPLOAD_ENDPOINT_NETWORK_ERROR, callback);
    return;
  };

  uploadFileXHR.onload = function () {
    if (uploadFileXHR.status === 200) {
      var uploadResponse = JSON.parse(uploadFileXHR.responseText);
      callback(null, uploadResponse);
    } else if (uploadFileXHR.status !== 200) {
      try {
        callback(JSON.parse(uploadFileXHR.responseText), null);
      } catch (ex) {
        callback(ex, null);
      }
    }
  };

  uploadFileXHR.send(formData);
  return;
};

var upload = function upload(uploadOptions, options, callback) {
  if (!uploadOptions) {
    respond(true, errorMessages.INVALID_UPLOAD_OPTIONS, callback);
    return;
  }

  if (!uploadOptions.file) {
    respond(true, errorMessages.MISSING_UPLOAD_FILE_PARAMETER, callback);
    return;
  }

  if (!uploadOptions.fileName) {
    respond(true, errorMessages.MISSING_UPLOAD_FILENAME_PARAMETER, callback);
    return;
  }

  if (!options.authenticationEndpoint) {
    respond(true, errorMessages.MISSING_AUTHENTICATION_ENDPOINT, callback);
    return;
  }

  if (!options.publicKey) {
    respond(true, errorMessages.MISSING_PUBLIC_KEY, callback);
    return;
  }

  if (uploadOptions.tags && Array.isArray(uploadOptions.tags)) {
    uploadOptions.tags = String(uploadOptions.tags);
  }

  var formData = new FormData();
  var i;

  for (i in uploadOptions) {
    var param = uploadOptions[i];

    if (typeof param !== "undefined") {
      if (typeof param === "string" || typeof param === "boolean") {
        formData.append(i, String(param));
      } else if (Array.isArray(param)) {
        formData.append(i, JSON.stringify(param));
      } else {
        formData.append(i, param);
      }
    }
  }

  formData.append("publicKey", options.publicKey);
  request(formData, _objectSpread2(_objectSpread2({}, options), {}, {
    authenticationEndpoint: options.authenticationEndpoint
  }), callback);
};

var supportedTransforms = {
  width: "w",
  height: "h",
  aspectRatio: "ar",
  quality: "q",
  crop: "c",
  cropMode: "cm",
  focus: "fo",
  x: "x",
  y: "y",
  format: "f",
  radius: "r",
  background: "bg",
  border: "b",
  rotation: "rt",
  rotate: "rt",
  blur: "bl",
  named: "n",
  overlayImage: "oi",
  overlayImageAspectRatio: "oiar",
  overlayImageBackground: "oibg",
  overlayImageBorder: "oib",
  overlayImageDPR: "oidpr",
  overlayImageQuality: "oiq",
  overlayImageCropping: "oic",
  overlayImageTrim: "oit",
  overlayX: "ox",
  overlayY: "oy",
  overlayFocus: "ofo",
  overlayHeight: "oh",
  overlayWidth: "ow",
  overlayText: "ot",
  overlayTextFontSize: "ots",
  overlayTextFontFamily: "otf",
  overlayTextColor: "otc",
  overlayTextTransparency: "oa",
  overlayAlpha: "oa",
  overlayTextTypography: "ott",
  overlayBackground: "obg",
  overlayTextEncoded: "ote",
  overlayTextWidth: "otw",
  overlayTextBackground: "otbg",
  overlayTextPadding: "otp",
  overlayTextInnerAlignment: "otia",
  overlayRadius: "or",
  progressive: "pr",
  lossless: "lo",
  trim: "t",
  metadata: "md",
  colorProfile: "cp",
  defaultImage: "di",
  dpr: "dpr",
  effectSharpen: "e-sharpen",
  effectUSM: "e-usm",
  effectContrast: "e-contrast",
  effectGray: "e-grayscale",
  original: "orig"
};
var DEFAULT_TRANSFORMATION_POSITION = "path";
var QUERY_TRANSFORMATION_POSITION = "query";
var VALID_TRANSFORMATION_POSITIONS = [DEFAULT_TRANSFORMATION_POSITION, QUERY_TRANSFORMATION_POSITION];
var CHAIN_TRANSFORM_DELIMITER = ":";
var TRANSFORM_DELIMITER = ",";
var TRANSFORM_KEY_VALUE_DELIMITER = "-";
var transformationUtils = {
  getDefault: function getDefault() {
    return DEFAULT_TRANSFORMATION_POSITION;
  },
  addAsQueryParameter: function addAsQueryParameter(options) {
    return options.transformationPosition === QUERY_TRANSFORMATION_POSITION;
  },
  validParameters: function validParameters(options) {
    if (typeof options.transformationPosition == "undefined") return false;
    return VALID_TRANSFORMATION_POSITIONS.indexOf(options.transformationPosition) != -1;
  },
  getTransformKey: function getTransformKey(transform) {
    if (!transform) {
      return "";
    }

    return supportedTransforms[transform] || supportedTransforms[transform.toLowerCase()] || "";
  },
  getChainTransformDelimiter: function getChainTransformDelimiter() {
    return CHAIN_TRANSFORM_DELIMITER;
  },
  getTransformDelimiter: function getTransformDelimiter() {
    return TRANSFORM_DELIMITER;
  },
  getTransformKeyValueDelimiter: function getTransformKeyValueDelimiter() {
    return TRANSFORM_KEY_VALUE_DELIMITER;
  }
};
var TRANSFORMATION_PARAMETER = "tr";

function removeTrailingSlash(str) {
  if (typeof str == "string" && str[str.length - 1] == "/") {
    str = str.substring(0, str.length - 1);
  }

  return str;
}

function removeLeadingSlash(str) {
  if (typeof str == "string" && str[0] == "/") {
    str = str.slice(1);
  }

  return str;
}

function pathJoin(parts, sep) {
  var separator = sep || "/";
  var replace = new RegExp(separator + "{1,}", "g");
  return parts.join(separator).replace(replace, separator);
}

var buildURL = function buildURL(opts) {
  if (!opts.path && !opts.src) {
    return "";
  }

  var urlObj, isSrcParameterUsedForURL, urlEndpointPattern;

  try {
    if (opts.path) {
      urlEndpointPattern = new URL(opts.urlEndpoint).pathname;
      urlObj = new URL(pathJoin([opts.urlEndpoint.replace(urlEndpointPattern, ""), opts.path]));
    } else {
      urlObj = new URL(opts.src);
      isSrcParameterUsedForURL = true;
    }
  } catch (e) {
    console.error(e);
    return "";
  }

  if (opts.sdkVersion && opts.sdkVersion.trim() != "") {
    urlObj.searchParams.append("ik-sdk-version", opts.sdkVersion.trim());
  }

  for (var i in opts.queryParameters) {
    urlObj.searchParams.append(i, String(opts.queryParameters[i]));
  }

  var transformationString = constructTransformationString(opts.transformation);

  if (transformationString && transformationString.length) {
    if (transformationUtils.addAsQueryParameter(opts) || isSrcParameterUsedForURL) {
      urlObj.searchParams.append(TRANSFORMATION_PARAMETER, transformationString);
    } else {
      urlObj.pathname = pathJoin([TRANSFORMATION_PARAMETER + transformationUtils.getChainTransformDelimiter() + transformationString, urlObj.pathname]);
    }
  }

  if (urlEndpointPattern) {
    urlObj.pathname = pathJoin([urlEndpointPattern, urlObj.pathname]);
  } else {
    urlObj.pathname = pathJoin([urlObj.pathname]);
  }

  return urlObj.href;
};

function constructTransformationString(transformation) {
  if (!Array.isArray(transformation)) {
    return "";
  }

  var parsedTransforms = [];

  for (var i = 0, l = transformation.length; i < l; i++) {
    var parsedTransformStep = [];

    for (var key in transformation[i]) {
      var transformKey = transformationUtils.getTransformKey(key);

      if (!transformKey) {
        transformKey = key;
      }

      if (transformation[i][key] === "-") {
        parsedTransformStep.push(transformKey);
      } else if (key === "raw") {
        parsedTransformStep.push(transformation[i][key]);
      } else {
        var value = transformation[i][key];

        if (transformKey === "oi" || transformKey === "di") {
          value = removeTrailingSlash(removeLeadingSlash(value || ""));
          value = value.replace(/\//g, "@@");
        }

        parsedTransformStep.push([transformKey, value].join(transformationUtils.getTransformKeyValueDelimiter()));
      }
    }

    parsedTransforms.push(parsedTransformStep.join(transformationUtils.getTransformDelimiter()));
  }

  return parsedTransforms.join(transformationUtils.getChainTransformDelimiter());
}

var url = function url(urlOpts, defaultOptions) {
  return buildURL(_objectSpread2(_objectSpread2({}, defaultOptions), urlOpts));
};

function mandatoryParametersAvailable(options) {
  return options.urlEndpoint;
}

function privateKeyPassed(options) {
  return typeof options.privateKey != "undefined";
}

var ImageKit = function () {
  function ImageKit(opts) {
    _classCallCheck(this, ImageKit);

    _defineProperty(this, "options", {
      sdkVersion: "javascript-".concat(version$1),
      publicKey: "",
      urlEndpoint: "",
      transformationPosition: transformationUtils.getDefault()
    });

    this.options = _objectSpread2(_objectSpread2({}, this.options), opts || {});

    if (!mandatoryParametersAvailable(this.options)) {
      throw errorMessages.MANDATORY_INITIALIZATION_MISSING;
    }

    if (privateKeyPassed(this.options)) {
      throw errorMessages.PRIVATE_KEY_CLIENT_SIDE;
    }

    if (!transformationUtils.validParameters(this.options)) {
      throw errorMessages.INVALID_TRANSFORMATION_POSITION;
    }
  }

  _createClass(ImageKit, [{
    key: "url",
    value: function url$1(urlOptions) {
      return url(urlOptions, this.options);
    }
  }, {
    key: "upload",
    value: function upload$1(uploadOptions, callback, options) {
      var mergedOptions = _objectSpread2(_objectSpread2({}, this.options), options);

      return upload(uploadOptions, mergedOptions, callback);
    }
  }]);

  return ImageKit;
}();

var ImageKitContextType = /*#__PURE__*/createContext();

var name = "imagekitio-react";
var version = "1.1.1";
var description = "React SDK for ImageKit.io which implements client-side upload and URL generation for use inside a react application.";
var scripts = {
	build: "rm -rf dist*;rollup -c",
	test: "jest",
	"test:ci": "jest --coverage && codecov",
	"test:cov": "jest --coverage",
	"test:e2e": "cypress open",
	"test:watch": "jest --watch",
	"serve:test-app": "export SKIP_PREFLIGHT_CHECK=true;npx serve -s tests/test-app/build -p 4000"
};
var repository = {
	type: "git",
	url: "https://github.com/imagekit-developer/imagekit-react"
};
var main = "dist/imagekitio-react.js";
var module = "dist/imagekitio-react.esm.js";
var browser = "dist/imagekitio-react.umd.js";
var files = [
	"dist",
	"src"
];
var jest = {
	verbose: true,
	setupFilesAfterEnv: [
		"<rootDir>/tests/jest/setupTests.js"
	],
	coveragePathIgnorePatterns: [
		"<rootDir>/tests/jest/mocks"
	],
	modulePathIgnorePatterns: [
		"<rootDir>/tests/cypress/"
	]
};
var author = "ImageKit";
var license = "MIT";
var devDependencies = {
	"@babel/cli": "^7.7.4",
	"@babel/core": "^7.7.4",
	"@babel/plugin-proposal-class-properties": "^7.7.4",
	"@babel/plugin-proposal-export-default-from": "^7.7.4",
	"@babel/preset-env": "^7.7.4",
	"@babel/preset-react": "^7.7.4",
	"@babel/register": "^7.7.4",
	"@babel/runtime": "^7.7.6",
	"@rollup/plugin-babel": "^5.2.1",
	"@rollup/plugin-commonjs": "^15.1.0",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-replace": "^2.3.3",
	"babel-loader": "^8.0.6",
	codecov: "^3.8.0",
	cypress: "^5.6.0",
	enzyme: "^3.11.0",
	"enzyme-adapter-react-16": "^1.15.5",
	jest: "^26.5.2",
	react: "^16.13.1",
	"react-dom": "^16.13.1",
	"react-test-renderer": "^16.13.1",
	"require-context.macro": "^1.2.2",
	rollup: "^2.28.2",
	"rollup-plugin-node-resolve": "^5.2.0",
	"rollup-plugin-peer-deps-external": "^2.2.3",
	"rollup-plugin-terser": "^7.0.2",
	sinon: "^9.2.0"
};
var dependencies = {
	"imagekit-javascript": "^1.3.6",
	"prop-types": "^15.7.2"
};
var peerDependencies = {
	react: "^16.13.1 || ^17.0.0 || ^18.0.0",
	"react-dom": "^16.13.1 || ^17.0.0 || ^18.0.0"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	scripts: scripts,
	repository: repository,
	main: main,
	module: module,
	browser: browser,
	"browser:min": "dist/imagekitio-react.umd.min.js",
	files: files,
	jest: jest,
	author: author,
	license: license,
	devDependencies: devDependencies,
	dependencies: dependencies,
	peerDependencies: peerDependencies
};

var ImageKitComponent = /*#__PURE__*/function (_PureComponent) {
  _inherits(ImageKitComponent, _PureComponent);

  var _super = _createSuper(ImageKitComponent);

  function ImageKitComponent(props, context) {
    var _this;

    _classCallCheck$1(this, ImageKitComponent);

    _this = _super.call(this, props, context);
    _this.getContext = _this.getContext.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass$1(ImageKitComponent, [{
    key: "getVersion",
    value: function getVersion() {
      return pkg.version;
    }
  }, {
    key: "getContext",
    value: function getContext() {
      return this.context || {};
    }
  }, {
    key: "getIKClient",
    value: function getIKClient() {
      var contextOptions = this.getContext();

      if (contextOptions.ikClient) {
        return contextOptions.ikClient;
      }

      var urlEndpoint = this.props.urlEndpoint;
      urlEndpoint = urlEndpoint || contextOptions.urlEndpoint;

      if (!urlEndpoint || urlEndpoint.trim() === "") {
        throw new Error("Missing urlEndpoint during initialization");
      }

      var ikClient = new ImageKit({
        sdkVersion: "react-".concat(this.getVersion()),
        urlEndpoint: urlEndpoint
      });
      return ikClient;
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ImageKitComponent;
}(PureComponent);

ImageKitComponent.contextType = ImageKitContextType;

var COMMON_PROPS = {
  publicKey: PropTypes.string,
  urlEndpoint: PropTypes.string,
  authenticationEndpoint: PropTypes.string
};

var IK_IMAGE_PROPS = {
  loading: PropTypes.oneOf(['lazy']),
  lqip: PropTypes.object,
  path: PropTypes.string,
  src: PropTypes.string,
  queryParameters: PropTypes.object,
  transformation: PropTypes.arrayOf(PropTypes.object),
  transformationPosition: PropTypes.oneOf(['path', 'query'])
};

var IK_UPLOAD_PROPS = {
  fileName: PropTypes.string,
  tags: PropTypes.array,
  useUniqueFileName: PropTypes.bool,
  responseFields: PropTypes.array,
  isPrivateFile: PropTypes.bool,
  folder: PropTypes.string,
  customCoordinates: PropTypes.string,
  onError: PropTypes.func,
  onSuccess: PropTypes.func
};

var PROP_TYPES$2 = _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, COMMON_PROPS), IK_IMAGE_PROPS), IK_UPLOAD_PROPS);
/**
 * Provides a container for ImageKit components. Any option set in IKContext will be passed to the children.
 *
 * @example
 *<IKContext  publicKey="<public key>" urlEndpoint="url link">
 *    <!-- other tags -->
 *    <Image src={link}/>
 *</IKContext>
 */


var IKContext = /*#__PURE__*/function (_ImageKitComponent) {
  _inherits(IKContext, _ImageKitComponent);

  var _super = _createSuper(IKContext);

  function IKContext() {
    _classCallCheck$1(this, IKContext);

    return _super.apply(this, arguments);
  }

  _createClass$1(IKContext, [{
    key: "extractContextOptions",
    value: function extractContextOptions(mergedOptions) {
      var result = {};
      var propKeys = Object.keys(PROP_TYPES$2);

      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var value = mergedOptions[key];
        if (value) result[key] = value;
      }

      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      var mergedOptions = _objectSpread2$1(_objectSpread2$1({}, this.getContext()), this.props);

      var contextOptions = this.extractContextOptions(mergedOptions);

      if (contextOptions.urlEndpoint && contextOptions.urlEndpoint.trim() !== "") {
        contextOptions.ikClient = new ImageKit({
          sdkVersion: "react-".concat(this.getVersion()),
          urlEndpoint: contextOptions.urlEndpoint
        });
      }

      return /*#__PURE__*/React.createElement(ImageKitContextType.Provider, {
        value: contextOptions
      }, children);
    }
  }]);

  return IKContext;
}(ImageKitComponent);

IKContext.propTypes = PROP_TYPES$2;
IKContext.contextType = ImageKitContextType;

var _excluded$1 = ["urlEndpoint", "loading", "lqip", "path", "src", "transformation", "transformationPosition", "queryParameters"];

var PROP_TYPES$1 = _objectSpread2$1(_objectSpread2$1({}, COMMON_PROPS), IK_IMAGE_PROPS);

var propsAffectingURL = ["urlEndpoint", "path", "src", "transformation", "transformationPosition", "queryParameters"];

var IKImage = /*#__PURE__*/function (_ImageKitComponent) {
  _inherits(IKImage, _ImageKitComponent);

  var _super = _createSuper(IKImage);

  function IKImage(props, context) {
    var _this;

    _classCallCheck$1(this, IKImage);

    _this = _super.call(this, props, context);
    _this.imageRef = /*#__PURE__*/React.createRef();

    var _this$getSrc = _this.getSrc(),
        originalSrc = _this$getSrc.originalSrc,
        lqipSrc = _this$getSrc.lqipSrc;

    _this.state = {
      currentUrl: undefined,
      originalSrc: originalSrc,
      lqipSrc: lqipSrc,
      originalSrcLoaded: false,
      intersected: false,
      contextOptions: {}
    };
    return _this;
  }

  _createClass$1(IKImage, [{
    key: "getSrc",
    value: function getSrc() {
      var result = {};
      var _this$props = this.props,
          lqip = _this$props.lqip,
          src = _this$props.src,
          path = _this$props.path,
          transformation = _this$props.transformation,
          transformationPosition = _this$props.transformationPosition,
          queryParameters = _this$props.queryParameters;
      var ikClient = this.getIKClient();
      var contextOptions = this.getContext();
      var options = {
        urlEndpoint: this.props.urlEndpoint || contextOptions.urlEndpoint,
        src: src || contextOptions.src,
        path: path || contextOptions.path,
        transformation: transformation || contextOptions.transformation,
        transformationPosition: transformationPosition || contextOptions.transformationPosition,
        queryParameters: queryParameters || contextOptions.queryParameters
      };
      result.originalSrc = ikClient.url(options);

      if (lqip && lqip.active) {
        var quality = parseInt(lqip.quality || lqip.threshold, 10) || 20;
        var blur = parseInt(lqip.blur || lqip.blur, 10) || 6;
        var newTransformation = options.transformation ? _toConsumableArray(options.transformation) : [];

        if (lqip.raw && typeof lqip.raw === "string" && lqip.raw.trim() != "") {
          newTransformation.push({
            raw: lqip.raw.trim()
          });
        } else {
          newTransformation.push({
            quality: quality,
            blur: blur
          });
        }

        result.lqipSrc = ikClient.url(_objectSpread2$1(_objectSpread2$1({}, options), {}, {
          transformation: newTransformation
        }));
      }

      return result;
    }
  }, {
    key: "getEffectiveConnection",
    value: function getEffectiveConnection() {
      try {
        return navigator.connection.effectiveType;
      } catch (ex) {
        return "4g";
      }
    }
  }, {
    key: "updateImageUrl",
    value: function updateImageUrl() {
      /*
        No lazy loading no lqip
          src=originalImage
        No lazy loading lqip
          src=lqip
          src=originalImage (when loaded)
        lazy loading and no lqip
          src=''
          onIntersect:
          src=originalImage
        lazy loading and lqip
          src=lqip
          onIntersect:
          src=originalImage (when loaded)
      */
      var _this$state = this.state,
          intersected = _this$state.intersected,
          originalSrcLoaded = _this$state.originalSrcLoaded;
      var _this$props2 = this.props,
          _this$props2$lqip = _this$props2.lqip,
          lqip = _this$props2$lqip === void 0 ? null : _this$props2$lqip,
          loading = _this$props2.loading;

      if (loading !== "lazy" && lqip === null) {
        this.setState({
          currentUrl: this.state.originalSrc
        });
      } else if (loading !== "lazy" && lqip && lqip.active) {
        if (originalSrcLoaded) {
          this.setState({
            currentUrl: this.state.originalSrc
          });
        } else {
          this.setState({
            currentUrl: this.state.lqipSrc
          });
        }
      } else if (loading === "lazy" && lqip === null) {
        if (intersected) {
          this.setState({
            currentUrl: this.state.originalSrc
          });
        } else {
          this.setState({
            currentUrl: ""
          });
        }
      } else if (loading === "lazy" && lqip && lqip.active) {
        if (intersected && originalSrcLoaded) {
          this.setState({
            currentUrl: this.state.originalSrc
          });
        } else {
          this.setState({
            currentUrl: this.state.lqipSrc
          });
        }
      }
    }
  }, {
    key: "triggerOriginalImageLoad",
    value: function triggerOriginalImageLoad() {
      var _this2 = this;

      var img = new Image();

      img.onload = function () {
        _this2.setState({
          originalSrcLoaded: true
        }, function () {
          _this2.updateImageUrl();
        });
      };

      img.src = this.state.originalSrc;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.updateImageUrl();
      this.setState({
        contextOptions: this.getContext()
      });
      var image = this.imageRef.current;
      var _this$props3 = this.props,
          lqip = _this$props3.lqip,
          loading = _this$props3.loading;

      if (window && 'IntersectionObserver' in window && loading === "lazy") {
        var connectionType = this.getEffectiveConnection(); // Values based on native lazy loading in Chrome - https://web.dev/native-lazy-loading/#improved-data-savings-and-distance-from-viewport-thresholds

        var rootMargin = "1250px";
        if (connectionType !== "4g") rootMargin = "2500px";
        var imageObserver = new IntersectionObserver(function (entries) {
          var el = entries[0];

          if (el && el.isIntersecting) {
            _this3.setState({
              intersected: true
            }, function () {
              if (lqip && lqip.active) _this3.triggerOriginalImageLoad();
              imageObserver.disconnect();

              _this3.updateImageUrl();
            });
          }
        }, {
          rootMargin: "".concat(rootMargin, " 0px ").concat(rootMargin, " 0px")
        });
        imageObserver.observe(image);
        this.setState({
          observe: imageObserver
        });
      } else {
        // Load original image right away
        this.setState({
          intersected: true
        }, function () {
          if (lqip && lqip.active) _this3.triggerOriginalImageLoad();

          _this3.updateImageUrl();
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var observe = this.state.observe;
      if (observe) observe.disconnect();
    }
  }, {
    key: "areObjectsDifferent",
    value: function areObjectsDifferent(prevProps, newProps) {
      for (var index = 0; index < propsAffectingURL.length; index++) {
        if (prevProps[propsAffectingURL[index]] != newProps[propsAffectingURL[index]]) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this4 = this;

      var contextOptions = this.getContext();

      if (this.areObjectsDifferent(prevProps, this.props) || this.areObjectsDifferent(prevState.contextOptions, contextOptions)) {
        var _this$getSrc2 = this.getSrc(),
            originalSrc = _this$getSrc2.originalSrc,
            lqipSrc = _this$getSrc2.lqipSrc;

        this.setState({
          originalSrc: originalSrc,
          lqipSrc: lqipSrc
        }, function () {
          _this4.updateImageUrl();

          _this4.setState({
            contextOptions: _this4.getContext()
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var currentUrl = this.state.currentUrl;

      var _this$props4 = this.props;
          _this$props4.urlEndpoint;
          _this$props4.loading;
          _this$props4.lqip;
          _this$props4.path;
          _this$props4.src;
          _this$props4.transformation;
          _this$props4.transformationPosition;
          _this$props4.queryParameters;
          var restProps = _objectWithoutProperties(_this$props4, _excluded$1);

      return /*#__PURE__*/React.createElement("img", _extends({
        alt: this.props.alt || "",
        src: currentUrl,
        ref: this.imageRef
      }, restProps));
    }
  }]);

  return IKImage;
}(ImageKitComponent);

IKImage.propTypes = PROP_TYPES$1;

var _excluded = ["publicKey", "urlEndpoint", "authenticationEndpoint", "fileName", "useUniqueFileName", "tags", "folder", "isPrivateFile", "customCoordinates", "responseFields", "onError", "onSuccess"];

var PROP_TYPES = _objectSpread2$1(_objectSpread2$1({}, COMMON_PROPS), IK_UPLOAD_PROPS);

var IKUpload = /*#__PURE__*/function (_ImageKitComponent) {
  _inherits(IKUpload, _ImageKitComponent);

  var _super = _createSuper(IKUpload);

  function IKUpload() {
    _classCallCheck$1(this, IKUpload);

    return _super.apply(this, arguments);
  }

  _createClass$1(IKUpload, [{
    key: "uploadFile",
    value: function uploadFile(e) {
      var contextOptions = this.getContext();
      var _this$props = this.props,
          fileName = _this$props.fileName,
          useUniqueFileName = _this$props.useUniqueFileName,
          tags = _this$props.tags,
          folder = _this$props.folder,
          isPrivateFile = _this$props.isPrivateFile,
          customCoordinates = _this$props.customCoordinates,
          responseFields = _this$props.responseFields,
          onError = _this$props.onError,
          onSuccess = _this$props.onSuccess;
      var publicKey = this.props.publicKey || contextOptions.publicKey;
      var authenticationEndpoint = this.props.authenticationEndpoint || contextOptions.authenticationEndpoint;
      var urlEndpoint = this.props.urlEndpoint || contextOptions.urlEndpoint;

      if (!publicKey || publicKey.trim() === "") {
        if (onError && typeof onError === "function") {
          onError({
            message: "Missing publicKey"
          });
        }

        return;
      }

      if (!authenticationEndpoint || authenticationEndpoint.trim() === "") {
        if (onError && typeof onError === "function") {
          onError({
            message: "Missing authenticationEndpoint"
          });
        }

        return;
      }

      if (!urlEndpoint || urlEndpoint.trim() === "") {
        if (onError && typeof onError === "function") {
          onError({
            message: "Missing urlEndpoint"
          });
        }

        return;
      }

      var ikClient = this.getIKClient();
      var file = e.target.files[0];
      var params = {
        file: file,
        fileName: fileName || file.name,
        useUniqueFileName: useUniqueFileName,
        tags: tags,
        folder: folder,
        isPrivateFile: isPrivateFile,
        customCoordinates: customCoordinates,
        responseFields: responseFields
      };
      ikClient.upload(params, function (err, result) {
        if (err) {
          if (onError && typeof onError === "function") {
            onError(err);
          }
        } else {
          if (onSuccess && typeof onSuccess === "function") {
            onSuccess(result);
          }
        }
      }, {
        publicKey: publicKey,
        authenticationEndpoint: authenticationEndpoint
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props;
          _this$props2.publicKey;
          _this$props2.urlEndpoint;
          _this$props2.authenticationEndpoint;
          _this$props2.fileName;
          _this$props2.useUniqueFileName;
          _this$props2.tags;
          _this$props2.folder;
          _this$props2.isPrivateFile;
          _this$props2.customCoordinates;
          _this$props2.responseFields;
          _this$props2.onError;
          _this$props2.onSuccess;
          var restProps = _objectWithoutProperties(_this$props2, _excluded);

      return /*#__PURE__*/React.createElement("input", _extends({
        type: "file"
      }, restProps, {
        onChange: function onChange(e) {
          if (_this.props.onChange && typeof _this.props.onChange === "function") {
            _this.props.onChange(e);
          }

          _this.uploadFile(e);
        }
      }));
    }
  }]);

  return IKUpload;
}(ImageKitComponent);
IKUpload.defaultProps = {
  useUniqueFileName: true,
  isPrivateFile: false,
  customCoordinates: "",
  tags: [],
  folder: "/",
  responseFields: []
};
IKUpload.propTypes = PROP_TYPES;

export { IKContext, IKImage, IKUpload, ImageKitComponent };
