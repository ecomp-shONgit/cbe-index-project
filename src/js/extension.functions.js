'use strict';

/* localizeNode
   reads the attribute 'data-localize' from node and replace the innerHTML with the localized message
   @var element node                            
   @need browser.i18n
*/  
function localizeNode( node ){
    let localizeKey = node.getAttribute('data-localize');
    if( localizeKey!= null && localizeKey != '' ){
        let localizeMessage = browser.i18n.getMessage( localizeKey );
        //console.log("uiui", localizeMessage);
        if( localizeMessage != '' ){
            node.innerHTML = "<i>Index signorum criticorum</i> ("+localizeMessage+")";   
        }
    }
}
  
 /* pleaseDoItNow
    execute the 'main script' in tab-context 
    @var object storage-data 
    @need browser.i18n
    @need browser.tabs
    @need browser.runtime
 */

function pleaseDoItNow( data ){
    
    let tabID = data.tabID;
    if( typeof( tabID ) === 'undefined' || tabID === null || tabID ===0 ){
        return;
    } 
    browser.tabs.get( tabID, function( tab ){
        if( browser.runtime.lastError ){ 
            console.log('There was an error in pleaseDoItNow : \n' + browser.runtime.lastError.message);
        }
        console.log("INDEX-CBE: call on tabID "+tabID+" with url "+tab.url);
        /* the tab and the popup are separeted - 
        so we have to load some js and css 
        in tab-context */     
        if( !browser.runtime.lastError && 
            tab                        && 
            tab.url                    && 
            tab.url.substring(0,6)!="chrome" && 
            tab.url.substring(0,5)!="about" &&
            tab.status === "complete"){
            
            console.log("INDEX-CBE: we are in tabID "+tabID+" with url "+tab.url);       

            /* browser.js */
            browser.tabs.executeScript(tabID, { file: 'js/browser.js' }, function( ){
                if( browser.runtime.lastError ){
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                }
            }); 

            /* extension_functions.js */  
            browser.tabs.executeScript(tabID, { file: 'js/extension.functions.js' }, function( ){
                if( browser.runtime.lastError ){
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                }
            });           

            /* css file  */
            browser.tabs.insertCSS(tabID, { file: 'css/main.css' }, function( ){
                if( browser.runtime.lastError ){
                    console.log('There was an error inserting css : \n' + browser.runtime.lastError.message);
                }
            }); 
            /* functionality used in the content-script can loaded here */
            browser.tabs.executeScript(tabID, { file: 'js/textnorm.js' }, function( ){
                if( browser.runtime.lastError ){
                    
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                }
                
            });
            /* content-script can loaded here */
            browser.tabs.executeScript(tabID, { file: 'js/strdist.js' }, function( ){
                if( browser.runtime.lastError ){
                    
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                }
                
            }); 
            /* content-script can loaded here */

            browser.tabs.executeScript(tabID, { file: 'js/textdecomp.js' }, function( ){
                if( browser.runtime.lastError ){
                    
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                }
                
            }); 
            /* content-script can loaded here */
            browser.tabs.executeScript(tabID, { file: 'js/klammsys.js' }, function( ){
                if( browser.runtime.lastError ){
                    
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                }
                
            }); 
            browser.tabs.executeScript(tabID, { file: 'js/abkAW.js' }, function( ){
                if( browser.runtime.lastError ){
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                } 
            });
            browser.tabs.executeScript(tabID, { file: 'js/hcts.js' }, function( ){
                if( browser.runtime.lastError ){
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                } 
            });
            browser.tabs.executeScript(tabID, { file: 'js/refexttemp.js' }, function( ){
                if( browser.runtime.lastError ){
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                } 
            });
            browser.tabs.executeScript(tabID, { file: 'js/content.js' }, function( ){
                if( browser.runtime.lastError ){
                    console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
                } 
            });
            console.log("No Error inserting JS.");
        } else {
             console.log("INDEX-CBE: will do nothing.");
        }
    });     
}

