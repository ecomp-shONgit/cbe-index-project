'use strict';

/*  popup.js  
                         
    @need js/browser.js
    @need js/extension.functions.js 
           
    @need browser.runtime
    @need browser.storage
    @need browser.i18n
    @need browser.browserAction
    @need browser.tabs        
*/ 

document.addEventListener("DOMContentLoaded", function(event) { 
    let isActiveSwitch = document.querySelector('#isActiveSwitch');
    let iscButton_el = document.querySelector('#ButtonISC');
    let ivButton_el = document.querySelector('#ButtonIV');
    let ilButton_el = document.querySelector('#ButtonIL');
    let optButton_el = document.querySelector('#optionsButton');

  /* localization of html-elements */
  document.querySelectorAll('.localize').forEach(function(node) {
    //localizeNode(node);
    });   

  /* get all stored data */
  browser.storage.local.get(null, function(data) {
    console.log(data);
    isActiveSwitch.checked = data.isActive;
    });
  
  /* switch on / off */  
  isActiveSwitch.addEventListener("click", function(el) {
    let status = el.target.checked;
    browser.storage.local.set({isActive: status}, function(){
       browser.storage.local.get(null, function(data){ 
        if( data.isActive ){
          browser.browserAction.setBadgeText({text: 'ON'});
          browser.browserAction.setBadgeBackgroundColor({color: "red"});
          pleaseDoItNow(data);
         } else {
          browser.browserAction.setBadgeText({text: 'OFF'});
          browser.browserAction.setBadgeBackgroundColor({color: "gray"});  
          //pleaseUnDoItNow(data);                  
         }            
        }); 
      }); 
    });
    
  /* Button signes criticis */
  iscButton_el.addEventListener("click", function(el) {  
    let status = isActiveSwitch.checked;
    
    browser.storage.local.set({isActive: status}, function() 
      {
        console.log(status);
       browser.storage.local.get(null, function(data)
        { 
        console.log(data);
        if( data.isActive )
          {
          //browser.browserAction.setBadgeText({text: 'ON'});
          //browser.browserAction.setBadgeBackgroundColor({color: "red"});
            
          doISC(data);
          }
        }); 
      }); 
  }); 
     /* Button index verborum */
  ivButton_el.addEventListener("click", function(el) {  
    let status = el.target.checked;
    browser.storage.local.set({isActive: status}, function() 
      {
       browser.storage.local.get(null, function(data)
        { 
        if( data.isActive )
          {
          browser.browserAction.setBadgeText({text: 'ON'});
          browser.browserAction.setBadgeBackgroundColor({color: "red"});
            
          doIV(data);
          }
        }); 
      }); 
  }); 
     /* Button index loccorum */
  ilButton_el.addEventListener("click", function(el) {  
    //browser.runtime.openOptionsPage(); 
    let status = el.target.checked;
    browser.storage.local.set({isActive: status}, function() 
      {
       browser.storage.local.get(null, function(data)
        { 
        if( data.isActive )
          {
          browser.browserAction.setBadgeText({text: 'ON'});
          browser.browserAction.setBadgeBackgroundColor({color: "red"});
            
          doIL(data);
          }
        }); 
      }); 
  }); 
  

    /* optionButton */
  optButton_el.addEventListener("click", function(el) {  
    browser.runtime.openOptionsPage();  
  }); 
}); 
