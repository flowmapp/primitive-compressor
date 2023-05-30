var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// const/keyMapping.js
var require_keyMapping = __commonJS({
  "const/keyMapping.js"(exports2, module2) {
    var mapping = {
      backgroundColor: "bc",
      borderRadius: "br",
      color: "c",
      desktopPosition: "dp",
      fileId: "fId",
      fontWeight: "fw",
      icon: "i",
      placeholder: "ph",
      sitemapPageId: "spId",
      size: "s",
      state: "st",
      title: "t"
    };
    module2.exports = mapping;
    module2.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]));
  }
});

// const/valueMapping/color.js
var require_color = __commonJS({
  "const/valueMapping/color.js"(exports2, module2) {
    var mapping = {
      primary: 0,
      surfaceVariant: 1
    };
    module2.exports = mapping;
    module2.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]));
  }
});

// const/valueMapping/fontWeight.js
var require_fontWeight = __commonJS({
  "const/valueMapping/fontWeight.js"(exports2, module2) {
    var mapping = {
      500: 5,
      600: 6,
      700: 7,
      800: 8
    };
    module2.exports = mapping;
    module2.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]));
  }
});

// const/valueMapping/icon.js
var require_icon = __commonJS({
  "const/valueMapping/icon.js"(exports2, module2) {
    var mapping = {
      "System/union": 0
    };
    module2.exports = mapping;
    module2.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]));
  }
});

// const/valueMapping/size.js
var require_size = __commonJS({
  "const/valueMapping/size.js"(exports2, module2) {
    var mapping = {
      xs: 9,
      s: 10,
      m: 20,
      l: 30,
      xl: 31
    };
    module2.exports = mapping;
    module2.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]));
  }
});

// const/valueMapping/index.js
var require_valueMapping = __commonJS({
  "const/valueMapping/index.js"(exports2, module2) {
    var mapping = {
      color: require_color(),
      fontWeight: require_fontWeight(),
      icon: require_icon(),
      size: require_size()
    };
    module2.exports = mapping;
    module2.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]));
  }
});

// const/defaultValues.js
var require_defaultValues = __commonJS({
  "const/defaultValues.js"(exports2, module2) {
    module2.exports = {
      button: { backgroundColor: "black", borderRadius: 0, state: "normal", icon: null },
      text: { size: "m", fontWeight: 500, color: "#000" },
      image: { opacity: 1 },
      input: { placeholder: "Search" }
    };
  }
});

// compress.js
var require_compress = __commonJS({
  "compress.js"(exports2, module2) {
    var keyMapping = require_keyMapping();
    var valueMapping = require_valueMapping();
    var defaultValues = require_defaultValues();
    module2.exports = (_primitive) => {
      const primitive = JSON.parse(JSON.stringify(_primitive));
      const { settings, type } = primitive;
      Object.entries(settings).forEach(([_key, _value]) => {
        if (typeof _value === "undefined" || _value?.length === 0) {
          delete settings[_key];
          return;
        }
        if (defaultValues[type][_key] === _value) {
          delete settings[_key];
          return;
        }
        let value = valueMapping[_key] ? valueMapping[_key][_value] : _value;
        if (typeof value === "undefined") {
          throw new Error(`Unknown ${_key} ${_value}`);
        }
        settings[_key] = value;
        if (_key === "title") {
          value = value.replace(/[\n]+$/, "");
        }
        const key = keyMapping[_key];
        if (key) {
          settings[key] = value;
          delete settings[_key];
        }
      });
      return primitive;
    };
  }
});

// decompress.js
var require_decompress = __commonJS({
  "decompress.js"(exports2, module2) {
    var keyMapping = require_keyMapping();
    var valueMapping = require_valueMapping();
    var defaultValues = require_defaultValues();
    module2.exports = (_primitive) => {
      const primitive = JSON.parse(JSON.stringify(_primitive));
      const { settings: compressedSettings, type } = primitive;
      const settings = {};
      Object.entries(compressedSettings).forEach(([_key, _value]) => {
        const key = keyMapping.reverse[_key] || _key;
        const value = valueMapping.reverse[_key]?.[_value] || _value;
        settings[key] = _value;
      });
      const defaults = defaultValues[type] || {};
      primitive.settings = { ...defaults, ...settings };
      return primitive;
    };
  }
});

// index.js
module.exports = {
  compress: require_compress(),
  decompress: require_decompress()
};
