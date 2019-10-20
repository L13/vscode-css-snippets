## CSS and SCSS Snippets

Complete list of all CSS and SCSS snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)

### CSS

| Prefix | Snippet |
| ------:| ------- |
| `!` | `!important` |
| `a$1` | `attr($0)` |
| `c$1` | `calc($0)` |
| `cb$4` | `cubic-bezier(${1:0}, ${2:0}, ${3:1}, ${0:1})` |
| `h$3` | `hsl(${1:0}, ${2:100}%, ${0:50}%)` |
| `h$4` | `hsla(${1:0}, ${2:100}%, ${3:50}%, ${0:1})` |
| `lg$` | `linear-gradient($0)` |
| `rg$` | `radial-gradient($0)` |
| `rlg$` | `repeating-linear-gradient($0)` |
| `rrg$` | `repeating-radial-gradient($0)` |
| `r$3` | `rgb(${1:0}, ${2:0}, ${0:0})` |
| `r$4` | `rgba(${1:0}, ${2:0}, ${3:0}, ${0:1})` |
| `u$1` | `url('$0')` |
| `v$1` | `var($0)` |
| `@c1` | `@charset "$0"` |
| `@cu8` | `@charset "UTF-8"` |
| `@ff` | `@font-face { $0 }` |
| `@ffw` | `@font-face { font-family: ${1:name}; src: url('${0:file.woff}'); }` |
| `@ffewo` | `@font-face { font-family: ${1:name}; src: url(${0:fontname}.eot); /* IE */ src: local('☺︎'), url('${0:fontname}.woff') format('woff'), url('${0:fontname}.otf') format('opentype'); /* Safari */ }` |
| `@i1` | `@import "$0";` |
| `@iu$` | `@import url("$0");` |
| `@-k` | `@-moz-keyframes ${0:animationname} { 0% {  } 100% {  } } @-o-keyframes ${1:animationname} { 0% {  } 100% {  } } @-webkit-keyframes ${1:animationname} { 0% {  } 100% {  } } @keyframes ${1:animationname} { 0% {  } 100% {  } }` |
| `@k` | `@keyframes ${0:animationname} { 0% {  } 100% {  } }` |
| `@m_` | `@media $0 {  }` |
| `@ma_` | `@media all { $0 }` |
| `@mp_` | `@media print { $0 }` |
| `@mnp_` | `@media not print { $0 }` |
| `@mop_` | `@media only print { $0 }` |
| `@ms_` | `@media screen { $0 }` |
| `@mns_` | `@media not screen { $0 }` |
| `@mos_` | `@media only screen { $0 }` |
| `-acc` | `-webkit-align-content: center; align-content: center;` |
| `acc` | `align-content: center;` |
| `-acfs` | `-webkit-align-content: flex-start; align-content: flex-start;` |
| `acfs` | `align-content: flex-start;` |
| `-acfe` | `-webkit-align-content: flex-end; align-content: flex-end;` |
| `acfe` | `align-content: flex-end;` |
| `-acsb` | `-webkit-align-content: space-between; align-content: space-between;` |
| `acsb` | `align-content: space-between;` |
| `-acsa` | `-webkit-align-content: space-around; align-content: space-around;` |
| `acsa` | `align-content: space-around;` |
| `-acs` | `-webkit-align-content: stretch; align-content: stretch;` |
| `acs` | `align-content: stretch;` |
| `-aib` | `-webkit-align-items: baseline; align-items: baseline;` |
| `aib` | `align-items: baseline;` |
| `-aic` | `-webkit-align-items: center; align-items: center;` |
| `aic` | `align-items: center;` |
| `-aife` | `-webkit-align-items: flex-end; align-items: flex-end;` |
| `aife` | `align-items: flex-end;` |
| `-aifs` | `-webkit-align-items: flex-start; align-items: flex-start;` |
| `aifs` | `align-items: flex-start;` |
| `-ais` | `-webkit-align-items: stretch; align-items: stretch;` |
| `ais` | `align-items: stretch;` |
| `-asa` | `-webkit-align-self: auto; align-self: auto;` |
| `asa` | `align-self: auto;` |
| `-asb` | `-webkit-align-self: baseline; align-self: baseline;` |
| `asb` | `align-self: baseline;` |
| `-asc` | `-webkit-align-self: center; align-self: center;` |
| `asc` | `align-self: center;` |
| `-asfe` | `-webkit-align-self: flex-end; align-self: flex-end;` |
| `asfe` | `align-self: flex-end;` |
| `-asfs` | `-webkit-align-self: flex-start; align-self: flex-start;` |
| `asfs` | `align-self: flex-start;` |
| `-ass` | `-webkit-align-self: stretch; align-self: stretch;` |
| `ass` | `align-self: stretch;` |
| `-a1` | `-moz-animation: ${1:name} ${2:1}s ${3:ease} ${4:0}s ${5:1} ${6:normal} ${7:none} ${0:running}; -o-animation: ${1:name} ${2:1}s ${3:ease} ${4:0}s ${5:1} ${6:normal} ${7:none} ${0:running}; -webkit-animation: ${1:name} ${2:1}s ${3:ease} ${4:0}s ${5:1} ${6:normal} ${7:none} ${0:running}; animation: ${1:name} ${2:1}s ${3:ease} ${4:0}s ${5:1} ${6:normal} ${7:none} ${0:running};` |
| `a1` | `animation: ${1:name} ${2:1}s ${3:ease} ${4:0}s ${5:1} ${6:normal} ${7:none} ${0:running};` |
| `-ad` | `-moz-animation-delay: ${0:1}s; -o-animation-delay: ${0:1}s; -webkit-animation-delay: ${0:1}s; animation-delay: ${0:1}s;` |
| `ad` | `animation-delay: ${0:1}s;` |
| `-ada` | `-moz-animation-direction: alternate; -o-animation-direction: alternate; -webkit-animation-direction: alternate; animation-direction: alternate;` |
| `ada` | `animation-direction: alternate;` |
| `-adar` | `-moz-animation-direction: alternate-reverse; -o-animation-direction: alternate-reverse; -webkit-animation-direction: alternate-reverse; animation-direction: alternate-reverse;` |
| `adar` | `animation-direction: alternate-reverse;` |
| `-adn` | `-moz-animation-direction: normal; -o-animation-direction: normal; -webkit-animation-direction: normal; animation-direction: normal;` |
| `adn` | `animation-direction: normal;` |
| `-adr` | `-moz-animation-direction: reverse; -o-animation-direction: reverse; -webkit-animation-direction: reverse; animation-direction: reverse;` |
| `adr` | `animation-direction: reverse;` |
| `-ad` | `-moz-animation-duration: ${0:1}s; -o-animation-duration: ${0:1}s; -webkit-animation-duration: ${0:1}s; animation-duration: ${0:1}s;` |
| `ad` | `animation-duration: ${0:1}s;` |
| `-afmb` | `-moz-animation-fill-mode: backwards; -o-animation-fill-mode: backwards; -webkit-animation-fill-mode: backwards; animation-fill-mode: backwards;` |
| `afmb` | `animation-fill-mode: backwards;` |
| `-afmb` | `-moz-animation-fill-mode: both; -o-animation-fill-mode: both; -webkit-animation-fill-mode: both; animation-fill-mode: both;` |
| `afmb` | `animation-fill-mode: both;` |
| `-afmf` | `-moz-animation-fill-mode: forwards; -o-animation-fill-mode: forwards; -webkit-animation-fill-mode: forwards; animation-fill-mode: forwards;` |
| `afmf` | `animation-fill-mode: forwards;` |
| `-afmn` | `-moz-animation-fill-mode: none; -o-animation-fill-mode: none; -webkit-animation-fill-mode: none; animation-fill-mode: none;` |
| `afmn` | `animation-fill-mode: none;` |
| `-aic` | `-moz-animation-iteration-count: ${0:1}; -o-animation-iteration-count: ${0:1}; -webkit-animation-iteration-count: ${0:1}; animation-iteration-count: ${0:1};` |
| `aic` | `animation-iteration-count: ${0:1};` |
| `-aici` | `-moz-animation-iteration-count: infinite; -o-animation-iteration-count: infinite; -webkit-animation-iteration-count: infinite; animation-iteration-count: infinite;` |
| `aici` | `animation-iteration-count: infinite;` |
| `-ani` | `-moz-animation-name: keyframename; -o-animation-name: keyframename; -webkit-animation-name: keyframename; animation-name: keyframename;` |
| `ani` | `animation-name: keyframename;` |
| `-ani` | `-moz-animation-name: none; -o-animation-name: none; -webkit-animation-name: none; animation-name: none;` |
| `ani` | `animation-name: none;` |
| `-apsi` | `-moz-animation-play-state: paused; -o-animation-play-state: paused; -webkit-animation-play-state: paused; animation-play-state: paused;` |
| `apsi` | `animation-play-state: paused;` |
| `-apsi` | `-moz-animation-play-state: running; -o-animation-play-state: running; -webkit-animation-play-state: running; animation-play-state: running;` |
| `apsi` | `animation-play-state: running;` |
| `-aticb` | `-moz-animation-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0}); -o-animation-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0}); -webkit-animation-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0}); animation-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0});` |
| `aticb` | `animation-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0});` |
| `-atie` | `-moz-animation-timing-function: ease; -o-animation-timing-function: ease; -webkit-animation-timing-function: ease; animation-timing-function: ease;` |
| `atie` | `animation-timing-function: ease;` |
| `-atiei` | `-moz-animation-timing-function: ease-in; -o-animation-timing-function: ease-in; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in;` |
| `atiei` | `animation-timing-function: ease-in;` |
| `-atieo` | `-moz-animation-timing-function: ease-out; -o-animation-timing-function: ease-out; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out;` |
| `atieo` | `animation-timing-function: ease-out;` |
| `-atil` | `-moz-animation-timing-function: linear; -o-animation-timing-function: linear; -webkit-animation-timing-function: linear; animation-timing-function: linear;` |
| `atil` | `animation-timing-function: linear;` |
| `-bvv` | `-moz-backface-visibility: visible; -webkit-backface-visibility: visible; backface-visibility: visible;` |
| `bvv` | `backface-visibility: visible;` |
| `-bvh` | `-moz-backface-visibility: hidden; -webkit-backface-visibility: hidden; backface-visibility: hidden;` |
| `bvh` | `backface-visibility: hidden;` |
| `bn` | `background: none;` |
| `b_` | `background: ${0:#000000};` |
| `bt` | `background: transparent;` |
| `bu` | `background: url('${0:url}');` |
| `bu_` | `background: url('${1:url}') ${0:#000000};` |
| `but` | `background: url('${0:url}') transparent;` |
| `bunr` | `background: url('${0:url}') no-repeat;` |
| `burx` | `background: url('${0:url}') repeat-x;` |
| `bury` | `background: url('${0:url}') repeat-y;` |
| `bunr2` | `background: url('${1:url}') no-repeat ${2:0} ${0:0};` |
| `burx2` | `background: url('${1:url}') repeat-x ${2:0} ${0:0};` |
| `bury2` | `background: url('${1:url}') repeat-y ${2:0} ${0:0};` |
| `bunr_` | `background: url('${1:url}') no-repeat ${0:#000000};` |
| `burx_` | `background: url('${1:url}') repeat-x ${0:#000000};` |
| `bury_` | `background: url('${1:url}') repeat-y ${0:#000000};` |
| `bunrt` | `background: url('${1:url}') no-repeat transparent;` |
| `burxt` | `background: url('${1:url}') repeat-x transparent;` |
| `buryt` | `background: url('${1:url}') repeat-y transparent;` |
| `bunr2_` | `background: url('${1:url}') no-repeat ${2:0} ${3:0} ${0:#000000};` |
| `burx2_` | `background: url('${1:url}') repeat-x ${2:0} ${3:0} ${0:#000000};` |
| `bury2_` | `background: url('${1:url}') repeat-y ${2:0} ${3:0} ${0:#000000};` |
| `bunr2t` | `background: url('${1:url}') no-repeat ${2:0} ${0:0} transparent;` |
| `burx2t` | `background: url('${1:url}') repeat-x ${2:0} ${0:0} transparent;` |
| `bury2t` | `background: url('${1:url}') repeat-y ${2:0} ${0:0} transparent;` |
| `baf` | `background-attachment: fixed;` |
| `bas` | `background-attachment: scroll;` |
| `bcbb` | `background-clip: border-box;` |
| `bccb` | `background-clip: content-box;` |
| `bcpb` | `background-clip: padding-box;` |
| `bct` | `background-color: transparent;` |
| `bc_` | `background-color: ${0:#000000};` |
| `bin` | `background-image: none;` |
| `biu` | `background-image: url('$0');` |
| `bobb` | `background-origin: border-box;` |
| `bopb` | `background-origin: padding-box;` |
| `bp2` | `background-position: ${1:0} ${2:0};` |
| `bpcb` | `background-position: center bottom;` |
| `bpcc` | `background-position: center center;` |
| `bpct` | `background-position: center top;` |
| `bplb` | `background-position: left bottom;` |
| `bplc` | `background-position: left center;` |
| `bplt` | `background-position: left top;` |
| `bprb` | `background-position: right bottom;` |
| `bprc` | `background-position: right center;` |
| `bprt` | `background-position: right top;` |
| `brnr` | `background-repeat: no-repeat;` |
| `brr` | `background-repeat: repeat;` |
| `brrx` | `background-repeat: repeat-x;` |
| `brry` | `background-repeat: repeat-y;` |
| `-bs2` | `-moz-background-size: ${1:0} ${0:0}; -o-background-size: ${1:0} ${0:0}; -webkit-background-size: ${1:0} ${0:0}; background-size: ${1:0} ${0:0};` |
| `bs2` | `background-size: ${1:0} ${0:0};` |
| `-bsa` | `-moz-background-size: auto; -o-background-size: auto; -webkit-background-size: auto; background-size: auto;` |
| `bsa` | `background-size: auto;` |
| `-bsc` | `-moz-background-size: contain; -o-background-size: contain; -webkit-background-size: contain; background-size: contain;` |
| `bsc` | `background-size: contain;` |
| `-bsc` | `-moz-background-size: cover; -o-background-size: cover; -webkit-background-size: cover; background-size: cover;` |
| `bsc` | `background-size: cover;` |
| `bn` | `border: none;` |
| `bd1_` | `border: dashed ${1:0} ${0:#000000};` |
| `bd1_` | `border: dotted ${1:0} ${0:#000000};` |
| `bd1_` | `border: double ${1:0} ${0:#000000};` |
| `bh1_` | `border: hidden ${1:0} ${0:#000000};` |
| `bi1_` | `border: inset ${1:0} ${0:#000000};` |
| `bg1_` | `border: groove ${1:0} ${0:#000000};` |
| `bo1_` | `border: outset ${1:0} ${0:#000000};` |
| `br1_` | `border: ridge ${1:0} ${0:#000000};` |
| `bs1_` | `border: solid ${1:0} ${0:#000000};` |
| `bcc` | `border-collapse: collapse;` |
| `bcs` | `border-collapse: separate;` |
| `bc_` | `border-color: ${0:#000000};` |
| `bbd1_` | `border-bottom: dashed ${1:0} ${0:#000000};` |
| `bbd1_` | `border-bottom: dotted ${1:0} ${0:#000000};` |
| `bbd1_` | `border-bottom: double ${1:0} ${0:#000000};` |
| `bbh1_` | `border-bottom: hidden ${1:0} ${0:#000000};` |
| `bbi1_` | `border-bottom: inset ${1:0} ${0:#000000};` |
| `bbg1_` | `border-bottom: groove ${1:0} ${0:#000000};` |
| `bbo1_` | `border-bottom: outset ${1:0} ${0:#000000};` |
| `bbr1_` | `border-bottom: ridge ${1:0} ${0:#000000};` |
| `bbs1_` | `border-bottom: solid ${1:0} ${0:#000000};` |
| `bbc_` | `border-bottom-color: ${0:#000000};` |
| `-bblr1` | `-moz-border-bottom-left-radius: ${0:0}; -webkit-border-bottom-left-radius: ${0:0}; border-bottom-left-radius: ${0:0};` |
| `bblr1` | `border-bottom-left-radius: ${0:0};` |
| `-bblr2` | `-moz-border-bottom-left-radius: ${1:0} ${0:0}; -webkit-border-bottom-left-radius: ${1:0} ${0:0}; border-bottom-left-radius: ${1:0} ${0:0};` |
| `bblr2` | `border-bottom-left-radius: ${1:0} ${0:0};` |
| `-bbrr1` | `-moz-border-bottom-right-radius: ${0:0}; -webkit-border-bottom-right-radius: ${0:0}; border-bottom-right-radius: ${0:0};` |
| `bbrr1` | `border-bottom-right-radius: ${0:0};` |
| `-bbrr2` | `-moz-border-bottom-right-radius: ${1:0} ${0:0}; -webkit-border-bottom-right-radius: ${1:0} ${0:0}; border-bottom-right-radius: ${1:0} ${0:0};` |
| `bbrr2` | `border-bottom-right-radius: ${1:0} ${0:0};` |
| `bbsd` | `border-bottom-style: dashed;` |
| `bbsd` | `border-bottom-style: dotted;` |
| `bbsd` | `border-bottom-style: double;` |
| `bbsh` | `border-bottom-style: hidden;` |
| `bbsi` | `border-bottom-style: inset;` |
| `bbsg` | `border-bottom-style: groove;` |
| `bbsn` | `border-bottom-style: none;` |
| `bbso` | `border-bottom-style: outset;` |
| `bbsr` | `border-bottom-style: ridge;` |
| `bbss` | `border-bottom-style: solid;` |
| `bbw1` | `border-bottom-width: ${0:0};` |
| `bbwm` | `border-bottom-width: medium;` |
| `bbwt` | `border-bottom-width: thin;` |
| `bbwt` | `border-bottom-width: thick;` |
| `biu` | `border-image: url('${0:url}');` |
| `biu1` | `border-image: url('${1:url}') ${0:100%};` |
| `biu2` | `border-image: url('${1:url}') ${2:100%} ${0:100%};` |
| `biu3` | `border-image: url('${1:url}') ${2:100%} ${3:100%} ${0:100%};` |
| `biu3r` | `border-image: url('${1:url}') ${2:100%} ${3:100%} ${0:100%} repeat;` |
| `biu3r` | `border-image: url('${1:url}') ${2:100%} ${3:100%} ${0:100%} round;` |
| `biu3s` | `border-image: url('${1:url}') ${2:100%} ${3:100%} ${0:100%} space;` |
| `biu3s` | `border-image: url('${1:url}') ${2:100%} ${3:100%} ${0:100%} stretch;` |
| `bio1` | `border-image-outset: ${0:0};` |
| `bio2` | `border-image-outset: ${1:0} ${0:0};` |
| `bio3` | `border-image-outset: ${1:0} ${2:0} ${0:0};` |
| `bio4` | `border-image-outset: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `birr` | `border-image-repeat: repeat;` |
| `birr` | `border-image-repeat: round;` |
| `birs` | `border-image-repeat: stretch;` |
| `bis1` | `border-image-slice: ${0:0};` |
| `bis2` | `border-image-slice: ${1:0} ${0:0};` |
| `bis1f` | `border-image-slice: ${0:0} fill;` |
| `bis2f` | `border-image-slice: ${1:0} ${0:0} fill;` |
| `bisn` | `border-image-source: none;` |
| `bisu` | `border-image-source: url('$0');` |
| `biw1` | `border-image-width: ${0:0};` |
| `biw2` | `border-image-width: ${1:0} ${0:0};` |
| `biw3` | `border-image-width: ${1:0} ${2:0} ${0:0};` |
| `biw4` | `border-image-width: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `biwa` | `border-image-width: auto;` |
| `bld1_` | `border-left: dashed ${1:0} ${0:#000000};` |
| `bld1_` | `border-left: dotted ${1:0} ${0:#000000};` |
| `bld1_` | `border-left: double ${1:0} ${0:#000000};` |
| `blh1_` | `border-left: hidden ${1:0} ${0:#000000};` |
| `bli1_` | `border-left: inset ${1:0} ${0:#000000};` |
| `blg1_` | `border-left: groove ${1:0} ${0:#000000};` |
| `blo1_` | `border-left: outset ${1:0} ${0:#000000};` |
| `blr1_` | `border-left: ridge ${1:0} ${0:#000000};` |
| `bls1_` | `border-left: solid ${1:0} ${0:#000000};` |
| `blc_` | `border-left-color: ${0:#000000};` |
| `blsd` | `border-left-style: dashed;` |
| `blsd` | `border-left-style: dotted;` |
| `blsd` | `border-left-style: double;` |
| `blsh` | `border-left-style: hidden;` |
| `blsi` | `border-left-style: inset;` |
| `blsg` | `border-left-style: groove;` |
| `blsn` | `border-left-style: none;` |
| `blso` | `border-left-style: outset;` |
| `blsr` | `border-left-style: ridge;` |
| `blss` | `border-left-style: solid;` |
| `blw1` | `border-left-width: ${0:0};` |
| `blwm` | `border-left-width: medium;` |
| `blwt` | `border-left-width: thin;` |
| `blwt` | `border-left-width: thick;` |
| `-br1` | `-moz-border-radius: ${0:0}; -webkit-border-radius: ${0:0}; border-radius: ${0:0};` |
| `br1` | `border-radius: ${0:0};` |
| `-br2` | `-moz-border-radius: ${1:0} ${0:0}; -webkit-border-radius: ${1:0} ${0:0}; border-radius: ${1:0} ${0:0};` |
| `br2` | `border-radius: ${1:0} ${0:0};` |
| `-br3` | `-moz-border-radius: ${1:0} ${2:0} ${0:0}; -webkit-border-radius: ${1:0} ${2:0} ${0:0}; border-radius: ${1:0} ${2:0} ${0:0};` |
| `br3` | `border-radius: ${1:0} ${2:0} ${0:0};` |
| `-br4` | `-moz-border-radius: ${1:0} ${2:0} ${3:0} ${0:0}; -webkit-border-radius: ${1:0} ${2:0} ${3:0} ${0:0}; border-radius: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `br4` | `border-radius: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `brd1_` | `border-right: dashed ${1:0} ${0:#000000};` |
| `brd1_` | `border-right: dotted ${1:0} ${0:#000000};` |
| `brd1_` | `border-right: double ${1:0} ${0:#000000};` |
| `brh1_` | `border-right: hidden ${1:0} ${0:#000000};` |
| `bri1_` | `border-right: inset ${1:0} ${0:#000000};` |
| `brg1_` | `border-right: groove ${1:0} ${0:#000000};` |
| `bro1_` | `border-right: outset ${1:0} ${0:#000000};` |
| `brr1_` | `border-right: ridge ${1:0} ${0:#000000};` |
| `brs1_` | `border-right: solid ${1:0} ${0:#000000};` |
| `brc_` | `border-right-color: ${0:#000000};` |
| `brsd` | `border-right-style: dashed;` |
| `brsd` | `border-right-style: dotted;` |
| `brsd` | `border-right-style: double;` |
| `brsh` | `border-right-style: hidden;` |
| `brsi` | `border-right-style: inset;` |
| `brsg` | `border-right-style: groove;` |
| `brsn` | `border-right-style: none;` |
| `brso` | `border-right-style: outset;` |
| `brsr` | `border-right-style: ridge;` |
| `brss` | `border-right-style: solid;` |
| `brw1` | `border-right-width: ${1:0};` |
| `brwm` | `border-right-width: medium;` |
| `brwt` | `border-right-width: thin;` |
| `brwt` | `border-right-width: thick;` |
| `bs1` | `border-spacing: ${0:0};` |
| `bsd` | `border-style: dashed;` |
| `bsd` | `border-style: dotted;` |
| `bsd` | `border-style: double;` |
| `bsg` | `border-style: groove;` |
| `bsh` | `border-style: hidden;` |
| `bsi` | `border-style: inset;` |
| `bsn` | `border-style: none;` |
| `bso` | `border-style: outset;` |
| `bsr` | `border-style: ridge;` |
| `bss` | `border-style: solid;` |
| `btd1_` | `border-top: dashed ${1:0} ${0:#000000};` |
| `btd1_` | `border-top: dotted ${1:0} ${0:#000000};` |
| `btd1_` | `border-top: double ${1:0} ${0:#000000};` |
| `bth1_` | `border-top: hidden ${1:0} ${0:#000000};` |
| `bti1_` | `border-top: inset ${1:0} ${0:#000000};` |
| `btg1_` | `border-top: groove ${1:0} ${0:#000000};` |
| `bto1_` | `border-top: outset ${1:0} ${0:#000000};` |
| `btr1_` | `border-top: ridge ${1:0} ${0:#000000};` |
| `bts1_` | `border-top: solid ${1:0} ${0:#000000};` |
| `btc_` | `border-top-color: ${0:#000000};` |
| `-btlr1` | `-moz-border-top-left-radius: ${0:0}; -webkit-border-top-left-radius: ${0:0}; border-top-left-radius: ${0:0};` |
| `btlr1` | `border-top-left-radius: ${0:0};` |
| `-btlr2` | `-moz-border-top-left-radius: ${1:0} ${0:0}; -webkit-border-top-left-radius: ${1:0} ${0:0}; border-top-left-radius: ${1:0} ${0:0};` |
| `btlr2` | `border-top-left-radius: ${1:0} ${0:0};` |
| `-btrr1` | `-moz-border-top-right-radius: ${0:0}; -webkit-border-top-right-radius: ${0:0}; border-top-right-radius: ${0:0};` |
| `btrr1` | `border-top-right-radius: ${0:0};` |
| `-btrr2` | `-moz-border-top-right-radius: ${1:0} ${0:0}; -webkit-border-top-right-radius: ${1:0} ${0:0}; border-top-right-radius: ${1:0} ${0:0};` |
| `btrr2` | `border-top-right-radius: ${1:0} ${0:0};` |
| `btsd` | `border-top-style: dashed;` |
| `btsd` | `border-top-style: dotted;` |
| `btsd` | `border-top-style: double;` |
| `btsh` | `border-top-style: hidden;` |
| `btsi` | `border-top-style: inset;` |
| `btsg` | `border-top-style: groove;` |
| `btsn` | `border-top-style: none;` |
| `btso` | `border-top-style: outset;` |
| `btsr` | `border-top-style: ridge;` |
| `btss` | `border-top-style: solid;` |
| `btw1` | `border-top-width: ${0:0};` |
| `btwm` | `border-top-width: medium;` |
| `btwt` | `border-top-width: thin;` |
| `btwt` | `border-top-width: thick;` |
| `bw1` | `border-width: ${0:0};` |
| `bwm` | `border-width: medium;` |
| `bwt` | `border-width: thick;` |
| `bwt` | `border-width: thin;` |
| `b1` | `bottom: ${0:0};` |
| `ba` | `bottom: auto;` |
| `-bsn` | `-moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none;` |
| `bsn` | `box-shadow: none;` |
| `-bs2_` | `-moz-box-shadow: ${1:0} ${2:0} ${0:#000000}; -webkit-box-shadow: ${1:0} ${2:0} ${0:#000000}; box-shadow: ${1:0} ${2:0} ${0:#000000};` |
| `bs2_` | `box-shadow: ${1:0} ${2:0} ${0:#000000};` |
| `-bs3_` | `-moz-box-shadow: ${1:0} ${2:0} ${3:0} ${0:#000000}; -webkit-box-shadow: ${1:0} ${2:0} ${3:0} ${0:#000000}; box-shadow: ${1:0} ${2:0} ${3:0} ${0:#000000};` |
| `bs3_` | `box-shadow: ${1:0} ${2:0} ${3:0} ${0:#000000};` |
| `-bs4_` | `-moz-box-shadow: ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000}; -webkit-box-shadow: ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000}; box-shadow: ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000};` |
| `bs4_` | `box-shadow: ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000};` |
| `-bsi2_` | `-moz-box-shadow: inset ${1:0} ${2:0} ${0:#000000}; -webkit-box-shadow: inset ${1:0} ${2:0} ${0:#000000}; box-shadow: inset ${1:0} ${2:0} ${0:#000000};` |
| `bsi2_` | `box-shadow: inset ${1:0} ${2:0} ${0:#000000};` |
| `-bsi3_` | `-moz-box-shadow: inset ${1:0} ${2:0} ${3:0} ${0:#000000}; -webkit-box-shadow: inset ${1:0} ${2:0} ${3:0} ${0:#000000}; box-shadow: inset ${1:0} ${2:0} ${3:0} ${0:#000000};` |
| `bsi3_` | `box-shadow: inset ${1:0} ${2:0} ${3:0} ${0:#000000};` |
| `-bsi4_` | `-moz-box-shadow: inset ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000}; -webkit-box-shadow: inset ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000}; box-shadow: inset ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000};` |
| `bsi4_` | `box-shadow: inset ${1:0} ${2:0} ${3:0} ${4:0} ${0:#000000};` |
| `-bsbb` | `-moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;` |
| `bsbb` | `box-sizing: border-box;` |
| `-bscb` | `-moz-box-sizing: content-box; -webkit-box-sizing: content-box; box-sizing: content-box;` |
| `bscb` | `box-sizing: content-box;` |
| `csb` | `caption-side: bottom;` |
| `cst` | `caption-side: top;` |
| `cb` | `clear: both;` |
| `cl` | `clear: left;` |
| `cn` | `clear: none;` |
| `cr` | `clear: right;` |
| `ca` | `clip: auto;` |
| `cr4` | `clip: rect(${1:0}, ${2:0}, ${3:0}, ${0:0});` |
| `c_` | `color: ${0:#000000};` |
| `c` | `content: '$0';` |
| `ca` | `content: attr($0);` |
| `ccq` | `content: close-quote;` |
| `cc` | `content: counter;` |
| `cncq` | `content: no-close-quote;` |
| `cnoq` | `content: no-open-quote;` |
| `cn` | `content: none;` |
| `cn` | `content: normal;` |
| `coq` | `content: open-quote;` |
| `cu` | `content: url($0);` |
| `-cc1` | `-moz-column-count: ${0:0}; -webkit-column-count: ${0:0}; column-count: ${0:0};` |
| `cc1` | `column-count: ${0:0};` |
| `-cca` | `-moz-column-count: auto; -webkit-column-count: auto; column-count: auto;` |
| `cca` | `column-count: auto;` |
| `-cfa` | `-moz-column-fill: auto; column-fill: auto;` |
| `cfa` | `column-fill: auto;` |
| `-cfb` | `-moz-column-fill: balance; column-fill: balance;` |
| `cfb` | `column-fill: balance;` |
| `-cg1` | `-moz-column-gap: ${0:0}; -webkit-column-gap: ${0:0}; column-gap: ${0:0};` |
| `cg1` | `column-gap: ${0:0};` |
| `-cgn` | `-moz-column-gap: normal; -webkit-column-gap: normal; column-gap: normal;` |
| `cgn` | `column-gap: normal;` |
| `-crd1_` | `-moz-column-rule: ${1:dashed} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:dashed} ${2:0} ${0:#000000}; column-rule: ${1:dashed} ${2:0} ${0:#000000};` |
| `crd1_` | `column-rule: ${1:dashed} ${2:0} ${0:#000000};` |
| `-crd1_` | `-moz-column-rule: ${1:dotted} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:dotted} ${2:0} ${0:#000000}; column-rule: ${1:dotted} ${2:0} ${0:#000000};` |
| `crd1_` | `column-rule: ${1:dotted} ${2:0} ${0:#000000};` |
| `-crd1_` | `-moz-column-rule: ${1:double} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:double} ${2:0} ${0:#000000}; column-rule: ${1:double} ${2:0} ${0:#000000};` |
| `crd1_` | `column-rule: ${1:double} ${2:0} ${0:#000000};` |
| `-crg1_` | `-moz-column-rule: ${1:groove} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:groove} ${2:0} ${0:#000000}; column-rule: ${1:groove} ${2:0} ${0:#000000};` |
| `crg1_` | `column-rule: ${1:groove} ${2:0} ${0:#000000};` |
| `-crh1_` | `-moz-column-rule: ${1:hidden} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:hidden} ${2:0} ${0:#000000}; column-rule: ${1:hidden} ${2:0} ${0:#000000};` |
| `crh1_` | `column-rule: ${1:hidden} ${2:0} ${0:#000000};` |
| `-cri1_` | `-moz-column-rule: ${1:inset} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:inset} ${2:0} ${0:#000000}; column-rule: ${1:inset} ${2:0} ${0:#000000};` |
| `cri1_` | `column-rule: ${1:inset} ${2:0} ${0:#000000};` |
| `-crn1_` | `-moz-column-rule: ${1:none} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:none} ${2:0} ${0:#000000}; column-rule: ${1:none} ${2:0} ${0:#000000};` |
| `crn1_` | `column-rule: ${1:none} ${2:0} ${0:#000000};` |
| `-crr1_` | `-moz-column-rule: ${1:ridge} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:ridge} ${2:0} ${0:#000000}; column-rule: ${1:ridge} ${2:0} ${0:#000000};` |
| `crr1_` | `column-rule: ${1:ridge} ${2:0} ${0:#000000};` |
| `-crs1_` | `-moz-column-rule: ${1:solid} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:solid} ${2:0} ${0:#000000}; column-rule: ${1:solid} ${2:0} ${0:#000000};` |
| `crs1_` | `column-rule: ${1:solid} ${2:0} ${0:#000000};` |
| `-cro1_` | `-moz-column-rule: ${1:outset} ${2:0} ${0:#000000}; -webkit-column-rule: ${1:outset} ${2:0} ${0:#000000}; column-rule: ${1:outset} ${2:0} ${0:#000000};` |
| `cro1_` | `column-rule: ${1:outset} ${2:0} ${0:#000000};` |
| `-crc_` | `-moz-column-rule-color: ${0:#000000}; -webkit-column-rule-color: ${0:#000000}; column-rule-color: ${0:#000000};` |
| `crc_` | `column-rule-color: ${0:#000000};` |
| `-crsd` | `-moz-column-rule-style: dashed; -webkit-column-rule-style: dashed; column-rule-style: dashed;` |
| `crsd` | `column-rule-style: dashed;` |
| `-crsd` | `-moz-column-rule-style: dotted; -webkit-column-rule-style: dotted; column-rule-style: dotted;` |
| `crsd` | `column-rule-style: dotted;` |
| `-crsd` | `-moz-column-rule-style: double; -webkit-column-rule-style: double; column-rule-style: double;` |
| `crsd` | `column-rule-style: double;` |
| `-crsg` | `-moz-column-rule-style: groove; -webkit-column-rule-style: groove; column-rule-style: groove;` |
| `crsg` | `column-rule-style: groove;` |
| `-crsh` | `-moz-column-rule-style: hidden; -webkit-column-rule-style: hidden; column-rule-style: hidden;` |
| `crsh` | `column-rule-style: hidden;` |
| `-crsi` | `-moz-column-rule-style: inset; -webkit-column-rule-style: inset; column-rule-style: inset;` |
| `crsi` | `column-rule-style: inset;` |
| `-crsn` | `-moz-column-rule-style: none; -webkit-column-rule-style: none; column-rule-style: none;` |
| `crsn` | `column-rule-style: none;` |
| `-crsr` | `-moz-column-rule-style: ridge; -webkit-column-rule-style: ridge; column-rule-style: ridge;` |
| `crsr` | `column-rule-style: ridge;` |
| `-crss` | `-moz-column-rule-style: solid; -webkit-column-rule-style: solid; column-rule-style: solid;` |
| `crss` | `column-rule-style: solid;` |
| `-crso` | `-moz-column-rule-style: outset; -webkit-column-rule-style: outset; column-rule-style: outset;` |
| `crso` | `column-rule-style: outset;` |
| `-crw1` | `-moz-column-rule-width: ${0:0}; -webkit-column-rule-width: ${0:0}; column-rule-width: ${0:0};` |
| `crw1` | `column-rule-width: ${0:0};` |
| `-crwm` | `-moz-column-rule-width: medium; -webkit-column-rule-width: medium; column-rule-width: medium;` |
| `crwm` | `column-rule-width: medium;` |
| `-crwt` | `-moz-column-rule-width: thick; -webkit-column-rule-width: thick; column-rule-width: thick;` |
| `crwt` | `column-rule-width: thick;` |
| `-crwt` | `-moz-column-rule-width: thin; -webkit-column-rule-width: thin; column-rule-width: thin;` |
| `crwt` | `column-rule-width: thin;` |
| `-cs1` | `-webkit-column-span: ${0:1}; column-span: ${0:1};` |
| `cs1` | `column-span: ${0:1};` |
| `-csa` | `-webkit-column-span: all; column-span: all;` |
| `csa` | `column-span: all;` |
| `-cw1` | `-moz-column-width: ${0:0}; -webkit-column-width: ${0:0}; column-width: ${0:0};` |
| `cw1` | `column-width: ${0:0};` |
| `-cwa` | `-moz-column-width: auto; -webkit-column-width: auto; column-width: auto;` |
| `cwa` | `column-width: auto;` |
| `-c2` | `-moz-columns: ${1:10px} ${0:1}; -webkit-columns: ${1:10px} ${0:1}; columns: ${1:10px} ${0:1};` |
| `c2` | `columns: ${1:10px} ${0:1};` |
| `-ca` | `-moz-columns: auto; -webkit-columns: auto; columns: auto;` |
| `ca` | `columns: auto;` |
| `cci` | `content: counter(${0:i});` |
| `cii` | `counter-increment: ${0:i};` |
| `cri` | `counter-reset(${0:i});` |
| `ca` | `cursor: alias;` |
| `cas` | `cursor: all-scroll;` |
| `ca` | `cursor: auto;` |
| `cc` | `cursor: cell;` |
| `ccm` | `cursor: context-menu;` |
| `ccr` | `cursor: col-resize;` |
| `cc` | `cursor: copy;` |
| `cc` | `cursor: crosshair;` |
| `cd` | `cursor: default;` |
| `cer` | `cursor: e-resize;` |
| `cer` | `cursor: ew-resize;` |
| `cg` | `cursor: grab;` |
| `cg` | `cursor: grabbing;` |
| `ch` | `cursor: help;` |
| `cm` | `cursor: move;` |
| `cnr` | `cursor: n-resize;` |
| `cner` | `cursor: ne-resize;` |
| `cnr` | `cursor: nesw-resize;` |
| `cnr` | `cursor: ns-resize;` |
| `cnwr` | `cursor: nw-resize;` |
| `cnr` | `cursor: nwse-resize;` |
| `cnd` | `cursor: no-drop;` |
| `cn` | `cursor: none;` |
| `cna` | `cursor: not-allowed;` |
| `cp` | `cursor: pointer;` |
| `cp` | `cursor: progress;` |
| `crr` | `cursor: row-resize;` |
| `csr` | `cursor: s-resize;` |
| `cser` | `cursor: se-resize;` |
| `cswr` | `cursor: sw-resize;` |
| `ct` | `cursor: text;` |
| `cu` | `cursor: url($0);` |
| `cwr` | `cursor: w-resize;` |
| `cw` | `cursor: wait;` |
| `czi` | `cursor: zoom-in;` |
| `czo` | `cursor: zoom-out;` |
| `ecs` | `empty-cells: show;` |
| `ech` | `empty-cells: hide;` |
| `dl` | `direction: ltr;` |
| `dr` | `direction: rtl;` |
| `db` | `display: block;` |
| `-df` | `display: -webkit-flex; display: flex;` |
| `df` | `display: flex;` |
| `di` | `display: inline;` |
| `dib` | `display: inline-block;` |
| `-dif` | `display: -webkit-inline-flex; display: inline-flex;` |
| `dif` | `display: inline-flex;` |
| `dit` | `display: inline-table;` |
| `dli` | `display: list-item;` |
| `dn` | `display: none;` |
| `dri` | `display: run-in;` |
| `dt` | `display: table;` |
| `dtc` | `display: table-caption;` |
| `dtc` | `display: table-cell;` |
| `dtc` | `display: table-column;` |
| `dtcg` | `display: table-columns-group;` |
| `dtfg` | `display: table-footer-group;` |
| `dthg` | `display: table-header-group;` |
| `dtr` | `display: table-row;` |
| `dtrg` | `display: table-row-group;` |
| `-f2a` | `-moz-flex-basis: ${1:0} ${2:1} ${0:auto}; -ms-flex-basis: ${1:0} ${2:1} ${0:auto}; -webkit-flex-basis: ${1:0} ${2:1} ${0:auto}; flex-basis: ${1:0} ${2:1} ${0:auto};` |
| `f2a` | `flex-basis: ${1:0} ${2:1} ${0:auto};` |
| `-fa` | `-moz-flex: auto; -ms-flex: auto; -webkit-flex: auto; flex: auto;` |
| `fa` | `flex: auto;` |
| `-fb1` | `-moz-flex-basis: ${0:0}; -webkit-flex-basis: ${0:0}; flex-basis: ${0:0};` |
| `fb1` | `flex-basis: ${0:0};` |
| `-fba` | `-moz-flex-basis: auto; -webkit-flex-basis: auto; flex-basis: auto;` |
| `fba` | `flex-basis: auto;` |
| `-fdc` | `-moz-flex-direction: column; -webkit-flex-direction: column; flex-direction: column;` |
| `fdc` | `flex-direction: column;` |
| `-fdcr` | `-moz-flex-direction: column-reverse; -webkit-flex-direction: column-reverse; flex-direction: column-reverse;` |
| `fdcr` | `flex-direction: column-reverse;` |
| `-fdr` | `-moz-flex-direction: row; -webkit-flex-direction: row; flex-direction: row;` |
| `fdr` | `flex-direction: row;` |
| `-fdrr` | `-moz-flex-direction: row-reverse; -webkit-flex-direction: row-reverse; flex-direction: row-reverse;` |
| `fdrr` | `flex-direction: row-reverse;` |
| `-ffrn` | `-moz-flex-flow: row nowrap; -webkit-flex-flow: row nowrap; flex-flow: row nowrap;` |
| `ffrn` | `flex-flow: row nowrap;` |
| `-ffrw` | `-moz-flex-flow: row wrap; -webkit-flex-flow: row wrap; flex-flow: row wrap;` |
| `ffrw` | `flex-flow: row wrap;` |
| `-ffrwr` | `-moz-flex-flow: row wrap-reverse; -webkit-flex-flow: row wrap-reverse; flex-flow: row wrap-reverse;` |
| `ffrwr` | `flex-flow: row wrap-reverse;` |
| `-ffrrn` | `-moz-flex-flow: row-reverse nowrap; -webkit-flex-flow: row-reverse nowrap; flex-flow: row-reverse nowrap;` |
| `ffrrn` | `flex-flow: row-reverse nowrap;` |
| `-ffrrw` | `-moz-flex-flow: row-reverse wrap; -webkit-flex-flow: row-reverse wrap; flex-flow: row-reverse wrap;` |
| `ffrrw` | `flex-flow: row-reverse wrap;` |
| `-ffrrwr` | `-moz-flex-flow: row-reverse wrap-reverse; -webkit-flex-flow: row-reverse wrap-reverse; flex-flow: row-reverse wrap-reverse;` |
| `ffrrwr` | `flex-flow: row-reverse wrap-reverse;` |
| `-ffcn` | `-moz-flex-flow: column nowrap; -webkit-flex-flow: column nowrap; flex-flow: column nowrap;` |
| `ffcn` | `flex-flow: column nowrap;` |
| `-ffcw` | `-moz-flex-flow: column wrap; -webkit-flex-flow: column wrap; flex-flow: column wrap;` |
| `ffcw` | `flex-flow: column wrap;` |
| `-ffcwr` | `-moz-flex-flow: column wrap-reverse; -webkit-flex-flow: column wrap-reverse; flex-flow: column wrap-reverse;` |
| `ffcwr` | `flex-flow: column wrap-reverse;` |
| `-ffcrn` | `-moz-flex-flow: column-reverse nowrap; -webkit-flex-flow: column-reverse nowrap; flex-flow: column-reverse nowrap;` |
| `ffcrn` | `flex-flow: column-reverse nowrap;` |
| `-ffcrw` | `-moz-flex-flow: column-reverse wrap; -webkit-flex-flow: column-reverse wrap; flex-flow: column-reverse wrap;` |
| `ffcrw` | `flex-flow: column-reverse wrap;` |
| `-ffcrwr` | `-moz-flex-flow: column-reverse wrap-reverse; -webkit-flex-flow: column-reverse wrap-reverse; flex-flow: column-reverse wrap-reverse;` |
| `ffcrwr` | `flex-flow: column-reverse wrap-reverse;` |
| `-fg1` | `-moz-flex-grow: ${0:0}; -webkit-flex-grow: ${0:0}; flex-grow: ${0:0};` |
| `fg1` | `flex-grow: ${0:0};` |
| `-fs1` | `-moz-flex-shrink: ${0:1}; -webkit-flex-shrink: ${0:1}; flex-shrink: ${0:1};` |
| `fs1` | `flex-shrink: ${0:1};` |
| `-fwn` | `-moz-flex-wrap: nowrap; -webkit-flex-wrap: nowrap; flex-wrap: nowrap;` |
| `fwn` | `flex-wrap: nowrap;` |
| `-fww` | `-moz-flex-wrap: wrap; -webkit-flex-wrap: wrap; flex-wrap: wrap;` |
| `fww` | `flex-wrap: wrap;` |
| `-fwwr` | `-moz-flex-wrap: wrap-reverse; -webkit-flex-wrap: wrap-reverse; flex-wrap: wrap-reverse;` |
| `fwwr` | `flex-wrap: wrap-reverse;` |
| `fl` | `float: left;` |
| `fn` | `float: none;` |
| `fr` | `float: right;` |
| `f2A` | `font: ${1:1em}/${0:1.3} Arial, sans-serif;` |
| `fi2A` | `font: italic ${1:1em}/${0:1.3} Arial, sans-serif;` |
| `fb2A` | `font: bold ${1:1em}/${0:1.3} Arial, sans-serif;` |
| `fib2A` | `font: italic bold ${1:1em}/${0:1.3} Arial, sans-serif;` |
| `f2A` | `font: ${1:1em}/${0:1.3} Georgia, serif;` |
| `fi2A` | `font: italic ${1:1em}/${0:1.3} Georgia, serif;` |
| `fb2A` | `font: bold ${1:1em}/${0:1.3} Georgia, serif;` |
| `fib2A` | `font: italic bold ${1:1em}/${0:1.3} Georgia, serif;` |
| `f2CN` | `font: ${1:1em}/${0:1.3} Courier New, monospace;` |
| `fi2CN` | `font: italic ${1:1em}/${0:1.3} Courier New, monospace;` |
| `fb2CN` | `font: bold ${1:1em}/${0:1.3} Courier New, monospace;` |
| `fib2CN` | `font: italic bold ${1:1em}/${0:1.3} Courier New, monospace;` |
| `f2T` | `font: ${1:1em}/${0:1.3} Tahoma, sans-serif;` |
| `fi2T` | `font: italic ${1:1em}/${0:1.3} Tahoma, sans-serif;` |
| `fb2T` | `font: bold ${1:1em}/${0:1.3} Tahoma, sans-serif;` |
| `fib2T` | `font: italic bold ${1:1em}/${0:1.3} Tahoma, sans-serif;` |
| `f2V` | `font: ${1:1em}/${0:1.3} Verdana, sans-serif;` |
| `fi2V` | `font: italic ${1:1em}/${0:1.3} Verdana, sans-serif;` |
| `fb2V` | `font: bold ${1:1em}/${0:1.3} Verdana, sans-serif;` |
| `fib2V` | `font: italic bold ${1:1em}/${0:1.3} Verdana, sans-serif;` |
| `ffA` | `font-family: Arial, sans-serif;` |
| `ffCN` | `font-family: Courier New, monospace;` |
| `ffG` | `font-family: Georgia, serif;` |
| `ffT` | `font-family: Tahoma, sans-serif;` |
| `ffV` | `font-family: Verdana, sans-serif;` |
| `fs1` | `font-size: ${0:0};` |
| `fsl` | `font-size: large;` |
| `fsl` | `font-size: larger;` |
| `fsm` | `font-size: medium;` |
| `fss` | `font-size: small;` |
| `fsxl` | `font-size: x-large;` |
| `fsxs` | `font-size: x-small;` |
| `fsxl` | `font-size: xx-large;` |
| `fsxs` | `font-size: xx-small;` |
| `fsi` | `font-style: italic;` |
| `fso` | `font-style: oblique;` |
| `fsn` | `font-style: normal;` |
| `fvn` | `font-variant: normal;` |
| `fvsc` | `font-variant: small-caps;` |
| `fw1` | `font-weight: ${0:0};` |
| `fw100` | `font-weight: 100;` |
| `fw200` | `font-weight: 200;` |
| `fw300` | `font-weight: 300;` |
| `fw400` | `font-weight: 400;` |
| `fw500` | `font-weight: 500;` |
| `fw600` | `font-weight: 600;` |
| `fw700` | `font-weight: 700;` |
| `fw800` | `font-weight: 800;` |
| `fw900` | `font-weight: 900;` |
| `fwb` | `font-weight: bold;` |
| `fwb` | `font-weight: bolder;` |
| `fwl` | `font-weight: lighter;` |
| `fwn` | `font-weight: normal;` |
| `h1` | `height: ${0:0};` |
| `ha` | `height: auto;` |
| `i` | `inherit` |
| `i` | `initial` |
| `-jcc` | `-moz-justify-content: center; -webkit-justify-content: center; justify-content: center;` |
| `jcc` | `justify-content: center;` |
| `-jcfe` | `-moz-justify-content: flex-end; -webkit-justify-content: flex-end; justify-content: flex-end;` |
| `jcfe` | `justify-content: flex-end;` |
| `-jcfs` | `-moz-justify-content: flex-start; -webkit-justify-content: flex-start; justify-content: flex-start;` |
| `jcfs` | `justify-content: flex-start;` |
| `-jcsa` | `-moz-justify-content: space-around; -webkit-justify-content: space-around; justify-content: space-around;` |
| `jcsa` | `justify-content: space-around;` |
| `-jcsb` | `-moz-justify-content: space-between; -webkit-justify-content: space-between; justify-content: space-between;` |
| `jcsb` | `justify-content: space-between;` |
| `l1` | `left: ${0:0};` |
| `la` | `left: auto;` |
| `ls1` | `letter-spacing: ${0:0};` |
| `lsn` | `letter-spacing: normal;` |
| `lh1` | `line-height: ${0:0};` |
| `lhn` | `line-height: normal;` |
| `lsn` | `list-style: none;` |
| `lsin` | `list-style-image: none;` |
| `lsiu` | `list-style-image: url($1);` |
| `lspi` | `list-style-position: inside;` |
| `lspo` | `list-style-position: outside;` |
| `lsta` | `list-style-type: armenian;` |
| `lstc` | `list-style-type: circle;` |
| `lstd` | `list-style-type: disc;` |
| `lstd` | `list-style-type: decimal;` |
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
| `m2` | `margin: ${1:0} ${0:0};` |
| `m3` | `margin: ${1:0} ${2:0} ${0:0};` |
| `m4` | `margin: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `m1a` | `margin: ${0:0} auto;` |
| `ma` | `margin: auto;` |
| `mt1` | `margin-top: ${0:0};` |
| `mta` | `margin-top: auto;` |
| `mr1` | `margin-right: ${0:0};` |
| `mra` | `margin-right: auto;` |
| `ml1` | `margin-left: ${0:0};` |
| `mla` | `margin-left: auto;` |
| `mb1` | `margin-bottom: ${0:0};` |
| `mba` | `margin-bottom: auto;` |
| `mh1` | `max-height: ${0:0};` |
| `mhn` | `max-height: none;` |
| `mw1` | `max-width: ${0:0};` |
| `mwn` | `max-width: none;` |
| `mh1` | `min-height: ${0:0};` |
| `mw1` | `min-width: ${0:0};` |
| `o1` | `opacity: ${0:0};` |
| `-o1` | `-moz-order: ${0:1}; -webkit-order: ${0:1}; order: ${0:1};` |
| `o1` | `order: ${0:1};` |
| `on` | `outline: none;` |
| `od1_` | `outline: dashed ${1:0} ${0:#000000};` |
| `od1_` | `outline: dotted ${1:0} ${0:#000000};` |
| `od1_` | `outline: double ${1:0} ${0:#000000};` |
| `oi1_` | `outline: inset ${1:0} ${0:#000000};` |
| `og1_` | `outline: groove ${1:0} ${0:#000000};` |
| `oo1_` | `outline: outset ${1:0} ${0:#000000};` |
| `or1_` | `outline: ridge ${1:0} ${0:#000000};` |
| `os1_` | `outline: solid ${1:0} ${0:#000000};` |
| `oc_` | `outline: ${0:#000000};` |
| `oo1` | `outline-offset: ${0:0};` |
| `osd` | `outline-style: dashed;` |
| `osd` | `outline-style: dotted;` |
| `osd` | `outline-style: double;` |
| `osg` | `outline-style: groove;` |
| `osi` | `outline-style: inset;` |
| `osn` | `outline-style: none;` |
| `oso` | `outline-style: outset;` |
| `osr` | `outline-style: ridge;` |
| `oss` | `outline-style: solid;` |
| `ow1` | `outline-width: ${0:0};` |
| `oa` | `overflow: auto;` |
| `oh` | `overflow: hidden;` |
| `ov` | `overflow: visible;` |
| `os` | `overflow: scroll;` |
| `oxa` | `overflow-x: auto;` |
| `oxh` | `overflow-x: hidden;` |
| `oxv` | `overflow-x: visible;` |
| `oxs` | `overflow-x: scroll;` |
| `oya` | `overflow-y: auto;` |
| `oyh` | `overflow-y: hidden;` |
| `oyv` | `overflow-y: visible;` |
| `oys` | `overflow-y: scroll;` |
| `p1` | `padding: ${0:0};` |
| `p2` | `padding: ${1:0} ${0:0};` |
| `p3` | `padding: ${1:0} ${2:0} ${0:0};` |
| `p4` | `padding: ${1:0} ${2:0} ${3:0} ${0:0};` |
| `pt1` | `padding-top: ${0:0};` |
| `pr1` | `padding-right: ${0:0};` |
| `pl1` | `padding-left: ${0:0};` |
| `pb1` | `padding-bottom: ${0:0};` |
| `pbaa` | `page-break-after: always;` |
| `pbaa` | `page-break-after: auto;` |
| `pbaa` | `page-break-after: avoid;` |
| `pbal` | `page-break-after: left;` |
| `pbar` | `page-break-after: right;` |
| `pbba` | `page-break-before: always;` |
| `pbba` | `page-break-before: auto;` |
| `pbba` | `page-break-before: avoid;` |
| `pbbl` | `page-break-before: left;` |
| `pbbr` | `page-break-before: right;` |
| `pbia` | `page-break-inside: auto;` |
| `pbia` | `page-break-inside: avoid;` |
| `-p1` | `-moz-perspective: ${0:0}; -webkit-perspective: ${0:0}; perspective: ${0:0};` |
| `p1` | `perspective: ${0:0};` |
| `-pn` | `-moz-perspective: none; -webkit-perspective: none; perspective: none;` |
| `pn` | `perspective: none;` |
| `-po2` | `-moz-perspective-origin: ${1:0} ${0:0}; -webkit-perspective-origin: ${1:0} ${0:0}; perspective-origin: ${1:0} ${0:0};` |
| `po2` | `perspective-origin: ${1:0} ${0:0};` |
| `-pocb` | `-moz-perspective-origin: center bottom; -webkit-perspective-origin: center bottom; perspective-origin: center bottom;` |
| `pocb` | `perspective-origin: center bottom;` |
| `-pocc` | `-moz-perspective-origin: center center; -webkit-perspective-origin: center center; perspective-origin: center center;` |
| `pocc` | `perspective-origin: center center;` |
| `-poct` | `-moz-perspective-origin: center top; -webkit-perspective-origin: center top; perspective-origin: center top;` |
| `poct` | `perspective-origin: center top;` |
| `-polb` | `-moz-perspective-origin: left bottom; -webkit-perspective-origin: left bottom; perspective-origin: left bottom;` |
| `polb` | `perspective-origin: left bottom;` |
| `-polc` | `-moz-perspective-origin: left center; -webkit-perspective-origin: left center; perspective-origin: left center;` |
| `polc` | `perspective-origin: left center;` |
| `-polt` | `-moz-perspective-origin: left top; -webkit-perspective-origin: left top; perspective-origin: left top;` |
| `polt` | `perspective-origin: left top;` |
| `-porb` | `-moz-perspective-origin: right bottom; -webkit-perspective-origin: right bottom; perspective-origin: right bottom;` |
| `porb` | `perspective-origin: right bottom;` |
| `-porc` | `-moz-perspective-origin: right center; -webkit-perspective-origin: right center; perspective-origin: right center;` |
| `porc` | `perspective-origin: right center;` |
| `-port` | `-moz-perspective-origin: right top; -webkit-perspective-origin: right top; perspective-origin: right top;` |
| `port` | `perspective-origin: right top;` |
| `pa` | `position: absolute;` |
| `pf` | `position: fixed;` |
| `pr` | `position: relative;` |
| `ps` | `position: static;` |
| `qn` | `quotes: none;` |
| `q` | `quotes: '«' '»';` |
| `-ri` | `-moz-resize: both; resize: both;` |
| `ri` | `resize: both;` |
| `-rh` | `-moz-resize: horizontal; resize: horizontal;` |
| `rh` | `resize: horizontal;` |
| `-rn` | `-moz-resize: none; resize: none;` |
| `rn` | `resize: none;` |
| `-rv` | `-moz-resize: vertical; resize: vertical;` |
| `rv` | `resize: vertical;` |
| `r1` | `right: ${0:0};` |
| `ra` | `right: auto;` |
| `-ts1` | `-moz-tab-size: ${0:4}; -o-tab-size: ${0:4}; tab-size: ${0:4};` |
| `ts1` | `tab-size: ${0:4};` |
| `tla` | `table-layout: auto;` |
| `tlf` | `table-layout: fixed;` |
| `tac` | `text-align: center;` |
| `taj` | `text-align: justify;` |
| `tal` | `text-align: left;` |
| `tar` | `text-align: right;` |
| `tdb` | `text-decoration: blink;` |
| `tdlt` | `text-decoration: line-through;` |
| `tdn` | `text-decoration: none;` |
| `tdo` | `text-decoration: overline;` |
| `tdu` | `text-decoration: underline;` |
| `ti1` | `text-indent: ${0:0};` |
| `-toc` | `-0-text-overflow: clip; text-overflow: clip;` |
| `toc` | `text-overflow: clip;` |
| `-toe` | `-0-text-overflow: ellipsis; text-overflow: ellipsis;` |
| `toe` | `text-overflow: ellipsis;` |
| `-tos` | `-0-text-overflow: string; text-overflow: string;` |
| `tos` | `text-overflow: string;` |
| `ts2_` | `text-shadow: ${1:0} ${2:0} ${0:#000000};` |
| `ts3_` | `text-shadow: ${1:0} ${2:0} ${3:0} ${0:#000000};` |
| `tsn` | `text-shadow: none;` |
| `ttc` | `text-transform: capitalize;` |
| `ttl` | `text-transform: lowercase;` |
| `ttn` | `text-transform: none;` |
| `ttu` | `text-transform: uppercase;` |
| `t1` | `top: ${0:0};` |
| `ta` | `top: auto;` |
| `-tm6` | `-moz-transform: matrix(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${0:0}); -ms-transform: matrix(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${0:0}); -o-transform: matrix(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${0:0}); -webkit-transform: matrix(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${0:0}); transform: matrix(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${0:0});` |
| `tm6` | `transform: matrix(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${0:0});` |
| `-tm3` | `-moz-transform: matrix3d(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${6:0}, ${7:0}, ${8:0}, ${9:0}, ${10:0}, ${11:0}, ${12:0}, ${13:0}, ${14:0}, ${15:0}, ${0:0}); -webkit-transform: matrix3d(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${6:0}, ${7:0}, ${8:0}, ${9:0}, ${10:0}, ${11:0}, ${12:0}, ${13:0}, ${14:0}, ${15:0}, ${0:0}); transform: matrix3d(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${6:0}, ${7:0}, ${8:0}, ${9:0}, ${10:0}, ${11:0}, ${12:0}, ${13:0}, ${14:0}, ${15:0}, ${0:0});` |
| `tm3` | `transform: matrix3d(${1:0}, ${2:0}, ${3:0}, ${4:0}, ${5:0}, ${6:0}, ${7:0}, ${8:0}, ${9:0}, ${10:0}, ${11:0}, ${12:0}, ${13:0}, ${14:0}, ${15:0}, ${0:0});` |
| `-tr2` | `-moz-transform: rotate(${1:0}, ${2:0}); -ms-transform: rotate(${1:0}, ${2:0}); -o-transform: rotate(${1:0}, ${2:0}); -webkit-transform: rotate(${1:0}, ${2:0}); transform: rotate(${1:0}, ${2:0});` |
| `tr2` | `transform: rotate(${1:0}, ${2:0});` |
| `-tr34` | `-moz-transform: rotate3d(${1:0}, ${2:0}, ${3:0}, ${4:0}); -webkit-transform: rotate3d(${1:0}, ${2:0}, ${3:0}, ${4:0}); transform: rotate3d(${1:0}, ${2:0}, ${3:0}, ${4:0});` |
| `tr34` | `transform: rotate3d(${1:0}, ${2:0}, ${3:0}, ${4:0});` |
| `-trx1` | `-moz-transform: rotateX(${0:0}); -webkit-transform: rotateX(${0:0}); transform: rotateX(${0:0});` |
| `trx1` | `transform: rotateX(${0:0});` |
| `-try1` | `-moz-transform: rotateY(${0:0}); -webkit-transform: rotateY(${0:0}); transform: rotateY(${0:0});` |
| `try1` | `transform: rotateY(${0:0});` |
| `-trz1` | `-moz-transform: rotateZ(${0:0}); -webkit-transform: rotateZ(${0:0}); transform: rotateZ(${0:0});` |
| `trz1` | `transform: rotateZ(${0:0});` |
| `-ts2` | `-moz-transform: scale(${1:0}, ${0:0}); -ms-transform: scale(${1:0}, ${0:0}); -o-transform: scale(${1:0}, ${0:0}); -webkit-transform: scale(${1:0}, ${0:0}); transform: scale(${1:0}, ${0:0});` |
| `ts2` | `transform: scale(${1:0}, ${0:0});` |
| `-ts33` | `-moz-transform: scale3d(${1:0}, ${2:0}, ${0:0}); -webkit-transform: scale3d(${1:0}, ${2:0}, ${0:0}); transform: scale3d(${1:0}, ${2:0}, ${0:0});` |
| `ts33` | `transform: scale3d(${1:0}, ${2:0}, ${0:0});` |
| `-tsx1` | `-moz-transform: scaleX(${0:0}); -webkit-transform: scaleX(${0:0}); transform: scaleX(${0:0});` |
| `tsx1` | `transform: scaleX(${0:0});` |
| `-tsy1` | `-moz-transform: scaleY(${0:0}); -webkit-transform: scaleY(${0:0}); transform: scaleY(${0:0});` |
| `tsy1` | `transform: scaleY(${0:0});` |
| `-tsz1` | `-moz-transform: scaleZ(${0:0}); -webkit-transform: scaleZ(${0:0}); transform: scaleZ(${0:0});` |
| `tsz1` | `transform: scaleZ(${0:0});` |
| `-ts2` | `-moz-transform: skew(${1:0}, ${0:0}); -ms-transform: skew(${1:0}, ${0:0}); -o-transform: skew(${1:0}, ${0:0}); -webkit-transform: skew(${1:0}, ${0:0}); transform: skew(${1:0}, ${0:0});` |
| `ts2` | `transform: skew(${1:0}, ${0:0});` |
| `-tsx1` | `-moz-transform: skewX(${0:0}); -ms-transform: skewX(${0:0}); -o-transform: skewX(${0:0}); -webkit-transform: skewX(${0:0}); transform: skewX(${0:0});` |
| `tsx1` | `transform: skewX(${0:0});` |
| `-tsy1` | `-moz-transform: skewY(${0:0}); -ms-transform: skewY(${0:0}); -o-transform: skewY(${0:0}); -webkit-transform: skewY(${0:0}); transform: skewY(${0:0});` |
| `tsy1` | `transform: skewY(${0:0});` |
| `-tt2` | `-moz-transform: translate(${1:0}, ${0:0}); -ms-transform: translate(${1:0}, ${0:0}); -o-transform: translate(${1:0}, ${0:0}); -webkit-transform: translate(${1:0}, ${0:0}); transform: translate(${1:0}, ${0:0});` |
| `tt2` | `transform: translate(${1:0}, ${0:0});` |
| `-tt33` | `-moz-transform: translate3d(${1:0}, ${2:0}, ${0:0}); -webkit-transform: translate3d(${1:0}, ${2:0}, ${0:0}); transform: translate3d(${1:0}, ${2:0}, ${0:0});` |
| `tt33` | `transform: translate3d(${1:0}, ${2:0}, ${0:0});` |
| `-ttx1` | `-moz-transform: translateX(${0:0}); -webkit-transform: translateX(${0:0}); transform: translateX(${0:0});` |
| `ttx1` | `transform: translateX(${0:0});` |
| `-tty1` | `-moz-transform: translateY(${0:0}); -webkit-transform: translateY(${0:0}); transform: translateY(${0:0});` |
| `tty1` | `transform: translateY(${0:0});` |
| `-ttz1` | `-moz-transform: translateZ(${0:0}); -webkit-transform: translateZ(${0:0}); transform: translateZ(${0:0});` |
| `ttz1` | `transform: translateZ(${0:0});` |
| `-tp1` | `-moz-transform: perspective(${0:0}); -ms-transform: perspective(${0:0}); -o-transform: perspective(${0:0}); -webkit-transform: perspective(${0:0}); transform: perspective(${0:0});` |
| `tp1` | `transform: perspective(${0:0});` |
| `-tn` | `-moz-transform: none; -ms-transform: none; -o-transform: none; -webkit-transform: none; transform: none;` |
| `tn` | `transform: none;` |
| `-to2` | `-moz-transform-origin: ${1:0} ${0:0}; -ms-transform-origin: ${1:0} ${0:0}; -o-transform-origin: ${1:0} ${0:0}; -webkit-transform-origin: ${1:0} ${0:0}; transform-origin: ${1:0} ${0:0};` |
| `to2` | `transform-origin: ${1:0} ${0:0};` |
| `-to3` | `-moz-transform-origin: ${1:0} ${2:0} ${0:0}; -webkit-transform-origin: ${1:0} ${2:0} ${0:0}; transform-origin: ${1:0} ${2:0} ${0:0};` |
| `to3` | `transform-origin: ${1:0} ${2:0} ${0:0};` |
| `-tsf` | `-moz-transform-style: flat; -webkit-transform-style: flat; transform-style: flat;` |
| `tsf` | `transform-style: flat;` |
| `-tsp3` | `-moz-transform-style: preserve-3d; -webkit-transform-style: preserve-3d; transform-style: preserve-3d;` |
| `tsp3` | `transform-style: preserve-3d;` |
| `-ta1` | `-moz-transition: ${1:all} ${0:1}s; -o-transition: ${1:all} ${0:1}s; -webkit-transition: ${1:all} ${0:1}s; transition: ${1:all} ${0:1}s;` |
| `ta1` | `transition: ${1:all} ${0:1}s;` |
| `-tacb1` | `-moz-transition: ${1:all} ${2:1}s cubic-bezier(${3:0}, ${4:0}, ${5:0}, ${0:0}); -o-transition: ${1:all} ${2:1}s cubic-bezier(${3:0}, ${4:0}, ${5:0}, ${0:0}); -webkit-transition: ${1:all} ${2:1}s cubic-bezier(${3:0}, ${4:0}, ${5:0}, ${0:0}); transition: ${1:all} ${2:1}s cubic-bezier(${3:0}, ${4:0}, ${5:0}, ${0:0});` |
| `tacb1` | `transition: ${1:all} ${2:1}s cubic-bezier(${3:0}, ${4:0}, ${5:0}, ${0:0});` |
| `-ta1e` | `-moz-transition: ${1:all} ${0:1}s ease; -o-transition: ${1:all} ${0:1}s ease; -webkit-transition: ${1:all} ${0:1}s ease; transition: ${1:all} ${0:1}s ease;` |
| `ta1e` | `transition: ${1:all} ${0:1}s ease;` |
| `-ta1ei` | `-moz-transition: ${1:all} ${0:1}s ease-in; -o-transition: ${1:all} ${0:1}s ease-in; -webkit-transition: ${1:all} ${0:1}s ease-in; transition: ${1:all} ${0:1}s ease-in;` |
| `ta1ei` | `transition: ${1:all} ${0:1}s ease-in;` |
| `-ta1eio` | `-moz-transition: ${1:all} ${0:1}s ease-in-out; -o-transition: ${1:all} ${0:1}s ease-in-out; -webkit-transition: ${1:all} ${0:1}s ease-in-out; transition: ${1:all} ${0:1}s ease-in-out;` |
| `ta1eio` | `transition: ${1:all} ${0:1}s ease-in-out;` |
| `-ta1eo` | `-moz-transition: ${1:all} ${0:1}s ease-out; -o-transition: ${1:all} ${0:1}s ease-out; -webkit-transition: ${1:all} ${0:1}s ease-out; transition: ${1:all} ${0:1}s ease-out;` |
| `ta1eo` | `transition: ${1:all} ${0:1}s ease-out;` |
| `-ta1l` | `-moz-transition: ${1:all} ${0:1}s linear; -o-transition: ${1:all} ${0:1}s linear; -webkit-transition: ${1:all} ${0:1}s linear; transition: ${1:all} ${0:1}s linear;` |
| `ta1l` | `transition: ${1:all} ${0:1}s linear;` |
| `-td1` | `-moz-transition-delay: ${0:1}s; -o-transition-delay: ${0:1}s; -webkit-transition-delay: ${0:1}s; transition-delay: ${0:1}s;` |
| `td1` | `transition-delay: ${0:1}s;` |
| `-td1` | `-moz-transition-duration: ${0:1}s; -o-transition-duration: ${0:1}s; -webkit-transition-duration: ${0:1}s; transition-duration: ${0:1}s;` |
| `td1` | `transition-duration: ${0:1}s;` |
| `-tpp` | `-moz-transition-property: ${0:name}; -o-transition-property: ${0:name}; -webkit-transition-property: ${0:name}; transition-property: ${0:name};` |
| `tpp` | `transition-property: ${0:name};` |
| `-tpa` | `-moz-transition-property: all; -o-transition-property: all; -webkit-transition-property: all; transition-property: all;` |
| `tpa` | `transition-property: all;` |
| `-tpn` | `-moz-transition-property: none; -o-transition-property: none; -webkit-transition-property: none; transition-property: none;` |
| `tpn` | `transition-property: none;` |
| `-ttfcb4` | `-moz-transition-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0}); -o-transition-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0}); -webkit-transition-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0}); transition-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0});` |
| `ttfcb4` | `transition-timing-function: cubic-bezier(${1:0}, ${2:0}, ${3:0}, ${0:0});` |
| `-ttfe` | `-moz-transition-timing-function: ease; -o-transition-timing-function: ease; -webkit-transition-timing-function: ease; transition-timing-function: ease;` |
| `ttfe` | `transition-timing-function: ease;` |
| `-ttfei` | `-moz-transition-timing-function: ease-in; -o-transition-timing-function: ease-in; -webkit-transition-timing-function: ease-in; transition-timing-function: ease-in;` |
| `ttfei` | `transition-timing-function: ease-in;` |
| `-ttfeio` | `-moz-transition-timing-function: ease-in-out; -o-transition-timing-function: ease-in-out; -webkit-transition-timing-function: ease-in-out; transition-timing-function: ease-in-out;` |
| `ttfeio` | `transition-timing-function: ease-in-out;` |
| `-ttfeo` | `-moz-transition-timing-function: ease-out; -o-transition-timing-function: ease-out; -webkit-transition-timing-function: ease-out; transition-timing-function: ease-out;` |
| `ttfeo` | `transition-timing-function: ease-out;` |
| `-ttfl` | `-moz-transition-timing-function: linear; -o-transition-timing-function: linear; -webkit-transition-timing-function: linear; transition-timing-function: linear;` |
| `ttfl` | `transition-timing-function: linear;` |
| `ubbo` | `unicode-bidi: bidi-override;` |
| `ube` | `unicode-bidi: embed;` |
| `ubn` | `unicode-bidi: normal;` |
| `usa` | `user-select: all;` |
| `usa` | `user-select: auto;` |
| `usn` | `user-select: none;` |
| `ust` | `user-select: text;` |
| `-usa` | `-webkit-user-select: all; -moz-user-select: all; -ms-user-select: all; user-select: all;` |
| `-usa` | `-webkit-user-select: auto; -moz-user-select: auto; -ms-user-select: auto; user-select: auto;` |
| `-usn` | `-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;` |
| `-ust` | `-webkit-user-select: text; -moz-user-select: text; -ms-user-select: text; user-select: text;` |
| `va1` | `vertical-align: ${0:0};` |
| `vab` | `vertical-align: baseline;` |
| `vab` | `vertical-align: bottom;` |
| `vam` | `vertical-align: middle;` |
| `vas` | `vertical-align: sub;` |
| `vas` | `vertical-align: super;` |
| `vatb` | `vertical-align: text-bottom;` |
| `vatt` | `vertical-align: text-top;` |
| `vat` | `vertical-align: top;` |
| `vc` | `visibility: collapse;` |
| `vh` | `visibility: hidden;` |
| `vv` | `visibility: visible;` |
| `wsn` | `white-space: normal;` |
| `wsp` | `white-space: pre;` |
| `wsn` | `white-space: nowrap;` |
| `wspl` | `white-space: pre-line;` |
| `wspw` | `white-space: pre-wrap;` |
| `w1` | `width: ${0:0};` |
| `wa` | `width: auto;` |
| `wbba` | `word-break: break-all;` |
| `wbka` | `word-break: keep-all;` |
| `wbn` | `word-break: normal;` |
| `ws1` | `word-spacing: ${0:0};` |
| `wsn` | `word-spacing: normal;` |
| `wwbw` | `word-wrap: break-word;` |
| `wwn` | `word-wrap: normal;` |
| `zi1` | `z-index: ${0:0};` |
| `zia` | `z-index: auto;` |

### SCSS

| Prefix | Snippet |
| ------:| ------- |
| `@d1` | `@debug ${0:message};` |
| `@w1` | `@warn ${0:message};` |
| `@e1` | `@error ${0:message};` |
| `i$3` | `if(${1:condition}, ${2:true}, ${0:false})` |
| `@i_` | `@if ${0:condition} {  }` |
| `@ei_` | `@else if ${0:condition} {  }` |
| `@e_` | `@else { $0 }` |
| `@fft_` | `@for ${1:$i} from ${2:1} through ${0:$end} {  }` |
| `@ei_` | `@each ${1:$item} in ${0:$items} {  }` |
| `@w_` | `@while ${0:condition} {  }` |
| `@c1` | `@content;` |
| `@e1` | `@extend ${0:name};` |
| `@i$` | `@include ${0:name}();` |
| `@i_` | `@include ${1:name} {  $0  }` |
| `@i$_` | `@include ${1:name}() {  $0  }` |
| `@m$_` | `@mixin ${1:name} ($2) {  $0  }` |
| `@f_` | `@function ${1:name} ($2) {  $0  }` |
| `@r` | `@return ` |
