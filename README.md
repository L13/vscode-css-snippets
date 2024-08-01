# CSS and SCSS Snippets

This extension contains property snippets for CSS and rule snippets for SCSS.

## What's new in CSS Snippets 0.18.0

- Added `_` for child brace scope `& { ... }`.
- Added `__` for simple brace scope `#{}` in SCSS.
- Added `#{clipboard}` and `#{selection}` for keyboard shortcut usage.
- Added `grid` properties.
- Added `writing-mode` property.
- Added `isolation` property.
- Added `block` and `inline` properties for `border`, `margin` and `padding`.
- Added SCSS module functions.
- Added `$1`, `$d1` and `$g1` for SCSS variable declaration.
- Added `true`, `false` and `null` for SCSS.
- Changed prefix for color from `_` to `#`.
- Simplified SCSS include.
- Strings are always single quote.
- Some fixes and clean up like simplified font.
- Eliminated a lot of duplicated prefixes with value selection.
- Removed properties with prefixes.

## Index

1. [Introduction](#introduction)
1. [Shortcut rules for CSS snippets](#shortcut-rules-for-css-snippets)
1. [Shortcut rules for SCSS snippets](#shortcut-rules-for-scss-snippets)
1. [Recommended Settings](#recommended-settings)
1. [Recommended Keyboard Shortcuts](#recommended-keyboard-shortcuts)
1. [Recommended Extensions](#recommended-extensions)

## Introduction

The idea of those snippets is to create a property instantly based on some simple rules without selecting it by menu or auto completion. Write one to six characters and you get the property and the value.

Only a few prefixes are twice, because the rules are matching different properties like `fs1` -> `flex-shrink: 0;` and `font-size: 0;`. Then you have to pick the right one.

__The following prefixes are just examples to explain the rules.__ To see the complete list, please visit [SNIPPETS.md](https://github.com/L13/vscode-css-snippets/blob/master/SNIPPETS.md). If a property or pattern might be missing, please open an issue on [Github](https://github.com/L13/vscode-css-snippets/issues) and make a suggestion.

## Shortcut rules for CSS snippets

### 1. The first letter in a word or after a minus "-" defines the prefix.

| Prefix  | Snippet |
| ------: | ------- |
| `di`    | <b>d</b>isplay: <b>i</b>nline; |
| `dib`   | <b>d</b>isplay: <b>i</b>nline-<b>b</b>lock; |
| `wa`    | <b>w</b>idth: <b>a</b>uto; |

### 2. Numbers are defined by the amount of numbers.

| Prefix  | Snippet |
| ------: | ------- |
| `p1`    | <b>p</b>adding: <b>0</b>; |
| `p2`    | <b>p</b>adding: <b>0 0</b>; |
| `p3`    | <b>p</b>adding: <b>0 0 0</b>; |
| `p4`    | <b>p</b>adding: <b>0 0 0 0</b>; |
| `w1`    | <b>w</b>idth: <b>0</b>; |
| `zi1`   | <b>z</b>-<b>i</b>ndex: <b>0</b>; |

### 3. Colors are defined with "#".

| Prefix  | Snippet |
| ------: | ------- |
| `c#`    | <b>c</b>olor: <b>#000000</b>; |
| `b#`    | <b>b</b>ackground: <b>#000000</b>; |
| `bs1#`  | <b>b</b>order: <b>s</b>olid <b>0</b> <b>#000000</b>; |

### 4. The order of a value list is [function call] [keyword] [numbers] [color].

| Prefix  | Snippet |
| ------: | ------- |
| `bunr2#`| <b>b</b>ackground: <b>u</b>rl() <b>n</b>o-<b>r</b>epeat <b>0</b> <b>0</b> <b>#000000</b>; |

### 5. Rules are starting with an "@" symbol.

| Prefix  | Snippet |
| ------: | ------- |
| `@i`    | <b>@i</b>mport ''; |

### 6. An underscore "\_" after a prefix defines a brace scope.

| Prefix  | Snippet |
| ------: | ------- |
| `@m_`   | <b>@m</b>edia <b>{</b> ... <b>}</b> |

### 7. A dollar sign "$" defines a function call.

| Prefix  | Snippet |
| ------: | ------- |
| `c$`    | <b>c</b>alc<b>()</b>; |

### 8. A number after the dollar sign "$" defines the amount of parameters.

| Prefix  | Snippet |
| ------: | ------- |
| `r$3`   | <b>r</b>gb<b>(0, 0, 0)</b> |
| `r$4`   | <b>r</b>gba<b>(0, 0, 0, 1)</b> |

## Shortcut rules for SCSS snippets

### 1. All CSS snippets are available in SCSS, too.

| Prefix  | Snippet |
| ------: | ------- |
| `t`   | <b>t</b>rue |
| `f`   | <b>f</b>alse |
| `n`   | <b>n</b>ull |

### 2. Rules are starting with an "@" symbol.

| Prefix  | Snippet |
| ------: | ------- |
| `@c1`    | <b>@c</b>ontent; |

### 3. An underscore "\_" after a prefix defines a brace scope.

| Prefix  | Snippet |
| ------: | ------- |
| `@i_`   | <b>@i</b>f CONDITION <b>{</b> ... <b>}</b> |

### 4. Variables are starring with a "$" sign.

| Prefix  | Snippet |
| ------: | ------- |
| `$1`    | <b>$</b>name: null; |
| `$d1`   | <b>$</b>name: null !<b>d</b>efault; |
| `$g1`   | <b>$</b>name: null !<b>g</b>lobal; |

### 5. The number "1" defines a one line snippet.

| Prefix  | Snippet |
| ------: | ------- |
| `@e1`   | <b>@e</b>xtend NAME; |

### 6. A SassScript expression uses two underscores "\_\_".

See also [Recommended Keyboard Shortcuts](#recommended-keyboard-shortcuts).

| Prefix  | Snippet |
| ------: | ------- |
| `__`    | #<b>{</b> ... <b>}</b> |

### 7. A child scope starts with an underscore "\_".

| Prefix  | Snippet |
| ------: | ------- |
| `_`     | & <b>{</b> ... <b>}</b> |
| `_h_`   | &:hover <b>{</b> ... <b>}</b> |
| `_0_`   | ~ * <b>{</b> ... <b>}</b> |
| `_1_`   | > * <b>{</b> ... <b>}</b> |

## Recommended Settings

It is recommended to disable auto intellisense for snippet.

```json
"editor.suggest.snippetsPreventQuickSuggestions": true
```

It is recommended to exclude emmet support for CSS and SCSS in the settings.

```json
"emmet.excludeLanguages": [
	"css",
	"scss"
]
```
It is recommended to change the word separators for css and scss.

```json
"[css]": {
	"editor.wordSeparators": "`~!#$%^&*()=+[{]}\\|;:'\",.<>/?",
},
"[scss]": {
	"editor.wordSeparators": "`~!#%^&*()=+[{]}\\|;:'\",.<>/?",
}
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

### Quick SassScript Expression

The following keyboard shortcut improves the writing of a SassScript expression.

#### macOS

```json
[
	{
		"key": "cmd+-",
		"command": "editor.action.insertSnippet",
		"when": "editorTextFocus && !editorReadonly && editorLangId == scss",
		"args": { "name": "#{selection}" }
	},
	{
		"key": "alt+cmd+-",
		"command": "editor.action.insertSnippet",
		"when": "editorTextFocus && !editorReadonly && editorLangId == scss",
		"args": { "name": "#{clipboard}" }
	}
]
```

#### Windows and Linux

```json
[
	{
		"key": "ctrl+-",
		"command": "editor.action.insertSnippet",
		"when": "editorTextFocus && !editorReadonly && editorLangId == scss",
		"args": { "name": "#{selection}" }
	},
	{
		"key": "alt+ctrl+-",
		"command": "editor.action.insertSnippet",
		"when": "editorTextFocus && !editorReadonly && editorLangId == scss",
		"args": { "name": "#{clipboard}" }
	}
]
```

## Recommended Extensions

- [Extension Pack](https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-extension-pack)