## CSS and SCSS Snippets

Complete list of all CSS and SCSS snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)

### CSS

| Prefix | Snippet |
| -----: | ------- |
| `!` | `!important` |
| `@c_` | `@container $0 { }` |
| `@c1` | `@charset '${0:UTF-8}';` |
| `@ff_` | `@font-face { $0 }` |
| `@ffewo` | `@font-face { font-family: ${1:name}; src: url(${0:fontname}.eot); /* IE */ src: local('☺︎'), url('${0:fontname}.woff') format('woff'), url('${0:fontname}.otf') format('opentype'); /* Safari */ }` |
| `@ffw` | `@font-face { font-family: ${1:name}; src: url('${0:file.woff}'); }` |
| `@i1` | `@import '$0';` |
| `@iu$` | `@import url('$0');` |
| `@k_` | `@keyframes ${0:animationname} { }` |
| `@m_` | `@media $0 { }` |
| `@ma_` | `@media all { $0 }` |
| `@mnp_` | `@media not print { $0 }` |
| `@mns_` | `@media not screen { $0 }` |
| `@mop_` | `@media only print { $0 }` |
| `@mos_` | `@media only screen { $0 }` |
| `@mp_` | `@media print { $0 }` |
| `@ms_` | `@media screen { $0 }` |
| `@s_` | `@supports ${0:condition} { }` |
| `a$1` | `attr($0)` |
| `a1` | `animation: ${1:name} ${2:1}s ${3:ease} ${4:0}s ${5:1} ${6:normal} ${7:none} ${0:running};` |
| `aa` | `appearance: auto;` |
| `ab` | `appearance: button;` |
| `ac` | `appearance: checkbox;` |
| `acc` | `align-content: center;` |
| `ace` | `align-content: end;` |
| `acfe` | `align-content: flex-end;` |
| `acfs` | `align-content: flex-start;` |
| `acs` | `align-content: ${1\|start,stretch\|};` |
| `acsa` | `align-content: space-around;` |
| `acsb` | `align-content: space-between;` |
| `ad` | `animation-delay: ${0:1}s;` |
| `ad` | `animation-duration: ${0:1}s;` |
| `ada` | `animation-direction: alternate;` |
| `adar` | `animation-direction: alternate-reverse;` |
| `adn` | `animation-direction: normal;` |
| `adr` | `animation-direction: reverse;` |
| `afmb` | `animation-fill-mode: ${1\|backwards,both\|};` |
| `afmf` | `animation-fill-mode: forwards;` |
| `afmn` | `animation-fill-mode: none;` |
| `aib` | `align-items: baseline;` |
| `aic` | `align-items: center;` |
| `aic1` | `animation-iteration-count: ${0:1};` |
| `aici` | `animation-iteration-count: infinite;` |
| `aie` | `align-items: end;` |
| `aife` | `align-items: flex-end;` |
| `aifs` | `align-items: flex-start;` |
| `ais` | `align-items: ${1\|start,stretch\|};` |
| `al` | `appearance: listbox;` |
| `am` | `appearance: ${1\|menulist,meter\|};` |
| `amb` | `appearance: menulist-button;` |
| `an` | `animation-name: $0;` |
| `an` | `appearance: none;` |
| `ann` | `animation-name: none;` |
| `apb` | `appearance: progress-bar;` |
| `apsp` | `animation-play-state: paused;` |
| `apsr` | `animation-play-state: running;` |
| `ar` | `appearance: radio;` |
| `as` | `appearance: searchfield;` |
| `asa` | `align-self: auto;` |
| `asb` | `align-self: baseline;` |
| `asc` | `align-self: center;` |
| `asfe` | `align-self: flex-end;` |
| `asfs` | `align-self: flex-start;` |
| `ass` | `align-self: stretch;` |
| `at` | `appearance: ${1\|textarea,textfield\|};` |
| `aticb` | `animation-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0});` |
| `atie` | `animation-timing-function: ease;` |
| `atiei` | `animation-timing-function: ease-in;` |
| `atieo` | `animation-timing-function: ease-out;` |
| `atil` | `animation-timing-function: linear;` |
| `b#` | `background: ${0:#000000};` |
| `b1` | `bottom: ${0:0};` |
| `ba` | `bottom: auto;` |
| `baf` | `background-attachment: fixed;` |
| `bas` | `background-attachment: scroll;` |
| `bbc#` | `border-block-color: ${0:#000000};` |
| `bbc#` | `border-bottom-color: ${0:#000000};` |
| `bbd1#` | `border-block: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `bbd1#` | `border-bottom: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `bbec#` | `border-block-end-color: ${0:#000000};` |
| `bbed` | `border-block-end-style: ${1\|dashed,dotted,double\|};` |
| `bbed1#` | `border-block-end: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `bbeg` | `border-block-end-style: groove;` |
| `bbeg1#` | `border-block-end: groove ${1:0} ${0:#000000};` |
| `bbeh` | `border-block-end-style: hidden;` |
| `bbeh1#` | `border-block-end: hidden ${1:0} ${0:#000000};` |
| `bbei` | `border-block-end-style: inset;` |
| `bbei1#` | `border-block-end: inset ${1:0} ${0:#000000};` |
| `bben` | `border-block-end-style: none;` |
| `bbeo` | `border-block-end-style: outset;` |
| `bbeo1#` | `border-block-end: outset ${1:0} ${0:#000000};` |
| `bber` | `border-block-end-style: ridge;` |
| `bber1#` | `border-block-end: ridge ${1:0} ${0:#000000};` |
| `bbes` | `border-block-end-style: solid;` |
| `bbes1#` | `border-block-end: solid ${1:0} ${0:#000000};` |
| `bbew1` | `border-block-end-width: ${0:0};` |
| `bbewm` | `border-block-end-width: medium;` |
| `bbewt` | `border-block-end-width: ${1\|thick,thin\|};` |
| `bbg1#` | `border-block: groove ${1:0} ${0:#000000};` |
| `bbg1#` | `border-bottom: groove ${1:0} ${0:#000000};` |
| `bbh1#` | `border-block: hidden ${1:0} ${0:#000000};` |
| `bbh1#` | `border-bottom: hidden ${1:0} ${0:#000000};` |
| `bbi1#` | `border-block: inset ${1:0} ${0:#000000};` |
| `bbi1#` | `border-bottom: inset ${1:0} ${0:#000000};` |
| `bblr1` | `border-bottom-left-radius: ${0:0};` |
| `bblr2` | `border-bottom-left-radius: ${1:0} ${0:0};` |
| `bbn` | `border-block: none;` |
| `bbo1#` | `border-block: outset ${1:0} ${0:#000000};` |
| `bbo1#` | `border-bottom: outset ${1:0} ${0:#000000};` |
| `bbr1#` | `border-block: ridge ${1:0} ${0:#000000};` |
| `bbr1#` | `border-bottom: ridge ${1:0} ${0:#000000};` |
| `bbrr1` | `border-bottom-right-radius: ${0:0};` |
| `bbrr2` | `border-bottom-right-radius: ${1:0} ${0:0};` |
| `bbs1#` | `border-block: solid ${1:0} ${0:#000000};` |
| `bbs1#` | `border-bottom: solid ${1:0} ${0:#000000};` |
| `bbsc#` | `border-block-start-color: ${0:#000000};` |
| `bbsd` | `border-block-style: ${1\|dashed,dotted,double\|};` |
| `bbsd` | `border-bottom-style: ${1\|dashed,dotted,double\|};` |
| `bbsd1#` | `border-block-start: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `bbsg` | `border-block-style: groove;` |
| `bbsg` | `border-bottom-style: groove;` |
| `bbsg1#` | `border-block-start: groove ${1:0} ${0:#000000};` |
| `bbsh` | `border-block-style: hidden;` |
| `bbsh` | `border-bottom-style: hidden;` |
| `bbsh1#` | `border-block-start: hidden ${1:0} ${0:#000000};` |
| `bbsi` | `border-block-style: inset;` |
| `bbsi` | `border-bottom-style: inset;` |
| `bbsi1#` | `border-block-start: inset ${1:0} ${0:#000000};` |
| `bbsn` | `border-block-style: none;` |
| `bbsn` | `border-bottom-style: none;` |
| `bbso` | `border-block-style: outset;` |
| `bbso` | `border-bottom-style: outset;` |
| `bbso1#` | `border-block-start: outset ${1:0} ${0:#000000};` |
| `bbsr` | `border-block-style: ridge;` |
| `bbsr` | `border-bottom-style: ridge;` |
| `bbsr1#` | `border-block-start: ridge ${1:0} ${0:#000000};` |
| `bbss` | `border-block-style: solid;` |
| `bbss` | `border-bottom-style: solid;` |
| `bbss1#` | `border-block-start: solid ${1:0} ${0:#000000};` |
| `bbssd` | `border-block-start-style: ${1\|dashed,dotted,double\|};` |
| `bbssg` | `border-block-start-style: groove;` |
| `bbssh` | `border-block-start-style: hidden;` |
| `bbssi` | `border-block-start-style: inset;` |
| `bbssn` | `border-block-start-style: none;` |
| `bbsso` | `border-block-start-style: outset;` |
| `bbssr` | `border-block-start-style: ridge;` |
| `bbsss` | `border-block-start-style: solid;` |
| `bbsw1` | `border-block-start-width: ${0:0};` |
| `bbswm` | `border-block-start-width: medium;` |
| `bbswt` | `border-block-start-width: ${1\|thick,thin\|};` |
| `bbw1` | `border-block-width: ${0:0};` |
| `bbw1` | `border-bottom-width: ${0:0};` |
| `bbwm` | `border-block-width: medium;` |
| `bbwm` | `border-bottom-width: medium;` |
| `bbwt` | `border-block-width: ${1\|thick,thin\|};` |
| `bbwt` | `border-bottom-width: ${1\|thick,thin\|};` |
| `bc#` | `background-color: ${0:#000000};` |
| `bc#` | `border-color: ${0:#000000};` |
| `bcbb` | `background-clip: border-box;` |
| `bcc` | `border-collapse: collapse;` |
| `bccb` | `background-clip: content-box;` |
| `bcpb` | `background-clip: padding-box;` |
| `bcs` | `border-collapse: separate;` |
| `bct` | `background-color: transparent;` |
| `bd1#` | `border: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `bg1#` | `border: groove ${1:0} ${0:#000000};` |
| `bh1#` | `border: hidden ${1:0} ${0:#000000};` |
| `bi1#` | `border: inset ${1:0} ${0:#000000};` |
| `bic#` | `border-inline-color: ${0:#000000};` |
| `bid1#` | `border-inline: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `biec#` | `border-inline-end-color: ${0:#000000};` |
| `bied1#` | `border-inline-end: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `bieg1#` | `border-inline-end: groove ${1:0} ${0:#000000};` |
| `bieh1#` | `border-inline-end: hidden ${1:0} ${0:#000000};` |
| `biei1#` | `border-inline-end: inset ${1:0} ${0:#000000};` |
| `bieo1#` | `border-inline-end: outset ${1:0} ${0:#000000};` |
| `bier1#` | `border-inline-end: ridge ${1:0} ${0:#000000};` |
| `bies1#` | `border-inline-end: solid ${1:0} ${0:#000000};` |
| `biesd` | `border-inline-end-style: ${1\|dashed,dotted,double\|};` |
| `biesg` | `border-inline-end-style: groove;` |
| `biesh` | `border-inline-end-style: hidden;` |
| `biesi` | `border-inline-end-style: inset;` |
| `biesn` | `border-inline-end-style: none;` |
| `bieso` | `border-inline-end-style: outset;` |
| `biesr` | `border-inline-end-style: ridge;` |
| `biess` | `border-inline-end-style: solid;` |
| `biew1` | `border-inline-end-width: ${0:0};` |
| `biewm` | `border-inline-end-width: medium;` |
| `biewt` | `border-inline-end-width: ${1\|thick,thin\|};` |
| `big1#` | `border-inline: groove ${1:0} ${0:#000000};` |
| `bih1#` | `border-inline: hidden ${1:0} ${0:#000000};` |
| `bii1#` | `border-inline: inset ${1:0} ${0:#000000};` |
| `bin` | `background-image: none;` |
| `bin` | `border-inline: none;` |
| `bio1#` | `border-inline: outset ${1:0} ${0:#000000};` |
| `bio1` | `border-image-outset: ${0:0};` |
| `bio2` | `border-image-outset: ${1:0} ${0:0};` |
| `bio3` | `border-image-outset: ${1:0} ${2:0} ${0:0};` |
| `bio4` | `border-image-outset: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `bir1#` | `border-inline: ridge ${1:0} ${0:#000000};` |
| `birr` | `border-image-repeat: ${1\|repeat,round\|};` |
| `birs` | `border-image-repeat: stretch;` |
| `bis1#` | `border-inline: solid ${1:0} ${0:#000000};` |
| `bis1` | `border-image-slice: ${0:0};` |
| `bis1f` | `border-image-slice: ${0:0} fill;` |
| `bis2` | `border-image-slice: ${1:0} ${0:0};` |
| `bis2f` | `border-image-slice: ${1:0} ${0:0} fill;` |
| `bisc#` | `border-inline-start-color: ${0:#000000};` |
| `bisd` | `border-inline-style: ${1\|dashed,dotted,double\|};` |
| `bisd1#` | `border-inline-start: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `bisg` | `border-inline-style: groove;` |
| `bisg1#` | `border-inline-start: groove ${1:0} ${0:#000000};` |
| `bish` | `border-inline-style: hidden;` |
| `bish1#` | `border-inline-start: hidden ${1:0} ${0:#000000};` |
| `bisi` | `border-inline-style: inset;` |
| `bisi1#` | `border-inline-start: inset ${1:0} ${0:#000000};` |
| `bisn` | `border-image-source: none;` |
| `bisn` | `border-inline-style: none;` |
| `biso` | `border-inline-style: outset;` |
| `biso1#` | `border-inline-start: outset ${1:0} ${0:#000000};` |
| `bisr` | `border-inline-style: ridge;` |
| `bisr1#` | `border-inline-start: ridge ${1:0} ${0:#000000};` |
| `biss` | `border-inline-style: solid;` |
| `biss1#` | `border-inline-start: solid ${1:0} ${0:#000000};` |
| `bissd` | `border-inline-start-style: ${1\|dashed,dotted,double\|};` |
| `bissg` | `border-inline-start-style: groove;` |
| `bissh` | `border-inline-start-style: hidden;` |
| `bissi` | `border-inline-start-style: inset;` |
| `bissn` | `border-inline-start-style: none;` |
| `bisso` | `border-inline-start-style: outset;` |
| `bissr` | `border-inline-start-style: ridge;` |
| `bisss` | `border-inline-start-style: solid;` |
| `bisu` | `border-image-source: url('$0');` |
| `bisw1` | `border-inline-start-width: ${0:0};` |
| `biswm` | `border-inline-start-width: medium;` |
| `biswt` | `border-inline-start-width: ${1\|thick,thin\|};` |
| `biu` | `background-image: url('$0');` |
| `biu` | `border-image: url('${0:url}');` |
| `biu1` | `border-image: url('${1:url}') ${0:100%};` |
| `biu2` | `border-image: url('${1:url}') ${2:100%} ${0:1};` |
| `biu3` | `border-image: url('${1:url}') ${2:100%} ${3:1} ${0:0};` |
| `biu3r` | `border-image: url('${1:url}') ${2:100%} ${3:1} ${4:0} ${5\|repeat,round\|};` |
| `biu3s` | `border-image: url('${1:url}') ${2:100%} ${3:1} ${4:0} ${5\|space,stretch\|};` |
| `biw1` | `border-image-width: ${0:0};` |
| `biw1` | `border-inline-width: ${0:0};` |
| `biw2` | `border-image-width: ${1:0} ${0:0};` |
| `biw3` | `border-image-width: ${1:0} ${2:0} ${0:0};` |
| `biw4` | `border-image-width: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `biwa` | `border-image-width: auto;` |
| `biwm` | `border-inline-width: medium;` |
| `biwt` | `border-inline-width: ${1\|thick,thin\|};` |
| `blc#` | `border-left-color: ${0:#000000};` |
| `bld1#` | `border-left: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `blg1#` | `border-left: groove ${1:0} ${0:#000000};` |
| `blh1#` | `border-left: hidden ${1:0} ${0:#000000};` |
| `bli1#` | `border-left: inset ${1:0} ${0:#000000};` |
| `blo1#` | `border-left: outset ${1:0} ${0:#000000};` |
| `blr1#` | `border-left: ridge ${1:0} ${0:#000000};` |
| `bls1#` | `border-left: solid ${1:0} ${0:#000000};` |
| `blsd` | `border-left-style: ${1\|dashed,dotted,double\|};` |
| `blsg` | `border-left-style: groove;` |
| `blsh` | `border-left-style: hidden;` |
| `blsi` | `border-left-style: inset;` |
| `blsn` | `border-left-style: none;` |
| `blso` | `border-left-style: outset;` |
| `blsr` | `border-left-style: ridge;` |
| `blss` | `border-left-style: solid;` |
| `blw1` | `border-left-width: ${0:0};` |
| `blwm` | `border-left-width: medium;` |
| `blwt` | `border-left-width: ${1\|thick,thin\|};` |
| `bn` | `background: none;` |
| `bn` | `border: none;` |
| `bo1#` | `border: outset ${1:0} ${0:#000000};` |
| `bobb` | `background-origin: border-box;` |
| `bopb` | `background-origin: padding-box;` |
| `bp2` | `background-position: ${1:0} ${0:0};` |
| `bpcb` | `background-position: center bottom;` |
| `bpcc` | `background-position: center center;` |
| `bpct` | `background-position: center top;` |
| `bplb` | `background-position: left bottom;` |
| `bplc` | `background-position: left center;` |
| `bplt` | `background-position: left top;` |
| `bprb` | `background-position: right bottom;` |
| `bprc` | `background-position: right center;` |
| `bprt` | `background-position: right top;` |
| `br1#` | `border: ridge ${1:0} ${0:#000000};` |
| `br1` | `border-radius: ${0:0};` |
| `br2` | `border-radius: ${1:0} ${0:0};` |
| `br3` | `border-radius: ${1:0} ${2:0} ${0:0};` |
| `br4` | `border-radius: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `brc#` | `border-right-color: ${0:#000000};` |
| `brd1#` | `border-right: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `brg1#` | `border-right: groove ${1:0} ${0:#000000};` |
| `brh1#` | `border-right: hidden ${1:0} ${0:#000000};` |
| `bri1#` | `border-right: inset ${1:0} ${0:#000000};` |
| `brnr` | `background-repeat: no-repeat;` |
| `bro1#` | `border-right: outset ${1:0} ${0:#000000};` |
| `brr` | `background-repeat: ${1\|round,repeat\|};` |
| `brr1#` | `border-right: ridge ${1:0} ${0:#000000};` |
| `brrnr` | `background-repeat: ${1\|round,repeat\|} no-repeat;` |
| `brrr` | `background-repeat: ${1\|round,repeat\|} ${1\|round,repeat\|};` |
| `brrs` | `background-repeat: ${1\|round,repeat\|} space;` |
| `brrx` | `background-repeat: repeat-x;` |
| `brry` | `background-repeat: repeat-y;` |
| `brs` | `background-repeat: space;` |
| `brs1#` | `border-right: solid ${1:0} ${0:#000000};` |
| `brsd` | `border-right-style: ${1\|dashed,dotted,double\|};` |
| `brsg` | `border-right-style: groove;` |
| `brsh` | `border-right-style: hidden;` |
| `brsi` | `border-right-style: inset;` |
| `brsn` | `border-right-style: none;` |
| `brsnr` | `background-repeat: space no-repeat;` |
| `brso` | `border-right-style: outset;` |
| `brsr` | `background-repeat: space ${1\|round,repeat\|};` |
| `brsr` | `border-right-style: ridge;` |
| `brss` | `border-right-style: solid;` |
| `brw1` | `border-right-width: ${1:0};` |
| `brwm` | `border-right-width: medium;` |
| `brwt` | `border-right-width: ${1\|thick,thin\|};` |
| `bs1#` | `border: solid ${1:0} ${0:#000000};` |
| `bs1` | `border-spacing: ${0:0};` |
| `bs2#` | `box-shadow: ${1:0} ${2:0} ${0:#000000};` |
| `bs2` | `background-size: ${1:0} ${0:0};` |
| `bs3#` | `box-shadow: ${1:0} ${2:0} ${3:0} ${0:#000000};` |
| `bs4#` | `box-shadow: ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000};` |
| `bsa` | `background-size: auto;` |
| `bsbb` | `box-sizing: border-box;` |
| `bsc` | `background-size: ${1\|contain,cover\|};` |
| `bscb` | `box-sizing: content-box;` |
| `bsd` | `border-style: ${1\|dashed,dotted,double\|};` |
| `bsg` | `border-style: groove;` |
| `bsh` | `border-style: hidden;` |
| `bsi` | `border-style: inset;` |
| `bsi2#` | `box-shadow: inset ${1:0} ${2:0} ${0:#000000};` |
| `bsi3#` | `box-shadow: inset ${1:0} ${2:0} ${3:0} ${0:#000000};` |
| `bsi4#` | `box-shadow: inset ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000};` |
| `bsn` | `border-style: none;` |
| `bsn` | `box-shadow: none;` |
| `bso` | `border-style: outset;` |
| `bsr` | `border-style: ridge;` |
| `bss` | `border-style: solid;` |
| `bt` | `background: transparent;` |
| `btc#` | `border-top-color: ${0:#000000};` |
| `btd1#` | `border-top: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `btg1#` | `border-top: groove ${1:0} ${0:#000000};` |
| `bth1#` | `border-top: hidden ${1:0} ${0:#000000};` |
| `bti1#` | `border-top: inset ${1:0} ${0:#000000};` |
| `btlr1` | `border-top-left-radius: ${0:0};` |
| `btlr2` | `border-top-left-radius: ${1:0} ${0:0};` |
| `bto1#` | `border-top: outset ${1:0} ${0:#000000};` |
| `btr1#` | `border-top: ridge ${1:0} ${0:#000000};` |
| `btrr1` | `border-top-right-radius: ${0:0};` |
| `btrr2` | `border-top-right-radius: ${1:0} ${0:0};` |
| `bts1#` | `border-top: solid ${1:0} ${0:#000000};` |
| `btsd` | `border-top-style: ${1\|dashed,dotted,double\|};` |
| `btsg` | `border-top-style: groove;` |
| `btsh` | `border-top-style: hidden;` |
| `btsi` | `border-top-style: inset;` |
| `btsn` | `border-top-style: none;` |
| `btso` | `border-top-style: outset;` |
| `btsr` | `border-top-style: ridge;` |
| `btss` | `border-top-style: solid;` |
| `btw1` | `border-top-width: ${0:0};` |
| `btwm` | `border-top-width: medium;` |
| `btwt` | `border-top-width: ${1\|thick,thin\|};` |
| `bu#` | `background: url('${1:url}') ${0:#000000};` |
| `bu` | `background: url('${0:url}');` |
| `bunr#` | `background: url('${1:url}') no-repeat ${0:#000000};` |
| `bunr` | `background: url('${0:url}') no-repeat;` |
| `bunr2#` | `background: url('${1:url}') no-repeat ${2:0} ${3:0} ${0:#000000};` |
| `bunr2` | `background: url('${1:url}') no-repeat ${2:0} ${0:0};` |
| `bunr2t` | `background: url('${1:url}') no-repeat ${2:0} ${0:0} transparent;` |
| `bunrt` | `background: url('${1:url}') no-repeat transparent;` |
| `burx#` | `background: url('${1:url}') repeat-x ${0:#000000};` |
| `burx` | `background: url('${0:url}') repeat-x;` |
| `burx2#` | `background: url('${1:url}') repeat-x ${2:0} ${3:0} ${0:#000000};` |
| `burx2` | `background: url('${1:url}') repeat-x ${2:0} ${0:0};` |
| `burx2t` | `background: url('${1:url}') repeat-x ${2:0} ${0:0} transparent;` |
| `burxt` | `background: url('${1:url}') repeat-x transparent;` |
| `bury#` | `background: url('${1:url}') repeat-y ${0:#000000};` |
| `bury` | `background: url('${0:url}') repeat-y;` |
| `bury2#` | `background: url('${1:url}') repeat-y ${2:0} ${3:0} ${0:#000000};` |
| `bury2` | `background: url('${1:url}') repeat-y ${2:0} ${0:0};` |
| `bury2t` | `background: url('${1:url}') repeat-y ${2:0} ${0:0} transparent;` |
| `buryt` | `background: url('${1:url}') repeat-y transparent;` |
| `but` | `background: url('${0:url}') transparent;` |
| `bvh` | `backface-visibility: hidden;` |
| `bvv` | `backface-visibility: visible;` |
| `bw1` | `border-width: ${0:0};` |
| `bwm` | `border-width: medium;` |
| `bwt` | `border-width: ${1\|thick,thin\|};` |
| `c#` | `color: ${0:#000000};` |
| `c` | `content: '$0';` |
| `c$1` | `calc($0)` |
| `c2` | `columns: ${1:10px} ${0:1};` |
| `ca` | `clip: auto;` |
| `ca` | `columns: auto;` |
| `ca` | `content: attr($0);` |
| `ca` | `cursor: ${1\|alias,auto\|};` |
| `cas` | `cursor: all-scroll;` |
| `cb` | `clear: both;` |
| `cb$4` | `cubic-bezier(${1:0}, ${2:0}, ${3:1}, ${0:1})` |
| `cc` | `content: counter($0);` |
| `cc` | `cursor: ${1\|cell,copy,crosshair\|};` |
| `cc1` | `column-count: ${0:0};` |
| `cca` | `column-count: auto;` |
| `ccm` | `cursor: context-menu;` |
| `ccq` | `content: close-quote;` |
| `ccr` | `cursor: col-resize;` |
| `cd` | `cursor: default;` |
| `cer` | `cursor: ${1\|e-resize,ew-resize\|};` |
| `cfa` | `column-fill: auto;` |
| `cfb` | `column-fill: balance;` |
| `cg` | `cursor: ${1\|grab,grabbing\|};` |
| `cg1` | `column-gap: ${0:0};` |
| `cgn` | `column-gap: normal;` |
| `ch` | `cursor: help;` |
| `ci` | `counter-increment: ${0:i};` |
| `cl` | `clear: left;` |
| `cm` | `cursor: move;` |
| `cn` | `clear: none;` |
| `cn` | `content: ${1\|none,normal\|};` |
| `cn` | `cursor: none;` |
| `cna` | `cursor: not-allowed;` |
| `cncq` | `content: no-close-quote;` |
| `cnd` | `cursor: no-drop;` |
| `cnoq` | `content: no-open-quote;` |
| `cnr` | `cursor: ${1\|n-resize,ne-resize,nesw-resize,ns-resize,nw-resize,nwse-resize\|};` |
| `coq` | `content: open-quote;` |
| `cp` | `cursor: ${1\|pointer,progress\|};` |
| `cr` | `clear: right;` |
| `cr` | `counter-reset(${0:i});` |
| `cr4` | `clip: rect(${1:0}, ${2:0}, ${3:0}, ${0:0});` |
| `crc#` | `column-rule-color: ${0:#000000};` |
| `crd1#` | `column-rule: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `crg1#` | `column-rule: groove ${1:0} ${0:#000000};` |
| `crh1#` | `column-rule: hidden ${1:0} ${0:#000000};` |
| `cri1#` | `column-rule: inset ${1:0} ${0:#000000};` |
| `crn1#` | `column-rule: none ${1:0} ${0:#000000};` |
| `cro1#` | `column-rule: outset ${1:0} ${0:#000000};` |
| `crr` | `cursor: row-resize;` |
| `crr1#` | `column-rule: ridge ${1:0} ${0:#000000};` |
| `crs1#` | `column-rule: solid ${1:0} ${0:#000000};` |
| `crsd` | `column-rule-style: ${1\|dashed,dotted,double\|};` |
| `crsg` | `column-rule-style: groove;` |
| `crsh` | `column-rule-style: hidden;` |
| `crsi` | `column-rule-style: inset;` |
| `crsn` | `column-rule-style: none;` |
| `crso` | `column-rule-style: outset;` |
| `crsr` | `column-rule-style: ridge;` |
| `crss` | `column-rule-style: solid;` |
| `crw1` | `column-rule-width: ${0:0};` |
| `crwm` | `column-rule-width: medium;` |
| `crwt` | `column-rule-width: ${1\|thick,thin\|};` |
| `cs1` | `column-span: ${0:1};` |
| `csa` | `column-span: all;` |
| `csb` | `caption-side: bottom;` |
| `csr` | `cursor: ${1\|s-resize,se-resize,sw-resize\|};` |
| `cst` | `caption-side: top;` |
| `ct` | `cursor: text;` |
| `cu` | `content: url($0);` |
| `cu` | `cursor: url($0);` |
| `cw` | `cursor: wait;` |
| `cw1` | `column-width: ${0:0};` |
| `cwa` | `column-width: auto;` |
| `cwr` | `cursor: w-resize;` |
| `czi` | `cursor: zoom-in;` |
| `czo` | `cursor: zoom-out;` |
| `db` | `display: block;` |
| `df` | `display: flex;` |
| `dg` | `display: grid;` |
| `di` | `display: inline;` |
| `dib` | `display: inline-block;` |
| `dif` | `display: inline-flex;` |
| `dig` | `display: inline-grid;` |
| `dit` | `display: inline-table;` |
| `dl` | `direction: ltr;` |
| `dli` | `display: list-item;` |
| `dn` | `display: none;` |
| `dr` | `direction: rtl;` |
| `dri` | `display: run-in;` |
| `dt` | `display: table;` |
| `dtc` | `display: ${1\|table-caption,table-cell,table-column\|};` |
| `dtcg` | `display: table-columns-group;` |
| `dtfg` | `display: table-footer-group;` |
| `dthg` | `display: table-header-group;` |
| `dtr` | `display: table-row;` |
| `dtrg` | `display: table-row-group;` |
| `ech` | `empty-cells: hide;` |
| `ecs` | `empty-cells: show;` |
| `f2a` | `flex-basis: ${1:0} ${2:1} ${0:auto};` |
| `f2A` | `font: ${1:1rem}/${0:1.3} Arial, sans-serif;` |
| `f2CN` | `font: ${1:1rem}/${0:1.3} 'Courier New', monospace;` |
| `f2G` | `font: ${1:1rem}/${0:1.3} Georgia, serif;` |
| `f2T` | `font: ${1:1rem}/${0:1.3} Tahoma, sans-serif;` |
| `f2V` | `font: ${1:1rem}/${0:1.3} Verdana, sans-serif;` |
| `fa` | `flex: auto;` |
| `fb1` | `flex-basis: ${0:0};` |
| `fba` | `flex-basis: auto;` |
| `fdc` | `flex-direction: column;` |
| `fdcr` | `flex-direction: column-reverse;` |
| `fdr` | `flex-direction: row;` |
| `fdrr` | `flex-direction: row-reverse;` |
| `ff$1` | `font-format($0)` |
| `ffA` | `font-family: Arial, sans-serif;` |
| `ffcn` | `flex-flow: column nowrap;` |
| `ffCN` | `font-family: 'Courier New', monospace;` |
| `ffcrn` | `flex-flow: column-reverse nowrap;` |
| `ffcrw` | `flex-flow: column-reverse wrap;` |
| `ffcrwr` | `flex-flow: column-reverse wrap-reverse;` |
| `ffcw` | `flex-flow: column wrap;` |
| `ffcwr` | `flex-flow: column wrap-reverse;` |
| `ffG` | `font-family: Georgia, serif;` |
| `ffrn` | `flex-flow: row nowrap;` |
| `ffrrn` | `flex-flow: row-reverse nowrap;` |
| `ffrrw` | `flex-flow: row-reverse wrap;` |
| `ffrrwr` | `flex-flow: row-reverse wrap-reverse;` |
| `ffrw` | `flex-flow: row wrap;` |
| `ffrwr` | `flex-flow: row wrap-reverse;` |
| `ffT` | `font-family: Tahoma, sans-serif;` |
| `ffV` | `font-family: Verdana, sans-serif;` |
| `fg1` | `flex-grow: ${0:1};` |
| `fl` | `float: left;` |
| `fn` | `float: none;` |
| `fr` | `float: right;` |
| `fs1` | `flex-shrink: ${0:0};` |
| `fs1` | `font-size: ${0:0};` |
| `fsi` | `font-style: italic;` |
| `fsl` | `font-size: ${1\|large,larger\|};` |
| `fsm` | `font-size: medium;` |
| `fsn` | `font-style: normal;` |
| `fso` | `font-style: oblique;` |
| `fss` | `font-size: small;` |
| `fsxl` | `font-size: ${1\|x-large,xx-large\|};` |
| `fsxs` | `font-size: ${1\|x-small,xx-small\|};` |
| `ft$1` | `font-tech($0)` |
| `fvn` | `font-variant: normal;` |
| `fvsc` | `font-variant: small-caps;` |
| `fw1` | `font-weight: ${0:0};` |
| `fwb` | `font-weight: ${1\|bold,bolder\|};` |
| `fwl` | `font-weight: lighter;` |
| `fwn` | `flex-wrap: nowrap;` |
| `fwn` | `font-weight: normal;` |
| `fww` | `flex-wrap: wrap;` |
| `fwwr` | `flex-wrap: wrap-reverse;` |
| `g1` | `gap: ${0:0};` |
| `g2` | `gap: ${1:0} ${0:0};` |
| `ga` | `grid-area: ${0:name};` |
| `gce1` | `grid-column-end: ${0:0};` |
| `gcea` | `grid-column-end: auto;` |
| `gcg` | `grid-column-gap: ${0:0};` |
| `gcs1` | `grid-column-start: ${0:0};` |
| `gcsa` | `grid-column-start: auto;` |
| `gre1` | `grid-row-end: ${0:0};` |
| `grea` | `grid-row-end: auto;` |
| `grg` | `grid-row-gap: ${0:0};` |
| `grs1` | `grid-row-start: ${0:0};` |
| `grsa` | `grid-row-start: auto;` |
| `gt2` | `grid-template: $1 / $0;` |
| `gta` | `grid-template-areas: $0;` |
| `gtan` | `grid-template-areas: none;` |
| `gtc1` | `grid-template-columns: ${0:0};` |
| `gtcn` | `grid-template-columns: none;` |
| `gtcs` | `grid-template-columns: subgrid;` |
| `gtn` | `grid-template: none;` |
| `gtr1` | `grid-template-rows: ${0:0};` |
| `gtrn` | `grid-template-rows: none;` |
| `gtrs` | `grid-template-rows: subgrid;` |
| `h$3` | `hsl(${1:0}, ${2:100}%, ${0:50}%)` |
| `h$4` | `hsla(${1:0}, ${2:100}%, ${3:50}%, ${0:1})` |
| `h1` | `height: ${0:0};` |
| `ha` | `height: auto;` |
| `ia` | `isolation: auto;` |
| `ii` | `isolation: isolate;` |
| `jcc` | `justify-content: center;` |
| `jce` | `justify-content: end;` |
| `jcfe` | `justify-content: flex-end;` |
| `jcfs` | `justify-content: flex-start;` |
| `jcs` | `justify-content: ${1\|start,strech\|};` |
| `jcsa` | `justify-content: space-around;` |
| `jcsb` | `justify-content: space-between;` |
| `jcse` | `justify-content: space-evenly;` |
| `jic` | `justify-items: center;` |
| `jie` | `justify-items: end;` |
| `jis` | `justify-items: ${1\|start,strech\|};` |
| `l1` | `left: ${0:0};` |
| `la` | `left: auto;` |
| `lg$` | `linear-gradient($0)` |
| `lh1` | `line-height: ${0:0};` |
| `lhn` | `line-height: normal;` |
| `ls1` | `letter-spacing: ${0:0};` |
| `lsin` | `list-style-image: none;` |
| `lsiu` | `list-style-image: url($0);` |
| `lsn` | `letter-spacing: normal;` |
| `lsn` | `list-style: none;` |
| `lspi` | `list-style-position: inside;` |
| `lspo` | `list-style-position: outside;` |
| `lsta` | `list-style-type: armenian;` |
| `lstc` | `list-style-type: circle;` |
| `lstd` | `list-style-type: ${1\|disc,decimal\|};` |
| `lstdlz` | `list-style-type: decimal-leading-zero;` |
| `lstg` | `list-style-type: georgian;` |
| `lstlg` | `list-style-type: lower-greek;` |
| `lstll` | `list-style-type: lower-latin;` |
| `lstlr` | `list-style-type: lower-roman;` |
| `lstn` | `list-style-type: none;` |
| `lsts` | `list-style-type: square;` |
| `lstul` | `list-style-type: upper-latin;` |
| `lstur` | `list-style-type: upper-roman;` |
| `m1` | `margin: ${0:0};` |
| `m1a` | `margin: ${0:0} auto;` |
| `m2` | `margin: ${1:0} ${0:0};` |
| `m3` | `margin: ${1:0} ${2:0} ${0:0};` |
| `m4` | `margin: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `ma` | `margin: auto;` |
| `mb1` | `margin-block: ${0:0};` |
| `mb1` | `margin-bottom: ${0:0};` |
| `mb2` | `margin-block: ${1:0} ${0:0};` |
| `mba` | `margin-bottom: auto;` |
| `mbe1` | `margin-block-end: ${0:0};` |
| `mbs1` | `margin-block-start: ${0:0};` |
| `mh1` | `max-height: ${0:0};` |
| `mh1` | `min-height: ${0:0};` |
| `mhn` | `max-height: none;` |
| `mi1` | `margin-inline: ${0:0};` |
| `mi2` | `margin-inline: ${1:0} ${0:0};` |
| `mie1` | `margin-inline-end: ${0:0};` |
| `mis1` | `margin-inline-start: ${0:0};` |
| `ml1` | `margin-left: ${0:0};` |
| `mla` | `margin-left: auto;` |
| `mr1` | `margin-right: ${0:0};` |
| `mra` | `margin-right: auto;` |
| `mt1` | `margin-top: ${0:0};` |
| `mta` | `margin-top: auto;` |
| `mw1` | `max-width: ${0:0};` |
| `mw1` | `min-width: ${0:0};` |
| `mwn` | `max-width: none;` |
| `o1` | `opacity: ${0:0};` |
| `o1` | `order: ${0:1};` |
| `oa` | `overflow: auto;` |
| `oc#` | `outline-color: ${0:#000000};` |
| `od1#` | `outline: ${1\|dashed,dotted,double\|} ${2:0} ${0:#000000};` |
| `og1#` | `outline: groove ${1:0} ${0:#000000};` |
| `oh` | `overflow: hidden;` |
| `oi1#` | `outline: inset ${1:0} ${0:#000000};` |
| `on` | `outline: none;` |
| `oo1#` | `outline: outset ${1:0} ${0:#000000};` |
| `oo1` | `outline-offset: ${0:0};` |
| `or1#` | `outline: ridge ${1:0} ${0:#000000};` |
| `os` | `overflow: scroll;` |
| `os1#` | `outline: solid ${1:0} ${0:#000000};` |
| `osd` | `outline-style: ${1\|dashed,dotted,double\|};` |
| `osg` | `outline-style: groove;` |
| `osi` | `outline-style: inset;` |
| `osn` | `outline-style: none;` |
| `oso` | `outline-style: outset;` |
| `osr` | `outline-style: ridge;` |
| `oss` | `outline-style: solid;` |
| `ov` | `overflow: visible;` |
| `ow1` | `outline-width: ${0:0};` |
| `oxa` | `overflow-x: auto;` |
| `oxh` | `overflow-x: hidden;` |
| `oxs` | `overflow-x: scroll;` |
| `oxv` | `overflow-x: visible;` |
| `oya` | `overflow-y: auto;` |
| `oyh` | `overflow-y: hidden;` |
| `oys` | `overflow-y: scroll;` |
| `oyv` | `overflow-y: visible;` |
| `p1` | `padding: ${0:0};` |
| `p1` | `perspective: ${0:0};` |
| `p2` | `padding: ${1:0} ${0:0};` |
| `p3` | `padding: ${1:0} ${2:0} ${0:0};` |
| `p4` | `padding: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `pa` | `position: absolute;` |
| `pb1` | `padding-block: ${0:0};` |
| `pb1` | `padding-bottom: ${0:0};` |
| `pb2` | `padding-block: ${1:0} ${0:0};` |
| `pbaa` | `page-break-after: ${1\|always,auto,avoid\|};` |
| `pbal` | `page-break-after: left;` |
| `pbar` | `page-break-after: right;` |
| `pbba` | `page-break-before: ${1\|always,auto,avoid\|};` |
| `pbbl` | `page-break-before: left;` |
| `pbbr` | `page-break-before: right;` |
| `pbe1` | `padding-block-end: ${0:0};` |
| `pbia` | `page-break-inside: ${1\|auto,avoid\|};` |
| `pbs1` | `padding-block-start: ${0:0};` |
| `pea` | `pointer-events: ${1\|all,auto\|};` |
| `pef` | `pointer-events: fill;` |
| `pen` | `pointer-events: none;` |
| `pep` | `pointer-events: painted;` |
| `pes` | `pointer-events: stroke;` |
| `pev` | `pointer-events: visible;` |
| `pevF` | `pointer-events: visibleFill;` |
| `pevP` | `pointer-events: visiblePainted;` |
| `pevS` | `pointer-events: visibleStroke;` |
| `pf` | `position: fixed;` |
| `pi1` | `padding-inline: ${0:0};` |
| `pi2` | `padding-inline: ${1:0} ${0:0};` |
| `pib` | `place-items: baseline;` |
| `pibc` | `place-items: baseline / center;` |
| `pibe` | `place-items: baseline / end;` |
| `pibs` | `place-items: baseline / ${1\|start,stretch\|};` |
| `pic` | `place-items: center;` |
| `pice` | `place-items: center / end;` |
| `pics` | `place-items: center / ${1\|start,stretch\|};` |
| `pie` | `place-items: end;` |
| `pie1` | `padding-inline-end: ${0:0};` |
| `piec` | `place-items: end / center;` |
| `pies` | `place-items: end / ${1\|start,stretch\|};` |
| `pis` | `place-items: ${1\|start,stretch\|};` |
| `pis1` | `padding-inline-start: ${0:0};` |
| `pisc` | `place-items: ${1\|start,stretch\|} / center;` |
| `pise` | `place-items: ${1\|start,stretch\|} / end;` |
| `piss` | `place-items: ${1\|start / stretch,stretch / start\|};` |
| `pl1` | `padding-left: ${0:0};` |
| `pn` | `perspective: none;` |
| `po2` | `perspective-origin: ${1:0} ${0:0};` |
| `pocb` | `perspective-origin: center bottom;` |
| `pocc` | `perspective-origin: center center;` |
| `poct` | `perspective-origin: center top;` |
| `polb` | `perspective-origin: left bottom;` |
| `polc` | `perspective-origin: left center;` |
| `polt` | `perspective-origin: left top;` |
| `porb` | `perspective-origin: right bottom;` |
| `porc` | `perspective-origin: right center;` |
| `port` | `perspective-origin: right top;` |
| `pr` | `position: relative;` |
| `pr1` | `padding-right: ${0:0};` |
| `ps` | `position: ${1\|sticky,static\|};` |
| `pt1` | `padding-top: ${0:0};` |
| `q2` | `quotes: '${1:«}' '${0:»}';` |
| `qn` | `quotes: none;` |
| `r$3` | `rgb(${1:0}, ${2:0}, ${0:0})` |
| `r$4` | `rgba(${1:0}, ${2:0}, ${3:0}, ${0:1})` |
| `r1` | `right: ${0:0};` |
| `ra` | `right: auto;` |
| `rg$` | `radial-gradient($0)` |
| `rg1` | `row-gap: ${0:0};` |
| `rh` | `resize: horizontal;` |
| `ri` | `resize: both;` |
| `rlg$` | `repeating-linear-gradient($0)` |
| `rn` | `resize: none;` |
| `rrg$` | `repeating-radial-gradient($0)` |
| `rv` | `resize: vertical;` |
| `s$1` | `selector($0)` |
| `sba` | `scroll-behavior: auto;` |
| `sbs` | `scroll-behavior: smooth;` |
| `sga` | `scrollbar-gutter: auto;` |
| `sgs` | `scrollbar-gutter: stable;` |
| `sgsbe` | `scrollbar-gutter: stable both-edges;` |
| `sm1` | `scroll-margin: ${0:0};` |
| `sm2` | `scroll-margin: ${1:0} ${0:0};` |
| `sm3` | `scroll-margin: ${1:0} ${2:0} ${0:0};` |
| `sm4` | `scroll-margin: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `smb1` | `scroll-margin-block: ${0:0};` |
| `smb1` | `scroll-margin-bottom: ${0:0};` |
| `smb2` | `scroll-margin-block: ${1:0} ${0:0};` |
| `smbe1` | `scroll-margin-block-end: ${0:0};` |
| `smbs1` | `scroll-margin-block-start: ${0:0};` |
| `smi1` | `scroll-margin-inline: ${0:0};` |
| `smi2` | `scroll-margin-inline: ${1:0} ${0:0};` |
| `smie1` | `scroll-margin-inline-end: ${0:0};` |
| `smis1` | `scroll-margin-inline-start: ${0:0};` |
| `sml1` | `scroll-margin-left: ${0:0};` |
| `smr1` | `scroll-margin-right: ${0:0};` |
| `smt1` | `scroll-margin-left: ${0:0};` |
| `sp1` | `scroll-padding: ${0:0};` |
| `sp2` | `scroll-padding: ${1:0} ${0:0};` |
| `sp3` | `scroll-padding: ${1:0} ${2:0} ${0:0};` |
| `sp4` | `scroll-padding: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `spb1` | `scroll-padding-block: ${0:0};` |
| `spb1` | `scroll-padding-bottom: ${0:0};` |
| `spb2` | `scroll-padding-block: ${1:0} ${0:0};` |
| `spbe1` | `scroll-padding-block-end: ${0:0};` |
| `spbs1` | `scroll-padding-block-start: ${0:0};` |
| `spi1` | `scroll-padding-inline: ${0:0};` |
| `spi2` | `scroll-padding-inline: ${1:0} ${0:0};` |
| `spie1` | `scroll-padding-inline-end: ${0:0};` |
| `spis1` | `scroll-padding-inline-start: ${0:0};` |
| `spl1` | `scroll-padding-left: ${0:0};` |
| `spr1` | `scroll-padding-right: ${0:0};` |
| `spt1` | `scroll-padding-left: ${0:0};` |
| `ssac` | `scroll-snap-align: center;` |
| `ssae` | `scroll-snap-align: end;` |
| `ssan` | `scroll-snap-align: none;` |
| `ssas` | `scroll-snap-align: start;` |
| `ssase` | `scroll-snap-align: start end;` |
| `sssa` | `scroll-snap-stop: always;` |
| `sssn` | `scroll-snap-stop: normal;` |
| `sstb` | `scroll-snap-type: ${1\|block,both\|};` |
| `sstbm` | `scroll-snap-type: ${1\|block,both\|} mandatory;` |
| `sstbmp` | `scroll-snap-type: ${1\|block,both\|} proximity;` |
| `ssti` | `scroll-snap-type: inline;` |
| `sstim` | `scroll-snap-type: inline mandatory;` |
| `sstimp` | `scroll-snap-type: inline proximity;` |
| `sstn` | `scroll-snap-type: none;` |
| `sstx` | `scroll-snap-type: x;` |
| `sstxm` | `scroll-snap-type: x mandatory;` |
| `sstxmp` | `scroll-snap-type: x proximity;` |
| `ssty` | `scroll-snap-type: y;` |
| `sstym` | `scroll-snap-type: y mandatory;` |
| `sstymp` | `scroll-snap-type: y proximity;` |
| `t1` | `top: ${0:0};` |
| `ta` | `top: auto;` |
| `ta1` | `transition: ${1:all} ${0:1}s;` |
| `ta1e` | `transition: ${1:all} ${0:1}s ease;` |
| `ta1ei` | `transition: ${1:all} ${0:1}s ease-in;` |
| `ta1eio` | `transition: ${1:all} ${0:1}s ease-in-out;` |
| `ta1eo` | `transition: ${1:all} ${0:1}s ease-out;` |
| `ta1l` | `transition: ${1:all} ${0:1}s linear;` |
| `tac` | `text-align: center;` |
| `tacb1` | `transition: ${1:all} ${2:1}s cubic-bezier(${3:0}, ${4:0}, ${5:0}, ${0:0});` |
| `taj` | `text-align: justify;` |
| `tal` | `text-align: left;` |
| `tar` | `text-align: right;` |
| `td1` | `transition-delay: ${0:1}s;` |
| `td1` | `transition-duration: ${0:1}s;` |
| `tdb` | `text-decoration: blink;` |
| `tdlt` | `text-decoration: line-through;` |
| `tdn` | `text-decoration: none;` |
| `tdo` | `text-decoration: overline;` |
| `tdu` | `text-decoration: underline;` |
| `ti1` | `text-indent: ${0:0};` |
| `tla` | `table-layout: auto;` |
| `tlf` | `table-layout: fixed;` |
| `tm3` | `transform: matrix3d(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${6:0}, ${7:0}, ${8:0}, ${9:0}, ${10:0}, ${11:0}, ${12:0}, ${13:0}, ${14:0}, ${15:0}, ${0:0});` |
| `tm6` | `transform: matrix(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${0:0});` |
| `tn` | `transform: none;` |
| `to2` | `transform-origin: ${1:0} ${0:0};` |
| `to3` | `transform-origin: ${1:0} ${2:0} ${0:0};` |
| `toc` | `text-overflow: clip;` |
| `toe` | `text-overflow: ellipsis;` |
| `tos` | `text-overflow: string;` |
| `tp1` | `transform: perspective(${0:0});` |
| `tpa` | `transition-property: all;` |
| `tpn` | `transition-property: none;` |
| `tpp` | `transition-property: ${0:name};` |
| `tr1` | `transform: rotate(${0:0});` |
| `tr34` | `transform: rotate3d(${1:0}, ${2:0}, ${3:0}, ${4:0});` |
| `trx1` | `transform: rotateX(${0:0});` |
| `try1` | `transform: rotateY(${0:0});` |
| `trz1` | `transform: rotateZ(${0:0});` |
| `ts1` | `tab-size: ${0:4};` |
| `ts2#` | `text-shadow: ${1:0} ${2:0} ${0:#000000};` |
| `ts2` | `transform: ${1\|scale,skew\|}(${2:0}, ${0:0});` |
| `ts3#` | `text-shadow: ${1:0} ${2:0} ${3:0} ${0:#000000};` |
| `ts33` | `transform: scale3d(${1:0}, ${2:0}, ${0:0});` |
| `tsf` | `transform-style: flat;` |
| `tsn` | `text-shadow: none;` |
| `tsp3` | `transform-style: preserve-3d;` |
| `tsX1` | `transform: ${1\|scaleX,skewX\|}(${0:0});` |
| `tsY1` | `transform: ${1\|scaleY,skewY\|}(${0:0});` |
| `tsZ1` | `transform: scaleZ(${0:0});` |
| `tt2` | `transform: translate(${1:0}, ${0:0});` |
| `tt33` | `transform: translate3d(${1:0}, ${2:0}, ${0:0});` |
| `ttc` | `text-transform: capitalize;` |
| `ttfcb4` | `transition-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0});` |
| `ttfe` | `transition-timing-function: ease;` |
| `ttfei` | `transition-timing-function: ease-in;` |
| `ttfeio` | `transition-timing-function: ease-in-out;` |
| `ttfeo` | `transition-timing-function: ease-out;` |
| `ttfl` | `transition-timing-function: linear;` |
| `ttl` | `text-transform: lowercase;` |
| `ttn` | `text-transform: none;` |
| `ttu` | `text-transform: uppercase;` |
| `ttX1` | `transform: translateX(${0:0});` |
| `ttY1` | `transform: translateY(${0:0});` |
| `ttZ1` | `transform: translateZ(${0:0});` |
| `u$1` | `url('$0')` |
| `ubbo` | `unicode-bidi: bidi-override;` |
| `ube` | `unicode-bidi: embed;` |
| `ubn` | `unicode-bidi: normal;` |
| `usa` | `user-select: ${1\|all,auto\|};` |
| `usn` | `user-select: none;` |
| `ust` | `user-select: text;` |
| `v$1` | `var($0)` |
| `va1` | `vertical-align: ${0:0};` |
| `vab` | `vertical-align: ${1\|baseline,bottom\|};` |
| `vam` | `vertical-align: middle;` |
| `vas` | `vertical-align: ${1\|sub,super\|};` |
| `vat` | `vertical-align: top;` |
| `vatb` | `vertical-align: text-bottom;` |
| `vatt` | `vertical-align: text-top;` |
| `vc` | `visibility: collapse;` |
| `vh` | `visibility: hidden;` |
| `vv` | `visibility: visible;` |
| `w1` | `width: ${0:0};` |
| `wa` | `width: auto;` |
| `wbba` | `word-break: break-all;` |
| `wbka` | `word-break: keep-all;` |
| `wbn` | `word-break: normal;` |
| `wmht` | `writing-mode: horizontal-tb;` |
| `wmvl` | `writing-mode: vertical-lr;` |
| `wmvr` | `writing-mode: vertical-rl;` |
| `ws1` | `word-spacing: ${0:0};` |
| `wsn` | `white-space: ${1\|nowrap,normal\|};` |
| `wsn` | `word-spacing: normal;` |
| `wsp` | `white-space: pre;` |
| `wspl` | `white-space: pre-line;` |
| `wspw` | `white-space: pre-wrap;` |
| `wwbw` | `word-wrap: break-word;` |
| `wwn` | `word-wrap: normal;` |
| `zi1` | `z-index: ${0:0};` |
| `zia` | `z-index: auto;` |

