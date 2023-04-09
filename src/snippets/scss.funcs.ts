/* eslint-disable no-template-curly-in-string */
/* eslint-disable key-spacing */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
export default {
	"@include ()":									{ "prefix": "@i$",		"body": ["@include ${0:name}();"], "description": "" },
	"@include {}":									{ "prefix": "@i_",		"body": ["@include ${1:name} {", "\t", "\t$0", "\t", "}"], "description": "" },
	"@include () {}":								{ "prefix": "@i$_",		"body": ["@include ${1:name}() {", "\t", "\t$0", "\t", "}"], "description": "" },
	"@mixin () {}":									{ "prefix": "@m$_",		"body": ["@mixin ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"@function () {}":								{ "prefix": "@f_",		"body": ["@function ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
};