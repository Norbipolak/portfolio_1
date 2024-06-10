function Nav() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}

export default Nav;

/*
function Nav() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link></Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

ami itt nagyon fontos, hogy nem a-van egy link-re, mint js-ben hanem <Link></Link> ezt kell majd itt használni 
de viszont, amikor formáztuk scss-ben akkor ott a-t írtunk 
->
    a {
        color:white;
        text-decoration: none;
        padding: 15px;
    }

és itt ami fontos egy to-val meg tudjuk határozni, hogy hova vigyen minket, melyik oldalra!! 
<Link to="/"></Link>

az egész 
-> 
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>


az is nagyon fontos, hogy ez az Outlet ez itt legyen alul!!!!!!! 
hogy miért fontos, mert ott táolodnak a nested route-ok!!!!! 
és ha azt akarjuk, hogy ez a nav alatt jelenjen majd meg akkor az kell, hogy ez a nav alatt legyen ez az Outlet!!!
elmagyarazas.js
*/