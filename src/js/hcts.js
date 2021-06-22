/*  
    CTS PROJECT FRONTEND

    
    SUB: PERKILL & KAPERN & REFEXT 

    URLS:
    xxx/hcts.html
    (perkill: input multi text buidl cts xml)
    xxx/hcts.html?GetCapabilities(&urn=)
    (cts core: see GetCapabilities Manual)
    xxx/hcts.html?GetPassage&urn=
    (cts core: see GetPassage Manual)
    xxx/hcts.html?CTSproxy
    (refext: Proxy to add cts urn to any page, tllr example, deprecated)
    xxx/hcts.html?REFtoCTSURN
    (refext: example testing)

    
    # 2016-2019 CTS Project Frontend, Prof. Charlotte Schubert, Alte Geschichte Leipzig
    # Function: CTS repository request and interaction

    #   
    # GPLv3 copyrigth
    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the GNU General Public License as published by
    # the Free Software Foundation, either version 3 of the License, or
    # (at your option) any later version.
    # This program is distributed in the hope that it will be useful,
    # but WITHOUT ANY WARRANTY; without even the implied warranty of
    # MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    # GNU General Public License for more details.
    # You should have received a copy of the GNU General Public License
    # along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

"use strict";

/***************************glob lets *************************************/
let countDOK = 0;
let workingtitle = "";
let wordstoMARK = null;
let AbkKeys = null; 
let langVonAbkKeys = null;
let treeGram = null;
let CTSshowlevel = 2; //0 first hypotheses, 1 second Hypothesis, 2 only show fill CTS URNS 
let subcorpselection = [];

/***************************autosave DB related****************************/
/**************************************************************************/
function writeTOautosave( ){
   //localStorage.setItem( workingtitle, JSON.stringify( document.getElementById( "all").children ));
    //kann sein, das so nicht die INhalte gespeichert werden können
}

function readFROMautosave( ){//einmalig beim aufruf der Seite
    //document.getElementById( "all").innerHTML = localStorage.getItem( workingtitle );
}

function saveNERtoHEURISTIC( NER, astring ){
    localStorage.setItem( NER,  localStorage.getItem( NER ) +";;;"+ astring );
}

function getNERHeur( NER ){
    localStorage.getItem( NER );
}

/* XML TEI XML TEI XML TEI XML TEI XML TEI */
/*EXPORT THE GIVEN INPUT*/
function exportDIED(){
    let lang = document.getElementById( "digisprachen").value.split(","); //['gr', 'ger', 'de'];
    let autor = document.getElementById( "auttua" );
    let autselected = autor.options[ autor.selectedIndex ].value;
    let werk = document.getElementById( "werrew" );
    let werselected = werk.options[ werk.selectedIndex ].value;
    
	let nondigitaltitle = abkAW[ autselected ][ 2 ][ werselected ];//'Perikles Vita';
	let nondigitalauthor = abkAW[ autselected ][ 0 ];//'Plutarch'
	let sponsors = document.getElementById( "digispon").value.split(",");//['Affe', 'Giraffe', 'Laffe'];
	let editors = document.getElementById( "digied").value.split(",");//['Okapi', 'Tenreck', 'Spoc'];
	let copycopy = document.getElementById( "digicopy").value;//'Copyright 2016, ALL';
	let descdesc = document.getElementById( "digibesch").value;//'Perikle Vital, Ediion von grundlegende, Zählung grundlegend';
	let textlang = lang[0];
    let quelle = autselected +" "+ werselected;//"Plut. Per.";

    //console.log( autselected, werselected, lang, autselected, werselected, nondigitaltitle, nondigitalauthor, sponsors, editors, copycopy, descdesc, textlang, quelle);

    let druckeUNDdokumente = document.getElementById( "inputtexts");
    for(let dud = 0; dud < druckeUNDdokumente.children.length; dud++){
        let drudru = druckeUNDdokumente.children[ dud ].children[0];
        let nondigitaleditor = drudru.children[0].value;
        let nondigitaleditionname = drudru.children[1].value;
        let nondigitaleditionerschort = drudru.children[2].value;
        let nondigitaleditionerschdat = drudru.children[3].value;
        //console.log(nondigitaleditor, nondigitaleditionname, nondigitaleditionerschort, nondigitaleditionerschdat);
        //dokumente abarbeiten
        for( let dokdok = 1; dokdok < druckeUNDdokumente.children[ dud ].children.length; dokdok++ ){
            let tetettete = druckeUNDdokumente.children[ dud ].children[ dokdok ].value;
            //console.log("text", tetettete);
            //pro dokument schreiben
            tei5xml( autselected, werselected, lang, nondigitaltitle, nondigitalauthor, sponsors, editors, copycopy, descdesc, textlang, quelle, tetettete, nondigitaleditor, nondigitaleditionname, nondigitaleditionerschort, nondigitaleditionerschdat );
        }
    }
}


function tei5xml( autselected, werselected, lang, nondigitaltitle, nondigitalauthor, sponsors, editors, copycopy, descdesc, textlang, quelle, tetettete, nondigitaleditor, nondigitaleditionname, nondigitaleditionerschort, nondigitaleditionerschdat ){

	//input to the xml
	//let lang = ['gr', 'ger', 'de'];
	//let nondigitaltitle = 'Perikles Vita';
	//let nondigitalauthor = 'Plutarch'
	//let sponsors = ['Affe', 'Giraffe', 'Laffe'];
	//let editors = ['Okapi', 'Tenreck', 'Spoc'];
	//let copycopy = 'Copyright 2016, ALL';
	//let descdesc = 'Perikle Vital, Ediion von grundlegende, Zählung grundlegend';
	//let textlang = 'gr';
    //let quelle = "Plut. Per.";

	//array to xml tag string
	editors.forEach( BIeditor ); //or filter()
	sponsors.forEach( BIsponsor );
	lang.forEach( BIlang );

	//getting the textdata
	//let textelem = document.getElementById( "inputtext");
	let dertext = tetettete.normalize("NFD");// textelem.value.normalize("NFD");

    //construct the URN URN URN
    let theURNbase = "URN:CTS:"+ document.getElementById( "nssn").value + ":" + autselected + ":" + werselected +":";
    let DOCS = wSHA256( dertext + nondigitaleditor + nondigitaleditionname + nondigitaleditionerschort + nondigitaleditionerschdat );
	//composing the tei xml into array 
	//header and constant tags
	let thexml = [
	'<?xml version="1.0" encoding="utf-8"?>',
	'<TEI xmlns="http://www.tei-c.org/ns/1.0" xmlns:tei="http://www.tei-c.org/ns/1.0">',
	'<teiHeader>',
		'<fileDesc>',
			'<titleStmt>',
				'<title>'+nondigitaltitle+'</title>',
				'<author>'+nondigitalauthor+'</author>',
				sponsorsST,
				editorsST,
			'</titleStmt>',
			'<publicationStmt>',
				'<p>'+copycopy+'</p>',
			'</publicationStmt>',
			'<sourceDesc>',
				'<bibl>',
                '<title>'+ nondigitaleditionname +'</title>',
                '<author>'+nondigitaleditor+'</author>',
                '<publisher></publisher>',
                '<pubPlace>'+nondigitaleditionerschort+'</pubPlace>',
                '<date>'+nondigitaleditionerschdat+'</date>', 
                '</bibl>',
			'</sourceDesc>',
		'</fileDesc>',
		'<profileDesc>',
			'<langUsage>',
				langST,
			'</langUsage>',
		'</profileDesc>',
        '<encodingDesc>',
        '<refsDecl>',
        'book:chapter:...', //01 und als schalter
        '</refsDecl>',
        '</encodingDesc>',
	'</teiHeader>',
	'<text>',
		'<body xml:lang="'+textlang+'">'
	];
    //if section in der die 	

    let zaehlungSel = document.getElementById( "cononischehierarchie" );
    let zaehlung = zaehlungSel.options[ zaehlungSel.selectedIndex ].value;
	//text section of the xml
	//Plut. Per. Buch (unbezeichnet) chapter section
	//PAGINIERUNGS DEFINITION 1 (wie Bekker??? - aber spezielle Form)
	//def: chapter ist Zahl und Punkt
	//def: darin Eckige KLammern und Zahl ist section
	let chapters; 
    if(zaehlung == 1){ //bekker
        chapters = dertext.split(/[0-9]+\./);// /[0-9]+\\./);
    }
	let thefirstchaptersign; 
    if(zaehlung == 1){
        thefirstchaptersign = dertext.match(/[0-9]+\./)[0];
    }
	let chaptercounter  = parseInt( thefirstchaptersign.split(".")[0] ); //t
	let wordcount = 1;
	let titelofbook = chapters[0];


	//PAGINIERUNGSDEFINITION 2 Stephanus (Plato)
	//Platon, Phaid. 100a3–101b7 bezeichnet folgendes Textstück: Platon, Dialog Phaidon, Stephanus-Seite 100, Abschnitt a, Zeile 3 bis Stephanus-Seite 101, Abschnitt b, Zeile 7.
	//Seite, in der Höhe (Seitenbereich A B C D E), Zeile im Bereich
	
	//paginierung 3 Bekker (Aristoteles)
	//100a2 Seite d. Schrift, Spalte (a od. b), Zeile der Spalte

	//causbon paginierung athenaos
	//Casaubon: After the reference to the book number, this system includes an arabic numeral referring to the page of the edition of Casaubon followed by a letter (a-f) corresponding to the subdivision of the page into sections of about ten lines of text (e.g., 12.530d).

	//Kaibel paginierung athenaos
	//Kaibel: In this system each book is logically divided into paragraphs corresponding to units of sense and the paragraphs are referred to with arabic numerals whose numeration starts again at the beginning of each book (e.g., 12.40).
 
	//steuerletiablen für das leidener klammersystem
	let expansionAbre = false; //() <expan>
	let editorkorrektur = false; //<> <corr> vom Editor korrigierter Fehler / Veränderung
	let editorergaenzung = false;//[] <add>
	let editortilgung = false;//{} <del type="Editor Tilgung">
	let testzeugentilgung = false; //[[]] <del type="Zeugen Tilgung">
	//http://wwwuser.gwdg.de/~dwernin/drafts/Werning-TEI_im_Rubensohn_Projekt.pdf
	//http://www.gnomon.ku-eichstaett.de/LAG/proseminar/Seminarreader/lm_pg_38686.html
	
	for(let c = 1; c < chapters.length; c++){
        if(chapters[ c ] == ""){
            continue;
        }
		let sections; 
        if(zaehlung == 1){ //bekker
           sections = chapters[ c ].split( /\[[0-9]+\]/ ); //section always starts from 1
        }
		thexml.push( '<div n='+chaptercounter+' cs="'+ wSHA256( chapters[ c ] ) +'" type="chapter">' );
        let countsec = 0;
		for(let s = 0; s < sections.length; s++){
           /* if( sections[ s ] == "" ){
                continue;
            }*/
			let secnum = (countsec+1);
            
            if(s > 0){
                countsec++;
			    thexml.push( '<div n='+secnum+' cs="'+ wSHA256( sections[ s ] ) +'" type="section" id="'+quelle+" "+chaptercounter+"."+secnum+'">' );
            } else {
                thexml.push( '<div n='+secnum+' cs="'+ wSHA256( sections[ s ] ) +'" type="sectionhead" id="'+quelle+" "+chaptercounter+"."+secnum+'">' )
            }
			let lines = sections[ s ].split( "\n" );
			if( titelofbook.length > 0 ){
				thexml.push( '<head n="title" cs="'+ wSHA256( titelofbook ) +'">'+ titelofbook +'</head>');
				titelofbook = "";
			}
			for( let l = 0; l < lines.length; l++){
				//
                if(lines[ l ] == "" ){
                    continue;
                }
				let linenum = l+1;
				thexml.push( '<l n="'+linenum+'" cs="'+ wSHA256( lines[ l ] ) +'">' );
				let words = lines[ l ].split(" ");
				let wordstring = "";
				for( let w = 0; w < words.length; w++){
					if(words[ w ].length > 0){
						let wordtext = words[ w ];
						let klammernA = '';
						let klammernB = '';
						if( wordtext.indexOf("(") != -1 ){
							expansionAbre = true;
						}
						if( wordtext.indexOf("<") != -1 ){
							editorkorrektur = true;
						}
						if( wordtext.indexOf("[") != -1 && wordtext.indexOf("[[") == -1){
							editorergaenzung = true;
						}
						if( wordtext.indexOf("{") != -1 ){
							editortilgung = true;
						}
						if( wordtext.indexOf("[[") != -1 ){
							testzeugentilgung = true;
						}
						//prepare tags für klammern
						if( expansionAbre ){
							klammernA += '<expan>';
							klammernB = '</expan>' + klammernB;
						}
						if( editorkorrektur ){
							klammernA += '<corr>';
							klammernB = '</corr>' + klammernB;
						}
						if( editorergaenzung ){
							klammernA += '<add>';
							klammernB = '</add>' + klammernB;
						}
						if( editortilgung ){
							klammernA += '<del type="Editortilgung">';
							klammernB = '</del>' + klammernB;
						}
						if( testzeugentilgung ){
							klammernA += '<del type="Zeugentilgung">';
							klammernB = '</del>' + klammernB;
						}
						wordstring += '<w n="'+wordcount+'">'+ klammernA + wordtext + klammernB +' </w>';
						wordcount++;
						if( wordtext.indexOf(")") != -1 ){
							expansionAbre = false;
						}
						if( wordtext.indexOf(">") != -1 ){
							editorkorrektur = false;
						}
						if( wordtext.indexOf("]") != -1 && wordtext.indexOf("]]") == -1){
							editorergaenzung = false;
						}
						if( wordtext.indexOf("}") != -1 ){
							editortilgung = false;
						}
						if( wordtext.indexOf("]]") != -1 ){
							testzeugentilgung = false;
						}
					}
				}
				thexml.push( wordstring );
				thexml.push('</l>' );
			}
			thexml.push( '</div>' );
		}
		thexml.push( '</div>' );
		chaptercounter++; 
	}
	
	//end body, text and TEI Tag END XML
	thexml.push( '</body>' );
	thexml.push( '</text>' );
	thexml.push( '</TEI>' );

    let theresult = thexml.join("\n");

	if( document.getElementById( "chdied" ).checked ){
	    //den string per xmlrequest an den server speichern da / php saver / on pages subordner / encodeURIComponent(theresult);
    }
    if( document.getElementById( "chxml" ).checked ){
        //window.location = "data:application/octet-stream," + encodeURIComponent(theresult);
        speicherntues( theURNbase+DOCS+".xml", encodeURIComponent(theresult) );
    }
    if( document.getElementById( "choffdied" ).checked ){
	    //xml speichern, dann zip mit Ordner und request.html machen
        //zip schicken
        //vielleicht ist es besser dann die xmls in den Objekt store zu packen
    }
	
}

