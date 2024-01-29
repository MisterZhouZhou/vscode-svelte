// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SwiperPanel } from './SwiperPanel';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-svelte" is now active!');

  // webview
	const webViewCmd = vscode.commands.registerCommand('vscode-svelte.create', () => {
		SwiperPanel.createOrShow(context.extensionUri);
	});
	context.subscriptions.push(webViewCmd);

  // debug
	const debugCmd = vscode.commands.registerCommand('vscode-svelte.debug', () => {
		vscode.commands.executeCommand('workbench.action.webview.openDeveloperTools');
	});
	context.subscriptions.push(debugCmd);

  // refresh
  const disposable = vscode.commands.registerCommand('vscode-svelte.refresh', () => {
    SwiperPanel.kill();
		SwiperPanel.createOrShow(context.extensionUri);
    // 打开调试工具
    // setTimeout(() => {
    //   vscode.commands.executeCommand('workbench.action.webview.openDeveloperTools');
    // }, 500);
	});
	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
