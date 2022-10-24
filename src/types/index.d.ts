export { };

declare global {
    interface Window {
        openMessageBox: Function;
        openDialog: Function;
        showLoading: boolean;
    }
}