/*  content.js  
  
  the script has the same rights as in a single website
  we can manipulate the dom here as usuly                         
     
*/ 


/*glob*/
let indexforthistab = null;
let ownkey = null;
let ownkey2 = null;
let ownkey3 = null;
let postop = null;
let posleft = null;
let xmlns = "http://www.w3.org/2000/svg";
let optionsCBE = null;

let csvIV = "wf;count;neighborhood\\n";
let csvISC = "";
let csvIL = "";

/*Communication system*/
/******************************************************************************/
browser.runtime.onMessage.addListener(
    function( request, sender, sendResponse) {
        if( request.resp === "nowallare"){
            localStorage.setItem( "allother", response.alluneed );
            mengdia( response.alluneed );
        } else if( request.cmd === "IV" ){
            createIV( );
        } else if( request.cmd === "ISC" ){
            createISC( );
        } else if( request.cmd === "IL" ){
            createIL();
        }
        // Note: Returning true is required here!
        return true; 
    }
);

/*get the options of the cbe*/
browser.runtime.sendMessage( {cmd:"getoptions"}, 
    function( response ){
        optionsCBE = response;
        console.log( optionsCBE );
    }
);

/*return elem, that contains content of webpage / return CONTENT - difficult*/
/******************************************************************************/
function userseltext() {
    let ret = "";
    if( window.getSelection ){
        ret = window.getSelection( ).toString( );
    } else if( document.selection && document.selection.type !== "Control" ){
        ret = document.selection.createRange( ).text;
    }
    return ret;
}

function gettextnodes( ){
    /*JUST GET THE SELECTED TEXT FROM PAGE*/
    let seltita = userseltext( );
    if( seltita !== "" ){
        return seltita;
    }
    
    /*WORK WITH DOM TO GET TEXT DATA*/
    let mainelemwithverymuchtext = document.body;
    /*if( document.location.href.indexOf( "papyri.info" ) !== -1 ){
        mainelemwithverymuchtext = document.getElementById( "edition" );
    } else if(  document.location.href.indexOf( "wikisource.org" ) !== -1 ){
        mainelemwithverymuchtext = document.getElementById( "content" );
    } else if(  document.location.href.indexOf( "malalas.hadw-bw.de" ) !== -1 ){
        mainelemwithverymuchtext = document.getElementsByClassName( "row" );
    }*/

    if( mainelemwithverymuchtext === null ){ //unknown page - search biggest elem within body
        let maxlen = 0;
        for( let e = 0; e < document.body.childNodes.length; e+=1 ){
            if(document.body.childNodes[e].innerText && 
               document.body.childNodes[e].nodeName !== "SCRIPT" && 
               document.body.childNodes[e].nodeName !== "FOOTER" &&
               document.body.childNodes[e].nodeName !== "HEADER" &&
               document.body.childNodes[e].nodeName !== "NAV" &&
               document.body.childNodes[e].nodeName !== "BR" &&
               document.body.childNodes[e].id.indexOf("indind") === -1){
                //console.log(document.body.childNodes[e].nodeName)
                let l = document.body.childNodes[e].innerText.length;
                if(  l > maxlen ){
                    mainelemwithverymuchtext = document.body.childNodes[e]; //top level elements
                    maxlen = l;
                }
            }
        }
    }

    let n, resu=[ ], walkit = document.createTreeWalker( mainelemwithverymuchtext, NodeFilter.SHOW_TEXT, null, true );//SHOW_ELEMENT  SHOW_TEXT
    
    while( n=walkit.nextNode( ) ){
        if( 
            n.parentNode.nodeName !== "OPTION" &&
            n.parentNode.nodeName !== "SCRIPT" && 
            n.parentNode.nodeName !== "FOOTER" &&
            n.parentNode.nodeName !== "HEADER" &&
            n.parentNode.nodeName !== "BR" &&
            n.parentNode.nodeName !== "NAV" ){
            
                resu.push( n );
            
        }
    }
    /*console.log(resu);
    if( resu.length === 0 ){
        n, resu=[ ], walkit = document.createTreeWalker( document.body, NodeFilter.SHOW_ELEMENT, null, true );
        while( n=walkit.nextNode( ) ){
             if(n.nodeName !== "OPTION" &&
                n.nodeName !== "SCRIPT" && 
                n.nodeName !== "FOOTER" &&
                n.nodeName !== "HEADER" &&
                n.nodeName !== "BR" &&
                n.nodeName !== "NAV"){
                resu.push( n );
            }
        }
    }
    */
    let alltext = "";
    for( let ee in resu ){//so finden wir das parentelemnt für den textreichsten container
        let temptext = resu[ee].textContent;
        alltext += temptext;
    }
    //console.log(alltext);
    //console.log(resu);
    /*
    console.log(resu[teakteit].childNodes);
    let elemnew = null;
    for(let t in resu[teakteit].childNodes){
        if(resu[teakteit].childNodes[t].parentElement){
            elemnew = resu[teakteit].childNodes[t].parentElement;
            break;
        }
    }

    n, resu=[], walkit = document.createTreeWalker( elemnew, NodeFilter.SHOW_TEXT, null, true );
    while( n=walkit.nextNode( ) ){
        resu.push( n );
    }*/
    return alltext;
}