/* XML HELPER ARRAY TO XML TAGS OF SAME TYPE */
let editorsST = '';
function BIeditor( a ){
	return editorsST += '<editor>'+a+'</editor>\n';
}
let sponsorsST = '';
function BIsponsor( a ){
	return sponsorsST += '<sponsor>'+a+'</sponsor>\n';
}
let langST = '';
function BIlang( a ){
	let langlangname = 'unbek';
	if( a == "gr" ){
		langlangname = "Griechsich";
	} else if( a == "de" ){
		langlangname = "Deutsch";
	} else if( a == "en" ){
		langlangname = "Englisch";
	} else {	
		langlangname = "Esperanto";
	}
	return langST += '<language ident="'+a+'">'+langlangname+'</language>\n';
}

/*helper HELPER HELPER STR AND HTML AND STRUCTURE AND NUMBERS*/
function ishtml( aword ){
    //console.log(aword);
    if( aword.indexOf( "<" ) != -1 || aword.indexOf( ">" ) != -1 ){
        return true;
    }
    return false;

}

function replaceLastofwith( astring, off, withh ){
    return astring.split("").reverse().join("").replace( off, withh ).split("").reverse().join("");
}


function capitali( astring ) {
    return astring.charAt(0).toUpperCase() + astring.slice(1).toLowerCase();
}