function doISC( data ){
    let tabID = data.tabID;
    if( typeof( tabID ) === 'undefined' || tabID === null || tabID ===0 ){
        return;
    } 
    browser.tabs.get( tabID, function( tab ){
        if( browser.runtime.lastError ){ 
            console.log('There was an error in pleaseDoItNow : \n' + browser.runtime.lastError.message);
        }
        console.log("INDEX-CBE: call on tabID "+tabID+" with url "+tab.url);
        /* the tab and the popup are separeted - 
        so we have to load some js and css 
        in tab-context */     
        if( !browser.runtime.lastError && 
            tab                        && 
            tab.url                    && 
            tab.url.substring(0,6)!="chrome" && 
            tab.url.substring(0,5)!="about" &&
            tab.status === "complete"){
            browser.tabs.sendMessage( tabID, {cmd:"ISC", key: tabID}, function(response) {});
        } 
    });
}

function doIV( data ){
    //pleaseDoItNow(data);

    let tabID = data.tabID;
    if( typeof( tabID ) === 'undefined' || tabID === null || tabID ===0 ){
        return;
    } 
    browser.tabs.get( tabID, function( tab ){
        if( browser.runtime.lastError ){ 
            console.log('There was an error in pleaseDoItNow : \n' + browser.runtime.lastError.message);
        }
        console.log("INDEX-CBE: call on tabID "+tabID+" with url "+tab.url);
        /* the tab and the popup are separeted - 
        so we have to load some js and css 
        in tab-context */     
        if( !browser.runtime.lastError && 
            tab                        && 
            tab.url                    && 
            tab.url.substring(0,6)!="chrome" && 
            tab.url.substring(0,5)!="about" &&
            tab.status === "complete"){

            browser.tabs.sendMessage( tabID, {cmd:"IV", key: tabID}, function(response) {});

             
        } 
    });
}
function doIL( data ){
    //pleaseDoItNow(data);
    let tabID = data.tabID;
    if( typeof( tabID ) === 'undefined' || tabID === null || tabID ===0 ){
        return;
    } 
    browser.tabs.get( tabID, function( tab ){
        if( browser.runtime.lastError ){ 
            console.log('There was an error in pleaseDoItNow : \n' + browser.runtime.lastError.message);
        }
        console.log("INDEX-CBE: call on tabID "+tabID+" with url "+tab.url);
        /* the tab and the popup are separeted - 
        so we have to load some js and css 
        in tab-context */     
        if( !browser.runtime.lastError && 
            tab                        && 
            tab.url                    && 
            tab.url.substring(0,6)!="chrome" && 
            tab.url.substring(0,5)!="about" &&
            tab.status === "complete"){
            browser.tabs.sendMessage( tabID, {cmd:"IL", key: tabID}, function(response) {});
            
        } 
    });
}
/* saveTheOptions
   save the options in browser.storage
               
   @need browser.i18n
   @need browser.storage
*/
function saveTheOptions( ){
    let status = document.querySelector('#status');
    let savedMess = browser.i18n.getMessage('savedOpt') || 'Options saved.';
    console.log("SAAAAAAVVVVEEEE");
    console.log(document.getElementById( "inpat1" ).value);
    let optionsss = { 
        nfdbutt: document.getElementById( "nfdbutt" ).checked,
        nfcbutt: document.getElementById( "nfcbutt" ).checked,
        nfkdbutt: document.getElementById( "nfkdbutt" ).checked,
        nfkcbutt: document.getElementById( "nfkcbutt" ).checked,
        disambidiak: document.getElementById( "disambidiak" ).checked,
        disambidashes: document.getElementById( "disambidashes" ).checked,
        uv: document.getElementById( "uv" ).checked,
        ji: document.getElementById( "ji" ).checked,
        womarkup: document.getElementById( "womarkup" ).checked,
        delpunktu: document.getElementById( "delpunktu" ).checked,
        delnewl: document.getElementById( "delnewl" ).checked,
        elisions: document.getElementById( "elisions" ).checked,
        alphapriv: document.getElementById( "alphapriv" ).checked,
        delnumber: document.getElementById( "delnumber" ).checked,
        hyph: document.getElementById( "hyph" ).checked,
        iota: document.getElementById( "iota" ).checked,
        sigma: document.getElementById( "sigma" ).checked,
        deldiak: document.getElementById( "deldiak" ).checked,
        unkown: document.getElementById( "unkown" ).checked,
        ligatu: document.getElementById( "ligatu" ).checked,
        eqcase: document.getElementById( "eqcase" ).checked,
        delbrackets: document.getElementById( "delbrackets" ).checked,
        basictextnorm: document.getElementById( "basictextnorm" ).checked,
        delall: document.getElementById( "delall" ).checked,
        combi3: document.getElementById( "combi3" ).checked,
        translgrla: document.getElementById( "translgrla" ).checked,
        transllagr: document.getElementById( "transllagr" ).checked,
        dl1: document.getElementById( "dl1" ).checked,
        dl2: document.getElementById( "dl2" ).checked,
        dl3: document.getElementById( "dl3" ).checked,
        inpat1: document.getElementById( "inpat1" ).value,
        inpat2: document.getElementById( "inpat2" ).value,
        inpwt1: document.getElementById( "inpwt1" ).value,
        inpwt2: document.getElementById( "inpwt2" ).value,
        inpdct1: document.getElementById( "inpdct1" ).value,
        inpdct2: document.getElementById( "inpdct2" ).value,
        inpdct3: document.getElementById( "inpdct3" ).value
    };



    browser.storage.local.set({
    option3100: optionsss
    }, function( ){
      status.textContent = savedMess;
      setTimeout(function( ){ status.textContent = ''; }, 1450);
    });  
}
  
  
/* setTheOptions
   load the options from browser.storage
               
   @need browser.i18n
   @need browser.storage
*/ 
function setTheOptions( ){
  let status = document.querySelector('#status');
  let loadMess = browser.i18n.getMessage('loadOpt') || 'Options loaded.';  
  console.log("settheoptions");
  browser.storage.local.get( "option3100", function( data ){
        console.log(data.option3100);
        if(data.option3100){
            document.getElementById( "nfdbutt" ).checked = data.option3100.nfdbutt;
            document.getElementById( "nfcbutt" ).checked= data.option3100.nfcbutt;
            document.getElementById( "nfkdbutt" ).checked = data.option3100.nfkdbutt;
            document.getElementById( "nfkcbutt" ).checked = data.option3100.nfkcbutt;
            document.getElementById( "disambidiak" ).checked = data.option3100.disambidiak;
            document.getElementById( "disambidashes" ).checked = data.option3100.disambidashes;
            document.getElementById( "uv" ).checked = data.option3100.uv;
            document.getElementById( "ji" ).checked = data.option3100.ji;
            document.getElementById( "womarkup" ).checked = data.option3100.womarkup;
            document.getElementById( "delpunktu" ).checked= data.option3100.delpunktu;
            document.getElementById( "delnewl" ).checked = data.option3100.delnewl;
            document.getElementById( "elisions" ).checked = data.option3100.elisions;
            document.getElementById( "alphapriv" ).checked = data.option3100.alphapriv;
            document.getElementById( "delnumber" ).checked = data.option3100.delnumber;
            document.getElementById( "hyph" ).checked = data.option3100.hyph;
            document.getElementById( "iota" ).checked = data.option3100.iota;
            document.getElementById( "sigma" ).checked = data.option3100.sigma;
            document.getElementById( "deldiak" ).checked = data.option3100.deldiak;
            document.getElementById( "unkown" ).checked = data.option3100.unkown;
            document.getElementById( "ligatu" ).checked= data.option3100.ligatu;
            document.getElementById( "eqcase" ).checked= data.option3100.eqcase;
            document.getElementById( "delbrackets" ).checked= data.option3100.delbrackets;
            document.getElementById( "basictextnorm" ).checked = data.option3100.basictextnorm;
            document.getElementById( "delall" ).checked = data.option3100.delall;
            document.getElementById( "combi3" ).checked= data.option3100.combi3;
            document.getElementById( "translgrla" ).checked = data.option3100.translgrla;
            document.getElementById( "transllagr" ).checked= data.option3100.transllagr;

            document.getElementById( "dl1" ).checked= data.option3100.dl1;
            document.getElementById( "dl2" ).checked= data.option3100.dl2;
            document.getElementById( "dl3" ).checked= data.option3100.dl3;
            document.getElementById( "inpat1" ).value= data.option3100.inpat1;
            document.getElementById( "inpat2" ).value= data.option3100.inpat2;
            document.getElementById( "inpwt1" ).value= data.option3100.inpwt1;
            document.getElementById( "inpwt2" ).value= data.option3100.inpwt2;
            document.getElementById( "inpdct1" ).value= data.option3100.inpdct1;
            document.getElementById( "inpdct2" ).value= data.option3100.inpdct2;
            document.getElementById( "inpdct3" ).value= data.option3100.inpdct3;
        } else { //default values
            document.getElementById( "nfdbutt" ).checked = false;
            document.getElementById( "nfcbutt" ).checked = false;
            document.getElementById( "nfkdbutt" ).checked = false;
            document.getElementById( "nfkcbutt" ).checked = true;
            document.getElementById( "disambidiak" ).checked = false;
            document.getElementById( "disambidashes" ).checked = false;
            document.getElementById( "uv" ).checked = false;
            document.getElementById( "ji" ).checked = false;
            document.getElementById( "womarkup" ).checked = false;
            document.getElementById( "delpunktu" ).checked= false;
            document.getElementById( "delnewl" ).checked = false;
            document.getElementById( "elisions" ).checked = true;
            document.getElementById( "alphapriv" ).checked = true;
            document.getElementById( "delnumber" ).checked = false;
            document.getElementById( "hyph" ).checked = true;
            document.getElementById( "iota" ).checked = false;
            document.getElementById( "sigma" ).checked = false;
            document.getElementById( "deldiak" ).checked = false;
            document.getElementById( "unkown" ).checked = false;
            document.getElementById( "ligatu" ).checked= false;
            document.getElementById( "eqcase" ).checked= false;
            document.getElementById( "delbrackets" ).checked= false;
            document.getElementById( "basictextnorm" ).checked = false;
            document.getElementById( "delall" ).checked = true;
            document.getElementById( "combi3" ).checked= false;
            document.getElementById( "translgrla" ).checked = false;
            document.getElementById( "transllagr" ).checked= false;
            

            document.getElementById( "dl1" ).checked= dl1;
            document.getElementById( "dl2" ).checked= dl2;
            document.getElementById( "dl3" ).checked= dl3;
            document.getElementById( "inpat1" ).value= inpat1;
            document.getElementById( "inpat2" ).value= inpat2;
            document.getElementById( "inpwt1" ).value= inpwt1;
            document.getElementById( "inpwt2" ).value= inpwt2;
            document.getElementById( "inpdct1" ).value= inpdct1;
            document.getElementById( "inpdct2" ).value= inpdct2;
            document.getElementById( "inpdct3" ).value= inpdct3;
        }
    status.textContent = loadMess;
    setTimeout(function() { status.textContent = ''; }, 1450);
  } );   
} 
  

 /* pleaseUnDoItNow
    execute an 'unLoadScript'
    @var object storage-data 
    @need browser.i18n
    @need browser.tabs
    @need browser.runtime
 */
