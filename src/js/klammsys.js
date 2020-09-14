//******************************************************************************
//
// 2020 
// Inschriften (inscriptiones) / Papyri / Ostraka signis criticis extraction 
// JavaScript Lib, 
// Prof. Charlotte Schubert Alte Geschichte, Leipzig
//
//******************************************************************************

/*
GPLv3 copyrigth

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

//
"use strict"; 


/*LUECKEN*/
const lueckeBestimmt = new RegExp( /(?<!〚|\[)\[(---)*[a-zA-ZͰ-Ͼἀ-῾, ,\?:;\(\)◌̅◌̲]+(---)*[a-zA-ZͰ-Ͼἀ-῾, ,\?:;\(\)◌̅◌̲]*\](?!〛|\])/, 'g' ); //luebest, Findet verschachtelte eckige Klammern NICHT!!! also die äußersten - Idee; Newline!!!
const lueckevoe = new RegExp( /\[[a-zA-ZͰ-Ͼἀ-῾◌̣ ]+-\]/, 'g' ); //luebestvoe 
const lueckebestlen = new RegExp( /(?<!〚)\[\.+\](?!〛)/, 'g' ); //luebestlen, luecke bestimmter länge
const lueckeinZeile = new RegExp( /(?<!〚)\[---\](?!〛)/, 'g' ); 
//const lueckeinZeile2 = new RegExp(/\[3\]/, 'g' ); 
const lueckeausZeile = new RegExp( /(?<!〚)\[[\s]*------[\s]*\](?!〛)/, 'g' ); 
//const lueckeausZeile2 = new RegExp( /\[6\]/, 'g' ); 
const lueckeausmehrZeile = new RegExp( /(?<![(〚\[)\[⟨])[\s]*------[\s]*(?![(\]〛)\]⟩])/, 'g' ); 
const lueckeunbest = new RegExp( /\]\[/, 'g' ); //|[__]+|[\_]+/, 'g' ); 
const lueckmlen = new RegExp( /\[[a-zA-ZͰ-Ͼἀ-῾, ,\?:;\(\)◌̅◌̲]*[\s]*\-[\s]*ca[.\s\d\?]+[\s]*\-[\s]*[a-zA-ZͰ-Ͼἀ-῾, ,\?:;\(\)◌̅◌̲]*\]/, 'g' ); 
/*Zeilen und Spalten*/
const zeilenende = new RegExp( /\s\/[\s\n]+/, 'g' ); 
const zeilenendeDigit = new RegExp( /\s\/(\d)+[\s\n]+/, 'g' ); 
const zeilenanfang = new RegExp( /\s\|[\s\n]+/, 'g' );
const zeilenanfangDigit = new RegExp( /\|\d+/, 'g' ); 
const spaltenanfang = new RegExp( /\s\|\|[\s\n]+|\s\/\/[\s\n]+/, 'g' ); 
/*einzelne Buchstaben*/
const punktunter = new RegExp( "[a-zA-ZͰ-Ͼἀ-῾][\u{0323}]", 'g' ); 
const frueheregewaer = new RegExp( /[◌̲]/, 'g' );
const unbekueber = new RegExp( /[◌̅]+/, 'g' );
const unterpunkteinzelstehend = new RegExp( " +\u{0323}", 'g' ); 
const anzgriechbuch = new RegExp( /(?<![\[〚])\.\.+(?![\]〛])/, 'g' );//  Litterarum vestigia
const anzlatbuchs = new RegExp( /\++/, 'g' ); //ein oder mehrer; das ist zwei oder mehrere \+[\+]+ 
/*Tilgung, willentlicher Verlust*/
const irrgetilgt = new RegExp( /\{[a-zA-ZͰ-Ͼἀ-῾, ,\?:;\(\)◌̅◌̲◌̣ ]+\}/, 'g' ); // Irrtümlich hinzugefügte Buchstaben, die der Herausgeber getilgt hat
const tilg = new RegExp( /〚(?<!\[)[a-zA-ZͰ-Ͼἀ-῾, .,\?:;\(\)◌̅◌̲◌̣ ]+(?!\])〛/, 'g' ); //antike Tildung
const rasiert = new RegExp( /\[\[+[a-zA-ZͰ-Ͼἀ-῾, ,\?:;\(\)◌̅◌̲◌̣ ]*\]+\]/, 'g' ); //Rasur, was ist mit dreifacher Klammerung
const tilgerg = new RegExp( /〚\[[a-zA-ZͰ-Ͼἀ-῾, ,\?:;\(\)◌̅◌̲]+\]〛/, 'g' ); //antike Tildung erg heraus
const tilguns = new RegExp( /〚\[\.\.\.\]〛|〚\[\-5\?\-\]〛|〚\[\-\-\-\]〛/, 'g' ); //
const tilgzei = new RegExp( /〚\[\-\-\-\-\-\-\]〛/, 'g' ); //Tilgung Zeile 
/*Wieder hergestellt (nach Tilgung)*/
const editorrekonst = new RegExp( /⎣[a-zA-ZͰ-Ͼἀ-῾, .,\?:;\(\)◌̅◌̲◌̣ ]+⎦/, 'g' ); //durch den Editor wieder hergestellet
const recovori = new RegExp( /⌈[a-zA-ZͰ-Ͼἀ-῾, .,\?:;\(\)◌̅◌̲◌̣ ]+⌉/, 'g' ); //aus dem Original rekonstruiert
const ueberschr = new RegExp( /&lt;&lt;[a-zA-ZͰ-Ͼἀ-῾, .,\?:;\(\)◌̅◌̲◌̣ ]+&gt;&gt;/, 'g' ); // Hier sind Texte aufgeführt, die - vor allem in der Severerzeit - anstelle getilgter Passagen eingefügt worden sind.
const tilgrewrite = new RegExp( /(&lt;&lt;\[\[)[a-zA-ZͰ-Ͼἀ-῾, .,\?:;\(\)◌̅◌̲◌̣ \n]+(\]\]&gt;&gt;)/, 'g' ); //Der Text wurde zunächst getilgt und dann wieder eingemeißelt; häufig leg. III
const wiederherst = new RegExp( /《[a-zA-ZͰ-Ͼἀ-῾, ,\?:;\(\)◌̅◌̲◌̣ ]+》/, 'g' ); //
const korr = new RegExp( /&lt;[a-zA-ZͰ-Ͼἀ-῾, .,\?:;\(\)◌̅◌̲◌̣ \n]+\=[a-zA-ZͰ-Ͼἀ-῾, .,\?:;\(\)◌̅◌̲◌̣ \n]+&gt;/, 'g' ); //Korrektur (Beispiel: f<e=F>cit für FFCIT)
const erszuff = new RegExp( /《\[[a-zA-ZͰ-Ͼἀ-῾, .,\?:;\(\)◌̅◌̲◌̣ \n]+\]》/, 'g' ); //Ersatz für getilgte Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig verschwunden oder am Rande weggebrochen sind und die der Herausgeber ergänzt hat
const erzuffunbst = new RegExp( /《\[\.\.\.\]》|《\[\-5\?\-\]》|《\[---\]》/, 'g' ); //Ersatz für getilgte Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig verschwunden oder am Rande weggebrochen sind und deren Anzahl sich sicher, weniger sicher oder gar nicht berechnen läßt
/*Angaben des Editors*/
const aufabk = new RegExp( /\([a-zA-ZͰ-Ͼἀ-῾, .,\?:;◌̅◌̲◌̣ \n]+\)/, 'g' );  //Auflösung von Abkürzungen, Abgekürztes Wort, das der Herausgeber aufgelöst hat, doppelte Klammerung ist noch nicht gelöst
const aufabkuns = new RegExp( /\([a-zA-ZͰ-Ͼἀ-῾, .,\?:;◌̅◌̲◌̣ \n]+\-\)/, 'g' ); //Abgekürztes Wort, das der Herausgeber aufgelöst hat, doch ist die Deklinations- oder Konjugationsform unsicher
const scil = new RegExp( /\(scil\. [a-zA-ZͰ-Ͼἀ-῾, .,\?:;◌̅◌̲◌̣ \n]+\)/, 'g' ); //Ein Wort, das nicht im Text steht, das aber stillschweigend zu verstehen ist und das der Herausgeber hinzugefügt hat
const unvollen = new RegExp( /⟨------\?*⟩|⟨---\?*⟩/, 'g' ); //Unvollendete Inschrift (die Inschrift bricht entweder innerhalb der Zeile oder am Zeilenende ab; in fraglichen Fällen mit ? vor der schließenden Klammer)
const hinwabk = new RegExp( /\s[a-zA-ZͰ-Ͼἀ-῾, .,\?:;◌̅◌̲◌̣ \n]+\(\-\-\-\)\s/, 'g' ); //Abgekürztes Wort, das nicht sicher aufgelöst werden kann
const korrdeseditors = new RegExp( /(?<!&lt;)&lt;[a-zA-ZͰ-Ͼἀ-῾, .,\?:;◌̅◌̲◌̣ \n]+&gt;(?!&gt;)|⟨[a-zA-ZͰ-Ͼἀ-῾, .,\?:;◌̅◌̲◌̣ \n]+⟩/, 'g' ); //Irrtümlich ausgelassene Buchstaben, die der Herausgeber hinzugefügt hat
const ungewschreibung = new RegExp( /\(\s*\!\s*\)/, 'g'); //Unmittelbar an ein Wort anschließend markiert (!) eine ungewöhnliche Schreibweise wie Maxumus(!); isoliert stehend markiert (!) ein fehlendes Wort wie das fehlende f(ilius) in C(aius) Iulius C(ai) (!) Maximus.
const buchstherausrekonst = new RegExp( /˹[a-zA-ZͰ-Ͼἀ-῾, .,\?:;◌̅◌̲◌̣ \n]+˺/, 'g' ); //Buchstaben, die der Herausgeber korrigiert hat
const eckenunbek = new RegExp(/˻[a-zA-ZͰ-Ͼἀ-῾, .,\?:;◌̅◌̲◌̣ \n]+˼/, 'g');//?
const vac = new RegExp( /\(vac.(\s*\d*\?)*\)/, 'g' ); //Abschnitte einer Zeile, die nicht beschrieben gewesen zu sein scheinen und deren Ausdehnung – nach der Zahl der Buchstaben, die man darin hätte unterbringen können, berechnet – sicher oder weniger sicher oder gar nicht berechnet werden kann
const wtrenn = new RegExp( /[a-zA-ZͰ-Ͼἀ-῾, .,\?:;◌̅◌̲◌̣ \[\]\(\)]+\=[\s\n]+/, 'g' ); // Worttrennung
//⏓ ⏑ × ⏑ ⸏ ⸎


