class Fetch {

    constructor(url, params, successFunc, errorFunc) {
        this.url = url;
        this.params = params;
        this.successFunc = successFunc;
        this.errorFunc = errorFunc;
    }

    //发送GET请求
    getFetch() {
        let that = this;
        let str = '';
        if (typeof that.params === 'object' && that.params) {
            str += '?';
            Object.keys(that.params).forEach(function (val) {
                str += val + '=' + encodeURIComponent(that.params[val]) + '&';
            })
        }
        fetch(this.url + str, {
            method: 'GET'
        }).then(function (res) {
            if (res.ok) {
                res.json().then(function (result) {
                    if (result.success) {
                        that.successFunc(result.data);
                    } else {
                        that.errorFunc(result.msg);
                    }
                })
            } else if (res.status === 401) {
                console.log('请求失败');
                that.errorFunc('服务器异常');
            }
        }, function (e) {
            console.log('请求失败');
            that.errorFunc('服务器异常');
        })
    }

    //发送POST请求
    postFetch() {
        let that = this;
        let formData = new FormData();
        for (let k in that.params) {
            formData.append(k, that.params[k]);
        }
        formData.append('oper_id', '11');
        formData.append('oper_name', 'kong');
        fetch(this.url, {
            method: 'POST',
            mode: 'cors',
            body: formData
        })
            .then(function (res) {
                if (res.ok) {
                    res.json().then(function (result) {
                        if (result.success) {
                            that.successFunc(result.data);
                        } else {
                            that.errorFunc(result.msg);
                        }
                    })
                } else {
                    console.log('请求失败');
                    that.errorFunc('服务器异常');
                }
            }, function (e) {
                console.log('请求失败');
                that.errorFunc('服务器异常');
            })
    }
}

export default Fetch;