function pleaseUnDoItNow(data)
  {
  var tabID = data.tabID;

  if( typeof(tabID) == 'undefined' || tabID == null || tabID==0 ) 
    {
    return;
    } 

  browser.tabs.get(tabID, function(tab) 
    {
    if(browser.runtime.lastError)  
      console.log('There was an error in pleaseDoItNow : \n' + browser.runtime.lastError.message);

     
    /* the tab and the popup are separeted - so we have to load some js and css in tab-context */     
    if(!browser.runtime.lastError && tab && tab.url && tab.url.substring(0,6)!="chrome" && tab.url.substring(0,5)!="about" ) 
      {
        // console.log("we are in tabID "+tabID+" with url "+tab.url);       

        /* browser.js */
        browser.tabs.executeScript(tabID, { file: 'js/browser.js' }, function() 
          {
          if (browser.runtime.lastError) 
            console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
          }); 

        /* extension_functions.js */  
        browser.tabs.executeScript(tabID, { file: 'js/extension.functions.js' }, function() 
          {
          if (browser.runtime.lastError)
            console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
          });           

        /* css file  */
        browser.tabs.insertCSS(tabID, { file: 'css/main.css' }, function() 
          {
          if (browser.runtime.lastError)
            console.log('There was an error inserting css : \n' + browser.runtime.lastError.message);
          }); 
             
      
      /* content-script  */
        browser.tabs.executeScript(tabID, { file: 'js/content.unload.js' }, function() 
          {
          if (browser.runtime.lastError)
            console.log('There was an error injecting script : \n' + browser.runtime.lastError.message);
          });         
       
      
      } 
    else
      {
      // console.log("will do nothing");
      
      }

    });     
  }  
         