/*main function  to create a Index verborum*/
/******************************************************************************/
function createIV( ){
    //check if already inserted
    if( document.body.innerHTML.indexOf( "Index verborum" ) !== -1 ){
        return;
    }

    

    let simplekonkordanz = [{}, null];

    //database
    ownkey2 = document.location.href.split("#")[0]+"iv";//ignore href anchor part of url
    let tempcont = localStorage.getItem( ownkey2 );

    if( tempcont ){
        console.log( "Index verborum for this page from localstorage." );
        simplekonkordanz = JSON.parse( tempcont );
        //setTimeout( function( ){ mengdia( localStorage.getItem( "allother" ) ) }, 2000 );
    } else {
        console.log( "Index verborum computation" );
        
        let binp = normatext( gettextnodes( ), "NFD" );
        if( optionsCBE.option3100.disambidiak ){
            binp = disambiguDIAkritika( binp );
        }
        if( optionsCBE.option3100.disambidashes ){
            binp = disambiguadashes( binp );
        }
        if( optionsCBE.option3100.uv ){
            binp = deluv( binp );
        }
        if( optionsCBE.option3100.ji ){
            binp = delji( binp );
        }   
        if( optionsCBE.option3100.womarkup ){
            binp = delmakup( binp );
        }
        
        
        if( optionsCBE.option3100.elisions ){
            binp = ExpandelisionText( binp );
        }
        if( optionsCBE.option3100.alphapriv ){
            binp = normatext( AlphaPrivativumCopulativumText( normatext( binp, "NFC" ) ), "NFKD" );
        }
        if( optionsCBE.option3100.delnumber ){
            binp = delnumbering( binp );
        }
        if( optionsCBE.option3100.hyph ){
            binp = Trennstricheraus( disambiguadashes( binp ).split( " " ) ).join( " " );
        }
        if( optionsCBE.option3100.delpunktu ){
            binp = delinterp( binp );
        }
        if( optionsCBE.option3100.delnewl ){
            binp = delumbrbine( binp );
        }

        if( optionsCBE.option3100.basictextnorm ){
            binp = basClean( binp );
        } else if( optionsCBE.option3100.delall ){
            binp = delall( binp );
        } else if( optionsCBE.option3100.combi3 ){ 
            binp = GRvorbereitungT( binp );
        } else {
            if( optionsCBE.option3100.iota ){
                binp = iotasubiotoad( binp );
            }
            if( optionsCBE.option3100.sigma ){
                binp = sigmaistgleich( binp );
            }
            if( optionsCBE.option3100.deldiak ){
                binp = deldiak( binp );
            }
            if( optionsCBE.option3100.unkown ){
                binp = delunknown( binp );
            }
            if( optionsCBE.option3100.ligatu ){
                binp = delligaturen( binp );
            }
            if( optionsCBE.option3100.eqcase ){
                binp = delgrkl( binp );
            }
            if( optionsCBE.option3100.delbrackets ){
                binp = delklammern( binp );
            }
        }

        if( optionsCBE.option3100.transllagr ){
            binp = TranslitLatinGreekLetters( binp );
        } else if( optionsCBE.option3100.translgrla ){
            binp = TraslitAncientGreekLatin( binp );
        }
        
        if( optionsCBE.option3100.nfdbutt ){
            binp = normatext( binp, "NFD" );
        } else if( optionsCBE.option3100.nfcbutt ){
            binp = normatext( binp, "NFC" );
        } else if( optionsCBE.option3100.nfkdbutt ){
            binp = normatext( binp, "NFKD" );
        } else if( optionsCBE.option3100.nfkcbutt ){
            binp = normatext( binp, "NFKC" );
        } 

        let aDaaA = umbrtospace(binp).split( " " );
        //let aDaaA = delall( Trennstricheraus( normatext( gettextnodes( ), analysisNormalform ).split( " " ) ).join( " " ) ).split( " " );
        let lenofall = len( aDaaA );
        for( let aw = 0; aw < lenofall; aw+=1){ 
            let cleanedword = aDaaA[ aw ].trim( );
            if( cleanedword !== "" && cleanedword.length > 1 && isNaN(parseInt(cleanedword))){
                if( simplekonkordanz[0][ cleanedword ] ){
                    simplekonkordanz[0][ cleanedword ] += 1;
                } else {
                    simplekonkordanz[0][ cleanedword ] = 1;
                }
            }
        }
        simplekonkordanz[1] = fnb( binp );
        console.log(simplekonkordanz)
        //localStorage.setItem( ownkey2, JSON.stringify( simplekonkordanz ) );
    }

    /*communication with background and getting of other tab data*/
    browser.runtime.sendMessage( {cmd:"insertIV", payload:JSON.stringify( simplekonkordanz ), key: ownkey2 }, 
        function( response ){
            //delayed
            //setTimeout( function( ){ 
                if( response.resp === "nowallareIV" ){
                    let j = Object.keys( JSON.parse( response.alluneed ) ); 
                    if( j.length > 1 ){ 
                        localStorage.setItem( "allotherIV", response.alluneed ); 
                    } 
                    //console.log( "alleintabnun: ", localStorage.getItem( "allotherIV" ) );
                }
            //}, 500 );
        }
    );
    

    let other = JSON.parse(localStorage.getItem( "allotherIV" ));
    console.log(other);
    let sorthist = [];
    for( let k in simplekonkordanz[0] ){
        sorthist.push( [k, simplekonkordanz[0][k]] );
    }
    sorthist.sort( function(a, b) { return b[1] - a[1]; } );

    let indexdiv = document.createElement( "div" );
    indexdiv.id = "indind2";
    //indexdiv.draggable = "true";
    /*indexdiv.ondragend = function(event){
        let onelem = event.target || event.srcElement;
        onelem.style.left = event.pageX.toString()+"px";
        onelem.style.top = event.pageY.toString()+"px";
    };*/
    indexdiv.innerHTML = "\
    <div class='itti'>\
    <span id='hiha1'>🖐️</span><i>Index verborum</i> \
    <span class='shhi' \
        onclick='\
            if(document.getElementById(\"histo\").style.display===\"none\"){\
                document.getElementById(\"histo\").style.display=\"block\";\
            }else{\
                document.getElementById(\"histo\").style.display=\"none\";\
            }\
        '>&#11021;</span>\
    <span class='shhi' \
        onclick='let astri = document.getElementById( \"indind2\" ).innerHTML;\
        let childWindow = window.open(\"\",\"childWindow\",\"location=yes, menubar=yes, toolbar=yes\");\
        childWindow.document.open();\
        childWindow.document.write(\"<html><head></head><body>\");\
        childWindow.document.write(astri);\
        childWindow.document.write(\"</body></html>\");\
        childWindow.print();childWindow.close();'>PDF </span>\
    <span onclick='getcsv1();'>CSV</span></div>";

    /*first text histogramm*/
         let indexbod = document.createElement( "div" );
        indexbod.id = "histo";
        cou = 1;
        for( let u in sorthist ){
            let oneentr = document.createElement( "div" );
            oneentr.style.color = '#'+Math.round(0xffffff * Math.random()).toString(16);
            oneentr.style.borderBottom = "1px solid black";
            let addother = " ";
            for( let kk in other ){
                if( kk !== ownkey2 ){
                    let lk =  JSON.parse( other[kk] );
                    if( lk[sorthist[ u ][ 0 ]] ){
                        addother += " <span title='"+kk+"'>("+lk[0][sorthist[ u ][ 0 ]]+") </span>";
                    }
                }
            }
            let addnachb = "";
            if(simplekonkordanz[1][sorthist[ u ][ 0 ] ]){
                //console.log(simplekonkordanz[1][sorthist[ u ][ 0 ] ], sorthist[ u ][ 0 ] );
                for( let t in simplekonkordanz[1][sorthist[ u ][ 0 ] ][0] ){
                    //console.log(t);
                    addnachb += t +" ("+ simplekonkordanz[1][sorthist[ u ][ 0 ]][0][t].toString() + "),";
                }
            }
            let csvadd = "";
            if( addnachb !== "" ){
                oneentr.innerHTML = "<b>"+cou.toString( ) + "    "+ sorthist[ u ][ 0 ] + " ("+sorthist[ u ][ 1 ]+") </b> Nachbarschaft: "+addnachb+" "+addother;        
            } else {
                oneentr.innerHTML = "<b>"+cou.toString( ) + "    "+ sorthist[ u ][ 0 ] + " ("+sorthist[ u ][ 1 ]+") </b>  "+addother;
            }
            csvadd = sorthist[ u ][ 0 ]+";"+sorthist[ u ][ 1 ]+";"+addnachb+"\\n"
            csvIV += csvadd;
            indexbod.appendChild( oneentr );
            cou+=1;
        }

    indexdiv.appendChild( indexbod );

    /*second text historam using the shallow neighborhood*/
    let indexbodz = document.createElement( "div" );
        indexbodz.id = "histoZ"; //alphabetisch nicht nach Häufigkeit sortiert

    indexdiv.appendChild( indexbodz );
    document.body.appendChild( indexdiv );

    /*addinteraction*/
    let scircra = document.createElement( "script" );
    scircra.innerHTML = "function dodownit( contentof, nameoffile, type ){\
    let af = new Blob( [ contentof ], {type: type} );\
    let theIE = false || !!document.documentMode;\
    if ( theIE ){\
        window.navigator.msSaveOrOpenBlob( af, nameoffile );\
    } else {\
        let alink = document.createElement( 'a' );\
        alink.href = URL.createObjectURL( af );\
        alink.download = nameoffile;\
        document.body.appendChild( alink );\
        alink.click( );\
        document.body.removeChild( alink );\
    }\
}let dtomove = document.getElementById('hiha1'); dtomove.draggable = 'true';dtomove.ondragend = function(event){let onelem = event.target.parentElement.parentElement || event.srcElement.parentElement.parentElement; onelem.style.left = event.pageX.toString()+'px';onelem.style.top = event.pageY.toString()+'px';}; let csvIV=\""+csvIV+"\"; function getcsv1(){ dodownit( csvIV, 'IV.csv', 'text/csv' );}";
    document.body.appendChild( scircra );
    //console.log(simplekonkordanz);
}
/*INDEX LOCORUM*/
/******************************************************************************/
function createIL(){
    console.log("IndexLocorumCreate");
    if( document.body.innerHTML.indexOf( "Index locorum" ) !== -1 ){
        return;
    }
    

    let loco = null;

    //Database
    ownkey3 = document.location.href.split("#")[0]+"il";//ignore href anchor part of url
    let tempcont = localStorage.getItem( ownkey3 );

    if( tempcont ){
        console.log( "Index locorum for this page from localstorage." );
        loco = JSON.parse( tempcont );
    } else {
        console.log( "Index locorum computation" );
        let aDaaA = Trennstricheraus( normatext( gettextnodes( ), analysisNormalform ).split( " " ) );
        //console.log(aDaaA.join(" "));
        loco = GENCTSURN2( aDaaA.join(" ") );
        //localStorage.setItem( ownkey3, JSON.stringify( loco ) );
        console.log(loco);
    }

    /*communication with background and getting of other tab data*/
    browser.runtime.sendMessage( {cmd:"insertIL", payload:JSON.stringify( loco ), key: ownkey3 }, 
        function( response ){
            //delayed
            //setTimeout( function( ){ 
                if( response.resp === "nowallareIL" ){
                    let j = Object.keys( JSON.parse( response.alluneed ) ); 
                    if( j.length > 1 ){ 
                        localStorage.setItem( "allotherIL", response.alluneed ); 
                    } 
                    //console.log( "alleintabnun: ", localStorage.getItem( "allotherIV" ) );
                }
            //}, 500 );
        }
    );

    let otherloco = JSON.parse( localStorage.getItem( "allotherIL" ) );
    //console.log(otherloco);
    //DISPLAY OF RESULTS
    let indexdiv = document.createElement( "div" );
    indexdiv.id = "indind3";
    /*indexdiv.draggable = "true";
    indexdiv.ondragend = function(event){
        let onelem = event.target || event.srcElement;
        onelem.style.left = event.pageX.toString()+"px";
        onelem.style.top = event.pageY.toString()+"px";
    };*/
    indexdiv.innerHTML = "<div class='itti'><span id='hiha3'>🖐️</span><i>Index locorum</i> <span class='shhi' onclick='document.getElementById(\"misto\").style.display=\"none\"; this.onclick = function(){ if(document.getElementById(\"misto\").style.display===\"none\"){document.getElementById(\"misto\").style.display=\"block\";}else{document.getElementById(\"misto\").style.display=\"none\";} };'>&#11021;</span><span class='shhi' onclick='let astri = document.getElementById( \"indind3\" ).innerHTML;let childWindow = window.open(\"\",\"childWindow\",\"location=yes, menubar=yes, toolbar=yes\");childWindow.document.open();childWindow.document.write(\"<html><head></head><body>\");childWindow.document.write(astri);childWindow.document.write(\"</body></html>\");childWindow.print();childWindow.close();'>PDF </span><span onclick='getcsv3();'>CSV</span></div>";
         let indexbod = document.createElement( "div" );
        indexbod.id = "misto";
        cou = 0;
        
        for( let u in loco ){
            let coucou = 1;
            let curcol = '#'+Math.round(0xffffff * Math.random()).toString(16);
            for( let w in loco[u] ){
                let oneentr = document.createElement( "div" );
                oneentr.style.color = curcol;
                let adddtheotherpages = " ";
                for( let x in otherloco ){
                    if( x !== ownkey3 ){
                        let ggg = JSON.parse(otherloco[x]);
                        for( let y in ggg ){
                            for( let z in ggg[y] ){
                                console.log(ggg[y][z][1], loco[u][w][1], ggg[y][z][1] === loco[u][w][1] );
                                if( ggg[y][z][1] === loco[u][w][1] ){
                                    adddtheotherpages+= "<span title='"+x+"'>&#9755;<span>";
                                }
                            }
                        }
                    }
                }
                if( coucou === 1 ){
                    cou+=1;
                    oneentr.className = "iscshown"+cou.toString();
                    if( loco[u].length > 1 ){
                        oneentr.innerHTML = "<b>"+cou.toString( ) + "</b>    "+ loco[u][w][1] + " "+loco[u][w][2]+" "+loco[u][w][3].join(" ")+"  <span name='iscnot"+cou.toString()+"' onclick='shownotshown(this);'>&#8628;</span>"+adddtheotherpages;
                    } else {
                        oneentr.innerHTML = "<b>"+cou.toString( ) + "</b>    "+ loco[u][w][1] + " "+loco[u][w][2]+" "+loco[u][w][3].join(" ")+adddtheotherpages;
                    }
                } else {
                    oneentr.className = "iscnot"+cou.toString();
                    oneentr.style.display = "none";
                    //oneentr.innerHTML = "<b>"+cou.toString( ) + "</b>    "+ loco[u][w][1] + " "+loco[u][w][2]+" "+loco[u][w][3].join(" ")+"  <span onclick=\'shownotshown(\"iscnot"+cou.toString()+"\");\'>Hide</span>"+adddtheotherpages;
                    oneentr.innerHTML = "<b>- </b>    "+ loco[u][w][1] + " "+loco[u][w][2]+" "+loco[u][w][3].join(" ")+" "+adddtheotherpages;
                }
                indexbod.appendChild( oneentr );
                coucou+=1;
            }
        }

    indexdiv.appendChild( indexbod );
    document.body.appendChild( indexdiv );

    /*add interaction*/
    let scircra = document.createElement( "script" );
    scircra.innerHTML = 'function shownotshown( aaa ){let na = aaa.getAttribute("name"); let notvis = document.getElementsByClassName( na );for( let n in notvis ){if(notvis[n].style){if( notvis[n].style.display == "block" ){notvis[n].style.display = "none";} else {notvis[n].style.display = "block";}}}} let dtomove3 = document.getElementById("hiha3"); dtomove3.draggable = "true";dtomove3.ondragend = function(event){let onelem = event.target.parentElement.parentElement || event.srcElement.parentElement.parentElement; onelem.style.left = event.pageX.toString()+"px";onelem.style.top = event.pageY.toString()+"px";};function getcsv3(){alert("not imple");}';
    document.body.appendChild( scircra );
}



