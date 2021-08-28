const {_Component} = require('../index');

_Component({
    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        mask: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 10
        },
        title: {
            type: String,
            value: ''
        },
        content: {
            type: Array,
            value: []
        },
        listKey: {
            type: String,
            value: 'index'
        },
        actions: {
            type: Array,
            value: []
        }
    },
    data: {},

    methods: {
        onTapListItem(e) {
            this.triggerEvent('onTap', {value: this.data.item}, {});
        }
    }
})
