var range = document.getElementById("range");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
range.value = 1;
console.log(range);
try {
    chrome.storage.sync.get(['volume'], function (result) {
        range.value = result.volume;
        console.log(range.value);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    value: range.value,
                    tabId: tabs[0].id
                },
                function (response) {
                    console.log(response);
                    if (response == undefined) {
                        document.getElementById("div").innerHTML = "Please use the extension with google meet";
                    }
                }
            );
        });
    });
}
catch (e) { }
if (range) {
    range.oninput = function () {
        chrome.storage.sync.set({ "volume": range.value }, function () { });
        console.log(range.value);
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    value: range.value,
                    tabId: tabs[0].id
                },
                function (response) { console.log(response); }
            );
        });
    }

}

b1.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                value: "90deg",
                tabId: tabs[0].id
            },
            function (response) { console.log(response); }
        );
    });
}

b2.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                value: "180deg",
                tabId: tabs[0].id
            },
            function (response) { console.log(response); }
        );
    });
}

b3.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                value: "270deg",
                tabId: tabs[0].id
            },
            function (response) { console.log(response); }
        );
    });
}

b4.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {
                value: "360deg",
                tabId: tabs[0].id
            },
            function (response) { console.log(response); }
        );
    });
}