/* Index signorum criticorum * /
/******************************************************************************/
function createISC( ){
    //check if already inserted
    if( document.body.innerHTML.indexOf( "Index signorum criticorum" ) !== -1 ){
        /*if( originalpage.indexOf( "diag" ) === -1 ){
            setTimeout( function( ){ mengdia( localStorage.getItem( "allotherISC" ) ) }, 2000 );
        }*/
        return;
    }
    
    
    let klammsys = [[],{}];
    let secondtimenone = false;
    ownkey = document.location.href.split("#")[0];//ignore href anchor part of url
    let tempcont = localStorage.getItem( ownkey );
    if( tempcont ){
        console.log( "Index signorum criticorum for this page from localstorage." );
        klammsys = JSON.parse( tempcont );
        //setTimeout( function( ){ mengdia( localStorage.getItem( "allotherISC" ) ) }, 500 );
    } else {
        console.log( "Index signorum criticorum computation" );
        let rw = gettextnodes( );
        rw = normatext( Trennstricheraus( normatext( rw, analysisNormalform ).split( " " ) ).join(" "), dispnormalform ); //need display form
        klammsys = hervKLAMMSYS( rw );
        //localStorage.setItem( ownkey, JSON.stringify( klammsys ) );
    }
    
    browser.runtime.sendMessage( {cmd:"insertISC", payload:JSON.stringify( klammsys[1] ), key: ownkey}, 
        function(response) {
            //delayed
            //setTimeout( 
            //    function( ){ 
                    if( response.resp === "nowallare" ){
                                let j = Object.keys( JSON.parse( response.alluneed ) ); 
                                if( j.length > 1 ){ 
                                    localStorage.setItem( "allotherISC", response.alluneed ); 
                                } 
                                mengdia( response.alluneed );
                    }
            //    }, 
            //500 );
        }
    );
    
    
    
    indexforthistab = klammsys[1];
    

    let indexdiv = document.createElement( "div" );
    indexdiv.id = "indind";
    /*indexdiv.draggable = "true";
    indexdiv.ondragend = function(event){
        let onelem = event.target || event.srcElement;
        posleft = event.pageX;
        postop = event.pageY;
        onelem.style.left = posleft.toString()+"px";
        onelem.style.top = postop.toString()+"px";
    };*/
    indexdiv.innerHTML = "<div class='itti'><span id='hiha2'>🖐️</span><i>Index signorum criticorum</i> <span class='shhi' onclick='document.getElementById(\"allperk\").style.display=\"none\"; this.onclick = function(){ if(document.getElementById(\"allperk\").style.display===\"none\"){document.getElementById(\"allperk\").style.display=\"block\";}else{document.getElementById(\"allperk\").style.display=\"none\";} };'>&#11021;</span><span class='shhi' onclick='let astri = document.getElementById( \"indind\" ).innerHTML;let childWindow = window.open(\"\",\"childWindow\",\"location=yes, menubar=yes, toolbar=yes\");childWindow.document.open();childWindow.document.write(\"<html><head></head><body>\");childWindow.document.write(astri);childWindow.document.write(\"</body></html>\");childWindow.print();childWindow.close();'>PDF </span></div>";
    let allperk = document.createElement( "div" );
    allperk.id = "allperk";
    for( let k in klammsys[1] ){
        
        
        let alleeintraegeprodings = klammsys[1][k];
        if( alleeintraegeprodings.length === 0 ){
            continue;
        }

        let perk = document.createElement( "div" );
        perk.className = "perk";
        perk.style.color = '#'+Math.round(0xffffff * Math.random()).toString(16);
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
        indexbodbutton.innerHTML = "&#11021;";
        indexbodbutton.className = "shhi";

        perk.appendChild( uebersch );
        for( let a in alleeintraegeprodings ){
            let oneentr = document.createElement( "div" );
            

            //oneentr.innerHTML = "<a href='#"+idis+"' onclick='document.getElementById( \""+idis+"\" ).innerHTML =\"&#129044;\";document.getElementById( \""+idis+"\" ).style.color=\"red\";'>"+auschrnitt+" ("+alleeintraegeprodings[a][3]+")</a>";
            oneentr.innerHTML = "<span onclick=''>"+alleeintraegeprodings[a][3]+" ("+alleeintraegeprodings[a][2]+")"+"</span>";
            
            indexbod.appendChild( oneentr );
        }
        perk.appendChild( indexbodbutton );
        perk.appendChild( indexbod );
        allperk.appendChild( perk );
        
    }
    indexdiv.appendChild( allperk );

    /*create nice arabesque background*/
    //let ardr = document.createElement( "canvas" );
    //ardr.id = "backcan";
    //ardr.style.display = "none";
    //document.body.appendChild( ardr );
    //setTimeout( function(){displabyrint();}, 2000);

    document.body.appendChild( indexdiv );

    /*addinteraction*/
    let scircra = document.createElement( "script" );
    scircra.innerHTML = "let dtomove2 = document.getElementById('hiha2'); dtomove2.draggable = 'true';dtomove2.ondragend = function(event){let onelem = event.target.parentElement.parentElement || event.srcElement.parentElement.parentElement; onelem.style.left = event.pageX.toString()+'px';onelem.style.top = event.pageY.toString()+'px';};";
    document.body.appendChild( scircra );
}



/*COMPARISON / Diagram*/
/******************************************************************************/
/*SVG Globals*/

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
                //console.log(t);
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


/*Display shuggar*/
/******************************************************************************/
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
