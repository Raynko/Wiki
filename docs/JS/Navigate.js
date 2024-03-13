function Navigate(_page) {
    var front;
    if (window.location.hostname === "127.0.0.1") {
        // En mode local
        front = "/docs/";
    } else {
        // Sur un serveur
        front = "/Wiki/";
    }

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
    console.log("Redirection vers :", window.location.href);
}