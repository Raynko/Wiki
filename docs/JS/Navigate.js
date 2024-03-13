function Navigate(_page) {
    var front
    front = "/docs/"
    front = "/Wiki/"
    
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