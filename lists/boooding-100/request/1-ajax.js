
function ajax(url, successFn) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                successFn(xhr.responseText)
            }
        }
    }
    xhr.send(null);
}