function roman_to_Int(str1) {
    if(str1 == null) return -1;
    let num = char_to_int(str1.charAt(0));
    let pre, curr;

    for(let i = 1; i < str1.length; i++){
        curr = char_to_int(str1.charAt(i));
        pre = char_to_int(str1.charAt(i-1));

        if(curr == -1){
            return -1;
        }
        if(curr <= pre){
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    }

    return num;
}

function char_to_int(c){
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
}

function getpositiononpage( element ){
  if( element.nodeType ){
	let rect = element.getBoundingClientRect();
	let elementLeft,elementTop; //x F y
	let scrollTop = document.documentElement.scrollTop?
                document.documentElement.scrollTop:document.body.scrollTop;
	let scrollLeft = document.documentElement.scrollLeft?                   
                 document.documentElement.scrollLeft:document.body.scrollLeft;
	elementTop = rect.top+scrollTop;
	elementLeft = rect.left+scrollLeft;
	return [elementTop, elementLeft];
  } else {
  return false;
  }
}

function dodownit( contentof, nameoffile, type ){
    let af = new Blob( [ contentof ], {type: type} );
    let theIE = false || !!document.documentMode;
    if ( theIE ){
        window.navigator.msSaveOrOpenBlob( af, nameoffile );
    } else {
        let alink = document.createElement( 'a' );
        alink.href = URL.createObjectURL( af );
        alink.download = nameoffile;
        document.body.appendChild( alink )
        alink.click( );
        document.body.removeChild( alink );
    }
}

function speicherntues( fname, fcontent ){ //test test
    let l = document.createElement('a');
    l.download = fname;
    l.href = 'data:,' + fcontent;
    l.click();
}

function printPAN(){
	console.log(PANnap["Abdias"].toString());
}

/*liste der Abkürzungen - aus der wikipedia html tabelle, entspricht TLL/PAN bzw GND*/
function convertWIKItabletoAuthorAbkWerkAbk(){
    let textelem = document.getElementById( "inputtext");
    let tate = textelem.value;
    let zeilen = tate.split("</tr>");
    let resultABKAutor = [];
    
    for( let z in zeilen ){
        //abl autor, autor, autor deutsch, werke
        let spalten = zeilen[ z ].split("</td>");
        //bconsole.log(spalten.length, zeilen[ z ], spalten);
        //autor #FFEBAD
        //sammelwerk: #FFDAB9
        //anaonyme schrift: #FFEFDB
        //biblische schrift: #EEE0E5
        //rabinische Schrift: EEE9BF
        //sonstige schrift: #EEDFCC

        if( spalten.length == 4 ){ //author
            let autbesch = "";
            let temp = spalten[2].split("<td")[1];
            //console.log(temp, temp.indexOf( "&#160;" ));
            if( temp.indexOf( "&#160;" ) == -1 ){
                autbesch = temp;
            }
            resultABKAutor.push([ spalten[0].split("<td")[1].split( " <span id=" )[0].split(">")[1], spalten[1].split("<td")[1].split("</a>")[0].split(">")[2], autbesch, [] ]);
        } else { //werk
            if(spalten.length == 5){
                //resultABKAutor[resultABKAutor.length-1][3].push([spalten[1].split("<td")[1].split(">")[1], spalten[2].split("<td")[1], spalten[3].split("<td")[1]]);
                resultABKAutor[resultABKAutor.length-1][3].push([spalten[1].split("<td")[1].split("<br />")[0].split(">")[1], spalten[2].split("<td")[1].split("<br />")[0].split(">")[1]]);
            }
        }
    }
    //console.log(resultABKAutor);
    let objasstring = "";    
    for(let aw in resultABKAutor ){
            let wout = "";
            if(resultABKAutor[ aw ][3].length > 0){
                wout = "{"
                for(let r in resultABKAutor[ aw ][3]){
                    wout = wout + "'" + resultABKAutor[ aw ][3][r][0] + "':'" + resultABKAutor[ aw ][3][r][1] + "', \n";
                }
                wout = wout + "}";
            } else {
                wout = "{''}";
            }
            objasstring = objasstring + "'"+ resultABKAutor[ aw ][0] +"': ['"+ resultABKAutor[ aw ][1] + "','" + resultABKAutor[ aw ][2] + "'," + wout + "], \n";
    }
    window.location = "data:application/octet-stream," + encodeURIComponent( objasstring );
}

function abrTOcsv(){
    let csvstring = "";
    for( let abr in abkAW ){
        if( abkAW[ abr ] instanceof Array ){
            csvstring = csvstring + abr +";;"+ abkAW[ abr ][0] +"\n";
        } else {
            
            let origabr = abkAW[ abr ];
            //console.log(abkAW[ abr ], abkAW[ origabr ]);
            csvstring = csvstring + abr +";;"+ abkAW[ origabr ][0] +"\n";
        }
    }
    window.location = "data:application/octet-stream," + encodeURIComponent( csvstring );    
}

function cvsTOabk(){
    console.log("Alterc. ".trim() == "Alterc.");
    console.log("tejsd");
    let astext = document.getElementById("inputtexts" ).children[0].children[1].value;
    let asarray =  astext.split("\n");

    //build entries for list "abkA":["Autor", "",{akbW, Werk}], // "abksynonym":"abkA",
    let CabkA = "";
    let Cautor = "";
    let Cnotizen = "";
    let worx = [];
    let arrayoutput = [];
    
    //cvs aufbau: "Abkürzung Name nach TLL";"Abkürzung Ergänzung";;"Notizen";"Name";"Werk abgekürzt";"Werk";;
    for(let lilalo in asarray){
        let tempsplit = asarray[ lilalo ].split( ";" );
        if( tempsplit[0].length > 0 ){ //eine abkürzung steht in der ersten spalten
            //schreibe diesen array eintrag komplett
            if(CabkA.length > 0){
                let oneentryinarray = '"'+CabkA.trim()+'":["'+Cautor.trim()+'", "'+Cnotizen.trim()+'", {'+worx.join(',\n')+'}]';

                arrayoutput.push(oneentryinarray);
            }
            //setze daten neu
            worx = [];
            CabkA = tempsplit[0].trim();
            Cnotizen = tempsplit[3].trim();
            Cautor = tempsplit[4].trim();
            if( tempsplit[5].length > 0 ){
                if(tempsplit[6].trim().length > 0 ){
                    worx.push( '    "'+tempsplit[5].trim()+'": "'+tempsplit[6].trim()+'"' );
                } else {
                    worx.push( '    "'+tempsplit[5].trim()+'": "'+tempsplit[5].trim()+'"' );
                }
            }

            if( tempsplit[1].length > 0 ){
                arrayoutput.push( '"'+tempsplit[1].trim()+'": "'+tempsplit[0].trim()+'"' );
            }
        } else {
            if( tempsplit[5].length > 0 ){
                if(tempsplit[6].trim().length > 0 ){
                    worx.push( '    "'+tempsplit[5].trim()+'": "'+tempsplit[6].trim()+'"' );
                } else {
                    worx.push( '    "'+tempsplit[5].trim()+'": "'+tempsplit[5].trim()+'"' );
                }
            }

            if( tempsplit[1].length > 0 ){
                arrayoutput.push( '"'+tempsplit[1].trim()+'": "'+CabkA+'"' );
            }
        }
    }
    //letztes element behandeln
    arrayoutput.push( '"'+CabkA.trim()+'":["'+Cautor.trim()+'", "'+Cnotizen.trim()+'", {'+worx.join(',\n')+'}]' );
    let abkString = "let abkAW = {"+arrayoutput.join(",\n")+"};";
    //console.log( abkString );
    window.location = "data:application/octet-stream," + encodeURIComponent( abkString );    
}

function mergeAKlists(){ //this function will be removed if a stable list is ready
    console.log("start merging", Object.keys(abkAW).length);
    //doUVlatin = true; // called for latin texts
    abkAW = normarrayk( abkAW );
    for( let a in abkAW ){
        abkAW[a][1] = normarrayk( abkAW[a][1] ); 
    }
    //console.log(abkAW["Iust.".toUpperCase()], abkAW["Ivst.".toUpperCase()])
    //abkAWgrkl = normarrayk( abkAWgrkl );
    //abkGrLaDGE = normarrayk( abkGrLaDGE );
    //abkAWOLD04032017 = normarrayk( abkAWOLD04032017 );
    //abkAWocd = normarrayk( abkAWocd );
    
    /*for(let Aabk in abkAWOLD04032017){
        if( abkAW[Aabk] ){
            continue
        } else {
            abkAW[Aabk] = abkAWOLD04032017[Aabk];
        }
    }
    
    for( let Aabk in abkAWocd){
        if( abkAW[Aabk] ){
            continue
        } else {
            abkAW[Aabk] = abkAWocd[Aabk];
        }
    }*/
    /*for( let Aabk in abkAWgrkl ){
        if( abkAW[ Aabk ] ){
            continue
        } else {
            abkAW[ Aabk ] = abkAWgrkl[ Aabk ];
        }
    }
    for( let Aabk in abkGrLaDGE ){
        if( abkAW[ Aabk ] ){
            continue
        } else {
            abkAW[ Aabk ] = abkGrLaDGE[ Aabk ];
        }
    }*/
    console.log("merged", Object.keys(abkAW).length);
    AbkKeys = Object.keys(abkAW);
    buildinverselist();
}

function buildinverselist(){
    //let asstring = "let inverseabkAWWAkba={";
    for( let bibaabk in abkAW ){
        let arrayoflangandsoon = abkAW[ bibaabk ];
        let trimmed = arrayoflangandsoon[ 0 ].trim();
            if( trimmed.length > 0 ){
                inverseabkAWWAkba[ delall( trimmed ) ] = bibaabk;
                //asstring += '"'+abkAW[ bibaabk ][ 0 ] + '" = "'+ bibaabk +'",\n';
            }
    }
    //asstring += "}";
    console.log("inverse mighty ruecker list build");
    langVonAbkKeys = Object.keys(inverseabkAWWAkba);
    buildTree( );
    //console.log(inverseabkAWWAkba);
    //window.location = "data:application/octet-stream," + encodeURIComponent( asstring );    
}




/* PLAIN TO REF TO DIGITAL EDITION */
/*Was ist eine digitale Edition: Es ist eine Ausdruck des textbegriffes, der Dokumentenentwicklung vor und nach der Abschrift eines Dokumenteninhalts  und dessen digitaler Codierung. Die Funktion des Edition muß die canonsichen Methoden der jeweiligen Wissenschaft zusammen mit den Fällen des Textes codieren. Dies führt dazu die digitale Edition, als Text-Dokument-Analyse (Raum) Relation zu verstehen, die sich duch die integration von Programmen der Interaktion und Verabeitbarkeit öffnet.*/

/*INPUT PLAIN*/
function addWorkTOmenu( autoselelem ){
    console.log( autoselelem.value );
    let entry = abkAW[ autoselelem.value ];
    let wperautorsel = document.getElementById( "werrew" );
    wperautorsel.style.display = "inline";
    wperautorsel.innerHTML = "";
    if( document.getElementById("fetchmebutt") ){
        document.getElementById("fetchmebutt").style.display = "inline";
    }

    let wo0 = document.createElement('option');
    wo0.value = undefined;
    wo0.text = "Werk";
    wperautorsel.appendChild( wo0 );

    for(let ent in entry[1]){
        let wo = document.createElement('option');
         wo.value = ent;
         wo.text = entry[1][ ent ];
         wperautorsel.appendChild( wo );
    }

    //remove - content
    //addnew
}

function abkTOmenu(){
    workingtitle = prompt("Bitte vergeben sie einen Arbeitstitel an","ovo");
	if( !(workingtitle != "" && workingtitle.split(" ").length == 1) ){
		alert("ungültiger Arbeitstitel");
		return;
	}


    //run autosave
    readFROMautosave();
    setInterval( writeTOautosave, 10000 );


    let autosel = document.getElementById( "auttua" );
    autosel.onchange = function(){ addWorkTOmenu( this ); };
    
    let ao0 = document.createElement('option');
    ao0.value = undefined;
    ao0.text = "PAN/TLL/DGE";
    autosel.appendChild( ao0 );

    for(let abkk in abkAW ){
        let entry = abkAW[ abkk ];
        let ao = document.createElement('option');
        if( entry instanceof Array ){
            ao.value = abkk;
            ao.text = entry[0] +" ("+abkk+")";
        } else {
            let eentry = abkAW[ entry ];
            
            ao.value = entry;
            if( eentry ){
            ao.text = eentry[0]+" ("+abkk+")";
            } else {
                console.log("error key value", entry,eentry )
            }
        }
        autosel.appendChild( ao );
    }

    //add druckeditionmenu to the first Dok. Elem
    let drElem = document.getElementById( "druckmenu" );
    let newdrelem = drElem.cloneNode(true);
    let d = document.createElement('div');
    newdrelem.style.display = "block";
    d.appendChild( newdrelem );
    let t = document.createElement('textarea');
    t.className = "inintete"; 
    d.appendChild( t );
    document.getElementById( "inputtexts" ).appendChild( d );
}

function adddocument(){
     let t = document.createElement('textarea');
    t.className = "inintete";
    document.getElementById( "inputtexts" ).children[ document.getElementById( "inputtexts" ).children.length-1 ].appendChild( t );
}

function adddruck(){
    let d = document.createElement('div');
    let drElem = document.getElementById( "druckmenu" );
    let newdrelem = drElem.cloneNode(true);
     newdrelem.style.display = "block";
    d.appendChild( newdrelem );
    let t = document.createElement('textarea');
    t.className = "inintete";
    d.appendChild( t );
    document.getElementById( "inputtexts" ).appendChild( d );
}

/*REF TO PLAIN/TEXT*/
/**************getCapabilities DARSTELLUNG*************************************/
function svgtext( x, y, rot, fs, texttext, c, xmlns ){
	let atextelem = document.createElementNS( xmlns, 'text');
	atextelem.setAttribute('x', x);
    atextelem.setAttribute('y', y);
	atextelem.setAttribute('fill', c);
	atextelem.setAttribute('font-size', fs);
	atextelem.setAttribute('transform', "rotate("+rot.toString()+","+x.toString()+","+y.toString()+")");
	atextelem.textContent = texttext;
	return atextelem;
}
function svgpolyg( p, c, xmlns ){
    let polyelem = document.createElementNS( xmlns, 'polygon');
	polyelem.setAttribute('points', p);
	polyelem.setAttribute('fill', c);
	return polyelem;
}
function svgrectstroke( x, y, w, h, c, xmlns ){
	let arec = document.createElementNS( xmlns, 'rect');
    arec.setAttribute('x', x);
    arec.setAttribute('y', y);
    arec.setAttribute('width', w);
    arec.setAttribute('height', h);
    arec.setAttribute('stroke-width', 2);
    arec.setAttribute('stroke', c);
    arec.setAttribute('fill', 'gray');
    arec.setAttribute('fill-opacity', 0.5);
	return arec;
}
function svgrectfill( x, y, w, h, c, xmlns ){
	let arec = document.createElementNS( xmlns, 'rect');
    arec.setAttribute('x', x);
    arec.setAttribute('y', y);
    arec.setAttribute('width', w);
    arec.setAttribute('height', h);
    arec.setAttribute('fill', c);
	return arec;
}
function svgline( x1, y1, x2, y2, w, c, xmlns ){
 	let aline = document.createElementNS( xmlns, 'line');
    aline.setAttribute('x1', x1);
    aline.setAttribute('y1', y1);
    aline.setAttribute('x2', x2);
    aline.setAttribute('y2', y2);
    aline.setAttribute('stroke', c);
    aline.setAttribute('stroke-width', w);
	return aline;
}

function getcapabilitiesSVG( h, xmlns ){
    let w = 950;
	let mainsvgelem = document.createElementNS(xmlns, "svg");
    mainsvgelem.setAttributeNS(null, "viewBox", "0 0 " + w + " " + h);
    mainsvgelem.setAttributeNS(null, "width", w);
    mainsvgelem.setAttributeNS(null, "height", h);
    mainsvgelem.style.display = "block";
	mainsvgelem.style.background = "white";


    return mainsvgelem;
}

function getLinkSVG( locato, xmlns, xlinkns ){
    let link = document.createElementNS( xmlns, "a");
    link.setAttributeNS( xlinkns, "href", locato );
    return link;
}


//hier könnte noch eine fkt hin, die das aus der start enthält - für getcapabilities
function FULLCTSshowCapabilitiers( xmlrequresu ){
    let nsArtefDok = xmlrequresu.split("#___#"); 
    //console.log(nsArtefDok);                  
    let sortednachNS = {};
    let h = 25;
    let currentNS = "";
    let currentArtef = "";
    for( let nad = 0; nad < nsArtefDok.length-1; nad++){
        let fnameANDheader = nsArtefDok[ nad ].split(",");
        let fname = fnameANDheader[0].split("-");
        let sourcedesc = fnameANDheader[1].split("</sourceDesc>")[0].split("<sourceDesc>")[1];
        let tit = sourcedesc.split("</title>")[0].split("<title>")[1];
        let aut = sourcedesc.split("</author>")[0].split("<author>")[1];

        if( sortednachNS[fname[2]] ){
            if( sortednachNS[fname[2]][tit] ){
                sortednachNS[fname[2]][tit].push( fname );
            } else {
                sortednachNS[fname[2]][tit] = [aut, fname];
            }
        } else {
            let newarr = {};
            newarr[tit] = [aut, fname];
            sortednachNS[fname[2]] = newarr;
        }

        if( fname[2] != currentNS ){
            
            h += 25;
        }                        
        if( currentArtef != tit ){
            
            h += 25;
        }
        h += 25;
        currentNS = fname[2];
        currentArtef = tit;
    }

    let verdiv = document.createElement('div');

    

    let hor1div = document.createElement('div');
     hor1div.className = "hor1";
    let hor2div = document.createElement('div');
     hor2div.className = "hor2";
    let hor3div = document.createElement('div');
     hor3div.className = "hor3";

    

    let dibe = document.createElement('div');
    dibe.className = "lala";
    dibe.innerHTML = "CTS Menu";
    hor2div.appendChild( dibe );

    for(let ns in sortednachNS ){
        let plainNS = document.createElement('div');
        plainNS.className = "hctsNS";
        let hrefloc1 = "hcts.html?GetPassage&URN:CTS:"+ns;
        plainNS.innerHTML = "<span>⩔</span> <a href='"+hrefloc1+"' target='_blank'>"+ns+"</a>";
        hor2div.appendChild(plainNS);

    }
    

    verdiv.appendChild( hor1div );
    verdiv.appendChild( hor2div );
    verdiv.appendChild( hor3div );
    document.getElementById( "all" ).appendChild( verdiv );
    //console.log(sortednachNS);
    //return;
    //drawing
    
    /*let xmlns = "http://www.w3.org/2000/svg";
    let xlinkns = "http://www.w3.org/1999/xlink";
     //das stimmt so nicht, weil auch für ns und artifact was fällig wird
    let ssvvgg = getcapabilitiesSVG( h, xmlns );
    let nsSVG = svgrectfill( 0, 0, 150, h, "red", xmlns );
    ssvvgg.appendChild( nsSVG );
    let artfSVG = svgrectfill( 150, 0, 440, h, "green", xmlns );
    ssvvgg.appendChild( artfSVG );
    let dokSVG = svgrectfill( 590, 0, 490, h, "blue", xmlns );
    ssvvgg.appendChild( dokSVG );
    let drawaty = 25;
    let coundigidokletiante = 1;
    let ctsmenu = document.createElement('div');
    ctsmenu.className = "mmmenu";
    for(let ns in sortednachNS ){
        let plainNS = document.createElement('div');
        let hrefloc1 = "hcts.html?GetPassage&URN:HCTS:"+ns;
        plainNS.innerHTML = "<b>Namespace:</b> <a href='"+hrefloc1+"'>URN:HCTS:"+ns+"</a>";
        ctsmenu.appendChild(plainNS);
        let l = getLinkSVG( hrefloc1, xmlns, xlinkns );
        l.appendChild( svgrectstroke( 3, drawaty-19, 130, 25, "black", xmlns ) );
        l.appendChild( svgtext( 5, drawaty, 0, 20, ns, "black", xmlns ));
        ssvvgg.appendChild( l );
        drawaty += 25;
        let coundigidokletiante = 1;
        
        for( let tit in sortednachNS[ns] ){
            let allversions = [];
            let aA = "";
            let aW = "";
            //console.log(sortednachNS[ns][tit], ns, tit);
            for(let f = 1; f < sortednachNS[ns][tit].length; f++){
                aA = sortednachNS[ns][tit][f][2];
                //console.log(aA);
                aW = sortednachNS[ns][tit][f][3];
                //console.log(aW);
                allversions.push(sortednachNS[ns][tit][f][sortednachNS[ns][tit][f].length-1]);
            }

            

            //console.log(allversions);
            let hrefloc2 = "hcts.html?GetPassage&URN:HCTS:"+ns+":"+aA+":"+aW+":"+allversions.join("___");
            
            let plainArtif = document.createElement('div');
            plainArtif.innerHTML = "<b>Artefact:</b> <a href='"+hrefloc3+"'>URN:HCTS:"+ns+":"+aA+":"+aW+":* , ("+sortednachNS[ns][tit][0]+", "+tit+")</a>";
            ctsmenu.appendChild(plainArtif);
            let plainCanoneinheit = document.createElement('div');
            plainCanoneinheit.innerHTML = "<b>canonische Einheit:</b> <a href='"+hrefloc3+"'>URN:HCTS:*:"+aA+":"+aW+"</a>";
            ctsmenu.appendChild(plainCanoneinheit);
            ssvvgg.appendChild( svgline( 91, drawaty-19, 91, drawaty+6, 2, "black", xmlns ) );
            ssvvgg.appendChild( svgline( 90, drawaty+6, 153, drawaty+6, 2, "black", xmlns ) );
            let ll = getLinkSVG( hrefloc2, xmlns, xlinkns );
            ll.appendChild( svgrectstroke( 153, drawaty-19, 420, 25, "black", xmlns ) );
            ll.appendChild( svgtext( 155, drawaty, 0, 20, sortednachNS[ns][tit][0]+", "+tit, "black", xmlns ));
            ssvvgg.appendChild( ll );
            //console.log(hrefloc2);
            drawaty += 25;
            let coundigidokletiante = 1;
            for(let f = 1; f < sortednachNS[ns][tit].length; f++){
                //ssvvgg.appendChild( svgline( 91, drawaty-19, 91, drawaty+6, 2, "black", xmlns ) );
                //ssvvgg.appendChild( svgline( 90, drawaty+6, 153, drawaty+6, 2, "black", xmlns ) );
                let plainDok = document.createElement('div');
                let hrefloc3 = "hcts.html?GetPassage&"+sortednachNS[ns][tit][f].join(":");
                plainDok.innerHTML = "<b>dig.letiante:</b><a href='"+hrefloc3+"'>"+ sortednachNS[ns][tit][f].join(":")+"</a>";
                //plainDok.style.height = "25px";
                plainDok.style.width = "99%";
                plainDok.style.overflow = "hidden";
                ctsmenu.appendChild( plainDok );
                ssvvgg.appendChild( svgline( 474, drawaty-19, 474, drawaty+6, 2, "black", xmlns ) );
                ssvvgg.appendChild( svgline( 473, drawaty+6, 600, drawaty+6, 2, "black", xmlns ) );
                let lll = getLinkSVG( hrefloc3, xmlns, xlinkns );
                lll.appendChild( svgrectstroke( 600, drawaty-19, 270, 25, "black", xmlns ) );
                lll.appendChild( svgtext( 605, drawaty, 0, 20, "letiante "+coundigidokletiante+" (digitus)", "black", xmlns ));                     
                ssvvgg.appendChild( lll );
        
                drawaty += 25;
                coundigidokletiante+=1;   
            }
        }
    }
    

    //cts menu
    let mediv = document.createElement('div');
    mediv.id = "hctsctsmenu";
    let dibe = document.createElement('div');
    dibe.className = "lala";
    dibe.innerHTML = "HCTS Menu";
    mediv.appendChild( dibe );
    let didi = document.createElement('div');
    didi.className = "mmmenu";
    didi.appendChild( ssvvgg );
    mediv.appendChild( didi );
    let dibebe = document.createElement('div');
    dibebe.className = "lala";
    dibebe.innerHTML = "CTS Menu";
    mediv.appendChild( dibebe );
    
    mediv.appendChild( ctsmenu );

    
    document.getElementById( "all" ).appendChild( mediv );*/
}

function CANonlyCTSshowCapabilities( urltoadd, axmlrequresu ){
    //console.log(axmlrequresu);
    let EinsZwei = undefined;
    eval(axmlrequresu);//u
    let xmlns = "http://www.w3.org/2000/svg";
    let xlinkns = "http://www.w3.org/1999/xlink";
    let linkbase = "hcts.html?GetCapabilities&";
    let linkbase2 = "hcts.html?GetPassage&";
    let linkbase3 = "http://cts-altegeschichte-leipzig.de/scri/hctsGetPassage.php?urn=";
    let h = 25;
    console.log(h)
    for( let ns in EinsZwei ){
        h += 50;
        for( let autho in EinsZwei[ ns ] ){
            h += 25;
        }
    }
    console.log(h)
    let ssvvgg = getcapabilitiesSVG( h, xmlns );
    let ctsmenu = document.createElement('div');
    ctsmenu.className = "mmmenu";



    let nsSVG = svgrectfill( 0, 0, 150, h, "red", xmlns );
    ssvvgg.appendChild( nsSVG );
    let l1canonsvg = svgrectfill( 150, 0, 650, h, "green", xmlns );
    ssvvgg.appendChild( l1canonsvg );

    let drawaty = 25;
    
    //just if getCapabilties is called without URN
    let couc = 1;
    let allphplinknames = "";
    for( let ns in EinsZwei ){
        let Uns = urltoadd+ns;
        
        let g = document.createElement('div');
        let splitedURN = Uns.split(":");
        let strtoadd = "";
        //0 URN, 1 CTS, 2 NS, A 3, W 4
        if(splitedURN.length > 3 ){
            if( abkAW[splitedURN[3]] && abkAW[splitedURN[3]][0] != "" ){
                strtoadd += "<b>"+spitzeklammernHTML(abkAW[splitedURN[3]][0])+"</b>";
                if( abkAW[splitedURN[3]][1][splitedURN[4]] && abkAW[splitedURN[3]][1][splitedURN[4]] != "" ){
                    strtoadd += " <i>"+spitzeklammernHTML(abkAW[splitedURN[3]][1][splitedURN[4]])+"</i>";
                } else {
                    if( splitedURN[4] ){
                        strtoadd += " <i>"+spitzeklammernHTML(splitedURN[4])+"</i>";
                    }
                }
            }
            if( strtoadd == "" ){
                strtoadd = splitedURN.slice(3,splitedURN.length).join(" ");
            }
            let spli2 = Uns.split(":");
            
            let sli2 = spli2.splice(3,spli2.length).join(" ");
            allphplinknames += "\""+linkbase3+Uns+"\",";
            g.innerHTML = "<div class='ctsli'><b> "+couc+"</b> <span class='ali'>"+strtoadd+"</span>&nbsp;("+spitzeklammernHTML(Uns)+") &nbsp;<a href='"+linkbase+Uns+"'>getCapabilities</a> / <a href='"+linkbase2+Uns+"'>getPassage</a> / <a href='http://www.perseus.tufts.edu/hopper/searchresults?q="+sli2+"' target='_blank'>Perseus CTS</a> / <a onclick='downloadXMLfromarrayof([\""+linkbase3+Uns+"\"], true)' href='#'>DownloadXML</a> / <input type='checkbox' name='checktoselect'></div>";
        } else {
            g.innerHTML = "<div class='ctsli'><b> "+couc+"</b>&nbsp;"+spitzeklammernHTML(Uns)+" &nbsp;<a href='"+linkbase+Uns+"'>getCapabilities</a></div>";
        }
        ctsmenu.appendChild(g);

        let l = getLinkSVG( linkbase+Uns, xmlns, xlinkns );
        l.appendChild( svgrectstroke( 3, drawaty-19, 130, 25, "black", xmlns ) );
        l.appendChild( svgtext( 5, drawaty, 0, 20, ns, "black", xmlns ));
        ssvvgg.appendChild( l );
        drawaty += 25;
        let cou = 1;
        for( let autho in EinsZwei[ ns ] ){
            //build URNS
            let UnsA = Uns+":"+autho;
            //push to svg AND push to textmaneu of cts
            let d = document.createElement('div');
            ssvvgg.appendChild( svgline( 91, drawaty-19, 91, drawaty+6, 2, "black", xmlns ) );
            ssvvgg.appendChild( svgline( 90, drawaty+6, 153, drawaty+6, 2, "black", xmlns ) );
            //let ll = getLinkSVG( linkbase+UnsA, xmlns, xlinkns );
            //ll.appendChild( svgrectstroke( 153, drawaty-19, 630, 25, "black", xmlns ) );
            //
            let spli = UnsA.split(":");
            let sli = spli.splice(3,spli.length).join(" ");
            if( abkAW[autho] && abkAW[autho][0] !== "" ){
                d.innerHTML = "<div class='ctsli'>&nbsp;&nbsp;<b> "+couc+"."+cou+"</b> <span class='ali'>"+spitzeklammernHTML(abkAW[autho][0])+"</span> ("+spitzeklammernHTML(UnsA)+") &nbsp;<a href='"+linkbase+UnsA+"'>getCapabilities</a> / <a href='"+linkbase2+UnsA+"'>getPassage</a> / <a href='http://www.perseus.tufts.edu/hopper/searchresults?q="+sli+"' target='_blank'>Perseus CTS</a></div>";
                //ll.appendChild( svgtext( 155, drawaty, 0, 20, abkAW[autho][0] +"  (cano)", "black", xmlns ));
            } else {
                d.innerHTML = "<div class='ctsli'>&nbsp;&nbsp;<b> "+couc+"."+cou+"</b> <span class='ali'>"+spitzeklammernHTML(autho)+"</span> ("+spitzeklammernHTML(UnsA)+") &nbsp;<a href='"+linkbase+UnsA+"'>getCapabilities</a> / <a href='"+linkbase2+UnsA+"'>getPassage</a> </div>";
                //ll.appendChild( svgtext( 155, drawaty, 0, 20, autho, "black", xmlns ));
            }
            //ssvvgg.appendChild( ll );
            ctsmenu.appendChild( d );
            drawaty += 25;
            cou+=1;
        }
        couc+=1;
    }

    let mediv = document.createElement('div');
    mediv.id = "hctsctsmenu";
    //let dibe = document.createElement('div');
    //dibe.className = "lala";
    //dibe.innerHTML = "human CTS Menu";
    //mediv.appendChild( dibe );
    //let didi = document.createElement('div');
    //didi.className = "mmmenu";
    //didi.appendChild( ssvvgg );
    //mediv.appendChild( didi );
    let dibebe = document.createElement('div');
    dibebe.className = "lala";
    dibebe.innerHTML = "<a onclick='window.history.back();'> Zur&uuml;ck</a> / <a onclick='addtoUSERDEFsubcorpus()'>AddToSubCorp</a> / <a onclick='clearsubcorp()'>ClearSubCorp</a> / <a onclick='downsubcorp()'>DownSubCorp</a> / <a onclick='downloadXMLfromarrayof(["+allphplinknames+"], true )'> DownAllAsXML</a>";
    let urlpartsto = urltoadd.split(":");
    for(let i = 1; i < urlpartsto.length-1; i++){
        let tttues = urlpartsto.slice(0, i+1);
        dibebe.innerHTML = dibebe.innerHTML + " / <a href='"+linkbase+tttues.join(":")+"'>"+tttues.join(" ")+"</a>"
    }
    onclick='downloadXMLfromarrayof([\""+linkbase3+Uns+"\"], true)'
    dibebe.innerHTML = dibebe.innerHTML + " / Suche ";
    let autosel = document.createElement( "select" );
    autosel.id = "auttua";
    let otherselect = document.createElement( "select" );
    otherselect.id = "werrew";
    let clickme = document.createElement( "a" );
    clickme.onclick = function(){ 
                    let ctsurnadd = "URN:CTS:BTL";
                    if( document.getElementById( "auttua" ).value != "PAN/TLL/DGE" ){
                        ctsurnadd += ":"+document.getElementById( "auttua" ).value;
                    }
                    if( document.getElementById( "werrew" ).value != "undefined" && document.getElementById( "werrew" ).value != "Werk" ){
                        ctsurnadd += ":"+document.getElementById( "werrew" ).value;
                    }
                    //console.log(ctsurnadd);
                    this.href="hcts.html?GetCapabilities&"+ctsurnadd;
                    this.click(); 
                    };
    clickme.innerHTML = " &#8634;";
    clickme.id = "fetchmebutt";
    autosel.onchange = function(){ addWorkTOmenu( this ); };
    let ao0 = document.createElement('option');
    ao0.value = undefined;
    ao0.text = "PAN/TLL/DGE";
    autosel.appendChild( ao0 );
    for(let abkk in abkAW ){
        let entry = abkAW[ abkk ];
        let ao = document.createElement('option');
        if( entry instanceof Array ){
            ao.value = abkk;
            ao.text = entry[0] +" ("+abkk+")";
        } else {
            let eentry = abkAW[ entry ];
            
            ao.value = entry;
            if( eentry ){
            ao.text = eentry[0]+" ("+abkk+")";
            } else {
                console.log("error key value", entry,eentry )
            }
        }
        autosel.appendChild( ao );
    }
    dibebe.append( autosel );
    dibebe.append( otherselect );
    dibebe.append( clickme );
    mediv.appendChild( dibebe );
    mediv.appendChild( ctsmenu );
    document.getElementById( "all" ).appendChild( mediv );
}



//show ths cts urn from selection
function showupwithHCTSURN(){
    let elemANDtext = getselte();
    let words = elemANDtext[1].split(" ");
    console.log("w", elemANDtext[0].getAttribute("n"))
    let line = elemANDtext[0].parentElement;
    console.log("line", line.getAttribute("n"));
    let sec = line.parentElement;
    console.log("sec", sec.getAttribute("n"));
    let chap = sec.parentElement;
    console.log("chap", chap.getAttribute("n"));
    let movingwordelem = elemANDtext[0];
    let wElememArr = [elemANDtext[0]];
    let lElememArr = [elemANDtext[0].parentElement];
    let sElememArr = [elemANDtext[0].parentElement.parentElement];
    let cElememArr = [elemANDtext[0].parentElement.parentElement.parentElement];
    for(let w = 1; w < words.length; w++){
            if( movingwordelem.nextElementSibling != null ){
                wElememArr.push( movingwordelem.nextElementSibling );
                movingwordelem = movingwordelem.nextElementSibling;
            } else {
                if( movingwordelem.parentElement.nextElementSibling != null ){ //line
                    lElememArr.push( movingwordelem.parentElement.nextElementSibling );
                    wElememArr.push( movingwordelem.parentElement.nextElementSibling.children[0] );
                    movingwordelem = movingwordelem.parentElement.nextElementSibling.children[0];
                } else {
                    if( movingwordelem.parentElement.parentElement.nextElementSibling != 0 ) { // sec
                        sElememArr.push( movingwordelem.parentElement.parentElement.nextElementSibling );
                        lElememArr.push( movingwordelem.parentElement.parentElement.nextElementSibling.children[0] );
                        wElememArr.push( movingwordelem.parentElement.parentElement.nextElementSibling.children[0].children[0] );
                        movingwordelem = movingwordelem.parentElement.parentElement.nextElementSibling.children[0].children[0];
                    } else {
                        if( movingwordelem.parentElement.parentElement.parentElement.nextElementSibling != 0 ) { // chap
                            cElememArr.push( movingwordelem.parentElement.parentElement.parentElement.nextElementSibling );
                            sElememArr.push( movingwordelem.parentElement.parentElement.parentElement.nextElementSibling.children[0] );
                            lElememArr.push( movingwordelem.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0] );
                            wElememArr.push( movingwordelem.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].children[0] );
                            movingwordelem = movingwordelem.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].children[0];
                         } else {
                            console.log("errrrrr i n urn construction");
                        }
                    }
                }
            }
    }
    
    let gg = getpositiononpage( elemANDtext[0] );
    console.log(gg);
    let chapterspan = "";
    for( let chaa = 0; chaa < cElememArr.length; chaa++ ){
        chapterspan += cElememArr[ chaa ].getAttribute("n") + " ";
    }
    let secspan = "";
    for( let se = 0; se < sElememArr.length; se++ ){
        secspan += sElememArr[ se ].getAttribute("n") + " ";
    }
    let linspan = "";
    for( let li = 0; li < sElememArr.length; li++ ){
        linspan += lElememArr[ li ].getAttribute("n") + " ";
    }
    let wend = elemANDtext[0].getAttribute("n");
    for( let ww = 1; ww < wElememArr.length; ww++ ){
        wend++;
    }
    //base 
    let canon = sElememArr[0].id.split(".");
    
    let L = [];
    //genau diese Passage
    let gndp =  "URN:HCTS:PV:"+canon[0]+":"+canon[1]+":0:"+chapterspan+":"+secspan+":0:0:0:"+linspan+":"+elemANDtext[0].getAttribute("n")+ " " + wend + ":addchecksumm";
    L.push("Genau diese Passage: <br>"+gndp);
    //genau diese und in allesn dokuemnten
    let gndpinallendok =  "URN:HCTS:PV:"+canon[0]+":"+canon[1]+":0:"+chapterspan+":"+secspan+":0:0:0:"+linspan+":"+elemANDtext[0].getAttribute("n")+ " " + wend + ":addchecksummrange";
    L.push("Genau diese Passage in allen Dokumentversionen: <br>"+gndpinallendok);
    //genau diese und in allen drucken und dokumenten
    let gndpinallendru =  "URN:HCTS:PV:"+canon[0]+":"+canon[1]+":0:"+chapterspan+":"+secspan+":0:0:0:"+linspan+":"+elemANDtext[0].getAttribute("n")+ " " + wend + ":0";
    L.push("Genau diese Passage in allen Abschriften aller Drucke: <br>"+gndpinallendru);
    //the add menu
    
    L.push("<div id='appendtourn'>");
    L.push("<div class='appendtournbutton' onclick='ninanotim()'> + eComparatio Vergleich</div>");
    L.push("<div class='appendtournbutton' onclick='ninanotim()'> + Faksimile</div>");
    L.push("<div class='appendtournbutton' onclick='ninanotim()'> + grammatikalische Analyse</div>");
    L.push("<div class='appendtournbutton' onclick='ninanotim()'> + ... ? was noch</div>");
    L.push("</div>");
    //
    document.getElementById( "showurnsel" ).innerHTML = L.join( "<br/><br/>" );
    document.getElementById( "showurnsel" ).style.left = (Math.round(gg[1])+20)+"px";
    document.getElementById( "showurnsel" ).style.top  = Math.round(gg[0])+"px";
    console.log(wElememArr, lElememArr, sElememArr);
}

