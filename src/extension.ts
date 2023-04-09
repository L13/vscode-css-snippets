//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

import scssFuncs from './snippets/scss.funcs';

import type { Snippet } from './types';

//	Variables __________________________________________________________________

let scssCompletionItems: vscode.CompletionItem[] = null;

//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function activate (context: vscode.ExtensionContext) {
	
	buildAllCompletionItems();
	
	const scssProvider = vscode.languages.registerCompletionItemProvider([
		'scss',
	], {
		provideCompletionItems: () => scssCompletionItems,
	});
	
	const changeConfiguration = vscode.workspace.onDidChangeConfiguration((event) => {
		
		if (event.affectsConfiguration('l13Snippets.scss.useFunctionBlockPadding')) {
			buildAllCompletionItems();
		}
		
	});
	
	context.subscriptions.push(scssProvider, changeConfiguration);
	
}

//	Functions __________________________________________________________________

function get (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13Snippets.scss').get(key, value);
	
}

function filterEmptyTab (body: string[]) {
	
	return body.filter((value) => value !== '\t');
	
}

function buildCompletionItems (snippets: Record<string, Snippet>, useFunctionBlockPadding: boolean) {
	
	return Object.values(snippets).map((item) => {
	
		const body = useFunctionBlockPadding ? item.body : filterEmptyTab(item.body);
		const completionItem = new vscode.CompletionItem(item.prefix, vscode.CompletionItemKind.Snippet);
		
		completionItem.insertText = new vscode.SnippetString(body.join('\n'));
		
		return completionItem;
		
	});
	
}

function buildAllCompletionItems () {
		
	const useFunctionBlockPadding = get('useFunctionBlockPadding');
	
	scssCompletionItems = buildCompletionItems(scssFuncs, useFunctionBlockPadding);
		
}