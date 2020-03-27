//Download PDF GA Event
document.getElementById("Download").onclick = function fireDownloadEvent() {
    gtag('event','download',{'event_category':'pdf','event_label':'PDF Download'});
};

//Social GA Events
// - Email
document.getElementById("Email").onclick = function fireEmailEvent() {
    gtag('event','email',{'event_category':'social','event_label':'Email'});
};
// - Instagram
document.getElementById("Insta").onclick = function fireInstaEvent() {
    gtag('event','instagram',{'event_category':'social','event_label':'Instagram'});
};
// - Youtube
document.getElementById("Youtube").onclick = function fireYoutubeEvent() {
    gtag('event','youtube',{'event_category':'social','event_label':'Youtube'});
};