//color the diff regions
function colodiffregion(){
    let conts = document.getElementsByClassName( "cont" );
    console.log(conts.length);
    if( conts.length > 1){
        let verglelem = conts[0];
        for(let r = 1; r < conts.length; r++){
            let chap = conts[r].children;
            
            for(let c = 0; c < chap.length; c++){
                let sec = chap[c].children;
                for(let s = 0; s < sec.length; s++){
                    
                    let llls = sec[s].children;
                    for(let l = 0; l < llls.length; l++){
                        let cs1 = 0;
                        let noerrwas = true;
                        try { 
                            cs1 = verglelem.children[c].children[s].children[l].getAttribute( "cs" );
                        } catch( ae ){noerrwas = false;}
                        let cs2 = 0;
                        try {
                            cs2 = llls[l].getAttribute( "cs" );
                        } catch( ae ){noerrwas = false;}

                        
                        //console.log(cs1, cs2)
                        if( cs1 != cs2 && noerrwas ){
                            verglelem.children[c].children[s].children[l].style.color = "orange";
                            llls[l].style.color = "orange";
console.log("un")
                        }
                    }
                }
            }
        }
    }
}

//GetPassage cts call
function showCThcts( xmlarray ){
    document.getElementById( "all" ).onmouseup = function() {
        showupwithHCTSURN();
    };



    let XN = xmlarray; //4 _ - 
    let mainhtml = document.createElement('div');
    console.log(XN);
    for(let xx = 0; xx < XN.length; xx++){
        let urnpassage = "m";//XN[xx].split("_____"); //5 _
        //console.log(urnpassage.length);
        if( urnpassage.length == 1 ){
            //keine passage abgefragt
            let parpar = new DOMParser();
            let xmlcontent = parpar.parseFromString( XN[xx] ,"text/xml");
            //console.log(XN[xx]);
            let part = document.createElement('div');
            part.className = "tp";

            let TEItitelelem = xmlcontent.getElementsByTagName("titleStmt")[0];
            console.log(TEItitelelem.getElementsByTagName("editor")[0].innerHTML);
            let artiftitelelem = xmlcontent.getElementsByTagName("sourceDesc")[0];
                      
            
            
            let digied = document.createElement('div');
            digied.className = "digiedhead";
            digied.innerHTML = TEItitelelem.getElementsByTagName("editor")[0].innerHTML;
            part.appendChild(digied);

            let artifa = document.createElement('div');
            artifa.className = "artifahead";
            artifa.innerHTML = artiftitelelem.getElementsByTagName("author")[0].innerHTML+", "+artiftitelelem.getElementsByTagName("title")[0].innerHTML+", "+artiftitelelem.getElementsByTagName("publisher")[0].innerHTML+" "+artiftitelelem.getElementsByTagName("pubPlace")[0].innerHTML+", "+ artiftitelelem.getElementsByTagName("date")[0].innerHTML;
            part.appendChild( artifa );

            let textidio = document.createElement('div');
            textidio.className = "iodtexthead";
            textidio.innerHTML = TEItitelelem.getElementsByTagName("author")[0].innerHTML+" "+TEItitelelem.getElementsByTagName("title")[0].innerHTML;
            part.appendChild( textidio );

            let conteee = document.createElement('div');
            conteee.className = "cont";
            let bodynotclean = XN[xx].split("</body>")[0].split("<body")[1].split(">");
            let bodyclean = [];
            for( let b = 1; b < bodynotclean.length; b++){
                   bodyclean.push( bodynotclean[b] );
            }
            let joined = bodyclean.join(">");
            let xmltohtml = joined.replace("<l", "<div").replace("</l>", "</div>").replace("<head", "<h3").replace("</head>", "</h3>").replace("<w", "<span").replace("</w>", "</span>");
          
            conteee.innerHTML = xmltohtml;
            
            part.appendChild( conteee );
            mainhtml.appendChild( part );
            
        } else {
            //passage abgefragt
        }
        document.getElementById( "all" ).appendChild( mainhtml );
    }
    colodiffregion();
}



