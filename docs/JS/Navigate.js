function Navigate(_page) {
    var univers = "/docs/PAGES/Univers/";

    switch (_page)
    {
        case 'Univers':
        case 'Races':
            Nav(univers + _page);
            break;
        default:
            window.location.href = "/docs/index.html";
            break;
    }
}

function Nav(_thisPage) {
    window.location.href = _thisPage + ".html";
}