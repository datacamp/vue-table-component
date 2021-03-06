const settings = {
    wrapperClass: '',
    tableClass: '',
    theadClass: '',
    tbodyClass: '',
    rowClass: '',
    headerClass: '',
    cellClass: '',
    filterInputClass: '',
    filterPlaceholder: 'Filter table…',
    filterNoResults: 'There are no matching rows',
    addCellHeaderDataAttr: false,
    rowSnowplowId: false,
    rowSnowplowUrl: false
};

export function mergeSettings(newSettings) {
    for(const setting in newSettings) {
        settings[setting] = newSettings[setting];
    }
}

export default settings;
