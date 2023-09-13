let cheerio = require('cheerio');

let attrs = [
  'accept',
  'acceptCharset',
  'accessKey',
  'action',
  'allowFullScreen',
  'allowTransparency',
  'alt',
  'async',
  'autoComplete',
  'autoFocus',
  'autoPlay',
  'capture',
  'cellPadding',
  'cellSpacing',
  'charSet',
  'challenge',
  'checked',
  'classID',
  'className',
  'cols',
  'colSpan',
  'content',
  'contentEditable',
  'contextMenu',
  'controls',
  'coords',
  'crossOrigin',
  'data',
  'dateTime',
  'defer',
  'dir',
  'disabled',
  'download',
  'draggable',
  'encType',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'frameBorder',
  'headers',
  'height',
  'hidden',
  'high',
  'href',
  'hrefLang',
  'htmlFor',
  'httpEquiv',
  'icon',
  'id',
  'inputMode',
  'keyParams',
  'keyType',
  'label',
  'lang',
  'list',
  'loop',
  'low',
  'manifest',
  'marginHeight',
  'marginWidth',
  'max',
  'maxLength',
  'media',
  'mediaGroup',
  'method',
  'min',
  'minLength',
  'multiple',
  'muted',
  'name',
  'noValidate',
  'open',
  'optimum',
  'pattern',
  'placeholder',
  'poster',
  'preload',
  'radioGroup',
  'readOnly',
  'rel',
  'required',
  'role',
  'rows',
  'rowSpan',
  'sandbox',
  'scope',
  'scoped',
  'scrolling',
  'seamless',
  'selected',
  'shape',
  'size',
  'sizes',
  'span',
  'spellCheck',
  'src',
  'srcDoc',
  'srcSet',
  'start',
  'step',
  'style',
  'summary',
  'tabIndex',
  'target',
  'title',
  'type',
  'useMap',
  'value',
  'width',
  'wmode',
  'wrap'
];
function convert(html) {
  // add root element
  let $ = cheerio.load(html);
  if ($.root().children().length > 1) {
    html = '<div>' + html + '</div>';
  }

  html = html
    .replace(/\sclass=/g, ' className=')
    .replace(/\sfor=/g, ' htmlFor=')
    // replace comments
    .replace(/<!--/g, '{/*')
    .replace(/-->/g, '*/}');

  [
    "area",
    "base",
    "br",
    "col",
    "command",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ].forEach(function (tag) {
    let regex = new RegExp('<(' + tag + '[^/]*?)>', 'g');
    html = html
      .replace(regex, function (_, str) {
        return '<' + str + '/>';
      });
  });

  // replace attrNames
  attrs.forEach(function(attr) {
    let origin_attr = attr.toLowerCase();
    let regex = new RegExp('\\s' + origin_attr + '=', 'g');
    html = html.replace(regex, ' ' + attr + '=');
  });

  // replace styles
  html = html.replace(/\sstyle="(.+?)"/g, function(attr, styles){
    let jsxStyles = new StyleParser(styles).toJSXString();
    return " style={{" + jsxStyles + "}}";
  });
  let headTags = html.match(/<head>[\s\S]*?<\/head>/gi);
  let layoutFile = "This is layout content: " + headTags.join(' ').replace(/\s\s+/g, ' ');
  return layoutFile;
  // return html;
  // return html.match(/<head>[\s\S]*?<\/head>/gi);
}
module.exports = convert;
function repeatString(string, times) {
  if (times === 1) {
    return string;
  }
  if (times < 0) { throw new Error(); }
  let repeated = '';
  while (times) {
    if (times & 1) {
      repeated += string;
    }
    if (times >>= 1) {
      string += string;
    }
  }
  return repeated;
}
function endsWith(haystack, needle) {
  return haystack.slice(-needle.length) === needle;
}
function trimEnd(haystack, needle) {
  return endsWith(haystack, needle)
    ? haystack.slice(0, -needle.length)
    : haystack;
}
function hyphenToCamelCase(string) {
  return string.replace(/-(.)/g, function(match, chr) {
    return chr.toUpperCase();
  });
}
function isEmpty(string) {
   return !/[^\s]/.test(string);
}
function isNumeric(input) {
  return input !== undefined
    && input !== null
    && (typeof input === 'number' || parseInt(input, 10) == input);
}
let StyleParser = function(rawStyle) {
  this.parse(rawStyle);
};
StyleParser.prototype = {
  /**
   * Parse the specified inline style attribute value
   * @param {string} rawStyle Raw style attribute
   */
  parse: function(rawStyle) {
    this.styles = {};
    rawStyle.split(';').forEach(function(style) {
      style = style.trim();
      let firstColon = style.indexOf(':');
      let key = style.substr(0, firstColon);
      let value = style.substr(firstColon + 1).trim();
      if (key !== '') {
        this.styles[key] = value;
      }
    }, this);
  },

  /**
   * Convert the style information represented by this parser into a JSX
   * string
   *
   * @return {string}
   */
  toJSXString: function() {
    let output = [];
    for (let key in this.styles) {
      if (!this.styles.hasOwnProperty(key)) {
        continue;
      }
      output.push(this.toJSXKey(key) + ': ' + this.toJSXValue(this.styles[key]));
    }
    return output.join(', ');
  },

  /**
   * Convert the CSS style key to a JSX style key
   *
   * @param {string} key CSS style key
   * @return {string} JSX style key
   */
  toJSXKey: function(key) {
    return hyphenToCamelCase(key);
  },

  /**
   * Convert the CSS style value to a JSX style value
   *
   * @param {string} value CSS style value
   * @return {string} JSX style value
   */
  toJSXValue: function(value) {
    if (isNumeric(value)) {
      // If numeric, no quotes
      return value;
    } else {
      // Proably a string, wrap it in quotes
      return '\'' + value.replace(/'/g, '"') + '\'';
    }
  }
};

let htmlString = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>three.js examples</title>
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<link rel="shortcut icon" href="../files/favicon_white.ico" media="(prefers-color-scheme: dark)"/>
		<link rel="shortcut icon" href="../files/favicon.ico" media="(prefers-color-scheme: light)" />
		<link rel="stylesheet" type="text/css" href="../files/main.css">
	</head>
	<body>`;

let jsx_str = convert(htmlString);

console.log(jsx_str);

