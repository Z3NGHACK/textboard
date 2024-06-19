window.onload = function() {
    document.body.classList.add('fade-in');
}

//navbar element
const font = document.getElementById("font_icon");
const ani = document.getElementById("ani_icon");
const bord = document.getElementById("bord_icon");
//page interact with navbar
const gFont = document.getElementById("font_style");
const gAni = document.getElementById("animation");
const gBord = document.getElementById("border_style");

//new implement of border group
const bg_part = document.getElementById("bg_part");
const border_group = document.getElementById("border_group");
const background_styl = document.getElementById("background_styl");

//new implement of animation group
const aniOpt = document.getElementById("ani_option");
const textAni = document.getElementById("textAni");
const bgAni = document.getElementById("bgAni");
const background_ani = document.getElementById("background_ani");
const done_bgAni = document.getElementById("done_bgAni");
//done btn for each main page
const fDone = document.getElementById("done_font");
const aDone = document.getElementById("done_ani");
const bDone = document.getElementById("done_border");
const done_bord_sty = document.getElementById("done_bord_sty");
const doneListAni = document.getElementById("done_list");
//element in font style
const color = document.getElementById("color");
const bg_font  = document.getElementById("bg_font");
const style  = document.getElementById("style");
const bg_style = document.getElementById("bg_style");
//page interact with font style element
const font_color = document.getElementById("font_color");
const font_bg = document.getElementById("font_bg");
const style_group = document.getElementById("style_group");
const bg_img = document.getElementById("bg_img");

//done btn for each element in font style
const fcDone = document.getElementById("done_btn_color");
const bgDone = document.getElementById("done_btn_bg");
const fsDone = document.getElementById("done_btn_style");
const imgDone = document.getElementById("done_btn_img");
const emo_done = document.getElementById("done_emoji");
//text board controller
let text = document.getElementById("text_control");
//text board 
let t = document.getElementById("text");
//emoji
const emo_btn = document.getElementById("emo_btn");
const emo_gr = document.getElementById("emoji_group");
let emoMain = document.getElementById("emo_main");

//group emoji

if(emo_btn){
    emo_btn.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.remove('open');
        emo_gr.classList.add('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');
    })
}

if(emo_done){
    emo_done.addEventListener('click', ()=>{
        emo_gr.classList.remove('open');
        gFont.classList.add('open');
    })
}

let emCode = ["&#128522","&#128512","&#128514","&#128517","&#128520",
                "&#128519","&#128523","&#128525","&#12856","&#128527",
                "&#128530","&#128531","&#128534","&#128536","&#128541",     
                "&#128542","&#128543","&#128545","&#128548","&#128557",
            ]

for(let i = 0; i <= 20; i++){
    const emo = document.getElementById(`emo${i}`);
    if(emo){
        emo.addEventListener('click', ()=>{
            emoMain.innerHTML = emCode[i - 1];
        })
    }
}
//background image option
const bgAnis = [
    'url("gifs/building.gif") center/ cover no-repeat', 
    'url("gifs/Cotton candy.gif") center/ cover no-repeat', 
    'url("gifs/download.gif") center/ cover no-repeat',
    'url("gifs/Generosity.gif") center/ cover no-repeat', 
    'url("gifs/heart.gif") center/ cover no-repeat', 
    'url("gifs/Micro Cosmic.gif") center/ cover no-repeat',
    'url("gifs/Moods.gif") center/ cover no-repeat'
];

if(bgAni){
    bgAni.addEventListener('click', ()=>{
        background_ani.classList.add('open');
        aniOpt.classList.remove('open');
    })
}

for (let i = 1; i <= 7; i++) {
    const bgAni = document.getElementById(`bgAni${i}`);
    if (bgAni) {
        bgAni.addEventListener('click', () => {
            bgImg.style.background = bgAnis[i - 1];
        });
    }
}

if(done_bgAni){
    done_bgAni.addEventListener('click', ()=>{
        background_ani.classList.remove('open');
        text.classList.remove('open');  

    })
}

//navbar in small size page
const sNav = document.getElementById("semi_navbar");
const ham = document.getElementById("hamburger");
const sDone = document.getElementById("semi_done");

