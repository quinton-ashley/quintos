(function () {
	function r(e, n, t) {
		function o(i, f) {
			if (!n[i]) {
				if (!e[i]) {
					var c = 'function' == typeof require && require;
					if (!f && c) return c(i, !0);
					if (u) return u(i, !0);
					var a = new Error("Cannot find module '" + i + "'");
					throw ((a.code = 'MODULE_NOT_FOUND'), a);
				}
				var p = (n[i] = {
					exports: {}
				});
				e[i][0].call(
					p.exports,
					function (r) {
						var n = e[i][1][r];
						return o(n || r);
					},
					p,
					p.exports,
					r,
					e,
					n,
					t
				);
			}
			return n[i].exports;
		}
		for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
		return o;
	}
	return r;
})()(
	{
		1: [
			function (require, module, exports) {
				const java_to_javascript = require('java-to-javascript');
				self.addEventListener('message', (e) => {
					if (e.data == 'QuintOS') {
						QuintOS = true;
						return;
					}
					self.postMessage(java_to_javascript(e.data));
				});
			},
			{
				'java-to-javascript': 2
			}
		],
		2: [
			function (require, module, exports) {
				/* beautify ignore:start */
				(function (global, factory) {
					typeof exports === 'object' && typeof module !== 'undefined'
						? (module.exports = factory())
						: typeof define === 'function' && define.amd
						? define(factory)
						: ((global = global || self), (global.javaToJavascript = factory()));
				})(this, function () {
					function unwrapExports(x) {
						return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
					}

					function createCommonjsModule(fn, module) {
						return (module = { exports: {} }), fn(module, module.exports), module.exports;
					}

					var beautify = createCommonjsModule(function (module, exports) {
						/* AUTO-GENERATED. DO NOT MODIFY. */
						/*

	  The MIT License (MIT)

	  Copyright (c) 2007-2018 Einar Lielmanis, Liam Newman, and contributors.

	  Permission is hereby granted, free of charge, to any person
	  obtaining a copy of this software and associated documentation files
	  (the "Software"), to deal in the Software without restriction,
	  including without limitation the rights to use, copy, modify, merge,
	  publish, distribute, sublicense, and/or sell copies of the Software,
	  and to permit persons to whom the Software is furnished to do so,
	  subject to the following conditions:

	  The above copyright notice and this permission notice shall be
	  included in all copies or substantial portions of the Software.

	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	  NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
	  BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	  ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	  SOFTWARE.

	 JS Beautifier
	---------------


	  Written by Einar Lielmanis, <einar@beautifier.io>
	      https://beautifier.io/

	  Originally converted to javascript by Vital, <vital76@gmail.com>
	  "End braces on own line" added by Chris J. Shull, <chrisjshull@gmail.com>
	  Parsing improvements for brace-less statements by Liam Newman <bitwiseman@beautifier.io>


	  Usage:
	    js_beautify(js_source_text);
	    js_beautify(js_source_text, options);

	  The options are:
	    indent_size (default 4)          - indentation size,
	    indent_char (default space)      - character to indent with,
	    preserve_newlines (default true) - whether existing line breaks should be preserved,
	    max_preserve_newlines (default unlimited) - maximum number of line breaks to be preserved in one chunk,

	    jslint_happy (default false) - if true, then jslint-stricter mode is enforced.

	            jslint_happy        !jslint_happy
	            ---------------------------------
	            function ()         function()

	            switch () {         switch() {
	            case 1:               case 1:
	              break;                break;
	            }                   }

	    space_after_anon_function (default false) - should the space before an anonymous function's parens be added, "function()" vs "function ()",
	          NOTE: This option is overriden by jslint_happy (i.e. if jslint_happy is true, space_after_anon_function is true by design)

	    brace_style (default "collapse") - "collapse" | "expand" | "end-expand" | "none" | any of the former + ",preserve-inline"
	            put braces on the same line as control statements (default), or put braces on own line (Allman / ANSI style), or just put end braces on own line, or attempt to keep them where they are.
	            preserve-inline will try to preserve inline blocks of curly braces

	    space_before_conditional (default true) - should the space before conditional statement be added, "if(true)" vs "if (true)",

	    unescape_strings (default false) - should printable characters in strings encoded in \xNN notation be unescaped, "example" vs "\x65\x78\x61\x6d\x70\x6c\x65"

	    wrap_line_length (default unlimited) - lines should wrap at next opportunity after this number of characters.
	          NOTE: This is not a hard limit. Lines will continue until a point where a newline would
	                be preserved if it were present.

	    end_with_newline (default false)  - end output with a newline


	    e.g

	    js_beautify(js_source_text, {
	      'indent_size': 1,
	      'indent_char': '\t'
	    });

	*/

						(function () {
							/* GENERATED_BUILD_OUTPUT */
							var legacy_beautify_js = /******/ (function (modules) {
								// webpackBootstrap
								/******/ // The module cache
								/******/ var installedModules = {};
								/******/
								/******/ // The require function
								/******/ function __webpack_require__(moduleId) {
									/******/
									/******/ // Check if module is in cache
									/******/ if (installedModules[moduleId]) {
										/******/ return installedModules[moduleId].exports;
										/******/
									}
									/******/ // Create a new module (and put it into the cache)
									/******/ var module = (installedModules[moduleId] = {
										/******/ i: moduleId,
										/******/ l: false,
										/******/ exports: {}
										/******/
									});
									/******/
									/******/ // Execute the module function
									/******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
									/******/
									/******/ // Flag the module as loaded
									/******/ module.l = true;
									/******/
									/******/ // Return the exports of the module
									/******/ return module.exports;
									/******/
								}
								/******/
								/******/
								/******/ // expose the modules object (__webpack_modules__)
								/******/ __webpack_require__.m = modules;
								/******/
								/******/ // expose the module cache
								/******/ __webpack_require__.c = installedModules;
								/******/
								/******/ // define getter function for harmony exports
								/******/ __webpack_require__.d = function (exports, name, getter) {
									/******/ if (!__webpack_require__.o(exports, name)) {
										/******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
										/******/
									}
									/******/
								};
								/******/
								/******/ // define __esModule on exports
								/******/ __webpack_require__.r = function (exports) {
									/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
										/******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
										/******/
									}
									/******/ Object.defineProperty(exports, '__esModule', { value: true });
									/******/
								};
								/******/
								/******/ // create a fake namespace object
								/******/ // mode & 1: value is a module id, require it
								/******/ // mode & 2: merge all properties of value into the ns
								/******/ // mode & 4: return value when already ns object
								/******/ // mode & 8|1: behave like require
								/******/ __webpack_require__.t = function (value, mode) {
									/******/ if (mode & 1) value = __webpack_require__(value);
									/******/ if (mode & 8) return value;
									/******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
									/******/ var ns = Object.create(null);
									/******/ __webpack_require__.r(ns);
									/******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
									/******/ if (mode & 2 && typeof value != 'string')
										for (var key in value)
											__webpack_require__.d(
												ns,
												key,
												function (key) {
													return value[key];
												}.bind(null, key)
											);
									/******/ return ns;
									/******/
								};
								/******/
								/******/ // getDefaultExport function for compatibility with non-harmony modules
								/******/ __webpack_require__.n = function (module) {
									/******/ var getter =
										module && module.__esModule
											? /******/ function getDefault() {
													return module['default'];
											  }
											: /******/ function getModuleExports() {
													return module;
											  };
									/******/ __webpack_require__.d(getter, 'a', getter);
									/******/ return getter;
									/******/
								};
								/******/
								/******/ // Object.prototype.hasOwnProperty.call
								/******/ __webpack_require__.o = function (object, property) {
									return Object.prototype.hasOwnProperty.call(object, property);
								};
								/******/
								/******/ // __webpack_public_path__
								/******/ __webpack_require__.p = '';
								/******/
								/******/
								/******/ // Load entry module and return exports
								/******/ return __webpack_require__((__webpack_require__.s = 0));
								/******/
							})(
								/************************************************************************/
								/******/ [
									/* 0 */
									/***/ function (module, exports, __webpack_require__) {
										var Beautifier = __webpack_require__(1).Beautifier,
											Options = __webpack_require__(5).Options;

										function js_beautify(js_source_text, options) {
											var beautifier = new Beautifier(js_source_text, options);
											return beautifier.beautify();
										}

										module.exports = js_beautify;
										module.exports.defaultOptions = function () {
											return new Options();
										};

										/***/
									},
									/* 1 */
									/***/ function (module, exports, __webpack_require__) {
										var Output = __webpack_require__(2).Output;
										var Token = __webpack_require__(3).Token;
										var acorn = __webpack_require__(4);
										var Options = __webpack_require__(5).Options;
										var Tokenizer = __webpack_require__(7).Tokenizer;
										var line_starters = __webpack_require__(7).line_starters;
										var positionable_operators = __webpack_require__(7).positionable_operators;
										var TOKEN = __webpack_require__(7).TOKEN;

										function remove_redundant_indentation(output, frame) {
											// This implementation is effective but has some issues:
											//     - can cause line wrap to happen too soon due to indent removal
											//           after wrap points are calculated
											// These issues are minor compared to ugly indentation.

											if (
												frame.multiline_frame ||
												frame.mode === MODE.ForInitializer ||
												frame.mode === MODE.Conditional
											) {
												return;
											}

											// remove one indent from each line inside this section
											output.remove_indent(frame.start_line_index);
										}

										function in_array(what, arr) {
											return arr.indexOf(what) !== -1;
										}

										function ltrim(s) {
											return s.replace(/^\s+/g, '');
										}

										function generateMapFromStrings(list) {
											var result = {};
											for (var x = 0; x < list.length; x++) {
												// make the mapped names underscored instead of dash
												result[list[x].replace(/-/g, '_')] = list[x];
											}
											return result;
										}

										function reserved_word(token, word) {
											return token && token.type === TOKEN.RESERVED && token.text === word;
										}

										function reserved_array(token, words) {
											return token && token.type === TOKEN.RESERVED && in_array(token.text, words);
										}
										// Unsure of what they mean, but they work. Worth cleaning up in future.
										var special_words = [
											'case',
											'return',
											'do',
											'if',
											'throw',
											'else',
											'await',
											'break',
											'continue',
											'async'
										];

										var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

										// Generate map from array
										var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);

										var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [
											OPERATOR_POSITION.before_newline,
											OPERATOR_POSITION.preserve_newline
										];

										var MODE = {
											BlockStatement: 'BlockStatement', // 'BLOCK'
											Statement: 'Statement', // 'STATEMENT'
											ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
											ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
											ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
											Conditional: 'Conditional', //'(COND-EXPRESSION)',
											Expression: 'Expression' //'(EXPRESSION)'
										};

										// we could use just string.split, but
										// IE doesn't like returning empty strings
										function split_linebreaks(s) {
											//return s.split(/\x0d\x0a|\x0a/);

											s = s.replace(acorn.allLineBreaks, '\n');
											var out = [],
												idx = s.indexOf('\n');
											while (idx !== -1) {
												out.push(s.substring(0, idx));
												s = s.substring(idx + 1);
												idx = s.indexOf('\n');
											}
											if (s.length) {
												out.push(s);
											}
											return out;
										}

										function is_array(mode) {
											return mode === MODE.ArrayLiteral;
										}

										function is_expression(mode) {
											return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
										}

										function all_lines_start_with(lines, c) {
											for (var i = 0; i < lines.length; i++) {
												var line = lines[i].trim();
												if (line.charAt(0) !== c) {
													return false;
												}
											}
											return true;
										}

										function each_line_matches_indent(lines, indent) {
											var i = 0,
												len = lines.length,
												line;
											for (; i < len; i++) {
												line = lines[i];
												// allow empty lines to pass through
												if (line && line.indexOf(indent) !== 0) {
													return false;
												}
											}
											return true;
										}

										function Beautifier(source_text, options) {
											options = options || {};
											this._source_text = source_text || '';

											this._output = null;
											this._tokens = null;
											this._last_last_text = null;
											this._flags = null;
											this._previous_flags = null;

											this._flag_store = null;
											this._options = new Options(options);
										}

										Beautifier.prototype.create_flags = function (flags_base, mode) {
											var next_indent_level = 0;
											if (flags_base) {
												next_indent_level = flags_base.indentation_level;
												if (!this._output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
													next_indent_level = flags_base.line_indent_level;
												}
											}

											var next_flags = {
												mode: mode,
												parent: flags_base,
												last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ''), // last token text
												last_word: flags_base ? flags_base.last_word : '', // last TOKEN.WORD passed
												declaration_statement: false,
												declaration_assignment: false,
												multiline_frame: false,
												inline_frame: false,
												if_block: false,
												else_block: false,
												do_block: false,
												do_while: false,
												import_block: false,
												in_case_statement: false, // switch(..){ INSIDE HERE }
												in_case: false, // we're on the exact line with "case 0:"
												case_body: false, // the indented case-action block
												indentation_level: next_indent_level,
												line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
												start_line_index: this._output.get_line_number(),
												ternary_depth: 0
											};
											return next_flags;
										};

										Beautifier.prototype._reset = function (source_text) {
											var baseIndentString = source_text.match(/^[\t ]*/)[0];

											this._last_last_text = ''; // pre-last token text
											this._output = new Output(this._options, baseIndentString);

											// If testing the ignore directive, start with output disable set to true
											this._output.raw = this._options.test_output_raw;

											// Stack of parsing/formatting states, including MODE.
											// We tokenize, parse, and output in an almost purely a forward-only stream of token input
											// and formatted output.  This makes the beautifier less accurate than full parsers
											// but also far more tolerant of syntax errors.
											//
											// For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
											// MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
											// encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
											// most full parsers would die, but the beautifier gracefully falls back to
											// MODE.BlockStatement and continues on.
											this._flag_store = [];
											this.set_mode(MODE.BlockStatement);
											var tokenizer = new Tokenizer(source_text, this._options);
											this._tokens = tokenizer.tokenize();
											return source_text;
										};

										Beautifier.prototype.beautify = function () {
											// if disabled, return the input unchanged.
											if (this._options.disabled) {
												return this._source_text;
											}

											var sweet_code;
											var source_text = this._reset(this._source_text);

											var eol = this._options.eol;
											if (this._options.eol === 'auto') {
												eol = '\n';
												if (source_text && acorn.lineBreak.test(source_text || '')) {
													eol = source_text.match(acorn.lineBreak)[0];
												}
											}

											var current_token = this._tokens.next();
											while (current_token) {
												this.handle_token(current_token);

												this._last_last_text = this._flags.last_token.text;
												this._flags.last_token = current_token;

												current_token = this._tokens.next();
											}

											sweet_code = this._output.get_code(eol);

											return sweet_code;
										};

										Beautifier.prototype.handle_token = function (current_token, preserve_statement_flags) {
											if (current_token.type === TOKEN.START_EXPR) {
												this.handle_start_expr(current_token);
											} else if (current_token.type === TOKEN.END_EXPR) {
												this.handle_end_expr(current_token);
											} else if (current_token.type === TOKEN.START_BLOCK) {
												this.handle_start_block(current_token);
											} else if (current_token.type === TOKEN.END_BLOCK) {
												this.handle_end_block(current_token);
											} else if (current_token.type === TOKEN.WORD) {
												this.handle_word(current_token);
											} else if (current_token.type === TOKEN.RESERVED) {
												this.handle_word(current_token);
											} else if (current_token.type === TOKEN.SEMICOLON) {
												this.handle_semicolon(current_token);
											} else if (current_token.type === TOKEN.STRING) {
												this.handle_string(current_token);
											} else if (current_token.type === TOKEN.EQUALS) {
												this.handle_equals(current_token);
											} else if (current_token.type === TOKEN.OPERATOR) {
												this.handle_operator(current_token);
											} else if (current_token.type === TOKEN.COMMA) {
												this.handle_comma(current_token);
											} else if (current_token.type === TOKEN.BLOCK_COMMENT) {
												this.handle_block_comment(current_token, preserve_statement_flags);
											} else if (current_token.type === TOKEN.COMMENT) {
												this.handle_comment(current_token, preserve_statement_flags);
											} else if (current_token.type === TOKEN.DOT) {
												this.handle_dot(current_token);
											} else if (current_token.type === TOKEN.EOF) {
												this.handle_eof(current_token);
											} else if (current_token.type === TOKEN.UNKNOWN) {
												this.handle_unknown(current_token, preserve_statement_flags);
											} else {
												this.handle_unknown(current_token, preserve_statement_flags);
											}
										};

										Beautifier.prototype.handle_whitespace_and_comments = function (
											current_token,
											preserve_statement_flags
										) {
											var newlines = current_token.newlines;
											var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);

											if (current_token.comments_before) {
												var comment_token = current_token.comments_before.next();
												while (comment_token) {
													// The cleanest handling of inline comments is to treat them as though they aren't there.
													// Just continue formatting and the behavior should be logical.
													// Also ignore unknown tokens.  Again, this should result in better behavior.
													this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
													this.handle_token(comment_token, preserve_statement_flags);
													comment_token = current_token.comments_before.next();
												}
											}

											if (keep_whitespace) {
												for (var i = 0; i < newlines; i += 1) {
													this.print_newline(i > 0, preserve_statement_flags);
												}
											} else {
												if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
													newlines = this._options.max_preserve_newlines;
												}

												if (this._options.preserve_newlines) {
													if (newlines > 1) {
														this.print_newline(false, preserve_statement_flags);
														for (var j = 1; j < newlines; j += 1) {
															this.print_newline(true, preserve_statement_flags);
														}
													}
												}
											}
										};

										var newline_restricted_tokens = ['async', 'break', 'continue', 'return', 'throw', 'yield'];

										Beautifier.prototype.allow_wrap_or_preserved_newline = function (current_token, force_linewrap) {
											force_linewrap = force_linewrap === undefined ? false : force_linewrap;

											// Never wrap the first token on a line
											if (this._output.just_added_newline()) {
												return;
											}

											var shouldPreserveOrForce =
												(this._options.preserve_newlines && current_token.newlines) || force_linewrap;
											var operatorLogicApplies =
												in_array(this._flags.last_token.text, positionable_operators) ||
												in_array(current_token.text, positionable_operators);

											if (operatorLogicApplies) {
												var shouldPrintOperatorNewline =
													(in_array(this._flags.last_token.text, positionable_operators) &&
														in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) ||
													in_array(current_token.text, positionable_operators);
												shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
											}

											if (shouldPreserveOrForce) {
												this.print_newline(false, true);
											} else if (this._options.wrap_line_length) {
												if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
													// These tokens should never have a newline inserted
													// between them and the following expression.
													return;
												}
												var proposed_line_length =
													this._output.current_line.get_character_count() +
													current_token.text.length +
													(this._output.space_before_token ? 1 : 0);
												if (proposed_line_length >= this._options.wrap_line_length) {
													this.print_newline(false, true);
												}
											}
										};

										Beautifier.prototype.print_newline = function (force_newline, preserve_statement_flags) {
											if (!preserve_statement_flags) {
												if (
													this._flags.last_token.text !== ';' &&
													this._flags.last_token.text !== ',' &&
													this._flags.last_token.text !== '=' &&
													(this._flags.last_token.type !== TOKEN.OPERATOR ||
														this._flags.last_token.text === '--' ||
														this._flags.last_token.text === '++')
												) {
													var next_token = this._tokens.peek();
													while (
														this._flags.mode === MODE.Statement &&
														!(this._flags.if_block && reserved_word(next_token, 'else')) &&
														!this._flags.do_block
													) {
														this.restore_mode();
													}
												}
											}

											if (this._output.add_new_line(force_newline)) {
												this._flags.multiline_frame = true;
											}
										};

										Beautifier.prototype.print_token_line_indentation = function (current_token) {
											if (this._output.just_added_newline()) {
												if (
													this._options.keep_array_indentation &&
													is_array(this._flags.mode) &&
													current_token.newlines
												) {
													this._output.current_line.push(current_token.whitespace_before);
													this._output.space_before_token = false;
												} else if (this._output.set_indent(this._flags.indentation_level)) {
													this._flags.line_indent_level = this._flags.indentation_level;
												}
											}
										};

										Beautifier.prototype.print_token = function (current_token, printable_token) {
											if (this._output.raw) {
												this._output.add_raw_token(current_token);
												return;
											}

											if (
												this._options.comma_first &&
												current_token.previous &&
												current_token.previous.type === TOKEN.COMMA &&
												this._output.just_added_newline()
											) {
												if (this._output.previous_line.last() === ',') {
													var popped = this._output.previous_line.pop();
													// if the comma was already at the start of the line,
													// pull back onto that line and reprint the indentation
													if (this._output.previous_line.is_empty()) {
														this._output.previous_line.push(popped);
														this._output.trim(true);
														this._output.current_line.pop();
														this._output.trim();
													}

													// add the comma in front of the next token
													this.print_token_line_indentation(current_token);
													this._output.add_token(',');
													this._output.space_before_token = true;
												}
											}

											printable_token = printable_token || current_token.text;
											this.print_token_line_indentation(current_token);
											this._output.add_token(printable_token);
										};

										Beautifier.prototype.indent = function () {
											this._flags.indentation_level += 1;
										};

										Beautifier.prototype.deindent = function () {
											if (
												this._flags.indentation_level > 0 &&
												(!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level)
											) {
												this._flags.indentation_level -= 1;
											}
										};

										Beautifier.prototype.set_mode = function (mode) {
											if (this._flags) {
												this._flag_store.push(this._flags);
												this._previous_flags = this._flags;
											} else {
												this._previous_flags = this.create_flags(null, mode);
											}

											this._flags = this.create_flags(this._previous_flags, mode);
										};

										Beautifier.prototype.restore_mode = function () {
											if (this._flag_store.length > 0) {
												this._previous_flags = this._flags;
												this._flags = this._flag_store.pop();
												if (this._previous_flags.mode === MODE.Statement) {
													remove_redundant_indentation(this._output, this._previous_flags);
												}
											}
										};

										Beautifier.prototype.start_of_object_property = function () {
											return (
												this._flags.parent.mode === MODE.ObjectLiteral &&
												this._flags.mode === MODE.Statement &&
												((this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) ||
													reserved_array(this._flags.last_token, ['get', 'set']))
											);
										};

										Beautifier.prototype.start_of_statement = function (current_token) {
											var start = false;
											start =
												start ||
												(reserved_array(this._flags.last_token, ['var', 'let', 'const']) &&
													current_token.type === TOKEN.WORD);
											start = start || reserved_word(this._flags.last_token, 'do');
											start =
												start ||
												(!(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement) &&
													reserved_array(this._flags.last_token, newline_restricted_tokens) &&
													!current_token.newlines);
											start =
												start ||
												(reserved_word(this._flags.last_token, 'else') &&
													!(reserved_word(current_token, 'if') && !current_token.comments_before));
											start =
												start ||
												(this._flags.last_token.type === TOKEN.END_EXPR &&
													(this._previous_flags.mode === MODE.ForInitializer ||
														this._previous_flags.mode === MODE.Conditional));
											start =
												start ||
												(this._flags.last_token.type === TOKEN.WORD &&
													this._flags.mode === MODE.BlockStatement &&
													!this._flags.in_case &&
													!(current_token.text === '--' || current_token.text === '++') &&
													this._last_last_text !== 'function' &&
													current_token.type !== TOKEN.WORD &&
													current_token.type !== TOKEN.RESERVED);
											start =
												start ||
												(this._flags.mode === MODE.ObjectLiteral &&
													((this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) ||
														reserved_array(this._flags.last_token, ['get', 'set'])));

											if (start) {
												this.set_mode(MODE.Statement);
												this.indent();

												this.handle_whitespace_and_comments(current_token, true);

												// Issue #276:
												// If starting a new statement with [if, for, while, do], push to a new line.
												// if (a) if (b) if(c) d(); else e(); else f();
												if (!this.start_of_object_property()) {
													this.allow_wrap_or_preserved_newline(
														current_token,
														reserved_array(current_token, ['do', 'for', 'if', 'while'])
													);
												}
												return true;
											}
											return false;
										};

										Beautifier.prototype.handle_start_expr = function (current_token) {
											// The conditional starts the statement if appropriate.
											if (!this.start_of_statement(current_token)) {
												this.handle_whitespace_and_comments(current_token);
											}

											var next_mode = MODE.Expression;
											if (current_token.text === '[') {
												if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ')') {
													// this is array index specifier, break immediately
													// a[x], fn()[x]
													if (reserved_array(this._flags.last_token, line_starters)) {
														this._output.space_before_token = true;
													}
													this.set_mode(next_mode);
													this.print_token(current_token);
													this.indent();
													if (this._options.space_in_paren) {
														this._output.space_before_token = true;
													}
													return;
												}

												next_mode = MODE.ArrayLiteral;
												if (is_array(this._flags.mode)) {
													if (
														this._flags.last_token.text === '[' ||
														(this._flags.last_token.text === ',' &&
															(this._last_last_text === ']' || this._last_last_text === '}'))
													) {
														// ], [ goes to new line
														// }, [ goes to new line
														if (!this._options.keep_array_indentation) {
															this.print_newline();
														}
													}
												}

												if (
													!in_array(this._flags.last_token.type, [
														TOKEN.START_EXPR,
														TOKEN.END_EXPR,
														TOKEN.WORD,
														TOKEN.OPERATOR
													])
												) {
													this._output.space_before_token = true;
												}
											} else {
												if (this._flags.last_token.type === TOKEN.RESERVED) {
													if (this._flags.last_token.text === 'for') {
														this._output.space_before_token = this._options.space_before_conditional;
														next_mode = MODE.ForInitializer;
													} else if (in_array(this._flags.last_token.text, ['if', 'while'])) {
														this._output.space_before_token = this._options.space_before_conditional;
														next_mode = MODE.Conditional;
													} else if (in_array(this._flags.last_word, ['await', 'async'])) {
														// Should be a space between await and an IIFE, or async and an arrow function
														this._output.space_before_token = true;
													} else if (
														this._flags.last_token.text === 'import' &&
														current_token.whitespace_before === ''
													) {
														this._output.space_before_token = false;
													} else if (
														in_array(this._flags.last_token.text, line_starters) ||
														this._flags.last_token.text === 'catch'
													) {
														this._output.space_before_token = true;
													}
												} else if (
													this._flags.last_token.type === TOKEN.EQUALS ||
													this._flags.last_token.type === TOKEN.OPERATOR
												) {
													// Support of this kind of newline preservation.
													// a = (b &&
													//     (c || d));
													if (!this.start_of_object_property()) {
														this.allow_wrap_or_preserved_newline(current_token);
													}
												} else if (this._flags.last_token.type === TOKEN.WORD) {
													this._output.space_before_token = false;

													// function name() vs function name ()
													// function* name() vs function* name ()
													// async name() vs async name ()
													// In ES6, you can also define the method properties of an object
													// var obj = {a: function() {}}
													// It can be abbreviated
													// var obj = {a() {}}
													// var obj = { a() {}} vs var obj = { a () {}}
													// var obj = { * a() {}} vs var obj = { * a () {}}
													var peek_back_two = this._tokens.peek(-3);
													if (this._options.space_after_named_function && peek_back_two) {
														// peek starts at next character so -1 is current token
														var peek_back_three = this._tokens.peek(-4);
														if (
															reserved_array(peek_back_two, ['async', 'function']) ||
															(peek_back_two.text === '*' && reserved_array(peek_back_three, ['async', 'function']))
														) {
															this._output.space_before_token = true;
														} else if (this._flags.mode === MODE.ObjectLiteral) {
															if (
																peek_back_two.text === '{' ||
																peek_back_two.text === ',' ||
																(peek_back_two.text === '*' &&
																	(peek_back_three.text === '{' || peek_back_three.text === ','))
															) {
																this._output.space_before_token = true;
															}
														}
													}
												} else {
													// Support preserving wrapped arrow function expressions
													// a.b('c',
													//     () => d.e
													// )
													this.allow_wrap_or_preserved_newline(current_token);
												}

												// function() vs function ()
												// yield*() vs yield* ()
												// function*() vs function* ()
												if (
													(this._flags.last_token.type === TOKEN.RESERVED &&
														(this._flags.last_word === 'function' || this._flags.last_word === 'typeof')) ||
													(this._flags.last_token.text === '*' &&
														(in_array(this._last_last_text, ['function', 'yield']) ||
															(this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))
												) {
													this._output.space_before_token = this._options.space_after_anon_function;
												}
											}

											if (this._flags.last_token.text === ';' || this._flags.last_token.type === TOKEN.START_BLOCK) {
												this.print_newline();
											} else if (
												this._flags.last_token.type === TOKEN.END_EXPR ||
												this._flags.last_token.type === TOKEN.START_EXPR ||
												this._flags.last_token.type === TOKEN.END_BLOCK ||
												this._flags.last_token.text === '.' ||
												this._flags.last_token.type === TOKEN.COMMA
											) {
												// do nothing on (( and )( and ][ and ]( and .(
												// TODO: Consider whether forcing this is required.  Review failing tests when removed.
												this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
											}

											this.set_mode(next_mode);
											this.print_token(current_token);
											if (this._options.space_in_paren) {
												this._output.space_before_token = true;
											}

											// In all cases, if we newline while inside an expression it should be indented.
											this.indent();
										};

										Beautifier.prototype.handle_end_expr = function (current_token) {
											// statements inside expressions are not valid syntax, but...
											// statements must all be closed when their container closes
											while (this._flags.mode === MODE.Statement) {
												this.restore_mode();
											}

											this.handle_whitespace_and_comments(current_token);

											if (this._flags.multiline_frame) {
												this.allow_wrap_or_preserved_newline(
													current_token,
													current_token.text === ']' &&
														is_array(this._flags.mode) &&
														!this._options.keep_array_indentation
												);
											}

											if (this._options.space_in_paren) {
												if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
													// () [] no inner space in empty parens like these, ever, ref #320
													this._output.trim();
													this._output.space_before_token = false;
												} else {
													this._output.space_before_token = true;
												}
											}
											if (current_token.text === ']' && this._options.keep_array_indentation) {
												this.print_token(current_token);
												this.restore_mode();
											} else {
												this.restore_mode();
												this.print_token(current_token);
											}
											remove_redundant_indentation(this._output, this._previous_flags);

											// do {} while () // no statement required after
											if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
												this._previous_flags.mode = MODE.Expression;
												this._flags.do_block = false;
												this._flags.do_while = false;
											}
										};

										Beautifier.prototype.handle_start_block = function (current_token) {
											this.handle_whitespace_and_comments(current_token);

											// Check if this is should be treated as a ObjectLiteral
											var next_token = this._tokens.peek();
											var second_token = this._tokens.peek(1);
											if (this._flags.last_word === 'switch' && this._flags.last_token.type === TOKEN.END_EXPR) {
												this.set_mode(MODE.BlockStatement);
												this._flags.in_case_statement = true;
											} else if (
												second_token &&
												((in_array(second_token.text, [':', ',']) &&
													in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED])) ||
													(in_array(next_token.text, ['get', 'set', '...']) &&
														in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED])))
											) {
												// We don't support TypeScript,but we didn't break it for a very long time.
												// We'll try to keep not breaking it.
												if (!in_array(this._last_last_text, ['class', 'interface'])) {
													this.set_mode(MODE.ObjectLiteral);
												} else {
													this.set_mode(MODE.BlockStatement);
												}
											} else if (
												this._flags.last_token.type === TOKEN.OPERATOR &&
												this._flags.last_token.text === '=>'
											) {
												// arrow function: (param1, paramN) => { statements }
												this.set_mode(MODE.BlockStatement);
											} else if (
												in_array(this._flags.last_token.type, [
													TOKEN.EQUALS,
													TOKEN.START_EXPR,
													TOKEN.COMMA,
													TOKEN.OPERATOR
												]) ||
												reserved_array(this._flags.last_token, ['return', 'throw', 'import', 'default'])
											) {
												// Detecting shorthand function syntax is difficult by scanning forward,
												//     so check the surrounding context.
												// If the block is being returned, imported, export default, passed as arg,
												//     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
												this.set_mode(MODE.ObjectLiteral);
											} else {
												this.set_mode(MODE.BlockStatement);
											}

											var empty_braces = !next_token.comments_before && next_token.text === '}';
											var empty_anonymous_function =
												empty_braces &&
												this._flags.last_word === 'function' &&
												this._flags.last_token.type === TOKEN.END_EXPR;

											if (this._options.brace_preserve_inline) {
												// check for inline, set inline_frame if so
												// search forward for a newline wanted inside this block
												var index = 0;
												var check_token = null;
												this._flags.inline_frame = true;
												do {
													index += 1;
													check_token = this._tokens.peek(index - 1);
													if (check_token.newlines) {
														this._flags.inline_frame = false;
														break;
													}
												} while (
													check_token.type !== TOKEN.EOF &&
													!(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token)
												);
											}

											if (
												(this._options.brace_style === 'expand' ||
													(this._options.brace_style === 'none' && current_token.newlines)) &&
												!this._flags.inline_frame
											) {
												if (
													this._flags.last_token.type !== TOKEN.OPERATOR &&
													(empty_anonymous_function ||
														this._flags.last_token.type === TOKEN.EQUALS ||
														(reserved_array(this._flags.last_token, special_words) &&
															this._flags.last_token.text !== 'else'))
												) {
													this._output.space_before_token = true;
												} else {
													this.print_newline(false, true);
												}
											} else {
												// collapse || inline_frame
												if (
													is_array(this._previous_flags.mode) &&
													(this._flags.last_token.type === TOKEN.START_EXPR ||
														this._flags.last_token.type === TOKEN.COMMA)
												) {
													if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
														this._output.space_before_token = true;
													}

													if (
														this._flags.last_token.type === TOKEN.COMMA ||
														(this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame)
													) {
														this.allow_wrap_or_preserved_newline(current_token);
														this._previous_flags.multiline_frame =
															this._previous_flags.multiline_frame || this._flags.multiline_frame;
														this._flags.multiline_frame = false;
													}
												}
												if (
													this._flags.last_token.type !== TOKEN.OPERATOR &&
													this._flags.last_token.type !== TOKEN.START_EXPR
												) {
													if (this._flags.last_token.type === TOKEN.START_BLOCK && !this._flags.inline_frame) {
														this.print_newline();
													} else {
														this._output.space_before_token = true;
													}
												}
											}
											this.print_token(current_token);
											this.indent();

											// Except for specific cases, open braces are followed by a new line.
											if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
												this.print_newline();
											}
										};

										Beautifier.prototype.handle_end_block = function (current_token) {
											// statements must all be closed when their container closes
											this.handle_whitespace_and_comments(current_token);

											while (this._flags.mode === MODE.Statement) {
												this.restore_mode();
											}

											var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;

											if (this._flags.inline_frame && !empty_braces) {
												// try inline_frame (only set if this._options.braces-preserve-inline) first
												this._output.space_before_token = true;
											} else if (this._options.brace_style === 'expand') {
												if (!empty_braces) {
													this.print_newline();
												}
											} else {
												// skip {}
												if (!empty_braces) {
													if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
														// we REALLY need a newline here, but newliner would skip that
														this._options.keep_array_indentation = false;
														this.print_newline();
														this._options.keep_array_indentation = true;
													} else {
														this.print_newline();
													}
												}
											}
											this.restore_mode();
											this.print_token(current_token);
										};

										Beautifier.prototype.handle_word = function (current_token) {
											if (current_token.type === TOKEN.RESERVED) {
												if (in_array(current_token.text, ['set', 'get']) && this._flags.mode !== MODE.ObjectLiteral) {
													current_token.type = TOKEN.WORD;
												} else if (current_token.text === 'import' && this._tokens.peek().text === '(') {
													current_token.type = TOKEN.WORD;
												} else if (in_array(current_token.text, ['as', 'from']) && !this._flags.import_block) {
													current_token.type = TOKEN.WORD;
												} else if (this._flags.mode === MODE.ObjectLiteral) {
													var next_token = this._tokens.peek();
													if (next_token.text === ':') {
														current_token.type = TOKEN.WORD;
													}
												}
											}

											if (this.start_of_statement(current_token)) {
												// The conditional starts the statement if appropriate.
												if (
													reserved_array(this._flags.last_token, ['var', 'let', 'const']) &&
													current_token.type === TOKEN.WORD
												) {
													this._flags.declaration_statement = true;
												}
											} else if (
												current_token.newlines &&
												!is_expression(this._flags.mode) &&
												(this._flags.last_token.type !== TOKEN.OPERATOR ||
													this._flags.last_token.text === '--' ||
													this._flags.last_token.text === '++') &&
												this._flags.last_token.type !== TOKEN.EQUALS &&
												(this._options.preserve_newlines ||
													!reserved_array(this._flags.last_token, ['var', 'let', 'const', 'set', 'get']))
											) {
												this.handle_whitespace_and_comments(current_token);
												this.print_newline();
											} else {
												this.handle_whitespace_and_comments(current_token);
											}

											if (this._flags.do_block && !this._flags.do_while) {
												if (reserved_word(current_token, 'while')) {
													// do {} ## while ()
													this._output.space_before_token = true;
													this.print_token(current_token);
													this._output.space_before_token = true;
													this._flags.do_while = true;
													return;
												} else {
													// do {} should always have while as the next word.
													// if we don't see the expected while, recover
													this.print_newline();
													this._flags.do_block = false;
												}
											}

											// if may be followed by else, or not
											// Bare/inline ifs are tricky
											// Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
											if (this._flags.if_block) {
												if (!this._flags.else_block && reserved_word(current_token, 'else')) {
													this._flags.else_block = true;
												} else {
													while (this._flags.mode === MODE.Statement) {
														this.restore_mode();
													}
													this._flags.if_block = false;
													this._flags.else_block = false;
												}
											}

											if (this._flags.in_case_statement && reserved_array(current_token, ['case', 'default'])) {
												this.print_newline();
												if (this._flags.case_body || this._options.jslint_happy) {
													// switch cases following one another
													this.deindent();
													this._flags.case_body = false;
												}
												this.print_token(current_token);
												this._flags.in_case = true;
												return;
											}

											if (
												this._flags.last_token.type === TOKEN.COMMA ||
												this._flags.last_token.type === TOKEN.START_EXPR ||
												this._flags.last_token.type === TOKEN.EQUALS ||
												this._flags.last_token.type === TOKEN.OPERATOR
											) {
												if (!this.start_of_object_property()) {
													this.allow_wrap_or_preserved_newline(current_token);
												}
											}

											if (reserved_word(current_token, 'function')) {
												if (
													in_array(this._flags.last_token.text, ['}', ';']) ||
													(this._output.just_added_newline() &&
														!(
															in_array(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) ||
															this._flags.last_token.type === TOKEN.OPERATOR
														))
												) {
													// make sure there is a nice clean space of at least one blank line
													// before a new function definition
													if (!this._output.just_added_blankline() && !current_token.comments_before) {
														this.print_newline();
														this.print_newline(true);
													}
												}
												if (
													this._flags.last_token.type === TOKEN.RESERVED ||
													this._flags.last_token.type === TOKEN.WORD
												) {
													if (
														reserved_array(this._flags.last_token, ['get', 'set', 'new', 'export']) ||
														reserved_array(this._flags.last_token, newline_restricted_tokens)
													) {
														this._output.space_before_token = true;
													} else if (
														reserved_word(this._flags.last_token, 'default') &&
														this._last_last_text === 'export'
													) {
														this._output.space_before_token = true;
													} else if (this._flags.last_token.text === 'declare') {
														// accomodates Typescript declare function formatting
														this._output.space_before_token = true;
													} else {
														this.print_newline();
													}
												} else if (
													this._flags.last_token.type === TOKEN.OPERATOR ||
													this._flags.last_token.text === '='
												) {
													// foo = function
													this._output.space_before_token = true;
												} else if (
													!this._flags.multiline_frame &&
													(is_expression(this._flags.mode) || is_array(this._flags.mode))
												);
												else {
													this.print_newline();
												}

												this.print_token(current_token);
												this._flags.last_word = current_token.text;
												return;
											}

											var prefix = 'NONE';

											if (this._flags.last_token.type === TOKEN.END_BLOCK) {
												if (this._previous_flags.inline_frame) {
													prefix = 'SPACE';
												} else if (!reserved_array(current_token, ['else', 'catch', 'finally', 'from'])) {
													prefix = 'NEWLINE';
												} else {
													if (
														this._options.brace_style === 'expand' ||
														this._options.brace_style === 'end-expand' ||
														(this._options.brace_style === 'none' && current_token.newlines)
													) {
														prefix = 'NEWLINE';
													} else {
														prefix = 'SPACE';
														this._output.space_before_token = true;
													}
												}
											} else if (
												this._flags.last_token.type === TOKEN.SEMICOLON &&
												this._flags.mode === MODE.BlockStatement
											) {
												// TODO: Should this be for STATEMENT as well?
												prefix = 'NEWLINE';
											} else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
												prefix = 'SPACE';
											} else if (this._flags.last_token.type === TOKEN.STRING) {
												prefix = 'NEWLINE';
											} else if (
												this._flags.last_token.type === TOKEN.RESERVED ||
												this._flags.last_token.type === TOKEN.WORD ||
												(this._flags.last_token.text === '*' &&
													(in_array(this._last_last_text, ['function', 'yield']) ||
														(this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ['{', ',']))))
											) {
												prefix = 'SPACE';
											} else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
												if (this._flags.inline_frame) {
													prefix = 'SPACE';
												} else {
													prefix = 'NEWLINE';
												}
											} else if (this._flags.last_token.type === TOKEN.END_EXPR) {
												this._output.space_before_token = true;
												prefix = 'NEWLINE';
											}

											if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ')') {
												if (
													this._flags.inline_frame ||
													this._flags.last_token.text === 'else' ||
													this._flags.last_token.text === 'export'
												) {
													prefix = 'SPACE';
												} else {
													prefix = 'NEWLINE';
												}
											}

											if (reserved_array(current_token, ['else', 'catch', 'finally'])) {
												if (
													(!(
														this._flags.last_token.type === TOKEN.END_BLOCK &&
														this._previous_flags.mode === MODE.BlockStatement
													) ||
														this._options.brace_style === 'expand' ||
														this._options.brace_style === 'end-expand' ||
														(this._options.brace_style === 'none' && current_token.newlines)) &&
													!this._flags.inline_frame
												) {
													this.print_newline();
												} else {
													this._output.trim(true);
													var line = this._output.current_line;
													// If we trimmed and there's something other than a close block before us
													// put a newline back in.  Handles '} // comment' scenario.
													if (line.last() !== '}') {
														this.print_newline();
													}
													this._output.space_before_token = true;
												}
											} else if (prefix === 'NEWLINE') {
												if (reserved_array(this._flags.last_token, special_words)) {
													// no newline between 'return nnn'
													this._output.space_before_token = true;
												} else if (
													this._flags.last_token.text === 'declare' &&
													reserved_array(current_token, ['var', 'let', 'const'])
												) {
													// accomodates Typescript declare formatting
													this._output.space_before_token = true;
												} else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
													if (
														(this._flags.last_token.type !== TOKEN.START_EXPR ||
															!reserved_array(current_token, ['var', 'let', 'const'])) &&
														this._flags.last_token.text !== ':'
													) {
														// no need to force newline on 'var': for (var x = 0...)
														if (reserved_word(current_token, 'if') && reserved_word(current_token.previous, 'else')) {
															// no newline for } else if {
															this._output.space_before_token = true;
														} else {
															this.print_newline();
														}
													}
												} else if (
													reserved_array(current_token, line_starters) &&
													this._flags.last_token.text !== ')'
												) {
													this.print_newline();
												}
											} else if (
												this._flags.multiline_frame &&
												is_array(this._flags.mode) &&
												this._flags.last_token.text === ',' &&
												this._last_last_text === '}'
											) {
												this.print_newline(); // }, in lists get a newline treatment
											} else if (prefix === 'SPACE') {
												this._output.space_before_token = true;
											}
											if (
												current_token.previous &&
												(current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)
											) {
												this._output.space_before_token = true;
											}
											this.print_token(current_token);
											this._flags.last_word = current_token.text;

											if (current_token.type === TOKEN.RESERVED) {
												if (current_token.text === 'do') {
													this._flags.do_block = true;
												} else if (current_token.text === 'if') {
													this._flags.if_block = true;
												} else if (current_token.text === 'import') {
													this._flags.import_block = true;
												} else if (this._flags.import_block && reserved_word(current_token, 'from')) {
													this._flags.import_block = false;
												}
											}
										};

										Beautifier.prototype.handle_semicolon = function (current_token) {
											if (this.start_of_statement(current_token)) {
												// The conditional starts the statement if appropriate.
												// Semicolon can be the start (and end) of a statement
												this._output.space_before_token = false;
											} else {
												this.handle_whitespace_and_comments(current_token);
											}

											var next_token = this._tokens.peek();
											while (
												this._flags.mode === MODE.Statement &&
												!(this._flags.if_block && reserved_word(next_token, 'else')) &&
												!this._flags.do_block
											) {
												this.restore_mode();
											}

											// hacky but effective for the moment
											if (this._flags.import_block) {
												this._flags.import_block = false;
											}
											this.print_token(current_token);
										};

										Beautifier.prototype.handle_string = function (current_token) {
											if (this.start_of_statement(current_token)) {
												// The conditional starts the statement if appropriate.
												// One difference - strings want at least a space before
												this._output.space_before_token = true;
											} else {
												this.handle_whitespace_and_comments(current_token);
												if (
													this._flags.last_token.type === TOKEN.RESERVED ||
													this._flags.last_token.type === TOKEN.WORD ||
													this._flags.inline_frame
												) {
													this._output.space_before_token = true;
												} else if (
													this._flags.last_token.type === TOKEN.COMMA ||
													this._flags.last_token.type === TOKEN.START_EXPR ||
													this._flags.last_token.type === TOKEN.EQUALS ||
													this._flags.last_token.type === TOKEN.OPERATOR
												) {
													if (!this.start_of_object_property()) {
														this.allow_wrap_or_preserved_newline(current_token);
													}
												} else {
													this.print_newline();
												}
											}
											this.print_token(current_token);
										};

										Beautifier.prototype.handle_equals = function (current_token) {
											if (this.start_of_statement(current_token));
											else {
												this.handle_whitespace_and_comments(current_token);
											}

											if (this._flags.declaration_statement) {
												// just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
												this._flags.declaration_assignment = true;
											}
											this._output.space_before_token = true;
											this.print_token(current_token);
											this._output.space_before_token = true;
										};

										Beautifier.prototype.handle_comma = function (current_token) {
											this.handle_whitespace_and_comments(current_token, true);

											this.print_token(current_token);
											this._output.space_before_token = true;
											if (this._flags.declaration_statement) {
												if (is_expression(this._flags.parent.mode)) {
													// do not break on comma, for(var a = 1, b = 2)
													this._flags.declaration_assignment = false;
												}

												if (this._flags.declaration_assignment) {
													this._flags.declaration_assignment = false;
													this.print_newline(false, true);
												} else if (this._options.comma_first) {
													// for comma-first, we want to allow a newline before the comma
													// to turn into a newline after the comma, which we will fixup later
													this.allow_wrap_or_preserved_newline(current_token);
												}
											} else if (
												this._flags.mode === MODE.ObjectLiteral ||
												(this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral)
											) {
												if (this._flags.mode === MODE.Statement) {
													this.restore_mode();
												}

												if (!this._flags.inline_frame) {
													this.print_newline();
												}
											} else if (this._options.comma_first) {
												// EXPR or DO_BLOCK
												// for comma-first, we want to allow a newline before the comma
												// to turn into a newline after the comma, which we will fixup later
												this.allow_wrap_or_preserved_newline(current_token);
											}
										};

										Beautifier.prototype.handle_operator = function (current_token) {
											var isGeneratorAsterisk =
												current_token.text === '*' &&
												(reserved_array(this._flags.last_token, ['function', 'yield']) ||
													in_array(this._flags.last_token.type, [
														TOKEN.START_BLOCK,
														TOKEN.COMMA,
														TOKEN.END_BLOCK,
														TOKEN.SEMICOLON
													]));
											var isUnary =
												in_array(current_token.text, ['-', '+']) &&
												(in_array(this._flags.last_token.type, [
													TOKEN.START_BLOCK,
													TOKEN.START_EXPR,
													TOKEN.EQUALS,
													TOKEN.OPERATOR
												]) ||
													in_array(this._flags.last_token.text, line_starters) ||
													this._flags.last_token.text === ',');

											if (this.start_of_statement(current_token));
											else {
												var preserve_statement_flags = !isGeneratorAsterisk;
												this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
											}

											if (reserved_array(this._flags.last_token, special_words)) {
												// "return" had a special handling in TK_WORD. Now we need to return the favor
												this._output.space_before_token = true;
												this.print_token(current_token);
												return;
											}

											// hack for actionscript's import .*;
											if (current_token.text === '*' && this._flags.last_token.type === TOKEN.DOT) {
												this.print_token(current_token);
												return;
											}

											if (current_token.text === '::') {
												// no spaces around exotic namespacing syntax operator
												this.print_token(current_token);
												return;
											}

											// Allow line wrapping between operators when operator_position is
											//   set to before or preserve
											if (
												this._flags.last_token.type === TOKEN.OPERATOR &&
												in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
											) {
												this.allow_wrap_or_preserved_newline(current_token);
											}

											if (current_token.text === ':' && this._flags.in_case) {
												this._flags.case_body = true;
												this.indent();
												this.print_token(current_token);
												this.print_newline();
												this._flags.in_case = false;
												return;
											}

											var space_before = true;
											var space_after = true;
											var in_ternary = false;
											if (current_token.text === ':') {
												if (this._flags.ternary_depth === 0) {
													// Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
													space_before = false;
												} else {
													this._flags.ternary_depth -= 1;
													in_ternary = true;
												}
											} else if (current_token.text === '?') {
												this._flags.ternary_depth += 1;
											}

											// let's handle the operator_position option prior to any conflicting logic
											if (
												!isUnary &&
												!isGeneratorAsterisk &&
												this._options.preserve_newlines &&
												in_array(current_token.text, positionable_operators)
											) {
												var isColon = current_token.text === ':';
												var isTernaryColon = isColon && in_ternary;
												var isOtherColon = isColon && !in_ternary;

												switch (this._options.operator_position) {
													case OPERATOR_POSITION.before_newline:
														// if the current token is : and it's not a ternary statement then we set space_before to false
														this._output.space_before_token = !isOtherColon;

														this.print_token(current_token);

														if (!isColon || isTernaryColon) {
															this.allow_wrap_or_preserved_newline(current_token);
														}

														this._output.space_before_token = true;
														return;

													case OPERATOR_POSITION.after_newline:
														// if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
														//   then print a newline.

														this._output.space_before_token = true;

														if (!isColon || isTernaryColon) {
															if (this._tokens.peek().newlines) {
																this.print_newline(false, true);
															} else {
																this.allow_wrap_or_preserved_newline(current_token);
															}
														} else {
															this._output.space_before_token = false;
														}

														this.print_token(current_token);

														this._output.space_before_token = true;
														return;

													case OPERATOR_POSITION.preserve_newline:
														if (!isOtherColon) {
															this.allow_wrap_or_preserved_newline(current_token);
														}

														// if we just added a newline, or the current token is : and it's not a ternary statement,
														//   then we set space_before to false
														space_before = !(this._output.just_added_newline() || isOtherColon);

														this._output.space_before_token = space_before;
														this.print_token(current_token);
														this._output.space_before_token = true;
														return;
												}
											}

											if (isGeneratorAsterisk) {
												this.allow_wrap_or_preserved_newline(current_token);
												space_before = false;
												var next_token = this._tokens.peek();
												space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
											} else if (current_token.text === '...') {
												this.allow_wrap_or_preserved_newline(current_token);
												space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
												space_after = false;
											} else if (in_array(current_token.text, ['--', '++', '!', '~']) || isUnary) {
												// unary operators (and binary +/- pretending to be unary) special cases
												if (
													this._flags.last_token.type === TOKEN.COMMA ||
													this._flags.last_token.type === TOKEN.START_EXPR
												) {
													this.allow_wrap_or_preserved_newline(current_token);
												}

												space_before = false;
												space_after = false;

												// http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
												// if there is a newline between -- or ++ and anything else we should preserve it.
												if (current_token.newlines && (current_token.text === '--' || current_token.text === '++')) {
													this.print_newline(false, true);
												}

												if (this._flags.last_token.text === ';' && is_expression(this._flags.mode)) {
													// for (;; ++i)
													//        ^^^
													space_before = true;
												}

												if (this._flags.last_token.type === TOKEN.RESERVED) {
													space_before = true;
												} else if (this._flags.last_token.type === TOKEN.END_EXPR) {
													space_before = !(
														this._flags.last_token.text === ']' &&
														(current_token.text === '--' || current_token.text === '++')
													);
												} else if (this._flags.last_token.type === TOKEN.OPERATOR) {
													// a++ + ++b;
													// a - -b
													space_before =
														in_array(current_token.text, ['--', '-', '++', '+']) &&
														in_array(this._flags.last_token.text, ['--', '-', '++', '+']);
													// + and - are not unary when preceeded by -- or ++ operator
													// a-- + b
													// a * +b
													// a - -b
													if (
														in_array(current_token.text, ['+', '-']) &&
														in_array(this._flags.last_token.text, ['--', '++'])
													) {
														space_after = true;
													}
												}

												if (
													((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame) ||
														this._flags.mode === MODE.Statement) &&
													(this._flags.last_token.text === '{' || this._flags.last_token.text === ';')
												) {
													// { foo; --i }
													// foo(); --bar;
													this.print_newline();
												}
											}

											this._output.space_before_token = this._output.space_before_token || space_before;
											this.print_token(current_token);
											this._output.space_before_token = space_after;
										};

										Beautifier.prototype.handle_block_comment = function (current_token, preserve_statement_flags) {
											if (this._output.raw) {
												this._output.add_raw_token(current_token);
												if (current_token.directives && current_token.directives.preserve === 'end') {
													// If we're testing the raw output behavior, do not allow a directive to turn it off.
													this._output.raw = this._options.test_output_raw;
												}
												return;
											}

											if (current_token.directives) {
												this.print_newline(false, preserve_statement_flags);
												this.print_token(current_token);
												if (current_token.directives.preserve === 'start') {
													this._output.raw = true;
												}
												this.print_newline(false, true);
												return;
											}

											// inline block
											if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
												this._output.space_before_token = true;
												this.print_token(current_token);
												this._output.space_before_token = true;
												return;
											}

											var lines = split_linebreaks(current_token.text);
											var j; // iterator for this case
											var javadoc = false;
											var starless = false;
											var lastIndent = current_token.whitespace_before;
											var lastIndentLength = lastIndent.length;

											// block comment starts with a new line
											this.print_newline(false, preserve_statement_flags);
											if (lines.length > 1) {
												javadoc = all_lines_start_with(lines.slice(1), '*');
												starless = each_line_matches_indent(lines.slice(1), lastIndent);
											}

											// first line always indented
											this.print_token(current_token, lines[0]);
											for (j = 1; j < lines.length; j++) {
												this.print_newline(false, true);
												if (javadoc) {
													// javadoc: reformat and re-indent
													this.print_token(current_token, ' ' + ltrim(lines[j]));
												} else if (starless && lines[j].length > lastIndentLength) {
													// starless: re-indent non-empty content, avoiding trim
													this.print_token(current_token, lines[j].substring(lastIndentLength));
												} else {
													// normal comments output raw
													this._output.add_token(lines[j]);
												}
											}

											// for comments of more than one line, make sure there's a new line after
											this.print_newline(false, preserve_statement_flags);
										};

										Beautifier.prototype.handle_comment = function (current_token, preserve_statement_flags) {
											if (current_token.newlines) {
												this.print_newline(false, preserve_statement_flags);
											} else {
												this._output.trim(true);
											}

											this._output.space_before_token = true;
											this.print_token(current_token);
											this.print_newline(false, preserve_statement_flags);
										};

										Beautifier.prototype.handle_dot = function (current_token) {
											if (this.start_of_statement(current_token));
											else {
												this.handle_whitespace_and_comments(current_token, true);
											}

											if (reserved_array(this._flags.last_token, special_words)) {
												this._output.space_before_token = false;
											} else {
												// allow preserved newlines before dots in general
												// force newlines on dots after close paren when break_chained - for bar().baz()
												this.allow_wrap_or_preserved_newline(
													current_token,
													this._flags.last_token.text === ')' && this._options.break_chained_methods
												);
											}

											// Only unindent chained method dot if this dot starts a new line.
											// Otherwise the automatic extra indentation removal will handle the over indent
											if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
												this.deindent();
											}

											this.print_token(current_token);
										};

										Beautifier.prototype.handle_unknown = function (current_token, preserve_statement_flags) {
											this.print_token(current_token);

											if (current_token.text[current_token.text.length - 1] === '\n') {
												this.print_newline(false, preserve_statement_flags);
											}
										};

										Beautifier.prototype.handle_eof = function (current_token) {
											// Unwind any open statements
											while (this._flags.mode === MODE.Statement) {
												this.restore_mode();
											}
											this.handle_whitespace_and_comments(current_token);
										};

										module.exports.Beautifier = Beautifier;

										/***/
									},
									/* 2 */
									/***/ function (module, exports, __webpack_require__) {
										function OutputLine(parent) {
											this.__parent = parent;
											this.__character_count = 0;
											// use indent_count as a marker for this.__lines that have preserved indentation
											this.__indent_count = -1;
											this.__alignment_count = 0;

											this.__items = [];
										}

										OutputLine.prototype.item = function (index) {
											if (index < 0) {
												return this.__items[this.__items.length + index];
											} else {
												return this.__items[index];
											}
										};

										OutputLine.prototype.has_match = function (pattern) {
											for (
												var lastCheckedOutput = this.__items.length - 1;
												lastCheckedOutput >= 0;
												lastCheckedOutput--
											) {
												if (this.__items[lastCheckedOutput].match(pattern)) {
													return true;
												}
											}
											return false;
										};

										OutputLine.prototype.set_indent = function (indent, alignment) {
											this.__indent_count = indent || 0;
											this.__alignment_count = alignment || 0;
											this.__character_count =
												this.__parent.baseIndentLength +
												this.__alignment_count +
												this.__indent_count * this.__parent.indent_length;
										};

										OutputLine.prototype.get_character_count = function () {
											return this.__character_count;
										};

										OutputLine.prototype.is_empty = function () {
											return this.__items.length === 0;
										};

										OutputLine.prototype.last = function () {
											if (!this.is_empty()) {
												return this.__items[this.__items.length - 1];
											} else {
												return null;
											}
										};

										OutputLine.prototype.push = function (item) {
											this.__items.push(item);
											this.__character_count += item.length;
										};

										OutputLine.prototype.push_raw = function (item) {
											this.push(item);
											var last_newline_index = item.lastIndexOf('\n');
											if (last_newline_index !== -1) {
												this.__character_count = item.length - last_newline_index;
											}
										};

										OutputLine.prototype.pop = function () {
											var item = null;
											if (!this.is_empty()) {
												item = this.__items.pop();
												this.__character_count -= item.length;
											}
											return item;
										};

										OutputLine.prototype.remove_indent = function () {
											if (this.__indent_count > 0) {
												this.__indent_count -= 1;
												this.__character_count -= this.__parent.indent_length;
											}
										};

										OutputLine.prototype.trim = function () {
											while (this.last() === ' ') {
												this.__items.pop();
												this.__character_count -= 1;
											}
										};

										OutputLine.prototype.toString = function () {
											var result = '';
											if (!this.is_empty()) {
												if (this.__indent_count >= 0) {
													result = this.__parent.get_indent_string(this.__indent_count);
												}
												if (this.__alignment_count >= 0) {
													result += this.__parent.get_alignment_string(this.__alignment_count);
												}
												result += this.__items.join('');
											}
											return result;
										};

										function IndentCache(base_string, level_string) {
											this.__cache = [base_string];
											this.__level_string = level_string;
										}

										IndentCache.prototype.__ensure_cache = function (level) {
											while (level >= this.__cache.length) {
												this.__cache.push(this.__cache[this.__cache.length - 1] + this.__level_string);
											}
										};

										IndentCache.prototype.get_level_string = function (level) {
											this.__ensure_cache(level);
											return this.__cache[level];
										};

										function Output(options, baseIndentString) {
											var indent_string = options.indent_char;
											if (options.indent_size > 1) {
												indent_string = new Array(options.indent_size + 1).join(options.indent_char);
											}

											// Set to null to continue support for auto detection of base indent level.
											baseIndentString = baseIndentString || '';
											if (options.indent_level > 0) {
												baseIndentString = new Array(options.indent_level + 1).join(indent_string);
											}

											this.__indent_cache = new IndentCache(baseIndentString, indent_string);
											this.__alignment_cache = new IndentCache('', ' ');
											this.baseIndentLength = baseIndentString.length;
											this.indent_length = indent_string.length;
											this.raw = false;
											this._end_with_newline = options.end_with_newline;

											this.__lines = [];
											this.previous_line = null;
											this.current_line = null;
											this.space_before_token = false;
											// initialize
											this.__add_outputline();
										}

										Output.prototype.__add_outputline = function () {
											this.previous_line = this.current_line;
											this.current_line = new OutputLine(this);
											this.__lines.push(this.current_line);
										};

										Output.prototype.get_line_number = function () {
											return this.__lines.length;
										};

										Output.prototype.get_indent_string = function (level) {
											return this.__indent_cache.get_level_string(level);
										};

										Output.prototype.get_alignment_string = function (level) {
											return this.__alignment_cache.get_level_string(level);
										};

										Output.prototype.is_empty = function () {
											return !this.previous_line && this.current_line.is_empty();
										};

										Output.prototype.add_new_line = function (force_newline) {
											// never newline at the start of file
											// otherwise, newline only if we didn't just add one or we're forced
											if (this.is_empty() || (!force_newline && this.just_added_newline())) {
												return false;
											}

											// if raw output is enabled, don't print additional newlines,
											// but still return True as though you had
											if (!this.raw) {
												this.__add_outputline();
											}
											return true;
										};

										Output.prototype.get_code = function (eol) {
											var sweet_code = this.__lines.join('\n').replace(/[\r\n\t ]+$/, '');

											if (this._end_with_newline) {
												sweet_code += '\n';
											}

											if (eol !== '\n') {
												sweet_code = sweet_code.replace(/[\n]/g, eol);
											}

											return sweet_code;
										};

										Output.prototype.set_indent = function (indent, alignment) {
											indent = indent || 0;
											alignment = alignment || 0;

											// Never indent your first output indent at the start of the file
											if (this.__lines.length > 1) {
												this.current_line.set_indent(indent, alignment);
												return true;
											}
											this.current_line.set_indent();
											return false;
										};

										Output.prototype.add_raw_token = function (token) {
											for (var x = 0; x < token.newlines; x++) {
												this.__add_outputline();
											}
											this.current_line.push(token.whitespace_before);
											this.current_line.push_raw(token.text);
											this.space_before_token = false;
										};

										Output.prototype.add_token = function (printable_token) {
											this.add_space_before_token();
											this.current_line.push(printable_token);
										};

										Output.prototype.add_space_before_token = function () {
											if (this.space_before_token && !this.just_added_newline()) {
												this.current_line.push(' ');
											}
											this.space_before_token = false;
										};

										Output.prototype.remove_indent = function (index) {
											var output_length = this.__lines.length;
											while (index < output_length) {
												this.__lines[index].remove_indent();
												index++;
											}
										};

										Output.prototype.trim = function (eat_newlines) {
											eat_newlines = eat_newlines === undefined ? false : eat_newlines;

											this.current_line.trim(this.indent_string, this.baseIndentString);

											while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
												this.__lines.pop();
												this.current_line = this.__lines[this.__lines.length - 1];
												this.current_line.trim();
											}

											this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
										};

										Output.prototype.just_added_newline = function () {
											return this.current_line.is_empty();
										};

										Output.prototype.just_added_blankline = function () {
											return this.is_empty() || (this.current_line.is_empty() && this.previous_line.is_empty());
										};

										Output.prototype.ensure_empty_line_above = function (starts_with, ends_with) {
											var index = this.__lines.length - 2;
											while (index >= 0) {
												var potentialEmptyLine = this.__lines[index];
												if (potentialEmptyLine.is_empty()) {
													break;
												} else if (
													potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
													potentialEmptyLine.item(-1) !== ends_with
												) {
													this.__lines.splice(index + 1, 0, new OutputLine(this));
													this.previous_line = this.__lines[this.__lines.length - 2];
													break;
												}
												index--;
											}
										};

										module.exports.Output = Output;

										/***/
									},
									/* 3 */
									/***/ function (module, exports, __webpack_require__) {
										function Token(type, text, newlines, whitespace_before) {
											this.type = type;
											this.text = text;

											// comments_before are
											// comments that have a new line before them
											// and may or may not have a newline after
											// this is a set of comments before
											this.comments_before = null; /* inline comment*/

											// this.comments_after =  new TokenStream(); // no new line before and newline after
											this.newlines = newlines || 0;
											this.whitespace_before = whitespace_before || '';
											this.parent = null;
											this.next = null;
											this.previous = null;
											this.opened = null;
											this.closed = null;
											this.directives = null;
										}

										module.exports.Token = Token;

										/***/
									},
									/* 4 */
									/***/ function (module, exports, __webpack_require__) {
										// Parts of this section of code is taken from acorn.
										//
										// Acorn was written by Marijn Haverbeke and released under an MIT
										// license. The Unicode regexps (for identifiers and whitespace) were
										// taken from [Esprima](http://esprima.org) by Ariya Hidayat.
										//
										// Git repositories for Acorn are available at
										//
										//     http://marijnhaverbeke.nl/git/acorn
										//     https://github.com/marijnh/acorn.git

										// ## Character categories

										// acorn used char codes to squeeze the last bit of performance out
										// Beautifier is okay without that, so we're using regex
										// permit $ (36) and @ (64). @ is used in ES7 decorators.
										// 65 through 91 are uppercase letters.
										// permit _ (95).
										// 97 through 123 are lowercase letters.
										var baseASCIIidentifierStartChars = '\x24\x40\x41-\x5a\x5f\x61-\x7a';

										// inside an identifier @ is not allowed but 0-9 are.
										var baseASCIIidentifierChars = '\x24\x30-\x39\x41-\x5a\x5f\x61-\x7a';

										// Big ugly regular expressions that match characters in the
										// whitespace, identifier, and identifier-start categories. These
										// are only applied when a character is found to actually have a
										// code point above 128.
										var nonASCIIidentifierStartChars =
											'\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc';
										var nonASCIIidentifierChars =
											'\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f';
										//var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
										//var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

										var identifierStart = '[' + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + ']';
										var identifierChars =
											'[' + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + ']*';

										exports.identifier = new RegExp(identifierStart + identifierChars, 'g');

										// Whether a single character denotes a newline.

										exports.newline = /[\n\r\u2028\u2029]/;

										// Matches a whole line break (where CRLF is considered a single
										// line break). Used to count lines.

										// in javascript, these two differ
										// in python they are the same, different methods are called on them
										exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
										exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');

										/***/
									},
									/* 5 */
									/***/ function (module, exports, __webpack_require__) {
										var BaseOptions = __webpack_require__(6).Options;

										var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

										function Options(options) {
											BaseOptions.call(this, options, 'js');

											// compatibility, re
											var raw_brace_style = this.raw_options.brace_style || null;
											if (raw_brace_style === 'expand-strict') {
												//graceful handling of deprecated option
												this.raw_options.brace_style = 'expand';
											} else if (raw_brace_style === 'collapse-preserve-inline') {
												//graceful handling of deprecated option
												this.raw_options.brace_style = 'collapse,preserve-inline';
											} else if (this.raw_options.braces_on_own_line !== undefined) {
												//graceful handling of deprecated option
												this.raw_options.brace_style = this.raw_options.braces_on_own_line ? 'expand' : 'collapse';
												// } else if (!raw_brace_style) { //Nothing exists to set it
												//   raw_brace_style = "collapse";
											}

											//preserve-inline in delimited string will trigger brace_preserve_inline, everything
											//else is considered a brace_style and the last one only will have an effect

											var brace_style_split = this._get_selection_list('brace_style', [
												'collapse',
												'expand',
												'end-expand',
												'none',
												'preserve-inline'
											]);

											this.brace_preserve_inline = false; //Defaults in case one or other was not specified in meta-option
											this.brace_style = 'collapse';

											for (var bs = 0; bs < brace_style_split.length; bs++) {
												if (brace_style_split[bs] === 'preserve-inline') {
													this.brace_preserve_inline = true;
												} else {
													this.brace_style = brace_style_split[bs];
												}
											}

											this.unindent_chained_methods = this._get_boolean('unindent_chained_methods');
											this.break_chained_methods = this._get_boolean('break_chained_methods');
											this.space_in_paren = this._get_boolean('space_in_paren');
											this.space_in_empty_paren = this._get_boolean('space_in_empty_paren');
											this.jslint_happy = this._get_boolean('jslint_happy');
											this.space_after_anon_function = this._get_boolean('space_after_anon_function');
											this.space_after_named_function = this._get_boolean('space_after_named_function');
											this.keep_array_indentation = this._get_boolean('keep_array_indentation');
											this.space_before_conditional = this._get_boolean('space_before_conditional', true);
											this.unescape_strings = this._get_boolean('unescape_strings');
											this.e4x = this._get_boolean('e4x');
											this.comma_first = this._get_boolean('comma_first');
											this.operator_position = this._get_selection('operator_position', validPositionValues);

											// For testing of beautify preserve:start directive
											this.test_output_raw = this._get_boolean('test_output_raw');

											// force this._options.space_after_anon_function to true if this._options.jslint_happy
											if (this.jslint_happy) {
												this.space_after_anon_function = true;
											}
										}
										Options.prototype = new BaseOptions();

										module.exports.Options = Options;

										/***/
									},
									/* 6 */
									/***/ function (module, exports, __webpack_require__) {
										function Options(options, merge_child_field) {
											this.raw_options = _mergeOpts(options, merge_child_field);

											// Support passing the source text back with no change
											this.disabled = this._get_boolean('disabled');

											this.eol = this._get_characters('eol', 'auto');
											this.end_with_newline = this._get_boolean('end_with_newline');
											this.indent_size = this._get_number('indent_size', 4);
											this.indent_char = this._get_characters('indent_char', ' ');
											this.indent_level = this._get_number('indent_level');

											this.preserve_newlines = this._get_boolean('preserve_newlines', true);
											this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
											if (!this.preserve_newlines) {
												this.max_preserve_newlines = 0;
											}

											this.indent_with_tabs = this._get_boolean('indent_with_tabs');
											if (this.indent_with_tabs) {
												this.indent_char = '\t';
												this.indent_size = 1;
											}

											// Backwards compat with 1.3.x
											this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));
										}

										Options.prototype._get_array = function (name, default_value) {
											var option_value = this.raw_options[name];
											var result = default_value || [];
											if (typeof option_value === 'object') {
												if (option_value !== null && typeof option_value.concat === 'function') {
													result = option_value.concat();
												}
											} else if (typeof option_value === 'string') {
												result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
											}
											return result;
										};

										Options.prototype._get_boolean = function (name, default_value) {
											var option_value = this.raw_options[name];
											var result = option_value === undefined ? !!default_value : !!option_value;
											return result;
										};

										Options.prototype._get_characters = function (name, default_value) {
											var option_value = this.raw_options[name];
											var result = default_value || '';
											if (typeof option_value === 'string') {
												result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
											}
											return result;
										};

										Options.prototype._get_number = function (name, default_value) {
											var option_value = this.raw_options[name];
											default_value = parseInt(default_value, 10);
											if (isNaN(default_value)) {
												default_value = 0;
											}
											var result = parseInt(option_value, 10);
											if (isNaN(result)) {
												result = default_value;
											}
											return result;
										};

										Options.prototype._get_selection = function (name, selection_list, default_value) {
											var result = this._get_selection_list(name, selection_list, default_value);
											if (result.length !== 1) {
												throw new Error(
													"Invalid Option Value: The option '" +
														name +
														"' can only be one of the following values:\n" +
														selection_list +
														"\nYou passed in: '" +
														this.raw_options[name] +
														"'"
												);
											}

											return result[0];
										};

										Options.prototype._get_selection_list = function (name, selection_list, default_value) {
											if (!selection_list || selection_list.length === 0) {
												throw new Error('Selection list cannot be empty.');
											}

											default_value = default_value || [selection_list[0]];
											if (!this._is_valid_selection(default_value, selection_list)) {
												throw new Error('Invalid Default Value!');
											}

											var result = this._get_array(name, default_value);
											if (!this._is_valid_selection(result, selection_list)) {
												throw new Error(
													"Invalid Option Value: The option '" +
														name +
														"' can contain only the following values:\n" +
														selection_list +
														"\nYou passed in: '" +
														this.raw_options[name] +
														"'"
												);
											}

											return result;
										};

										Options.prototype._is_valid_selection = function (result, selection_list) {
											return (
												result.length &&
												selection_list.length &&
												!result.some(function (item) {
													return selection_list.indexOf(item) === -1;
												})
											);
										};

										// merges child options up with the parent options object
										// Example: obj = {a: 1, b: {a: 2}}
										//          mergeOpts(obj, 'b')
										//
										//          Returns: {a: 2}
										function _mergeOpts(allOptions, childFieldName) {
											var finalOpts = {};
											allOptions = _normalizeOpts(allOptions);
											var name;

											for (name in allOptions) {
												if (name !== childFieldName) {
													finalOpts[name] = allOptions[name];
												}
											}

											//merge in the per type settings for the childFieldName
											if (childFieldName && allOptions[childFieldName]) {
												for (name in allOptions[childFieldName]) {
													finalOpts[name] = allOptions[childFieldName][name];
												}
											}
											return finalOpts;
										}

										function _normalizeOpts(options) {
											var convertedOpts = {};
											var key;

											for (key in options) {
												var newKey = key.replace(/-/g, '_');
												convertedOpts[newKey] = options[key];
											}
											return convertedOpts;
										}

										module.exports.Options = Options;
										module.exports.normalizeOpts = _normalizeOpts;
										module.exports.mergeOpts = _mergeOpts;

										/***/
									},
									/* 7 */
									/***/ function (module, exports, __webpack_require__) {
										var InputScanner = __webpack_require__(8).InputScanner;
										var BaseTokenizer = __webpack_require__(9).Tokenizer;
										var BASETOKEN = __webpack_require__(9).TOKEN;
										var Directives = __webpack_require__(11).Directives;
										var acorn = __webpack_require__(4);

										function in_array(what, arr) {
											return arr.indexOf(what) !== -1;
										}

										var TOKEN = {
											START_EXPR: 'TK_START_EXPR',
											END_EXPR: 'TK_END_EXPR',
											START_BLOCK: 'TK_START_BLOCK',
											END_BLOCK: 'TK_END_BLOCK',
											WORD: 'TK_WORD',
											RESERVED: 'TK_RESERVED',
											SEMICOLON: 'TK_SEMICOLON',
											STRING: 'TK_STRING',
											EQUALS: 'TK_EQUALS',
											OPERATOR: 'TK_OPERATOR',
											COMMA: 'TK_COMMA',
											BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
											COMMENT: 'TK_COMMENT',
											DOT: 'TK_DOT',
											UNKNOWN: 'TK_UNKNOWN',
											START: BASETOKEN.START,
											RAW: BASETOKEN.RAW,
											EOF: BASETOKEN.EOF
										};

										var directives_core = new Directives(/\/\*/, /\*\//);

										var number_pattern =
											/0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/g;

										var digit = /[0-9]/;

										// Dot "." must be distinguished from "..." and decimal
										var dot_pattern = /[^\d\.]/;

										var positionable_operators = (
											'>>> === !== ' +
											'<< && >= ** != == <= >> || ' +
											'< / - + > : & % ? ^ | *'
										).split(' ');

										// IMPORTANT: this must be sorted longest to shortest or tokenizing many not work.
										// Also, you must update possitionable operators separately from punct
										var punct =
											'>>>= ' +
											'... >>= <<= === >>> !== **= ' +
											'=> ^= :: /= << <= == && -= >= >> != -- += ** || ++ %= &= *= |= ' +
											'= ! ? > < : / ^ - + * & % ~ |';

										punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&');
										punct = punct.replace(/ /g, '|');

										var punct_pattern = new RegExp(punct, 'g');
										var shebang_pattern = /#![^\n\r\u2028\u2029]*(?:\r\n|[\n\r\u2028\u2029])?/g;
										var include_pattern = /#include[^\n\r\u2028\u2029]*(?:\r\n|[\n\r\u2028\u2029])?/g;

										// words which should always start on new line.
										var line_starters =
											'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(
												','
											);
										var reserved_words = line_starters.concat([
											'do',
											'in',
											'of',
											'else',
											'get',
											'set',
											'new',
											'catch',
											'finally',
											'typeof',
											'yield',
											'async',
											'await',
											'from',
											'as'
										]);
										var reserved_word_pattern = new RegExp('^(?:' + reserved_words.join('|') + ')$');

										//  /* ... */ comment ends with nearest */ or end of file
										var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;

										// comment ends just before nearest linefeed or end of file
										var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;

										var template_pattern = /(?:(?:<\?php|<\?=)[\s\S]*?\?>)|(?:<%[\s\S]*?%>)/g;

										var in_html_comment;

										var Tokenizer = function (input_string, options) {
											BaseTokenizer.call(this, input_string, options);

											this._whitespace_pattern =
												/[\n\r\u2028\u2029\t\u000B\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff ]+/g;
											this._newline_pattern = /([^\n\r\u2028\u2029]*)(\r\n|[\n\r\u2028\u2029])?/g;
										};
										Tokenizer.prototype = new BaseTokenizer();

										Tokenizer.prototype._is_comment = function (current_token) {
											return (
												current_token.type === TOKEN.COMMENT ||
												current_token.type === TOKEN.BLOCK_COMMENT ||
												current_token.type === TOKEN.UNKNOWN
											);
										};

										Tokenizer.prototype._is_opening = function (current_token) {
											return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
										};

										Tokenizer.prototype._is_closing = function (current_token, open_token) {
											return (
												(current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) &&
												open_token &&
												((current_token.text === ']' && open_token.text === '[') ||
													(current_token.text === ')' && open_token.text === '(') ||
													(current_token.text === '}' && open_token.text === '{'))
											);
										};

										Tokenizer.prototype._reset = function () {
											in_html_comment = false;
										};

										Tokenizer.prototype._get_next_token = function (previous_token, open_token) {
											this._readWhitespace();
											var token = null;
											var c = this._input.peek();

											token = token || this._read_singles(c);
											token = token || this._read_word(previous_token);
											token = token || this._read_comment(c);
											token = token || this._read_string(c);
											token = token || this._read_regexp(c, previous_token);
											token = token || this._read_xml(c, previous_token);
											token = token || this._read_non_javascript(c);
											token = token || this._read_punctuation();
											token = token || this._create_token(TOKEN.UNKNOWN, this._input.next());

											return token;
										};

										Tokenizer.prototype._read_word = function (previous_token) {
											var resulting_string;
											resulting_string = this._input.read(acorn.identifier);
											if (resulting_string !== '') {
												if (
													!(
														previous_token.type === TOKEN.DOT ||
														(previous_token.type === TOKEN.RESERVED &&
															(previous_token.text === 'set' || previous_token.text === 'get'))
													) &&
													reserved_word_pattern.test(resulting_string)
												) {
													if (resulting_string === 'in' || resulting_string === 'of') {
														// hack for 'in' and 'of' operators
														return this._create_token(TOKEN.OPERATOR, resulting_string);
													}
													return this._create_token(TOKEN.RESERVED, resulting_string);
												}

												return this._create_token(TOKEN.WORD, resulting_string);
											}

											resulting_string = this._input.read(number_pattern);
											if (resulting_string !== '') {
												return this._create_token(TOKEN.WORD, resulting_string);
											}
										};

										Tokenizer.prototype._read_singles = function (c) {
											var token = null;
											if (c === null) {
												token = this._create_token(TOKEN.EOF, '');
											} else if (c === '(' || c === '[') {
												token = this._create_token(TOKEN.START_EXPR, c);
											} else if (c === ')' || c === ']') {
												token = this._create_token(TOKEN.END_EXPR, c);
											} else if (c === '{') {
												token = this._create_token(TOKEN.START_BLOCK, c);
											} else if (c === '}') {
												token = this._create_token(TOKEN.END_BLOCK, c);
											} else if (c === ';') {
												token = this._create_token(TOKEN.SEMICOLON, c);
											} else if (c === '.' && dot_pattern.test(this._input.peek(1))) {
												token = this._create_token(TOKEN.DOT, c);
											} else if (c === ',') {
												token = this._create_token(TOKEN.COMMA, c);
											}

											if (token) {
												this._input.next();
											}
											return token;
										};

										Tokenizer.prototype._read_punctuation = function () {
											var resulting_string = this._input.read(punct_pattern);

											if (resulting_string !== '') {
												if (resulting_string === '=') {
													return this._create_token(TOKEN.EQUALS, resulting_string);
												} else {
													return this._create_token(TOKEN.OPERATOR, resulting_string);
												}
											}
										};

										Tokenizer.prototype._read_non_javascript = function (c) {
											var resulting_string = '';

											if (c === '#') {
												if (this._is_first_token()) {
													resulting_string = this._input.read(shebang_pattern);

													if (resulting_string) {
														return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
													}
												}

												// handles extendscript #includes
												resulting_string = this._input.read(include_pattern);

												if (resulting_string) {
													return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + '\n');
												}

												c = this._input.next();

												// Spidermonkey-specific sharp variables for circular references. Considered obsolete.
												var sharp = '#';
												if (this._input.hasNext() && this._input.testChar(digit)) {
													do {
														c = this._input.next();
														sharp += c;
													} while (this._input.hasNext() && c !== '#' && c !== '=');
													if (c === '#');
													else if (this._input.peek() === '[' && this._input.peek(1) === ']') {
														sharp += '[]';
														this._input.next();
														this._input.next();
													} else if (this._input.peek() === '{' && this._input.peek(1) === '}') {
														sharp += '{}';
														this._input.next();
														this._input.next();
													}
													return this._create_token(TOKEN.WORD, sharp);
												}

												this._input.back();
											} else if (c === '<') {
												if (this._input.peek(1) === '?' || this._input.peek(1) === '%') {
													resulting_string = this._input.read(template_pattern);
													if (resulting_string) {
														resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');
														return this._create_token(TOKEN.STRING, resulting_string);
													}
												} else if (this._input.match(/<\!--/g)) {
													c = '<!--';
													while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
														c += this._input.next();
													}
													in_html_comment = true;
													return this._create_token(TOKEN.COMMENT, c);
												}
											} else if (c === '-' && in_html_comment && this._input.match(/-->/g)) {
												in_html_comment = false;
												return this._create_token(TOKEN.COMMENT, '-->');
											}

											return null;
										};

										Tokenizer.prototype._read_comment = function (c) {
											var token = null;
											if (c === '/') {
												var comment = '';
												if (this._input.peek(1) === '*') {
													// peek for comment /* ... */
													comment = this._input.read(block_comment_pattern);
													var directives = directives_core.get_directives(comment);
													if (directives && directives.ignore === 'start') {
														comment += directives_core.readIgnored(this._input);
													}
													comment = comment.replace(acorn.allLineBreaks, '\n');
													token = this._create_token(TOKEN.BLOCK_COMMENT, comment);
													token.directives = directives;
												} else if (this._input.peek(1) === '/') {
													// peek for comment // ...
													comment = this._input.read(comment_pattern);
													token = this._create_token(TOKEN.COMMENT, comment);
												}
											}
											return token;
										};

										Tokenizer.prototype._read_string = function (c) {
											if (c === '`' || c === "'" || c === '"') {
												var resulting_string = this._input.next();
												this.has_char_escapes = false;

												if (c === '`') {
													resulting_string += this._read_string_recursive('`', true, '${');
												} else {
													resulting_string += this._read_string_recursive(c);
												}

												if (this.has_char_escapes && this._options.unescape_strings) {
													resulting_string = unescape_string(resulting_string);
												}
												if (this._input.peek() === c) {
													resulting_string += this._input.next();
												}

												return this._create_token(TOKEN.STRING, resulting_string);
											}

											return null;
										};

										Tokenizer.prototype._allow_regexp_or_xml = function (previous_token) {
											// regex and xml can only appear in specific locations during parsing
											return (
												(previous_token.type === TOKEN.RESERVED &&
													in_array(previous_token.text, [
														'return',
														'case',
														'throw',
														'else',
														'do',
														'typeof',
														'yield'
													])) ||
												(previous_token.type === TOKEN.END_EXPR &&
													previous_token.text === ')' &&
													previous_token.opened.previous.type === TOKEN.RESERVED &&
													in_array(previous_token.opened.previous.text, ['if', 'while', 'for'])) ||
												in_array(previous_token.type, [
													TOKEN.COMMENT,
													TOKEN.START_EXPR,
													TOKEN.START_BLOCK,
													TOKEN.START,
													TOKEN.END_BLOCK,
													TOKEN.OPERATOR,
													TOKEN.EQUALS,
													TOKEN.EOF,
													TOKEN.SEMICOLON,
													TOKEN.COMMA
												])
											);
										};

										Tokenizer.prototype._read_regexp = function (c, previous_token) {
											if (c === '/' && this._allow_regexp_or_xml(previous_token)) {
												// handle regexp
												//
												var resulting_string = this._input.next();
												var esc = false;

												var in_char_class = false;
												while (
													this._input.hasNext() &&
													(esc || in_char_class || this._input.peek() !== c) &&
													!this._input.testChar(acorn.newline)
												) {
													resulting_string += this._input.peek();
													if (!esc) {
														esc = this._input.peek() === '\\';
														if (this._input.peek() === '[') {
															in_char_class = true;
														} else if (this._input.peek() === ']') {
															in_char_class = false;
														}
													} else {
														esc = false;
													}
													this._input.next();
												}

												if (this._input.peek() === c) {
													resulting_string += this._input.next();

													// regexps may have modifiers /regexp/MOD , so fetch those, too
													// Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
													resulting_string += this._input.read(acorn.identifier);
												}
												return this._create_token(TOKEN.STRING, resulting_string);
											}
											return null;
										};

										var startXmlRegExp =
											/<()([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;
										var xmlRegExp =
											/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;

										Tokenizer.prototype._read_xml = function (c, previous_token) {
											if (
												this._options.e4x &&
												c === '<' &&
												this._input.test(startXmlRegExp) &&
												this._allow_regexp_or_xml(previous_token)
											) {
												// handle e4x xml literals
												//
												var xmlStr = '';
												var match = this._input.match(startXmlRegExp);
												if (match) {
													// Trim root tag to attempt to
													var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
													var isCurlyRoot = rootTag.indexOf('{') === 0;
													var depth = 0;
													while (match) {
														var isEndTag = !!match[1];
														var tagName = match[2];
														var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === '![CDATA[';
														if (
															!isSingletonTag &&
															(tagName === rootTag ||
																(isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))
														) {
															if (isEndTag) {
																--depth;
															} else {
																++depth;
															}
														}
														xmlStr += match[0];
														if (depth <= 0) {
															break;
														}
														match = this._input.match(xmlRegExp);
													}
													// if we didn't close correctly, keep unformatted.
													if (!match) {
														xmlStr += this._input.match(/[\s\S]*/g)[0];
													}
													xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
													return this._create_token(TOKEN.STRING, xmlStr);
												}
											}

											return null;
										};

										function unescape_string(s) {
											// You think that a regex would work for this
											// return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
											//         return String.fromCharCode(parseInt(val, 16));
											//     })
											// However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
											var out = '',
												escaped = 0;

											var input_scan = new InputScanner(s);
											var matched = null;

											while (input_scan.hasNext()) {
												// Keep any whitespace, non-slash characters
												// also keep slash pairs.
												matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

												if (matched) {
													out += matched[0];
												}

												if (input_scan.peek() === '\\') {
													input_scan.next();
													if (input_scan.peek() === 'x') {
														matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
													} else if (input_scan.peek() === 'u') {
														matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
													} else {
														out += '\\';
														if (input_scan.hasNext()) {
															out += input_scan.next();
														}
														continue;
													}

													// If there's some error decoding, return the original string
													if (!matched) {
														return s;
													}

													escaped = parseInt(matched[1], 16);

													if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
														// we bail out on \x7f..\xff,
														// leaving whole string escaped,
														// as it's probably completely binary
														return s;
													} else if (escaped >= 0x00 && escaped < 0x20) {
														// leave 0x00...0x1f escaped
														out += '\\' + matched[0];
														continue;
													} else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
														// single-quote, apostrophe, backslash - escape these
														out += '\\' + String.fromCharCode(escaped);
													} else {
														out += String.fromCharCode(escaped);
													}
												}
											}

											return out;
										}

										// handle string
										//
										Tokenizer.prototype._read_string_recursive = function (
											delimiter,
											allow_unescaped_newlines,
											start_sub
										) {
											// Template strings can travers lines without escape characters.
											// Other strings cannot
											var current_char;
											var resulting_string = '';
											var esc = false;
											while (this._input.hasNext()) {
												current_char = this._input.peek();
												if (
													!(
														esc ||
														(current_char !== delimiter &&
															(allow_unescaped_newlines || !acorn.newline.test(current_char)))
													)
												) {
													break;
												}

												// Handle \r\n linebreaks after escapes or in template strings
												if ((esc || allow_unescaped_newlines) && acorn.newline.test(current_char)) {
													if (current_char === '\r' && this._input.peek(1) === '\n') {
														this._input.next();
														current_char = this._input.peek();
													}
													resulting_string += '\n';
												} else {
													resulting_string += current_char;
												}

												if (esc) {
													if (current_char === 'x' || current_char === 'u') {
														this.has_char_escapes = true;
													}
													esc = false;
												} else {
													esc = current_char === '\\';
												}

												this._input.next();

												if (
													start_sub &&
													resulting_string.indexOf(start_sub, resulting_string.length - start_sub.length) !== -1
												) {
													if (delimiter === '`') {
														resulting_string += this._read_string_recursive('}', allow_unescaped_newlines, '`');
													} else {
														resulting_string += this._read_string_recursive('`', allow_unescaped_newlines, '${');
													}

													if (this._input.hasNext()) {
														resulting_string += this._input.next();
													}
												}
											}

											return resulting_string;
										};

										module.exports.Tokenizer = Tokenizer;
										module.exports.TOKEN = TOKEN;
										module.exports.positionable_operators = positionable_operators.slice();
										module.exports.line_starters = line_starters.slice();

										/***/
									},
									/* 8 */
									/***/ function (module, exports, __webpack_require__) {
										function InputScanner(input_string) {
											this.__input = input_string || '';
											this.__input_length = this.__input.length;
											this.__position = 0;
										}

										InputScanner.prototype.restart = function () {
											this.__position = 0;
										};

										InputScanner.prototype.back = function () {
											if (this.__position > 0) {
												this.__position -= 1;
											}
										};

										InputScanner.prototype.hasNext = function () {
											return this.__position < this.__input_length;
										};

										InputScanner.prototype.next = function () {
											var val = null;
											if (this.hasNext()) {
												val = this.__input.charAt(this.__position);
												this.__position += 1;
											}
											return val;
										};

										InputScanner.prototype.peek = function (index) {
											var val = null;
											index = index || 0;
											index += this.__position;
											if (index >= 0 && index < this.__input_length) {
												val = this.__input.charAt(index);
											}
											return val;
										};

										InputScanner.prototype.test = function (pattern, index) {
											index = index || 0;
											index += this.__position;
											pattern.lastIndex = index;

											if (index >= 0 && index < this.__input_length) {
												var pattern_match = pattern.exec(this.__input);
												return pattern_match && pattern_match.index === index;
											} else {
												return false;
											}
										};

										InputScanner.prototype.testChar = function (pattern, index) {
											// test one character regex match
											var val = this.peek(index);
											return val !== null && pattern.test(val);
										};

										InputScanner.prototype.match = function (pattern) {
											pattern.lastIndex = this.__position;
											var pattern_match = pattern.exec(this.__input);
											if (pattern_match && pattern_match.index === this.__position) {
												this.__position += pattern_match[0].length;
											} else {
												pattern_match = null;
											}
											return pattern_match;
										};

										InputScanner.prototype.read = function (pattern) {
											var val = '';
											var match = this.match(pattern);
											if (match) {
												val = match[0];
											}
											return val;
										};

										InputScanner.prototype.readUntil = function (pattern, include_match) {
											var val = '';
											var match_index = this.__position;
											pattern.lastIndex = this.__position;
											var pattern_match = pattern.exec(this.__input);
											if (pattern_match) {
												if (include_match) {
													match_index = pattern_match.index + pattern_match[0].length;
												} else {
													match_index = pattern_match.index;
												}
											} else {
												match_index = this.__input_length;
											}

											val = this.__input.substring(this.__position, match_index);
											this.__position = match_index;
											return val;
										};

										InputScanner.prototype.readUntilAfter = function (pattern) {
											return this.readUntil(pattern, true);
										};

										/* css beautifier legacy helpers */
										InputScanner.prototype.peekUntilAfter = function (pattern) {
											var start = this.__position;
											var val = this.readUntilAfter(pattern);
											this.__position = start;
											return val;
										};

										InputScanner.prototype.lookBack = function (testVal) {
											var start = this.__position - 1;
											return (
												start >= testVal.length &&
												this.__input.substring(start - testVal.length, start).toLowerCase() === testVal
											);
										};

										module.exports.InputScanner = InputScanner;

										/***/
									},
									/* 9 */
									/***/ function (module, exports, __webpack_require__) {
										var InputScanner = __webpack_require__(8).InputScanner;
										var Token = __webpack_require__(3).Token;
										var TokenStream = __webpack_require__(10).TokenStream;

										var TOKEN = {
											START: 'TK_START',
											RAW: 'TK_RAW',
											EOF: 'TK_EOF'
										};

										var Tokenizer = function (input_string, options) {
											this._input = new InputScanner(input_string);
											this._options = options || {};
											this.__tokens = null;
											this.__newline_count = 0;
											this.__whitespace_before_token = '';

											this._whitespace_pattern = /[\n\r\t ]+/g;
											this._newline_pattern = /([^\n\r]*)(\r\n|[\n\r])?/g;
										};

										Tokenizer.prototype.tokenize = function () {
											this._input.restart();
											this.__tokens = new TokenStream();

											this._reset();

											var current;
											var previous = new Token(TOKEN.START, '');
											var open_token = null;
											var open_stack = [];
											var comments = new TokenStream();

											while (previous.type !== TOKEN.EOF) {
												current = this._get_next_token(previous, open_token);
												while (this._is_comment(current)) {
													comments.add(current);
													current = this._get_next_token(previous, open_token);
												}

												if (!comments.isEmpty()) {
													current.comments_before = comments;
													comments = new TokenStream();
												}

												current.parent = open_token;

												if (this._is_opening(current)) {
													open_stack.push(open_token);
													open_token = current;
												} else if (open_token && this._is_closing(current, open_token)) {
													current.opened = open_token;
													open_token.closed = current;
													open_token = open_stack.pop();
													current.parent = open_token;
												}

												current.previous = previous;
												previous.next = current;

												this.__tokens.add(current);
												previous = current;
											}

											return this.__tokens;
										};

										Tokenizer.prototype._is_first_token = function () {
											return this.__tokens.isEmpty();
										};

										Tokenizer.prototype._reset = function () {};

										Tokenizer.prototype._get_next_token = function (previous_token, open_token) {
											this._readWhitespace();
											var resulting_string = this._input.read(/.+/g);
											if (resulting_string) {
												return this._create_token(TOKEN.RAW, resulting_string);
											} else {
												return this._create_token(TOKEN.EOF, '');
											}
										};

										Tokenizer.prototype._is_comment = function (current_token) {
											return false;
										};

										Tokenizer.prototype._is_opening = function (current_token) {
											return false;
										};

										Tokenizer.prototype._is_closing = function (current_token, open_token) {
											return false;
										};

										Tokenizer.prototype._create_token = function (type, text) {
											var token = new Token(type, text, this.__newline_count, this.__whitespace_before_token);
											this.__newline_count = 0;
											this.__whitespace_before_token = '';
											return token;
										};

										Tokenizer.prototype._readWhitespace = function () {
											var resulting_string = this._input.read(this._whitespace_pattern);
											if (resulting_string === ' ') {
												this.__whitespace_before_token = resulting_string;
											} else if (resulting_string !== '') {
												this._newline_pattern.lastIndex = 0;
												var nextMatch = this._newline_pattern.exec(resulting_string);
												while (nextMatch[2]) {
													this.__newline_count += 1;
													nextMatch = this._newline_pattern.exec(resulting_string);
												}
												this.__whitespace_before_token = nextMatch[1];
											}
										};

										module.exports.Tokenizer = Tokenizer;
										module.exports.TOKEN = TOKEN;

										/***/
									},
									/* 10 */
									/***/ function (module, exports, __webpack_require__) {
										function TokenStream(parent_token) {
											// private
											this.__tokens = [];
											this.__tokens_length = this.__tokens.length;
											this.__position = 0;
											this.__parent_token = parent_token;
										}

										TokenStream.prototype.restart = function () {
											this.__position = 0;
										};

										TokenStream.prototype.isEmpty = function () {
											return this.__tokens_length === 0;
										};

										TokenStream.prototype.hasNext = function () {
											return this.__position < this.__tokens_length;
										};

										TokenStream.prototype.next = function () {
											var val = null;
											if (this.hasNext()) {
												val = this.__tokens[this.__position];
												this.__position += 1;
											}
											return val;
										};

										TokenStream.prototype.peek = function (index) {
											var val = null;
											index = index || 0;
											index += this.__position;
											if (index >= 0 && index < this.__tokens_length) {
												val = this.__tokens[index];
											}
											return val;
										};

										TokenStream.prototype.add = function (token) {
											if (this.__parent_token) {
												token.parent = this.__parent_token;
											}
											this.__tokens.push(token);
											this.__tokens_length += 1;
										};

										module.exports.TokenStream = TokenStream;

										/***/
									},
									/* 11 */
									/***/ function (module, exports, __webpack_require__) {
										function Directives(start_block_pattern, end_block_pattern) {
											start_block_pattern =
												typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
											end_block_pattern =
												typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
											this.__directives_block_pattern = new RegExp(
												start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern,
												'g'
											);
											this.__directive_pattern = / (\w+)[:](\w+)/g;

											this.__directives_end_ignore_pattern = new RegExp(
												'(?:[\\s\\S]*?)((?:' +
													start_block_pattern +
													/\sbeautify\signore:end\s/.source +
													end_block_pattern +
													')|$)',
												'g'
											);
										}

										Directives.prototype.get_directives = function (text) {
											if (!text.match(this.__directives_block_pattern)) {
												return null;
											}

											var directives = {};
											this.__directive_pattern.lastIndex = 0;
											var directive_match = this.__directive_pattern.exec(text);

											while (directive_match) {
												directives[directive_match[1]] = directive_match[2];
												directive_match = this.__directive_pattern.exec(text);
											}

											return directives;
										};

										Directives.prototype.readIgnored = function (input) {
											return input.read(this.__directives_end_ignore_pattern);
										};

										module.exports.Directives = Directives;

										/***/
									}
									/******/
								]
							);
							var js_beautify = legacy_beautify_js;
							/* Footer */
							{
								// Add support for CommonJS. Just put this file somewhere on your require.paths
								// and you will be able to `var js_beautify = require("beautify").js_beautify`.
								exports.js_beautify = js_beautify;
							}
						})();
					});

					unwrapExports(beautify);
					var beautify_1 = beautify.js_beautify;

					/*
					 * Generated by PEG.js 0.10.0.
					 *
					 * http://pegjs.org/
					 */

					var javaAST = (function () {
						function peg$subclass(child, parent) {
							function ctor() {
								this.constructor = child;
							}
							ctor.prototype = parent.prototype;
							child.prototype = new ctor();
						}

						function peg$SyntaxError(message, expected, found, location) {
							this.message = message;
							this.expected = expected;
							this.found = found;
							this.location = location;
							this.name = 'SyntaxError';

							if (typeof Error.captureStackTrace === 'function') {
								Error.captureStackTrace(this, peg$SyntaxError);
							}
						}

						peg$subclass(peg$SyntaxError, Error);

						peg$SyntaxError.buildMessage = function (expected, found) {
							var DESCRIBE_EXPECTATION_FNS = {
								literal: function (expectation) {
									return '"' + literalEscape(expectation.text) + '"';
								},

								class: function (expectation) {
									var escapedParts = '',
										i;

									for (i = 0; i < expectation.parts.length; i++) {
										escapedParts +=
											expectation.parts[i] instanceof Array
												? classEscape(expectation.parts[i][0]) + '-' + classEscape(expectation.parts[i][1])
												: classEscape(expectation.parts[i]);
									}

									return '[' + (expectation.inverted ? '^' : '') + escapedParts + ']';
								},

								any: function (expectation) {
									return 'any character';
								},

								end: function (expectation) {
									return 'end of input';
								},

								other: function (expectation) {
									return expectation.description;
								}
							};

							function hex(ch) {
								return ch.charCodeAt(0).toString(16).toUpperCase();
							}

							function literalEscape(s) {
								return s
									.replace(/\\/g, '\\\\')
									.replace(/"/g, '\\"')
									.replace(/\0/g, '\\0')
									.replace(/\t/g, '\\t')
									.replace(/\n/g, '\\n')
									.replace(/\r/g, '\\r')
									.replace(/[\x00-\x0F]/g, function (ch) {
										return '\\x0' + hex(ch);
									})
									.replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
										return '\\x' + hex(ch);
									});
							}

							function classEscape(s) {
								return s
									.replace(/\\/g, '\\\\')
									.replace(/\]/g, '\\]')
									.replace(/\^/g, '\\^')
									.replace(/-/g, '\\-')
									.replace(/\0/g, '\\0')
									.replace(/\t/g, '\\t')
									.replace(/\n/g, '\\n')
									.replace(/\r/g, '\\r')
									.replace(/[\x00-\x0F]/g, function (ch) {
										return '\\x0' + hex(ch);
									})
									.replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
										return '\\x' + hex(ch);
									});
							}

							function describeExpectation(expectation) {
								return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
							}

							function describeExpected(expected) {
								var descriptions = new Array(expected.length),
									i,
									j;

								for (i = 0; i < expected.length; i++) {
									descriptions[i] = describeExpectation(expected[i]);
								}

								descriptions.sort();

								if (descriptions.length > 0) {
									for (i = 1, j = 1; i < descriptions.length; i++) {
										if (descriptions[i - 1] !== descriptions[i]) {
											descriptions[j] = descriptions[i];
											j++;
										}
									}
									descriptions.length = j;
								}

								switch (descriptions.length) {
									case 1:
										return descriptions[0];

									case 2:
										return descriptions[0] + ' or ' + descriptions[1];

									default:
										return descriptions.slice(0, -1).join(', ') + ', or ' + descriptions[descriptions.length - 1];
								}
							}

							function describeFound(found) {
								return found ? '"' + literalEscape(found) + '"' : 'end of input';
							}

							return 'Expected ' + describeExpected(expected) + ' but ' + describeFound(found) + ' found.';
						};

						function peg$parse(input, options) {
							options = options !== void 0 ? options : {};

							var peg$FAILED = {},
								peg$startRuleFunctions = { CompilationUnit: peg$parseCompilationUnit },
								peg$startRuleFunction = peg$parseCompilationUnit,
								peg$c0 = function (pack, imports, types) {
									return {
										node: 'CompilationUnit',
										types: skipNulls(types),
										package: pack,
										imports: skipNulls(imports)
									};
								},
								peg$c1 = function (annot, name) {
									return {
										node: 'PackageDeclaration',
										name: name,
										annotations: annot
									};
								},
								peg$c2 = function (stat, name, asterisk) {
									return {
										node: 'ImportDeclaration',
										name: name,
										static: !!stat,
										onDemand: !!extractOptional(asterisk, 1)
									};
								},
								peg$c3 = function () {
									return null;
								},
								peg$c4 = function (modifiers, type) {
									return mergeProps(type, { modifiers: modifiers });
								},
								peg$c5 = function (id, gen, ext, impl, body) {
									return {
										node: 'TypeDeclaration',
										name: id,
										superInterfaceTypes: extractOptionalList(impl, 1),
										superclassType: extractOptional(ext, 1),
										bodyDeclarations: body,
										typeParameters: optionalList(gen),
										interface: false
									};
								},
								peg$c6 = function (decls) {
									return skipNulls(decls);
								},
								peg$c7 = function (modifier, body) {
									return {
										node: 'Initializer',
										body: body,
										modifiers: modifier === null ? [] : [makeModifier('static')]
									};
								},
								peg$c8 = function (modifiers, member) {
									return mergeProps(member, { modifiers: modifiers });
								},
								peg$c9 = function (params, rest) {
									return mergeProps(rest, {
										node: 'MethodDeclaration',
										typeParameters: params
									});
								},
								peg$c10 = function (type, id, rest) {
									return mergeProps(rest, {
										node: 'MethodDeclaration',
										returnType2: type,
										name: id,
										typeParameters: []
									});
								},
								peg$c11 = function (type, decls) {
									return {
										node: 'FieldDeclaration',
										fragments: decls,
										type: type
									};
								},
								peg$c12 = function (id, rest) {
									return mergeProps(rest, {
										node: 'MethodDeclaration',
										returnType2: makePrimitive('void'),
										name: id,
										constructor: false
									});
								},
								peg$c13 = function (id, rest) {
									return mergeProps(rest, {
										node: 'MethodDeclaration',
										name: id,
										typeParameters: []
									});
								},
								peg$c14 = function () {
									return makePrimitive('void');
								},
								peg$c15 = function (type, id, rest) {
									return mergeProps(rest, {
										returnType2: type,
										name: id
									});
								},
								peg$c16 = function (id, rest) {
									return mergeProps(rest, { name: id });
								},
								peg$c17 = function (params, dims, throws) {
									return null;
								},
								peg$c18 = function (params, dims, throws, body) {
									return {
										parameters: params,
										thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
										extraDimensions: dims.length,
										body: body,
										constructor: false
									};
								},
								peg$c19 = function (params, throws) {
									return null;
								},
								peg$c20 = function (params, throws, body) {
									return {
										parameters: params,
										thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
										body: body,
										extraDimensions: 0,
										typeParameters: []
									};
								},
								peg$c21 = function (params, throws, body) {
									return {
										parameters: params,
										thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
										body: body,
										returnType2: null,
										constructor: true,
										extraDimensions: 0
									};
								},
								peg$c22 = function (id, gen, ext, body) {
									return {
										node: 'TypeDeclaration',
										name: id,
										superInterfaceTypes: extractOptionalList(ext, 1),
										superclassType: null,
										bodyDeclarations: body,
										typeParameters: optionalList(gen),
										interface: true
									};
								},
								peg$c23 = function (type, id, rest) {
									if (rest.node === 'FieldDeclaration') {
										rest.fragments[0].name = id;
										return mergeProps(rest, { type: type });
									} else {
										return mergeProps(rest, {
											returnType2: type,
											name: id,
											typeParameters: []
										});
									}
								},
								peg$c24 = function (rest) {
									return { node: 'FieldDeclaration', fragments: rest };
								},
								peg$c25 = function (params, dims, throws) {
									return {
										node: 'MethodDeclaration',
										parameters: params,
										thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
										extraDimensions: dims.length,
										body: null,
										constructor: false
									};
								},
								peg$c26 = function (params) {
									return makePrimitive('void');
								},
								peg$c27 = function (params, type, id, rest) {
									return mergeProps(rest, {
										returnType2: type,
										name: id,
										typeParameters: params
									});
								},
								peg$c28 = function (params, throws) {
									return {
										node: 'MethodDeclaration',
										parameters: params,
										thrownExceptions: extractThrowsClassType(extractOptionalList(throws, 1)),
										returnType2: makePrimitive('void'),
										extraDimensions: 0,
										typeParameters: [],
										body: null,
										constructor: false
									};
								},
								peg$c29 = function (first, rest) {
									return buildList(first, rest, 1);
								},
								peg$c30 = function (dims, init) {
									return {
										node: 'VariableDeclarationFragment',
										extraDimensions: dims.length,
										initializer: init
									};
								},
								peg$c31 = function (name, impl, eb) {
									return mergeProps(eb, {
										node: 'EnumDeclaration',
										name: name,
										superInterfaceTypes: extractOptionalList(impl, 1)
									});
								},
								peg$c32 = function (consts, body) {
									return {
										enumConstants: optionalList(consts),
										bodyDeclarations: optionalList(body)
									};
								},
								peg$c33 = function (annot, name, args, cls) {
									return {
										node: 'EnumConstantDeclaration',
										anonymousClassDeclaration:
											cls === null
												? null
												: {
														node: 'AnonymousClassDeclaration',
														bodyDeclarations: cls
												  },
										arguments: optionalList(args),
										modifiers: annot,
										name: name
									};
								},
								peg$c34 = function (decl) {
									return decl;
								},
								peg$c35 = function () {
									return makeModifier('final');
								},
								peg$c36 = function (modifiers, type, decls) {
									return {
										node: 'VariableDeclarationStatement',
										fragments: decls,
										modifiers: modifiers,
										type: type
									};
								},
								peg$c37 = function (name, dims, init) {
									return {
										node: 'VariableDeclarationFragment',
										name: name,
										extraDimensions: dims.length,
										initializer: extractOptional(init, 1)
									};
								},
								peg$c38 = function (params) {
									return optionalList(params);
								},
								peg$c39 = function (modifiers, type, decl) {
									return mergeProps(decl, {
										type: type,
										modifiers: modifiers,
										varargs: false,
										initializer: null
									});
								},
								peg$c40 = function (modifiers, type, decl) {
									return mergeProps(decl, {
										type: type,
										modifiers: modifiers,
										varargs: true,
										initializer: null
									});
								},
								peg$c41 = function (first, rest, last) {
									return buildList(first, rest, 1).concat(extractOptionalList(last, 1));
								},
								peg$c42 = function (last) {
									return [last];
								},
								peg$c43 = function (id, dims) {
									return {
										node: 'SingleVariableDeclaration',
										name: id,
										extraDimensions: dims.length
									};
								},
								peg$c44 = function (statements) {
									return {
										node: 'Block',
										statements: statements
									};
								},
								peg$c45 = function (modifiers, decl) {
									return {
										node: 'TypeDeclarationStatement',
										declaration: mergeProps(decl, { modifiers: modifiers })
									};
								},
								peg$c46 = function (expr, message) {
									return {
										node: 'AssertStatement',
										expression: expr,
										message: extractOptional(message, 1)
									};
								},
								peg$c47 = function (expr, then, alt) {
									return {
										node: 'IfStatement',
										elseStatement: extractOptional(alt, 1),
										thenStatement: then,
										expression: expr.expression
									};
								},
								peg$c48 = function (init, expr, up, body) {
									return {
										node: 'ForStatement',
										initializers: optionalList(init),
										expression: expr,
										updaters: optionalList(up),
										body: body
									};
								},
								peg$c49 = function (param, expr, statement) {
									return {
										node: 'EnhancedForStatement',
										parameter: param,
										expression: expr,
										body: statement
									};
								},
								peg$c50 = function (expr, body) {
									return {
										node: 'WhileStatement',
										expression: expr.expression,
										body: body
									};
								},
								peg$c51 = function (statement, expr) {
									return {
										node: 'DoStatement',
										expression: expr.expression,
										body: statement
									};
								},
								peg$c52 = function (first, rest, body, cat, fin) {
									return mergeProps(makeCatchFinally(cat, fin), {
										node: 'TryStatement',
										body: body,
										resources: buildList(first, rest, 1)
									});
								},
								peg$c53 = function (body, cat, fin) {
									return makeCatchFinally(cat, fin);
								},
								peg$c54 = function (body, fin) {
									return makeCatchFinally([], fin);
								},
								peg$c55 = function (body, rest) {
									return mergeProps(rest, {
										node: 'TryStatement',
										body: body,
										resources: []
									});
								},
								peg$c56 = function (expr, cases) {
									return { node: 'SwitchStatement', statements: cases, expression: expr.expression };
								},
								peg$c57 = function (expr, body) {
									return { node: 'SynchronizedStatement', expression: expr.expression, body: body };
								},
								peg$c58 = function (expr) {
									return { node: 'ReturnStatement', expression: expr };
								},
								peg$c59 = function (expr) {
									return { node: 'ThrowStatement', expression: expr };
								},
								peg$c60 = function (id) {
									return { node: 'BreakStatement', label: id };
								},
								peg$c61 = function (id) {
									return { node: 'ContinueStatement', label: id };
								},
								peg$c62 = function () {
									return { node: 'EmptyStatement' };
								},
								peg$c63 = function (statement) {
									return statement;
								},
								peg$c64 = function (id, statement) {
									return { node: 'LabeledStatement', label: id, body: statement };
								},
								peg$c65 = function (modifiers, type, decl, expr) {
									var fragment = mergeProps(decl, { initializer: expr });
									fragment.node = 'VariableDeclarationFragment';
									return {
										node: 'VariableDeclarationExpression',
										modifiers: modifiers,
										type: type,
										fragments: [fragment]
									};
								},
								peg$c66 = function (modifiers, first, rest, decl, body) {
									return {
										node: 'CatchClause',
										body: body,
										exception: mergeProps(decl, {
											modifiers: modifiers,
											initializer: null,
											varargs: false,
											type: rest.length
												? {
														node: 'UnionType',
														types: buildList(first, rest, 1)
												  }
												: first
										})
									};
								},
								peg$c67 = function (block) {
									return block;
								},
								peg$c68 = function (blocks) {
									return [].concat.apply([], blocks);
								},
								peg$c69 = function (expr, blocks) {
									return [{ node: 'SwitchCase', expression: expr }].concat(blocks);
								},
								peg$c70 = function (expr) {
									return expr;
								},
								peg$c71 = function (modifiers, type, decls) {
									return [
										{
											node: 'VariableDeclarationExpression',
											modifiers: modifiers,
											fragments: decls,
											type: type
										}
									];
								},
								peg$c72 = function (first, rest) {
									return extractExpressions(buildList(first, rest, 1));
								},
								peg$c73 = function (expr) {
									switch (expr.node) {
										case 'SuperConstructorInvocation':
										case 'ConstructorInvocation':
											return expr;
										default:
											return {
												node: 'ExpressionStatement',
												expression: expr
											};
									}
								},
								peg$c74 = function (left, op, right) {
									return {
										node: 'Assignment',
										operator: op[0] /* remove ending spaces */,
										leftHandSide: left,
										rightHandSide: right
									};
								},
								peg$c75 = function (expr, then, alt) {
									return {
										node: 'ConditionalExpression',
										expression: expr,
										thenExpression: then,
										elseExpression: alt
									};
								},
								peg$c76 = function (first, rest) {
									return buildInfixExpr(first, rest);
								},
								peg$c77 = function (first, rest) {
									return buildTree(first, rest, function (result, element) {
										return element[0][0] === 'instanceof'
											? {
													node: 'InstanceofExpression',
													leftOperand: result,
													rightOperand: element[1]
											  }
											: {
													node: 'InfixExpression',
													operator: element[0][0], // remove ending Spacing
													leftOperand: result,
													rightOperand: element[1]
											  };
									});
								},
								peg$c78 = function (operator, operand) {
									return operand.node === 'NumberLiteral' &&
										operator === '-' &&
										(operand.token === '9223372036854775808L' ||
											operand.token === '9223372036854775808l' ||
											operand.token === '2147483648')
										? { node: 'NumberLiteral', token: text() }
										: {
												node: 'PrefixExpression',
												operator: operator,
												operand: operand
										  };
								},
								peg$c79 = function (expr) {
									return {
										node: 'CastExpression',
										type: expr[1],
										expression: expr[3]
									};
								},
								peg$c80 = function (arg, sel, sels, operator) {
									return operator.length > 1
										? TODO(/* JLS7? */)
										: {
												node: 'PostfixExpression',
												operator: operator[0],
												operand: buildSelectorTree(arg, sel, sels)
										  };
								},
								peg$c81 = function (arg, sel, sels) {
									return buildSelectorTree(arg, sel, sels);
								},
								peg$c82 = function (arg, operator) {
									return operator.length > 1
										? TODO(/* JLS7? */)
										: {
												node: 'PostfixExpression',
												operator: operator[0],
												operand: arg
										  };
								},
								peg$c83 = function (args, args_r) {
									return { node: 'ConstructorInvocation', arguments: args_r, typeArguments: [] };
								},
								peg$c84 = function (args, ret) {
									if (ret.typeArguments.length) return TODO(/* Ugly ! */);
									ret.typeArguments = args;
									return ret;
								},
								peg$c85 = function (args) {
									return args === null
										? {
												node: 'ThisExpression',
												qualifier: null
										  }
										: {
												node: 'ConstructorInvocation',
												arguments: args,
												typeArguments: []
										  };
								},
								peg$c86 = function (suffix) {
									return suffix.node === 'SuperConstructorInvocation'
										? suffix
										: mergeProps(suffix, { qualifier: null });
								},
								peg$c87 = function (creator) {
									return creator;
								},
								peg$c88 = function (type, dims) {
									return {
										node: 'TypeLiteral',
										type: buildArrayTree(type, dims)
									};
								},
								peg$c89 = function () {
									return {
										node: 'TypeLiteral',
										type: makePrimitive('void')
									};
								},
								peg$c90 = function (qual, dims) {
									return {
										node: 'TypeLiteral',
										type: buildArrayTree(buildTypeName(qual, null, []), dims)
									};
								},
								peg$c91 = function (qual, expr) {
									return { node: 'ArrayAccess', array: qual, index: expr };
								},
								peg$c92 = function (qual, args) {
									return mergeProps(popQualified(qual), {
										node: 'MethodInvocation',
										arguments: args,
										typeArguments: []
									});
								},
								peg$c93 = function (qual) {
									return { node: 'TypeLiteral', type: buildTypeName(qual, null, []) };
								},
								peg$c94 = function (qual, ret) {
									if (ret.expression) return TODO(/* Ugly ! */);
									ret.expression = qual;
									return ret;
								},
								peg$c95 = function (qual) {
									return { node: 'ThisExpression', qualifier: qual };
								},
								peg$c96 = function (qual, args) {
									return {
										node: 'SuperConstructorInvocation',
										arguments: args,
										expression: qual,
										typeArguments: []
									};
								},
								peg$c97 = function (qual, args, rest) {
									return mergeProps(rest, { expression: qual, typeArguments: optionalList(args) });
								},
								peg$c98 = function () {
									return [];
								},
								peg$c99 = function (suffix) {
									return suffix;
								},
								peg$c100 = function (id, args) {
									return { node: 'MethodInvocation', arguments: args, name: id, typeArguments: [] };
								},
								peg$c101 = function (op) {
									return op[0]; /* remove ending spaces */
								},
								peg$c102 = function (id) {
									return { node: 'FieldAccess', name: id };
								},
								peg$c103 = function (ret) {
									return ret;
								},
								peg$c104 = function () {
									return TODO(/* Any sample ? */);
								},
								peg$c105 = function (args, ret) {
									return mergeProps(ret, { typeArguments: optionalList(args) });
								},
								peg$c106 = function (expr) {
									return { node: 'ArrayAccess', index: expr };
								},
								peg$c107 = function (args) {
									return {
										node: 'SuperConstructorInvocation',
										arguments: args,
										expression: null,
										typeArguments: []
									};
								},
								peg$c108 = function (gen, id, args) {
									return args === null
										? {
												node: 'SuperFieldAccess',
												name: id
										  }
										: {
												node: 'SuperMethodInvocation',
												typeArguments: optionalList(gen),
												name: id,
												arguments: args
										  };
								},
								peg$c109 = 'byte',
								peg$c110 = peg$literalExpectation('byte', false),
								peg$c111 = 'short',
								peg$c112 = peg$literalExpectation('short', false),
								peg$c113 = 'char',
								peg$c114 = peg$literalExpectation('char', false),
								peg$c115 = 'int',
								peg$c116 = peg$literalExpectation('int', false),
								peg$c117 = 'long',
								peg$c118 = peg$literalExpectation('long', false),
								peg$c119 = 'float',
								peg$c120 = peg$literalExpectation('float', false),
								peg$c121 = 'double',
								peg$c122 = peg$literalExpectation('double', false),
								peg$c123 = 'boolean',
								peg$c124 = peg$literalExpectation('boolean', false),
								peg$c125 = function (type) {
									return makePrimitive(type);
								},
								peg$c126 = function (args) {
									return optionalList(args);
								},
								peg$c127 = function (type, rest) {
									return {
										node: 'ArrayCreation',
										type: buildArrayTree(type, rest.extraDims),
										initializer: rest.init,
										dimensions: rest.dimms
									};
								},
								peg$c128 = function (args, type, rest) {
									return mergeProps(rest, {
										node: 'ClassInstanceCreation',
										type: type,
										typeArguments: optionalList(args),
										expression: null
									});
								},
								peg$c129 = function (qual, args, rest) {
									return buildTypeName(qual, args, rest);
								},
								peg$c130 = function (id, args, rest) {
									return mergeProps(rest, {
										node: 'ClassInstanceCreation',
										type: buildTypeName(id, args, [])
									});
								},
								peg$c131 = function (args, body) {
									return {
										arguments: args,
										anonymousClassDeclaration:
											body === null
												? null
												: {
														node: 'AnonymousClassDeclaration',
														bodyDeclarations: body
												  }
									};
								},
								peg$c132 = function (dims, init) {
									return { extraDims: dims, init: init, dimms: [] };
								},
								peg$c133 = function (dimexpr, dims) {
									return { extraDims: dimexpr.concat(dims), init: null, dimms: dimexpr };
								},
								peg$c134 = function (dim) {
									return { extraDims: [dim], init: null, dimms: [] };
								},
								peg$c135 = function (init) {
									return { node: 'ArrayInitializer', expressions: optionalList(init) };
								},
								peg$c136 = function (expr) {
									return { node: 'ParenthesizedExpression', expression: expr };
								},
								peg$c137 = function (first, rest) {
									return buildQualified(first, rest, 1);
								},
								peg$c138 = function (exp) {
									return exp;
								},
								peg$c139 = function (type, dims) {
									return buildArrayTree(type, dims);
								},
								peg$c140 = function (bas, dims) {
									return buildArrayTree(bas, dims);
								},
								peg$c141 = function (cls, dims) {
									return buildArrayTree(cls, dims);
								},
								peg$c142 = function () {
									return true;
								},
								peg$c143 = function () {
									return false;
								},
								peg$c144 = function (rest) {
									return {
										node: 'WildcardType',
										upperBound: extractOptional(rest, 0, true),
										bound: extractOptional(rest, 1)
									};
								},
								peg$c145 = function (id, bounds) {
									return {
										node: 'TypeParameter',
										name: id,
										typeBounds: extractOptionalList(bounds, 1)
									};
								},
								peg$c146 = 'public',
								peg$c147 = peg$literalExpectation('public', false),
								peg$c148 = 'protected',
								peg$c149 = peg$literalExpectation('protected', false),
								peg$c150 = 'private',
								peg$c151 = peg$literalExpectation('private', false),
								peg$c152 = 'static',
								peg$c153 = peg$literalExpectation('static', false),
								peg$c154 = 'abstract',
								peg$c155 = peg$literalExpectation('abstract', false),
								peg$c156 = 'final',
								peg$c157 = peg$literalExpectation('final', false),
								peg$c158 = 'native',
								peg$c159 = peg$literalExpectation('native', false),
								peg$c160 = 'synchronized',
								peg$c161 = peg$literalExpectation('synchronized', false),
								peg$c162 = 'transient',
								peg$c163 = peg$literalExpectation('transient', false),
								peg$c164 = 'volatile',
								peg$c165 = peg$literalExpectation('volatile', false),
								peg$c166 = 'strictfp',
								peg$c167 = peg$literalExpectation('strictfp', false),
								peg$c168 = function (keyword) {
									return makeModifier(keyword);
								},
								peg$c169 = function (id, body) {
									return {
										node: 'AnnotationTypeDeclaration',
										name: id,
										bodyDeclarations: body
									};
								},
								peg$c170 = function (decl) {
									return skipNulls(decl);
								},
								peg$c171 = function (modifiers, rest) {
									return mergeProps(rest, { modifiers: modifiers });
								},
								peg$c172 = function (type, rest) {
									return mergeProps(rest, { type: type });
								},
								peg$c173 = function (id, def) {
									return {
										node: 'AnnotationTypeMemberDeclaration',
										name: id,
										default: def
									};
								},
								peg$c174 = function (fragments) {
									return { node: 'FieldDeclaration', fragments: fragments };
								},
								peg$c175 = function (val) {
									return val;
								},
								peg$c176 = function (id, pairs) {
									return {
										node: 'NormalAnnotation',
										typeName: id,
										values: optionalList(pairs)
									};
								},
								peg$c177 = function (id, value) {
									return {
										node: 'SingleMemberAnnotation',
										typeName: id,
										value: value
									};
								},
								peg$c178 = function (id) {
									return { node: 'MarkerAnnotation', typeName: id };
								},
								peg$c179 = function (name, value) {
									return {
										node: 'MemberValuePair',
										name: name,
										value: value
									};
								},
								peg$c180 = function (values) {
									return { node: 'ArrayInitializer', expressions: optionalList(values) };
								},
								peg$c181 = /^[ \t\r\n\f]/,
								peg$c182 = peg$classExpectation([' ', '\t', '\r', '\n', '\f'], false, false),
								peg$c183 = '/*',
								peg$c184 = peg$literalExpectation('/*', false),
								peg$c185 = '*/',
								peg$c186 = peg$literalExpectation('*/', false),
								peg$c187 = '//',
								peg$c188 = peg$literalExpectation('//', false),
								peg$c189 = /^[\r\n]/,
								peg$c190 = peg$classExpectation(['\r', '\n'], false, false),
								peg$c191 = function (first, rest) {
									return { identifier: first + rest, node: 'SimpleName' };
								},
								peg$c192 = /^[a-z]/,
								peg$c193 = peg$classExpectation([['a', 'z']], false, false),
								peg$c194 = /^[A-Z]/,
								peg$c195 = peg$classExpectation([['A', 'Z']], false, false),
								peg$c196 = /^[_$]/,
								peg$c197 = peg$classExpectation(['_', '$'], false, false),
								peg$c198 = /^[0-9]/,
								peg$c199 = peg$classExpectation([['0', '9']], false, false),
								peg$c200 = 'assert',
								peg$c201 = peg$literalExpectation('assert', false),
								peg$c202 = 'break',
								peg$c203 = peg$literalExpectation('break', false),
								peg$c204 = 'case',
								peg$c205 = peg$literalExpectation('case', false),
								peg$c206 = 'catch',
								peg$c207 = peg$literalExpectation('catch', false),
								peg$c208 = 'class',
								peg$c209 = peg$literalExpectation('class', false),
								peg$c210 = 'const',
								peg$c211 = peg$literalExpectation('const', false),
								peg$c212 = 'continue',
								peg$c213 = peg$literalExpectation('continue', false),
								peg$c214 = 'default',
								peg$c215 = peg$literalExpectation('default', false),
								peg$c216 = 'do',
								peg$c217 = peg$literalExpectation('do', false),
								peg$c218 = 'else',
								peg$c219 = peg$literalExpectation('else', false),
								peg$c220 = 'enum',
								peg$c221 = peg$literalExpectation('enum', false),
								peg$c222 = 'extends',
								peg$c223 = peg$literalExpectation('extends', false),
								peg$c224 = 'false',
								peg$c225 = peg$literalExpectation('false', false),
								peg$c226 = 'finally',
								peg$c227 = peg$literalExpectation('finally', false),
								peg$c228 = 'for',
								peg$c229 = peg$literalExpectation('for', false),
								peg$c230 = 'goto',
								peg$c231 = peg$literalExpectation('goto', false),
								peg$c232 = 'if',
								peg$c233 = peg$literalExpectation('if', false),
								peg$c234 = 'implements',
								peg$c235 = peg$literalExpectation('implements', false),
								peg$c236 = 'import',
								peg$c237 = peg$literalExpectation('import', false),
								peg$c238 = 'interface',
								peg$c239 = peg$literalExpectation('interface', false),
								peg$c240 = 'instanceof',
								peg$c241 = peg$literalExpectation('instanceof', false),
								peg$c242 = 'new',
								peg$c243 = peg$literalExpectation('new', false),
								peg$c244 = 'null',
								peg$c245 = peg$literalExpectation('null', false),
								peg$c246 = 'package',
								peg$c247 = peg$literalExpectation('package', false),
								peg$c248 = 'return',
								peg$c249 = peg$literalExpectation('return', false),
								peg$c250 = 'super',
								peg$c251 = peg$literalExpectation('super', false),
								peg$c252 = 'switch',
								peg$c253 = peg$literalExpectation('switch', false),
								peg$c254 = 'this',
								peg$c255 = peg$literalExpectation('this', false),
								peg$c256 = 'throws',
								peg$c257 = peg$literalExpectation('throws', false),
								peg$c258 = 'throw',
								peg$c259 = peg$literalExpectation('throw', false),
								peg$c260 = 'true',
								peg$c261 = peg$literalExpectation('true', false),
								peg$c262 = 'try',
								peg$c263 = peg$literalExpectation('try', false),
								peg$c264 = 'void',
								peg$c265 = peg$literalExpectation('void', false),
								peg$c266 = 'while',
								peg$c267 = peg$literalExpectation('while', false),
								peg$c268 = function () {
									return { node: 'BooleanLiteral', booleanValue: true };
								},
								peg$c269 = function () {
									return { node: 'BooleanLiteral', booleanValue: false };
								},
								peg$c270 = function () {
									return { node: 'NullLiteral' };
								},
								peg$c271 = function (literal) {
									return literal;
								},
								peg$c272 = /^[lL]/,
								peg$c273 = peg$classExpectation(['l', 'L'], false, false),
								peg$c274 = function () {
									return { node: 'NumberLiteral', token: text() };
								},
								peg$c275 = '0',
								peg$c276 = peg$literalExpectation('0', false),
								peg$c277 = /^[1-9]/,
								peg$c278 = peg$classExpectation([['1', '9']], false, false),
								peg$c279 = /^[_]/,
								peg$c280 = peg$classExpectation(['_'], false, false),
								peg$c281 = '0x',
								peg$c282 = peg$literalExpectation('0x', false),
								peg$c283 = '0X',
								peg$c284 = peg$literalExpectation('0X', false),
								peg$c285 = '0b',
								peg$c286 = peg$literalExpectation('0b', false),
								peg$c287 = '0B',
								peg$c288 = peg$literalExpectation('0B', false),
								peg$c289 = /^[01]/,
								peg$c290 = peg$classExpectation(['0', '1'], false, false),
								peg$c291 = /^[0-7]/,
								peg$c292 = peg$classExpectation([['0', '7']], false, false),
								peg$c293 = '.',
								peg$c294 = peg$literalExpectation('.', false),
								peg$c295 = /^[fFdD]/,
								peg$c296 = peg$classExpectation(['f', 'F', 'd', 'D'], false, false),
								peg$c297 = /^[eE]/,
								peg$c298 = peg$classExpectation(['e', 'E'], false, false),
								peg$c299 = /^[+\-]/,
								peg$c300 = peg$classExpectation(['+', '-'], false, false),
								peg$c301 = /^[pP]/,
								peg$c302 = peg$classExpectation(['p', 'P'], false, false),
								peg$c303 = /^[a-f]/,
								peg$c304 = peg$classExpectation([['a', 'f']], false, false),
								peg$c305 = /^[A-F]/,
								peg$c306 = peg$classExpectation([['A', 'F']], false, false),
								peg$c307 = "'",
								peg$c308 = peg$literalExpectation("'", false),
								peg$c309 = /^['\\\n\r]/,
								peg$c310 = peg$classExpectation(["'", '\\', '\n', '\r'], false, false),
								peg$c311 = function () {
									return { node: 'CharacterLiteral', escapedValue: text() };
								},
								peg$c312 = '"',
								peg$c313 = peg$literalExpectation('"', false),
								peg$c314 = /^["\\\n\r]/,
								peg$c315 = peg$classExpectation(['"', '\\', '\n', '\r'], false, false),
								peg$c316 = function () {
									return { node: 'StringLiteral', escapedValue: text() };
								},
								peg$c317 = '\\',
								peg$c318 = peg$literalExpectation('\\', false),
								peg$c319 = /^[btnfr"'\\]/,
								peg$c320 = peg$classExpectation(['b', 't', 'n', 'f', 'r', '"', "'", '\\'], false, false),
								peg$c321 = /^[0-3]/,
								peg$c322 = peg$classExpectation([['0', '3']], false, false),
								peg$c323 = 'u',
								peg$c324 = peg$literalExpectation('u', false),
								peg$c325 = '@',
								peg$c326 = peg$literalExpectation('@', false),
								peg$c327 = '&',
								peg$c328 = peg$literalExpectation('&', false),
								peg$c329 = /^[=&]/,
								peg$c330 = peg$classExpectation(['=', '&'], false, false),
								peg$c331 = '&&',
								peg$c332 = peg$literalExpectation('&&', false),
								peg$c333 = '&=',
								peg$c334 = peg$literalExpectation('&=', false),
								peg$c335 = '!',
								peg$c336 = peg$literalExpectation('!', false),
								peg$c337 = '=',
								peg$c338 = peg$literalExpectation('=', false),
								peg$c339 = '>>>',
								peg$c340 = peg$literalExpectation('>>>', false),
								peg$c341 = '>>>=',
								peg$c342 = peg$literalExpectation('>>>=', false),
								peg$c343 = ':',
								peg$c344 = peg$literalExpectation(':', false),
								peg$c345 = ',',
								peg$c346 = peg$literalExpectation(',', false),
								peg$c347 = '--',
								peg$c348 = peg$literalExpectation('--', false),
								peg$c349 = '/',
								peg$c350 = peg$literalExpectation('/', false),
								peg$c351 = '/=',
								peg$c352 = peg$literalExpectation('/=', false),
								peg$c353 = '...',
								peg$c354 = peg$literalExpectation('...', false),
								peg$c355 = '==',
								peg$c356 = peg$literalExpectation('==', false),
								peg$c357 = '>=',
								peg$c358 = peg$literalExpectation('>=', false),
								peg$c359 = '>',
								peg$c360 = peg$literalExpectation('>', false),
								peg$c361 = /^[=>]/,
								peg$c362 = peg$classExpectation(['=', '>'], false, false),
								peg$c363 = '^',
								peg$c364 = peg$literalExpectation('^', false),
								peg$c365 = '^=',
								peg$c366 = peg$literalExpectation('^=', false),
								peg$c367 = '++',
								peg$c368 = peg$literalExpectation('++', false),
								peg$c369 = '[',
								peg$c370 = peg$literalExpectation('[', false),
								peg$c371 = '<=',
								peg$c372 = peg$literalExpectation('<=', false),
								peg$c373 = '(',
								peg$c374 = peg$literalExpectation('(', false),
								peg$c375 = '<',
								peg$c376 = peg$literalExpectation('<', false),
								peg$c377 = /^[=<]/,
								peg$c378 = peg$classExpectation(['=', '<'], false, false),
								peg$c379 = '{',
								peg$c380 = peg$literalExpectation('{', false),
								peg$c381 = '-',
								peg$c382 = peg$literalExpectation('-', false),
								peg$c383 = /^[=\-]/,
								peg$c384 = peg$classExpectation(['=', '-'], false, false),
								peg$c385 = '-=',
								peg$c386 = peg$literalExpectation('-=', false),
								peg$c387 = '%',
								peg$c388 = peg$literalExpectation('%', false),
								peg$c389 = '%=',
								peg$c390 = peg$literalExpectation('%=', false),
								peg$c391 = '!=',
								peg$c392 = peg$literalExpectation('!=', false),
								peg$c393 = '|',
								peg$c394 = peg$literalExpectation('|', false),
								peg$c395 = /^[=|]/,
								peg$c396 = peg$classExpectation(['=', '|'], false, false),
								peg$c397 = '|=',
								peg$c398 = peg$literalExpectation('|=', false),
								peg$c399 = '||',
								peg$c400 = peg$literalExpectation('||', false),
								peg$c401 = '+',
								peg$c402 = peg$literalExpectation('+', false),
								peg$c403 = /^[=+]/,
								peg$c404 = peg$classExpectation(['=', '+'], false, false),
								peg$c405 = '+=',
								peg$c406 = peg$literalExpectation('+=', false),
								peg$c407 = '?',
								peg$c408 = peg$literalExpectation('?', false),
								peg$c409 = ']',
								peg$c410 = peg$literalExpectation(']', false),
								peg$c411 = ')',
								peg$c412 = peg$literalExpectation(')', false),
								peg$c413 = '}',
								peg$c414 = peg$literalExpectation('}', false),
								peg$c415 = ';',
								peg$c416 = peg$literalExpectation(';', false),
								peg$c417 = '<<',
								peg$c418 = peg$literalExpectation('<<', false),
								peg$c419 = '<<=',
								peg$c420 = peg$literalExpectation('<<=', false),
								peg$c421 = '>>',
								peg$c422 = peg$literalExpectation('>>', false),
								peg$c423 = '>>=',
								peg$c424 = peg$literalExpectation('>>=', false),
								peg$c425 = '*',
								peg$c426 = peg$literalExpectation('*', false),
								peg$c427 = '*=',
								peg$c428 = peg$literalExpectation('*=', false),
								peg$c429 = '~',
								peg$c430 = peg$literalExpectation('~', false),
								peg$c431 = peg$anyExpectation(),
								peg$currPos = 0,
								peg$savedPos = 0,
								peg$posDetailsCache = [{ line: 1, column: 1 }],
								peg$maxFailPos = 0,
								peg$maxFailExpected = [],
								peg$silentFails = 0,
								peg$result;

							if ('startRule' in options) {
								if (!(options.startRule in peg$startRuleFunctions)) {
									throw new Error('Can\'t start parsing from rule "' + options.startRule + '".');
								}

								peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
							}

							function text() {
								return input.substring(peg$savedPos, peg$currPos);
							}

							function peg$literalExpectation(text, ignoreCase) {
								return { type: 'literal', text: text, ignoreCase: ignoreCase };
							}

							function peg$classExpectation(parts, inverted, ignoreCase) {
								return { type: 'class', parts: parts, inverted: inverted, ignoreCase: ignoreCase };
							}

							function peg$anyExpectation() {
								return { type: 'any' };
							}

							function peg$endExpectation() {
								return { type: 'end' };
							}

							function peg$computePosDetails(pos) {
								var details = peg$posDetailsCache[pos],
									p;

								if (details) {
									return details;
								} else {
									p = pos - 1;
									while (!peg$posDetailsCache[p]) {
										p--;
									}

									details = peg$posDetailsCache[p];
									details = {
										line: details.line,
										column: details.column
									};

									while (p < pos) {
										if (input.charCodeAt(p) === 10) {
											details.line++;
											details.column = 1;
										} else {
											details.column++;
										}

										p++;
									}

									peg$posDetailsCache[pos] = details;
									return details;
								}
							}

							function peg$computeLocation(startPos, endPos) {
								var startPosDetails = peg$computePosDetails(startPos),
									endPosDetails = peg$computePosDetails(endPos);

								return {
									start: {
										offset: startPos,
										line: startPosDetails.line,
										column: startPosDetails.column
									},
									end: {
										offset: endPos,
										line: endPosDetails.line,
										column: endPosDetails.column
									}
								};
							}

							function peg$fail(expected) {
								if (peg$currPos < peg$maxFailPos) {
									return;
								}

								if (peg$currPos > peg$maxFailPos) {
									peg$maxFailPos = peg$currPos;
									peg$maxFailExpected = [];
								}

								peg$maxFailExpected.push(expected);
							}

							function peg$buildStructuredError(expected, found, location) {
								return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
							}

							function peg$parseCompilationUnit() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseSpacing();
								if (s1 !== peg$FAILED) {
									s2 = peg$parsePackageDeclaration();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = [];
										s4 = peg$parseImportDeclaration();
										while (s4 !== peg$FAILED) {
											s3.push(s4);
											s4 = peg$parseImportDeclaration();
										}
										if (s3 !== peg$FAILED) {
											s4 = [];
											s5 = peg$parseTypeDeclaration();
											while (s5 !== peg$FAILED) {
												s4.push(s5);
												s5 = peg$parseTypeDeclaration();
											}
											if (s4 !== peg$FAILED) {
												s5 = peg$parseEOT();
												if (s5 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c0(s2, s3, s4);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parsePackageDeclaration() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$parseAnnotation();
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$parseAnnotation();
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parsePACKAGE();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseQualifiedIdentifier();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseSEMI();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c1(s1, s3);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseImportDeclaration() {
								var s0, s1, s2, s3, s4, s5, s6;

								s0 = peg$currPos;
								s1 = peg$parseIMPORT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSTATIC();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseQualifiedIdentifier();
										if (s3 !== peg$FAILED) {
											s4 = peg$currPos;
											s5 = peg$parseDOT();
											if (s5 !== peg$FAILED) {
												s6 = peg$parseSTAR();
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
											if (s4 === peg$FAILED) {
												s4 = null;
											}
											if (s4 !== peg$FAILED) {
												s5 = peg$parseSEMI();
												if (s5 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c2(s2, s3, s4);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseSEMI();
									if (s1 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c3();
									}
									s0 = s1;
								}

								return s0;
							}

							function peg$parseTypeDeclaration() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$parseModifier();
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$parseModifier();
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseClassDeclaration();
									if (s2 === peg$FAILED) {
										s2 = peg$parseEnumDeclaration();
										if (s2 === peg$FAILED) {
											s2 = peg$parseInterfaceDeclaration();
											if (s2 === peg$FAILED) {
												s2 = peg$parseAnnotationTypeDeclaration();
											}
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c4(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseSEMI();
									if (s1 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c3();
									}
									s0 = s1;
								}

								return s0;
							}

							function peg$parseClassDeclaration() {
								var s0, s1, s2, s3, s4, s5, s6, s7;

								s0 = peg$currPos;
								s1 = peg$parseCLASS();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseIdentifier();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseTypeParameters();
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$currPos;
											s5 = peg$parseEXTENDS();
											if (s5 !== peg$FAILED) {
												s6 = peg$parseClassType();
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
											if (s4 === peg$FAILED) {
												s4 = null;
											}
											if (s4 !== peg$FAILED) {
												s5 = peg$currPos;
												s6 = peg$parseIMPLEMENTS();
												if (s6 !== peg$FAILED) {
													s7 = peg$parseClassTypeList();
													if (s7 !== peg$FAILED) {
														s6 = [s6, s7];
														s5 = s6;
													} else {
														peg$currPos = s5;
														s5 = peg$FAILED;
													}
												} else {
													peg$currPos = s5;
													s5 = peg$FAILED;
												}
												if (s5 === peg$FAILED) {
													s5 = null;
												}
												if (s5 !== peg$FAILED) {
													s6 = peg$parseClassBody();
													if (s6 !== peg$FAILED) {
														peg$savedPos = s0;
														s1 = peg$c5(s2, s3, s4, s5, s6);
														s0 = s1;
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseClassBody() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseLWING();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseClassBodyDeclaration();
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseClassBodyDeclaration();
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRWING();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c6(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseClassBodyDeclaration() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseSEMI();
								if (s1 !== peg$FAILED) {
									peg$savedPos = s0;
									s1 = peg$c3();
								}
								s0 = s1;
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseSTATIC();
									if (s1 === peg$FAILED) {
										s1 = null;
									}
									if (s1 !== peg$FAILED) {
										s2 = peg$parseBlock();
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c7(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = [];
										s2 = peg$parseModifier();
										while (s2 !== peg$FAILED) {
											s1.push(s2);
											s2 = peg$parseModifier();
										}
										if (s1 !== peg$FAILED) {
											s2 = peg$parseMemberDecl();
											if (s2 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c8(s1, s2);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									}
								}

								return s0;
							}

							function peg$parseMemberDecl() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseTypeParameters();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseGenericMethodOrConstructorRest();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c9(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseType();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseIdentifier();
										if (s2 !== peg$FAILED) {
											s3 = peg$parseMethodDeclaratorRest();
											if (s3 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c10(s1, s2, s3);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parseType();
										if (s1 !== peg$FAILED) {
											s2 = peg$parseVariableDeclarators();
											if (s2 !== peg$FAILED) {
												s3 = peg$parseSEMI();
												if (s3 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c11(s1, s2);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
										if (s0 === peg$FAILED) {
											s0 = peg$currPos;
											s1 = peg$parseVOID();
											if (s1 !== peg$FAILED) {
												s2 = peg$parseIdentifier();
												if (s2 !== peg$FAILED) {
													s3 = peg$parseVoidMethodDeclaratorRest();
													if (s3 !== peg$FAILED) {
														peg$savedPos = s0;
														s1 = peg$c12(s2, s3);
														s0 = s1;
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
											if (s0 === peg$FAILED) {
												s0 = peg$currPos;
												s1 = peg$parseIdentifier();
												if (s1 !== peg$FAILED) {
													s2 = peg$parseConstructorDeclaratorRest();
													if (s2 !== peg$FAILED) {
														peg$savedPos = s0;
														s1 = peg$c13(s1, s2);
														s0 = s1;
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
												if (s0 === peg$FAILED) {
													s0 = peg$parseInterfaceDeclaration();
													if (s0 === peg$FAILED) {
														s0 = peg$parseClassDeclaration();
														if (s0 === peg$FAILED) {
															s0 = peg$parseEnumDeclaration();
															if (s0 === peg$FAILED) {
																s0 = peg$parseAnnotationTypeDeclaration();
															}
														}
													}
												}
											}
										}
									}
								}

								return s0;
							}

							function peg$parseGenericMethodOrConstructorRest() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseType();
								if (s1 === peg$FAILED) {
									s1 = peg$currPos;
									s2 = peg$parseVOID();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s1;
										s2 = peg$c14();
									}
									s1 = s2;
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseIdentifier();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseMethodDeclaratorRest();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c15(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseIdentifier();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseConstructorDeclaratorRest();
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c16(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parseMethodDeclaratorRest() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseFormalParameters();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseDim();
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseDim();
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$currPos;
										s4 = peg$parseTHROWS();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseClassTypeList();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseBlock();
											if (s4 === peg$FAILED) {
												s4 = peg$currPos;
												s5 = peg$parseSEMI();
												if (s5 !== peg$FAILED) {
													peg$savedPos = s4;
													s5 = peg$c17(s1, s2, s3);
												}
												s4 = s5;
											}
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c18(s1, s2, s3, s4);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseVoidMethodDeclaratorRest() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseFormalParameters();
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									s3 = peg$parseTHROWS();
									if (s3 !== peg$FAILED) {
										s4 = peg$parseClassTypeList();
										if (s4 !== peg$FAILED) {
											s3 = [s3, s4];
											s2 = s3;
										} else {
											peg$currPos = s2;
											s2 = peg$FAILED;
										}
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseBlock();
										if (s3 === peg$FAILED) {
											s3 = peg$currPos;
											s4 = peg$parseSEMI();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s3;
												s4 = peg$c19(s1, s2);
											}
											s3 = s4;
										}
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c20(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseConstructorDeclaratorRest() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseFormalParameters();
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									s3 = peg$parseTHROWS();
									if (s3 !== peg$FAILED) {
										s4 = peg$parseClassTypeList();
										if (s4 !== peg$FAILED) {
											s3 = [s3, s4];
											s2 = s3;
										} else {
											peg$currPos = s2;
											s2 = peg$FAILED;
										}
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseBlock();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c21(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseInterfaceDeclaration() {
								var s0, s1, s2, s3, s4, s5, s6;

								s0 = peg$currPos;
								s1 = peg$parseINTERFACE();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseIdentifier();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseTypeParameters();
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$currPos;
											s5 = peg$parseEXTENDS();
											if (s5 !== peg$FAILED) {
												s6 = peg$parseClassTypeList();
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
											if (s4 === peg$FAILED) {
												s4 = null;
											}
											if (s4 !== peg$FAILED) {
												s5 = peg$parseInterfaceBody();
												if (s5 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c22(s2, s3, s4, s5);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseInterfaceBody() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseLWING();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseInterfaceBodyDeclaration();
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseInterfaceBodyDeclaration();
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRWING();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c6(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseInterfaceBodyDeclaration() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$parseModifier();
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$parseModifier();
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseInterfaceMemberDecl();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c8(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseSEMI();
									if (s1 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c3();
									}
									s0 = s1;
								}

								return s0;
							}

							function peg$parseInterfaceMemberDecl() {
								var s0, s1, s2, s3;

								s0 = peg$parseInterfaceMethodOrFieldDecl();
								if (s0 === peg$FAILED) {
									s0 = peg$parseInterfaceGenericMethodDecl();
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parseVOID();
										if (s1 !== peg$FAILED) {
											s2 = peg$parseIdentifier();
											if (s2 !== peg$FAILED) {
												s3 = peg$parseVoidInterfaceMethodDeclaratorRest();
												if (s3 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c16(s2, s3);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
										if (s0 === peg$FAILED) {
											s0 = peg$parseInterfaceDeclaration();
											if (s0 === peg$FAILED) {
												s0 = peg$parseAnnotationTypeDeclaration();
												if (s0 === peg$FAILED) {
													s0 = peg$parseClassDeclaration();
													if (s0 === peg$FAILED) {
														s0 = peg$parseEnumDeclaration();
													}
												}
											}
										}
									}
								}

								return s0;
							}

							function peg$parseInterfaceMethodOrFieldDecl() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseType();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseIdentifier();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseInterfaceMethodOrFieldRest();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c23(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseInterfaceMethodOrFieldRest() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseConstantDeclaratorsRest();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSEMI();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c24(s1);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$parseInterfaceMethodDeclaratorRest();
								}

								return s0;
							}

							function peg$parseInterfaceMethodDeclaratorRest() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseFormalParameters();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseDim();
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseDim();
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$currPos;
										s4 = peg$parseTHROWS();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseClassTypeList();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseSEMI();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c25(s1, s2, s3);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseInterfaceGenericMethodDecl() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseTypeParameters();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseType();
									if (s2 === peg$FAILED) {
										s2 = peg$currPos;
										s3 = peg$parseVOID();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s2;
											s3 = peg$c26(s1);
										}
										s2 = s3;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseIdentifier();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseInterfaceMethodDeclaratorRest();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c27(s1, s2, s3, s4);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseVoidInterfaceMethodDeclaratorRest() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseFormalParameters();
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									s3 = peg$parseTHROWS();
									if (s3 !== peg$FAILED) {
										s4 = peg$parseClassTypeList();
										if (s4 !== peg$FAILED) {
											s3 = [s3, s4];
											s2 = s3;
										} else {
											peg$currPos = s2;
											s2 = peg$FAILED;
										}
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSEMI();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c28(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseConstantDeclaratorsRest() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseConstantDeclaratorRest();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseCOMMA();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseConstantDeclarator();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseConstantDeclarator();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c29(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseConstantDeclarator() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseConstantDeclaratorRest();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c16(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseConstantDeclaratorRest() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$parseDim();
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$parseDim();
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseEQU();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseVariableInitializer();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c30(s1, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEnumDeclaration() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseENUM();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseIdentifier();
									if (s2 !== peg$FAILED) {
										s3 = peg$currPos;
										s4 = peg$parseIMPLEMENTS();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseClassTypeList();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseEnumBody();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c31(s2, s3, s4);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEnumBody() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseLWING();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseEnumConstants();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseCOMMA();
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseEnumBodyDeclarations();
											if (s4 === peg$FAILED) {
												s4 = null;
											}
											if (s4 !== peg$FAILED) {
												s5 = peg$parseRWING();
												if (s5 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c32(s2, s4);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEnumConstants() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseEnumConstant();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseCOMMA();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseEnumConstant();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseEnumConstant();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c29(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEnumConstant() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$parseAnnotation();
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$parseAnnotation();
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseIdentifier();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseArguments();
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseClassBody();
											if (s4 === peg$FAILED) {
												s4 = null;
											}
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c33(s1, s2, s3, s4);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEnumBodyDeclarations() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseSEMI();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseClassBodyDeclaration();
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseClassBodyDeclaration();
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c34(s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLocalVariableDeclarationStatement() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$currPos;
								s3 = peg$parseFINAL();
								if (s3 !== peg$FAILED) {
									peg$savedPos = s2;
									s3 = peg$c35();
								}
								s2 = s3;
								if (s2 === peg$FAILED) {
									s2 = peg$parseAnnotation();
								}
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$currPos;
									s3 = peg$parseFINAL();
									if (s3 !== peg$FAILED) {
										peg$savedPos = s2;
										s3 = peg$c35();
									}
									s2 = s3;
									if (s2 === peg$FAILED) {
										s2 = peg$parseAnnotation();
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseType();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseVariableDeclarators();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseSEMI();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c36(s1, s2, s3);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseVariableDeclarators() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseVariableDeclarator();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseCOMMA();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseVariableDeclarator();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseVariableDeclarator();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c29(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseVariableDeclarator() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseDim();
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseDim();
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$currPos;
										s4 = peg$parseEQU();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseVariableInitializer();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c37(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseFormalParameters() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseLPAR();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseFormalParameterList();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRPAR();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c38(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseFormalParameter() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$currPos;
								s3 = peg$parseFINAL();
								if (s3 !== peg$FAILED) {
									peg$savedPos = s2;
									s3 = peg$c35();
								}
								s2 = s3;
								if (s2 === peg$FAILED) {
									s2 = peg$parseAnnotation();
								}
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$currPos;
									s3 = peg$parseFINAL();
									if (s3 !== peg$FAILED) {
										peg$savedPos = s2;
										s3 = peg$c35();
									}
									s2 = s3;
									if (s2 === peg$FAILED) {
										s2 = peg$parseAnnotation();
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseType();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseVariableDeclaratorId();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c39(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLastFormalParameter() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$currPos;
								s3 = peg$parseFINAL();
								if (s3 !== peg$FAILED) {
									peg$savedPos = s2;
									s3 = peg$c35();
								}
								s2 = s3;
								if (s2 === peg$FAILED) {
									s2 = peg$parseAnnotation();
								}
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$currPos;
									s3 = peg$parseFINAL();
									if (s3 !== peg$FAILED) {
										peg$savedPos = s2;
										s3 = peg$c35();
									}
									s2 = s3;
									if (s2 === peg$FAILED) {
										s2 = peg$parseAnnotation();
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseType();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseELLIPSIS();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseVariableDeclaratorId();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c40(s1, s2, s4);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseFormalParameterList() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseFormalParameter();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseCOMMA();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseFormalParameter();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseFormalParameter();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseLastFormalParameter();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c41(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseLastFormalParameter();
									if (s1 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c42(s1);
									}
									s0 = s1;
								}

								return s0;
							}

							function peg$parseVariableDeclaratorId() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseDim();
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseDim();
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c43(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseBlock() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseLWING();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseBlockStatements();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRWING();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c44(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseBlockStatements() {
								var s0, s1;

								s0 = [];
								s1 = peg$parseBlockStatement();
								while (s1 !== peg$FAILED) {
									s0.push(s1);
									s1 = peg$parseBlockStatement();
								}

								return s0;
							}

							function peg$parseBlockStatement() {
								var s0, s1, s2;

								s0 = peg$parseLocalVariableDeclarationStatement();
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = [];
									s2 = peg$parseModifier();
									while (s2 !== peg$FAILED) {
										s1.push(s2);
										s2 = peg$parseModifier();
									}
									if (s1 !== peg$FAILED) {
										s2 = peg$parseClassDeclaration();
										if (s2 === peg$FAILED) {
											s2 = peg$parseEnumDeclaration();
										}
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c45(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$parseStatement();
									}
								}

								return s0;
							}

							function peg$parseStatement() {
								var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

								s0 = peg$parseBlock();
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseASSERT();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseExpression();
										if (s2 !== peg$FAILED) {
											s3 = peg$currPos;
											s4 = peg$parseCOLON();
											if (s4 !== peg$FAILED) {
												s5 = peg$parseExpression();
												if (s5 !== peg$FAILED) {
													s4 = [s4, s5];
													s3 = s4;
												} else {
													peg$currPos = s3;
													s3 = peg$FAILED;
												}
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
											if (s3 === peg$FAILED) {
												s3 = null;
											}
											if (s3 !== peg$FAILED) {
												s4 = peg$parseSEMI();
												if (s4 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c46(s2, s3);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parseIF();
										if (s1 !== peg$FAILED) {
											s2 = peg$parseParExpression();
											if (s2 !== peg$FAILED) {
												s3 = peg$parseStatement();
												if (s3 !== peg$FAILED) {
													s4 = peg$currPos;
													s5 = peg$parseELSE();
													if (s5 !== peg$FAILED) {
														s6 = peg$parseStatement();
														if (s6 !== peg$FAILED) {
															s5 = [s5, s6];
															s4 = s5;
														} else {
															peg$currPos = s4;
															s4 = peg$FAILED;
														}
													} else {
														peg$currPos = s4;
														s4 = peg$FAILED;
													}
													if (s4 === peg$FAILED) {
														s4 = null;
													}
													if (s4 !== peg$FAILED) {
														peg$savedPos = s0;
														s1 = peg$c47(s2, s3, s4);
														s0 = s1;
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
										if (s0 === peg$FAILED) {
											s0 = peg$currPos;
											s1 = peg$parseFOR();
											if (s1 !== peg$FAILED) {
												s2 = peg$parseLPAR();
												if (s2 !== peg$FAILED) {
													s3 = peg$parseForInit();
													if (s3 === peg$FAILED) {
														s3 = null;
													}
													if (s3 !== peg$FAILED) {
														s4 = peg$parseSEMI();
														if (s4 !== peg$FAILED) {
															s5 = peg$parseExpression();
															if (s5 === peg$FAILED) {
																s5 = null;
															}
															if (s5 !== peg$FAILED) {
																s6 = peg$parseSEMI();
																if (s6 !== peg$FAILED) {
																	s7 = peg$parseForUpdate();
																	if (s7 === peg$FAILED) {
																		s7 = null;
																	}
																	if (s7 !== peg$FAILED) {
																		s8 = peg$parseRPAR();
																		if (s8 !== peg$FAILED) {
																			s9 = peg$parseStatement();
																			if (s9 !== peg$FAILED) {
																				peg$savedPos = s0;
																				s1 = peg$c48(s3, s5, s7, s9);
																				s0 = s1;
																			} else {
																				peg$currPos = s0;
																				s0 = peg$FAILED;
																			}
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																} else {
																	peg$currPos = s0;
																	s0 = peg$FAILED;
																}
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
											if (s0 === peg$FAILED) {
												s0 = peg$currPos;
												s1 = peg$parseFOR();
												if (s1 !== peg$FAILED) {
													s2 = peg$parseLPAR();
													if (s2 !== peg$FAILED) {
														s3 = peg$parseFormalParameter();
														if (s3 !== peg$FAILED) {
															s4 = peg$parseCOLON();
															if (s4 !== peg$FAILED) {
																s5 = peg$parseExpression();
																if (s5 !== peg$FAILED) {
																	s6 = peg$parseRPAR();
																	if (s6 !== peg$FAILED) {
																		s7 = peg$parseStatement();
																		if (s7 !== peg$FAILED) {
																			peg$savedPos = s0;
																			s1 = peg$c49(s3, s5, s7);
																			s0 = s1;
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																} else {
																	peg$currPos = s0;
																	s0 = peg$FAILED;
																}
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
												if (s0 === peg$FAILED) {
													s0 = peg$currPos;
													s1 = peg$parseWHILE();
													if (s1 !== peg$FAILED) {
														s2 = peg$parseParExpression();
														if (s2 !== peg$FAILED) {
															s3 = peg$parseStatement();
															if (s3 !== peg$FAILED) {
																peg$savedPos = s0;
																s1 = peg$c50(s2, s3);
																s0 = s1;
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
													if (s0 === peg$FAILED) {
														s0 = peg$currPos;
														s1 = peg$parseDO();
														if (s1 !== peg$FAILED) {
															s2 = peg$parseStatement();
															if (s2 !== peg$FAILED) {
																s3 = peg$parseWHILE();
																if (s3 !== peg$FAILED) {
																	s4 = peg$parseParExpression();
																	if (s4 !== peg$FAILED) {
																		s5 = peg$parseSEMI();
																		if (s5 !== peg$FAILED) {
																			peg$savedPos = s0;
																			s1 = peg$c51(s2, s4);
																			s0 = s1;
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																} else {
																	peg$currPos = s0;
																	s0 = peg$FAILED;
																}
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
														if (s0 === peg$FAILED) {
															s0 = peg$currPos;
															s1 = peg$parseTRY();
															if (s1 !== peg$FAILED) {
																s2 = peg$parseLPAR();
																if (s2 !== peg$FAILED) {
																	s3 = peg$parseResource();
																	if (s3 !== peg$FAILED) {
																		s4 = [];
																		s5 = peg$currPos;
																		s6 = peg$parseSEMI();
																		if (s6 !== peg$FAILED) {
																			s7 = peg$parseResource();
																			if (s7 !== peg$FAILED) {
																				s6 = [s6, s7];
																				s5 = s6;
																			} else {
																				peg$currPos = s5;
																				s5 = peg$FAILED;
																			}
																		} else {
																			peg$currPos = s5;
																			s5 = peg$FAILED;
																		}
																		while (s5 !== peg$FAILED) {
																			s4.push(s5);
																			s5 = peg$currPos;
																			s6 = peg$parseSEMI();
																			if (s6 !== peg$FAILED) {
																				s7 = peg$parseResource();
																				if (s7 !== peg$FAILED) {
																					s6 = [s6, s7];
																					s5 = s6;
																				} else {
																					peg$currPos = s5;
																					s5 = peg$FAILED;
																				}
																			} else {
																				peg$currPos = s5;
																				s5 = peg$FAILED;
																			}
																		}
																		if (s4 !== peg$FAILED) {
																			s5 = peg$parseSEMI();
																			if (s5 === peg$FAILED) {
																				s5 = null;
																			}
																			if (s5 !== peg$FAILED) {
																				s6 = peg$parseRPAR();
																				if (s6 !== peg$FAILED) {
																					s7 = peg$parseBlock();
																					if (s7 !== peg$FAILED) {
																						s8 = [];
																						s9 = peg$parseCatch();
																						while (s9 !== peg$FAILED) {
																							s8.push(s9);
																							s9 = peg$parseCatch();
																						}
																						if (s8 !== peg$FAILED) {
																							s9 = peg$parseFinally();
																							if (s9 === peg$FAILED) {
																								s9 = null;
																							}
																							if (s9 !== peg$FAILED) {
																								peg$savedPos = s0;
																								s1 = peg$c52(s3, s4, s7, s8, s9);
																								s0 = s1;
																							} else {
																								peg$currPos = s0;
																								s0 = peg$FAILED;
																							}
																						} else {
																							peg$currPos = s0;
																							s0 = peg$FAILED;
																						}
																					} else {
																						peg$currPos = s0;
																						s0 = peg$FAILED;
																					}
																				} else {
																					peg$currPos = s0;
																					s0 = peg$FAILED;
																				}
																			} else {
																				peg$currPos = s0;
																				s0 = peg$FAILED;
																			}
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																} else {
																	peg$currPos = s0;
																	s0 = peg$FAILED;
																}
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
															if (s0 === peg$FAILED) {
																s0 = peg$currPos;
																s1 = peg$parseTRY();
																if (s1 !== peg$FAILED) {
																	s2 = peg$parseBlock();
																	if (s2 !== peg$FAILED) {
																		s3 = peg$currPos;
																		s4 = [];
																		s5 = peg$parseCatch();
																		if (s5 !== peg$FAILED) {
																			while (s5 !== peg$FAILED) {
																				s4.push(s5);
																				s5 = peg$parseCatch();
																			}
																		} else {
																			s4 = peg$FAILED;
																		}
																		if (s4 !== peg$FAILED) {
																			s5 = peg$parseFinally();
																			if (s5 === peg$FAILED) {
																				s5 = null;
																			}
																			if (s5 !== peg$FAILED) {
																				peg$savedPos = s3;
																				s4 = peg$c53(s2, s4, s5);
																				s3 = s4;
																			} else {
																				peg$currPos = s3;
																				s3 = peg$FAILED;
																			}
																		} else {
																			peg$currPos = s3;
																			s3 = peg$FAILED;
																		}
																		if (s3 === peg$FAILED) {
																			s3 = peg$currPos;
																			s4 = peg$parseFinally();
																			if (s4 !== peg$FAILED) {
																				peg$savedPos = s3;
																				s4 = peg$c54(s2, s4);
																			}
																			s3 = s4;
																		}
																		if (s3 !== peg$FAILED) {
																			peg$savedPos = s0;
																			s1 = peg$c55(s2, s3);
																			s0 = s1;
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																} else {
																	peg$currPos = s0;
																	s0 = peg$FAILED;
																}
																if (s0 === peg$FAILED) {
																	s0 = peg$currPos;
																	s1 = peg$parseSWITCH();
																	if (s1 !== peg$FAILED) {
																		s2 = peg$parseParExpression();
																		if (s2 !== peg$FAILED) {
																			s3 = peg$parseLWING();
																			if (s3 !== peg$FAILED) {
																				s4 = peg$parseSwitchBlockStatementGroups();
																				if (s4 !== peg$FAILED) {
																					s5 = peg$parseRWING();
																					if (s5 !== peg$FAILED) {
																						peg$savedPos = s0;
																						s1 = peg$c56(s2, s4);
																						s0 = s1;
																					} else {
																						peg$currPos = s0;
																						s0 = peg$FAILED;
																					}
																				} else {
																					peg$currPos = s0;
																					s0 = peg$FAILED;
																				}
																			} else {
																				peg$currPos = s0;
																				s0 = peg$FAILED;
																			}
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																	if (s0 === peg$FAILED) {
																		s0 = peg$currPos;
																		s1 = peg$parseSYNCHRONIZED();
																		if (s1 !== peg$FAILED) {
																			s2 = peg$parseParExpression();
																			if (s2 !== peg$FAILED) {
																				s3 = peg$parseBlock();
																				if (s3 !== peg$FAILED) {
																					peg$savedPos = s0;
																					s1 = peg$c57(s2, s3);
																					s0 = s1;
																				} else {
																					peg$currPos = s0;
																					s0 = peg$FAILED;
																				}
																			} else {
																				peg$currPos = s0;
																				s0 = peg$FAILED;
																			}
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																		if (s0 === peg$FAILED) {
																			s0 = peg$currPos;
																			s1 = peg$parseRETURN();
																			if (s1 !== peg$FAILED) {
																				s2 = peg$parseExpression();
																				if (s2 === peg$FAILED) {
																					s2 = null;
																				}
																				if (s2 !== peg$FAILED) {
																					s3 = peg$parseSEMI();
																					if (s3 !== peg$FAILED) {
																						peg$savedPos = s0;
																						s1 = peg$c58(s2);
																						s0 = s1;
																					} else {
																						peg$currPos = s0;
																						s0 = peg$FAILED;
																					}
																				} else {
																					peg$currPos = s0;
																					s0 = peg$FAILED;
																				}
																			} else {
																				peg$currPos = s0;
																				s0 = peg$FAILED;
																			}
																			if (s0 === peg$FAILED) {
																				s0 = peg$currPos;
																				s1 = peg$parseTHROW();
																				if (s1 !== peg$FAILED) {
																					s2 = peg$parseExpression();
																					if (s2 !== peg$FAILED) {
																						s3 = peg$parseSEMI();
																						if (s3 !== peg$FAILED) {
																							peg$savedPos = s0;
																							s1 = peg$c59(s2);
																							s0 = s1;
																						} else {
																							peg$currPos = s0;
																							s0 = peg$FAILED;
																						}
																					} else {
																						peg$currPos = s0;
																						s0 = peg$FAILED;
																					}
																				} else {
																					peg$currPos = s0;
																					s0 = peg$FAILED;
																				}
																				if (s0 === peg$FAILED) {
																					s0 = peg$currPos;
																					s1 = peg$parseBREAK();
																					if (s1 !== peg$FAILED) {
																						s2 = peg$parseIdentifier();
																						if (s2 === peg$FAILED) {
																							s2 = null;
																						}
																						if (s2 !== peg$FAILED) {
																							s3 = peg$parseSEMI();
																							if (s3 !== peg$FAILED) {
																								peg$savedPos = s0;
																								s1 = peg$c60(s2);
																								s0 = s1;
																							} else {
																								peg$currPos = s0;
																								s0 = peg$FAILED;
																							}
																						} else {
																							peg$currPos = s0;
																							s0 = peg$FAILED;
																						}
																					} else {
																						peg$currPos = s0;
																						s0 = peg$FAILED;
																					}
																					if (s0 === peg$FAILED) {
																						s0 = peg$currPos;
																						s1 = peg$parseCONTINUE();
																						if (s1 !== peg$FAILED) {
																							s2 = peg$parseIdentifier();
																							if (s2 === peg$FAILED) {
																								s2 = null;
																							}
																							if (s2 !== peg$FAILED) {
																								s3 = peg$parseSEMI();
																								if (s3 !== peg$FAILED) {
																									peg$savedPos = s0;
																									s1 = peg$c61(s2);
																									s0 = s1;
																								} else {
																									peg$currPos = s0;
																									s0 = peg$FAILED;
																								}
																							} else {
																								peg$currPos = s0;
																								s0 = peg$FAILED;
																							}
																						} else {
																							peg$currPos = s0;
																							s0 = peg$FAILED;
																						}
																						if (s0 === peg$FAILED) {
																							s0 = peg$currPos;
																							s1 = peg$parseSEMI();
																							if (s1 !== peg$FAILED) {
																								peg$savedPos = s0;
																								s1 = peg$c62();
																							}
																							s0 = s1;
																							if (s0 === peg$FAILED) {
																								s0 = peg$currPos;
																								s1 = peg$parseStatementExpression();
																								if (s1 !== peg$FAILED) {
																									s2 = peg$parseSEMI();
																									if (s2 !== peg$FAILED) {
																										peg$savedPos = s0;
																										s1 = peg$c63(s1);
																										s0 = s1;
																									} else {
																										peg$currPos = s0;
																										s0 = peg$FAILED;
																									}
																								} else {
																									peg$currPos = s0;
																									s0 = peg$FAILED;
																								}
																								if (s0 === peg$FAILED) {
																									s0 = peg$currPos;
																									s1 = peg$parseIdentifier();
																									if (s1 !== peg$FAILED) {
																										s2 = peg$parseCOLON();
																										if (s2 !== peg$FAILED) {
																											s3 = peg$parseStatement();
																											if (s3 !== peg$FAILED) {
																												peg$savedPos = s0;
																												s1 = peg$c64(s1, s3);
																												s0 = s1;
																											} else {
																												peg$currPos = s0;
																												s0 = peg$FAILED;
																											}
																										} else {
																											peg$currPos = s0;
																											s0 = peg$FAILED;
																										}
																									} else {
																										peg$currPos = s0;
																										s0 = peg$FAILED;
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}

								return s0;
							}

							function peg$parseResource() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$currPos;
								s3 = peg$parseFINAL();
								if (s3 !== peg$FAILED) {
									peg$savedPos = s2;
									s3 = peg$c35();
								}
								s2 = s3;
								if (s2 === peg$FAILED) {
									s2 = peg$parseAnnotation();
								}
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$currPos;
									s3 = peg$parseFINAL();
									if (s3 !== peg$FAILED) {
										peg$savedPos = s2;
										s3 = peg$c35();
									}
									s2 = s3;
									if (s2 === peg$FAILED) {
										s2 = peg$parseAnnotation();
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseType();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseVariableDeclaratorId();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseEQU();
											if (s4 !== peg$FAILED) {
												s5 = peg$parseExpression();
												if (s5 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c65(s1, s2, s3, s5);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseCatch() {
								var s0, s1, s2, s3, s4, s5, s6, s7, s8;

								s0 = peg$currPos;
								s1 = peg$parseCATCH();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseLPAR();
									if (s2 !== peg$FAILED) {
										s3 = [];
										s4 = peg$currPos;
										s5 = peg$parseFINAL();
										if (s5 !== peg$FAILED) {
											peg$savedPos = s4;
											s5 = peg$c35();
										}
										s4 = s5;
										if (s4 === peg$FAILED) {
											s4 = peg$parseAnnotation();
										}
										while (s4 !== peg$FAILED) {
											s3.push(s4);
											s4 = peg$currPos;
											s5 = peg$parseFINAL();
											if (s5 !== peg$FAILED) {
												peg$savedPos = s4;
												s5 = peg$c35();
											}
											s4 = s5;
											if (s4 === peg$FAILED) {
												s4 = peg$parseAnnotation();
											}
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseType();
											if (s4 !== peg$FAILED) {
												s5 = [];
												s6 = peg$currPos;
												s7 = peg$parseOR();
												if (s7 !== peg$FAILED) {
													s8 = peg$parseType();
													if (s8 !== peg$FAILED) {
														s7 = [s7, s8];
														s6 = s7;
													} else {
														peg$currPos = s6;
														s6 = peg$FAILED;
													}
												} else {
													peg$currPos = s6;
													s6 = peg$FAILED;
												}
												while (s6 !== peg$FAILED) {
													s5.push(s6);
													s6 = peg$currPos;
													s7 = peg$parseOR();
													if (s7 !== peg$FAILED) {
														s8 = peg$parseType();
														if (s8 !== peg$FAILED) {
															s7 = [s7, s8];
															s6 = s7;
														} else {
															peg$currPos = s6;
															s6 = peg$FAILED;
														}
													} else {
														peg$currPos = s6;
														s6 = peg$FAILED;
													}
												}
												if (s5 !== peg$FAILED) {
													s6 = peg$parseVariableDeclaratorId();
													if (s6 !== peg$FAILED) {
														s7 = peg$parseRPAR();
														if (s7 !== peg$FAILED) {
															s8 = peg$parseBlock();
															if (s8 !== peg$FAILED) {
																peg$savedPos = s0;
																s1 = peg$c66(s3, s4, s5, s6, s8);
																s0 = s1;
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseFinally() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseFINALLY();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseBlock();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c67(s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSwitchBlockStatementGroups() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$parseSwitchBlockStatementGroup();
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$parseSwitchBlockStatementGroup();
								}
								if (s1 !== peg$FAILED) {
									peg$savedPos = s0;
									s1 = peg$c68(s1);
								}
								s0 = s1;

								return s0;
							}

							function peg$parseSwitchBlockStatementGroup() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseSwitchLabel();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseBlockStatements();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c69(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSwitchLabel() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseCASE();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseExpression();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseCOLON();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c70(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseCASE();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseIdentifier();
										if (s2 !== peg$FAILED) {
											s3 = peg$parseCOLON();
											if (s3 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c70(s2);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parseDEFAULT();
										if (s1 !== peg$FAILED) {
											s2 = peg$parseCOLON();
											if (s2 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c3();
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									}
								}

								return s0;
							}

							function peg$parseForInit() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$currPos;
								s3 = peg$parseFINAL();
								if (s3 !== peg$FAILED) {
									peg$savedPos = s2;
									s3 = peg$c35();
								}
								s2 = s3;
								if (s2 === peg$FAILED) {
									s2 = peg$parseAnnotation();
								}
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$currPos;
									s3 = peg$parseFINAL();
									if (s3 !== peg$FAILED) {
										peg$savedPos = s2;
										s3 = peg$c35();
									}
									s2 = s3;
									if (s2 === peg$FAILED) {
										s2 = peg$parseAnnotation();
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseType();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseVariableDeclarators();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c71(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseStatementExpression();
									if (s1 !== peg$FAILED) {
										s2 = [];
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseStatementExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
										while (s3 !== peg$FAILED) {
											s2.push(s3);
											s3 = peg$currPos;
											s4 = peg$parseCOMMA();
											if (s4 !== peg$FAILED) {
												s5 = peg$parseStatementExpression();
												if (s5 !== peg$FAILED) {
													s4 = [s4, s5];
													s3 = s4;
												} else {
													peg$currPos = s3;
													s3 = peg$FAILED;
												}
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										}
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c72(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parseForUpdate() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseStatementExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseCOMMA();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseStatementExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseStatementExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c72(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseStatementExpression() {
								var s0, s1;

								s0 = peg$currPos;
								s1 = peg$parseExpression();
								if (s1 !== peg$FAILED) {
									peg$savedPos = s0;
									s1 = peg$c73(s1);
								}
								s0 = s1;

								return s0;
							}

							function peg$parseExpression() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseConditionalExpression();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseAssignmentOperator();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseExpression();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c74(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$parseConditionalExpression();
								}

								return s0;
							}

							function peg$parseAssignmentOperator() {
								var s0;

								s0 = peg$parseEQU();
								if (s0 === peg$FAILED) {
									s0 = peg$parsePLUSEQU();
									if (s0 === peg$FAILED) {
										s0 = peg$parseMINUSEQU();
										if (s0 === peg$FAILED) {
											s0 = peg$parseSTAREQU();
											if (s0 === peg$FAILED) {
												s0 = peg$parseDIVEQU();
												if (s0 === peg$FAILED) {
													s0 = peg$parseANDEQU();
													if (s0 === peg$FAILED) {
														s0 = peg$parseOREQU();
														if (s0 === peg$FAILED) {
															s0 = peg$parseHATEQU();
															if (s0 === peg$FAILED) {
																s0 = peg$parseMODEQU();
																if (s0 === peg$FAILED) {
																	s0 = peg$parseSLEQU();
																	if (s0 === peg$FAILED) {
																		s0 = peg$parseSREQU();
																		if (s0 === peg$FAILED) {
																			s0 = peg$parseBSREQU();
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}

								return s0;
							}

							function peg$parseConditionalExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseConditionalOrExpression();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseQUERY();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseExpression();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseCOLON();
											if (s4 !== peg$FAILED) {
												s5 = peg$parseConditionalExpression();
												if (s5 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c75(s1, s3, s5);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$parseConditionalOrExpression();
								}

								return s0;
							}

							function peg$parseConditionalOrExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseConditionalAndExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseOROR();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseConditionalAndExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseOROR();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseConditionalAndExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c76(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseConditionalAndExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseInclusiveOrExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseANDAND();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseInclusiveOrExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseANDAND();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseInclusiveOrExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c76(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseInclusiveOrExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseExclusiveOrExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseOR();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseExclusiveOrExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseOR();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseExclusiveOrExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c76(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseExclusiveOrExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseAndExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseHAT();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseAndExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseHAT();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseAndExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c76(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseAndExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseEqualityExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseAND();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseEqualityExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseAND();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseEqualityExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c76(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEqualityExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseRelationalExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseEQUAL();
									if (s4 === peg$FAILED) {
										s4 = peg$parseNOTEQUAL();
									}
									if (s4 !== peg$FAILED) {
										s5 = peg$parseRelationalExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseEQUAL();
										if (s4 === peg$FAILED) {
											s4 = peg$parseNOTEQUAL();
										}
										if (s4 !== peg$FAILED) {
											s5 = peg$parseRelationalExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c76(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseRelationalExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseShiftExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseLE();
									if (s4 === peg$FAILED) {
										s4 = peg$parseGE();
										if (s4 === peg$FAILED) {
											s4 = peg$parseLT();
											if (s4 === peg$FAILED) {
												s4 = peg$parseGT();
											}
										}
									}
									if (s4 !== peg$FAILED) {
										s5 = peg$parseShiftExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									if (s3 === peg$FAILED) {
										s3 = peg$currPos;
										s4 = peg$parseINSTANCEOF();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseReferenceType();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseLE();
										if (s4 === peg$FAILED) {
											s4 = peg$parseGE();
											if (s4 === peg$FAILED) {
												s4 = peg$parseLT();
												if (s4 === peg$FAILED) {
													s4 = peg$parseGT();
												}
											}
										}
										if (s4 !== peg$FAILED) {
											s5 = peg$parseShiftExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
										if (s3 === peg$FAILED) {
											s3 = peg$currPos;
											s4 = peg$parseINSTANCEOF();
											if (s4 !== peg$FAILED) {
												s5 = peg$parseReferenceType();
												if (s5 !== peg$FAILED) {
													s4 = [s4, s5];
													s3 = s4;
												} else {
													peg$currPos = s3;
													s3 = peg$FAILED;
												}
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c77(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseShiftExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseAdditiveExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseSL();
									if (s4 === peg$FAILED) {
										s4 = peg$parseSR();
										if (s4 === peg$FAILED) {
											s4 = peg$parseBSR();
										}
									}
									if (s4 !== peg$FAILED) {
										s5 = peg$parseAdditiveExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseSL();
										if (s4 === peg$FAILED) {
											s4 = peg$parseSR();
											if (s4 === peg$FAILED) {
												s4 = peg$parseBSR();
											}
										}
										if (s4 !== peg$FAILED) {
											s5 = peg$parseAdditiveExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c76(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseAdditiveExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseMultiplicativeExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parsePLUS();
									if (s4 === peg$FAILED) {
										s4 = peg$parseMINUS();
									}
									if (s4 !== peg$FAILED) {
										s5 = peg$parseMultiplicativeExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parsePLUS();
										if (s4 === peg$FAILED) {
											s4 = peg$parseMINUS();
										}
										if (s4 !== peg$FAILED) {
											s5 = peg$parseMultiplicativeExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c76(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseMultiplicativeExpression() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseUnaryExpression();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseSTAR();
									if (s4 === peg$FAILED) {
										s4 = peg$parseDIV();
										if (s4 === peg$FAILED) {
											s4 = peg$parseMOD();
										}
									}
									if (s4 !== peg$FAILED) {
										s5 = peg$parseUnaryExpression();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseSTAR();
										if (s4 === peg$FAILED) {
											s4 = peg$parseDIV();
											if (s4 === peg$FAILED) {
												s4 = peg$parseMOD();
											}
										}
										if (s4 !== peg$FAILED) {
											s5 = peg$parseUnaryExpression();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c76(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseUnaryExpression() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parsePrefixOp();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseUnaryExpression();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c78(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$parseUnaryExpressionNotPlusMinus();
								}

								return s0;
							}

							function peg$parseUnaryExpressionNotPlusMinus() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseCastExpression();
								if (s1 !== peg$FAILED) {
									peg$savedPos = s0;
									s1 = peg$c79(s1);
								}
								s0 = s1;
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parsePrimary();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseSelector();
										if (s2 !== peg$FAILED) {
											s3 = [];
											s4 = peg$parseSelector();
											while (s4 !== peg$FAILED) {
												s3.push(s4);
												s4 = peg$parseSelector();
											}
											if (s3 !== peg$FAILED) {
												s4 = [];
												s5 = peg$parsePostfixOp();
												if (s5 !== peg$FAILED) {
													while (s5 !== peg$FAILED) {
														s4.push(s5);
														s5 = peg$parsePostfixOp();
													}
												} else {
													s4 = peg$FAILED;
												}
												if (s4 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c80(s1, s2, s3, s4);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parsePrimary();
										if (s1 !== peg$FAILED) {
											s2 = peg$parseSelector();
											if (s2 !== peg$FAILED) {
												s3 = [];
												s4 = peg$parseSelector();
												while (s4 !== peg$FAILED) {
													s3.push(s4);
													s4 = peg$parseSelector();
												}
												if (s3 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c81(s1, s2, s3);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
										if (s0 === peg$FAILED) {
											s0 = peg$currPos;
											s1 = peg$parsePrimary();
											if (s1 !== peg$FAILED) {
												s2 = [];
												s3 = peg$parsePostfixOp();
												if (s3 !== peg$FAILED) {
													while (s3 !== peg$FAILED) {
														s2.push(s3);
														s3 = peg$parsePostfixOp();
													}
												} else {
													s2 = peg$FAILED;
												}
												if (s2 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c82(s1, s2);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
											if (s0 === peg$FAILED) {
												s0 = peg$parsePrimary();
											}
										}
									}
								}

								return s0;
							}

							function peg$parseCastExpression() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseLPAR();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseBasicType();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRPAR();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseUnaryExpression();
											if (s4 !== peg$FAILED) {
												s1 = [s1, s2, s3, s4];
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseLPAR();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseReferenceType();
										if (s2 !== peg$FAILED) {
											s3 = peg$parseRPAR();
											if (s3 !== peg$FAILED) {
												s4 = peg$parseUnaryExpressionNotPlusMinus();
												if (s4 !== peg$FAILED) {
													s1 = [s1, s2, s3, s4];
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parsePrimary() {
								var s0, s1, s2, s3, s4;

								s0 = peg$parseParExpression();
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseNonWildcardTypeArguments();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseExplicitGenericInvocationSuffix();
										if (s2 === peg$FAILED) {
											s2 = peg$currPos;
											s3 = peg$parseTHIS();
											if (s3 !== peg$FAILED) {
												s4 = peg$parseArguments();
												if (s4 !== peg$FAILED) {
													peg$savedPos = s2;
													s3 = peg$c83(s1, s4);
													s2 = s3;
												} else {
													peg$currPos = s2;
													s2 = peg$FAILED;
												}
											} else {
												peg$currPos = s2;
												s2 = peg$FAILED;
											}
										}
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c84(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parseTHIS();
										if (s1 !== peg$FAILED) {
											s2 = peg$parseArguments();
											if (s2 === peg$FAILED) {
												s2 = null;
											}
											if (s2 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c85(s2);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
										if (s0 === peg$FAILED) {
											s0 = peg$currPos;
											s1 = peg$parseSUPER();
											if (s1 !== peg$FAILED) {
												s2 = peg$parseSuperSuffix();
												if (s2 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c86(s2);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
											if (s0 === peg$FAILED) {
												s0 = peg$parseLiteral();
												if (s0 === peg$FAILED) {
													s0 = peg$currPos;
													s1 = peg$parseNEW();
													if (s1 !== peg$FAILED) {
														s2 = peg$parseCreator();
														if (s2 !== peg$FAILED) {
															peg$savedPos = s0;
															s1 = peg$c87(s2);
															s0 = s1;
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
													if (s0 === peg$FAILED) {
														s0 = peg$parseQualifiedIdentifierSuffix();
														if (s0 === peg$FAILED) {
															s0 = peg$parseQualifiedIdentifier();
															if (s0 === peg$FAILED) {
																s0 = peg$currPos;
																s1 = peg$parseBasicType();
																if (s1 !== peg$FAILED) {
																	s2 = [];
																	s3 = peg$parseDim();
																	while (s3 !== peg$FAILED) {
																		s2.push(s3);
																		s3 = peg$parseDim();
																	}
																	if (s2 !== peg$FAILED) {
																		s3 = peg$parseDOT();
																		if (s3 !== peg$FAILED) {
																			s4 = peg$parseCLASS();
																			if (s4 !== peg$FAILED) {
																				peg$savedPos = s0;
																				s1 = peg$c88(s1, s2);
																				s0 = s1;
																			} else {
																				peg$currPos = s0;
																				s0 = peg$FAILED;
																			}
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																} else {
																	peg$currPos = s0;
																	s0 = peg$FAILED;
																}
																if (s0 === peg$FAILED) {
																	s0 = peg$currPos;
																	s1 = peg$parseVOID();
																	if (s1 !== peg$FAILED) {
																		s2 = peg$parseDOT();
																		if (s2 !== peg$FAILED) {
																			s3 = peg$parseCLASS();
																			if (s3 !== peg$FAILED) {
																				peg$savedPos = s0;
																				s1 = peg$c89();
																				s0 = s1;
																			} else {
																				peg$currPos = s0;
																				s0 = peg$FAILED;
																			}
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}

								return s0;
							}

							function peg$parseQualifiedIdentifierSuffix() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseQualifiedIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseDim();
									if (s3 !== peg$FAILED) {
										while (s3 !== peg$FAILED) {
											s2.push(s3);
											s3 = peg$parseDim();
										}
									} else {
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseDOT();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseCLASS();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c90(s1, s2);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseQualifiedIdentifier();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseLBRK();
										if (s2 !== peg$FAILED) {
											s3 = peg$parseExpression();
											if (s3 !== peg$FAILED) {
												s4 = peg$parseRBRK();
												if (s4 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c91(s1, s3);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parseQualifiedIdentifier();
										if (s1 !== peg$FAILED) {
											s2 = peg$parseArguments();
											if (s2 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c92(s1, s2);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
										if (s0 === peg$FAILED) {
											s0 = peg$currPos;
											s1 = peg$parseQualifiedIdentifier();
											if (s1 !== peg$FAILED) {
												s2 = peg$parseDOT();
												if (s2 !== peg$FAILED) {
													s3 = peg$parseCLASS();
													if (s3 !== peg$FAILED) {
														peg$savedPos = s0;
														s1 = peg$c93(s1);
														s0 = s1;
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
											if (s0 === peg$FAILED) {
												s0 = peg$currPos;
												s1 = peg$parseQualifiedIdentifier();
												if (s1 !== peg$FAILED) {
													s2 = peg$parseDOT();
													if (s2 !== peg$FAILED) {
														s3 = peg$parseExplicitGenericInvocation();
														if (s3 !== peg$FAILED) {
															peg$savedPos = s0;
															s1 = peg$c94(s1, s3);
															s0 = s1;
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
												if (s0 === peg$FAILED) {
													s0 = peg$currPos;
													s1 = peg$parseQualifiedIdentifier();
													if (s1 !== peg$FAILED) {
														s2 = peg$parseDOT();
														if (s2 !== peg$FAILED) {
															s3 = peg$parseTHIS();
															if (s3 !== peg$FAILED) {
																peg$savedPos = s0;
																s1 = peg$c95(s1);
																s0 = s1;
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
													if (s0 === peg$FAILED) {
														s0 = peg$currPos;
														s1 = peg$parseQualifiedIdentifier();
														if (s1 !== peg$FAILED) {
															s2 = peg$parseDOT();
															if (s2 !== peg$FAILED) {
																s3 = peg$parseSUPER();
																if (s3 !== peg$FAILED) {
																	s4 = peg$parseArguments();
																	if (s4 !== peg$FAILED) {
																		peg$savedPos = s0;
																		s1 = peg$c96(s1, s4);
																		s0 = s1;
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																} else {
																	peg$currPos = s0;
																	s0 = peg$FAILED;
																}
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
														if (s0 === peg$FAILED) {
															s0 = peg$currPos;
															s1 = peg$parseQualifiedIdentifier();
															if (s1 !== peg$FAILED) {
																s2 = peg$parseDOT();
																if (s2 !== peg$FAILED) {
																	s3 = peg$parseNEW();
																	if (s3 !== peg$FAILED) {
																		s4 = peg$parseNonWildcardTypeArguments();
																		if (s4 === peg$FAILED) {
																			s4 = null;
																		}
																		if (s4 !== peg$FAILED) {
																			s5 = peg$parseInnerCreator();
																			if (s5 !== peg$FAILED) {
																				peg$savedPos = s0;
																				s1 = peg$c97(s1, s4, s5);
																				s0 = s1;
																			} else {
																				peg$currPos = s0;
																				s0 = peg$FAILED;
																			}
																		} else {
																			peg$currPos = s0;
																			s0 = peg$FAILED;
																		}
																	} else {
																		peg$currPos = s0;
																		s0 = peg$FAILED;
																	}
																} else {
																	peg$currPos = s0;
																	s0 = peg$FAILED;
																}
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
														}
													}
												}
											}
										}
									}
								}

								return s0;
							}

							function peg$parseExplicitGenericInvocation() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseNonWildcardTypeArguments();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseExplicitGenericInvocationSuffix();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c84(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseNonWildcardTypeArguments() {
								var s0, s1, s2, s3, s4, s5, s6;

								s0 = peg$currPos;
								s1 = peg$parseLPOINT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseReferenceType();
									if (s2 !== peg$FAILED) {
										s3 = [];
										s4 = peg$currPos;
										s5 = peg$parseCOMMA();
										if (s5 !== peg$FAILED) {
											s6 = peg$parseReferenceType();
											if (s6 !== peg$FAILED) {
												s5 = [s5, s6];
												s4 = s5;
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										} else {
											peg$currPos = s4;
											s4 = peg$FAILED;
										}
										while (s4 !== peg$FAILED) {
											s3.push(s4);
											s4 = peg$currPos;
											s5 = peg$parseCOMMA();
											if (s5 !== peg$FAILED) {
												s6 = peg$parseReferenceType();
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseRPOINT();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c29(s2, s3);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseTypeArgumentsOrDiamond() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseLPOINT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseRPOINT();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c98();
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$parseTypeArguments();
								}

								return s0;
							}

							function peg$parseNonWildcardTypeArgumentsOrDiamond() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseLPOINT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseRPOINT();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$parseNonWildcardTypeArguments();
								}

								return s0;
							}

							function peg$parseExplicitGenericInvocationSuffix() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseSUPER();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSuperSuffix();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c99(s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseIdentifier();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseArguments();
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c100(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parsePrefixOp() {
								var s0, s1;

								s0 = peg$currPos;
								s1 = peg$parseINC();
								if (s1 === peg$FAILED) {
									s1 = peg$parseDEC();
									if (s1 === peg$FAILED) {
										s1 = peg$parseBANG();
										if (s1 === peg$FAILED) {
											s1 = peg$parseTILDA();
											if (s1 === peg$FAILED) {
												s1 = peg$parsePLUS();
												if (s1 === peg$FAILED) {
													s1 = peg$parseMINUS();
												}
											}
										}
									}
								}
								if (s1 !== peg$FAILED) {
									peg$savedPos = s0;
									s1 = peg$c101(s1);
								}
								s0 = s1;

								return s0;
							}

							function peg$parsePostfixOp() {
								var s0, s1;

								s0 = peg$currPos;
								s1 = peg$parseINC();
								if (s1 === peg$FAILED) {
									s1 = peg$parseDEC();
								}
								if (s1 !== peg$FAILED) {
									peg$savedPos = s0;
									s1 = peg$c101(s1);
								}
								s0 = s1;

								return s0;
							}

							function peg$parseSelector() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseDOT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseIdentifier();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseArguments();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c100(s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseDOT();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseIdentifier();
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c102(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parseDOT();
										if (s1 !== peg$FAILED) {
											s2 = peg$parseExplicitGenericInvocation();
											if (s2 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c103(s2);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
										if (s0 === peg$FAILED) {
											s0 = peg$currPos;
											s1 = peg$parseDOT();
											if (s1 !== peg$FAILED) {
												s2 = peg$parseTHIS();
												if (s2 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c104();
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
											if (s0 === peg$FAILED) {
												s0 = peg$currPos;
												s1 = peg$parseDOT();
												if (s1 !== peg$FAILED) {
													s2 = peg$parseSUPER();
													if (s2 !== peg$FAILED) {
														s3 = peg$parseSuperSuffix();
														if (s3 !== peg$FAILED) {
															peg$savedPos = s0;
															s1 = peg$c99(s3);
															s0 = s1;
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
												if (s0 === peg$FAILED) {
													s0 = peg$currPos;
													s1 = peg$parseDOT();
													if (s1 !== peg$FAILED) {
														s2 = peg$parseNEW();
														if (s2 !== peg$FAILED) {
															s3 = peg$parseNonWildcardTypeArguments();
															if (s3 === peg$FAILED) {
																s3 = null;
															}
															if (s3 !== peg$FAILED) {
																s4 = peg$parseInnerCreator();
																if (s4 !== peg$FAILED) {
																	peg$savedPos = s0;
																	s1 = peg$c105(s3, s4);
																	s0 = s1;
																} else {
																	peg$currPos = s0;
																	s0 = peg$FAILED;
																}
															} else {
																peg$currPos = s0;
																s0 = peg$FAILED;
															}
														} else {
															peg$currPos = s0;
															s0 = peg$FAILED;
														}
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
													if (s0 === peg$FAILED) {
														s0 = peg$currPos;
														s1 = peg$parseDimExpr();
														if (s1 !== peg$FAILED) {
															peg$savedPos = s0;
															s1 = peg$c106(s1);
														}
														s0 = s1;
													}
												}
											}
										}
									}
								}

								return s0;
							}

							function peg$parseSuperSuffix() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseArguments();
								if (s1 !== peg$FAILED) {
									peg$savedPos = s0;
									s1 = peg$c107(s1);
								}
								s0 = s1;
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseDOT();
									if (s1 !== peg$FAILED) {
										s2 = peg$parseNonWildcardTypeArguments();
										if (s2 === peg$FAILED) {
											s2 = null;
										}
										if (s2 !== peg$FAILED) {
											s3 = peg$parseIdentifier();
											if (s3 !== peg$FAILED) {
												s4 = peg$parseArguments();
												if (s4 === peg$FAILED) {
													s4 = null;
												}
												if (s4 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c108(s2, s3, s4);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parseBasicType() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 4) === peg$c109) {
									s1 = peg$c109;
									peg$currPos += 4;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c110);
									}
								}
								if (s1 === peg$FAILED) {
									if (input.substr(peg$currPos, 5) === peg$c111) {
										s1 = peg$c111;
										peg$currPos += 5;
									} else {
										s1 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c112);
										}
									}
									if (s1 === peg$FAILED) {
										if (input.substr(peg$currPos, 4) === peg$c113) {
											s1 = peg$c113;
											peg$currPos += 4;
										} else {
											s1 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c114);
											}
										}
										if (s1 === peg$FAILED) {
											if (input.substr(peg$currPos, 3) === peg$c115) {
												s1 = peg$c115;
												peg$currPos += 3;
											} else {
												s1 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c116);
												}
											}
											if (s1 === peg$FAILED) {
												if (input.substr(peg$currPos, 4) === peg$c117) {
													s1 = peg$c117;
													peg$currPos += 4;
												} else {
													s1 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c118);
													}
												}
												if (s1 === peg$FAILED) {
													if (input.substr(peg$currPos, 5) === peg$c119) {
														s1 = peg$c119;
														peg$currPos += 5;
													} else {
														s1 = peg$FAILED;
														if (peg$silentFails === 0) {
															peg$fail(peg$c120);
														}
													}
													if (s1 === peg$FAILED) {
														if (input.substr(peg$currPos, 6) === peg$c121) {
															s1 = peg$c121;
															peg$currPos += 6;
														} else {
															s1 = peg$FAILED;
															if (peg$silentFails === 0) {
																peg$fail(peg$c122);
															}
														}
														if (s1 === peg$FAILED) {
															if (input.substr(peg$currPos, 7) === peg$c123) {
																s1 = peg$c123;
																peg$currPos += 7;
															} else {
																s1 = peg$FAILED;
																if (peg$silentFails === 0) {
																	peg$fail(peg$c124);
																}
															}
														}
													}
												}
											}
										}
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c125(s1);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseArguments() {
								var s0, s1, s2, s3, s4, s5, s6, s7;

								s0 = peg$currPos;
								s1 = peg$parseLPAR();
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									s3 = peg$parseExpression();
									if (s3 !== peg$FAILED) {
										s4 = [];
										s5 = peg$currPos;
										s6 = peg$parseCOMMA();
										if (s6 !== peg$FAILED) {
											s7 = peg$parseExpression();
											if (s7 !== peg$FAILED) {
												s6 = [s6, s7];
												s5 = s6;
											} else {
												peg$currPos = s5;
												s5 = peg$FAILED;
											}
										} else {
											peg$currPos = s5;
											s5 = peg$FAILED;
										}
										while (s5 !== peg$FAILED) {
											s4.push(s5);
											s5 = peg$currPos;
											s6 = peg$parseCOMMA();
											if (s6 !== peg$FAILED) {
												s7 = peg$parseExpression();
												if (s7 !== peg$FAILED) {
													s6 = [s6, s7];
													s5 = s6;
												} else {
													peg$currPos = s5;
													s5 = peg$FAILED;
												}
											} else {
												peg$currPos = s5;
												s5 = peg$FAILED;
											}
										}
										if (s4 !== peg$FAILED) {
											peg$savedPos = s2;
											s3 = peg$c29(s3, s4);
											s2 = s3;
										} else {
											peg$currPos = s2;
											s2 = peg$FAILED;
										}
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRPAR();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c126(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseCreator() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseBasicType();
								if (s1 === peg$FAILED) {
									s1 = peg$parseCreatedName();
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseArrayCreatorRest();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c127(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseNonWildcardTypeArguments();
									if (s1 === peg$FAILED) {
										s1 = null;
									}
									if (s1 !== peg$FAILED) {
										s2 = peg$parseCreatedName();
										if (s2 !== peg$FAILED) {
											s3 = peg$parseClassCreatorRest();
											if (s3 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c128(s1, s2, s3);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parseCreatedName() {
								var s0, s1, s2, s3, s4, s5, s6, s7;

								s0 = peg$currPos;
								s1 = peg$parseQualifiedIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseTypeArgumentsOrDiamond();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = [];
										s4 = peg$currPos;
										s5 = peg$parseDOT();
										if (s5 !== peg$FAILED) {
											s6 = peg$parseIdentifier();
											if (s6 !== peg$FAILED) {
												s7 = peg$parseTypeArgumentsOrDiamond();
												if (s7 === peg$FAILED) {
													s7 = null;
												}
												if (s7 !== peg$FAILED) {
													s5 = [s5, s6, s7];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										} else {
											peg$currPos = s4;
											s4 = peg$FAILED;
										}
										while (s4 !== peg$FAILED) {
											s3.push(s4);
											s4 = peg$currPos;
											s5 = peg$parseDOT();
											if (s5 !== peg$FAILED) {
												s6 = peg$parseIdentifier();
												if (s6 !== peg$FAILED) {
													s7 = peg$parseTypeArgumentsOrDiamond();
													if (s7 === peg$FAILED) {
														s7 = null;
													}
													if (s7 !== peg$FAILED) {
														s5 = [s5, s6, s7];
														s4 = s5;
													} else {
														peg$currPos = s4;
														s4 = peg$FAILED;
													}
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										}
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c129(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseInnerCreator() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseNonWildcardTypeArgumentsOrDiamond();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseClassCreatorRest();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c130(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseClassCreatorRest() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseArguments();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseClassBody();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c131(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseArrayCreatorRest() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$parseDim();
								if (s2 !== peg$FAILED) {
									while (s2 !== peg$FAILED) {
										s1.push(s2);
										s2 = peg$parseDim();
									}
								} else {
									s1 = peg$FAILED;
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseArrayInitializer();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c132(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = [];
									s2 = peg$parseDimExpr();
									if (s2 !== peg$FAILED) {
										while (s2 !== peg$FAILED) {
											s1.push(s2);
											s2 = peg$parseDimExpr();
										}
									} else {
										s1 = peg$FAILED;
									}
									if (s1 !== peg$FAILED) {
										s2 = [];
										s3 = peg$parseDim();
										while (s3 !== peg$FAILED) {
											s2.push(s3);
											s3 = peg$parseDim();
										}
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c133(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parseDim();
										if (s1 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c134(s1);
										}
										s0 = s1;
									}
								}

								return s0;
							}

							function peg$parseArrayInitializer() {
								var s0, s1, s2, s3, s4, s5, s6, s7;

								s0 = peg$currPos;
								s1 = peg$parseLWING();
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									s3 = peg$parseVariableInitializer();
									if (s3 !== peg$FAILED) {
										s4 = [];
										s5 = peg$currPos;
										s6 = peg$parseCOMMA();
										if (s6 !== peg$FAILED) {
											s7 = peg$parseVariableInitializer();
											if (s7 !== peg$FAILED) {
												s6 = [s6, s7];
												s5 = s6;
											} else {
												peg$currPos = s5;
												s5 = peg$FAILED;
											}
										} else {
											peg$currPos = s5;
											s5 = peg$FAILED;
										}
										while (s5 !== peg$FAILED) {
											s4.push(s5);
											s5 = peg$currPos;
											s6 = peg$parseCOMMA();
											if (s6 !== peg$FAILED) {
												s7 = peg$parseVariableInitializer();
												if (s7 !== peg$FAILED) {
													s6 = [s6, s7];
													s5 = s6;
												} else {
													peg$currPos = s5;
													s5 = peg$FAILED;
												}
											} else {
												peg$currPos = s5;
												s5 = peg$FAILED;
											}
										}
										if (s4 !== peg$FAILED) {
											peg$savedPos = s2;
											s3 = peg$c29(s3, s4);
											s2 = s3;
										} else {
											peg$currPos = s2;
											s2 = peg$FAILED;
										}
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseCOMMA();
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseRWING();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c135(s2);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseVariableInitializer() {
								var s0;

								s0 = peg$parseArrayInitializer();
								if (s0 === peg$FAILED) {
									s0 = peg$parseExpression();
								}

								return s0;
							}

							function peg$parseParExpression() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseLPAR();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseExpression();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRPAR();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c136(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseQualifiedIdentifier() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseDOT();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseIdentifier();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseDOT();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseIdentifier();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c137(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDim() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseLBRK();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseRBRK();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDimExpr() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseLBRK();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseExpression();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRBRK();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c138(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseType() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseBasicType();
								if (s1 === peg$FAILED) {
									s1 = peg$parseClassType();
								}
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseDim();
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseDim();
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c139(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseReferenceType() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseBasicType();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseDim();
									if (s3 !== peg$FAILED) {
										while (s3 !== peg$FAILED) {
											s2.push(s3);
											s3 = peg$parseDim();
										}
									} else {
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c140(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseClassType();
									if (s1 !== peg$FAILED) {
										s2 = [];
										s3 = peg$parseDim();
										while (s3 !== peg$FAILED) {
											s2.push(s3);
											s3 = peg$parseDim();
										}
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c141(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parseClassType() {
								var s0, s1, s2, s3, s4, s5, s6, s7;

								s0 = peg$currPos;
								s1 = peg$parseQualifiedIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseTypeArguments();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = [];
										s4 = peg$currPos;
										s5 = peg$parseDOT();
										if (s5 !== peg$FAILED) {
											s6 = peg$parseIdentifier();
											if (s6 !== peg$FAILED) {
												s7 = peg$parseTypeArguments();
												if (s7 === peg$FAILED) {
													s7 = null;
												}
												if (s7 !== peg$FAILED) {
													s5 = [s5, s6, s7];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										} else {
											peg$currPos = s4;
											s4 = peg$FAILED;
										}
										while (s4 !== peg$FAILED) {
											s3.push(s4);
											s4 = peg$currPos;
											s5 = peg$parseDOT();
											if (s5 !== peg$FAILED) {
												s6 = peg$parseIdentifier();
												if (s6 !== peg$FAILED) {
													s7 = peg$parseTypeArguments();
													if (s7 === peg$FAILED) {
														s7 = null;
													}
													if (s7 !== peg$FAILED) {
														s5 = [s5, s6, s7];
														s4 = s5;
													} else {
														peg$currPos = s4;
														s4 = peg$FAILED;
													}
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										}
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c129(s1, s2, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseClassTypeList() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseClassType();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseCOMMA();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseClassType();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseClassType();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c29(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseTypeArguments() {
								var s0, s1, s2, s3, s4, s5, s6;

								s0 = peg$currPos;
								s1 = peg$parseLPOINT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseTypeArgument();
									if (s2 !== peg$FAILED) {
										s3 = [];
										s4 = peg$currPos;
										s5 = peg$parseCOMMA();
										if (s5 !== peg$FAILED) {
											s6 = peg$parseTypeArgument();
											if (s6 !== peg$FAILED) {
												s5 = [s5, s6];
												s4 = s5;
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										} else {
											peg$currPos = s4;
											s4 = peg$FAILED;
										}
										while (s4 !== peg$FAILED) {
											s3.push(s4);
											s4 = peg$currPos;
											s5 = peg$parseCOMMA();
											if (s5 !== peg$FAILED) {
												s6 = peg$parseTypeArgument();
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseRPOINT();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c29(s2, s3);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseTypeArgument() {
								var s0, s1, s2, s3, s4;

								s0 = peg$parseReferenceType();
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseQUERY();
									if (s1 !== peg$FAILED) {
										s2 = peg$currPos;
										s3 = peg$currPos;
										s4 = peg$parseEXTENDS();
										if (s4 !== peg$FAILED) {
											peg$savedPos = s3;
											s4 = peg$c142();
										}
										s3 = s4;
										if (s3 === peg$FAILED) {
											s3 = peg$currPos;
											s4 = peg$parseSUPER();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s3;
												s4 = peg$c143();
											}
											s3 = s4;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseReferenceType();
											if (s4 !== peg$FAILED) {
												s3 = [s3, s4];
												s2 = s3;
											} else {
												peg$currPos = s2;
												s2 = peg$FAILED;
											}
										} else {
											peg$currPos = s2;
											s2 = peg$FAILED;
										}
										if (s2 === peg$FAILED) {
											s2 = null;
										}
										if (s2 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c144(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parseTypeParameters() {
								var s0, s1, s2, s3, s4, s5, s6;

								s0 = peg$currPos;
								s1 = peg$parseLPOINT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseTypeParameter();
									if (s2 !== peg$FAILED) {
										s3 = [];
										s4 = peg$currPos;
										s5 = peg$parseCOMMA();
										if (s5 !== peg$FAILED) {
											s6 = peg$parseTypeParameter();
											if (s6 !== peg$FAILED) {
												s5 = [s5, s6];
												s4 = s5;
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										} else {
											peg$currPos = s4;
											s4 = peg$FAILED;
										}
										while (s4 !== peg$FAILED) {
											s3.push(s4);
											s4 = peg$currPos;
											s5 = peg$parseCOMMA();
											if (s5 !== peg$FAILED) {
												s6 = peg$parseTypeParameter();
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseRPOINT();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c29(s2, s3);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseTypeParameter() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									s3 = peg$parseEXTENDS();
									if (s3 !== peg$FAILED) {
										s4 = peg$parseBound();
										if (s4 !== peg$FAILED) {
											s3 = [s3, s4];
											s2 = s3;
										} else {
											peg$currPos = s2;
											s2 = peg$FAILED;
										}
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c145(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseBound() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseClassType();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseAND();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseClassType();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseAND();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseClassType();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c29(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseModifier() {
								var s0, s1, s2, s3;

								s0 = peg$parseAnnotation();
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									if (input.substr(peg$currPos, 6) === peg$c146) {
										s1 = peg$c146;
										peg$currPos += 6;
									} else {
										s1 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c147);
										}
									}
									if (s1 === peg$FAILED) {
										if (input.substr(peg$currPos, 9) === peg$c148) {
											s1 = peg$c148;
											peg$currPos += 9;
										} else {
											s1 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c149);
											}
										}
										if (s1 === peg$FAILED) {
											if (input.substr(peg$currPos, 7) === peg$c150) {
												s1 = peg$c150;
												peg$currPos += 7;
											} else {
												s1 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c151);
												}
											}
											if (s1 === peg$FAILED) {
												if (input.substr(peg$currPos, 6) === peg$c152) {
													s1 = peg$c152;
													peg$currPos += 6;
												} else {
													s1 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c153);
													}
												}
												if (s1 === peg$FAILED) {
													if (input.substr(peg$currPos, 8) === peg$c154) {
														s1 = peg$c154;
														peg$currPos += 8;
													} else {
														s1 = peg$FAILED;
														if (peg$silentFails === 0) {
															peg$fail(peg$c155);
														}
													}
													if (s1 === peg$FAILED) {
														if (input.substr(peg$currPos, 5) === peg$c156) {
															s1 = peg$c156;
															peg$currPos += 5;
														} else {
															s1 = peg$FAILED;
															if (peg$silentFails === 0) {
																peg$fail(peg$c157);
															}
														}
														if (s1 === peg$FAILED) {
															if (input.substr(peg$currPos, 6) === peg$c158) {
																s1 = peg$c158;
																peg$currPos += 6;
															} else {
																s1 = peg$FAILED;
																if (peg$silentFails === 0) {
																	peg$fail(peg$c159);
																}
															}
															if (s1 === peg$FAILED) {
																if (input.substr(peg$currPos, 12) === peg$c160) {
																	s1 = peg$c160;
																	peg$currPos += 12;
																} else {
																	s1 = peg$FAILED;
																	if (peg$silentFails === 0) {
																		peg$fail(peg$c161);
																	}
																}
																if (s1 === peg$FAILED) {
																	if (input.substr(peg$currPos, 9) === peg$c162) {
																		s1 = peg$c162;
																		peg$currPos += 9;
																	} else {
																		s1 = peg$FAILED;
																		if (peg$silentFails === 0) {
																			peg$fail(peg$c163);
																		}
																	}
																	if (s1 === peg$FAILED) {
																		if (input.substr(peg$currPos, 8) === peg$c164) {
																			s1 = peg$c164;
																			peg$currPos += 8;
																		} else {
																			s1 = peg$FAILED;
																			if (peg$silentFails === 0) {
																				peg$fail(peg$c165);
																			}
																		}
																		if (s1 === peg$FAILED) {
																			if (input.substr(peg$currPos, 8) === peg$c166) {
																				s1 = peg$c166;
																				peg$currPos += 8;
																			} else {
																				s1 = peg$FAILED;
																				if (peg$silentFails === 0) {
																					peg$fail(peg$c167);
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
									if (s1 !== peg$FAILED) {
										s2 = peg$currPos;
										peg$silentFails++;
										s3 = peg$parseLetterOrDigit();
										peg$silentFails--;
										if (s3 === peg$FAILED) {
											s2 = void 0;
										} else {
											peg$currPos = s2;
											s2 = peg$FAILED;
										}
										if (s2 !== peg$FAILED) {
											s3 = peg$parseSpacing();
											if (s3 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c168(s1);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parseAnnotationTypeDeclaration() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseAT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseINTERFACE();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseIdentifier();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseAnnotationTypeBody();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c169(s3, s4);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseAnnotationTypeBody() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseLWING();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseAnnotationTypeElementDeclaration();
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseAnnotationTypeElementDeclaration();
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRWING();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c170(s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseAnnotationTypeElementDeclaration() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = [];
								s2 = peg$parseModifier();
								while (s2 !== peg$FAILED) {
									s1.push(s2);
									s2 = peg$parseModifier();
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseAnnotationTypeElementRest();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c171(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseSEMI();
									if (s1 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c3();
									}
									s0 = s1;
								}

								return s0;
							}

							function peg$parseAnnotationTypeElementRest() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseType();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseAnnotationMethodOrConstantRest();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSEMI();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c172(s1, s2);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$parseClassDeclaration();
									if (s0 === peg$FAILED) {
										s0 = peg$parseEnumDeclaration();
										if (s0 === peg$FAILED) {
											s0 = peg$parseInterfaceDeclaration();
											if (s0 === peg$FAILED) {
												s0 = peg$parseAnnotationTypeDeclaration();
											}
										}
									}
								}

								return s0;
							}

							function peg$parseAnnotationMethodOrConstantRest() {
								var s0;

								s0 = peg$parseAnnotationMethodRest();
								if (s0 === peg$FAILED) {
									s0 = peg$parseAnnotationConstantRest();
								}

								return s0;
							}

							function peg$parseAnnotationMethodRest() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseLPAR();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseRPAR();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseDefaultValue();
											if (s4 === peg$FAILED) {
												s4 = null;
											}
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c173(s1, s4);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseAnnotationConstantRest() {
								var s0, s1;

								s0 = peg$currPos;
								s1 = peg$parseVariableDeclarators();
								if (s1 !== peg$FAILED) {
									peg$savedPos = s0;
									s1 = peg$c174(s1);
								}
								s0 = s1;

								return s0;
							}

							function peg$parseDefaultValue() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseDEFAULT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseElementValue();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c175(s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseAnnotation() {
								var s0;

								s0 = peg$parseNormalAnnotation();
								if (s0 === peg$FAILED) {
									s0 = peg$parseSingleElementAnnotation();
									if (s0 === peg$FAILED) {
										s0 = peg$parseMarkerAnnotation();
									}
								}

								return s0;
							}

							function peg$parseNormalAnnotation() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseAT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseQualifiedIdentifier();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseLPAR();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseElementValuePairs();
											if (s4 === peg$FAILED) {
												s4 = null;
											}
											if (s4 !== peg$FAILED) {
												s5 = peg$parseRPAR();
												if (s5 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c176(s2, s4);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSingleElementAnnotation() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseAT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseQualifiedIdentifier();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseLPAR();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseElementValue();
											if (s4 !== peg$FAILED) {
												s5 = peg$parseRPAR();
												if (s5 !== peg$FAILED) {
													peg$savedPos = s0;
													s1 = peg$c177(s2, s4);
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseMarkerAnnotation() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseAT();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseQualifiedIdentifier();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c178(s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseElementValuePairs() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseElementValuePair();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseCOMMA();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseElementValuePair();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseElementValuePair();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c29(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseElementValuePair() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseIdentifier();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseEQU();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseElementValue();
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c179(s1, s3);
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseElementValue() {
								var s0;

								s0 = peg$parseConditionalExpression();
								if (s0 === peg$FAILED) {
									s0 = peg$parseAnnotation();
									if (s0 === peg$FAILED) {
										s0 = peg$parseElementValueArrayInitializer();
									}
								}

								return s0;
							}

							function peg$parseElementValueArrayInitializer() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseLWING();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseElementValues();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseCOMMA();
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseRWING();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c180(s2);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseElementValues() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseElementValue();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = peg$parseCOMMA();
									if (s4 !== peg$FAILED) {
										s5 = peg$parseElementValue();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = peg$parseCOMMA();
										if (s4 !== peg$FAILED) {
											s5 = peg$parseElementValue();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c29(s1, s2);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSpacing() {
								var s0, s1, s2, s3, s4, s5, s6;

								s0 = [];
								s1 = [];
								if (peg$c181.test(input.charAt(peg$currPos))) {
									s2 = input.charAt(peg$currPos);
									peg$currPos++;
								} else {
									s2 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c182);
									}
								}
								if (s2 !== peg$FAILED) {
									while (s2 !== peg$FAILED) {
										s1.push(s2);
										if (peg$c181.test(input.charAt(peg$currPos))) {
											s2 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s2 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c182);
											}
										}
									}
								} else {
									s1 = peg$FAILED;
								}
								if (s1 === peg$FAILED) {
									s1 = peg$currPos;
									if (input.substr(peg$currPos, 2) === peg$c183) {
										s2 = peg$c183;
										peg$currPos += 2;
									} else {
										s2 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c184);
										}
									}
									if (s2 !== peg$FAILED) {
										s3 = [];
										s4 = peg$currPos;
										s5 = peg$currPos;
										peg$silentFails++;
										if (input.substr(peg$currPos, 2) === peg$c185) {
											s6 = peg$c185;
											peg$currPos += 2;
										} else {
											s6 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c186);
											}
										}
										peg$silentFails--;
										if (s6 === peg$FAILED) {
											s5 = void 0;
										} else {
											peg$currPos = s5;
											s5 = peg$FAILED;
										}
										if (s5 !== peg$FAILED) {
											s6 = peg$parse_();
											if (s6 !== peg$FAILED) {
												s5 = [s5, s6];
												s4 = s5;
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										} else {
											peg$currPos = s4;
											s4 = peg$FAILED;
										}
										while (s4 !== peg$FAILED) {
											s3.push(s4);
											s4 = peg$currPos;
											s5 = peg$currPos;
											peg$silentFails++;
											if (input.substr(peg$currPos, 2) === peg$c185) {
												s6 = peg$c185;
												peg$currPos += 2;
											} else {
												s6 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c186);
												}
											}
											peg$silentFails--;
											if (s6 === peg$FAILED) {
												s5 = void 0;
											} else {
												peg$currPos = s5;
												s5 = peg$FAILED;
											}
											if (s5 !== peg$FAILED) {
												s6 = peg$parse_();
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										}
										if (s3 !== peg$FAILED) {
											if (input.substr(peg$currPos, 2) === peg$c185) {
												s4 = peg$c185;
												peg$currPos += 2;
											} else {
												s4 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c186);
												}
											}
											if (s4 !== peg$FAILED) {
												s2 = [s2, s3, s4];
												s1 = s2;
											} else {
												peg$currPos = s1;
												s1 = peg$FAILED;
											}
										} else {
											peg$currPos = s1;
											s1 = peg$FAILED;
										}
									} else {
										peg$currPos = s1;
										s1 = peg$FAILED;
									}
									if (s1 === peg$FAILED) {
										s1 = peg$currPos;
										if (input.substr(peg$currPos, 2) === peg$c187) {
											s2 = peg$c187;
											peg$currPos += 2;
										} else {
											s2 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c188);
											}
										}
										if (s2 !== peg$FAILED) {
											s3 = [];
											s4 = peg$currPos;
											s5 = peg$currPos;
											peg$silentFails++;
											if (peg$c189.test(input.charAt(peg$currPos))) {
												s6 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s6 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c190);
												}
											}
											peg$silentFails--;
											if (s6 === peg$FAILED) {
												s5 = void 0;
											} else {
												peg$currPos = s5;
												s5 = peg$FAILED;
											}
											if (s5 !== peg$FAILED) {
												s6 = peg$parse_();
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
											while (s4 !== peg$FAILED) {
												s3.push(s4);
												s4 = peg$currPos;
												s5 = peg$currPos;
												peg$silentFails++;
												if (peg$c189.test(input.charAt(peg$currPos))) {
													s6 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s6 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c190);
													}
												}
												peg$silentFails--;
												if (s6 === peg$FAILED) {
													s5 = void 0;
												} else {
													peg$currPos = s5;
													s5 = peg$FAILED;
												}
												if (s5 !== peg$FAILED) {
													s6 = peg$parse_();
													if (s6 !== peg$FAILED) {
														s5 = [s5, s6];
														s4 = s5;
													} else {
														peg$currPos = s4;
														s4 = peg$FAILED;
													}
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											}
											if (s3 !== peg$FAILED) {
												if (peg$c189.test(input.charAt(peg$currPos))) {
													s4 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s4 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c190);
													}
												}
												if (s4 !== peg$FAILED) {
													s2 = [s2, s3, s4];
													s1 = s2;
												} else {
													peg$currPos = s1;
													s1 = peg$FAILED;
												}
											} else {
												peg$currPos = s1;
												s1 = peg$FAILED;
											}
										} else {
											peg$currPos = s1;
											s1 = peg$FAILED;
										}
									}
								}
								while (s1 !== peg$FAILED) {
									s0.push(s1);
									s1 = [];
									if (peg$c181.test(input.charAt(peg$currPos))) {
										s2 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s2 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c182);
										}
									}
									if (s2 !== peg$FAILED) {
										while (s2 !== peg$FAILED) {
											s1.push(s2);
											if (peg$c181.test(input.charAt(peg$currPos))) {
												s2 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s2 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c182);
												}
											}
										}
									} else {
										s1 = peg$FAILED;
									}
									if (s1 === peg$FAILED) {
										s1 = peg$currPos;
										if (input.substr(peg$currPos, 2) === peg$c183) {
											s2 = peg$c183;
											peg$currPos += 2;
										} else {
											s2 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c184);
											}
										}
										if (s2 !== peg$FAILED) {
											s3 = [];
											s4 = peg$currPos;
											s5 = peg$currPos;
											peg$silentFails++;
											if (input.substr(peg$currPos, 2) === peg$c185) {
												s6 = peg$c185;
												peg$currPos += 2;
											} else {
												s6 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c186);
												}
											}
											peg$silentFails--;
											if (s6 === peg$FAILED) {
												s5 = void 0;
											} else {
												peg$currPos = s5;
												s5 = peg$FAILED;
											}
											if (s5 !== peg$FAILED) {
												s6 = peg$parse_();
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
											while (s4 !== peg$FAILED) {
												s3.push(s4);
												s4 = peg$currPos;
												s5 = peg$currPos;
												peg$silentFails++;
												if (input.substr(peg$currPos, 2) === peg$c185) {
													s6 = peg$c185;
													peg$currPos += 2;
												} else {
													s6 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c186);
													}
												}
												peg$silentFails--;
												if (s6 === peg$FAILED) {
													s5 = void 0;
												} else {
													peg$currPos = s5;
													s5 = peg$FAILED;
												}
												if (s5 !== peg$FAILED) {
													s6 = peg$parse_();
													if (s6 !== peg$FAILED) {
														s5 = [s5, s6];
														s4 = s5;
													} else {
														peg$currPos = s4;
														s4 = peg$FAILED;
													}
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											}
											if (s3 !== peg$FAILED) {
												if (input.substr(peg$currPos, 2) === peg$c185) {
													s4 = peg$c185;
													peg$currPos += 2;
												} else {
													s4 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c186);
													}
												}
												if (s4 !== peg$FAILED) {
													s2 = [s2, s3, s4];
													s1 = s2;
												} else {
													peg$currPos = s1;
													s1 = peg$FAILED;
												}
											} else {
												peg$currPos = s1;
												s1 = peg$FAILED;
											}
										} else {
											peg$currPos = s1;
											s1 = peg$FAILED;
										}
										if (s1 === peg$FAILED) {
											s1 = peg$currPos;
											if (input.substr(peg$currPos, 2) === peg$c187) {
												s2 = peg$c187;
												peg$currPos += 2;
											} else {
												s2 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c188);
												}
											}
											if (s2 !== peg$FAILED) {
												s3 = [];
												s4 = peg$currPos;
												s5 = peg$currPos;
												peg$silentFails++;
												if (peg$c189.test(input.charAt(peg$currPos))) {
													s6 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s6 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c190);
													}
												}
												peg$silentFails--;
												if (s6 === peg$FAILED) {
													s5 = void 0;
												} else {
													peg$currPos = s5;
													s5 = peg$FAILED;
												}
												if (s5 !== peg$FAILED) {
													s6 = peg$parse_();
													if (s6 !== peg$FAILED) {
														s5 = [s5, s6];
														s4 = s5;
													} else {
														peg$currPos = s4;
														s4 = peg$FAILED;
													}
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
												while (s4 !== peg$FAILED) {
													s3.push(s4);
													s4 = peg$currPos;
													s5 = peg$currPos;
													peg$silentFails++;
													if (peg$c189.test(input.charAt(peg$currPos))) {
														s6 = input.charAt(peg$currPos);
														peg$currPos++;
													} else {
														s6 = peg$FAILED;
														if (peg$silentFails === 0) {
															peg$fail(peg$c190);
														}
													}
													peg$silentFails--;
													if (s6 === peg$FAILED) {
														s5 = void 0;
													} else {
														peg$currPos = s5;
														s5 = peg$FAILED;
													}
													if (s5 !== peg$FAILED) {
														s6 = peg$parse_();
														if (s6 !== peg$FAILED) {
															s5 = [s5, s6];
															s4 = s5;
														} else {
															peg$currPos = s4;
															s4 = peg$FAILED;
														}
													} else {
														peg$currPos = s4;
														s4 = peg$FAILED;
													}
												}
												if (s3 !== peg$FAILED) {
													if (peg$c189.test(input.charAt(peg$currPos))) {
														s4 = input.charAt(peg$currPos);
														peg$currPos++;
													} else {
														s4 = peg$FAILED;
														if (peg$silentFails === 0) {
															peg$fail(peg$c190);
														}
													}
													if (s4 !== peg$FAILED) {
														s2 = [s2, s3, s4];
														s1 = s2;
													} else {
														peg$currPos = s1;
														s1 = peg$FAILED;
													}
												} else {
													peg$currPos = s1;
													s1 = peg$FAILED;
												}
											} else {
												peg$currPos = s1;
												s1 = peg$FAILED;
											}
										}
									}
								}

								return s0;
							}

							function peg$parseIdentifier() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$currPos;
								peg$silentFails++;
								s2 = peg$parseKeyword();
								peg$silentFails--;
								if (s2 === peg$FAILED) {
									s1 = void 0;
								} else {
									peg$currPos = s1;
									s1 = peg$FAILED;
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseLetter();
									if (s2 !== peg$FAILED) {
										s3 = peg$currPos;
										s4 = [];
										s5 = peg$parseLetterOrDigit();
										while (s5 !== peg$FAILED) {
											s4.push(s5);
											s5 = peg$parseLetterOrDigit();
										}
										if (s4 !== peg$FAILED) {
											s3 = input.substring(s3, peg$currPos);
										} else {
											s3 = s4;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseSpacing();
											if (s4 !== peg$FAILED) {
												peg$savedPos = s0;
												s1 = peg$c191(s2, s3);
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLetter() {
								var s0;

								if (peg$c192.test(input.charAt(peg$currPos))) {
									s0 = input.charAt(peg$currPos);
									peg$currPos++;
								} else {
									s0 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c193);
									}
								}
								if (s0 === peg$FAILED) {
									if (peg$c194.test(input.charAt(peg$currPos))) {
										s0 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s0 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c195);
										}
									}
									if (s0 === peg$FAILED) {
										if (peg$c196.test(input.charAt(peg$currPos))) {
											s0 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s0 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c197);
											}
										}
									}
								}

								return s0;
							}

							function peg$parseLetterOrDigit() {
								var s0;

								if (peg$c192.test(input.charAt(peg$currPos))) {
									s0 = input.charAt(peg$currPos);
									peg$currPos++;
								} else {
									s0 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c193);
									}
								}
								if (s0 === peg$FAILED) {
									if (peg$c194.test(input.charAt(peg$currPos))) {
										s0 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s0 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c195);
										}
									}
									if (s0 === peg$FAILED) {
										if (peg$c198.test(input.charAt(peg$currPos))) {
											s0 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s0 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c199);
											}
										}
										if (s0 === peg$FAILED) {
											if (peg$c196.test(input.charAt(peg$currPos))) {
												s0 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s0 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c197);
												}
											}
										}
									}
								}

								return s0;
							}

							function peg$parseKeyword() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 8) === peg$c154) {
									s1 = peg$c154;
									peg$currPos += 8;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c155);
									}
								}
								if (s1 === peg$FAILED) {
									if (input.substr(peg$currPos, 6) === peg$c200) {
										s1 = peg$c200;
										peg$currPos += 6;
									} else {
										s1 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c201);
										}
									}
									if (s1 === peg$FAILED) {
										if (input.substr(peg$currPos, 7) === peg$c123) {
											s1 = peg$c123;
											peg$currPos += 7;
										} else {
											s1 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c124);
											}
										}
										if (s1 === peg$FAILED) {
											if (input.substr(peg$currPos, 5) === peg$c202) {
												s1 = peg$c202;
												peg$currPos += 5;
											} else {
												s1 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c203);
												}
											}
											if (s1 === peg$FAILED) {
												if (input.substr(peg$currPos, 4) === peg$c109) {
													s1 = peg$c109;
													peg$currPos += 4;
												} else {
													s1 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c110);
													}
												}
												if (s1 === peg$FAILED) {
													if (input.substr(peg$currPos, 4) === peg$c204) {
														s1 = peg$c204;
														peg$currPos += 4;
													} else {
														s1 = peg$FAILED;
														if (peg$silentFails === 0) {
															peg$fail(peg$c205);
														}
													}
													if (s1 === peg$FAILED) {
														if (input.substr(peg$currPos, 5) === peg$c206) {
															s1 = peg$c206;
															peg$currPos += 5;
														} else {
															s1 = peg$FAILED;
															if (peg$silentFails === 0) {
																peg$fail(peg$c207);
															}
														}
														if (s1 === peg$FAILED) {
															if (input.substr(peg$currPos, 4) === peg$c113) {
																s1 = peg$c113;
																peg$currPos += 4;
															} else {
																s1 = peg$FAILED;
																if (peg$silentFails === 0) {
																	peg$fail(peg$c114);
																}
															}
															if (s1 === peg$FAILED) {
																if (input.substr(peg$currPos, 5) === peg$c208) {
																	s1 = peg$c208;
																	peg$currPos += 5;
																} else {
																	s1 = peg$FAILED;
																	if (peg$silentFails === 0) {
																		peg$fail(peg$c209);
																	}
																}
																if (s1 === peg$FAILED) {
																	if (input.substr(peg$currPos, 5) === peg$c210) {
																		s1 = peg$c210;
																		peg$currPos += 5;
																	} else {
																		s1 = peg$FAILED;
																		if (peg$silentFails === 0) {
																			peg$fail(peg$c211);
																		}
																	}
																	if (s1 === peg$FAILED) {
																		if (input.substr(peg$currPos, 8) === peg$c212) {
																			s1 = peg$c212;
																			peg$currPos += 8;
																		} else {
																			s1 = peg$FAILED;
																			if (peg$silentFails === 0) {
																				peg$fail(peg$c213);
																			}
																		}
																		if (s1 === peg$FAILED) {
																			if (input.substr(peg$currPos, 7) === peg$c214) {
																				s1 = peg$c214;
																				peg$currPos += 7;
																			} else {
																				s1 = peg$FAILED;
																				if (peg$silentFails === 0) {
																					peg$fail(peg$c215);
																				}
																			}
																			if (s1 === peg$FAILED) {
																				if (input.substr(peg$currPos, 6) === peg$c121) {
																					s1 = peg$c121;
																					peg$currPos += 6;
																				} else {
																					s1 = peg$FAILED;
																					if (peg$silentFails === 0) {
																						peg$fail(peg$c122);
																					}
																				}
																				if (s1 === peg$FAILED) {
																					if (input.substr(peg$currPos, 2) === peg$c216) {
																						s1 = peg$c216;
																						peg$currPos += 2;
																					} else {
																						s1 = peg$FAILED;
																						if (peg$silentFails === 0) {
																							peg$fail(peg$c217);
																						}
																					}
																					if (s1 === peg$FAILED) {
																						if (input.substr(peg$currPos, 4) === peg$c218) {
																							s1 = peg$c218;
																							peg$currPos += 4;
																						} else {
																							s1 = peg$FAILED;
																							if (peg$silentFails === 0) {
																								peg$fail(peg$c219);
																							}
																						}
																						if (s1 === peg$FAILED) {
																							if (input.substr(peg$currPos, 4) === peg$c220) {
																								s1 = peg$c220;
																								peg$currPos += 4;
																							} else {
																								s1 = peg$FAILED;
																								if (peg$silentFails === 0) {
																									peg$fail(peg$c221);
																								}
																							}
																							if (s1 === peg$FAILED) {
																								if (input.substr(peg$currPos, 7) === peg$c222) {
																									s1 = peg$c222;
																									peg$currPos += 7;
																								} else {
																									s1 = peg$FAILED;
																									if (peg$silentFails === 0) {
																										peg$fail(peg$c223);
																									}
																								}
																								if (s1 === peg$FAILED) {
																									if (input.substr(peg$currPos, 5) === peg$c224) {
																										s1 = peg$c224;
																										peg$currPos += 5;
																									} else {
																										s1 = peg$FAILED;
																										if (peg$silentFails === 0) {
																											peg$fail(peg$c225);
																										}
																									}
																									if (s1 === peg$FAILED) {
																										if (input.substr(peg$currPos, 7) === peg$c226) {
																											s1 = peg$c226;
																											peg$currPos += 7;
																										} else {
																											s1 = peg$FAILED;
																											if (peg$silentFails === 0) {
																												peg$fail(peg$c227);
																											}
																										}
																										if (s1 === peg$FAILED) {
																											if (input.substr(peg$currPos, 5) === peg$c156) {
																												s1 = peg$c156;
																												peg$currPos += 5;
																											} else {
																												s1 = peg$FAILED;
																												if (peg$silentFails === 0) {
																													peg$fail(peg$c157);
																												}
																											}
																											if (s1 === peg$FAILED) {
																												if (input.substr(peg$currPos, 5) === peg$c119) {
																													s1 = peg$c119;
																													peg$currPos += 5;
																												} else {
																													s1 = peg$FAILED;
																													if (peg$silentFails === 0) {
																														peg$fail(peg$c120);
																													}
																												}
																												if (s1 === peg$FAILED) {
																													if (input.substr(peg$currPos, 3) === peg$c228) {
																														s1 = peg$c228;
																														peg$currPos += 3;
																													} else {
																														s1 = peg$FAILED;
																														if (peg$silentFails === 0) {
																															peg$fail(peg$c229);
																														}
																													}
																													if (s1 === peg$FAILED) {
																														if (input.substr(peg$currPos, 4) === peg$c230) {
																															s1 = peg$c230;
																															peg$currPos += 4;
																														} else {
																															s1 = peg$FAILED;
																															if (peg$silentFails === 0) {
																																peg$fail(peg$c231);
																															}
																														}
																														if (s1 === peg$FAILED) {
																															if (input.substr(peg$currPos, 2) === peg$c232) {
																																s1 = peg$c232;
																																peg$currPos += 2;
																															} else {
																																s1 = peg$FAILED;
																																if (peg$silentFails === 0) {
																																	peg$fail(peg$c233);
																																}
																															}
																															if (s1 === peg$FAILED) {
																																if (input.substr(peg$currPos, 10) === peg$c234) {
																																	s1 = peg$c234;
																																	peg$currPos += 10;
																																} else {
																																	s1 = peg$FAILED;
																																	if (peg$silentFails === 0) {
																																		peg$fail(peg$c235);
																																	}
																																}
																																if (s1 === peg$FAILED) {
																																	if (input.substr(peg$currPos, 6) === peg$c236) {
																																		s1 = peg$c236;
																																		peg$currPos += 6;
																																	} else {
																																		s1 = peg$FAILED;
																																		if (peg$silentFails === 0) {
																																			peg$fail(peg$c237);
																																		}
																																	}
																																	if (s1 === peg$FAILED) {
																																		if (input.substr(peg$currPos, 9) === peg$c238) {
																																			s1 = peg$c238;
																																			peg$currPos += 9;
																																		} else {
																																			s1 = peg$FAILED;
																																			if (peg$silentFails === 0) {
																																				peg$fail(peg$c239);
																																			}
																																		}
																																		if (s1 === peg$FAILED) {
																																			if (input.substr(peg$currPos, 3) === peg$c115) {
																																				s1 = peg$c115;
																																				peg$currPos += 3;
																																			} else {
																																				s1 = peg$FAILED;
																																				if (peg$silentFails === 0) {
																																					peg$fail(peg$c116);
																																				}
																																			}
																																			if (s1 === peg$FAILED) {
																																				if (
																																					input.substr(peg$currPos, 10) === peg$c240
																																				) {
																																					s1 = peg$c240;
																																					peg$currPos += 10;
																																				} else {
																																					s1 = peg$FAILED;
																																					if (peg$silentFails === 0) {
																																						peg$fail(peg$c241);
																																					}
																																				}
																																				if (s1 === peg$FAILED) {
																																					if (
																																						input.substr(peg$currPos, 4) === peg$c117
																																					) {
																																						s1 = peg$c117;
																																						peg$currPos += 4;
																																					} else {
																																						s1 = peg$FAILED;
																																						if (peg$silentFails === 0) {
																																							peg$fail(peg$c118);
																																						}
																																					}
																																					if (s1 === peg$FAILED) {
																																						if (
																																							input.substr(peg$currPos, 6) === peg$c158
																																						) {
																																							s1 = peg$c158;
																																							peg$currPos += 6;
																																						} else {
																																							s1 = peg$FAILED;
																																							if (peg$silentFails === 0) {
																																								peg$fail(peg$c159);
																																							}
																																						}
																																						if (s1 === peg$FAILED) {
																																							if (
																																								input.substr(peg$currPos, 3) ===
																																								peg$c242
																																							) {
																																								s1 = peg$c242;
																																								peg$currPos += 3;
																																							} else {
																																								s1 = peg$FAILED;
																																								if (peg$silentFails === 0) {
																																									peg$fail(peg$c243);
																																								}
																																							}
																																							if (s1 === peg$FAILED) {
																																								if (
																																									input.substr(peg$currPos, 4) ===
																																									peg$c244
																																								) {
																																									s1 = peg$c244;
																																									peg$currPos += 4;
																																								} else {
																																									s1 = peg$FAILED;
																																									if (peg$silentFails === 0) {
																																										peg$fail(peg$c245);
																																									}
																																								}
																																								if (s1 === peg$FAILED) {
																																									if (
																																										input.substr(peg$currPos, 7) ===
																																										peg$c246
																																									) {
																																										s1 = peg$c246;
																																										peg$currPos += 7;
																																									} else {
																																										s1 = peg$FAILED;
																																										if (peg$silentFails === 0) {
																																											peg$fail(peg$c247);
																																										}
																																									}
																																									if (s1 === peg$FAILED) {
																																										if (
																																											input.substr(peg$currPos, 7) ===
																																											peg$c150
																																										) {
																																											s1 = peg$c150;
																																											peg$currPos += 7;
																																										} else {
																																											s1 = peg$FAILED;
																																											if (peg$silentFails === 0) {
																																												peg$fail(peg$c151);
																																											}
																																										}
																																										if (s1 === peg$FAILED) {
																																											if (
																																												input.substr(peg$currPos, 9) ===
																																												peg$c148
																																											) {
																																												s1 = peg$c148;
																																												peg$currPos += 9;
																																											} else {
																																												s1 = peg$FAILED;
																																												if (peg$silentFails === 0) {
																																													peg$fail(peg$c149);
																																												}
																																											}
																																											if (s1 === peg$FAILED) {
																																												if (
																																													input.substr(
																																														peg$currPos,
																																														6
																																													) === peg$c146
																																												) {
																																													s1 = peg$c146;
																																													peg$currPos += 6;
																																												} else {
																																													s1 = peg$FAILED;
																																													if (peg$silentFails === 0) {
																																														peg$fail(peg$c147);
																																													}
																																												}
																																												if (s1 === peg$FAILED) {
																																													if (
																																														input.substr(
																																															peg$currPos,
																																															6
																																														) === peg$c248
																																													) {
																																														s1 = peg$c248;
																																														peg$currPos += 6;
																																													} else {
																																														s1 = peg$FAILED;
																																														if (peg$silentFails === 0) {
																																															peg$fail(peg$c249);
																																														}
																																													}
																																													if (s1 === peg$FAILED) {
																																														if (
																																															input.substr(
																																																peg$currPos,
																																																5
																																															) === peg$c111
																																														) {
																																															s1 = peg$c111;
																																															peg$currPos += 5;
																																														} else {
																																															s1 = peg$FAILED;
																																															if (
																																																peg$silentFails === 0
																																															) {
																																																peg$fail(peg$c112);
																																															}
																																														}
																																														if (s1 === peg$FAILED) {
																																															if (
																																																input.substr(
																																																	peg$currPos,
																																																	6
																																																) === peg$c152
																																															) {
																																																s1 = peg$c152;
																																																peg$currPos += 6;
																																															} else {
																																																s1 = peg$FAILED;
																																																if (
																																																	peg$silentFails === 0
																																																) {
																																																	peg$fail(peg$c153);
																																																}
																																															}
																																															if (s1 === peg$FAILED) {
																																																if (
																																																	input.substr(
																																																		peg$currPos,
																																																		8
																																																	) === peg$c166
																																																) {
																																																	s1 = peg$c166;
																																																	peg$currPos += 8;
																																																} else {
																																																	s1 = peg$FAILED;
																																																	if (
																																																		peg$silentFails ===
																																																		0
																																																	) {
																																																		peg$fail(peg$c167);
																																																	}
																																																}
																																																if (s1 === peg$FAILED) {
																																																	if (
																																																		input.substr(
																																																			peg$currPos,
																																																			5
																																																		) === peg$c250
																																																	) {
																																																		s1 = peg$c250;
																																																		peg$currPos += 5;
																																																	} else {
																																																		s1 = peg$FAILED;
																																																		if (
																																																			peg$silentFails ===
																																																			0
																																																		) {
																																																			peg$fail(
																																																				peg$c251
																																																			);
																																																		}
																																																	}
																																																	if (
																																																		s1 === peg$FAILED
																																																	) {
																																																		if (
																																																			input.substr(
																																																				peg$currPos,
																																																				6
																																																			) === peg$c252
																																																		) {
																																																			s1 = peg$c252;
																																																			peg$currPos += 6;
																																																		} else {
																																																			s1 = peg$FAILED;
																																																			if (
																																																				peg$silentFails ===
																																																				0
																																																			) {
																																																				peg$fail(
																																																					peg$c253
																																																				);
																																																			}
																																																		}
																																																		if (
																																																			s1 === peg$FAILED
																																																		) {
																																																			if (
																																																				input.substr(
																																																					peg$currPos,
																																																					12
																																																				) === peg$c160
																																																			) {
																																																				s1 = peg$c160;
																																																				peg$currPos += 12;
																																																			} else {
																																																				s1 = peg$FAILED;
																																																				if (
																																																					peg$silentFails ===
																																																					0
																																																				) {
																																																					peg$fail(
																																																						peg$c161
																																																					);
																																																				}
																																																			}
																																																			if (
																																																				s1 ===
																																																				peg$FAILED
																																																			) {
																																																				if (
																																																					input.substr(
																																																						peg$currPos,
																																																						4
																																																					) === peg$c254
																																																				) {
																																																					s1 = peg$c254;
																																																					peg$currPos += 4;
																																																				} else {
																																																					s1 =
																																																						peg$FAILED;
																																																					if (
																																																						peg$silentFails ===
																																																						0
																																																					) {
																																																						peg$fail(
																																																							peg$c255
																																																						);
																																																					}
																																																				}
																																																				if (
																																																					s1 ===
																																																					peg$FAILED
																																																				) {
																																																					if (
																																																						input.substr(
																																																							peg$currPos,
																																																							6
																																																						) ===
																																																						peg$c256
																																																					) {
																																																						s1 =
																																																							peg$c256;
																																																						peg$currPos += 6;
																																																					} else {
																																																						s1 =
																																																							peg$FAILED;
																																																						if (
																																																							peg$silentFails ===
																																																							0
																																																						) {
																																																							peg$fail(
																																																								peg$c257
																																																							);
																																																						}
																																																					}
																																																					if (
																																																						s1 ===
																																																						peg$FAILED
																																																					) {
																																																						if (
																																																							input.substr(
																																																								peg$currPos,
																																																								5
																																																							) ===
																																																							peg$c258
																																																						) {
																																																							s1 =
																																																								peg$c258;
																																																							peg$currPos += 5;
																																																						} else {
																																																							s1 =
																																																								peg$FAILED;
																																																							if (
																																																								peg$silentFails ===
																																																								0
																																																							) {
																																																								peg$fail(
																																																									peg$c259
																																																								);
																																																							}
																																																						}
																																																						if (
																																																							s1 ===
																																																							peg$FAILED
																																																						) {
																																																							if (
																																																								input.substr(
																																																									peg$currPos,
																																																									9
																																																								) ===
																																																								peg$c162
																																																							) {
																																																								s1 =
																																																									peg$c162;
																																																								peg$currPos += 9;
																																																							} else {
																																																								s1 =
																																																									peg$FAILED;
																																																								if (
																																																									peg$silentFails ===
																																																									0
																																																								) {
																																																									peg$fail(
																																																										peg$c163
																																																									);
																																																								}
																																																							}
																																																							if (
																																																								s1 ===
																																																								peg$FAILED
																																																							) {
																																																								if (
																																																									input.substr(
																																																										peg$currPos,
																																																										4
																																																									) ===
																																																									peg$c260
																																																								) {
																																																									s1 =
																																																										peg$c260;
																																																									peg$currPos += 4;
																																																								} else {
																																																									s1 =
																																																										peg$FAILED;
																																																									if (
																																																										peg$silentFails ===
																																																										0
																																																									) {
																																																										peg$fail(
																																																											peg$c261
																																																										);
																																																									}
																																																								}
																																																								if (
																																																									s1 ===
																																																									peg$FAILED
																																																								) {
																																																									if (
																																																										input.substr(
																																																											peg$currPos,
																																																											3
																																																										) ===
																																																										peg$c262
																																																									) {
																																																										s1 =
																																																											peg$c262;
																																																										peg$currPos += 3;
																																																									} else {
																																																										s1 =
																																																											peg$FAILED;
																																																										if (
																																																											peg$silentFails ===
																																																											0
																																																										) {
																																																											peg$fail(
																																																												peg$c263
																																																											);
																																																										}
																																																									}
																																																									if (
																																																										s1 ===
																																																										peg$FAILED
																																																									) {
																																																										if (
																																																											input.substr(
																																																												peg$currPos,
																																																												4
																																																											) ===
																																																											peg$c264
																																																										) {
																																																											s1 =
																																																												peg$c264;
																																																											peg$currPos += 4;
																																																										} else {
																																																											s1 =
																																																												peg$FAILED;
																																																											if (
																																																												peg$silentFails ===
																																																												0
																																																											) {
																																																												peg$fail(
																																																													peg$c265
																																																												);
																																																											}
																																																										}
																																																										if (
																																																											s1 ===
																																																											peg$FAILED
																																																										) {
																																																											if (
																																																												input.substr(
																																																													peg$currPos,
																																																													8
																																																												) ===
																																																												peg$c164
																																																											) {
																																																												s1 =
																																																													peg$c164;
																																																												peg$currPos += 8;
																																																											} else {
																																																												s1 =
																																																													peg$FAILED;
																																																												if (
																																																													peg$silentFails ===
																																																													0
																																																												) {
																																																													peg$fail(
																																																														peg$c165
																																																													);
																																																												}
																																																											}
																																																											if (
																																																												s1 ===
																																																												peg$FAILED
																																																											) {
																																																												if (
																																																													input.substr(
																																																														peg$currPos,
																																																														5
																																																													) ===
																																																													peg$c266
																																																												) {
																																																													s1 =
																																																														peg$c266;
																																																													peg$currPos += 5;
																																																												} else {
																																																													s1 =
																																																														peg$FAILED;
																																																													if (
																																																														peg$silentFails ===
																																																														0
																																																													) {
																																																														peg$fail(
																																																															peg$c267
																																																														);
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseASSERT() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 6) === peg$c200) {
									s1 = peg$c200;
									peg$currPos += 6;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c201);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseBREAK() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 5) === peg$c202) {
									s1 = peg$c202;
									peg$currPos += 5;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c203);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseCASE() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 4) === peg$c204) {
									s1 = peg$c204;
									peg$currPos += 4;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c205);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseCATCH() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 5) === peg$c206) {
									s1 = peg$c206;
									peg$currPos += 5;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c207);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseCLASS() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 5) === peg$c208) {
									s1 = peg$c208;
									peg$currPos += 5;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c209);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseCONTINUE() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 8) === peg$c212) {
									s1 = peg$c212;
									peg$currPos += 8;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c213);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDEFAULT() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 7) === peg$c214) {
									s1 = peg$c214;
									peg$currPos += 7;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c215);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDO() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c216) {
									s1 = peg$c216;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c217);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseELSE() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 4) === peg$c218) {
									s1 = peg$c218;
									peg$currPos += 4;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c219);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseENUM() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 4) === peg$c220) {
									s1 = peg$c220;
									peg$currPos += 4;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c221);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEXTENDS() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 7) === peg$c222) {
									s1 = peg$c222;
									peg$currPos += 7;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c223);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseFINALLY() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 7) === peg$c226) {
									s1 = peg$c226;
									peg$currPos += 7;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c227);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseFINAL() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 5) === peg$c156) {
									s1 = peg$c156;
									peg$currPos += 5;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c157);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseFOR() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 3) === peg$c228) {
									s1 = peg$c228;
									peg$currPos += 3;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c229);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseIF() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c232) {
									s1 = peg$c232;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c233);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseIMPLEMENTS() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 10) === peg$c234) {
									s1 = peg$c234;
									peg$currPos += 10;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c235);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseIMPORT() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 6) === peg$c236) {
									s1 = peg$c236;
									peg$currPos += 6;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c237);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseINTERFACE() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 9) === peg$c238) {
									s1 = peg$c238;
									peg$currPos += 9;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c239);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseINSTANCEOF() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 10) === peg$c240) {
									s1 = peg$c240;
									peg$currPos += 10;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c241);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseNEW() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 3) === peg$c242) {
									s1 = peg$c242;
									peg$currPos += 3;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c243);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parsePACKAGE() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 7) === peg$c246) {
									s1 = peg$c246;
									peg$currPos += 7;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c247);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseRETURN() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 6) === peg$c248) {
									s1 = peg$c248;
									peg$currPos += 6;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c249);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSTATIC() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 6) === peg$c152) {
									s1 = peg$c152;
									peg$currPos += 6;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c153);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSUPER() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 5) === peg$c250) {
									s1 = peg$c250;
									peg$currPos += 5;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c251);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSWITCH() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 6) === peg$c252) {
									s1 = peg$c252;
									peg$currPos += 6;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c253);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSYNCHRONIZED() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 12) === peg$c160) {
									s1 = peg$c160;
									peg$currPos += 12;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c161);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseTHIS() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 4) === peg$c254) {
									s1 = peg$c254;
									peg$currPos += 4;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c255);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseTHROWS() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 6) === peg$c256) {
									s1 = peg$c256;
									peg$currPos += 6;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c257);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseTHROW() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 5) === peg$c258) {
									s1 = peg$c258;
									peg$currPos += 5;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c259);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseTRY() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 3) === peg$c262) {
									s1 = peg$c262;
									peg$currPos += 3;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c263);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseVOID() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 4) === peg$c264) {
									s1 = peg$c264;
									peg$currPos += 4;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c265);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseWHILE() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 5) === peg$c266) {
									s1 = peg$c266;
									peg$currPos += 5;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c267);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									s3 = peg$parseLetterOrDigit();
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLiteral() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								s1 = peg$parseFloatLiteral();
								if (s1 === peg$FAILED) {
									s1 = peg$parseIntegerLiteral();
									if (s1 === peg$FAILED) {
										s1 = peg$parseCharLiteral();
										if (s1 === peg$FAILED) {
											s1 = peg$parseStringLiteral();
											if (s1 === peg$FAILED) {
												s1 = peg$currPos;
												if (input.substr(peg$currPos, 4) === peg$c260) {
													s2 = peg$c260;
													peg$currPos += 4;
												} else {
													s2 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c261);
													}
												}
												if (s2 !== peg$FAILED) {
													s3 = peg$currPos;
													peg$silentFails++;
													s4 = peg$parseLetterOrDigit();
													peg$silentFails--;
													if (s4 === peg$FAILED) {
														s3 = void 0;
													} else {
														peg$currPos = s3;
														s3 = peg$FAILED;
													}
													if (s3 !== peg$FAILED) {
														peg$savedPos = s1;
														s2 = peg$c268();
														s1 = s2;
													} else {
														peg$currPos = s1;
														s1 = peg$FAILED;
													}
												} else {
													peg$currPos = s1;
													s1 = peg$FAILED;
												}
												if (s1 === peg$FAILED) {
													s1 = peg$currPos;
													if (input.substr(peg$currPos, 5) === peg$c224) {
														s2 = peg$c224;
														peg$currPos += 5;
													} else {
														s2 = peg$FAILED;
														if (peg$silentFails === 0) {
															peg$fail(peg$c225);
														}
													}
													if (s2 !== peg$FAILED) {
														s3 = peg$currPos;
														peg$silentFails++;
														s4 = peg$parseLetterOrDigit();
														peg$silentFails--;
														if (s4 === peg$FAILED) {
															s3 = void 0;
														} else {
															peg$currPos = s3;
															s3 = peg$FAILED;
														}
														if (s3 !== peg$FAILED) {
															peg$savedPos = s1;
															s2 = peg$c269();
															s1 = s2;
														} else {
															peg$currPos = s1;
															s1 = peg$FAILED;
														}
													} else {
														peg$currPos = s1;
														s1 = peg$FAILED;
													}
													if (s1 === peg$FAILED) {
														s1 = peg$currPos;
														if (input.substr(peg$currPos, 4) === peg$c244) {
															s2 = peg$c244;
															peg$currPos += 4;
														} else {
															s2 = peg$FAILED;
															if (peg$silentFails === 0) {
																peg$fail(peg$c245);
															}
														}
														if (s2 !== peg$FAILED) {
															s3 = peg$currPos;
															peg$silentFails++;
															s4 = peg$parseLetterOrDigit();
															peg$silentFails--;
															if (s4 === peg$FAILED) {
																s3 = void 0;
															} else {
																peg$currPos = s3;
																s3 = peg$FAILED;
															}
															if (s3 !== peg$FAILED) {
																peg$savedPos = s1;
																s2 = peg$c270();
																s1 = s2;
															} else {
																peg$currPos = s1;
																s1 = peg$FAILED;
															}
														} else {
															peg$currPos = s1;
															s1 = peg$FAILED;
														}
													}
												}
											}
										}
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c271(s1);
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseIntegerLiteral() {
								var s0, s1, s2;

								s0 = peg$currPos;
								s1 = peg$parseHexNumeral();
								if (s1 === peg$FAILED) {
									s1 = peg$parseBinaryNumeral();
									if (s1 === peg$FAILED) {
										s1 = peg$parseOctalNumeral();
										if (s1 === peg$FAILED) {
											s1 = peg$parseDecimalNumeral();
										}
									}
								}
								if (s1 !== peg$FAILED) {
									if (peg$c272.test(input.charAt(peg$currPos))) {
										s2 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s2 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c273);
										}
									}
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										peg$savedPos = s0;
										s1 = peg$c274();
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDecimalNumeral() {
								var s0, s1, s2, s3, s4, s5;

								if (input.charCodeAt(peg$currPos) === 48) {
									s0 = peg$c275;
									peg$currPos++;
								} else {
									s0 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c276);
									}
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									if (peg$c277.test(input.charAt(peg$currPos))) {
										s1 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s1 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c278);
										}
									}
									if (s1 !== peg$FAILED) {
										s2 = [];
										s3 = peg$currPos;
										s4 = [];
										if (peg$c279.test(input.charAt(peg$currPos))) {
											s5 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s5 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c280);
											}
										}
										while (s5 !== peg$FAILED) {
											s4.push(s5);
											if (peg$c279.test(input.charAt(peg$currPos))) {
												s5 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s5 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c280);
												}
											}
										}
										if (s4 !== peg$FAILED) {
											if (peg$c198.test(input.charAt(peg$currPos))) {
												s5 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s5 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c199);
												}
											}
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
										while (s3 !== peg$FAILED) {
											s2.push(s3);
											s3 = peg$currPos;
											s4 = [];
											if (peg$c279.test(input.charAt(peg$currPos))) {
												s5 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s5 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c280);
												}
											}
											while (s5 !== peg$FAILED) {
												s4.push(s5);
												if (peg$c279.test(input.charAt(peg$currPos))) {
													s5 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s5 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c280);
													}
												}
											}
											if (s4 !== peg$FAILED) {
												if (peg$c198.test(input.charAt(peg$currPos))) {
													s5 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s5 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c199);
													}
												}
												if (s5 !== peg$FAILED) {
													s4 = [s4, s5];
													s3 = s4;
												} else {
													peg$currPos = s3;
													s3 = peg$FAILED;
												}
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										}
										if (s2 !== peg$FAILED) {
											s1 = [s1, s2];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parseHexNumeral() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c281) {
									s1 = peg$c281;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c282);
									}
								}
								if (s1 === peg$FAILED) {
									if (input.substr(peg$currPos, 2) === peg$c283) {
										s1 = peg$c283;
										peg$currPos += 2;
									} else {
										s1 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c284);
										}
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseHexDigits();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseBinaryNumeral() {
								var s0, s1, s2, s3, s4, s5, s6;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c285) {
									s1 = peg$c285;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c286);
									}
								}
								if (s1 === peg$FAILED) {
									if (input.substr(peg$currPos, 2) === peg$c287) {
										s1 = peg$c287;
										peg$currPos += 2;
									} else {
										s1 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c288);
										}
									}
								}
								if (s1 !== peg$FAILED) {
									if (peg$c289.test(input.charAt(peg$currPos))) {
										s2 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s2 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c290);
										}
									}
									if (s2 !== peg$FAILED) {
										s3 = [];
										s4 = peg$currPos;
										s5 = [];
										if (peg$c279.test(input.charAt(peg$currPos))) {
											s6 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s6 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c280);
											}
										}
										while (s6 !== peg$FAILED) {
											s5.push(s6);
											if (peg$c279.test(input.charAt(peg$currPos))) {
												s6 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s6 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c280);
												}
											}
										}
										if (s5 !== peg$FAILED) {
											if (peg$c289.test(input.charAt(peg$currPos))) {
												s6 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s6 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c290);
												}
											}
											if (s6 !== peg$FAILED) {
												s5 = [s5, s6];
												s4 = s5;
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										} else {
											peg$currPos = s4;
											s4 = peg$FAILED;
										}
										while (s4 !== peg$FAILED) {
											s3.push(s4);
											s4 = peg$currPos;
											s5 = [];
											if (peg$c279.test(input.charAt(peg$currPos))) {
												s6 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s6 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c280);
												}
											}
											while (s6 !== peg$FAILED) {
												s5.push(s6);
												if (peg$c279.test(input.charAt(peg$currPos))) {
													s6 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s6 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c280);
													}
												}
											}
											if (s5 !== peg$FAILED) {
												if (peg$c289.test(input.charAt(peg$currPos))) {
													s6 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s6 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c290);
													}
												}
												if (s6 !== peg$FAILED) {
													s5 = [s5, s6];
													s4 = s5;
												} else {
													peg$currPos = s4;
													s4 = peg$FAILED;
												}
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
										}
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseOctalNumeral() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 48) {
									s1 = peg$c275;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c276);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = [];
									if (peg$c279.test(input.charAt(peg$currPos))) {
										s5 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s5 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c280);
										}
									}
									while (s5 !== peg$FAILED) {
										s4.push(s5);
										if (peg$c279.test(input.charAt(peg$currPos))) {
											s5 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s5 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c280);
											}
										}
									}
									if (s4 !== peg$FAILED) {
										if (peg$c291.test(input.charAt(peg$currPos))) {
											s5 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s5 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c292);
											}
										}
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									if (s3 !== peg$FAILED) {
										while (s3 !== peg$FAILED) {
											s2.push(s3);
											s3 = peg$currPos;
											s4 = [];
											if (peg$c279.test(input.charAt(peg$currPos))) {
												s5 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s5 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c280);
												}
											}
											while (s5 !== peg$FAILED) {
												s4.push(s5);
												if (peg$c279.test(input.charAt(peg$currPos))) {
													s5 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s5 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c280);
													}
												}
											}
											if (s4 !== peg$FAILED) {
												if (peg$c291.test(input.charAt(peg$currPos))) {
													s5 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s5 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c292);
													}
												}
												if (s5 !== peg$FAILED) {
													s4 = [s4, s5];
													s3 = s4;
												} else {
													peg$currPos = s3;
													s3 = peg$FAILED;
												}
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										}
									} else {
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseFloatLiteral() {
								var s0, s1;

								s0 = peg$currPos;
								s1 = peg$parseHexFloat();
								if (s1 === peg$FAILED) {
									s1 = peg$parseDecimalFloat();
								}
								if (s1 !== peg$FAILED) {
									peg$savedPos = s0;
									s1 = peg$c274();
								}
								s0 = s1;

								return s0;
							}

							function peg$parseDecimalFloat() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseDigits();
								if (s1 !== peg$FAILED) {
									if (input.charCodeAt(peg$currPos) === 46) {
										s2 = peg$c293;
										peg$currPos++;
									} else {
										s2 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c294);
										}
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseDigits();
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseExponent();
											if (s4 === peg$FAILED) {
												s4 = null;
											}
											if (s4 !== peg$FAILED) {
												if (peg$c295.test(input.charAt(peg$currPos))) {
													s5 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s5 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c296);
													}
												}
												if (s5 === peg$FAILED) {
													s5 = null;
												}
												if (s5 !== peg$FAILED) {
													s1 = [s1, s2, s3, s4, s5];
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									if (input.charCodeAt(peg$currPos) === 46) {
										s1 = peg$c293;
										peg$currPos++;
									} else {
										s1 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c294);
										}
									}
									if (s1 !== peg$FAILED) {
										s2 = peg$parseDigits();
										if (s2 !== peg$FAILED) {
											s3 = peg$parseExponent();
											if (s3 === peg$FAILED) {
												s3 = null;
											}
											if (s3 !== peg$FAILED) {
												if (peg$c295.test(input.charAt(peg$currPos))) {
													s4 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s4 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c296);
													}
												}
												if (s4 === peg$FAILED) {
													s4 = null;
												}
												if (s4 !== peg$FAILED) {
													s1 = [s1, s2, s3, s4];
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										s0 = peg$currPos;
										s1 = peg$parseDigits();
										if (s1 !== peg$FAILED) {
											s2 = peg$parseExponent();
											if (s2 !== peg$FAILED) {
												if (peg$c295.test(input.charAt(peg$currPos))) {
													s3 = input.charAt(peg$currPos);
													peg$currPos++;
												} else {
													s3 = peg$FAILED;
													if (peg$silentFails === 0) {
														peg$fail(peg$c296);
													}
												}
												if (s3 === peg$FAILED) {
													s3 = null;
												}
												if (s3 !== peg$FAILED) {
													s1 = [s1, s2, s3];
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
										if (s0 === peg$FAILED) {
											s0 = peg$currPos;
											s1 = peg$parseDigits();
											if (s1 !== peg$FAILED) {
												s2 = peg$parseExponent();
												if (s2 === peg$FAILED) {
													s2 = null;
												}
												if (s2 !== peg$FAILED) {
													if (peg$c295.test(input.charAt(peg$currPos))) {
														s3 = input.charAt(peg$currPos);
														peg$currPos++;
													} else {
														s3 = peg$FAILED;
														if (peg$silentFails === 0) {
															peg$fail(peg$c296);
														}
													}
													if (s3 !== peg$FAILED) {
														s1 = [s1, s2, s3];
														s0 = s1;
													} else {
														peg$currPos = s0;
														s0 = peg$FAILED;
													}
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										}
									}
								}

								return s0;
							}

							function peg$parseExponent() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (peg$c297.test(input.charAt(peg$currPos))) {
									s1 = input.charAt(peg$currPos);
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c298);
									}
								}
								if (s1 !== peg$FAILED) {
									if (peg$c299.test(input.charAt(peg$currPos))) {
										s2 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s2 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c300);
										}
									}
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseDigits();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseHexFloat() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								s1 = peg$parseHexSignificand();
								if (s1 !== peg$FAILED) {
									s2 = peg$parseBinaryExponent();
									if (s2 !== peg$FAILED) {
										if (peg$c295.test(input.charAt(peg$currPos))) {
											s3 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s3 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c296);
											}
										}
										if (s3 === peg$FAILED) {
											s3 = null;
										}
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseHexSignificand() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c281) {
									s1 = peg$c281;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c282);
									}
								}
								if (s1 === peg$FAILED) {
									if (input.substr(peg$currPos, 2) === peg$c283) {
										s1 = peg$c283;
										peg$currPos += 2;
									} else {
										s1 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c284);
										}
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseHexDigits();
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										if (input.charCodeAt(peg$currPos) === 46) {
											s3 = peg$c293;
											peg$currPos++;
										} else {
											s3 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c294);
											}
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parseHexDigits();
											if (s4 !== peg$FAILED) {
												s1 = [s1, s2, s3, s4];
												s0 = s1;
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									s1 = peg$parseHexNumeral();
									if (s1 !== peg$FAILED) {
										if (input.charCodeAt(peg$currPos) === 46) {
											s2 = peg$c293;
											peg$currPos++;
										} else {
											s2 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c294);
											}
										}
										if (s2 === peg$FAILED) {
											s2 = null;
										}
										if (s2 !== peg$FAILED) {
											s1 = [s1, s2];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								}

								return s0;
							}

							function peg$parseBinaryExponent() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (peg$c301.test(input.charAt(peg$currPos))) {
									s1 = input.charAt(peg$currPos);
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c302);
									}
								}
								if (s1 !== peg$FAILED) {
									if (peg$c299.test(input.charAt(peg$currPos))) {
										s2 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s2 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c300);
										}
									}
									if (s2 === peg$FAILED) {
										s2 = null;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseDigits();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDigits() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								if (peg$c198.test(input.charAt(peg$currPos))) {
									s1 = input.charAt(peg$currPos);
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c199);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = [];
									if (peg$c279.test(input.charAt(peg$currPos))) {
										s5 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s5 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c280);
										}
									}
									while (s5 !== peg$FAILED) {
										s4.push(s5);
										if (peg$c279.test(input.charAt(peg$currPos))) {
											s5 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s5 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c280);
											}
										}
									}
									if (s4 !== peg$FAILED) {
										if (peg$c198.test(input.charAt(peg$currPos))) {
											s5 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s5 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c199);
											}
										}
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = [];
										if (peg$c279.test(input.charAt(peg$currPos))) {
											s5 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s5 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c280);
											}
										}
										while (s5 !== peg$FAILED) {
											s4.push(s5);
											if (peg$c279.test(input.charAt(peg$currPos))) {
												s5 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s5 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c280);
												}
											}
										}
										if (s4 !== peg$FAILED) {
											if (peg$c198.test(input.charAt(peg$currPos))) {
												s5 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s5 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c199);
												}
											}
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseHexDigits() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = peg$parseHexDigit();
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$currPos;
									s4 = [];
									if (peg$c279.test(input.charAt(peg$currPos))) {
										s5 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s5 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c280);
										}
									}
									while (s5 !== peg$FAILED) {
										s4.push(s5);
										if (peg$c279.test(input.charAt(peg$currPos))) {
											s5 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s5 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c280);
											}
										}
									}
									if (s4 !== peg$FAILED) {
										s5 = peg$parseHexDigit();
										if (s5 !== peg$FAILED) {
											s4 = [s4, s5];
											s3 = s4;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									} else {
										peg$currPos = s3;
										s3 = peg$FAILED;
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$currPos;
										s4 = [];
										if (peg$c279.test(input.charAt(peg$currPos))) {
											s5 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s5 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c280);
											}
										}
										while (s5 !== peg$FAILED) {
											s4.push(s5);
											if (peg$c279.test(input.charAt(peg$currPos))) {
												s5 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s5 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c280);
												}
											}
										}
										if (s4 !== peg$FAILED) {
											s5 = peg$parseHexDigit();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseHexDigit() {
								var s0;

								if (peg$c303.test(input.charAt(peg$currPos))) {
									s0 = input.charAt(peg$currPos);
									peg$currPos++;
								} else {
									s0 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c304);
									}
								}
								if (s0 === peg$FAILED) {
									if (peg$c305.test(input.charAt(peg$currPos))) {
										s0 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s0 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c306);
										}
									}
									if (s0 === peg$FAILED) {
										if (peg$c198.test(input.charAt(peg$currPos))) {
											s0 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s0 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c199);
											}
										}
									}
								}

								return s0;
							}

							function peg$parseCharLiteral() {
								var s0, s1, s2, s3, s4;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 39) {
									s1 = peg$c307;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c308);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseEscape();
									if (s2 === peg$FAILED) {
										s2 = peg$currPos;
										s3 = peg$currPos;
										peg$silentFails++;
										if (peg$c309.test(input.charAt(peg$currPos))) {
											s4 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s4 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c310);
											}
										}
										peg$silentFails--;
										if (s4 === peg$FAILED) {
											s3 = void 0;
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
										if (s3 !== peg$FAILED) {
											s4 = peg$parse_();
											if (s4 !== peg$FAILED) {
												s3 = [s3, s4];
												s2 = s3;
											} else {
												peg$currPos = s2;
												s2 = peg$FAILED;
											}
										} else {
											peg$currPos = s2;
											s2 = peg$FAILED;
										}
									}
									if (s2 !== peg$FAILED) {
										if (input.charCodeAt(peg$currPos) === 39) {
											s3 = peg$c307;
											peg$currPos++;
										} else {
											s3 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c308);
											}
										}
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c311();
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseStringLiteral() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 34) {
									s1 = peg$c312;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c313);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = [];
									s3 = peg$parseEscape();
									if (s3 === peg$FAILED) {
										s3 = peg$currPos;
										s4 = peg$currPos;
										peg$silentFails++;
										if (peg$c314.test(input.charAt(peg$currPos))) {
											s5 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s5 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c315);
											}
										}
										peg$silentFails--;
										if (s5 === peg$FAILED) {
											s4 = void 0;
										} else {
											peg$currPos = s4;
											s4 = peg$FAILED;
										}
										if (s4 !== peg$FAILED) {
											s5 = peg$parse_();
											if (s5 !== peg$FAILED) {
												s4 = [s4, s5];
												s3 = s4;
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										} else {
											peg$currPos = s3;
											s3 = peg$FAILED;
										}
									}
									while (s3 !== peg$FAILED) {
										s2.push(s3);
										s3 = peg$parseEscape();
										if (s3 === peg$FAILED) {
											s3 = peg$currPos;
											s4 = peg$currPos;
											peg$silentFails++;
											if (peg$c314.test(input.charAt(peg$currPos))) {
												s5 = input.charAt(peg$currPos);
												peg$currPos++;
											} else {
												s5 = peg$FAILED;
												if (peg$silentFails === 0) {
													peg$fail(peg$c315);
												}
											}
											peg$silentFails--;
											if (s5 === peg$FAILED) {
												s4 = void 0;
											} else {
												peg$currPos = s4;
												s4 = peg$FAILED;
											}
											if (s4 !== peg$FAILED) {
												s5 = peg$parse_();
												if (s5 !== peg$FAILED) {
													s4 = [s4, s5];
													s3 = s4;
												} else {
													peg$currPos = s3;
													s3 = peg$FAILED;
												}
											} else {
												peg$currPos = s3;
												s3 = peg$FAILED;
											}
										}
									}
									if (s2 !== peg$FAILED) {
										if (input.charCodeAt(peg$currPos) === 34) {
											s3 = peg$c312;
											peg$currPos++;
										} else {
											s3 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c313);
											}
										}
										if (s3 !== peg$FAILED) {
											peg$savedPos = s0;
											s1 = peg$c316();
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEscape() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 92) {
									s1 = peg$c317;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c318);
									}
								}
								if (s1 !== peg$FAILED) {
									if (peg$c319.test(input.charAt(peg$currPos))) {
										s2 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s2 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c320);
										}
									}
									if (s2 === peg$FAILED) {
										s2 = peg$parseOctalEscape();
										if (s2 === peg$FAILED) {
											s2 = peg$parseUnicodeEscape();
										}
									}
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseOctalEscape() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (peg$c321.test(input.charAt(peg$currPos))) {
									s1 = input.charAt(peg$currPos);
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c322);
									}
								}
								if (s1 !== peg$FAILED) {
									if (peg$c291.test(input.charAt(peg$currPos))) {
										s2 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s2 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c292);
										}
									}
									if (s2 !== peg$FAILED) {
										if (peg$c291.test(input.charAt(peg$currPos))) {
											s3 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s3 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c292);
											}
										}
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}
								if (s0 === peg$FAILED) {
									s0 = peg$currPos;
									if (peg$c291.test(input.charAt(peg$currPos))) {
										s1 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s1 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c292);
										}
									}
									if (s1 !== peg$FAILED) {
										if (peg$c291.test(input.charAt(peg$currPos))) {
											s2 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s2 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c292);
											}
										}
										if (s2 !== peg$FAILED) {
											s1 = [s1, s2];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
									if (s0 === peg$FAILED) {
										if (peg$c291.test(input.charAt(peg$currPos))) {
											s0 = input.charAt(peg$currPos);
											peg$currPos++;
										} else {
											s0 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c292);
											}
										}
									}
								}

								return s0;
							}

							function peg$parseUnicodeEscape() {
								var s0, s1, s2, s3, s4, s5;

								s0 = peg$currPos;
								s1 = [];
								if (input.charCodeAt(peg$currPos) === 117) {
									s2 = peg$c323;
									peg$currPos++;
								} else {
									s2 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c324);
									}
								}
								if (s2 !== peg$FAILED) {
									while (s2 !== peg$FAILED) {
										s1.push(s2);
										if (input.charCodeAt(peg$currPos) === 117) {
											s2 = peg$c323;
											peg$currPos++;
										} else {
											s2 = peg$FAILED;
											if (peg$silentFails === 0) {
												peg$fail(peg$c324);
											}
										}
									}
								} else {
									s1 = peg$FAILED;
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseHexDigit();
									if (s2 !== peg$FAILED) {
										s3 = peg$parseHexDigit();
										if (s3 !== peg$FAILED) {
											s4 = peg$parseHexDigit();
											if (s4 !== peg$FAILED) {
												s5 = peg$parseHexDigit();
												if (s5 !== peg$FAILED) {
													s1 = [s1, s2, s3, s4, s5];
													s0 = s1;
												} else {
													peg$currPos = s0;
													s0 = peg$FAILED;
												}
											} else {
												peg$currPos = s0;
												s0 = peg$FAILED;
											}
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseAT() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 64) {
									s1 = peg$c325;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c326);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseAND() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 38) {
									s1 = peg$c327;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c328);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (peg$c329.test(input.charAt(peg$currPos))) {
										s3 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c330);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseANDAND() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c331) {
									s1 = peg$c331;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c332);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseANDEQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c333) {
									s1 = peg$c333;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c334);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseBANG() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 33) {
									s1 = peg$c335;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c336);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (input.charCodeAt(peg$currPos) === 61) {
										s3 = peg$c337;
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c338);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseBSR() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 3) === peg$c339) {
									s1 = peg$c339;
									peg$currPos += 3;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c340);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (input.charCodeAt(peg$currPos) === 61) {
										s3 = peg$c337;
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c338);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseBSREQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 4) === peg$c341) {
									s1 = peg$c341;
									peg$currPos += 4;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c342);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseCOLON() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 58) {
									s1 = peg$c343;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c344);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseCOMMA() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 44) {
									s1 = peg$c345;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c346);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDEC() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c347) {
									s1 = peg$c347;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c348);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDIV() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 47) {
									s1 = peg$c349;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c350);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (input.charCodeAt(peg$currPos) === 61) {
										s3 = peg$c337;
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c338);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDIVEQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c351) {
									s1 = peg$c351;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c352);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseDOT() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 46) {
									s1 = peg$c293;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c294);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseELLIPSIS() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 3) === peg$c353) {
									s1 = peg$c353;
									peg$currPos += 3;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c354);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEQU() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 61) {
									s1 = peg$c337;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c338);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (input.charCodeAt(peg$currPos) === 61) {
										s3 = peg$c337;
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c338);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEQUAL() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c355) {
									s1 = peg$c355;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c356);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseGE() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c357) {
									s1 = peg$c357;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c358);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseGT() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 62) {
									s1 = peg$c359;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c360);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (peg$c361.test(input.charAt(peg$currPos))) {
										s3 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c362);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseHAT() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 94) {
									s1 = peg$c363;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c364);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (input.charCodeAt(peg$currPos) === 61) {
										s3 = peg$c337;
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c338);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseHATEQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c365) {
									s1 = peg$c365;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c366);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseINC() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c367) {
									s1 = peg$c367;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c368);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLBRK() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 91) {
									s1 = peg$c369;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c370);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLE() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c371) {
									s1 = peg$c371;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c372);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLPAR() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 40) {
									s1 = peg$c373;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c374);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLPOINT() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 60) {
									s1 = peg$c375;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c376);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLT() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 60) {
									s1 = peg$c375;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c376);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (peg$c377.test(input.charAt(peg$currPos))) {
										s3 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c378);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseLWING() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 123) {
									s1 = peg$c379;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c380);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseMINUS() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 45) {
									s1 = peg$c381;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c382);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (peg$c383.test(input.charAt(peg$currPos))) {
										s3 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c384);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseMINUSEQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c385) {
									s1 = peg$c385;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c386);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseMOD() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 37) {
									s1 = peg$c387;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c388);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (input.charCodeAt(peg$currPos) === 61) {
										s3 = peg$c337;
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c338);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseMODEQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c389) {
									s1 = peg$c389;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c390);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseNOTEQUAL() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c391) {
									s1 = peg$c391;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c392);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseOR() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 124) {
									s1 = peg$c393;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c394);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (peg$c395.test(input.charAt(peg$currPos))) {
										s3 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c396);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseOREQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c397) {
									s1 = peg$c397;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c398);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseOROR() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c399) {
									s1 = peg$c399;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c400);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parsePLUS() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 43) {
									s1 = peg$c401;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c402);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (peg$c403.test(input.charAt(peg$currPos))) {
										s3 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c404);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parsePLUSEQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c405) {
									s1 = peg$c405;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c406);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseQUERY() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 63) {
									s1 = peg$c407;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c408);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseRBRK() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 93) {
									s1 = peg$c409;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c410);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseRPAR() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 41) {
									s1 = peg$c411;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c412);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseRPOINT() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 62) {
									s1 = peg$c359;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c360);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseRWING() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 125) {
									s1 = peg$c413;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c414);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSEMI() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 59) {
									s1 = peg$c415;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c416);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSL() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c417) {
									s1 = peg$c417;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c418);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (input.charCodeAt(peg$currPos) === 61) {
										s3 = peg$c337;
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c338);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSLEQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 3) === peg$c419) {
									s1 = peg$c419;
									peg$currPos += 3;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c420);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSR() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c421) {
									s1 = peg$c421;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c422);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (peg$c361.test(input.charAt(peg$currPos))) {
										s3 = input.charAt(peg$currPos);
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c362);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSREQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 3) === peg$c423) {
									s1 = peg$c423;
									peg$currPos += 3;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c424);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSTAR() {
								var s0, s1, s2, s3;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 42) {
									s1 = peg$c425;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c426);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$currPos;
									peg$silentFails++;
									if (input.charCodeAt(peg$currPos) === 61) {
										s3 = peg$c337;
										peg$currPos++;
									} else {
										s3 = peg$FAILED;
										if (peg$silentFails === 0) {
											peg$fail(peg$c338);
										}
									}
									peg$silentFails--;
									if (s3 === peg$FAILED) {
										s2 = void 0;
									} else {
										peg$currPos = s2;
										s2 = peg$FAILED;
									}
									if (s2 !== peg$FAILED) {
										s3 = peg$parseSpacing();
										if (s3 !== peg$FAILED) {
											s1 = [s1, s2, s3];
											s0 = s1;
										} else {
											peg$currPos = s0;
											s0 = peg$FAILED;
										}
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseSTAREQU() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.substr(peg$currPos, 2) === peg$c427) {
									s1 = peg$c427;
									peg$currPos += 2;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c428);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseTILDA() {
								var s0, s1, s2;

								s0 = peg$currPos;
								if (input.charCodeAt(peg$currPos) === 126) {
									s1 = peg$c429;
									peg$currPos++;
								} else {
									s1 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c430);
									}
								}
								if (s1 !== peg$FAILED) {
									s2 = peg$parseSpacing();
									if (s2 !== peg$FAILED) {
										s1 = [s1, s2];
										s0 = s1;
									} else {
										peg$currPos = s0;
										s0 = peg$FAILED;
									}
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parseEOT() {
								var s0, s1;

								s0 = peg$currPos;
								peg$silentFails++;
								s1 = peg$parse_();
								peg$silentFails--;
								if (s1 === peg$FAILED) {
									s0 = void 0;
								} else {
									peg$currPos = s0;
									s0 = peg$FAILED;
								}

								return s0;
							}

							function peg$parse_() {
								var s0;

								if (input.length > peg$currPos) {
									s0 = input.charAt(peg$currPos);
									peg$currPos++;
								} else {
									s0 = peg$FAILED;
									if (peg$silentFails === 0) {
										peg$fail(peg$c431);
									}
								}

								return s0;
							}

							function extractOptional(optional, index, def) {
								def = typeof def !== 'undefined' ? def : null;
								return optional ? optional[index] : def;
							}

							function extractList(list, index) {
								var result = new Array(list.length),
									i;

								for (i = 0; i < list.length; i++) {
									result[i] = list[i][index];
								}

								return result;
							}

							function buildList(first, rest, index) {
								return [first].concat(extractList(rest, index));
							}

							function buildTree(first, rest, builder) {
								var result = first,
									i;

								for (i = 0; i < rest.length; i++) {
									result = builder(result, rest[i]);
								}

								return result;
							}

							function buildInfixExpr(first, rest) {
								return buildTree(first, rest, function (result, element) {
									return {
										node: 'InfixExpression',
										operator: element[0][0], // remove ending Spacing
										leftOperand: result,
										rightOperand: element[1]
									};
								});
							}

							function buildQualified(first, rest, index) {
								return buildTree(first, rest, function (result, element) {
									return {
										node: 'QualifiedName',
										qualifier: result,
										name: element[index]
									};
								});
							}

							function popQualified(tree) {
								return tree.node === 'QualifiedName'
									? { name: tree.name, expression: tree.qualifier }
									: { name: tree, expression: null };
							}

							function extractThrowsClassType(list) {
								return list.map(function (node) {
									return node.name;
								});
							}

							function extractExpressions(list) {
								return list.map(function (node) {
									return node.expression;
								});
							}

							function buildArrayTree(first, rest) {
								return buildTree(first, rest, function (result, element) {
									return {
										node: 'ArrayType',
										componentType: result
									};
								});
							}

							function optionalList(value) {
								return value !== null ? value : [];
							}

							function extractOptionalList(list, index) {
								return optionalList(extractOptional(list, index));
							}

							function skipNulls(list) {
								return list.filter(function (v) {
									return v !== null;
								});
							}

							function makePrimitive(code) {
								return {
									node: 'PrimitiveType',
									primitiveTypeCode: code
								};
							}

							function makeModifier(keyword) {
								return {
									node: 'Modifier',
									keyword: keyword
								};
							}

							function makeCatchFinally(catchClauses, finallyBlock) {
								return {
									catchClauses: catchClauses,
									finally: finallyBlock
								};
							}

							function buildTypeName(qual, args, rest) {
								var first =
									args === null
										? {
												node: 'SimpleType',
												name: qual
										  }
										: {
												node: 'ParameterizedType',
												type: {
													node: 'SimpleType',
													name: qual
												},
												typeArguments: args
										  };

								return buildTree(first, rest, function (result, element) {
									var args = element[2];
									return args === null
										? {
												node: 'QualifiedType',
												name: element[1],
												qualifier: result
										  }
										: {
												node: 'ParameterizedType',
												type: {
													node: 'QualifiedType',
													name: element[1],
													qualifier: result
												},
												typeArguments: args
										  };
								});
							}

							function mergeProps(obj, props) {
								var key;
								for (key in props) {
									if (props.hasOwnProperty(key)) {
										if (obj.hasOwnProperty(key)) {
											throw new Error(
												'Property ' +
													key +
													' exists ' +
													line() +
													'\n' +
													text() +
													'\nCurrent value: ' +
													JSON.stringify(obj[key], null, 2) +
													'\nNew value: ' +
													JSON.stringify(props[key], null, 2)
											);
										} else {
											obj[key] = props[key];
										}
									}
								}
								return obj;
							}

							function buildSelectorTree(arg, sel, sels) {
								function getMergeVal(o, v) {
									switch (o.node) {
										case 'SuperFieldAccess':
										case 'SuperMethodInvocation':
											return { qualifier: v };
										case 'ArrayAccess':
											return { array: v };
										default:
											return { expression: v };
									}
								}
								return buildTree(mergeProps(sel, getMergeVal(sel, arg)), sels, function (result, element) {
									return mergeProps(element, getMergeVal(element, result));
								});
							}

							function TODO() {
								throw new Error('TODO: not impl line ' + line() + '\n' + text());
							}

							peg$result = peg$startRuleFunction();

							if (peg$result !== peg$FAILED && peg$currPos === input.length) {
								return peg$result;
							} else {
								if (peg$result !== peg$FAILED && peg$currPos < input.length) {
									peg$fail(peg$endExpectation());
								}

								throw peg$buildStructuredError(
									peg$maxFailExpected,
									peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
									peg$maxFailPos < input.length
										? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
										: peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
								);
							}
						}

						return {
							SyntaxError: peg$SyntaxError,
							parse: peg$parse
						};
					})();

					var p5_options = {
						globalScope: 'p5',
						globalVars: {
							// Map methods
							pushMatrix: 'push',
							popMatrix: 'pop',
							size: 'createCanvas',
							println: 'print',
							PVector: 'Vector',

							// Fix literal methods
							int$: 'int',
							float$: 'float',
							byte$: 'byte',
							char$: 'char',
							boolean$: 'boolean',

							// Methods
							alpha: true,
							blue: true,
							brightness: true,
							color: true,
							green: true,
							hue: true,
							lerpColor: true,
							lightness: true,
							red: true,
							saturation: true,
							background: true,
							clear: true,
							colorMode: true,
							fill: true,
							noFill: true,
							noStroke: true,
							stroke: true,
							arc: true,
							ellipse: true,
							line: true,
							point: true,
							quad: true,
							rect: true,
							triangle: true,
							ellipseMode: true,
							noSmooth: true,
							rectMode: true,
							smooth: true,
							strokeCap: true,
							strokeJoin: true,
							strokeWeight: true,
							bezier: true,
							bezierDetail: true,
							bezierPoint: true,
							bezierTangent: true,
							curve: true,
							curveDetail: true,
							curveTightness: true,
							curvePoint: true,
							curveTangent: true,
							beginContour: true,
							beginShape: true,
							bezierVertex: true,
							curveVertex: true,
							endContour: true,
							endShape: true,
							quadraticVertex: true,
							vertex: true,
							loadModel: true,
							model: true,
							plane: true,
							box: true,
							sphere: true,
							cylinder: true,
							cone: true,
							ellipsoid: true,
							torus: true,
							preload: true,
							setup: true,
							draw: true,
							remove: true,
							noLoop: true,
							loop: true,
							redraw: true,
							print: true,
							cursor: true,
							frameRate: true,
							noCursor: true,
							windowResized: true,
							fullscreen: true,
							pixelDensity: true,
							displayDensity: true,
							getURL: true,
							getURLPath: true,
							getURLParams: true,
							resizeCanvas: true,
							noCanvas: true,
							createGraphics: true,
							blendMode: true,
							setAttributes: true,
							applyMatrix: true,
							resetMatrix: true,
							rotate: true,
							rotateX: true,
							rotateY: true,
							rotateZ: true,
							scale: true,
							shearX: true,
							shearY: true,
							translate: true,
							createStringDict: true,
							createNumberDict: true,
							append: true,
							arrayCopy: true,
							concat: true,
							reverse: true,
							shorten: true,
							shuffle: true,
							sort: true,
							splice: true,
							subset: true,
							float: true,
							int: true,
							str: true,
							boolean: true,
							byte: true,
							char: true,
							unchar: true,
							hex: true,
							unhex: true,
							join: true,
							match: true,
							matchAll: true,
							nf: true,
							nfc: true,
							nfp: true,
							nfs: true,
							split: true,
							splitTokens: true,
							trim: true,
							setMoveThreshold: true,
							setShakeThreshold: true,
							deviceMoved: true,
							deviceTurned: true,
							deviceShaken: true,
							keyPressed: true,
							keyReleased: true,
							keyTyped: true,
							keyIsDown: true,
							mouseMoved: true,
							mouseDragged: true,
							mousePressed: true,
							mouseReleased: true,
							mouseClicked: true,
							doubleClicked: true,
							mouseWheel: true,
							touchStarted: true,
							touchMoved: true,
							touchEnded: true,
							createImage: true,
							saveCanvas: true,
							saveFrames: true,
							loadImage: true,
							image: true,
							tint: true,
							noTint: true,
							imageMode: true,
							blend: true,
							copy: true,
							filter: true,
							get: true,
							loadPixels: true,
							set: true,
							updatePixels: true,
							loadJSON: true,
							loadStrings: true,
							loadTable: true,
							loadXML: true,
							loadBytes: true,
							httpGet: true,
							httpPost: true,
							httpDo: true,
							createWriter: true,
							save: true,
							saveJSON: true,
							saveStrings: true,
							saveTable: true,
							day: true,
							hour: true,
							minute: true,
							millis: true,
							month: true,
							second: true,
							year: true,
							createVector: true,
							abs: true,
							ceil: true,
							constrain: true,
							dist: true,
							exp: true,
							floor: true,
							lerp: true,
							log: true,
							mag: true,
							map: true,
							max: true,
							min: true,
							norm: true,
							pow: true,
							round: true,
							sq: true,
							sqrt: true,
							noise: true,
							noiseDetail: true,
							noiseSeed: true,
							randomSeed: true,
							random: true,
							randomGaussian: true,
							acos: true,
							asin: true,
							atan: true,
							atan2: true,
							cos: true,
							sin: true,
							tan: true,
							degrees: true,
							radians: true,
							angleMode: true,
							textAlign: true,
							textLeading: true,
							textSize: true,
							textStyle: true,
							textWidth: true,
							textAscent: true,
							textDescent: true,
							loadFont: true,
							text: true,
							textFont: true,
							camera: true,
							perspective: true,
							ortho: true,
							orbitControl: true,
							ambientLight: true,
							directionalLight: true,
							pointLight: true,
							loadShader: true,
							createShader: true,
							shader: true,
							normalMaterial: true,
							texture: true,
							ambientMaterial: true,
							specularMaterial: true,

							// Classes
							Graphics: true,
							Vector3: true,

							// Constants
							P2D: true,
							WEBGL: true,
							ARROW: true,
							CROSS: true,
							HAND: true,
							MOVE: true,
							TEXT: true,
							WAIT: true,
							HALF_PI: true,
							PI: true,
							QUARTER_PI: true,
							TAU: true,
							TWO_PI: true,
							DEGREES: true,
							RADIANS: true,
							DEG_TO_RAD: true,
							RAD_TO_DEG: true,
							CORNER: true,
							CORNERS: true,
							RADIUS: true,
							RIGHT: true,
							LEFT: true,
							CENTER: true,
							TOP: true,
							BOTTOM: true,
							BASELINE: true,
							POINTS: true,
							LINES: true,
							LINE_STRIP: true,
							LINE_LOOP: true,
							TRIANGLES: true,
							TRIANGLE_FAN: true,
							TRIANGLE_STRIP: true,
							QUADS: true,
							QUAD_STRIP: true,
							CLOSE: true,
							OPEN: true,
							CHORD: true,
							PIE: true,
							PROJECT: true,
							SQUARE: true,
							ROUND: true,
							BEVEL: true,
							MITER: true,
							RGB: true,
							HSB: true,
							HSL: true,
							AUTO: true,
							ALT: true,
							BACKSPACE: true,
							CONTROL: true,
							DELETE: true,
							DOWN_ARROW: true,
							ENTER: true,
							ESCAPE: true,
							LEFT_ARROW: true,
							OPTION: true,
							RETURN: true,
							RIGHT_ARROW: true,
							SHIFT: true,
							TAB: true,
							UP_ARROW: true,
							BLEND: true,
							ADD: true,
							DARKEST: true,
							LIGHTEST: true,
							DIFFERENCE: true,
							EXCLUSION: true,
							MULTIPLY: true,
							SCREEN: true,
							REPLACE: true,
							OVERLAY: true,
							HARD_LIGHT: true,
							SOFT_LIGHT: true,
							DODGE: true,
							BURN: true,
							THRESHOLD: true,
							GRAY: true,
							OPAQUE: true,
							INVERT: true,
							POSTERIZE: true,
							DILATE: true,
							ERODE: true,
							BLUR: true,
							NORMAL: true,
							ITALIC: true,
							BOLD: true,
							LINEAR: true,
							QUADRATIC: true,
							BEZIER: true,
							CURVE: true,
							STROKE: true,
							FILL: true,
							TEXTURE: true,
							IMMEDIATE: true,
							NEAREST: true,
							REPEAT: true,
							CLAMP: true,
							MIRROR: true,
							LANDSCAPE: true,
							PORTRAIT: true,
							GRID: true,
							AXES: true,

							// Variables
							frameCount: true,
							focused: true,
							Color: true,
							displayWidth: true,
							displayHeight: true,
							windowWidth: true,
							windowHeight: true,
							width: true,
							height: true,
							deviceOrientation: true,
							accelerationX: true,
							accelerationY: true,
							accelerationZ: true,
							pAccelerationX: true,
							pAccelerationY: true,
							pAccelerationZ: true,
							rotationX: true,
							rotationY: true,
							rotationZ: true,
							pRotationX: true,
							pRotationY: true,
							pRotationZ: true,
							turnAxis: true,
							keyIsPressed: true,
							key: true,
							keyCode: true,
							mouseX: true,
							mouseY: true,
							pmouseX: true,
							pmouseY: true,
							winMouseX: true,
							winMouseY: true,
							pwinMouseX: true,
							pwinMouseY: true,
							mouseButton: true,
							mouseIsPressed: true,
							touches: true,
							pixels: true
						}
					};

					/**
					 * @module java-to-javascript
					 */

					// const beautify = require('js-beautify').js;
					const beautify$2 = beautify.js_beautify;

					const DEFAULT_OPTIONS = {
						globalVars: {},
						globalScope: null,
						separator: '\n\n'
					};
					const opts = {};

					const literalInitializers = {
						int: '0',
						float: '0',
						double: '0',
						short: '0',
						long: '0',
						char: "''",
						boolean: 'false'
					};

					const SEP = '$';

					const unhandledNode = (node, more = '') => {
						console.error(`Unhandled node: ${node.node}. ${more}`);
						return '';
					};

					const joinStatements = (stats) => `${stats.join(';')}${stats.length ? ';' : ''}`;

					let variableTypes = {};

					const varToString = ({ name, value, type, final }, noLet) => {
						if (value === undefined) value = literalInitializers[type] || 'null';
						variableTypes[name] = type;
						return `${noLet !== true ? (final ? 'const ' : 'let ') : ''}${name} = ${value}`;
					};

					const parseType = (type) => {
						if (type.node === 'ArrayType') return 'Array';
						// Doesn't matter what we return, we don't use it
						else if (type.node === 'SimpleType') return type.name.identifier;
						else if (type.node === 'PrimitiveType') return type.primitiveTypeCode;
						else if (type.node === 'ParameterizedType') return parseType(type.type);
						else return unhandledNode(type);
					};

					const parseModifiers = (modifiers) => {
						const mods = {};
						for (const mod of modifiers) {
							mods[mod.keyword] = true;
						}
						return mods;
					};

					const parseClass = (class_, isGlobal) => {
						const modifiers = parseModifiers(class_.modifiers);
						if (modifiers.abstract || class_.interface) return { abstract: true };

						const classData = {
							name: class_.name.identifier,
							superclass: class_.superclassType && parseType(class_.superclassType),
							classes: [],
							vars: [],
							methods: []
						};
						const classVarsMap = {};

						let asyncMethods = {
							Scanner: [
								'hasNext',
								'hasNextLine',
								'next',
								'nextLine',
								'nextInt',
								'nextShort',
								'nextLong',
								'nextFloat',
								'nextDouble'
							],
							Thread: ['sleep']
						};
						if (typeof QuintOS != 'undefined') {
							Object.assign(asyncMethods, {
								Sprite: ['move'],
								window: ['alert', 'delay', 'eraseRect', 'frame', 'play', 'prompt', 'text', 'textRect']
							});
						}
						if (!asyncMethods.window) asyncMethods.window = [];

						const assignParent = (name, isInConstructor) => {
							if (name in classVarsMap) {
								let v = classData.vars.find((x) => x.name == name);
								if (!isInConstructor && (!v || !v.static)) {
									return `this.${name}`;
								} else if (v.static) {
									return `${classData.name}.${name}`;
								} else {
									return name;
								}
							}
							const mapped = opts.globalVars[name];
							if (mapped) {
								const newName = typeof mapped === 'string' ? mapped : name;
								return opts.globalScope ? `${opts.globalScope}.${newName}` : newName;
							}
							return name;
						};

						const parseExpr = (expr) => {
							if (!expr) return undefined;

							switch (expr.node) {
								case 'ThisExpression':
									return 'this';
								case 'NullLiteral':
									return 'null';
								case 'BooleanLiteral':
									return expr.booleanValue;
								case 'NumberLiteral':
									let num = expr.token;
									num = num.replace(/_/g, '');
									if (/^0\d+$/.test(num)) num = '0o' + num.substring(1);
									else if (/[lfd]$/i.test(num)) num = num.slice(0, -1);
									return num;
								case 'StringLiteral':
									return expr.escapedValue.replace(/'/g, "\\'").replace(/"/g, "'");
								case 'CharacterLiteral':
									const char = expr.escapedValue.slice(1, -1);
									if (char.length === 1) return "'" + char + "'";
									else if (char.startsWith('\\u')) return parseInt(char.substring(2), 16).toString();
									else return unhandledNode(expr, 'Weird char: ' + char);
								case 'CastExpression':
									let exp = parseExpr(expr.expression);
									let type;
									if (expr.expression.node == 'SimpleName') {
										type = variableTypes[expr.expression.identifier];
									} else if (expr.expression.node == 'CharacterLiteral') {
										type = 'char';
									} else if (expr.expression.node == 'NumberLiteral') {
										type = 'double';
									} else if (expr.expression.node == 'StringLiteral') {
										type = 'String';
									}
									let castError = false;
									let cast = expr.type.primitiveTypeCode;
									if (cast == 'int') {
										// if cast to int
										if (type == 'String') {
											castError = true;
										} else if (type == 'char') {
											exp += '.charCodeAt(0)';
										} else {
											exp = 'Math.floor(' + exp + ')';
										}
									} else if (cast == 'char') {
										if (type == 'String') {
											castError = true;
										} else {
											exp = 'String.fromCharCode(' + exp + ')';
										}
									}
									if (castError) {
										let msg = `error: incompatible types: ${type} cannot be converted to ${cast}: ${exp}`;
										console.log(msg);
										System.err.println(msg);
										return '';
									}
									return exp;
								case 'ConditionalExpression':
									return `${parseExpr(expr.expression)} ? ${parseExpr(expr.thenExpression)} : ${parseExpr(
										expr.elseExpression
									)}`;
								case 'SimpleName':
									return assignParent(expr.identifier, expr.isInConstructor);
								case 'QualifiedName':
									return `${parseExpr(expr.qualifier)}.${expr.name.identifier}`;
								case 'FieldAccess':
									return `${parseExpr(expr.expression)}.${expr.name.identifier}`;
								case 'Assignment':
									return `${parseExpr(expr.leftHandSide)} ${expr.operator} ${parseExpr(expr.rightHandSide)}`;
								case 'InfixExpression':
									let op = expr.operator;
									if (op === '!=' || op === '==') op += '='; // triple equals in JS
									return `${parseExpr(expr.leftOperand)} ${op} ${parseExpr(expr.rightOperand)}`;
								case 'MethodInvocation':
									let str = '';
									if (expr.expression) {
										let exp = expr.expression;
										if (exp.expression) exp = exp.expression;
										let arr = asyncMethods[variableTypes[exp.identifier]];
										if (arr && arr.length && arr.includes(expr.name.identifier) && !expr.isInConstructor) {
											str += 'await ';
										}
										str += `${parseExpr(expr.expression)}.${expr.name.identifier}`;
										if (expr.name.identifier == 'length') return str;
									} else {
										if (asyncMethods.window.includes(expr.name.identifier) && !expr.isInConstructor) {
											str += 'await ';
										}
										str += `${assignParent(expr.name.identifier)}`;
									}
									return str + `(${expr.arguments.map(parseExpr)})`;
								case 'InstanceofExpression':
									return `${parseExpr(expr.leftOperand)} instanceof ${parseType(expr.rightOperand)}`;
								case 'SuperMethodInvocation':
									return `super.${expr.name.identifier}(${expr.arguments.map(parseExpr)})`;
								case 'ClassInstanceCreation':
									return `new ${parseType(expr.type)}(${expr.arguments.map(parseExpr)})`;
								case 'PostfixExpression':
									return `${parseExpr(expr.operand)}${expr.operator}`;
								case 'PrefixExpression':
									return `${expr.operator}${parseExpr(expr.operand)}`;
								case 'VariableDeclarationExpression':
									return `${parseFieldVars(expr).map(varToString)}`;
								case 'ArrayInitializer':
									return `[${expr.expressions.map(parseExpr)}]`;
								case 'ArrayCreation':
									return `new Array()`;
								case 'ArrayAccess':
									let arr = expr.array;
									// TODO support for three dimensional arrays
									if (arr.array) {
										return `${assignParent(arr.array.identifier)}[${parseExpr(arr.index)}][${parseExpr(expr.index)}]`;
									}
									if (arr.identifier) {
										return `${assignParent(arr.identifier)}[${parseExpr(expr.index)}]`;
									}
									// TODO support for third level subclasses
									if (arr.qualifier.qualifier) {
										return `${assignParent(arr.qualifier.qualifier.identifier)}.${arr.qualifier.name.identifier}.${
											arr.name.identifier
										}[${parseExpr(expr.index)}]`;
									}
									return `${assignParent(arr.qualifier.identifier)}.${arr.name.identifier}[${parseExpr(expr.index)}]`;
								case 'ParenthesizedExpression':
									return `(${parseExpr(expr.expression)})`;
								default:
									return unhandledNode(expr);
							}
						};

						const parseFieldVars = (field) => {
							const vars = [];
							const data = parseModifiers(field.modifiers);
							data.type = parseType(field.type);

							for (const frag of field.fragments) {
								if (frag.node === 'VariableDeclarationFragment') {
									vars.push(
										Object.assign(
											{
												name: frag.name.identifier,
												value: parseExpr(frag.initializer)
											},
											data
										)
									);
									variableTypes[frag.name.identifier] = data.type;
								} else unhandledNode(frag);
							}
							return vars;
						};

						const parseStatement = (stat) => {
							switch (stat.node) {
								case 'EmptyStatement':
									return '';
								case 'ExpressionStatement':
									return parseExpr(stat.expression);
								case 'VariableDeclarationStatement':
									return parseFieldVars(stat).map(varToString);
								case 'ReturnStatement':
									return `return ${parseExpr(stat.expression)}`;
								case 'SuperConstructorInvocation':
									// TODO stat.expression stat.typeArguments
									return `super(${stat.arguments.map(parseExpr)})`;
								case 'IfStatement':
									let ifBlock = `if(${parseExpr(stat.expression)}){${parseBlock(stat.thenStatement)}}`;
									if (stat.elseStatement) ifBlock += `else{${parseBlock(stat.elseStatement)}}`;
									return ifBlock;
								case 'WhileStatement':
									return `while(${parseExpr(stat.expression)}){${parseBlock(stat.body)}}`;
								case 'DoStatement':
									return `do{${parseBlock(stat.body)}}while(${parseExpr(stat.expression)})`;
								case 'ForStatement':
									let initializers = stat.initializers.map(parseExpr).join(',');
									if (stat.initializers.length && stat.initializers[0].node === 'VariableDeclarationExpression')
										initializers = 'let ' + initializers.replace(/(let|const) /g, '');
									return `for(${initializers};${parseExpr(stat.expression) || ''};${stat.updaters.map(
										parseExpr
									)}){${parseBlock(stat.body)}}`;
								case 'EnhancedForStatement':
									return `for(const ${stat.parameter.name.identifier} of ${parseExpr(stat.expression)}){${parseBlock(
										stat.body
									)}}`;
								case 'BreakStatement':
									return `break ${stat.label ? stat.label.identifier : ''}`;
								case 'ContinueStatement':
									return `continue ${stat.label ? stat.label.identifier : ''}`;
								case 'LabeledStatement':
									return `${stat.label.identifier}:${parseStatement(stat.body)}`;
								case 'SwitchCase':
									return `case ${parseExpr(stat.expression)}:`;
								case 'SwitchStatement':
									let switchStats = '';
									for (const _stat of stat.statements) {
										const statStr = parseStatement(_stat);
										switchStats += statStr + (statStr.endsWith(':') ? '' : ';');
									}
									return `switch(${parseExpr(stat.expression)}){${switchStats}}`;
								case 'AssertStatement':
									return `if(!(${parseExpr(stat.expression)}))throw ${
										stat.message ? parseExpr(stat.message) : "'Assertion Failed'"
									}`;
								case 'ThrowStatement':
									return `throw ${parseExpr(stat.expression)}`;
								case 'TryStatement':
									let tryBlock = `try{${parseBlock(stat.body)}}`;
									for (const clause of stat.catchClauses)
										tryBlock += ` catch(${clause.exception.name.identifier}){${parseBlock(clause.body)}}`; // TODO handle exception types?
									if (stat.finally) tryBlock += `finally{${parseBlock(stat.finally)}}`;
									return tryBlock;
								default:
									return unhandledNode(stat);
							}
						};

						const parseBlock = (block, method) => {
							const semicolon = (str) => `${str}${str.endsWith('}') ? '' : ';'}`;

							if (block.node !== 'Block') return semicolon(parseStatement(block));

							const statements = [];

							for (const stat of block.statements) {
								if (method && stat.node == 'ExpressionStatement') {
									stat.expression.isInConstructor = method.constructor;
								}
								const str = parseStatement(stat);
								const arr = Array.isArray(str) ? str : [str];
								statements.push(...arr.map(semicolon));
								if (method && !method.isAsync && !method.constructor && statements.join('').includes('await')) {
									asyncMethods.window.push(method.name.identifier);
									method.isAsync = true;
								}
							}

							return statements.join('');
						};

						const parseMethod = (method) => {
							const data = Object.assign(
								{
									name: method.name.identifier,
									parameters: []
								},
								parseModifiers(method.modifiers)
							);

							if (method.constructor) {
								data.isConstructor = true;
								data.name = 'constructor';
								data.static = false;
								for (let stat of method.body.statements) {
									if (stat.expression.rightHandSide) {
										stat.expression.rightHandSide.isInConstructor = true;
									}
								}
							}

							for (const param of method.parameters) {
								if (param.node === 'SingleVariableDeclaration') data.parameters.push(param.name.identifier);
								else unhandledNode(block);
							}

							data.block = parseBlock(method.body, method);

							if (data.block.includes('await')) data.isAsync = true;

							return data;
						};

						for (const dec of class_.bodyDeclarations) {
							if (dec.node === 'FieldDeclaration') {
								classData.vars.push(...parseFieldVars(dec));
							} else if (dec.node === 'MethodDeclaration' && !dec.constructor && isGlobal !== true) {
								classVarsMap[dec.name.identifier] = true;
							}
						}

						if (isGlobal !== true) {
							for (const var_ of classData.vars) classVarsMap[var_.name] = true;
						}

						for (const dec of class_.bodyDeclarations) {
							if (dec.node === 'TypeDeclaration') classData.classes.push(parseClass(dec));
							else if (dec.node === 'MethodDeclaration') classData.methods.push(parseMethod(dec));
							else if (dec.node !== 'FieldDeclaration') unhandledNode(dec);
						}

						return classData;
					};

					const classToJs = ({ name: className, vars, superclass, methods, abstract, classes }) => {
						if (abstract) return '';

						const initVars = [];
						const classProps = [];
						const staticVars = [];

						for (const cl of classes) {
							staticVars.push(`${classToJs(cl)}\n${className}.${cl.name}=${cl.name};`);
						}

						for (const var_ of vars) {
							if (var_.value === undefined) var_.value = literalInitializers[var_.type] || 'null';
							if (var_.static) {
								staticVars.push(`${className}.${var_.name}=${var_.value};`);
							} else {
								if (typeof var_.value == 'string') {
									for (const vv of vars) {
										var_.value = var_.value.replaceAll(vv.name, 'this.' + vv.name);
									}
								}
								initVars.push(`this.${var_.name}=${var_.value};`);
							}
						}

						let addedConstructor = false;

						const addMethod = ({ name, parameters, block, isConstructor, isAsync, static: static_ }, addInitVars) => {
							if (isConstructor) addedConstructor = true;
							if (static_) staticVars.push(`${className}.${name}=(${parameters})=>{${block}};`);
							else {
								const preblock =
									isConstructor && addInitVars && initVars.length
										? initVars.join('') + (block ? opts.separator : '')
										: '';
								let method = `${name}(${parameters}){${preblock}${block}}`;
								if (isAsync) method = 'async ' + method;
								classProps.push(method);
							}
						};

						const methodMap = {};
						for (const meth of methods) {
							const safeName = meth.name + '$$';
							if (!(safeName in methodMap)) methodMap[safeName] = {};
							methodMap[safeName][meth.parameters.length] = meth;
						}
						for (const safeName in methodMap) {
							const name = safeName.slice(0, -2);
							const paramMap = methodMap[safeName];
							const paramCounts = Object.keys(paramMap);

							const first = paramMap[paramCounts[0]];
							if (paramCounts.length === 1) {
								addMethod(first, true);
							} else {
								let cases = '';
								for (const paramCount of paramCounts) {
									const meth = paramMap[paramCount];
									meth.name = `${name}${SEP}${paramCount}`;
									cases += `case ${paramCount}:return ${meth.static ? className : 'this'}.${meth.name}(...args$);`;
									addMethod(meth);
								}
								if (first.static)
									staticVars.push(`${className}.${name}=(...args${SEP})=>{switch(args${SEP}.length){${cases}}};`);
								else classProps.push(`${name}(...args${SEP}){switch(args${SEP}.length){${cases}}}`);
							}
							if (name == 'main') staticVars.push(`jdk.main = ${className}.main;`);
						}

						if (!addedConstructor && initVars.length) classProps.unshift(`constructor(){${initVars.join('')}}`);

						return `class ${className}${superclass ? ' extends ' + superclass : ''}{${classProps.join(
							''
						)}}${staticVars.join('')}`;
					};

					const globalsToJs = ({ vars, methods, classes }) => {
						const join = [];

						join.push(joinStatements(vars.map(varToString)));

						join.push(
							methods
								.map(
									({ name, parameters, block }) =>
										`${
											opts.globalScope && name in opts.globalVars ? `${opts.globalScope}.` : 'const '
										}${name} = (${parameters}) => {${block}};`
								)
								.join(opts.separator)
						);

						join.push(classes.map(classToJs).join(opts.separator));

						return join.join(opts.separator);
					};

					const fixP5 = (str) => {
						return str
							.replace(/(int|float|byte|char|boolean)\s*\(/g, '$1$$(') // Temporarily change name of literal method calls e.g. int(x) -> int$(x)
							.replace(/[^"](#[a-f0-9]{6,8})[^"]/gi, "'$1'") // Replace silly hex notation with string
							.replace(/new\s+PVector\s*\(/g, 'createVector('); // use p5 vector initializer
					};

					/**
					 * Convert Java string to JavaScript string
					 * @param {string} javaString - Java file contents
					 * @param {object} [options]
					 * @param {object} [options.globalVars] - Object keys are added to the `globalScope` object. If the object value is a string, the variable is renamed to that string
					 * @param {string} [options.globalScope] - If specified, variables in `globalVars` are appended to `globalScope` object
					 * @param {boolean} [options.p5] - Sets `globalScope` to `'p5'`, adds [p5 variable mappings](./p5_globals.js) to `globalVars`, and allows for global methods and variables
					 * @param {boolean} [options.ugly] - Don't beautify JavaScript code
					 * @param {function} [progress] - Callback on progress of conversion. Args are progress number (0 to 1), and a message string
					 * @return {string} - Converted JavaScript
					 */
					const javaToJavascript = (javaString, options = {}, progress) => {
						if (typeof javaString !== 'string') {
							throw 'java-to-javascript: First argument must be a string';
						}

						// Reset opts parameters
						Object.assign(opts, DEFAULT_OPTIONS);

						if (options.globalVars) opts.globalVars = options.globalVars;
						if (options.globalScope) opts.globalScope = options.globalScope;
						if (options.ugly) opts.separator = '';
						if (options.p5) {
							Object.assign(opts.globalVars, p5_options.globalVars, opts.globalVars);
							if (!opts.globalScope) opts.globalScope = 'p5';
						}

						if (progress) progress(0, 'Parsing Java');

						if (options.p5) javaString = `class JavaJsTemp__ {${fixP5(javaString)}}`;

						let javaAST$$1;
						try {
							javaAST$$1 = javaAST.parse(javaString);
						} catch (e) {
							let line = e.location.start.line;
							if (e.location) throw `on line ${line}: \n\n${javaString.split('\n')[line - 1].trim()}\n\n${e.stack}`;
							else throw e;
						}

						if (progress) progress(0.5, 'Converting to JavaScript');

						let jsString;
						if (options.p5) {
							jsString = globalsToJs(parseClass(javaAST$$1.types[0], true));
						} else {
							jsString = javaAST$$1.types.map((globalClass) => classToJs(parseClass(globalClass))).join(opts.separator);
						}

						if (progress) progress(0.75, 'Beautifying');

						if (!options.ugly) {
							jsString =
								beautify$2(jsString, {
									indent_size: 2
								}) + '\n';
						}

						if (progress) progress(1.0, 'Success');

						return jsString;
					};

					var lib = javaToJavascript;

					return lib;
				});

				/* beautify ignore:end */
			},
			{}
		]
	},
	{},
	[1]
);
