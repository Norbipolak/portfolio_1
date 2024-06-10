/*
Lesz nekünk itt egy components és egy pages folder-ünk is, mert vannak azok a komponens-ek, amik egy teljes oldalt tesznek ki 
pl. a home, contant meg az ilyenek és vannak ilyen reusable komponensek, amik kapnak majd props-okat és aszerint majd megjelennek valahogy 
amikor bele lesznek hívva a home meg az ilyesmi oldalakon 

És ezeket jó elszeparálni külön folder-ben, mert ha nem, akkor a components-ben lesz minden a reusable meg a rendesek is
túl sok lenne ott és emiatt átláthatatlan lenne az egész 
és akkor most a pages-nél megcsináljuk, hogy milyen oldalak lesznek majd
*/

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <header>Header Content</header>
      <main>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
      <footer>Footer Content</footer>
    </div>
  );
}

function HomePage() {
  return <div>Home Page Content</div>;
}

function AboutPage() {
  return <div>About Page Content</div>;
}

function ContactPage() {
  return <div>Contact Page Content</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
What Happens with Different URLs

URL: /

<Nav> is rendered.
<HomePage> is rendered inside <Nav> because of the index route.

URL: /about

<Nav> is rendered.
<AboutPage> is rendered inside <Nav> because the nested route with path="about" matches.

URL: /contact

<Nav> is rendered.
<ContactPage> is rendered inside <Nav> because the nested route with path="contact" matches.


Summary
<Nav> will always be rendered because it is the parent route.
Nested routes determine which component is rendered inside the <Nav> component based on the current URL.
The <Outlet> component inside <Nav> serves as a placeholder for these nested routes.
This setup is useful for creating layouts with a consistent structure 
(like a navigation bar, header, footer) while allowing different content to be displayed based on the route.
*/