//semi navbar icon
const sFont = document.getElementById("font_icons");
const sAni = document.getElementById("ani_icons");
const sBord = document.getElementById("bord_icons");

//get input text and throw input value
let input = document.getElementById("text_inp").value;
let inp_done = document.getElementById("done_head");

const inp_mini_done = document.getElementById("sdone_head");
let inp_mini = document.getElementById("text_inps").value;


//color slider element in font color
let fRed = document.getElementById("fontRCode");
let fGreen = document.getElementById("fontGCode");
let fBlue = document.getElementById("fontBCode");
const rendFont = document.getElementById("font_render");
const fcolor_display = document.getElementById("fcolor_display");
const numFRed = document.getElementById("red_font").value;
const numFGreen = document.getElementById("green_font").value;
const numFBlue = document.getElementById("blue_font").value;

//color slider element in bg color
let bgRed = document.getElementById("bgRCode");
let bgGreen = document.getElementById("bgGCode");
let bgBlue = document.getElementById("bgBCode");
let rendbg = document.getElementById("bg_render");
const bgcolor_display = document.getElementById("bgcolor_display");
const numBgRed = document.getElementById("red_bg").value;
const numBgGreen = document.getElementById("green_bg").value;
const numBgBlue = document.getElementById("blue_bg").value;



if(font){
    font.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.add('open');
        bg_img.classList.remove('open');
        aniOpt.classList.remove('open');
        emo_gr.classList.remove('open');
        gBord.classList.remove('open');
        background_ani.classList.remove('open');
        aniOpt.classList.remove('open');
        gAni.classList.remove('open');
        bg_part.classList.remove('open');
        text.classList.add('open');
        sNav.classList.remove('open');
    })
}
if(ani){
    ani.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        aniOpt.classList.add('open');
        gBord.classList.remove('open');
        bg_img.classList.remove('open');
        background_ani.classList.remove('open');
        emo_gr.classList.remove('open');
        gAni.classList.remove('open');
        gFont.classList.remove('open');
        bg_part.classList.remove('open');
        text.classList.add('open');
        sNav.classList.remove('open');
    })
}
if(bord){
    bord.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        bg_part.classList.add('open');
        gFont.classList.remove('open');
        gBord.classList.remove('open');
        gAni.classList.remove('open');
        aniOpt.classList.remove('open');
        emo_gr.classList.remove('open');
        background_ani.classList.remove('open');
        bg_img.classList.remove('open');
        aniOpt.classList.remove('open');
        text.classList.add('open');
        sNav.classList.remove('open');
    })
}
if(textAni){
    textAni.addEventListener('click', ()=>{
        gAni.classList.add('open');
        aniOpt.classList.remove('open');
    })
}
if(doneListAni){
    doneListAni.addEventListener('click', ()=>{
        aniOpt.classList.remove('open');
        text.classList.remove('open');
    })

}
if(fDone){
    fDone.addEventListener('click', ()=>{
        // sNav.classList.add('open');
        gFont.classList.remove('open');
        text.classList.remove('open');
    })
}
if(aDone){
    aDone.addEventListener('click', ()=>{
        gAni.classList.remove('open');
        aniOpt.classList.add('open');
        text.classList.remove('open');
    })
}
if(bDone){
    bDone.addEventListener('click', ()=>{
        gBord.classList.remove('open');
        bg_part.classList.add('open');
        text.classList.remove('open');
    })
}if(done_bord_sty){
    done_bord_sty.addEventListener('click', ()=>{
        bg_part.classList.remove('open');
        text.classList.remove('open');
    })
}



if(color){
    color.addEventListener('click', ()=>{
        font_color.classList.add('open');
        font_bg.classList.remove('open');
        bg_img.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');
    })
}
if(bg_font){
    bg_font.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.add('open');
        bg_img.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');
    })
}


let fontStyles = ["Danfo", "Permanent Marker", "Poppins", "Josefin Sans", "Poetsen One"
                , "Oswald", "Concert One", "Teko", "Major Mono Display", "Jaro"
                , "Dancing Script", "Anton", "Seymour One", "Pacifico", "Shadows Into Light"
                , "Abril Fatface", "Smokum", "Rubik Mono One", "Indie FLower", "Titan One"
                ];

