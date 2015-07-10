
chrome.webRequest.onBeforeRequest.addListener(function(details) {
    chrome.tabs.executeScript(null, {file: "jquery.js"}, function() {
        chrome.tabs.executeScript(null, { file: "displayLoblawImage.js" });
    });
    return detectRedirect(details);
}, {
    urls : ["<all_urls>"],
    types: ["main_frame","sub_frame"]
}, ["blocking"]);


function detectRedirect(details) {

    var url = details.url;
    
    if (url == null) {
        return;
    }
    
    var http = "http://";
    var https = "https://";
    var walmartUrl = "www.walmart.ca";
    var walmartUrl2 = "www.walmart.com";

    if ((url.match(http + walmartUrl))||(url.match(http + walmartUrl2)) != null) {
        // If this is the non-secure link...
        return redirectToSmile(http, url);

    }  else if ((url.match(https + walmartUrl))||(url.match(https + walmartUrl2)) != null) {
        // If this is the secure link...
        return redirectToSmile(https, url);
    }
}

function redirectToSmile(scheme, url) {
    var loblawsUrl = "loblaws.ca";
    return {
        redirectUrl : scheme + loblawsUrl
    };
}