/*********START RELAY FKT******************************************************/
function insertWor(elem){
    let Aabk = elem.value;
    elem.disabled = true;
    
    let inpelemW = document.getElementById( "inpURNW" );
    
    inpelemW.disabled = false;
    inpelemW.setAttribute('list', "Wlist")
    let inpelemWlist = document.createElement( "datalist" );
    inpelemWlist.id = "Wlist";
    for( let wabk in abkAW[ Aabk ][1]){
        if(wabk != ""){
            let o = document.createElement("option");
            o.innerHTML = wabk;
            inpelemWlist.appendChild(o);
        }
    }
    document.getElementById( "all" ).appendChild( inpelemWlist );
    inpelemW.focus();
}

function insStelle(elem){
    elem.disabled = true;
    let inpelemW = document.getElementById( "inpURNS" );
    
    inpelemW.disabled = false;
    inpelemW.focus();
}

function collandsend(){
    let alleinps = document.getElementsByClassName( "inpURN" );
    let urnstring = "";
    //console.log(alleinps);
    for( let i = 0; i < alleinps.length; i++ ){
        //console.log(alleinps[i])
        if(alleinps[ i ].value != ""){
            if( i == 0 ){
                urnstring = urnstring + alleinps[ i ].value;
            } else {
                if( alleinps[ i ].id == "inpURNS"){
                    let spispa = alleinps[ i ].value.split(".");
                    for( let t = 0; t < spispa.length; t++){
                        spispa[ t ] = spispa[ t ].trim();
                    }
                    urnstring = urnstring + ":"+spispa.join(":");
                } else {
                    urnstring = urnstring + ":"+alleinps[ i ].value;
                }
            }
        } else {
            break;
        }
    }
    //console.log(urnstring)
    let toahref = document.createElement("a");
    toahref.href="hcts.html?GetCapabilities&"+urnstring;
    document.getElementById( "all" ).appendChild( toahref );
    toahref.click(); 
    
}

function justandsend( ){
    if( document.getElementsByClassName( "inpJU" ).value != "" ){
        //console.log()
        let toahref = document.createElement("a");
        toahref.href="hcts.html?GetCapabilities&" + document.getElementById( "inpJU" ).value;
        document.getElementById( "all" ).appendChild( toahref );
        toahref.click(); 
    }
}

function backtoindex(){
    let gotoahref = document.createElement("a");
    gotoahref.href = "index.html";
    document.getElementById( "all" ).appendChild( gotoahref );
    gotoahref.click();
}

