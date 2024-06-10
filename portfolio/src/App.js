import logo from './logo.svg';
import './App.css';
import "./styles/style.scss";
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Nav/>}>
                <Route index element={<HomePage/>}/>
            </Route>     
        </Routes> 
    </BrowserRouter>
  );
}

export default App;

/*
és mivel itt több oldal van, ezért telepíteni kell egy react-router-dom-ot!!! 
ez nagyon fontos, hogyha több oldal van akkor mindenképpen kell a react-router-dom!!! 
->
npm i react-router-dom

nagyon fontos, hogyha le van töltve ez a react-router-dom, akkor úgy kell megcsinálni a route-okat, hogy elöször kell egy 
1. BrowserRouter 
2. Routes
3. Route 

Route-nak megadjuk egy path-val, hogy mi az url és egy element, ami meg mindig az aktuális js file lesz!!! 

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Nav/>}>
                <Route index element={<HomePage/>}/>
            </Route>     
        </Routes> 
    </BrowserRouter>

Itt az van, hogy megadunk egy path-ot meg egy element-et és amikor az url megegyezik, azzal pl.itt egy /-vel akkor render dolgokat, amiket 
kell, amik benne vannak a js-ben export default-val amit megadtunk az element-ben!! 

szóval ebben a példában ez egy ilyen nested rendering, tehát a nav az mindig betölt, amikor az path / és a HomePage is betölt a Nav-ban, amikor 
a path / lesz!!!!!! 

tehát a Nav lesz a parent route és nested routes-ok lesznek, amik itt benne vannak pl. a HomePage is ilyen 

fontos, hogy ez is ott legyen, de ezt betölti magától, amint beírtuk ezeket a kulcsszavakat 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

Miért kell az Outlet
-> 
Van nekünk ez a route, ami betölti a navigációs menüt <Route path="/" element={<Nav/>}>
és ami ebben benne van komponens pl. ez a HomePage a Portfolio meg a Contact 
azt ebbe az Outlet-be fogja betölteni 

pl. ha ez az outlet-et 

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

nem itt alul lenne, akkor fölötte lenne ami benne van a HomePage-ben és alatta a nav menü 
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />

tehát ebben az esetben a Nav az mindig be fog tölteni és attól függően, hogy mi az url az fog még betöltödni 
pl. itt megadtunk a nav-nak egy path-ot és a HomePage-nél ott van egy index ezért amikor "/" ez van, akkor a Nav mellé a HomePage 
fog betöltödni 
de viszont ha az az url, hogy /contact, akkor a nav mellé az fog betöltödni!!! 

ez nagyon fontos!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

és mivel a Nav a parent route, ezért az mindig betölt és attól függően, hogy mi az url az fog betöltödni aminek az a path-ja!!!! 
a Nav-ban ami van Outlet, abban tárolódnak ezek a nested route-ok!!!!!!!!!!!!!!!!!!!
*/
