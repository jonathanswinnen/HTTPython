function auto_refresh() {
    document.getElementById('frame').contentWindow.location.reload();
    setTimeout(auto_refresh, 5000)
}

auto_refresh();