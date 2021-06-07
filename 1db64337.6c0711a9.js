(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ldk-architecture-56f911ed5ce7968bf9fee5f9cce63603.svg"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),r=(n(0),n(87)),o=(n(89),{id:"overview",title:"Overview",slug:"/"}),c={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"LDK is a flexible lightning implementation with supporting batteries (or modules).",source:"@site/docs/overview.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/lightningdevkit/lightningdevkit.org/tree/main/docs/overview.md",version:"current",sidebar:"someSidebar",next:{title:"Use Cases for LDK",permalink:"/docs/use_cases"}},l=[{value:"To jump into integrating LDK with your Java application, click here",id:"to-jump-into-integrating-ldk-with-your-java-application-click-here",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"LDK Batteries",id:"ldk-batteries",children:[]},{value:"LDK Architecture",id:"ldk-architecture",children:[]},{value:"References",id:"references",children:[{value:"Rust Documentation",id:"rust-documentation",children:[]},{value:"Rust Sample Node",id:"rust-sample-node",children:[]},{value:"Swift LDK Documentation",id:"swift-ldk-documentation",children:[]},{value:"LDK Architecture",id:"ldk-architecture-1",children:[]}]}],s={toc:l};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"LDK is a flexible lightning implementation with supporting batteries (or modules)."),Object(r.b)("h2",{id:"to-jump-into-integrating-ldk-with-your-java-application-click-here"},"To jump into integrating LDK with your Java application, click ",Object(r.b)("a",Object(i.a)({parentName:"h2"},{href:"/docs/build_node"}),"here")),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"LDK/Rust-Lightning is a generic library which allows you to build a lightning\nnode without needing to worry about getting all of the lightning state machine,\nrouting, and on-chain punishment code (and other chain interactions) exactly\ncorrect. LDK tends to be suitable for use cases where a degree of\ncustomization is desired, e.g. your own chain sync, your own key management\nand/or your own storage/backup logic."),Object(r.b)("p",null,"We are currently working on a demo node which fetches blockchain data and\non-chain funds via Bitcoin Core RPC/REST. The individual pieces of that demo\nare/will be composable, so you can pick the off-the-shelf parts you want and\nreplace the rest."),Object(r.b)("h2",{id:"ldk-batteries"},"LDK Batteries"),Object(r.b)("p",null,"While LDK provides all the core lightning state machine logic, other\nbatteries/modules are needed to run a node. LDK interacts with these modules\nthrough generic interfaces, meaning the user can choose the implementation that\nbest suits their needs. LDK provides sample implementations for many of these\nbatteries, which are enumerated below."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"On-disk storage ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"You can store the channel state any way you want - whether Google\nDrive/iCloud, a local disk, any key-value store/database/a remote server, or\nany combination of them - we provide a clean API that provides objects which\ncan be serialized into simple binary blobs, and stored in any way you wish."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/rust-bitcoin/rust-lightning/tree/main/lightning-persister"}),Object(r.b)("strong",{parentName:"a"},"Sample module in Rust"))))),Object(r.b)("li",{parentName:"ul"},"Blockchain data",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"We provide a simple ",Object(r.b)("inlineCode",{parentName:"li"},"block_connected"),"/",Object(r.b)("inlineCode",{parentName:"li"},"block_disconnected"),"\nAPI which you provide block headers and transaction information to. We also\nprovide an API for getting information about transactions we wish to be\ninformed of, which is compatible with Electrum server requests/neutrino\nfiltering/etc."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/rust-bitcoin/rust-lightning/tree/main/lightning-block-sync"}),Object(r.b)("strong",{parentName:"a"},"Sample module in Rust"))))),Object(r.b)("li",{parentName:"ul"},"On-chain funds wallet/UTXO management",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Rust-Lightning/LDK owns on-chain funds as long as they are claimable as\na part of a lightning output which can be contested - once a channel is closed\nand all on-chain outputs are spendable only by the user, we provide users\nnotifications that a UTXO is "theirs" again and it is up to them to spend it\nas they wish. Additionally, channel funding is accomplished with a generic API\nwhich notifies users of the output which needs to appear on-chain, which they\ncan then create a transaction for. Once a transaction is created, we handle\nthe rest. This is a large part of our API\'s goals - making it easier to\nintegrate lightning into existing on-chain wallets which have their own\non-chain logic - without needing to move funds in and out of a separate\nlightning wallet with on-chain transactions and a separate private key system.'),Object(r.b)("li",{parentName:"ul"},"LDK does not currently provide a sample wallet module, but its sample node\nimplementation uses Bitcoin Core's wallet for UTXO management e.g. ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/lightningdevkit/ldk-sample/blob/2cd778e7acc959689e3b8462c529ffb3509aa1ec/src/main.rs#L245-L260"}),"here")))),Object(r.b)("li",{parentName:"ul"},"Networking ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"To enable a user to run a full lightning node on an embedded\nmachine, we don't specify exactly how to connect to another node at all! We\nprovide a default implementation which uses TCP sockets, but, e.g., if you\nwanted to run your full lightning node on a hardware wallet, you could, by\npiping the lightning network messages over USB/serial and then sending them in\na TCP socket from another machine."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/rust-bitcoin/rust-lightning/tree/main/lightning-net-tokio"}),Object(r.b)("strong",{parentName:"a"},"Sample module in Rust"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/lightningdevkit/ldk-garbagecollected/tree/main/src/main/java/org/ldk/batteries"}),Object(r.b)("strong",{parentName:"a"},"Sample module in Java"))))),Object(r.b)("li",{parentName:"ul"},"Private keys",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'LDK has "default implementations", but users can choose to provide private\nkeys to RL/LDK in any way they wish following a simple API. We even support a\ngeneric API for signing transactions, allowing users to run RL/LDK without any\nprivate keys in memory and/or putting private keys only on hardware wallets.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://docs.rs/lightning/*/lightning/chain/keysinterface/struct.KeysManager.html"}),"LDK's ",Object(r.b)("inlineCode",{parentName:"a"},"KeysManager")," docs"),".\nWhile LDK's default implementation is currently within Rust-Lightning, it is\nstill considered a sample module."))),Object(r.b)("li",{parentName:"ul"},"Transaction filtering",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Clients running a light client may wish to filter for transactions on a separate server, in which case LDK will tell them about transactions to filter for. More information is available in the ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/blockdata"}),"Blockchain Data guide"),"."))),Object(r.b)("li",{parentName:"ul"},"Fee estimation",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"LDK's sample node implementation uses Bitcoin Core's fee estimation API ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/lightningdevkit/ldk-sample/blob/2cd778e7acc959689e3b8462c529ffb3509aa1ec/src/bitcoind_client.rs#L98-L154"}),"here"),"."))),Object(r.b)("li",{parentName:"ul"},"Transaction broadcasting",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"LDK's sample node implementation uses Bitcoin Core's transaction broadcasting API ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/lightningdevkit/ldk-sample/blob/2cd778e7acc959689e3b8462c529ffb3509aa1ec/src/bitcoind_client.rs#L235-L257"}),"here"),"."))),Object(r.b)("li",{parentName:"ul"},"Random number generation",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Because Rust-Lightning aims to make no system calls, it is restricted from generating its own randomness."),Object(r.b)("li",{parentName:"ul"},"LDK's sample node implementation uses Rust's ",Object(r.b)("inlineCode",{parentName:"li"},"rand")," crate ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/lightningdevkit/ldk-sample/blob/2cd778e7acc959689e3b8462c529ffb3509aa1ec/src/main.rs#L464-L465"}),"here")," and elsewhere.")))),Object(r.b)("h2",{id:"ldk-architecture"},"LDK Architecture"),Object(r.b)("p",null,Object(r.b)("img",{alt:"LDK Architecture",src:n(129).default})),Object(r.b)("p",null,"LDK's core components are shown in the center box labeled ",Object(r.b)("inlineCode",{parentName:"p"},"lightning"),". Boxes\nwith dotted borders are LDK's batteries \u2014 these must be configured with either\noff-the-shelf or custom implementations that you provide."),Object(r.b)("p",null,"EventHandler in the diagram is not so much a necessary LDK battery, but instead\nrefers to the fact that LDK generates events that the user should handle (e.g.\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"PaymentReceived")," event)."),Object(r.b)("h2",{id:"references"},"References"),Object(r.b)("h3",{id:"rust-documentation"},Object(r.b)("a",Object(i.a)({parentName:"h3"},{href:"https://docs.rs/lightning"}),"Rust Documentation")),Object(r.b)("p",null,"These provide the most searchable and comprehensive documentation on LDK.\nIf you're using Java and want more information on any method/struct/etc., searching\nthe Rust docs for the Rust version of that struct/method is your best bet."),Object(r.b)("h3",{id:"rust-sample-node"},Object(r.b)("a",Object(i.a)({parentName:"h3"},{href:"https://github.com/lightningdevkit/ldk-sample"}),"Rust Sample Node")),Object(r.b)("p",null,"The sample serves as a complete reference for constructing a lightning node with\nthe LDK. This is a good starting point if you want a self-guided tour!"),Object(r.b)("h3",{id:"swift-ldk-documentation"},Object(r.b)("a",Object(i.a)({parentName:"h3"},{href:"https://github.com/arik-so/SwiftLightning/tree/master/Documentation"}),"Swift LDK Documentation")),Object(r.b)("p",null,"These docs are mainly geared towards how Swift could call LDK C bindings directly, but still may\nprovide a useful overview of Rust Lightning in the context of language bindings."),Object(r.b)("h3",{id:"ldk-architecture-1"},Object(r.b)("a",Object(i.a)({parentName:"h3"},{href:"https://docs.google.com/drawings/d/1Ql-q5gyrPnJhi7z_D39jayG0HEEVh6UEY1eULXb03Eg/edit?usp=sharing"}),"LDK Architecture")),Object(r.b)("p",null,"Gives a high-level organization of LDK and how the pieces fit together. Variations of this diagram\nare used throughout the site. This is the primary source and is still a work in progress."))}u.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||h[d]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(21),a=n(91);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(i.default)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},91:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);