function start(){
    mergeAKlists();
    let loc = window.location.href.split("?");
    if( loc.length == 1 ){ //keine adresserweiterung
        //TEXT INPUT IS SUBJECT TO THE NEXT publication
        //change header
        //let iii = document.createElement("img");
        //iii.setAttribute('src', 'pic/CTS-Logos/1-Text-to-CTS.png');
        //document.getElementById( "titmein" ).appendChild( iii );
        //let sali = document.createElement("div");
        //sali.id = "titmeinline";
        //document.getElementById( "titmein" ).appendChild( sali );
        //abkTOmenu(); //eingabe also
        backtoindex();
    } else {
        if(loc[1].indexOf( "InpURN" ) != -1){
            document.getElementById( "all" ).innerHTML = "";
            //change header
            let titmeinelem = document.createElement("div");
            let iii = document.createElement("img");
            iii.setAttribute('src', 'pic/CTS-Logos/1-CTS-to-Text.png');
            titmeinelem.appendChild( iii );
            let sali = document.createElement("div");
            sali.id = "titmeinline";
            titmeinelem.appendChild( sali );
            document.getElementById( "all" ).appendChild(titmeinelem);

            //just input urn
            let inpelemJU = document.createElement("input");
            inpelemJU.id = "inpJU";
            inpelemJU.placeholder = "CTS URN";

            
            let submitJU = document.createElement("input");
            submitJU.className = "submitinpURN";
            submitJU.onclick = function(){ justandsend(); };
            submitJU.type = "submit";

            let label1 = document.createElement("span");
            label1.innerHTML = "URN-Eingabe: <br>";

            document.getElementById( "all" ).appendChild(label1);
            document.getElementById( "all" ).appendChild(inpelemJU);
            document.getElementById( "all" ).appendChild(submitJU);

            let submitbr = document.createElement("br");
            document.getElementById( "all" ).appendChild( submitbr );
            let submitbr2 = document.createElement("br");
            document.getElementById( "all" ).appendChild( submitbr2 );
            //compose urn

            let inpelemU = document.createElement("input");
            inpelemU.className = "inpURN";
            inpelemU.value = "URN";
            inpelemU.disabled = true;
            
            let inpelemC = document.createElement("input");
            inpelemC.className = "inpURN";
            inpelemC.value = "CTS";
            inpelemC.disabled = true;

            let inpelemN = document.createElement("input");
            inpelemN.className = "inpURN";
            inpelemN.autocomplete = "off";
            inpelemN.value = "BTL";
            //inpelemN.list = "NSlist";
            inpelemN.setAttribute('list', "NSlist")
            let inpelemNlist = document.createElement("datalist");
            inpelemNlist.id = "NSlist";
            let inpelemNlisto1 = document.createElement("option");
            inpelemNlisto1.innerHTML = "BTL";
            inpelemNlist.appendChild(inpelemNlisto1);
            let inpelemNlisto2 = document.createElement("option");
            inpelemNlisto2.innerHTML = "MPL";
            inpelemNlist.appendChild(inpelemNlisto2);
            let inpelemNlisto3 = document.createElement("option");
            inpelemNlisto3.innerHTML = "*";
            inpelemNlist.appendChild(inpelemNlisto3);

            let inpelemA = document.createElement("input");
            inpelemA.className = "inpURN";
            inpelemA.placeholder = "'Autor'";
            inpelemA.onchange = function(){insertWor(this);};
            inpelemA.autocomplete = "off";
            //inpelemA.autofocus = true;
            inpelemA.setAttribute('list', "Alist");
            let inpelemAlist = document.createElement("datalist");
            inpelemAlist.id = "Alist";
            for( let abk in abkAW){
                if(abk != ""){
                    let o = document.createElement("option");
                    o.innerHTML = abk;
                    inpelemAlist.appendChild(o);
                }
            }
            
            let inpelemW = document.createElement("input");
            inpelemW.className = "inpURN";
            inpelemW.id = "inpURNW";
            inpelemW.placeholder = "'Werk'";
            inpelemW.disabled = true;
            inpelemW.autocomplete = "off";
            inpelemW.onchange = function(){insStelle(this);};

            let inpelemS = document.createElement("input");
            inpelemS.className = "inpURN";
            inpelemS.id = "inpURNS";
            inpelemS.placeholder = "'Stelle'";
            inpelemS.disabled = true;
            inpelemS.autocomplete = "off";

            let submitbu = document.createElement("input");
            submitbu.className = "submitinpURN";
            submitbu.onclick = function(){collandsend();};
            submitbu.type = "submit";

            let label2 = document.createElement("span");
            label2.innerHTML = "URN zusammenstellen: <br>";

            document.getElementById( "all" ).appendChild(label2);
            document.getElementById( "all" ).appendChild(inpelemU);
            document.getElementById( "all" ).appendChild(inpelemC);
            document.getElementById( "all" ).appendChild(inpelemNlist);
            document.getElementById( "all" ).appendChild(inpelemN);
            document.getElementById( "all" ).appendChild(inpelemAlist);
            document.getElementById( "all" ).appendChild(inpelemA);
            document.getElementById( "all" ).appendChild(inpelemW);
            document.getElementById( "all" ).appendChild(inpelemS);
            document.getElementById( "all" ).appendChild(submitbu);
            inpelemA.focus();
        } else if( loc[1].indexOf( "GetCapabilities" ) != -1 ){
            //
            let params = loc[1].split("&");
            console.log( "getCap", params );

            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { 
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                    document.getElementById( "all" ).innerHTML = "";
                    //change header
                    let titmeinelem = document.createElement("div");
                    let iii = document.createElement("img");
                    iii.setAttribute('src', 'pic/CTS-Logos/1-CTS-to-Text.png');
                    titmeinelem.appendChild( iii );
                    let sali = document.createElement("div");
                    sali.id = "titmeinline";
                    titmeinelem.appendChild( sali );
                    document.getElementById( "all" ).appendChild(titmeinelem);
                    //do job
                    let hctsHCTSA = xmlHttp.responseText.split( "#____#" );
                    

                    //CONZEPT VON CTS ERWEITERT: ES MUSS EIN FULL-CTS GEBEN, wie im PERIKLESBEISPIEL, DAS ALLE MÖGLICHEN DINGE BERÜCKSICHTIGT - DAS IST DIE WAHRE DIGITALE EDITION UND ES WIRD VOM ARTEFAKT AUS GEDACHT. FÜr GRÖẞER CORPORA, WIE BTL UND PLD MUSS VON STRUKTUR DES CANONS AUS GEDACHT WERDEN. UND ABSCHLIEẞEND MUSS EIN PROGRAMM HER, WAS AUS AUFGESCHRIEBENEN CANONISCHEN ZITATEN CTSURNS MACHT. FERTIG - DAS IST DIE DREIFACHE ARBEIT IM VERGLEICH ZUM ANTRAG.

                    

                    CANonlyCTSshowCapabilities( hctsHCTSA[0], hctsHCTSA[1] );

                    
                }
            }
            if(params.length > 1){
                xmlHttp.open("GET", 'scri/hctsGetCapabilities.php?urn='+params[1], true); // true for asynchronous 
            } else {
                xmlHttp.open("GET", 'scri/hctsGetCapabilities.php', true); // true for asynchronous
            }
            xmlHttp.send(null);
            
            //
        } else if( loc[1].indexOf( "GetPassage" ) != -1 ){
            
            //do job
            let params = loc[1].split("&");
            console.log( "getPass", params );
            let xmlHttp = new XMLHttpRequest();
            let count = 0;
            xmlHttp.onreadystatechange = function() {   
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
                    let aelem = document.getElementById( "all" );
                    aelem.innerHTML = "";
                    //change header
                    let titmeinelem = document.createElement("div");
                    let iii = document.createElement("img");
                    iii.setAttribute('src', 'pic/CTS-Logos/1-CTS-to-Text.png');
                    titmeinelem.appendChild( iii );
                    let sali = document.createElement("div");
                    sali.id = "titmeinline";
                    titmeinelem.appendChild( sali );
                    aelem.appendChild(titmeinelem);
                    //split data to divide the two sources
                    let hctUNDhctsa = xmlHttp.responseText.split("#______#");
                    //console.log(xmlHttp.responseText);
                    let sow = document.createElement('div');//gentlich nur einmal
                    sow.id = "showurnsel";
                    sow.style.background = "white";
                    sow.style.padding = "5px";
                    sow.style.position = "absolute";
                    document.body.appendChild( sow );

                    /*if other params than URL is given - than mark the given words in output*/
                    try{
                        if( params.length > 1 ){
                            //console.log( params[2], wordstoMARK );
                            let tempbuildobjromsuchwords = params[2].split("%20"); //params dieser Aufrufe ist stellensystem
                            wordstoMARK = {};
                            for(let q = 0; q < tempbuildobjromsuchwords.length; q+=1 ){
                                let decword = decodeURIComponent( tempbuildobjromsuchwords[ q ] );
                                let decandcleaned = delall( decword ).replace("u", "v")
                                wordstoMARK[ decandcleaned ] = decandcleaned; 
                            }
                            
                            console.log( "markiere: ", wordstoMARK );
                        }
                    } catch(err) {
                    }

                    if( hctUNDhctsa[0].length > 0 ){/****** HCTS --- from Text TO CTS = XML HANDLING***********/
                        let texts = hctUNDhctsa[0].split("#____#");
                        
                        showCThcts( texts );
                    } 
                    if( hctUNDhctsa[1].length > 0 ){ /***************** FROM MASS CTS **************************/
                        
                        let urlUNDtext = hctUNDhctsa[1].split( "#_____#" );
                        let once = 0;
                        for( let ut in urlUNDtext ){
                            let uUt = urlUNDtext[ ut ].split("#____#");
                            if( uUt[1] ){
                                let urnnavdiv = document.createElement('div');
                                //console.log(uUt[0], uUt[1]);
                                if( once === 0 ){
                                    once = 1;
                                    let urnsplitted = params[1].split(":");
                                    let insasHuman = "("+urnsplitted[2]+") "+ urnsplitted.slice( 3, 5 ).join(" ") +" "+urnsplitted.slice( 5, urnsplitted.length ).join(". ")+".";
                                    urnsplitted.pop()
                                    let oneurnUP = urnsplitted.join(":");
                                    
                                    urnnavdiv.innerHTML = "getPassage:<a id='tocopylink' style='color:blue; text-decoration:underline; cursor:pointer;' href='hcts.html?GetPassage&"+oneurnUP+"&"+params[2]+"'>  "+oneurnUP+"</a> / getCapabilities: <a style='color:blue; text-decoration:underline; cursor:pointer;' href='hcts.html?GetCapabilities&"+oneurnUP+"&"+params[2]+"'> "+oneurnUP+"</a> / <a style='color:blue; text-decoration:underline; cursor:pointer;' onclick='window.history.back();'> Zur&uuml;ck</a> / <a style='text-decoration:underline; cursor:pointer; color:blue;' onclick='cocopielink()'>HTML Link kopieren</a> / <a style='color:blue; text-decoration:underline; cursor:pointer;' onclick='cocopielinklatex()'>LATEX Link kopieren</a> / <a href='"+window.location.href+"'>"+insasHuman+"</a> / <a style='color:blue; text-decoration:underline; cursor:pointer;' onclick='gettheXMLsnipppp()'>S AS XML Snip</a> <br><br>"; 
                                    aelem.appendChild(urnnavdiv);
                                }
                                let wordsinserveranswer = uUt[1].replace(cleanNEWL, " <br/>").replace(">", "> ").split(" "); //this is not clean - tags !!!
                                let urnofthisline = uUt[0].split("/");
                                let putthisonscreen = "<span class='urnmark'> "+urnofthisline[urnofthisline.length-2]+" </span> ";
                                for( let w in wordsinserveranswer ){
                                    wordsinserveranswer[w] = wordsinserveranswer[w].replace("title", "b")
                                    if( wordstoMARK ){
                                        let cleanedword = delall(wordsinserveranswer[w]).replace("u", "v");
                                    if( cleanedword in wordstoMARK && cleanedword != "" ){
                                        putthisonscreen = putthisonscreen + " <span class='markedword'>" + wordsinserveranswer[w] +"</span>";
                                    } else {
                                        putthisonscreen = putthisonscreen + " " + wordsinserveranswer[w];
                                    }
                                    } else {
                                        putthisonscreen = putthisonscreen + " " + wordsinserveranswer[w];
                                    }
                                }
                                let textdiv = document.createElement('div');
                                textdiv.innerHTML = putthisonscreen;
                                aelem.appendChild(textdiv);
                            }
                        }

                    } 
                    
                }
            }
            xmlHttp.open("POST", 'scri/hctsGetPassage.php?urn='+params[1], true); // true for asynchronous 
            xmlHttp.send(null);
            
        } else if( loc[1].indexOf( "CTSproxy" ) != -1 ){
            let xmlHttp = new XMLHttpRequest();
            let count = 0;
            xmlHttp.onreadystatechange = function() {   
                if( xmlHttp.readyState == 4 && xmlHttp.status == 200 ){
                    document.getElementById( "all" ).innerHTML = "";
                     //change header
                    let titmeinelem = document.createElement("div");
                    let iii = document.createElement("img");
                    iii.setAttribute('src', 'pic/CTS-Logos/1-Proxy-to-CTS.png');
                    titmeinelem.appendChild( iii );
                    let sali = document.createElement("div");
                    sali.id = "titmeinline";
                    titmeinelem.appendChild( sali );
                    document.getElementById( "all" ).appendChild( titmeinelem );

                    let ifl = document.createElement('div');
                    ifl.id = "converttoCTS";
                    ifl.innerHTML = xmlHttp.responseText;
                    
                    document.body.appendChild(ifl);
                    insertCTSonTLRR();
                }
            }
            xmlHttp.open("GET", 'pages/tlrr.tml', true);
            xmlHttp.send(null);
        } else if( loc[1].indexOf( "REFtoCTSURN" ) != -1 ){
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {   
                if( xmlHttp.readyState == 4 && xmlHttp.status == 200 ){
                    document.getElementById( "all" ).innerHTML = "";
                    let ifl = document.createElement('div');
                    ifl.id = "converttoCTS";
                    ifl.innerHTML = xmlHttp.responseText;
                    
                    document.getElementById( "all" ).appendChild(ifl);

                    document.getElementById( "all" ).onmouseup = function(e) {
                        textselection2URN(e);
                    };
                    //GENCTSURN( xmlHttp.responseText );
                }

            }
            xmlHttp.open("GET", 'pages/testdata2.tml', true);
            xmlHttp.send(null);
        }
    }
}

/*TLRR ref to cts urn*/
function diffAundL( AL ){
    let tailingnums = [];
    let leading = [];
    let LettZiff = AL.split("");
    let isauthor = true;
    for(let lz in LettZiff){
        if( parseInt( LettZiff[ lz ] ) ){
            isauthor = false;
        }

        if( isauthor ){
            leading.push( LettZiff[ lz ] );
            
        } else {
            tailingnums.push( LettZiff[ lz ] );
        }
    }
    
    return [ leading.join("").trim(), tailingnums.join("").trim() ]
}

function insertCTSonTLRR(){
    console.log("insert start tlrr")
    let CTSDNS = [];
    let wholetrials = document.getElementsByClassName( "trial" );
    let cleanSUP = new RegExp('\\<sup\\>(.+)\\</sup\\>', 'g');
    let cleanKlAM = new RegExp('\\((.+)\\)', 'g');
    let clean1 = new RegExp('=', 'g');
    let clean2 = new RegExp('\\[', 'g');
    let clean3 = new RegExp('\\]', 'g');
    let clean4 = new RegExp('\\t', 'g');
    let clean5 = new RegExp('\\n', 'g');
    let clean6 = new RegExp('\\r', 'g');
    let clean7 = new RegExp('\\<br\\>', 'g');
    let clean8 = new RegExp('\\<br/\\>', 'g');
    let clean9 = new RegExp('see also', 'g');
    let clean10 = new RegExp(' ', 'g');   
    let clean11 = new RegExp('.', 'g');    
    
    let found = 0;
    let notfound = 0;
    let nofoustrin = "";
    for(let wo = 0; wo < wholetrials.length-1;wo++ ){
        let addTOeleminnerhtml = "";
        let refrefelem = wholetrials[ wo ].getElementsByClassName( "p" )[0];
        let tete = refrefelem.innerHTML.replace(cleanKlAM, "").replace(clean1, ";").replace(clean2, "").replace(clean3, "").replace(clean4, " ").replace(clean5, " ").replace(clean6, " ").replace(clean7, "").replace(clean8, "").replace(clean9, "").replace(cleanSUP, "").replace(cleanKlAM, "");
        
        let clean12 = new RegExp('\\</em\\>', 'g');
        let clean13 = new RegExp('\\<em\\>', 'g');
       

        let sisi = tete.split(";");
        let currentauthor = undefined;
        
        for( let s in sisi){
            let refparts = sisi[ s ].split( "<em>" );
            let canonlevels = [];
            if( refparts[0].length != " " ){
                //could be author, author and levels, or leves
                let AundL = diffAundL(refparts[0]);
                console.log(AundL);
                if( AundL[1] != "" ){
                    canonlevels.push( AundL[1] )
                }  
                if( AundL[0].length > 1 ){
                    if(AundL[0][0] == " "){
                        AundL[0] = AundL[0][1]
                    }
                    currentauthor = AundL[0]
                } 
            }
            let woerx = [];
            
            for(let r = 1; r < refparts.length; r++){
                let WundL = refparts[ r ].split("</em>");
                woerx.push( WundL[0].trim() );//klein und groß schreibung, a und b für teile
                if( WundL[1] ){
                    canonlevels.push( WundL[1].trim() );
                }
            }

            
            if(abkAW[currentauthor]){ //u v angleich bei autor und werk etc
                //console.log("a", "#"+currentauthor+"#", "b", woerx, canonlevels, tete);
                let AundRest = abkAW[ currentauthor ]; 
                if( ! AundRest instanceof Array ){
                    AundRest = abkAW[ AundRest ]; 
                }
                
                let resolverurl = "URN:*:*:"+currentauthor+":"+woerx[0]+":";
                for(let cal in canonlevels){
                    let einzlevs = canonlevels[cal].split(",");
                    //console.log(einzlevs);
                    for( let ecal in einzlevs){
                        if(woerx[0]){
                        //hier mußt du noch checken, ob workx auch in AundRest[1] --- gaanz wichtig und dann die namen aufbohren und das richtige auswählen.
                            let tappWorx = woerx[0];
                            
                            if( abkAW[currentauthor][2][woerx[0]] ){
                                tappWorx = woerx[0];
                                
                            } else {
                                //console.log(currentauthor, woerx[0], woerx[0].toLowerCase(), abkAW[currentauthor][2])
                                if( abkAW[currentauthor][2][woerx[0].toLowerCase()] ){
                                    
                                    tappWorx = woerx[0].toLowerCase();
                                }
                            }
                            addTOeleminnerhtml += "BTL: <a target='_blank' href='http://ecomparatio.net/~khk/hcts.html?GetPassage&URN:*:*:"+currentauthor+":"+tappWorx+":" + einzlevs[ecal].trim().split(".").join(":")+"'>"+currentauthor+" <i>"+tappWorx+"</i> "+einzlevs[ecal].trim()+"</a> |";
                        } else {
                             addTOeleminnerhtml += "BTL: <a target='_blank' href='http://ecomparatio.net/~khk/hcts.html?GetPassage&URN:*:*:"+currentauthor+":" + einzlevs[ecal].trim().split(".").join(":")+"'>"+currentauthor+" "+einzlevs[ecal].trim()+"</a> |";
                        }
                    }
                }
                
                found++;
            } else {
                if(abkAW[woerx[0]]){
                    found++; 
                    //console.log("err", woerx, currentauthor, refparts)
                } else {
                    notfound++;
                    nofoustrin += ";; "+ sisi[ s ];
                }
            }
             
            //let authresu = [];
            //let amoded = [currentauthor, currentauthor.replace(".",""), 
             //             currentauthor.replace("u", "v"), currentauthor.replace("v", "u")];

            //capitalize

            //samll

            //try combinations of words and single

            //first letter gig and all perutations
            
            //insert: in

            //wenn es den autor nicht gibt, dann guck, ob das werk immerhin vorhanden ist auf der author ebene
            
            
        }      
        refrefelem.innerHTML += " ("+addTOeleminnerhtml+")";
        //get innerhtml, split at ; and insert the links
    }
    console.log("Done, found: ", found, " notfound: ", notfound);//, nofoustrin );
    
}