### SCSS

| Prefix | Snippet |
| -----: | ------- |
| `__` | `#{${0:$TM_SELECTED_TEXT}}` |
| `_` | `${1:&} { $0 }` |
| `_0_` | `~ ${1:*} { $0 }` |
| `_1_` | `> ${1:*} { $0 }` |
| `_a_` | `&:active { $0 }` |
| `_c_` | `&:checked { $0 }` |
| `_d_` | `&:disabled { $0 }` |
| `_f_` | `&:focus { $0 }` |
| `_h_` | `&:hover { $0 }` |
| `_l_` | `&:link { $0 }` |
| `_v_` | `&:visited { $0 }` |
| `@ar_` | `@at-root$1 { $0 }` |
| `@c1` | `@content;` |
| `@d1` | `@debug ${0:message};` |
| `@e_` | `@else { $0 }` |
| `@e1` | `@error ${0:message};` |
| `@e1` | `@extend ${0:name};` |
| `@ei_` | `@each ${1:\$item} in ${0:\$items} { }` |
| `@ei_` | `@else if ${0:condition} { }` |
| `@ein_` | `@else if not ${0:condition} { }` |
| `@f_` | `@function ${1:name} ($2) { $0 }` |
| `@f1` | `@forward '$0';` |
| `@fa1` | `@forward '$1' as ${0:*};` |
| `@fft_` | `@for ${1:\$i} from ${2:1} through ${0:\$end} { }` |
| `@fh1` | `@forward '$1' hide $0;` |
| `@fs1` | `@forward '$1' show $0;` |
| `@fw1` | `@forward '$1' with ($0);` |
| `@i_` | `@if ${0:condition} { }` |
| `@i_` | `@include ${1:name}() { $0 }` |
| `@i$` | `@include ${0:name}();` |
| `@in_` | `@if not ${0:condition} { }` |
| `@m_` | `@mixin ${1:name} ($2) { $0 }` |
| `@r1` | `@return $0;` |
| `@u1` | `@use '$0';` |
| `@ua1` | `@use '$1' as ${0:*};` |
| `@usc1` | `@use 'sass:color';` |
| `@usl1` | `@use 'sass:list';` |
| `@usm1` | `@use 'sass:${1\|map,math,meta\|}';` |
| `@uss1` | `@use 'sass:${1\|selector,string\|}';` |
| `@uw1` | `@use '$1' with ($0);` |
| `@w_` | `@while ${0:condition} { }` |
| `@w1` | `@warn ${0:message};` |
| `$1` | `\$${1:name}: ${0:null};` |
| `$d1` | `\$${1:name}: ${0:null} !default;` |
| `$g1` | `\$${1:name}: ${0:null} !global;` |
| `ca$1` | `color.adjust(${0:\$color})` |
| `ca$1` | `color.alpha(${0:\$color})` |
| `cb$1` | `color.blackness(${0:\$color})` |
| `cb$1` | `color.blue(${0:\$color})` |
| `cc$1` | `color.change(${0:\$color})` |
| `cc$1` | `color.complement(${0:\$color})` |
| `cg$1` | `color.grayscale(${0:\$color})` |
| `cg$1` | `color.green(${0:\$color})` |
| `ch$1` | `color.hue(${0:\$color})` |
| `ch$3` | `color.hwb(${1:\$hue}, ${2:\$whiteness}, ${0:\$blackness})` |
| `ch$4` | `color.hwb(${1:\$hue}, ${2:\$whiteness}, ${3:\$blackness}, \$alpha: ${0:1})` |
| `ci$1` | `color.invert(${0:\$color})` |
| `ci$2` | `color.invert(${1:\$color}, \$weight: ${0:0}%)` |
| `cl$1` | `color.lightness(${0:\$color})` |
| `cm$2` | `color.mix(${1:\$color1}, ${0:\$color2})` |
| `cm$3` | `color.mix(${1:\$color1}, ${2:\$color2}, \$weight: ${0:0}%)` |
| `cr$1` | `color.red(${0:\$color})` |
| `cs$1` | `color.saturation(${0:\$color})` |
| `cs$1` | `color.scale(${0:\$color})` |
| `cs$2` | `color.saturate(${1:\$color}, ${0:\$amount})` |
| `cw$1` | `color.whiteness(${0:\$color})` |
| `f` | `false` |
| `i$3` | `if(${1:condition}, ${2:true}, ${0:false})` |
| `la$2` | `list.append(${1:\$list}, ${0:\$val})` |
| `la$3` | `list.append(${1:\$list}, ${2:\$val}, \$separator: ${3\|comma,slash,space\|})` |
| `li$2` | `list.index(${1:\$list}, ${0:\$value})` |
| `lib$1` | `list.is-bracketed(${0:\$list})` |
| `lj$2` | `list.join(${1:\$list1}, ${0:\$list2})` |
| `lj$3` | `list.join(${1:\$list1}, ${2:\$list2}, \$bracketed: ${3\|false,true\|})` |
| `lj$3` | `list.join(${1:\$list1}, ${2:\$list2}, \$separator: ${3\|comma,slash,space\|})` |
| `lj$4` | `list.join(${1:\$list1}, ${2:\$list2}, \$separator: ${3\|auto,comma,slash,space\|}, \$bracketed: ${3\|false,true\|})` |
| `ll$1` | `list.length(${0:\$list})` |
| `ln$2` | `list.nth(${1:\$list}, ${0:\$n})` |
| `ls$1` | `list.separator(${0:\$list})` |
| `ls$1` | `list.slash(${0:\$list})` |
| `lsn$1` | `list.set-nth(${1:\$list}, ${2:\$n}, ${0:\$value})` |
| `lz$1` | `list.zip(${0:\$list})` |
| `ma$1` | `math.abs(${0:\$number})` |
| `ma$1` | `math.acos(${0:\$number})` |
| `ma$1` | `math.asin(${0:\$number})` |
| `ma$1` | `math.atan(${0:\$number})` |
| `ma$2` | `math.atan2(${1:\$y}, ${0:\$x})` |
| `mc$1` | `math.ceil(${0:\$number})` |
| `mc$1` | `math.cos(${0:\$number})` |
| `mc$1` | `meta.call(${0:\$function})` |
| `mc$2` | `math.compatible(${1:\$number1}, ${0:\$number2})` |
| `mc$3` | `math.clamp(${1:\$min}, ${2:\$number}, ${0:\$max})` |
| `mca$1` | `meta.calc-args(${0:\$calc})` |
| `mce$` | `meta.content-exists()` |
| `mcn$1` | `meta.calc-name(${0:\$calc})` |
| `md$2` | `math.div(${1:\$number1}, ${0:\$number2})` |
| `mdm$2` | `map.deep-merge(${1:\$map1}, ${0:\$map2})` |
| `mdr$2` | `map.deep-remove(${1:\$map}, ${0:\$key})` |
| `me` | `math.${1\|\$e,\$epsilon\|}` |
| `mf$1` | `math.floor(${0:\$number})` |
| `mfe$1` | `meta.feature-exists(${0:\$feature})` |
| `mfe$1` | `meta.function-exists(${0:\$name})` |
| `mfe$2` | `meta.function-exists(${1:\$name}, ${0:\$module})` |
| `mg$2` | `map.get(${1:\$map}, ${0:\$key})` |
| `mgf$1` | `meta.get-function(${0:\$name})` |
| `mgf$2` | `meta.get-function(${1:\$name}, ${0:\$css})` |
| `mgf$3` | `meta.get-function(${1:\$name}, ${2:\$css}, ${0:\$module})` |
| `mgve$1` | `meta.global-variable-exists(${0:\$name})` |
| `mgve$2` | `meta.global-variable-exists(${1:\$name}, ${0:\$module})` |
| `mh$1` | `math.hypot($0)` |
| `mhk$2` | `map.has-key(${1:\$map}, ${0:\$key})` |
| `mi$1` | `meta.inspect(${0:\$value})` |
| `miu$1` | `math.is-unitless(${0:\$number})` |
| `mk$1` | `map.keys(${0:\$map})` |
| `mk$1` | `meta.keywords(${0:\$args})` |
| `ml$1` | `math.log(${0:\$number})` |
| `ml$2` | `math.log(${1:\$number}, ${0:\$base})` |
| `mlc$1` | `meta.load-css(${0:\$url})` |
| `mlc$2` | `meta.load-css(${1:\$url}, ${0:\$with})` |
| `mm$1` | `math.max($0)` |
| `mm$1` | `math.min($0)` |
| `mm$2` | `map.merge(${1:\$map1}, ${0:\$map2})` |
| `mme$1` | `meta.mixin-exists(${0:\$name})` |
| `mme$2` | `meta.mixin-exists(${1:\$name}, ${0:\$module})` |
| `mmf$1` | `meta.module-functions(${0:\$module})` |
| `mmn` | `math.${1\|\$max-number,\$min-number\|}` |
| `mmsi` | `math.${1\|\$max-safe-integer,\$min-safe-integer\|}` |
| `mmv$1` | `meta.module-variables(${0:\$module})` |
| `mp` | `math.\$pi` |
| `mp$1` | `math.percentage(${0:\$number})` |
| `mp$2` | `math.pow(${1:\$base}, ${0:\$exponent})` |
| `mr$1` | `math.random($0)` |
| `mr$1` | `math.round(${0:\$number})` |
| `mr$2` | `map.remove(${1:\$map}, ${0:\$key})` |
| `ms$1` | `math.sin(${0:\$number})` |
| `ms$1` | `math.sqrt(${0:\$number})` |
| `ms$3` | `map.set(${1:\$map}, ${2:\$key}, ${0:\$value})` |
| `mt$1` | `math.tan(${0:\$number})` |
| `mto$1` | `meta.type-of(${0:\$value})` |
| `mu$1` | `math.unit(${0:\$number})` |
| `mv$1` | `map.values(${0:\$map})` |
| `mve$1` | `meta.variable-exists(${0:\$name})` |
| `n` | `null` |
| `sa$1` | `selector.append($0)` |
| `se$3` | `selector.extend(${1:\$selector}, ${2:\$extendee}, ${0:\$extender})` |
| `si$2` | `string.index(${1:\$string}, ${0:\$substring})` |
| `si$3` | `string.insert(${1:\$string}, ${2:\$insert}, ${0:\$index})` |
| `sis$2` | `selector.is-superselector(${1:\$super}, ${0:\$sub})` |
| `sl$1` | `string.length(${0:\$string})` |
| `sn$1` | `selector.nest($0)` |
| `sp$1` | `selector.parse(${0:\$selector})` |
| `sq$1` | `string.quote(${0:\$string})` |
| `sr$3` | `selector.replace(${1:\$selector}, ${2:\$original}, ${0:\$replacement})` |
| `ss$2` | `string.slice(${1:\$string}, ${0:\$start-at})` |
| `ss$2` | `string.split(${1:\$string}, ${0:\$separator})` |
| `ss$3` | `string.slice(${1:\$string}, ${2:\$start-at}, ${0:\$end-at})` |
| `ss$3` | `string.split(${1:\$string}, ${2:\$separator}, ${0:\$limit})` |
| `sss$1` | `selector.simple-selectors(${0:\$selector})` |
| `stlc$1` | `string.to-lower-case(${0:\$string})` |
| `stuc$1` | `string.to-upper-case(${0:\$string})` |
| `su$1` | `string.unquote(${0:\$string})` |
| `su$2` | `selector.unify(${1:\$selector1}, ${0:\$selector2})` |
| `sui$` | `string.unique-id()` |
| `t` | `true` |