for(let i = 0; i <= 20; i++){
    const style = document.getElementById(`style${i}`);
    if(style){
        style.addEventListener('click', ()=>{

            st.style.fontFamily = fontStyles[i - 1];
        })
    }
}

if(style){
    style.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.remove('open');
        bg_img.classList.remove('open');
        style_group.classList.add('open');
        gFont.classList.remove('open');
        text.classList.add('open');

    })
}



// emos.forEach((em, index) => {
//     em.addEventListener('click', () => {
//       emoMain.innerHTML = emCode[index];
//     });
//   });

if(bg_style){
    bg_style.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.remove('open');
        bg_img.classList.add('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');
        

    })
}

const imgs = ['url("img/air.jpg") center/ cover no-repeat',
              'url("img/board.jpg") center/ cover no-repeat',
              'url("img/gal.jpg") center/ cover no-repeat',
              'url("img/jungle.jpg") center/ cover no-repeat',
              'url("img/rock.jpg") center/ cover no-repeat',
              'url("img/sand.jpg") center/ cover no-repeat',
              'url("img/water.jpg") center/ cover no-repeat',
              'url("img/wood.jpg") center/ cover no-repeat',
              'url("img/led.jpg") center/ cover no-repeat',
              'none'
];

for (let i = 0; i < 10; i++) {
    const img = document.getElementById(`img${i + 1}`);
    if (img) {
        img.addEventListener('click', () => {
            text.style.background = imgs[i];
        });
    }
}


if(fcDone){
    fcDone.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        gFont.classList.add('open');
    })
}
if(bgDone){
    bgDone.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        gFont.classList.add('open');
    })
}
if(fsDone){
    fsDone.addEventListener('click', ()=>{
        style_group.classList.remove('open');
        gFont.classList.add('open');
    })
}
if(imgDone){
    imgDone.addEventListener('click', ()=>{
        bg_img.classList.remove('open');
        bg_part.classList.add('open');
    })
}

if(ham){
    ham.addEventListener('click', ()=>{
        sNav.classList.add('open');
        
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        bg_img.classList.remove('open');
        aniOpt.classList.remove('open');
        emo_gr.classList.remove('open');
        gBord.classList.remove('open');
        background_ani.classList.remove('open');
        aniOpt.classList.remove('open');
        gAni.classList.remove('open');
        bg_part.classList.remove('open');
    })
}
if(sDone){
    sDone.addEventListener('click', ()=>{
        sNav.classList.remove('open');
    })
}

if(sFont){
    sFont.addEventListener('click', ()=>{
        sNav.classList.remove('open');
        gFont.classList.add('open');
    })
}
if(sAni){
    sAni.addEventListener('click', ()=>{
        sNav.classList.remove('open');
        gAni.classList.add('open');
        text.classList.add('open');
    })
}
if(sBord){
    sBord.addEventListener('click', ()=>{
        sNav.classList.remove('open');
        gBord.classList.add('open');
        text.classList.add('open');
    })
}

const anis = ["slideAnimationjs 4s infinite", "fadeAnimation 2s infinite", "scaleAnimation 2s infinite", 
            "lights 5s 750ms linear infinite", "bounceAnimation 2s infinite", "waverAnimation 2s infinite", 
            "pulseAnimation 2s infinite", "glow 3s infinite", "slideBack 4s infinite", "shine 3s infinite",
            "wave 4s infinite"
            ]

for(let i = 0; i <= 11 ; i++){
    const ani = document.getElementById(`ani${i}`);
    if(ani){
        ani.addEventListener('click', ()=>{
            t.style.animation = anis[i - 1];
        })
    }
}


if(border_group){
    border_group.addEventListener('click', ()=>{
        gBord.classList.add('open');
        bg_part.classList.remove('open');
    })
}
if(background_styl){
    background_styl.addEventListener('click', ()=>{
        bg_img.classList.add('open');
        bg_part.classList.remove('open');
    })
}
const borders = ["5px solid gray", "5px dashed gray", "5px dotted gray",
                "5px double gray", "5px inset gray", "5x outset gray",
                "5px groove gray", "5px ridge gray"
];

