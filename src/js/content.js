/*  content.js  
  
  the script has the same rights as in a single website
  we can manipulate the dom here as usuly                         
     
*/ 


/*HELPER*/
function len( aA ){
    if( aA ){
        if( aA instanceof Set ){
            return aA.size;
        } else {
            //console.log(aA, aA.length)
            return aA.length;
        }
    } else {
        return 0;
    }
}

function set( aA ){
    return new Set( aA );
}

function list( aS ){
    return Array.from( aS );
}

function SetDiff( setA, setB ){ 
    return [...setA].filter(x => !setB.has( x ));
}

function SetUnsion( setA, setB ){
    let union = set( [...setA, ...setB] );
    return union;
}

function SetIntersection( setA, setB ){
    return [...setA].filter( x => setB.has( x ));
}



/*SVG */
/*SVG Globals*/
let xmlns = "http://www.w3.org/2000/svg";
function addsvg( betA, betDurch, betB, A, AB, B, Blink ){
    let globH = '20';
    let wfactor = 3;
    
    let msvg = document.createElementNS( xmlns, "svg" );
	msvg.setAttributeNS(null, "viewBox", "0 0 " + ((betA + betDurch + betB )*wfactor).toString() + " " + globH );
    msvg.setAttributeNS(null, "width", ((betA + betDurch + betB)*wfactor).toString() );
    msvg.setAttributeNS(null, "height", globH );
    
    
    msvg.style.display = "inline-block";
    //msvg.style.zIndex = 3;
    //msvg.style.opacity = 0.8;
    //A
    let rect = document.createElementNS( xmlns, "rect" );
    
    rect.setAttributeNS(null, 'x', 0);
    rect.setAttributeNS(null, 'y', 0);
    rect.setAttributeNS(null, 'height', globH);
    /*if(betA === 0 && betDurch !== 0 ){
        betA = betDurch;
    }*/
    rect.setAttributeNS(null, 'width', Math.abs(betA*wfactor ));
    rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
    let recttitle = document.createElementNS( xmlns, "title" );
    recttitle.textContent = "nur A ("+betA.toString()+"): ["+A.toString()+"]";
    rect.appendChild(recttitle);
    //Durch
    let rect2 = document.createElementNS( xmlns, "rect" );
    rect2.setAttribute( 'title', AB.toString() );
    rect2.setAttributeNS(null, 'x', Math.abs(betA*wfactor) );
    rect2.setAttributeNS(null, 'y', 0);
    rect2.setAttributeNS(null, 'height', globH);
    rect2.setAttributeNS(null, 'width', (betDurch*wfactor));
    rect2.setAttributeNS(null, 'fill', '#'+Math.round(0xfff0ff * Math.random()).toString(16));
    let recttitle2 = document.createElementNS( xmlns, "title" );
    recttitle2.textContent = "in A und B ("+betDurch.toString()+"): ["+AB.toString()+"]";
    rect2.appendChild(recttitle2);
    //B
    let rect3 = document.createElementNS( xmlns, "rect" );
    rect3.setAttribute( 'title', B.toString() );
    rect3.setAttributeNS(null, 'x', ((betA+betDurch)*wfactor) );
    rect3.setAttributeNS(null, 'y', 0);
    rect3.setAttributeNS(null, 'height', globH);
    rect3.setAttributeNS(null, 'width', Math.abs((betB)*wfactor));
    rect3.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
    let recttitle3 = document.createElementNS( xmlns, "title" );
    recttitle3.textContent = "nur B: ("+betB.toString()+")["+B.toString()+"]";
    rect3.appendChild(recttitle3);
    msvg.appendChild( rect  );
    msvg.appendChild( rect2 );
    msvg.appendChild( rect3 );

    return msvg;
}

let indexforthistab = null;
let ownkey = null;

