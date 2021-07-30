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
            type: String,
            value: ''
        }
    },
    methods: {
        onTapMask(e) {
            this.triggerEvent('tapMask', {});
        },
        onTapConfirm(e) {
            this.triggerEvent('confirm', {});
        }
    }
});