/*                                                                            */
/*____________INTERAKTION MIT DER GUI GUI GUI_______________*/
/*----------------------------------------------------------------------------*/
function getselte(){
    if(window.getSelection){
        return [window.getSelection().anchorNode.parentNode, window.getSelection().toString()];
    } else if( document.getSelection ){
        return [document.selection.createRange().parentElement(), document.getSelection().toString()];
    } 
    return "";
}

function Sleep(milliseconds) {
   return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function downloadXMLfromarrayof( arrofurns, donotjoin ){
    //
    let thecheckedones = document.getElementsByName( "checktoselect" )
    //console.log(thecheckedones.length, arrofurns.length)
    let noonecheckd = true;
    for( let che = 0; che < thecheckedones.length; che++){
        if( thecheckedones[che].checked ){
            noonecheckd = false;
            break;
        }
    }
    //return;
    let textout = "";
    let realname = "any.xml";
    let realnameZERO = "anyany.xml";
    for( let theurn = 0; theurn < arrofurns.length; theurn++){
        if( donotjoin ){
            if( arrofurns[ theurn ] == "" ||
                (thecheckedones[theurn].checked == false && noonecheckd == false )  ){
                continue;
            }
        }
        
        //console.log( arrofurns[ theurn ] );
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState == 4 ){
                if(xmlHttp.status == 200){
                    if( donotjoin ){
                        textout = "";
                    }
                    let hctUNDhctsa = xmlHttp.responseText.split("#______#");
                    //console.log( hctUNDhctsa );
                    let urlandtexts = hctUNDhctsa[1].split("#_____#");
                    for( let uut = 0; uut < urlandtexts.length; uut++ ){
                        let zuzuazua = urlandtexts[ uut ].split("#____#");
                        if( zuzuazua[ 1 ] != undefined){
                            textout += zuzuazua[ 1 ]+"\n";
                        }
                    }
                    let nanam = urlandtexts[ 0 ].split("}")[0].split("\"")[1].split("CTS");
                    realname = nanam[nanam.length-1].replace("/", "").split("/").join("-")+".xml"
                    console.log(realname);
                    if( theurn == 0 ){
                        realnameZERO = realname;
                    }
                    if( donotjoin ){
                        dodownit( textout, realname, "text/xml" );
                    }
                    
                } 
            }
        }
        xmlHttp.open("GET", arrofurns[ theurn ], true); // true for asynchronous 
        xmlHttp.send(null);
        await Sleep( 2000 );
    }
    if( !donotjoin ){
        let fp = realnameZERO.split(".xml")[0];
        let sp = realname.split(".xml")[0]
        let namespan =  fp+"_"+sp;
        dodownit( textout, namespan+".xml", "text/xml" );
    }
}

function clearsubcorp(){
    subcorpselection = [];  
    localStorage.setItem('scsel', JSON.stringify( subcorpselection ) );
}

function downsubcorp(){
    let temsubcsel = JSON.parse( localStorage.getItem( 'scsel' ) );
    if( temsubcsel != null ){
        
        if( temsubcsel.length != 0 ){
            //console.log( localStorage.getItem( 'scsel' ))
            subcorpselection = temsubcsel;
        }
    }
    let theURLtoDOWNload = [];
    let linkbase3 = "http://cts-altegeschichte-leipzig.de/scri/hctsGetPassage.php?urn=";
    for( let e = 0; e < subcorpselection.length; e++){
        theURLtoDOWNload.push( linkbase3 + subcorpselection[ e ] );
    }
    downloadXMLfromarrayof( theURLtoDOWNload, false );
}

function addtoUSERDEFsubcorpus(){
    let temsubcsel = JSON.parse( localStorage.getItem( 'scsel' ) );
    if( temsubcsel != null ){
        
        if( temsubcsel.length != 0 ){
            //console.log( localStorage.getItem( 'scsel' ))
            subcorpselection = temsubcsel;
        }
    }
    let thecheckedones = document.getElementsByName( "checktoselect" )
    //console.log(thecheckedones.length, arrofurns.length)
    
    for( let che = 0; che < thecheckedones.length; che++){
        if( thecheckedones[che].checked ){
            let justURNsplit = thecheckedones[che].parentNode.children[3].href.split("&URN");
            let justURN = "URN"+justURNsplit[justURNsplit.length-1];
            if( subcorpselection.indexOf( justURN ) == -1 ){
                subcorpselection.push( justURN );
            }
        }
    }
    localStorage.setItem('scsel', JSON.stringify( subcorpselection ) );
    alert( "Subcorpus:\n"+localStorage.getItem( 'scsel' ).split("URN").join("\nURN") );
}

function gettheXMLsnipppp(){
    let s = new XMLSerializer();
    let themainelem = document.getElementById( "all" );
    let tobedowned = "";
    for( let t = 2; t < themainelem.children.length; t++){
        tobedowned += s.serializeToString( themainelem.children[ t ] ) + "\n";
    }
    let nameofitall = window.location.href.split("&")[1];
    dodownit( tobedowned, nameofitall+".xml", "text/xml" );
}

function cocopielinklatex(){
    let li = document.getElementById( "tocopylink" );
    //console.log(li.innerHTML, li.href);

    let thecopyfake = document.createElement("input");
    let urnsplitted = window.location.href.split("&")[1].split(":");//URN
    let insasHuman = "("+urnsplitted[2]+") "+ urnsplitted.slice( 3, 5 ).join(" ") +" "+urnsplitted.slice( 5, urnsplitted.length ).join(". ")+".";
    thecopyfake.value = "\\href{"+window.location.href+"}{"+insasHuman+"}";
    document.body.appendChild( thecopyfake );
    thecopyfake.select();
    console.log( "copy:", thecopyfake.value );
    document.execCommand("copy");
    document.body.removeChild( thecopyfake );
}

    
function cocopielink(){
    let li = document.getElementById( "tocopylink" );
    //console.log(li.innerHTML, li.href);

    let thecopyfake = document.createElement("input");
    let urnsplitted = window.location.href.split("&")[1].split(":");//URN
    let insasHuman = "("+urnsplitted[2]+") "+ urnsplitted.slice( 3, 5 ).join(" ") +" "+urnsplitted.slice( 5, urnsplitted.length ).join(". ")+".";
    thecopyfake.value = "<a href='"+window.location.href+"'>"+insasHuman+"</a>";
    document.body.appendChild( thecopyfake );
    thecopyfake.select();
    console.log( "copy:", thecopyfake.value );
    document.execCommand("copy");
    document.body.removeChild( thecopyfake );
}

function countkeyleng(){
    //console.log(abkAW["Hdt."]);
    let keylenL0 = 0;
    let keylenL1 = 0;
    let keylenL0av = 0;
    let keylenL1av = 0;
    let keylenL0c = 0;
    let keylenL1c = 0;
    for( let k in abkAW ){
        let l0 = abkAW[ k ];
        let wcl0 = k.split(" ").length;
        if(keylenL0 < wcl0){
            keylenL0 = wcl0;
        }
        keylenL0av += wcl0;
        keylenL0c++;
        for(let poi = 0; poi < l0.length; poi++ ){
            let l1 = l0[ poi ][ 1 ];
            for(let kk in l1 ){
                let wcl1 = kk.split(" ").length;
                if(keylenL1 < wcl1){
                    keylenL1 = wcl1;
                }
                keylenL1av += wcl1;
                keylenL1c++;
            }
        }
    }
    console.log("l0 max len", keylenL0, "av len", (keylenL0av/keylenL0c));
    console.log("l1 max len", keylenL1, "av len", (keylenL1av/keylenL1c));
}

function savekeyandlanglist(){
    let ku = '[';
    let la = '[';
    let besch = '[';
    for( let k in abkAW ){
        let l0 = abkAW[ k ];
        la = la +'"'+l0[0][0]+'",\n';
        ku = ku +'"'+ k +'",\n';
        //console.log(l0, l0[0], l0[0][2]);
        if(l0[0][2]){
            besch = besch +'"'+l0[0][2][2]+'",\n';
        } else {
            besch = besch +'"",\n';
        }
    }
    ku = ku + '];';
    la = la +'];'
    besch = besch + ']';
    console.log("Download list abkAW info");
    dodownit( ku, "ku.txt", "text/txt" );
    dodownit( la, "la.txt", "text/txt" );
    dodownit( besch, "besch.txt", "text/txt" );
}