function mengdia( allda ){
    //console.log(allda);
    let d = JSON.parse( allda );
    let mengendiagramm = {};
    let names = [];
    let m2 = [];
    for( let m in indexforthistab ){
        m2[m] = []
        for(let i in indexforthistab[ m ] ){
            m2[m].push( indexforthistab[ m ][ i ][ 3 ] );
        }
        m2[m] = set( m2[m] );
    }
    
    //fill diagramm array with keys
    for( let k in d ){ //per tab
        
        
        if( k !== ownkey ){ // not with this one
            //console.log( k );
            names.push( k );
            let currindex = JSON.parse(d[ k ]);
            mengendiagramm[ k ] = {};
            //console.log(currindex, Object.keys(currindex));
            //find out the other data per key in diagramm array
            for( let t in currindex ){
                console.log(t);
                //add also a mengendiagramm [m1, m1/m2, m2];
                let m1 = [];
                for( let m in currindex[ t ] ){
                    //console.log(currindex[ t ] );
                    m1.push( currindex[ t ][ m ][ 3 ] );
                }
                m1 = set( m1 );
                //console.log(m1);
                let onlym1 = SetDiff(m1, m2[t]);
                let both = SetIntersection(m1, m2[t]);
                let onlym2 = SetDiff(m2[t], m1);
    
                mengendiagramm[ k ][ t ] = [currindex[t].length, onlym1, both, onlym2, k];
    
            }
            
        }
    }
    
    //turn diagramm array into svg and put it to the right Type of kritsiches Zeichen 
    for( let k in mengendiagramm ){
        for( let ty in mengendiagramm[k]){
            let diagrelem = document.createElement("div");
            diagrelem.className = "diag";
            //console.log(mengendiagramm[k][ty][0]);
            //diagrelem.innerHTML = ""+mengendiagramm[k][ty][0];
            let justtext = document.createElement("a");
            justtext.innerHTML = "&#8594; "+mengendiagramm[k][ty][0]+" i.V.:  ";
            justtext.className = "diagonlytext";
            justtext.href = mengendiagramm[k][ty][4];
            justtext.title = mengendiagramm[k][ty][4];
            diagrelem.appendChild( justtext );
            diagrelem.appendChild( addsvg( len(mengendiagramm[k][ty][1]), len(mengendiagramm[k][ty][2]), len(mengendiagramm[k][ty][3]), mengendiagramm[k][ty][1], mengendiagramm[k][ty][2], mengendiagramm[k][ty][3], mengendiagramm[k][ty][4] ) );
            if( document.getElementById( ty+"data" ) ){
                document.getElementById( ty+"data" ).appendChild( diagrelem );
            }
        }
    }   
    console.log( mengendiagramm );
}

/*Communication system*/
browser.runtime.onMessage.addListener(
    function( request, sender, sendResponse) {
        if( request.resp === "nowallare"){
            localStorage.setItem( "allother", response.alluneed );
            mengdia( response.alluneed );
        } 
        // Note: Returning true is required here!
        return true; 
    }
);


