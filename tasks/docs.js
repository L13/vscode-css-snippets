//	Imports ____________________________________________________________________

const fs = require('fs');
const path = require('path');

const _parse = JSON.parse;

//	Variables __________________________________________________________________

const paths = {
	CSS: [
		'snippets/css.json',
	],
	SCSS: [
		'snippets/scss.json',
		'src/snippets/scss.funcs.ts',
	],
};

const excludes = [];

const description = `## CSS and SCSS Snippets

Complete list of all CSS and SCSS snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)`;

const findComments = /"(?:[^"\r\n\\]*(?:\\.)*)*"|(\/\*(?:.|[\r\n])*?\*\/|\/\/[^\r\n]*|export[\s\r\n]+default[\s\r\n]*|;)|,[\s\r\n]*?([\]}])/g;
const findMultipleSpaces = /\s+/g;
const findQuote = /`/g;
const findPipe = /\|/g;

//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

module.exports = {
	snippets: {
		watch: Object.values(paths).flat(),
		task: async () => {
		
			const contents = [description];
			const prefixes = {};
			const duplicates = [];
			
			for (const [headline, pathnames] of Object.entries(paths)) {
				contents.push(`
### ${headline}

| Prefix | Snippet |
| -----: | ------- |`);
				let json = {};
				for (const pathname of pathnames) {
					const result = parse(fs.readFileSync(path.join(process.cwd(), pathname), 'utf-8'))
					json = { ...json, ...result };
				}
				const snippets = [];
				for (const snippet of Object.values(json)) {
					const prefix = snippet.prefix;
					if (!prefix) continue;
					if (prefix !== '___') snippets.push(formatSnippet(snippet));
					if (!excludes.includes(headline)) {
						if (!prefixes[prefix]) prefixes[prefix] = [];
						prefixes[prefix].push(snippet.body.join(''));
					}
				}
				contents.push(snippets.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).join('\n'));
			}
			
			for (const [prefix, values] of Object.entries(prefixes)) {
				if (values.length > 1) duplicates.push(`${prefix}: ${values.join('  |  ')}`);
			}
			
			console.log(duplicates.join('\n'));
			console.log(`\nFound ${duplicates.length} duplicated prefixes\n`);
			
			fs.writeFileSync(path.join(process.cwd(), 'SNIPPETS.md'), contents.join('\n'), 'utf-8');
			
		}
	}
}

//	Functions __________________________________________________________________

function formatSnippet (snippet) {
	
	const body = snippet.body.join(' ')
		.replace(findMultipleSpaces, ' ')
		.replace(findQuote, '\`')
		.replace(findPipe, '\\|');
	
	return `| \`${snippet.prefix}\` | \`${body}\` |`;
	
}

function parse (json, ...args) {
	
	return _parse(json.replace(findComments, (match, comment, close) => comment ? '' : close || match), ...args);
	
}