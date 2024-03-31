//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function get (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13Snippets').get(key, value);
	
}

export function getSCSSConfig (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13Snippets.scss').get(key, value);
	
}