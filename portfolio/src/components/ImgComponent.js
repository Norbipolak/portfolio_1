function ImgComponent({src, classes}) {
    return(
        <div className={classes.join(" ")}>
            <img src={src}/>
        </div>
    );
}

export default ImgComponent;

/*
és akkor ez majd vár props-okat

function ImgComponent({positionCls, borderCls, marginCls}) {  azért kell a {}, mert több propsot vár!!!!! 
    return(
        <div className={`${borderCls} ${marginCls} ${positionCls}`}>
            <img src={src}/>
        </div>
    );
}

és akkor itt ilyeneket vár majd, amit majd meg tudunk neki adni a HomePage-en, hogy ezek majd milyen class-ok lesznek pontosan 
azért van ez így, hogy {`${borderCls}`} stb, mert ez egy újrafelhasználható dolog és majd több helyre is be tudjuk tenni 
és ez a borderCls ez majd változni fog, aszerint, hogy milyen szeretnénk, ezért kell ez a színtaktika, hogy 
{`${}`}
ez nagyon fontos!!!!!! 

és akkor a HomePage-n nem kell mindig megcsinálni, hogy div és bele az img, hanem egyetlen egy sor lesz ott 

de mivel ez itt mind class-ok, amit vár majd ({positionCls, borderCls, marginCls})
ezért az tudjuk csinálni, hogy vár egy olyat, hogy classes, ami egy tömb lesz és majd ezt fogjuk join-olni szóközökkkel 
-> 
function ImgComponent({src, classes}) {
    return(
        <div className={classes.join(" ")}>
            <img src={src}/>
        </div>
    );
}

ez nagyon fontos, hogy vár egy classes, ami egy tömb lesz majd és ott ahol className van ott pedig ezt a tömböt join-oljuk!!! 
className={classes.join(" ")}>

és így tényleg bármilyen és bármennyi class-t meg tudunk neki adni!!! 
csak amikor majd meghívjuk, akkor ott egy tömbben kell megadni a class-okat 

<ImgComponent src={require("../images/male.jpg")}
className={["float-left", "border-primary", "mr-md", "mb-md"]}/>

és ami nagyon fontos, hogy kell a require src esetében de azt be kell majd égetni ide, tehát ami itt van a HomePage-en ott kell majd megadni, 
hogy require és itt az img komponensben meg nem szabad!! 
<img src={src}/>
itt csak egy sima src-t vár!!! 
és itt kell majd a require
<ImgComponent src={require("../images/male.jpg")}
*/