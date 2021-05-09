Page({
    data: {
        showDialog1: false,
        showDialog2: false,
    },
    onLoad(query) {

    },
    onTapShow1() {
        this.setData({
            showDialog1: true
        });
    },
    handleHide1() {
        this.setData({
            showDialog1: false
        });
    },
    onTapShow2() {
        this.setData({
            showDialog2: true
        });
    },
    handleHide2() {
        this.setData({
            showDialog2: false
        });
    }
});
