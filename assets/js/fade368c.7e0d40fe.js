"use strict";(self.webpackChunkbytehubplus_github_io=self.webpackChunkbytehubplus_github_io||[]).push([[117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},I=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),I=r,g=u["".concat(c,".").concat(I)]||u[I]||s[I]||a;return n?i.createElement(g,l(l({ref:t},p),{},{components:n})):i.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=I;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}I.displayName="MDXCreateElement"},4601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4,title:"Register"},l="Vault Registering",o={unversionedId:"vault/rfc-004-vault-registering",id:"vault/rfc-004-vault-registering",title:"Register",description:"Author: \u8d75\u632f\u534e",source:"@site/docs/vault/rfc-004-vault-registering.mdx",sourceDirName:"vault",slug:"/vault/rfc-004-vault-registering",permalink:"/docs/vault/rfc-004-vault-registering",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Register"},sidebar:"tutorialSidebar",previous:{title:"Vault",permalink:"/docs/vault/rfc-003-vault"},next:{title:"Vault",permalink:"/docs/vault/rfc-005-vault-interface"}},c={},d=[{value:"Role",id:"role",level:2},{value:"Prerequest",id:"prerequest",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Acceptance Criteria",id:"acceptance-criteria",level:2},{value:"Apendix A - Generate DID",id:"apendix-a---generate-did",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vault-registering"},"Vault Registering"),(0,r.kt)("p",null,"Author: \u8d75\u632f\u534e"),(0,r.kt)("p",null,"Date: 10/08/2022"),(0,r.kt)("p",null,"\u7528\u6237\u6ce8\u518c\u8fc7\u7a0b\u662f\u7528\u6237\u51c6\u5165\u8fc7\u7a0b\u3002\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u7528\u6237\u548c Identity Provider \u5206\u522b\u626e\u6f14\u4e86",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"W3 Verifiable Credential"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Holder"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"Issuer"),"\u7684\u89d2\u8272\u3002\u6ce8\u518c\u6210\u529f\uff0c\u7528\u6237\u83b7\u5f97 Identity Provider \u7684 VC\u3002\u8be5 VC \u53ef\u7528\u4e8e\u8bc1\u660e\u81ea\u5df1\u7684\u8eab\u4efd\u3002\u540c\u65f6\uff0cIdentity Provider \u62c5\u4efb\u4e86 KYC \u7684\u89d2\u8272\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Figure1: VC Model",src:n(9808).Z,width:"735",height:"325"})),(0,r.kt)("p",null,"\u7528\u6237\u6ce8\u518c\u524d\u9700\u8981\u751f\u6210\u4e00\u5bf9\u516c\u79c1\u94a5\uff0c\u5e76\u5c06\u81ea\u5df1\u7684\u8eab\u4efd\u4fe1\u606f\u548c\u516c\u94a5\u5b89\u5168\u5730\u53d1\u9001\u7ed9\u6258\u7ba1 Vault \u7684 Identity Provider\u3002Identity Provider \u4e3a\u7528\u6237\u751f\u6210 DID \u548c DID Document\u3002Document \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"authentication"),"\u4e3a\u8be5\u7528\u6237\u7684\u516c\u94a5\uff0c\u7528\u4e8e\u6388\u6743\u7b7e\u540d\u9a8c\u8bc1\u3002"),(0,r.kt)("p",null,"Identity Provider \u5c06\u6258\u7ba1\u5730\u5740\u5199\u5165 Document \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceEndpoint"),"\uff0c\u5e76\u5bf9\u8fdb\u884c\u7b7e\u540d\uff0c\u7136\u540e\u8fd4\u56de\u7ed9\u7528\u6237\u3002"),(0,r.kt)("p",null,"\u7528\u6237\u6ce8\u518c\u9700\u8981\u63d0\u4ea4\u6ee1\u8db3\u6ce8\u518c\u8981\u6c42\u7684\u4fe1\u606f\u3002\u8be5\u8981\u6c42\u5e94\u8be5\u662f\u516c\u5f00\u7684\uff0c\u4ee5\u4fbf\u6240\u6709\u4eba\u90fd\u4e86\u89e3\u3002\u7528\u6237\u63d0\u4ea4\u7684 Request \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"@context"),"\u5b57\u6bb5\u8868\u660e\u9700\u8981\u6ee1\u8db3\u7684\u8981\u6c42\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": ["example.com/credential/v1.json"],\n  "name": "Alice",\n  "email": "alice@example.com",\n  "phone": "+86 138 1234 5678",\n  "authentication": [\n    {\n      "id": "did:example:123#key-1",\n      "type": "Ed25519VerificationKey2020", // external (property value)\n      "controller": "did:example:123", //to be filled or replaced by service provider with DID ID\n      "publicKeyMultibase": "zAKJP3f7BD6W4iWEQ9jwndVTCBq8ua2Utt8EEjJ6Vxsf"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Public Key in JWK format\u3002"),(0,r.kt)("p",null,"\u5b8c\u6210\u6ce8\u518c\u7684 Response \u662f\u4e00\u4e2a VC\uff0cIdentity Provider \u5c06\u5176\u4fdd\u5b58\u5728 Vault ",(0,r.kt)("inlineCode",{parentName:"p"},"Index"),"\u6570\u636e\u5e93\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u4fdd\u5b58\u5728\u7528\u6237\u7684 Vault \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u7528\u4e8e\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Verifiable Presentation"),"(VP)\u8bc1\u660e\u81ea\u5df1\u7684\u8eab\u4efd\u3002"),(0,r.kt)("p",null,"VC \u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n\n  "@context": [\n    "https://www.w3.org/2018/credentials/v1",\n    "https://www.w3.org/2018/credentials/examples/v1"\n  ],\n\n  "id": "http://example.edu/credentials/1872",\n\n  "type": ["VerifiableCredential", "AlumniCredential"],\n\n  "issuer": "https://example.edu/issuers/565049",\n\n  "issuanceDate": "2010-01-01T19:23:24Z",\n\n  "credentialSubject": {\n\n    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",\n\n    "alumniOf": {\n      "id": "did:example:c276e12ec21ebfeb1f712ebc6f1",\n      "name": [{\n        "value": "Example University",\n        "lang": "en"\n      }, {\n        "value": "Exemple d\'Universit\xe9",\n        "lang": "fr"\n      }]\n    }\n  },\n\n  "proof": {\n\n    "type": "RsaSignature2018",\n\n    "created": "2017-06-18T21:19:10Z",\n\n    "proofPurpose": "assertionMethod",\n\n    "verificationMethod": "https://example.edu/issuers/565049#key-1",\n\n    "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..TCYt5X\n      sITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUc\n      X16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtj\n      PAYuNzVBAh4vGHSrQyHUdBBPM"\n  }\n}\n')),(0,r.kt)("h2",{id:"role"},"Role"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"#"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Goal"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alice"),(0,r.kt)("td",{parentName:"tr",align:null},"End User"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e0c\u671b\u81ea\u5df1\u7684Vault\u80fd\u591f\u5b89\u5168\u5730\u6258\u7ba1\uff0c\u4ee5\u4fbf\u80fd\u591f\u5b58\u53d6\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bob"),(0,r.kt)("td",{parentName:"tr",align:null},"Serivce Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3a\u7528\u6237\u63d0\u4f9b\u5b89\u5168\u3001\u4fbf\u6377\u7684\u6258\u7ba1\u670d\u52a1")))),(0,r.kt)("h2",{id:"prerequest"},"Prerequest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alice\u5fc5\u987b\u5df2\u7ecf\u77e5\u9053Bob\u4f5c\u4e3aService Provider\u7684\u516c\u94a5\uff0c\u4ee5\u80fd\u591f\u5b89\u5168\u5730\u4e0eBob\u8fdb\u884c\u901a\u4fe1\u3002"),(0,r.kt)("li",{parentName:"ul"},"Alice\u5df2\u7ecf\u51c6\u5907\u597d\u81ea\u5df1\u7684DID Document\uff0c\u5176\u4e2d\u5305\u542b\u516c\u79c1\u94a5")),(0,r.kt)("h2",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Alice\u5c06\u81ea\u5df1\u7684DID\u53d1\u9001\u7ed9Bob"),(0,r.kt)("li",{parentName:"ol"},"Bob\u6536\u5230Alice\u53d1\u9001\u7684\u6570\u636e\u4e4b\u540e\uff0c\u9a8c\u8bc1\u5b8c\u6574\u6027\u3002\u5047\u5b9a\u9664\u4e86\u516c\u94a5\u4e4b\u5916\uff0c\u8fd8\u5fc5\u987b\u5305\u542bAlice\u7684\u7535\u8bdd\u53f7\u7801\u548c\u90ae\u7bb1\uff0c\u6682\u65f6\u4e0d\u8981\u6c42\u5176\u4ed6\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ol"},"Bob\u5728\u81ea\u5df1\u7684\u8282\u70b9\u4e0a\u6ce8\u518cAlice\u7684Vault\uff0c\u5e76\u4e14\u6309\u7167Vault ID\u7684\u751f\u6210\u89c4\u5219\uff0c\u751f\u6210ID\uff0c\u8fde\u540c\u8282\u70b9\u5730\u5740\u548c\u7aef\u53e3\u53d1\u9001\u7ed9Alice\u3002")),(0,r.kt)("h2",{id:"acceptance-criteria"},"Acceptance Criteria"),(0,r.kt)("p",null,"Alice\u80fd\u591f\u6839\u636eBob\u8fd4\u56de\u7684Vault ID\uff0c\u8282\u70b9\u5730\u5740/\u7aef\u53e3\u8bbf\u95ee\u81ea\u5df1\u7684Vault\u3002"),(0,r.kt)("h2",{id:"apendix-a---generate-did"},"Apendix A - Generate DID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"openssl genrsa -out private.pem 2048\nopenssl rsa -in private.pem -outform PEM -pubout -out public.pem\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install @decentralized-identity/did-auth-jose\nnpm pem-jwk\n\n")),(0,r.kt)("p",null,"Save below code into ",(0,r.kt)("strong",{parentName:"p"},"make-jws.js")," file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var fs = require(\'fs\');\nvar path = require(\'path\');\nvar didAuth = require(\'@decentralized-identity/did-auth-jose\');\n\n// load JWKs from files\nconst jwkPriv = JSON.parse(fs.readFileSync(path.resolve(__dirname, \'./private.jwk\'), \'ascii\'));\nconst jwkPub = JSON.parse(fs.readFileSync(path.resolve(__dirname, \'./public.jwk\'), \'ascii\'));\n\n// load JWK into an EcPrivateKey object\nconst privateKey = didAuth.EcPrivateKey.wrapJwk(jwkPriv.kid, jwkPriv);\n\nasync function makeJws() {\n\n    // construct the JWS payload\n    const body = {\n        "@context": "https://w3id.org/did/v1",\n        publicKey: [\n            {\n                id: jwkPub.kid,\n                type: "Secp256k1VerificationKey2018",\n                publicKeyJwk: jwkPub\n            }\n        ],\n        service: [\n            {\n                id: "IdentityHub",\n                type: "IdentityHub",\n                serviceEndpoint: {\n                    "@context": "schema.identity.foundation/hub",\n                    "@type": "UserServiceEndpoint",\n                    instance: [\n                        "did:test:hub.id",\n                    ]\n                }\n            }\n        ],\n    };\n\n    // Construct the JWS header\n    const header = {\n        alg: jwkPub.defaultSignAlgorithm,\n        kid: jwkPub.kid,\n        operation:\'create\',\n        proofOfWork:\'{}\'\n    };\n\n    // Sign the JWS\n    const cryptoFactory = new didAuth.CryptoFactory([new didAuth.Secp256k1CryptoSuite()]);\n    const jwsToken = new didAuth.JwsToken(body, cryptoFactory);\n    const signedBody = await jwsToken.signAsFlattenedJson(privateKey, {header});\n\n    // Print out the resulting JWS to the console in JSON format\n    console.log(JSON.stringify(signedBody));\n\n}\n\nmakeJws();\n\n')),(0,r.kt)("p",null,"The file can sign a registration request as jws."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node make-jws.js\n")))}u.isMDXComponent=!0},9808:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJ5ZXMiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgLTUgNzM1IDMyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxkZWZzPgoJCTxtYXJrZXIgaWQ9ImFycm93IiB2aWV3Qm94PSIwIDAgNiA0IiByZWZYPSIxIiByZWZZPSIyIiBmaWxsPSIjMDAwIgogICAgICBtYXJrZXJXaWR0aD0iNiIgbWFya2VySGVpZ2h0PSI0IiBvcmllbnQ9ImF1dG8iPgogICAgPHBhdGggZD0iTTAgMHY0bDYgLTJ6IiAvPgogICAgPC9tYXJrZXI+CgkJPHN0eWxlPjwhW0NEQVRBWwoJCQlwYXRoLnJlZ2lzdGVyIHttYXJrZXItZW5kOiB1cmwoI2Fycm93KTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6M30KCQkJcGF0aC5teUpvYiB7bWFya2VyLWVuZDogdXJsKCNjb3JlQXJyb3cpO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDouNTtmaWxsOiNkZWZ9CgkJCXJlY3Qge3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDoycHh9CgkJCXJlY3Qge2ZpbGw6ICNiZGF9CgkJCXRleHQge2ZpbGw6IzAwMDtmb250LXNpemU6MTRweDtmb250LWZhbWlseTpzYW5zLXNlcmlmfQoJCQkqW3JvbGU9aGVhZGluZ117Zm9udC1zaXplOjEuNWVtO2ZvbnQtd2VpZ2h0OmJvbGR9CgkJCS5teVJvbGUge2ZvbnQtc3R5bGU6aXRhbGljfQoJCQkjYmFja2dyb3VuZCB7d2lkdGg6IDEwMCU7aGVpZ2h0OjEwMCU7c3Ryb2tlOm5vbmU7ZmlsbDojZmZmfQoJCV1dPjwvc3R5bGU+Cgk8L2RlZnM+CjxyZWN0IGlkPSJiYWNrZ3JvdW5kIiB5PSItNSIvPgoKPHJlY3QgeD0iMTUiIHdpZHRoPSIxMjAiIGhlaWdodD0iOTAiIHJ4PSIxMCIvPgo8dGV4dCB4PSI0MSIgeT0iNDUiIHJvbGU9ImhlYWRpbmciPklzc3VlcjwvdGV4dD4KPHRleHQgeD0iNDAiIHk9IjYwIiBjbGFzcz0ibXlSb2xlIj5Jc3N1ZXMgVkNzPC90ZXh0Pgo8cGF0aCBjbGFzcz0ibXlKb2IiIGQ9Im0xMzYgMzVoMTMwdi0zbDkgMTMgLTkgMTN2LTNoLTEzMHoiLz4KICA8dGV4dCB4PSIxNDUiIHk9IjUwIj5Jc3N1ZSBDcmVkZW50aWFsczwvdGV4dD4KPHBhdGggY2xhc3M9InJlZ2lzdGVyIiBkPSJtNzUgOTB2MTYwaDU1Ii8+Cgk8dGV4dCB4PSI4NSIgeT0iMTUwIj5WZXJpZnkgSWRlbnRpZmllcnMKCQk8dHNwYW4geD0iODUiIHk9IjE2NSI+YW5kIHVzZSBTY2hlbWFzPC90c3Bhbj4KPC90ZXh0PgoKPHJlY3QgeD0iMjc1IiB3aWR0aD0iMTMwIiBoZWlnaHQ9IjkwIiByeD0iMTAiLz4KPHRleHQgeD0iMzA1IiB5PSI0NSIgcm9sZT0iaGVhZGluZyI+SG9sZGVyPC90ZXh0Pgo8dGV4dCB4PSIyOTAiIHk9IjYwIiBjbGFzcz0ibXlSb2xlIj5BY3F1aXJlcywgc3RvcmVzLDwvdGV4dD4KPHRleHQgeD0iMzAwIiB5PSI3NSIgY2xhc3M9Im15Um9sZSI+cHJlc2VudHMgVkNzPC90ZXh0Pgo8cGF0aCBjbGFzcz0ibXlKb2IiIGQ9Im00MDYgMzVoMTQ1di0zbDkgMTMgLTkgMTN2LTNoLTE0NXoiLz4KICA8dGV4dCB4PSI0MTUiIHk9IjUwIj5TZW5kIFByZXNlbnRhdGlvbjwvdGV4dD4KPHBhdGggY2xhc3M9InJlZ2lzdGVyIiBkPSJtMzQwIDkwdjkwIi8+Cgk8dGV4dCB4PSIzNTAiIHk9IjE1MCI+UmVnaXN0ZXIgSWRlbnRpZmllcnMKCQk8dHNwYW4geD0iMzUwIiB5PSIxNjUiPmFuZCB1c2UgU2NoZW1hczwvdHNwYW4+CjwvdGV4dD4KCjxyZWN0IHg9IjU2MCIgd2lkdGg9IjEzMCIgaGVpZ2h0PSI5MCIgcng9IjEwIi8+Cjx0ZXh0IHg9IjU4MiIgeT0iNDUiIHJvbGU9ImhlYWRpbmciPlZlcmlmaWVyPC90ZXh0Pgo8dGV4dCB4PSI1ODUiIHk9IjYwIiBjbGFzcz0ibXlSb2xlIj5WZXJpZmllcyBWQ3M8L3RleHQ+CjxwYXRoIGNsYXNzPSJyZWdpc3RlciIgZD0ibTY0MCA5MHYxNjBoLTcwIi8+Cgk8dGV4dCB4PSI2MzAiIHk9IjE1MCIgdGV4dC1hbmNob3I9ImVuZCI+VmVyaWZ5IElkZW50aWZpZXJzPHRzcGFuIHg9IjYzMCIgeT0iMTY1Ij5hbmQgU2NoZW1hczwvdHNwYW4+CjwvdGV4dD4KCjxyZWN0IHg9IjE1MCIgeT0iMjAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjkwIiByeD0iMTAiLz4KPHRleHQgeD0iMjEwIiB5PSIyNDUiIHJvbGU9ImhlYWRpbmciPlZlcmlmaWFibGUgRGF0YSBSZWdpc3RyeTwvdGV4dD4KPHRleHQgeD0iMjM1IiB5PSIyNjAiIGNsYXNzPSJteVJvbGUiPk1haW50YWlucyBpZGVudGlmaWVycyBhbmQgc2NoZW1hczwvdGV4dD4KCjwvc3ZnPgo="}}]);