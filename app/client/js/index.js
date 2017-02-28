document.addEventListener('DOMContentLoaded', e => {
    let webview = document.querySelector('webview')
    webview.addEventListener('dom-ready', ready => {
        webview.openDevTools();
    });
});
