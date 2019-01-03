<template>
    <tr
        :data-snowplow="snowplowId(row)"
        :data-snowplow-url="snowplowUrl(row)"
        @click="$emit('rowClick', row)"
    >
        <slot></slot>
        <table-cell
            v-for="column in visibleColumns"
            :row="row"
            :column="column"
            :key="column.id"
            :addCellHeaderDataAttr="addCellHeaderDataAttr"
        ></table-cell>
    </tr>
</template>

<script>
    import TableCell from './TableCell';

    export default {
        props: [
            'columns',
            'row',
            'addCellHeaderDataAttr',
            'rowSnowplowId',
            'rowSnowplowUrl',
        ],

        components: {
            TableCell,
        },

        computed: {
            visibleColumns() {
                return this.columns.filter(column => ! column.hidden);
            },
        },

        methods: {
            snowplowId({ data }) {
                if (typeof this.rowSnowplowId === 'function') {
                    return this.rowSnowplowId(data)
                } else if (typeof this.rowSnowplowId === 'string') {
                    return this.rowSnowplowId
                } else {
                    return false
                }
            },

            snowplowUrl({ data }) {
                if (typeof this.rowSnowplowUrl === 'function') {
                    return this.rowSnowplowUrl(data)
                } else if (typeof this.rowSnowplowUrl === 'string') {
                    return this.rowSnowplowUrl
                } else {
                    return false
                }
            },
        }
    };
</script>
