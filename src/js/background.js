'use strict';

/*  background.js  
                         
    @need js/browser.js
    @need js/extension.functions.js 
           
    @need browser.runtime
    @need browser.storage
    @need browser.i18n
    @need browser.browserAction
    @need browser.tabs        
*/ 

browser.runtime.onInstalled.addListener( function( ){
    browser.storage.local.clear( );
    browser.storage.local.set({ isActive: false, backnotisloaded: true, tabID: 0, option1: 4 }, function() { } );
    browser.browserAction.setBadgeText({ text: 'OFF' });
    browser.browserAction.setBadgeBackgroundColor({ color: "gray" });          
});
 
browser.tabs.onUpdated.addListener( function( info ){ 
    browser.storage.local.set( {tabID: info.tabId} , function( ) {
        browser.storage.local.get(null, function( data ){  
            if( data.isActive ){
                pleaseDoItNow( data );
            } /*else {
                pleaseUnDoItNow( data );    
            }*/
        }); 
    });
});  

browser.tabs.onActivated.addListener( function( info ){ 
    browser.storage.local.set( {tabID: info.tabId} , function( ) {
        browser.storage.local.get(null, function( data ){  
           if( data.isActive ){
                if(!browser){
                    pleaseDoItNow( data );
                }

            } /*else {

                pleaseUnDoItNow( data );    

            }*///end else
        }); 
    });
}); 
browser.tabs.onCreated.addListener( function( info ){ 
    browser.storage.local.set( {tabID: info.tabId} , function( ) {
        browser.storage.local.get(null, function( data ){  
                pleaseDoItNow( data );
        }); 
    });
}); 
/*

//https://discourse.mozilla.org/t/why-is-it-soo-hard-to-inject-a-content-script-only-once-at-site-load/38903/2

browser.tabs.onUpdated.addListener(onTabUpdated);

async function onTabUpdated (tabId, changeInfo, tab) {
  // when page starts to load, it has LOADING state and URL in the change state object (but who knows if we can count on it...) 
  if (!(changeInfo.status === browser.tabs.TabStatus.LOADING && changeInfo.url)) return;    
  // make sure we don't inject it multiple times
  if (await browser.tabs.sendMessage(tabId, {type: 'ping'}).catch(() => false)) return;     
  await browser.tabs.executeScript(tabId, {file: 'cs.js', runAt: 'document_start'}); 
}

*/

//IPCAM-446337





/*****************************************************************
 * communication tab - background
 *****************************************************************/
let allthings = {};
let allthingsIV = {};
let allthingsIL = {};
browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if( request.cmd === "insertISC" ){ //insert ISC data
            let truekey = request.key.split("#")[0];
            allthings[ truekey ] = request.payload;
            sendResponse( { resp: "nowallare", alluneed: JSON.stringify( allthings ) } );
        } if( request.cmd === "insertIV" ){ // insert IV data
            let truekey = request.key.split("#")[0];
            allthingsIV[ truekey ] = request.payload;
            sendResponse( { resp: "nowallareIV", alluneed: JSON.stringify( allthingsIV ) } );
        } if( request.cmd === "insertIL" ){ // insert IV data
            let truekey = request.key.split("#")[0];
            allthingsIL[ truekey ] = request.payload;
            sendResponse( { resp: "nowallareIL", alluneed: JSON.stringify( allthingsIL ) } );
        } else {
            sendResponse({ result: "error", message: `Invalid 'cmd'`, comming: request });
        }
        // Note: Returning true is required here!
        return true; 
    }
);
//EOF
