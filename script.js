let parent1=document.querySelector("div.parent")
let pag1=document.querySelectorAll("div[class^='q1']")
let tab1=document.querySelectorAll("div[class^='in1']")
let prop1=document.querySelectorAll("div[class^='pr1'] div")
let inpt1=document.querySelectorAll("div[class^='in1'] div input")
let bt=document.querySelectorAll("button")
console.log(prop1)
bt[0].onclick=function(){
parent1.style.display="none";
pag1[0].style.display="block";
tab1[0].style.display="block";
prop1.forEach(function(e){
    e.onclick=function(){
            this.style['background-color']='black'
            this.style['pointer-events']='none';
        if (this===prop1[0]){
            inpt1[0].value=this.innerHTML
        }else if(this===prop1[2]){
            inpt1[1].value=this.innerHTML
        }else if(this===prop1[3]){
            inpt1[2].value=this.innerHTML
        }else if (this===prop1[5]){
            inpt1[4].value=this.innerHTML
        }else if(this===prop1[7]){
            inpt1[3].value=this.innerHTML
        }else{
            prop1.forEach(function(e){
                e.style['pointer-events']='none';
            })
            this.style.color="red";
            this.innerHTML='false';
            setTimeout(function(){
                location.reload()
            },1500)
        }
        if(inpt1[0].value===prop1[0].innerHTML && inpt1[1].value===prop1[2].innerHTML && 
            inpt1[2].value===prop1[3].innerHTML && inpt1[3].value===prop1[7].innerHTML
            && inpt1[4].value===prop1[5].innerHTML){
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                });
                bt[1].style.display="block";
            }
    }
})
}
bt[1].onclick=function(){
    bt[1].style.display="none";
    pag1[0].style.display="none";
    tab1[0].style.display="none";
    pag1[1].style.display="block";
    tab1[1].style.display="block";
    prop1.forEach(function(e){
        e.style['pointer-events']="visible";
        e.onclick=function(){
                this.style['background-color']='black'
                this.style['pointer-events']='none';
            if (this===prop1[9]){
                inpt1[5].value=this.innerHTML
            }else if(this===prop1[11]){
                inpt1[6].value=this.innerHTML
            }else if(this===prop1[14]){
                inpt1[8].value=this.innerHTML
            }else if (this===prop1[15]){
                inpt1[9].value=this.innerHTML
            }else if(this===prop1[17]){
                inpt1[7].value=this.innerHTML
            }else{
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                })
                this.style.color="red";
                this.innerHTML='false';
                setTimeout(function(){
                    location.reload()
                },1500)
            }
            if(inpt1[5].value===prop1[9].innerHTML && inpt1[6].value===prop1[11].innerHTML && 
                inpt1[7].value===prop1[17].innerHTML && inpt1[8].value===prop1[14].innerHTML
                && inpt1[9].value===prop1[15].innerHTML){
                    prop1.forEach(function(e){
                        e.style['pointer-events']='none';
                    });
                    bt[2].style.display="block";
                }
        }
    })
}
bt[2].onclick=function(){
    bt[2].style.display="none";
    pag1[1].style.display="none";
    tab1[1].style.display="none";
    pag1[2].style.display="block";
    tab1[2].style.display="block";
    prop1.forEach(function(e){
        e.style['pointer-events']="visible";
        e.onclick=function(){
                this.style['background-color']='black'
                this.style['pointer-events']='none';
            if (this===prop1[18]){
                inpt1[10].value=this.innerHTML
            }else if(this===prop1[20]){
                inpt1[11].value=this.innerHTML
            }else if(this===prop1[21]){
                inpt1[13].value=this.innerHTML
            }else if (this===prop1[23]){
                inpt1[12].value=this.innerHTML
            }else if(this===prop1[24]){
                inpt1[14].value=this.innerHTML
            }else if (this===prop1[25]){
                inpt1[15].value=this.innerHTML
            }else if(this===prop1[26]){
                inpt1[16].value=this.innerHTML
            }else{
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                })
                this.style.color="red";
                this.innerHTML='false';
                setTimeout(function(){
                    location.reload()
                },1500)
            }
            if(inpt1[10].value===prop1[18].innerHTML && inpt1[11].value===prop1[20].innerHTML
               && inpt1[12].value===prop1[23].innerHTML && inpt1[13].value===prop1[21].innerHTML
                && inpt1[14].value===prop1[24].innerHTML && inpt1[15].value===prop1[25].innerHTML
                 && inpt1[16].value===prop1[26].innerHTML ){
                    prop1.forEach(function(e){
                        e.style['pointer-events']='none';
                    });
                    bt[3].style.display="block";
                }
        }
    })
}
bt[3].onclick=function(){
    bt[3].style.display="none";
    pag1[2].style.display="none";
    tab1[2].style.display="none";
    pag1[3].style.display="block";
    tab1[3].style.display="block";
    prop1.forEach(function(e){
        e.style['pointer-events']="visible";
        e.onclick=function(){
                this.style['background-color']='black'
                this.style['pointer-events']='none';
            if (this===prop1[27]){
                inpt1[23].value=this.innerHTML
            }else if(this===prop1[29]){
                inpt1[17].value=this.innerHTML
            }else if(this===prop1[30]){
                inpt1[18].value=this.innerHTML
            }else if (this===prop1[32]){
                inpt1[21].value=this.innerHTML
            }else if(this===prop1[33]){
                inpt1[22].value=this.innerHTML
            }else if (this===prop1[34]){
                inpt1[19].value=this.innerHTML
            }else if(this===prop1[35]){
                inpt1[20].value=this.innerHTML
            }else{
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                })
                this.style.color="red";
                this.innerHTML='false';
                setTimeout(function(){
                    location.reload()
                },1500)
            }
            if(inpt1[17].value===prop1[29].innerHTML && inpt1[18].value===prop1[30].innerHTML
               && inpt1[19].value===prop1[34].innerHTML && inpt1[20].value===prop1[35].innerHTML
                && inpt1[21].value===prop1[32].innerHTML && inpt1[22].value===prop1[33].innerHTML
                 && inpt1[23].value===prop1[27].innerHTML ){
                    prop1.forEach(function(e){
                        e.style['pointer-events']='none';
                    });
                    bt[4].style.display="block";
                }
        }
    })
}
bt[4].onclick=function(){
    bt[4].style.display="none";
    pag1[3].style.display="none";
    tab1[3].style.display="none";
    pag1[4].style.display="block";
    tab1[4].style.display="block";
    prop1.forEach(function(e){
        e.style['pointer-events']="visible";
        e.onclick=function(){
                this.style['background-color']='black'
                this.style['pointer-events']='none';
            if (this===prop1[37]){
                inpt1[24].value=this.innerHTML
            }else if(this===prop1[38]){
                inpt1[27].value=this.innerHTML
            }else if(this===prop1[40]){
                inpt1[28].value=this.innerHTML
            }else if (this===prop1[41]){
                inpt1[26].value=this.innerHTML
            }else if(this===prop1[42]){
                inpt1[25].value=this.innerHTML
            }else{
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                })
                this.style.color="red";
                this.innerHTML='false';
                setTimeout(function(){
                    location.reload()
                },1500)
            }
            if(inpt1[24].value===prop1[37].innerHTML && inpt1[25].value===prop1[42].innerHTML
               && inpt1[26].value===prop1[41].innerHTML && inpt1[27].value===prop1[38].innerHTML
                && inpt1[28].value===prop1[40].innerHTML ){
                    prop1.forEach(function(e){
                        e.style['pointer-events']='none';
                    });
                    bt[5].style.display="block";
                }
        }
    })
}
bt[5].onclick=function(){
    bt[5].style.display="none";
    pag1[4].style.display="none";
    tab1[4].style.display="none";
    pag1[5].style.display="block";
    tab1[5].style.display="block";
    prop1.forEach(function(e){
        e.style['pointer-events']="visible";
        e.onclick=function(){
                this.style['background-color']='black'
                this.style['pointer-events']='none';
            if (this===prop1[47]){
                inpt1[29].value=this.innerHTML
            }else if(this===prop1[50]){
                inpt1[31].value=this.innerHTML
            }else if(this===prop1[51]){
                inpt1[32].value=this.innerHTML
            }else if (this===prop1[52]){
                inpt1[30].value=this.innerHTML
            }else{
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                })
                this.style.color="red";
                this.innerHTML='false';
                setTimeout(function(){
                    location.reload()
                },1500)
            }
            if(inpt1[29].value===prop1[47].innerHTML && inpt1[30].value===prop1[52].innerHTML
               && inpt1[31].value===prop1[50].innerHTML && inpt1[32].value===prop1[51].innerHTML){
                    prop1.forEach(function(e){
                        e.style['pointer-events']='none';
                    });
                    bt[6].style.display="block";
                }
        }
    })
}
bt[6].onclick=function(){
    bt[6].style.display="none";
    pag1[5].style.display="none";
    tab1[5].style.display="none";
    pag1[6].style.display="block";
    tab1[6].style.display="block";
    prop1.forEach(function(e){
        e.style['pointer-events']="visible";
        e.onclick=function(){
                this.style['background-color']='black'
                this.style['pointer-events']='none';
            if (this===prop1[54]){
                inpt1[35].value=this.innerHTML
            }else if(this===prop1[60]){
                inpt1[34].value=this.innerHTML
            }else if(this===prop1[62]){
                inpt1[33].value=this.innerHTML
            }else{
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                })
                this.style.color="red";
                this.innerHTML='false';
                setTimeout(function(){
                    location.reload()
                },1500)
            }
            if(inpt1[33].value===prop1[62].innerHTML && inpt1[34].value===prop1[60].innerHTML
               && inpt1[35].value===prop1[54].innerHTML){
                    prop1.forEach(function(e){
                        e.style['pointer-events']='none';
                    });
                    bt[7].style.display="block";
                }
        }
    })
}
bt[7].onclick=function(){
    bt[7].style.display="none";
    pag1[6].style.display="none";
    tab1[6].style.display="none";
    pag1[7].style.display="block";
    tab1[7].style.display="block";
    prop1.forEach(function(e){
        e.style['pointer-events']="visible";
        e.onclick=function(){
                this.style['background-color']='black'
                this.style['pointer-events']='none';
            if (this===prop1[63]){
                inpt1[37].value=this.innerHTML
            }else if(this===prop1[65]){
                inpt1[38].value=this.innerHTML
            }else if(this===prop1[66]){
                inpt1[36].value=this.innerHTML
            }else if(this===prop1[70]){
                inpt1[40].value=this.innerHTML
            }else if(this===prop1[71]){
                inpt1[39].value=this.innerHTML
            }else{
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                })
                this.style.color="red";
                this.innerHTML='false';
                setTimeout(function(){
                    location.reload()
                },1500)
            }
            if(inpt1[37].value===prop1[63].innerHTML && inpt1[38].value===prop1[65].innerHTML
               && inpt1[36].value===prop1[66].innerHTML && inpt1[39].value===prop1[71].innerHTML 
               && inpt1[40].value===prop1[70].innerHTML){
                    prop1.forEach(function(e){
                        e.style['pointer-events']='none';
                    });
                    bt[8].style.display="block";
                }
        }
    })
}
bt[8].onclick=function(){
    bt[8].style.display="none";
    pag1[7].style.display="none";
    tab1[7].style.display="none";
    pag1[8].style.display="block";
    tab1[8].style.display="block";
    prop1.forEach(function(e){
        e.style['pointer-events']="visible";
        e.onclick=function(){
                this.style['background-color']='black'
                this.style['pointer-events']='none';
            if (this===prop1[74]){
                inpt1[41].value=this.innerHTML
            }else if(this===prop1[76]){
                inpt1[42].value=this.innerHTML
            }else{
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                })
                this.style.color="red";
                this.innerHTML='false';
                setTimeout(function(){
                    location.reload()
                },1500)
            }
            if(inpt1[41].value===prop1[74].innerHTML && 
                inpt1[42].value===prop1[76].innerHTML
                ){
                    prop1.forEach(function(e){
                        e.style['pointer-events']='none';
                    });
                    bt[9].style.display="block";
                }
        }
    })
}
bt[9].onclick=function(){
    bt[9].style.display="none";
    pag1[8].style.display="none";
    tab1[8].style.display="none";
    pag1[9].style.display="block";
    tab1[9].style.display="block";
    prop1.forEach(function(e){
        e.style['pointer-events']="visible";
        e.onclick=function(){
                this.style['background-color']='black'
                this.style['pointer-events']='none';
            if (this===prop1[79]){
                inpt1[48].value=this.innerHTML
            }else if(this===prop1[81]){
                inpt1[44].value=this.innerHTML
            }else if(this===prop1[82]){
                inpt1[49].value=this.innerHTML
            }else if(this===prop1[83]){
                inpt1[43].value=this.innerHTML
            }else if(this===prop1[84]){
                inpt1[47].value=this.innerHTML
            }else if(this===prop1[85]){
                inpt1[45].value=this.innerHTML
            }else if(this===prop1[86]){
                inpt1[46].value=this.innerHTML
            }else if(this===prop1[89]){
                inpt1[50].value=this.innerHTML
            }else{
                prop1.forEach(function(e){
                    e.style['pointer-events']='none';
                })
                this.style.color="red";
                this.innerHTML='false';
                setTimeout(function(){
                    location.reload()
                },1500)
            }
            if(inpt1[48].value===prop1[79].innerHTML
                && inpt1[44].value===prop1[81].innerHTML
                 && inpt1[49].value===prop1[82].innerHTML 
                 && inpt1[43].value===prop1[83].innerHTML
                 && inpt1[47].value===prop1[84].innerHTML
                 && inpt1[45].value===prop1[85].innerHTML
                 && inpt1[46].value===prop1[86].innerHTML
                 && inpt1[50].value===prop1[89].innerHTML
                ){
                    prop1.forEach(function(e){
                        e.style['pointer-events']='none';
                    });
                    bt[10].style.display="block";
                }
        }
    })
}
