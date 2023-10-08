//	Imports ____________________________________________________________________

const fs = require('fs');
const path = require('path');

const _parse = JSON.parse;

//	Variables __________________________________________________________________

const paths = {
	CSS: [
		'../snippets/css.json',
	],
	SCSS: [
		'../snippets/scss.json',
		'../src/snippets/scss.funcs.ts',
	],
};

const contents = [`## CSS and SCSS Snippets

Complete list of all CSS and SCSS snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)
`];

const findComments = /"(?:[^"\r\n\\]*(?:\\.)*)*"|(\/\*(?:.|[\r\n])*?\*\/|\/\/[^\r\n]*|export[\s\r\n]+default[\s\r\n]*|;)|,[\s\r\n]*?([\]}])/g;

const prefixes = {};
const duplicates = [];

//	Initialize _________________________________________________________________

for (const [headline, pathnames] of Object.entries(paths)) {
	contents.push(`
### ${headline}

| Prefix | Snippet |
| ------:| ------- |`);
	let json = {};
	for (const pathname of pathnames) {
		const result = parse(fs.readFileSync(path.join(__dirname, pathname), 'utf-8'))
		json = { ...json, ...result };
	}
	const snippets = [];
	for (const snippet of Object.values(json)) {
		const prefix = snippet.prefix;
		if (prefix !== '___') snippets.push(formatSnippets(snippet));
		if (!prefixes[prefix]) prefixes[prefix] = [];
		prefixes[prefix].push(snippet.body.join(''));
	}
	contents.push(snippets.sort().join('\n'));
}

for (const [prefix, values] of Object.entries(prefixes)) {
	if (values.length > 1) duplicates.push(`${prefix}: ${values.join('  |  ')}`);
}

console.log(duplicates.join('\n'));
console.log(`\nFound ${duplicates.length} duplicated prefixes\n`);

fs.writeFileSync(path.join(__dirname, '..', 'SNIPPETS.md'), contents.join('\n'), 'utf-8');

//	Exports ____________________________________________________________________



//	Functions __________________________________________________________________

function formatSnippets (snippet) {
	
	const body = snippet.body.join(' ')
		.replace(/\s+/g, ' ')
		.replace(/`/g, '\`')
		.replace(/\|/g, '\\|');
	
	return `| \`${snippet.prefix}\` | \`${body}\` |`;
	
}

function parse (json, ...args) {
	
	return _parse(json.replace(findComments, (match, comment, close) => comment ? '' : close || match), ...args);
	
}