function applyklammregexpMark( id, ausdruck, stringtomani, index, legende ){ //insert marking html
    let out = "";
    let matches = stringtomani.match( ausdruck );
    let i = 0;
    let startindex = 0;
    while( ausdruck.exec( stringtomani ) ){
        let inserttext = matches[i];
        index[ id ].push([ausdruck.lastIndex-matches[i].length, ausdruck.lastIndex, matches[i].length, inserttext ] );
        out += stringtomani.slice(startindex, ausdruck.lastIndex - matches[i].length) +"<span class='"+id+"'>"+inserttext+"</span>";
        i+=1;
        startindex = ausdruck.lastIndex;
    }
    out += stringtomani.slice(startindex, stringtomani.length);
    return out;
}

function applyklammregexp( id, ausdruck, stringtomani, index, legende ){ //insert anchor
    //let out = "";
    let matches = stringtomani.match( ausdruck );
    let i = 0;
    let startindex = 0;
    while( ausdruck.exec( stringtomani ) ){
        let howmuchbuchs = matches[i].length;
        //console.log(howmuchbuchs);
        if( howmuchbuchs <= 1 ){
            howmuchbuchs = 2;
        }
        let is = ausdruck.lastIndex - howmuchbuchs;
        let ie = ausdruck.lastIndex;
        let b = True;
        let sto = is-10;
        while( b ){
            if( stringtomani[is] === " " || is < sto ){
                is+=1
                b = false;
            }
            is-=1;
        }
        b = True;
        sto  = ie+10;
        while( b ){
            if( stringtomani[ie] === " " || ie > sto ){
                b = false;
            }
            ie+=1;
        }
        let inserttext = stringtomani.slice(is, ie);
        let iss = ausdruck.lastIndex-howmuchbuchs;
        let iee = ausdruck.lastIndex;
        index[ id ].push([iss, iee, stringtomani.slice(iss, iee), inserttext ] );
        //out += stringtomani.slice(startindex, ausdruck.lastIndex - matches[i].length) +inserttext+"<a class='anchorofindexentry' id='"+id+ausdruck.lastIndex.toString()+"' onclick='this.innerHTML=\"\";'></a>";

        
        i+=1;
        startindex = ausdruck.lastIndex;
    }
    //out += stringtomani[0].slice(startindex, stringtomani[0].length);
    //return out;
}

