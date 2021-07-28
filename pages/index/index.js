Page({
    data: {
        isShow_1: false,
        isShow_2: false,
    },
    onLoad(query) {

    },
    onTapShow(e) {
        this.setData({
            [`isShow_${e.currentTarget.dataset.index}`]: true
        });
    },
    onTapConfirm(e) {
        this.setData({
            [`isShow_${e.currentTarget.dataset.index}`]: false
        });
    }
});
