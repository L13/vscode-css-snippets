//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

import { getSCSSConfig } from '../common/settings';

import scssFuncs from '../snippets/scss.funcs';

import type { Snippet } from '../types';

//	Variables __________________________________________________________________

let scssCompletionItems: vscode.CompletionItem[] = null;

//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function activate (context: vscode.ExtensionContext) {
	
	buildSCSSCompletionItems();
	
	const scssProvider = vscode.languages.registerCompletionItemProvider([
		'scss',
	], {
		provideCompletionItems: () => scssCompletionItems,
	});
	
	const changeConfiguration = vscode.workspace.onDidChangeConfiguration((event) => {
		
		if (event.affectsConfiguration('l13Snippets.scss.useFunctionBlockPadding')) {
			buildSCSSCompletionItems();
		}
		
	});
	
	context.subscriptions.push(scssProvider, changeConfiguration);
	
}

//	Functions __________________________________________________________________

function filterEmptyTab (body: string[]) {
	
	return body.filter((value, index, values) => value !== '\t' || value === '\t' && values[index + 1] === '\t' && values[index + 2] === '\t');
	
}

function buildCompletionItems (snippets: Record<string, Snippet>, useFunctionBlockPadding: boolean) {
	
	return Object.values(snippets).map((item) => {
	
		const body = useFunctionBlockPadding ? item.body : filterEmptyTab(item.body);
		const completionItem = new vscode.CompletionItem(item.prefix, vscode.CompletionItemKind.Snippet);
		
		completionItem.insertText = new vscode.SnippetString(body.join('\n'));
		
		return completionItem;
		
	});
	
}

function buildSCSSCompletionItems () {
		
	const useFunctionBlockPadding = getSCSSConfig('useFunctionBlockPadding');
	
	scssCompletionItems = buildCompletionItems(scssFuncs, useFunctionBlockPadding);
		
}