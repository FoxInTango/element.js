export function worker_progress() {
    //https://zhuanlan.zhihu.com/p/83001302
    onmessage = function (e) {
        console.log('Worker: Message received from main script');
        console.log(e);

        postMessage('worker_progress on working.');
    }
}

export function function_string() { }