Page({
    data: {
        list: new Array(50).fill(0).map((ele, index) => {
            return {text: index};
        })
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