/*main function*/
function contTWOindex( ){
    let extrtactdatafrom = document.body;
    if( document.location.href.indexOf( "papyri.info" ) !== -1 ){
        extrtactdatafrom = document.getElementsByClassName( "transcription" )[0];
    }

    if( extrtactdatafrom === undefined ){
        console.log("no data on page?");
        return;
    }

    let originalpage = normatext( extrtactdatafrom.innerHTML, dispnormalform );

    //check if already inserted
    if( originalpage.indexOf( "Index signis criticis" ) !== -1 ){
        /*if( originalpage.indexOf( "diag" ) === -1 ){
            setTimeout( function( ){ mengdia( localStorage.getItem( "allother" ) ) }, 2000 );
        }*/
        return;
    }
    
    let klammsys = null;
    let secondtimenone = false;
    ownkey = document.location.href.split("#")[0];//ignore href anchor part of url
    let tempcont = localStorage.getItem( ownkey );
    if( tempcont ){
        console.log( "Index signis criticis for this page from localstorage." );
        klammsys = JSON.parse( tempcont );
        //setTimeout( function( ){ mengdia( localStorage.getItem( "allother" ) ) }, 2000 );
    } else {
        console.log( "Index signis criticis computation" );
        klammsys = hervKLAMMSYS( originalpage );
        localStorage.setItem( ownkey, JSON.stringify( klammsys ) );
    }
    
       
    browser.runtime.sendMessage( {cmd:"insert", payload:JSON.stringify( klammsys[1] ), key: ownkey}, function(response) {
        //delayed
        setTimeout( function( ){ let j = Object.keys(JSON.parse(response.alluneed)); if(j.length > 1){ localStorage.setItem( "allother", response.alluneed ); } mengdia( response.alluneed ) }, 2000 );
    });
    
    
    extrtactdatafrom.innerHTML = klammsys[0];
    indexforthistab = klammsys[1];
    

    let indexdiv = document.createElement( "div" );
    indexdiv.className = "indind";
    indexdiv.id = "indind";
    indexdiv.draggable = "true";
    indexdiv.ondragend = function(event){
        let onelem = event.target || event.srcElement;
        onelem.style.left = event.pageX.toString()+"px";
        onelem.style.top = event.pageY.toString()+"px";
    };
    indexdiv.innerHTML = "<div class='itti'>🖐️<i>Index signis criticis</i> <span class='shhi' onclick='document.getElementById(\"allperk\").style.display=\"none\"; this.onclick = function(){ if(document.getElementById(\"allperk\").style.display===\"none\"){document.getElementById(\"allperk\").style.display=\"block\";}else{document.getElementById(\"allperk\").style.display=\"none\";} };'> ~s/h~</span><span class='shhi' onclick='let astri = document.getElementById( \"indind\" ).innerHTML;let childWindow = window.open(\"\",\"childWindow\",\"location=yes, menubar=yes, toolbar=yes\");childWindow.document.open();childWindow.document.write(\"<html><head>></head><body>\");childWindow.document.write(astri);childWindow.document.write(\"</body></html>\");childWindow.print();childWindow.close();'>~PDF~</span></div><br>";
    let allperk = document.createElement( "div" );
    allperk.id = "allperk";
    for( let k in klammsys[1] ){
        
        
        let alleeintraegeprodings = klammsys[1][k];
        if( alleeintraegeprodings.length === 0 ){
            continue;
        }

        let perk = document.createElement( "div" );
        perk.className = "perk";
        perk.id = k+"data";
        let uebersch = document.createElement( "div" );
        uebersch.innerHTML = "<b>Type "+klammsys[2][k][0]+"</b><div class='countindices'>Anzahl: "+alleeintraegeprodings.length.toString()+"</div><div class='diagrindices'></div>";
        uebersch.title = klammsys[2][k][1];
        let indexbod = document.createElement( "div" );
        indexbod.id = k;
        indexbod.style.display = "none";
        let indexbodbutton = document.createElement( "span" );
        indexbodbutton.onclick = function( ){ 
            
            if( document.getElementById( k ).style.display === "none" ){
                document.getElementById( k ).style.display = "block";
            } else {
                document.getElementById( k ).style.display = "none";
            }

        };
        indexbodbutton.innerHTML = "~s/h~";
        indexbodbutton.className = "shhi";

        perk.appendChild( uebersch );
        for( let a in alleeintraegeprodings ){
            let oneentr = document.createElement( "div" );
            let idis = k+alleeintraegeprodings[a][1].toString();
            
            //let auschrnitt = originalpage.slice(alleeintraegeprodings[a][1]-5, alleeintraegeprodings[a][1]+5); //not a slice but a better display of surrounding text 


            //oneentr.innerHTML = "<a href='#"+idis+"' onclick='document.getElementById( \""+idis+"\" ).innerHTML =\"&#129044;\";document.getElementById( \""+idis+"\" ).style.color=\"red\";'>"+auschrnitt+" ("+alleeintraegeprodings[a][3]+")</a>";
            oneentr.innerHTML = "<a href='#"+idis+"' onclick='document.getElementById( \""+idis+"\" ).innerHTML =\"&#129044;\";document.getElementById( \""+idis+"\" ).style.color=\"red\";'>"+alleeintraegeprodings[a][3]+"</a>";
            indexbod.appendChild( oneentr );
        }
        perk.appendChild( indexbodbutton );
        perk.appendChild( indexbod );
        allperk.appendChild( perk );
        
    }
    indexdiv.appendChild( allperk );

    /*create nice arabesque background*/
    let ardr = document.createElement( "canvas" );
    ardr.id = "backcan";
    ardr.style.display = "none";
    document.body.appendChild( ardr );
    //setTimeout( function(){displabyrint();}, 2000);

    document.body.appendChild( indexdiv );
}

function displabyrint(){
    console.log("make labyrinth");
    let ardr = document.getElementById( "backcan" );
    let indexdiv = document.getElementById( "indind" );
    let w = indexdiv.offsetWidth;
    let h = indexdiv.offsetHeight;
    console.log("w", w, "h", h);
    ardr.style.width = w.toString()+"px";
    ardr.style.height = h.toString()+"px";
    ardr.width = w.toString();
    ardr.height = h.toString();
    let ardrctx = ardr.getContext("2d");

    for(let i = 1; i < 36; i+=1){
        ardrctx.rotate( (i*10) * Math.PI / 180 );
        ardrctx.strokeStyle = "red";//'#'+Math.round(0xffffff * Math.random()).toString(16);
        ardrctx.fillRect(20, 20, 10, 40);
    }
    

    indexdiv.style.background = "url(" + ardr.toDataURL("image/png") + ")";
    console.log("did labyrinth");
}

contTWOindex( );


