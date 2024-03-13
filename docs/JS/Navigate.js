function Navigate(_page) {

    var front = "/Wiki/"
    /* var front = "/docs/" */
    var univers = front + "Pages/Univers/";

    switch (_page)
    {
        case 'Univers':
        case 'Races':
            Nav(univers + _page);
            break;
        default:
            Nav(front + "index")
            break;
    }
}

function Nav(_thisPage) {
    window.location.href = _thisPage + ".html";
}