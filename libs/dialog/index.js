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
        maskZindex: {
            type: Number,
            value: 900
        },
        dialogZindex: {
            type: Number,
            value: 901
        }
    },
    methods: {
        onTapMask(e) {
            this.triggerEvent('tapMask', {});
        }
    }
});