for(let i = 0; i <= 8; i++){
    const border = document.getElementById(`border${i}`);
    if(border){
        border.addEventListener('click', ()=>{
            text.style.border = borders[i - 1];
        })
    }
}



let st = document.getElementById("st");
if(inp_done){
    inp_done.addEventListener('click', ()=>{
        let input = document.getElementById("text_inp").value;
        st.innerHTML = input;
    })
}
if(inp_mini_done){
    inp_mini_done.addEventListener('click', ()=>{
        let input = document.getElementById("text_inps").value;
        st.innerHTML = input;
    })
}



function updateColorBg() {
    const redbgVal = bgRed.value;
    const greenbgVal = bgGreen.value;
    const bluebgVal = bgBlue.value;
    const fcb = `rgb(${redbgVal}, ${greenbgVal}, ${bluebgVal})`;
    bgRed.style.accentColor =  `rgb(${redbgVal}, 0, 0)`;
    bgGreen.style.accentColor =  `rgb(0,${greenbgVal} ,0)`;
    bgBlue.style.accentColor =  `rgb(0, 0, ${bluebgVal})`;

    rendbg.style.color = fcb;
    rendbg.innerHTML = fcb;
    bgcolor_display.style.backgroundColor = fcb;
    text.style.backgroundColor = fcb;
}

bgRed.addEventListener('input', updateColorBg);
bgGreen.addEventListener('input', updateColorBg);
bgBlue.addEventListener('input', updateColorBg);

function updateColorFont() {
    const redFVal = fRed.value;
    const greenFVal = fGreen.value;
    const blueFVal = fBlue.value;
    const fc = `rgb(${redFVal}, ${greenFVal}, ${blueFVal})`;
    fRed.style.accentColor =  `rgb(${redFVal}, 0, 0)`;
    fGreen.style.accentColor =  `rgb(0,${greenFVal} ,0)`;
    fBlue.style.accentColor =  `rgb(0, 0, ${blueFVal})`;

    rendFont.style.color = fc;
    rendFont.innerHTML = fc;
    fcolor_display.style.backgroundColor = fc;

    t.style.color = fc;
}

fRed.addEventListener('input', updateColorFont);
fGreen.addEventListener('input', updateColorFont);
fBlue.addEventListener('input', updateColorFont);

const exit = document.getElementById("exit");
const show = document.getElementById("show");
const navbar = document.getElementById("navbar");
const catchMe = document.getElementById("catchMe");

if(show){
    show.addEventListener('click', ()=>{
        exit.classList.remove('open');
        show.classList.remove('open');
        text.classList.remove('subChange');
        navbar.classList.remove('open');
        catchMe.classList.remove('open');
        catchMe.style.left = '-100%';
        text.style.background = 'rgba(163, 159, 159, 0.5)';
        text.style.border = '2px solid gray';
    })
}

if(exit){
    exit.addEventListener('click', ()=>{
        exit.classList.add('open');
        show.classList.add('open');
        text.classList.add('subChange');
        navbar.classList.add('open');
        catchMe.classList.add('open');
        catchMe.style.left = '-10px';
        catchMe.style.bottom = '20px';
        text.style.background = 'none';
        text.style.border = 'none';

        
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        bg_img.classList.remove('open');
        aniOpt.classList.remove('open');
        emo_gr.classList.remove('open');
        gBord.classList.remove('open');
        background_ani.classList.remove('open');
        aniOpt.classList.remove('open');
        gAni.classList.remove('open');
        bg_part.classList.remove('open');
        text.classList.remove('open');
        sNav.classList.remove('open');
    })
}

document.addEventListener("DOMContentLoaded", ()=> {
    const catchMe = document.getElementById('catchMe');

    catchMe.addEventListener('mouseover', () =>{
        const body = document.body;
        const bodyRect = body.getBoundingClientRect();
        
        const maxX = bodyRect.width - catchMe.offsetWidth;
        const maxY = bodyRect.height - catchMe.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        catchMe.style.left = `${randomX}px`;
        catchMe.style.top = `${randomY}px`;
    });
});
