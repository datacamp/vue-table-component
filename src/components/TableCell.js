export default {
    functional: true,

    props: ['column', 'row', 'addCellHeaderDataAttr'],

    render(createElement, { props }) {
        const data = {};

        if (props.column.cellClass) {
            data.class = props.column.cellClass;
        }

        if (props.addCellHeaderDataAttr) {
            data.attrs = {};
            data.attrs['data-header'] = props.column.label;
        }

        if (props.column.template) {
            return createElement('td', data, props.column.template(props.row.data));
        }

        data.domProps = {};
        data.domProps.innerHTML = props.column.formatter(props.row.getValue(props.column.show), props.row.data);

        return createElement('td', data);
    },
};
