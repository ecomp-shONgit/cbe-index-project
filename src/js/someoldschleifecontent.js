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
