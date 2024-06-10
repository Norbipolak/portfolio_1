function HomePage() {
    return(
        <>
            <div className="container-xl bg-light-grey p-md">
                <h1>Rólam</h1>
                <ImgComponent src={require("../images/male.jpg")}
                    className={["float-left", "border-primary", "mr-md", "mb-md", "maxw-200", "img-holder"]}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi rhoncus porta ipsum at volutpat. In efficitur lectus 
                    sed dolor dictum vestibulum. Morbi bibendum leo suscipit 
                    purus facilisis dignissim. Mauris dictum gravida massa. 
                    Vestibulum eros lectus, varius sit amet tellus in, maximus 
                    malesuada purus
                </p>
                <div className="clear"></div>
            </div>

            <div className="bg-secondary line p-xl"></div>
        </>
    );
}
export default HomePage;

/*
itt fel tudjuk használni azokat a osztályokat, amik le vannak generálva scss-ben
pl. itt rögtön ennek meg tudunk adni egy container-xl-t

function HomePage() {
    return(
        <div></div>
    );
}
export default HomePage;

->
<div className="container-xl"></div>
és akkor majd így adunk meg neki még különböző osztályokat, amik le vannak generálva scss-ben 

lesz egy h1-es amiben csak az lesz, hogy rólam, majd alatta egy szöveg egy p-ben és egy img
amihez csinálunk egy images mappát és majd oda tesszük bele a képet!! 

        <div className="container-xl">
            <h1>Rólam</h1>
            <p>
                <div>
                    
                </div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi rhoncus porta ipsum at volutpat. In efficitur lectus 
                sed dolor dictum vestibulum. Morbi bibendum leo suscipit 
                purus facilisis dignissim. Mauris dictum gravida massa. 
                Vestibulum eros lectus, varius sit amet tellus in, maximus 
                malesuada purus
            </p>
        </div>

és erre már létre is hozhatunk egy reusable-ös dolgot, mert ha van egy képünk, akkor olyan dolgokat lehet neki meghatározni, hogy mi az 
src-je 
meg nagyon fontos, hogy úgy amikor megadtuk az src-jét a new Audio-nák ott is kellett a require meg itt szóval itt React-ben ha van egy img 
és annak az src-jét mindig úgy kell beírni, hogy required-vel együtt!!!! 
így -> 
    <div>
        <img src={require("../images/male.jpg")}/>
    </div>

és itt a div-nél majd azt kell, olyan class-okat kaphat, hogy mekkora legyen a margin meg, hogy a float az right vagy left lesz majd
meg, hogy legyen-e bordere és hogy milyen színű 
és akkora erre lehet csinálni egy components-et!!! ImgComponent.js

és akkor itt már meg tudjuk hívni ImgComponent-et és átadjuk neki, ami itt szükséges, amit vár ott props-ként!!! pl.az src-t 
->
<ImgComponent src={require("../images/male.jpg")}/>

mivel itt a float az balra lesz ezért margin az right kell, hogy legyen, hogy a jobb felén legyen a margin!!! 
ezért adtunk meg a float-left mellé egy mr-t!!! 
és még alulra is le kell tolni a szöveget, ezért lesz az mb 

<ImgComponent src={require("../images/male.jpg")}
className={["float-left", "border-primary", "mr-md", "mb-md"]}/>

most így ez jó, csak azt nem adtuk meg neki, hogy milyen magas meg széles legyen, de ilyen nincs a settings-ben, ezért majd ezt style={{}}
így adjuk meg majd neki!
de mégis ott csináltunk neki egy max-width-et, ahol vannak a settings.scss-ben a loopMixin-ek
@include loopMixin(10, 500, 1, "maxw", max-width, px);
-> 
className={["float-left", "border-primary", "mr-md", "mb-md", "maxw-100"]}/>
de így is nagy maradt a kép, mert az a probléma, hogy ezt nem az img-nek adtuk meg hanem a tároló div-ének!! 

ezért megadunk még egy class-t neki, hogy img-holder 
->
<ImgComponent src={require("../images/male.jpg")}
className={["float-left", "border-primary", "mr-md", "mb-md", "maxw-200", "img-holder"]}/>

és ez csak azért kellett, hogy be tudjuk állítani, hogy az img-holder-en belüli img az mindig 100% lesz 
->
img-holder img {
    width: 100%;
}
ez ott van a settings-ben!
és akkor így már jóval kisebb lett a kép

az volt a hiba, hogy a div nem lehet egy descendent-je a p-nek, mert eddig ez így volt 
->
<p>
    <ImgComponent src={require("../images/male.jpg")}
    className={["float-left", "border-primary", "mr-md", "mb-md", "maxw-200", "img-holder"]}/>

és akkor ezt az egészet kiszedjük innen 
-> 
<h1>Rólam</h1>
<ImgComponent src={require("../images/male.jpg")}
                className={["float-left", "border-primary", "mr-md", "mb-md", "maxw-200", "img-holder"]}/>
<p>

className="container-xl bg-light-grey p-md">
adtunk még a container-nek egy háttérszínt meg egy padding-et de a kép még kilog ebből, mert nagyon fontos, hogy itt van egy float-right 
ami kiveszi az elemeket amik benne vannak ebben a container-ben a document flow-ból ezért ezek nem igazódnak hozzá 
ezért csináltunk egy olyan class-t, hogy .clear, ami clear: both  

és legalulra csinálunk egy div-et, aminek megadjuk ezt a clear class-t, akkor már teljesen jó!!! 
    return(
        <div className="container-xl bg-light-grey p-md">
            <h1>Rólam</h1>
            <ImgComponent src={require("../images/male.jpg")}
                className={["float-left", "border-primary", "mr-md", "mb-md", "maxw-200", "img-holder"]}/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi rhoncus porta ipsum at volutpat. In efficitur lectus 
                sed dolor dictum vestibulum. Morbi bibendum leo suscipit 
                purus facilisis dignissim. Mauris dictum gravida massa. 
                Vestibulum eros lectus, varius sit amet tellus in, maximus 
                malesuada purus
            </p>
            <div className="clear"></div>
        </div>
    );

és ez is nagyon fontos, hogyha akarunk még valamit itt csinálni pl. egy másik container-ben, akkor kell hogy az egészet belerakjuk egy <></>-be
    return(
        <>
            <div className="container-xl bg-light-grey p-md">
                <h1>Rólam</h1>
                <ImgComponent src={require("../images/male.jpg")}
                    className={["float-left", "border-primary", "mr-md", "mb-md", "maxw-200", "img-holder"]}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Morbi rhoncus porta ipsum at volutpat. In efficitur lectus 
                    sed dolor dictum vestibulum. Morbi bibendum leo suscipit 
                    purus facilisis dignissim. Mauris dictum gravida massa. 
                    Vestibulum eros lectus, varius sit amet tellus in, maximus 
                    malesuada purus
                </p>
                <div className="clear"></div>
            </div>

            <div className="bg-secondary line p-xl"></div>
        </>
    ); 

és akkor itt ebben a line-ban lesznek majd a technologiák, amiket ismerek 
amit nagyon fontos le lehet tölteni az ikon-t a flaticon-ról, tehát nem csak a fontAwesome-ról hanem erről is!! 
és akkor itt lehet edit-elni is az ikon-t, hogy milyen színű legyen egyes része!!! 
*/