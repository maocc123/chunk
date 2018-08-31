function jsonp(url, data, callback) {
    if (typeof data == 'string') {
            callback = data
            data = {}
    }
    url += url.indexOf('?') === -1 ? '?' : '&'
    url += 'callback=' + callback
    var params = ""
    for (var i in data) {
        params += '&' + i + '=' + data[i]
    }
    url += params
    var script = document.createElement('script')
    script.setAttribute('src', url)
    document.querySelector('head').appendChild(script)

}