function hervKLAMMSYS( stringtomani ){ //RUN ON NFC/NFKC
    //let stringtomani = teINelm[0];
    //index
    let index = { };
    let legende = { };
    let out = "";
    
    /*EINZELBUCHSTABEN ZEICHEN*/

    /*
    ◌̣
    Def: Unterpunkt, Lesung unsicher; aus dem Kontext erschlossen, Buchstaben, die derart beschädigt sind,
    daß sie nur im Kontext sicher identifiziert
    werden können
    HIER ZUR ZEIT EINZUELBUCHSTABEN AUSWAHL _ VIELLEICHT PRO WORT
    */
    index[ "punktunter" ] = [];
    legende[ "punktunter" ] = ["ẹ", "Unterpunkt, Lesung unsicher; aus dem Kontext erschlossen, Buchstaben, die derart beschädigt sind, daß sie nur im Kontext sicher identifiziert werden können."];
    //out = applyklammregexp( "punktunter", punktunter, stringtomani, index, legende ); 
    applyklammregexp( "punktunter", punktunter, stringtomani, index, legende ); 

    /*
        ◌̲
        Def: Buchstaben, die von früheren Gewährsmännern gelesen und abgeschrieben wurden, aber später verlorengegangen sind. 


    */
    index[ "frueheregewaer" ] = [];
    legende[ "frueheregewaer" ] = ["e̲", "Buchstaben, die von früheren Gewährsmännern gelesen und abgeschrieben wurden, aber später verlorengegangen sind."];
    //out = applyklammregexp( "frueheregewaer", frueheregewaer, out, index, legende );
    applyklammregexp( "frueheregewaer", frueheregewaer, stringtomani, index, legende );

    /*
    Überstrichen ‾
    Def: Besondere Buchstabenformen und Zahlen; Abkürzungen/Abbreviaturen in mittelalterlichen Handschriften.


    */
    index[ "unbekueber" ] = [];
    legende[ "unbekueber" ] = ["c̅", "Besondere Buchstabenformen und Zahlen; Abkürzungen/Abbreviaturen in mittelalterlichen Handschriften."];
    //out = applyklammregexp( "unbekueber", unbekueber, out, index, legende );
    applyklammregexp( "unbekueber", unbekueber, stringtomani, index, legende );
    
    /*
        +++ 
        Def: Spuren von Buchstaben, die derart in 
        Mitleidenschaft gezogen sind, daß sie 
        nicht identifiziert werden können.  
    */
    index[ "anzlatbuchs" ] = [];
    legende[ "anzlatbuchs" ] = ["+++", "Spuren von Buchstaben, die derart in Mitleidenschaft gezogen sind, daß sie nicht identifiziert werden können."];
    //out = applyklammregexp( "anzlatbuchs", anzlatbuchs, out, index, legende );
    applyklammregexp( "anzlatbuchs", anzlatbuchs, stringtomani, index, legende );  
 
    /*
        Punktserien, auch Unterpunkte mit Leerzeichen, die werden vorher ersetzt. Def: Litterarum vestigia 
    */
    index[ "anzgriechbuch" ] = [];
    legende[ "anzgriechbuch" ] = ["...", "Punktserie, Litterarum vestigia."];
    //out = applyklammregexp( "anzgriechbuch", anzgriechbuch, out.replace( unterpunkteinzelstehend, "." ), index, legende );
    applyklammregexp( "anzgriechbuch", anzgriechbuch, stringtomani.replace( unterpunkteinzelstehend, "." ), index, legende );  

    /*
        unterstrichene Buchstaben 
    */
    /*LÜCKEN ALLER ART*/

    /*Luecke bestimmt aber

    [abc]
    Def: Buchstaben, die infolge einer zufaelligen Beschaedigung der Oberfläche voellig 
    verschwunden oder am Rande weggebrochen sind und die der Herausgeber ergaenzt hat

    */
    index["luebest"] = []; //initialize space for index results
    legende["luebest"] = ["[abc]", "Buchstaben, die infolge einer zufaelligen Beschaedigung der Oberfläche voellig verschwunden oder am Rande weggebrochen sind und die der Herausgeber ergaenzt hat."];
    //out = applyklammregexp( "luebest", lueckeBestimmt, out, index, legende );
    applyklammregexp( "luebest", lueckeBestimmt, stringtomani, index, legende );

    /*Luecke bestimmt aber

    [abc-]
    Def: Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig ver-
    schwunden oder am Rande weggebrochen sind und die der Herausgeber ergänzt
    hat, doch ist die Deklinations- oder Konjugationsform unsicher; wird auch
    gesetzt, wenn die Wurzel eines Wortes sicher, aber das aus dieser Wurzel abgelei-
    tete Wort unsicher ist, außerdem wenn im Falle einer möglichen Abkürzung eines
    Wortes unbekannt ist, wieviele Buchstaben des Wortes ausgeschrieben waren

    */
    index["luebestvoe"] = [];
    legende["luebestvoe"] = ["[abc-]","Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig verschwunden oder am Rande weggebrochen sind und die der Herausgeber ergänzt hat, doch ist die Deklinations- oder Konjugationsform unsicher; wird auch gesetzt, wenn die Wurzel eines Wortes sicher, aber das aus dieser Wurzel abgeleitete Wort unsicher ist, außerdem wenn im Falle einer möglichen Abkürzung eines Wortes unbekannt ist, wieviele Buchstaben des Wortes ausgeschrieben waren."];
    //out = applyklammregexp( "luebestvoe", lueckevoe, out, index, legende );
    applyklammregexp( "luebestvoe", lueckevoe, stringtomani, index, legende );

    /*
    [...]
    Def: Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig ver-
    schwunden oder am Rande weggebrochen sind und die der Herausgeber nicht
    ergänzen konnte, obwohl sich ihre Anzahl sicher berechnen läßt; für jeden Buch-
    staben wird ein Punkt gesetzt
     
    */
    index[ "luebestlen" ] = [];
    legende[ "luebestlen" ] = ["[...]", "Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig verschwunden oder am Rande weggebrochen sind und die der Herausgeber nicht ergänzen konnte, obwohl sich ihre Anzahl sicher berechnen läßt; für jeden Buchstaben wird ein Punkt gesetzt."];
    //out = applyklammregexp( "luebestlen", lueckebestlen, out.replace( unterpunkteinzelstehend, "." ), index, legende );
    applyklammregexp( "luebestlen", lueckebestlen, stringtomani.replace( unterpunkteinzelstehend, "." ), index, legende );

    /*

     [-ca.16 -]
    Def: Unbestimmte Lücke, vermutete Anzahl von Buchstaben der Lücke in einer Zeile.
    */
    index[ "lueckmlen" ] = [];
    legende[ "lueckmlen" ] = ["[-ca.16 -]", "Unbestimmte Lücke, vermutete Anzahl von Buchstaben der Lücke in einer Zeile."];
    //out = applyklammregexp( "lueckmlen", lueckmlen, out, index, legende );
    applyklammregexp( "lueckmlen", lueckmlen, stringtomani, index, legende );

    /* 
    [---] 
    Def: unbestimmte, unerkennbare Länge einer Lücke in einer Zeile

    Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig ver-
    schwunden oder am Rande weggebrochen sind, die der Herausgeber nicht ergänzt
    hat und deren Anzahl sich ungefähr oder gar nicht berechnen läßt
    */
    index[ "lueckeinZeile" ] = [];
    legende[ "lueckeinZeile" ] = ["[---]", "Unbestimmte, unerkennbare Länge einer Lücke in einer Zeile. Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig verschwunden oder am Rande weggebrochen sind, die der Herausgeber nicht ergänzt hat und deren Anzahl sich ungefähr oder gar nicht berechnen läßt."];
    //out = applyklammregexp( "lueckeinZeile", lueckeinZeile, out, index, legende );
    applyklammregexp( "lueckeinZeile", lueckeinZeile, stringtomani, index, legende );

    /* 
    [------] 
    Def: Lücke unbestimmter Länge
    */
    index[ "lueckeausZeile" ] = [];
    legende[ "lueckeausZeile" ] = ["[------]", "Lücke unbestimmter Länge."];
    //out = applyklammregexp( "lueckeausZeile", lueckeausZeile, out, index, legende );
    applyklammregexp( "lueckeausZeile", lueckeausZeile, stringtomani, index, legende );

    /*

    ------

    Def: Lücke einer ganzen Zeile bzw. Lücke ganzer Zeilen, deren Anzahl unsicher ist

    */
    index[ "lueckeausmehrZeile" ] = [];
    legende[ "lueckeausmehrZeile" ] = ["------", "Lücke einer ganzen Zeile bzw. Lücke ganzer Zeilen, deren Anzahl unsicher ist."];
    //out = applyklammregexp( "lueckeausmehrZeile", lueckeausmehrZeile, out, index, legende );
    applyklammregexp( "lueckeausmehrZeile", lueckeausmehrZeile, stringtomani, index, legende );

    /*
    ][ Lücke unbestimmt
    */
    index[ "lueckeunbest" ] = [];
    legende[ "lueckeunbest" ] = ["][", "Lücke unbestimmt"];
    //out = applyklammregexp( "lueckeunbest", lueckeunbest, out, index, legende );
    applyklammregexp( "lueckeunbest", lueckeunbest, stringtomani, index, legende );

    /*TILGUNG ALLER ART*/

    /*
        {}
        Def: Irrtümlich hinzugefügte Buchstaben, die der Herausgeber getilgt hat

    */
    index[ "irrgetilgt" ] = [];
    legende[ "irrgetilgt" ] = ["{abc}", "Irrtümlich hinzugefügte Buchstaben, die der Herausgeber getilgt hat."];
    //out = applyklammregexp( "irrgetilgt", irrgetilgt, out, index, legende );
    applyklammregexp( "irrgetilgt", irrgetilgt, stringtomani, index, legende );

    /*
        〚 〛 
        Def: In der Antike getilgte Buchstaben, die trotzdem deutlich oder mit Wahrscheinlich-
        keit zu lesen sind
    */
    index[ "tilg" ] = [];
    legende[ "tilg" ] = ["〚abc〛", "In der Antike getilgte Buchstaben, die trotzdem deutlich oder mit Wahrscheinlichkeit zu lesen sind."];
    //out = applyklammregexp( "tilg", tilg, out, index, legende );
    applyklammregexp( "tilg", tilg, stringtomani, index, legende );

    /*
        [[ ]]
        Def: Rasur; In der Antike getilgte Buchstaben, die trotzdem deutlich oder mit Wahrscheinlichkeit zu lesen sind.
    */
    index[ "rasiert" ] = [];
    legende[ "rasiert" ] = ["[[abc]]", "Rasur; In der Antike getilgte Buchstaben, die trotzdem deutlich oder mit Wahrscheinlichkeit zu lesen sind."];
    //out = applyklammregexp( "rasiert", rasiert, out, index, legende );
    applyklammregexp( "rasiert", rasiert, stringtomani, index, legende );

    /*
        〚[] 〛
        Def: In der Antike getilgte Buchstaben, die der Herausgeber ergänzt hat
    */
    index[ "tilgerg" ] = [];
    legende[ "tilgerg" ] = ["〚[abc] 〛", "In der Antike getilgte Buchstaben, die der Herausgeber ergänzt hat."];
    //out = applyklammregexp( "tilgerg", tilgerg, out, index, legende );
    applyklammregexp( "tilgerg", tilgerg, stringtomani, index, legende );

    /*
        〚[...] 〛, 〚[-5?-] 〛, 〚[---] 〛
        Def: In der Antike getilgte Buchstaben, deren Anzahl sich sicher, weniger sicher oder
        gar nicht berechnen läßt
    */
    index[ "tilguns" ] = [];
    legende[ "tilguns" ] = ["〚[...] 〛, 〚[-5?-] 〛, 〚[---] 〛", "In der Antike getilgte Buchstaben, deren Anzahl sich sicher, weniger sicher oder gar nicht berechnen läßt."];
    //out = applyklammregexp( "tilguns", tilguns, out, index, legende );
    applyklammregexp( "tilguns", tilguns, stringtomani, index, legende );

     /*
        〚[------] 〛
        Def: Lücke einer ganzen getilgten Zeile
    */
    index[ "tilgzei" ] = [];
    legende[ "tilgzei" ] = ["〚[------] 〛", "Lücke einer ganzen getilgten Zeile."];
    //out = applyklammregexp( "tilgzei", tilgzei, out, index, legende );
    applyklammregexp( "tilgzei", tilgzei, stringtomani, index, legende );

    /*ERSATZ VON BUCHSTABEN UND LUECKEN / WIEDERHERSTELLUNG */

    /*
    《》
    Def: Ersatz für getilgte Buchstaben, die deutlich oder mit Wahrscheinlichkeit zu lesen
    sind*/
    index[ "wiederherst" ] = [];
    legende[ "wiederherst" ] = ["《abc》", "Ersatz für getilgte Buchstaben, die deutlich oder mit Wahrscheinlichkeit zu lesen sind."];
    //out = applyklammregexp( "wiederherst", wiederherst, out, index, legende );
    applyklammregexp( "wiederherst", wiederherst, stringtomani, index, legende );

    /*
    ⎣⎦
    Def: Durch den Editor wieder hergestellet.*/
    index[ "editorrekonst" ] = [];
    legende[ "editorrekonst" ] = ["⎣abc⎦", "Durch den Editor wieder hergestellet."];
    //out = applyklammregexp( "editorrekonst", editorrekonst, out, index, legende );
    applyklammregexp( "editorrekonst", editorrekonst, stringtomani, index, legende );

    /*
    ⌈⌉
    Def: Aus dem Original rekonstruiert.*/
    index[ "recovori" ] = [];
    legende[ "recovori" ] = ["⌈abc⌉", "Aus dem Original rekonstruiert."];
    //out = applyklammregexp( "recovori", recovori, out, index, legende );
    applyklammregexp( "recovori", recovori, stringtomani, index, legende );

    /*
    <<>>
    Def: Buchstaben, die anstelle getilgter Passagen eingefügt worden sind.*/
    index[ "ueberschr" ] = [];
    legende[ "ueberschr" ] = ["&lt;&lt;abc&gt;&gt;", "Buchstaben, die anstelle getilgter Passagen eingefügt worden sind."];
    //out = applyklammregexp( "ueberschr", ueberschr, out, index, legende );
    applyklammregexp( "ueberschr", ueberschr, stringtomani, index, legende );

    /*
    <<[[]]>>
    Def: Der Text wurde zunächst getilgt und dann wieder eingemeißelt; häufig leg. III.*/
    index[ "tilgrewrite" ] = [];
    legende[ "tilgrewrite" ] = ["&lt;&lt[[abc]]&gt;&gt;", "Der Text wurde zunächst getilgt und dann wieder eingemeißelt."];
    //out = applyklammregexp( "tilgrewrite", tilgrewrite, out, index, legende );
    applyklammregexp( "tilgrewrite", tilgrewrite, stringtomani, index, legende );

     /*
    <a=b>
    Def: Korrektur (Beispiel: f<e=F>cit für FFCIT).*/
    index[ "korr" ] = [];
    legende[ "korr" ] = ["&lt;a=b&gt;", "Korrektur (Beispiel: f<e=F>cit für FFCIT)."];
    //out = applyklammregexp( "korr", korr, out, index, legende );
    applyklammregexp( "korr", korr, stringtomani, index, legende );

    /*
    《[]》
    Def: Ersatz für getilgte Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig verschwunden oder am Rande weggebrochen sind und die der Herausgeber ergänzt hat.*/
    index[ "erszuff" ] = [];
    legende[ "erszuff" ] = ["《[abc]》", "Ersatz für getilgte Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig verschwunden oder am Rande weggebrochen sind und die der Herausgeber ergänzt hat."];
    //out = applyklammregexp( "erszuff", erszuff, out, index, legende );
    applyklammregexp( "erszuff", erszuff, stringtomani, index, legende );

    /*
    《[...]》,《[-5?-]》,《[---]》
    Def: Ersatz für getilgte Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig verschwunden oder am Rande weggebrochen sind und deren Anzahl sich sicher, weniger sicher oder gar nicht berechnen läßt.*/
    index[ "erzuffunbst" ] = [];
    legende[ "erzuffunbst" ] = ["《[...]》,《[-5?-]》,《[---]》", "Ersatz für getilgte Buchstaben, die infolge einer zufälligen Beschädigung der Oberfläche völlig verschwunden oder am Rande weggebrochen sind und deren Anzahl sich sicher, weniger sicher oder gar nicht berechnen läßt."];
    //out = applyklammregexp( "erzuffunbst", erzuffunbst, out, index, legende );
    applyklammregexp( "erzuffunbst", erzuffunbst, stringtomani, index, legende );

    /*Angaben des Editors*/
    /*
    (abc)
    Def: Auflösung von Abkürzungen, Abgekürztes Wort, das der Herausgeber aufgelöst hat.*/
    index[ "aufabk" ] = [];
    legende[ "aufabk" ] = ["(abc)", "Auflösung von Abkürzungen, Abgekürztes Wort, das der Herausgeber aufgelöst hat."];
    //out = applyklammregexp( "aufabk", aufabk, out, index, legende );
    applyklammregexp( "aufabk", aufabk, stringtomani, index, legende );

    /*
    (abc-)
    Def: Abgekürztes Wort, das der Herausgeber aufgelöst hat, doch ist die Deklinations- oder Konjugationsform unsicher.*/
    index[ "aufabkuns" ] = [];
    legende[ "aufabkuns" ] = ["(abc-)", "Abgekürztes Wort, das der Herausgeber aufgelöst hat, doch ist die Deklinations- oder Konjugationsform unsicher."];
    //out = applyklammregexp( "aufabkuns", aufabkuns, out, index, legende ); 
    applyklammregexp( "aufabkuns", aufabkuns, stringtomani, index, legende );    
    /*
    (scil. abc)
    Def: Ein Wort, das nicht im Text steht, das aber stillschweigend zu verstehen ist und das der Herausgeber hinzugefügt hat.*/
    index[ "scil" ] = [];
    legende[ "scil" ] = ["(scil. abc)", "Ein Wort, das nicht im Text steht, das aber stillschweigend zu verstehen ist und das der Herausgeber hinzugefügt hat."];
    //out = applyklammregexp( "scil", scil, out, index, legende );
    applyklammregexp( "scil", scil, stringtomani, index, legende );

    /*
    ⟨------⟩,⟨---⟩,⟨------?⟩,⟨---?⟩
    Def: Unvollendete Inschrift (die Inschrift bricht entweder innerhalb der Zeile oder am Zeilenende ab; in fraglichen Fällen mit ? vor der schließenden Klammer).*/
    index[ "unvollen" ] = [];
    legende[ "unvollen" ] = ["⟨------⟩,⟨---⟩,⟨------?⟩,⟨---?⟩", "Unvollendete Inschrift (die Inschrift bricht entweder innerhalb der Zeile oder am Zeilenende ab; in fraglichen Fällen mit ? vor der schließenden Klammer)."];
    //out = applyklammregexp( "unvollen", unvollen, out, index, legende );
    applyklammregexp( "unvollen", unvollen, stringtomani, index, legende );

    /*
    abc(---)
    Def: Abgekürztes Wort, das nicht sicher aufgelöst werden kann.*/
    index[ "hinwabk" ] = [];
    legende[ "hinwabk" ] = ["abc(---)", "Abgekürztes Wort, das nicht sicher aufgelöst werden kann."];
    //out = applyklammregexp( "hinwabk", hinwabk, out, index, legende );
    applyklammregexp( "hinwabk", hinwabk, stringtomani, index, legende );

    /*
    <abc>,⟨abc⟩
    Def: Irrtümlich ausgelassene Buchstaben, die der Herausgeber hinzugefügt hat.*/
    index[ "korrdeseditors" ] = [];
    legende[ "korrdeseditors" ] = ["&lt;abc&gt;, ⟨abc⟩", "Irrtümlich ausgelassene Buchstaben, die der Herausgeber hinzugefügt hat."];
    //out = applyklammregexp( "korrdeseditors", korrdeseditors, out, index, legende );
    applyklammregexp( "korrdeseditors", korrdeseditors, stringtomani, index, legende );

    /*
    (!)
    Def: Unmittelbar an ein Wort anschließend markiert (!) eine ungewöhnliche Schreibweise wie Maxumus(!); isoliert stehend markiert (!) ein fehlendes Wort wie das fehlende f(ilius) in C(aius) Iulius C(ai) (!) Maximus.*/
    index[ "ungewschreibung" ] = [];
    legende[ "ungewschreibung" ] = ["(!)", "Unmittelbar an ein Wort anschließend markiert (!) eine ungewöhnliche Schreibweise wie Maxumus(!); isoliert stehend markiert (!) ein fehlendes Wort wie das fehlende f(ilius) in C(aius) Iulius C(ai) (!) Maximus."];
    //out = applyklammregexp( "ungewschreibung", ungewschreibung, out, index, legende );
    applyklammregexp( "ungewschreibung", ungewschreibung, stringtomani, index, legende );

    /*
    ˹abc˺
    Def: Buchstaben, die der Herausgeber korrigiert hat.*/
    index[ "buchstherausrekonst" ] = [];
    legende[ "buchstherausrekonst" ] = ["˹abc˺", "Buchstaben, die der Herausgeber korrigiert hat."];
    //out = applyklammregexp( "buchstherausrekonst", buchstherausrekonst, out, index, legende );
    applyklammregexp( "buchstherausrekonst", buchstherausrekonst, stringtomani, index, legende );

    /*
    ˻abc˼
    Def: Buchstaben, die der Herausgeber unter Benutzung anderer Zeugnisse korrigiert hat..*/
    index[ "eckenunbek" ] = [];
    legende[ "eckenunbek" ] = ["˻abc˼", "Buchstaben, die der Herausgeber unter Benutzung anderer Zeugnisse korrigiert hat."];
    //out = applyklammregexp( "eckenunbek", eckenunbek, out, index, legende );
    applyklammregexp( "eckenunbek", eckenunbek, stringtomani, index, legende );

    /*
    (vac.), (vac. 3?)
    Def: vacat; Abschnitte einer Zeile, die nicht beschrieben gewesen zu sein scheinen und deren Ausdehnung – nach der Zahl der Buchstaben, die man darin hätte unterbringen können, berechnet – sicher oder weniger sicher oder gar nicht berechnet werden kann.*/
    index[ "vac" ] = [];
    legende[ "vac" ] = ["(vac.), (vac. 3?)", "vacat; Abschnitte einer Zeile, die nicht beschrieben gewesen zu sein scheinen und deren Ausdehnung – nach der Zahl der Buchstaben, die man darin hätte unterbringen können, berechnet – sicher oder weniger sicher oder gar nicht berechnet werden kann."];
    //out = applyklammregexp( "vac", vac, out, index, legende );
    applyklammregexp( "vac", vac, stringtomani, index, legende );

    /*
    =
    Def: Worttrennung.*/
    index[ "wtrenn" ] = [];
    legende[ "wtrenn" ] = ["=", "Worttrennung."];
    //out = applyklammregexp( "wtrenn", wtrenn, out, index, legende );
    applyklammregexp( "wtrenn", wtrenn, stringtomani, index, legende );

    /*Zeilen und Spalten*/
    /* 
        /
        Def: Zeilenende
    */ 
    index[ "zeilenende" ] = [];
    legende[ "zeilenende" ] = ["/", "Zeilentrenner; Zeilenende."];
    //out = applyklammregexp( "zeilenende", zeilenende, out, index, legende );
    applyklammregexp( "zeilenende", zeilenende, stringtomani, index, legende );

    /* 
        /5
        Def: Zeilenende mit Zahl
    */ 
    index[ "zeilenendeDigit" ] = [];
    legende[ "zeilenendeDigit" ] = ["/5", "Zeilenende mit Numerierung."];
    //out = applyklammregexp( "zeilenendeDigit", zeilenendeDigit, out, index, legende );
    applyklammregexp( "zeilenendeDigit", zeilenendeDigit, stringtomani, index, legende );

    /* 
        |
        Def: Zeilenanfang
    */ 
    index[ "zeilenanfang" ] = [];
    legende[ "zeilenanfang" ] = ["|", "Zeilentrenner; Zeilenanfang."];
    //out = applyklammregexp( "zeilenanfang", zeilenanfang, out, index, legende ); 
    applyklammregexp( "zeilenanfang", zeilenanfang, stringtomani, index, legende ); 

    /* 
        |5
        Def: Zeilenanfang mit Numerierung
    */ 
    index[ "zeilenanfangDigit" ] = [];
    legende[ "zeilenanfangDigit" ] = ["|5", "Zeilenanfang mit Numerierung."];
    //out = applyklammregexp( "zeilenanfangDigit", zeilenanfangDigit, out, index, legende );
    applyklammregexp( "zeilenanfangDigit", zeilenanfangDigit, stringtomani, index, legende );

    /* 
        ||
        Def: Spaltenumbruch; Abtrennung von Spalten; Spaltenanfang
    */ 
    index[ "spaltenanfang" ] = [];
    legende[ "spaltenanfang" ] = ["||", "Spaltenumbruch; Abtrennung von Spalten; Spaltenanfang."];
    //out = applyklammregexp( "spaltenanfang", spaltenanfang, out, index, legende ); 
    applyklammregexp( "spaltenanfang", spaltenanfang, stringtomani, index, legende ); 
    
    return [out, index, legende];
}

function delKLAMMSYS( stringtomani ){ //RUN ON NFC/NFKC
    let matches = stringtomani.match( lueckeBestimmt );
    
    let i = 0;
    let out = "";
    let startindex = 0;
    while( lueckeBestimmt.exec( stringtomani ) ){
        console.log( lueckeBestimmt.lastIndex-matches[i].length, lueckeBestimmt.lastIndex, matches[i] );
        out += stringtomani.slice(startindex, lueckeBestimmt.lastIndex - matches[i].length); 
        i+=1;
        startindex = lueckeBestimmt.lastIndex;
    }
    return out;
}