function h0shwing(){
    for( let el of document.querySelectorAll('.l2') ){
        el.style.display = 'none';
    }
    for( let el of document.querySelectorAll('.l1') ){
        el.style.display = 'none';
    }
    for( let el of document.querySelectorAll('.l0') ){
        if(el.style.display == 'none'){
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }
    linesmark();
}

function h1shwing(){
    for( let el of document.querySelectorAll('.l2') ){
        el.style.display = 'none';
    }
    for( let el of document.querySelectorAll('.l0') ){
        el.style.display = 'none';
    }
    for( let el of document.querySelectorAll('.l1') ){
        if(el.style.display == 'none'){
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }
    linesmark();
}

function h2shwing(){
    for( let el of document.querySelectorAll('.l1') ){
        el.style.display = 'none';
    }
    for( let el of document.querySelectorAll('.l0') ){
        el.style.display = 'none';
    }
    for( let el of document.querySelectorAll('.l2') ){
        if(el.style.display == 'none'){
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }
    linesmark();
}

function listtocsv(){
    let sichereRefs = document.getElementsByClassName( "l2" );
    let stristrastring = ["l0;;l1;;l2"];
    for( let t = 0; t < sichereRefs.length; t++ ){
        if(sichereRefs[t].children.length == 3){
            stristrastring.push( sichereRefs[t].getAttribute("forcsv") );
        }
    }
    letnnn = prompt("Dateiname:");


    dodownit( stristrastring.join("\n"), nnn+".csv", "text/csv" );
}

function linesmark(){
    let elemsstart = document.getElementsByName("startpoint");
    let canvas1 = document.getElementById( "coveringCanvas" );
    
    
    let maxw = 0;
    let maxh = 0;
    for( let z = 0; z < elemsstart.length; z++ ){
        
        let thestart = getpositiononpage( elemsstart[ z ] );
        if(document.getElementById( "to"+elemsstart[ z ].id ) == undefined){
            continue; 
        }
        let theend = getpositiononpage( document.getElementById( "to"+elemsstart[ z ].id ) );
        if(thestart[1] > maxw){
            maxw = thestart[1];
        }
        if(theend[1] > maxw ){
            maxw = theend[1];
        }
        if(thestart[0] > maxh){
            maxh = thestart[0];
        }
        if(theend[0] > maxh ){
            maxh = theend[0];
        }
        
    }
    canvas1.height = (maxh+10);
    canvas1.width = maxw;
    canvas1.style.width = maxw.toString()+"px";
    canvas1.style.height = (maxh+30).toString()+"px";
    let ctx1 = canvas1.getContext("2d");
    ctx1.clearRect( 0, 0, canvas1.width, canvas1.height );

    for( let z = 0; z < elemsstart.length; z++ ){
        if(elemsstart[ z ].parentElement.style.display != "none"){
            let colortoit = elemsstart[ z ].style.color;
            ctx1.strokeStyle = colortoit;
            
            let thestart = getpositiononpage( elemsstart[ z ] );
            let theend = getpositiononpage( document.getElementById( "to"+elemsstart[ z ].id ) );
            elemsstart[ z ].style.borderLeft = "1px solid "+colortoit;
            elemsstart[ z ].style.borderBottom = "1px solid "+colortoit;
            elemsstart[ z ].style.display = "inline";
            document.getElementById( "to"+elemsstart[ z ].id ).style.borderRight = "1px solid "+colortoit;
            ctx1.beginPath();
            //top / left
            ctx1.moveTo( Math.floor(parseInt(thestart[1])), Math.floor(parseInt(thestart[0])) );
            ctx1.lineTo( Math.floor(parseInt(theend[1])), Math.floor(parseInt(theend[0])-10) );
            ctx1.stroke();
        }
    }
}

function genallaxample(){
    //console.log( document.getElementById( "t1" ).innerHTML.replace(fromBR, " ") );
    //    document.getElementById( "t1" ).innerHTML = GENCTSURN( document.getElementById( "t1" ).innerHTML );
    //example of the CTS implementation in ERIS
    let res = GENCTSURN( document.getElementById( "cts_link_source" ).innerHTML );
    document.getElementById( "cts_link_target" ).innerHTML = res[ 0 ];
}

function maybeURN(){
    //show a dialog to select right cts urn 
    
}

function textselection2URN( e ){
    
    let elemANDtext = getselte();
    if( elemANDtext[1] != "" ){
        remdiv("anijhdsaf");
        //console.log( elemANDtext[1] );

        let showURNinelm = document.createElement("div");
        let res = GENCTSURN( elemANDtext[1] );
        showURNinelm.innerHTML = res[ 0 ] + " <div onclick='remdiv(\"anijhdsaf\")'> CLOSE </DIV>";
        showURNinelm.id = "anijhdsaf";
        showURNinelm.className = "popwindow";
        showURNinelm.style.left = "100px"//e.pageX.toString()+"px";
        showURNinelm.style.top = e.pageY.toString()+"px";
        document.body.appendChild( showURNinelm );
    }
}

function remdiv( idname ){
    console.log(idname);
    let aelem = document.getElementById( idname );
    if( aelem ){
        document.body.removeChild( aelem );
   }
}

function ninanotim(){
    alert("Ni Na Not Implemented");
}

/*                                                                            */
/*____________D_______________*/
/*----------------------------------------------------------------------------*/


//space hash of the space lordes
function wSHA256(str){
    let bitArray = sjcl.hash.sha256.hash( str );  
    let digest_sha256 = sjcl.codec.hex.fromBits(bitArray);
    return digest_sha256;
}
function SHA512(str) {
  function int64(msint_32, lsint_32) {
    this.highOrder = msint_32;
    this.lowOrder = lsint_32;
  }

  let H = [new int64(0x6a09e667, 0xf3bcc908), new int64(0xbb67ae85, 0x84caa73b),
      new int64(0x3c6ef372, 0xfe94f82b), new int64(0xa54ff53a, 0x5f1d36f1),
      new int64(0x510e527f, 0xade682d1), new int64(0x9b05688c, 0x2b3e6c1f),
      new int64(0x1f83d9ab, 0xfb41bd6b), new int64(0x5be0cd19, 0x137e2179)];

  let K = [new int64(0x428a2f98, 0xd728ae22), new int64(0x71374491, 0x23ef65cd),
      new int64(0xb5c0fbcf, 0xec4d3b2f), new int64(0xe9b5dba5, 0x8189dbbc),
      new int64(0x3956c25b, 0xf348b538), new int64(0x59f111f1, 0xb605d019),
      new int64(0x923f82a4, 0xaf194f9b), new int64(0xab1c5ed5, 0xda6d8118),
      new int64(0xd807aa98, 0xa3030242), new int64(0x12835b01, 0x45706fbe),
      new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, 0xd5ffb4e2),
      new int64(0x72be5d74, 0xf27b896f), new int64(0x80deb1fe, 0x3b1696b1),
      new int64(0x9bdc06a7, 0x25c71235), new int64(0xc19bf174, 0xcf692694),
      new int64(0xe49b69c1, 0x9ef14ad2), new int64(0xefbe4786, 0x384f25e3),
      new int64(0x0fc19dc6, 0x8b8cd5b5), new int64(0x240ca1cc, 0x77ac9c65),
      new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
      new int64(0x5cb0a9dc, 0xbd41fbd4), new int64(0x76f988da, 0x831153b5),
      new int64(0x983e5152, 0xee66dfab), new int64(0xa831c66d, 0x2db43210),
      new int64(0xb00327c8, 0x98fb213f), new int64(0xbf597fc7, 0xbeef0ee4),
      new int64(0xc6e00bf3, 0x3da88fc2), new int64(0xd5a79147, 0x930aa725),
      new int64(0x06ca6351, 0xe003826f), new int64(0x14292967, 0x0a0e6e70),
      new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
      new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, 0x9d95b3df),
      new int64(0x650a7354, 0x8baf63de), new int64(0x766a0abb, 0x3c77b2a8),
      new int64(0x81c2c92e, 0x47edaee6), new int64(0x92722c85, 0x1482353b),
      new int64(0xa2bfe8a1, 0x4cf10364), new int64(0xa81a664b, 0xbc423001),
      new int64(0xc24b8b70, 0xd0f89791), new int64(0xc76c51a3, 0x0654be30),
      new int64(0xd192e819, 0xd6ef5218), new int64(0xd6990624, 0x5565a910),
      new int64(0xf40e3585, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
      new int64(0x19a4c116, 0xb8d2d0c8), new int64(0x1e376c08, 0x5141ab53),
      new int64(0x2748774c, 0xdf8eeb99), new int64(0x34b0bcb5, 0xe19b48a8),
      new int64(0x391c0cb3, 0xc5c95a63), new int64(0x4ed8aa4a, 0xe3418acb),
      new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, 0xd6b2b8a3),
      new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
      new int64(0x84c87814, 0xa1f0ab72), new int64(0x8cc70208, 0x1a6439ec),
      new int64(0x90befffa, 0x23631e28), new int64(0xa4506ceb, 0xde82bde9),
      new int64(0xbef9a3f7, 0xb2c67915), new int64(0xc67178f2, 0xe372532b),
      new int64(0xca273ece, 0xea26619c), new int64(0xd186b8c7, 0x21c0c207),
      new int64(0xeada7dd6, 0xcde0eb1e), new int64(0xf57d4f7f, 0xee6ed178),
      new int64(0x06f067aa, 0x72176fba), new int64(0x0a637dc5, 0xa2c898a6),
      new int64(0x113f9804, 0xbef90dae), new int64(0x1b710b35, 0x131c471b),
      new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
      new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, 0x9c100d4c),
      new int64(0x4cc5d4be, 0xcb3e42b6), new int64(0x597f299c, 0xfc657e2a),
      new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)];

  let W = new Array(64);
  let a, b, c, d, e, f, g, h, i, j;
  let T1, T2;
  let charsize = 8;

  function utf8_encode(str) {
    return unescape(encodeURIComponent(str));
  }

  function str2binb(str) {
    let bin = [];
    let mask = (1 << charsize) - 1;
    let len = str.length * charsize;

    for (let i = 0; i < len; i += charsize) {
      bin[i >> 5] |= (str.charCodeAt(i / charsize) & mask) << (32 - charsize - (i % 32));
    }

    return bin;
  }

  function binb2hex(binarray) {
    let hex_tab = "0123456789abcdef";
    let str = "";
    let length = binarray.length * 4;
    let srcByte;

    for (let i = 0; i < length; i += 1) {
      srcByte = binarray[i >> 2] >> ((3 - (i % 4)) * 8);
      str += hex_tab.charAt((srcByte >> 4) & 0xF) + hex_tab.charAt(srcByte & 0xF);
    }

    return str;
  }

  function safe_add_2(x, y) {
    let lsw, msw, lowOrder, highOrder;

    lsw = (x.lowOrder & 0xFFFF) + (y.lowOrder & 0xFFFF);
    msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
    lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

    lsw = (x.highOrder & 0xFFFF) + (y.highOrder & 0xFFFF) + (msw >>> 16);
    msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
    highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

    return new int64(highOrder, lowOrder);
  }

  function safe_add_4(a, b, c, d) {
    let lsw, msw, lowOrder, highOrder;

    lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF);
    msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (lsw >>> 16);
    lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

    lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (msw >>> 16);
    msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (lsw >>> 16);
    highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

    return new int64(highOrder, lowOrder);
  }

  function safe_add_5(a, b, c, d, e) {
    let lsw, msw, lowOrder, highOrder;

    lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) + (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF) + (e.lowOrder & 0xFFFF);
    msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (e.lowOrder >>> 16) + (lsw >>> 16);
    lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

    lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) + (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (e.highOrder & 0xFFFF) + (msw >>> 16);
    msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (d.highOrder >>> 16) + (e.highOrder >>> 16) + (lsw >>> 16);
    highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);

    return new int64(highOrder, lowOrder);
  }

  function maj(x, y, z) {
    return new int64(
      (x.highOrder & y.highOrder) ^ (x.highOrder & z.highOrder) ^ (y.highOrder & z.highOrder),
      (x.lowOrder & y.lowOrder) ^ (x.lowOrder & z.lowOrder) ^ (y.lowOrder & z.lowOrder)
    );
  }

  function ch(x, y, z) {
    return new int64(
      (x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder),
      (x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder)
    );
  }

  function rotr(x, n) {
    if (n <= 32) {
      return new int64(
       (x.highOrder >>> n) | (x.lowOrder << (32 - n)),
       (x.lowOrder >>> n) | (x.highOrder << (32 - n))
      );
    } else {
      return new int64(
       (x.lowOrder >>> n) | (x.highOrder << (32 - n)),
       (x.highOrder >>> n) | (x.lowOrder << (32 - n))
      );
    }
  }

  function sigma0(x) {
    let rotr28 = rotr(x, 28);
    let rotr34 = rotr(x, 34);
    let rotr39 = rotr(x, 39);

    return new int64(
      rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder,
      rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder
    );
  }

  function sigma1(x) {
    let rotr14 = rotr(x, 14);
    let rotr18 = rotr(x, 18);
    let rotr41 = rotr(x, 41);

    return new int64(
      rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder,
      rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder
    );
  }

  function gamma0(x) {
    let rotr1 = rotr(x, 1), rotr8 = rotr(x, 8), shr7 = shr(x, 7);

    return new int64(
      rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder,
      rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder
    );
  }

  function gamma1(x) {
    let rotr19 = rotr(x, 19);
    let rotr61 = rotr(x, 61);
    let shr6 = shr(x, 6);

    return new int64(
      rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder,
      rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder
    );
  }

  function shr(x, n) {
    if (n <= 32) {
      return new int64(
       x.highOrder >>> n,
       x.lowOrder >>> n | (x.highOrder << (32 - n))
      );
    } else {
      return new int64(
       0,
       x.highOrder << (32 - n)
      );
    }
  }

  str = utf8_encode(str);
  strlen = str.length*charsize;
  str = str2binb(str);

  str[strlen >> 5] |= 0x80 << (24 - strlen % 32);
  str[(((strlen + 128) >> 10) << 5) + 31] = strlen;

  for (let i = 0; i < str.length; i += 32) {
    a = H[0];
    b = H[1];
    c = H[2];
    d = H[3];
    e = H[4];
    f = H[5];
    g = H[6];
    h = H[7];

    for (let j = 0; j < 80; j++) {
      if (j < 16) {
       W[j] = new int64(str[j*2 + i], str[j*2 + i + 1]);
      } else {
       W[j] = safe_add_4(gamma1(W[j - 2]), W[j - 7], gamma0(W[j - 15]), W[j - 16]);
      }

      T1 = safe_add_5(h, sigma1(e), ch(e, f, g), K[j], W[j]);
      T2 = safe_add_2(sigma0(a), maj(a, b, c));
      h = g;
      g = f;
      f = e;
      e = safe_add_2(d, T1);
      d = c;
      c = b;
      b = a;
      a = safe_add_2(T1, T2);
    }

    H[0] = safe_add_2(a, H[0]);
    H[1] = safe_add_2(b, H[1]);
    H[2] = safe_add_2(c, H[2]);
    H[3] = safe_add_2(d, H[3]);
    H[4] = safe_add_2(e, H[4]);
    H[5] = safe_add_2(f, H[5]);
    H[6] = safe_add_2(g, H[6]);
    H[7] = safe_add_2(h, H[7]);
  }

  let binarray = [];
  for (let i = 0; i < H.length; i++) {
    binarray.push(H[i].highOrder);
    binarray.push(H[i].lowOrder);
  }
  return binb2hex(binarray);
}
