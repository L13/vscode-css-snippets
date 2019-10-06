# L13 CSS and SCSS Snippets

This extension contains property snippets for CSS and rule snippets for SCSS.

This extension is part of the [L13 Extension Pack](https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-extension-pack).

## What's new in L13 CSS Snippets 0.14.0

- Added complete snippet list as markdown.
- Added property "content".

## Index

1. [Introduction](#Introduction)
1. [Shortcut rules for CSS snippets](#shortcut-rules-for-css-snippets)
1. [Shortcut rules for SCSS snippets](#shortcut-rules-for-scss-snippets)
1. [Recommended Settings](#recommended-settings)
1. [Recommended Keyboard Shortcuts](#recommended-keyboard-shortcuts)

## Introduction

The idea of those snippets is to create a property instantly based on some simple rules without selecting it by menu or auto completion. Write one to six characters and you get the property and the value.

Only a few prefixes are twice, because the rules are matching different properties like `fs1` -> `flex-shrink: 1;` and `font-size: 0;`. Then you have to pick the right one.

__The following prefixes are just examples to explain the rules.__ To see the complete list, please visit [SNIPPETS.md](https://github.com/L13/vscode-css-snippets/blob/master/SNIPPETS.md). If a property or pattern might be missing, please open an issue on [Github](https://github.com/L13/vscode-css-snippets/issues) and make a suggestion.

## Shortcut rules for CSS snippets

### 1. The first letter in a word or after a minus "-" defines the prefix.

| Prefix  | Snippet |
| -------:| ------- |
| `di`    | <b>d</b>isplay: <b>i</b>nline; |
| `dib`   | <b>d</b>isplay: <b>i</b>nline-<b>b</b>lock; |
| `wa`    | <b>w</b>idth: <b>a</b>uto; |

### 2. Numbers are defined by the amount of numbers.

| Prefix  | Snippet |
| -------:| ------- |
| `p1`    | <b>p</b>adding: <b>0</b>; |
| `p2`    | <b>p</b>adding: <b>0 0</b>; |
| `p3`    | <b>p</b>adding: <b>0 0 0</b>; |
| `p4`    | <b>p</b>adding: <b>0 0 0 0</b>; |
| `w1`    | <b>w</b>idth: <b>0</b>; |
| `zi1`   | <b>z</b>-<b>i</b>ndex: <b>0</b>; |

### 3. Colors are defined with an underscore "\_".

| Prefix  | Snippet |
| -------:| ------- |
| `c_`    | <b>c</b>olor: <b>#000000</b>; |
| `b_`    | <b>b</b>ackground: <b>#000000</b>; |
| `bs1_`  | <b>b</b>order: <b>s</b>olid <b>0</b> <b>#000000</b>; |

### 4. The order of a value list is [function call] [keyword] [numbers] [color].

| Prefix  | Snippet |
| -------:| ------- |
| `bunr2_`| <b>b</b>ackground: <b>u</b>rl() <b>n</b>o-<b>r</b>epeat <b>0</b> <b>0</b> <b>#000000</b>; |

### 5. Property prefixes are starting with a minus "-".

| Prefix  | Snippet |
| -------:| ------- |
| `-br1`  | <b>-</b>moz-<b>b</b>order-<b>r</b>adius: <b>0</b>; <b>-</b>webkit-<b>b</b>order-<b>r</b>adius: <b>0</b>; <b>b</b>order-<b>r</b>adius: <b>0</b>; |

### 6. Rules are starting with an "@" symbol.

| Prefix  | Snippet |
| -------:| ------- |
| `@i`    | <b>@i</b>mport ''; |

### 7. A dollar sign "$" defines a function call.

| Prefix  | Snippet |
| -------:| ------- |
| `c$`    | <b>c</b>alc<b>()</b>; |

### 8. A number after the dollar sign "$" defines the amount of parameters.

| Prefix  | Snippet |
| -------:| ------- |
| `r$3`   | <b>r</b>gb<b>(0, 0, 0)</b>; |
| `r$4`   | <b>r</b>gba<b>(0, 0, 0, 1)</b>; |

## Shortcut rules for SCSS snippets

### 1. All CSS snippets are available in SCSS, too.

### 2. Rules are starting with an "@" symbol.

| Prefix  | Snippet |
| -------:| ------- |
| `@c`    | <b>@c</b>ontent; |

### 3. An underscore "\_" after a prefix defines a brace scope.

| Prefix  | Snippet |
| -------:| ------- |
| `@i_`   | <b>@i</b>f CONDITION <b>{</b> ... <b>}</b> |

### 4. A dollar sign "$" defines also a mixin call.

| Prefix  | Snippet |
| -------:| ------- |
| `@i$`   | <b>@i</b>nclude NAME <b>()</b>; |
| `@i$_`  | <b>@i</b>nclude NAME <b>()</b> <b>{</b> ... <b>}</b>; |

### 5. The number "1" defines a one liner.

| Prefix  | Snippet |
| -------:| ------- |
| `@e1`   | <b>@e</b>xtend NAME; |

## Recommended Settings

It is recommended to exclude emmet support for CSS and SCSS in the settings.

```json
"emmet.excludeLanguages": [
	"css",
	"scss"
],
```
And it is recommended to set the snippet suggestions to top.

```json
"editor.snippetSuggestions": "top",
```

## Recommended Keyboard Shortcuts

Please have the following keyboard shortcuts always in mind, because these are fundamental to get the most out of it. Every tab stop is used only if necessary, because it prevents VS Code to open the IntelliSense menu automatically. So sometimes `DownArrow` or `Cmd/Ctrl + Enter` can have the same effect.

### macOS

* `Tab` - Jump to the next tab stop of the snippet.
* `DownArrow` - Move the caret down one line.
* `Cmd + Enter` - Insert line below, even if the caret is in the middle of a line.
* `Cmd + Shift + Enter` - Insert line above, even if the caret is in the middle of a line.

### Windows / Linux

* `Tab` - Jump to the next tab stop of the snippet.
* `DownArrow` - Move the caret down one line.
* `Ctrl + Enter` - Insert line below, even if the caret is in the middle of a line.
* `Ctrl + Shift + Enter` - Insert line above, even if the caret is in the middle of a line.