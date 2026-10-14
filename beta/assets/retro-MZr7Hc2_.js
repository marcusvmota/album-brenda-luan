import{T as e,c as t}from"./mural-B8h_b8OH.js";import{r as n}from"./polaroid-C8xMY6f-.js";import{a as r,n as i,t as a}from"./datas-DPPays7Z.js";import{n as o}from"./evento-Df0FEiAg.js";import{n as s,r as c,t as l}from"./retro-api-10sZ3BQq.js";var u=(e,t)=>e.criado_em<t.criado_em?-1:e.criado_em>t.criado_em?1:e.id<t.id?-1:1,d=(e,t)=>(t.curtidas||0)-(e.curtidas||0)||u(e,t),f=e=>e&&!e.oculto,p=e=>!!String(e.texto||``).trim(),m=36e5;function h(e){let t=e.filter(f).sort(u);if(!t.length)return[];let n=e=>Math.floor(Date.parse(e.criado_em)/m),r=n(t[0]),a=n(t.at(-1)),o=[];for(let e=r;e<=a&&o.length<48;e++){let t=new Date(e*m).toISOString();o.push({hora:i(t).hora,inicio:t,n:0,fotos:0,posts:[]})}for(let e of t){let t=o[n(e)-r];t&&(t.n++,e.tipo===`foto`&&t.fotos++,t.posts.push(e))}return o}function ee(e,t=`n`){let n=null;for(let r of h(e))r[t]>0&&(!n||r[t]>n[t])&&(n=r);return n}function g(e,t=3){let n=e.filter(e=>e.tipo===`recado`&&p(e)).sort(d),r=e.filter(e=>e.tipo===`foto`&&p(e)&&e.texto.trim().length>10).sort(d);return[...n,...r].slice(0,t)}function _(e){let t=String(e||``).replace(/\(.*?\)/g,` `).trim().split(/\s+/).filter(Boolean);return t.length?/^(seu|sr\.?|sra\.?|dona|d\.|dr\.?|dra\.?|tia|tio|vó|vô|vovó|vovô|vo|prima|primo|padre|pastor|pastora)$/i.test(t[0])&&t[1]?`${t[0]} ${t[1]}`:t[0]:``}function v({eu:e,meus:t=[],destaques:n=[],recadosFesta:r=[],mosaico:i=[],totais:a={}}){let o=t.filter(f).sort(u),s=o.filter(e=>e.tipo===`foto`),c=s.filter(e=>e.polaroid),l=o.filter(e=>e.tipo===`recado`),m=o.filter(p).sort(d).slice(0,3),h=s.slice().sort(d)[0]||null,g=n.filter(e=>f(e)&&e.tipo===`foto`),v=String((e==null?void 0:e.nome)||``).trim(),y=ee(o);return{nome:v,primeiro:_(v),enviou:o.length>0,nFotos:s.length,nRecados:l.length,nPolaroids:c.length,nEscritos:o.filter(p).length,fotos:s,polaroids:c,escritos:m,destaque:h||g[0]||null,destaqueEhMeu:!!h,pico:y&&{hora:y.hora,n:y.n,fotos:y.fotos,recados:y.n-y.fotos,inicio:y.inicio,posts:y.posts},paraStory:(s.length?[...c,...s.filter(e=>!e.polaroid)]:g).slice(0,3),recadosFesta:r.filter(e=>f(e)&&p(e)).sort(d).slice(0,3),mosaico:i.filter(e=>f(e)&&e.tipo===`foto`),totais:{fotos:a.fotos||0,pessoas:a.pessoas||0,recados:a.recados||0}}}function y({posts:e=[],convidados:t=0}){let n=e.filter(f).sort(u),r=n.filter(e=>e.tipo===`foto`),i=n.filter(e=>e.tipo===`recado`),a=new Map;for(let e of n){let t=e.convidado_id||e.autor;a.has(t)||a.set(t,{nome:String(e.autor||``).trim()||`Convidado`,fotos:0,recados:0,total:0,curtidas:0});let n=a.get(t);n.total++,n.curtidas+=e.curtidas||0,e.tipo===`foto`?n.fotos++:n.recados++}let o=[...a.values()],s=r.filter(e=>e.momento===`cerimonia`),c=h(n),l=null;for(let e of c)e.fotos>0&&(!l||e.fotos>l.fotos)&&(l=e);return{nFotos:r.length,nRecados:i.length,nEscritos:n.filter(p).length,nPessoas:o.length,convidados:Math.max(t||0,o.length),nCerimonia:s.length,nFesta:r.length-s.length,fotosCerimonia:s.slice().sort(d).slice(0,3),primeira:r[0]||null,ultima:r.at(-1)||null,topConvidados:o.filter(e=>e.fotos>0).sort((e,t)=>t.fotos-e.fotos||t.total-e.total||e.nome.localeCompare(t.nome,`pt-BR`)).slice(0,5),nFotografos:o.filter(e=>e.fotos>0).length,topFotos:r.slice().sort(d).slice(0,6),melhoresRecados:g(n),autores:o.map(e=>e.nome),linha:c,pico:l,mosaico:r.slice(-50).reverse()}}var b=e=>Number(e||0).toLocaleString(`pt-BR`),x=(e,t=document)=>t.querySelector(e),te=(e,t=document)=>[...t.querySelectorAll(e)],S=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),C=`<svg class="icon" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg>`,w=()=>`${S(o.n1)} &amp; ${S(o.n2)}`,ne=()=>S(o.meta.split(`·`)[0].trim()),T=(e,t,n=`div`,r=``,i=``)=>`<${n} class="ln ${r}" style="--d:${t}s;${i}">${e}</${n}>`,E=null,D=null,O=`convidado`,k=[],A=0,j=null,M=0,N=0,P=null,F=!1,I=null,L=0,R=!1,z=t=>e(D,t.thumb_path),B=t=>e(D,t.media_path)||z(t),V=(e,t=``)=>`<img src="${S(e)}" crossorigin="anonymous" alt="" draggable="false" ${t}>`;function H(){if(R)return;R=!0;let e=x(`#r-stage`);e.addEventListener(`pointerdown`,e=>{e.target.closest(`.r-tap`)&&(F=!1,P=setTimeout(()=>{F=!0,U()},220))});let t=()=>{clearTimeout(P),F&&W()};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`pointerleave`,t),e.addEventListener(`click`,e=>{let t=e.target.closest(`[data-r]`);t&&(F?F=!1:K(A+Number(t.dataset.r)))}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),x(`#r-close`).addEventListener(`click`,()=>history.back()),document.addEventListener(`keydown`,e=>{(E==null?void 0:E.tela())===`retro`&&(e.key===`ArrowRight`?K(A+1):e.key===`ArrowLeft`?K(A-1):e.key===`Escape`&&!x(`#sheet.on`)&&history.back())}),document.addEventListener(`visibilitychange`,()=>{(E==null?void 0:E.tela())===`retro`&&(document.visibilityState===`hidden`?U():W())})}function U(){j&&(clearTimeout(j),j=null,N-=Date.now()-M,x(`#s-retro`).classList.add(`paused`))}function W(){x(`#s-retro`).classList.remove(`paused`),!j&&A<k.length-1&&k.length&&G(Math.max(300,N))}function G(e){clearTimeout(j),M=Date.now(),N=e,j=setTimeout(()=>K(A+1),e)}function re(){var e;clearTimeout(j),j=null,L++,(e=x(`#s-retro`))==null||e.classList.remove(`paused`)}function K(e){if(!k.length)return;A=Math.max(0,Math.min(e,k.length-1));let t=k[A],n=A===k.length-1;x(`#s-retro`).classList.remove(`paused`),x(`#r-stage`).innerHTML=t.html+(n?``:`<div class="r-tap l" data-r="-1"></div><div class="r-tap r" data-r="1"></div>`)+(A===0?`<div class="r-hint">toque para avançar · segure para pausar</div>`:``),x(`#s-retro`).dataset.slide=t.id,te(`#r-bars i`).forEach((e,r)=>{e.className=r<A||n&&r===A?`done`:``,r===A&&!n&&(e.style.setProperty(`--ms`,t.ms+`ms`),e.offsetWidth,e.className=`run`)}),x(`#r-stage`).style.setProperty(`--ms`,t.ms+`ms`),clearTimeout(j),j=null,n||G(t.ms);let r=x(`#r-share`);r&&(r.onclick=()=>ge());let i=x(`#r-again`);i&&(i.onclick=()=>K(0));let a=x(`#r-album`);a&&(a.onclick=()=>history.back())}function q(e){x(`#r-bars`).innerHTML=``,k=[],x(`#r-stage`).innerHTML=`<div class="r-slide r-load"><span class="spin"></span><p>${S(e)}</p></div>`}function ie(e){x(`#r-stage`).innerHTML=`<div class="r-slide r-load"><p>${navigator.onLine?`Não deu pra montar a retrospectiva agora.`:`Sem internet. Conecte e tente de novo.`}</p>
    <button class="btn light" id="r-retry" style="max-width:260px">Tentar de novo</button></div>`,x(`#r-retry`).onclick=e}function ae(e){k=e,x(`#r-bars`).innerHTML=k.map(()=>`<i><b></b></i>`).join(``);let t=new Set;for(let e of k)for(let n of e.html.matchAll(/src="([^"]+)"|url\(&quot;(.+?)&quot;\)/g))t.add((n[1]||n[2]).replace(/&amp;/g,`&`));for(let e of t){let t=new Image;t.crossOrigin=`anonymous`,t.src=e}K(0)}function oe(){let e=x(`#app`).getBoundingClientRect(),t=(e.width||393)/5;return 5*(Math.ceil((e.height||852)/t)+1)}function se(e){if(!e.length)return``;let t=oe();return`<div class="r-mosaic">${Array.from({length:t},(t,n)=>e[n%e.length]).map((e,t)=>V(z(e),`style="animation-delay:${t*37%50*.04}s"`)).join(``)}</div>`}var J=(e,t=!1)=>e?`<div class="r-bg${t?` borrado`:``}" style="background-image:url(&quot;${S(e)}&quot;)"></div><div class="r-shade"></div>`:``,Y=e=>e?J(B(e),!!e.polaroid):``,X=e=>e.find(e=>e&&e.tipo!==`recado`&&!e.polaroid)||e.find(e=>e&&e.tipo!==`recado`)||null,ce=e=>e.polaroid?V(B(e),`class="r-photo pol"`):V(B(e),`class="r-photo"`);function le(e,t=1.4){let n=e.slice(0,3);if(n.length===1){let[e]=n;return V(B(e),`class="ln ${e.polaroid?``:`fr`}" style="--d:${t}s;width:64%;max-height:88%;left:18%;top:4%;rotate:-4deg"`)}return n.map((e,n)=>V(B(e),`class="ln ${e.polaroid?``:`fr`}" style="--d:${t+n*.6}s;width:46%;left:${[2,50,25][n]}%;top:${[2,10,40][n]}%;rotate:${[-7,6,-2][n]}deg"`)).join(``)}var Z=(e,t,n=1.9)=>`<div class="r-notes">${e.map((e,r)=>`<div class="r-note ln" style="--d:${n+r*1.3}s"><p>${S(e.texto)}</p><span>${S(t(e))}</span></div>`).join(``)}</div>`,ue=(e,t=2.4)=>e.length?`<div class="r-cmts">${e.map((e,n)=>`<div class="r-cmt ln" style="--d:${t+n*.9}s"><b>${S(e.autor)}</b>${S(e.texto)}</div>`).join(``)}</div>`:``,Q=e=>e.length<=1?e.join(``):`${e.slice(0,-1).join(`, `)} e ${e.at(-1)}`;async function de(e,{sb:t,eu:n}){E=e,D=t,O=`convidado`,H(),E.abrirTela(`retro`),q(`Preparando a sua retrospectiva…`);let r=++L;try{let e=v({eu:n,...await s(D,n.id)});if(e.cmts=e.destaque?await l(D,e.destaque.id).catch(()=>[]):[],r!==L)return;I=e,ae(pe(e))}catch(i){console.error(i),r===L&&ie(()=>fe(()=>de(e,{sb:t,eu:n})))}}function fe(e){history.back(),setTimeout(e,350)}function pe(e){let n=[],r=e.totais,i=Q([e.nFotos?t(e.nFotos,`foto`,`fotos`):``,e.nRecados?t(e.nRecados,`recadinho`,`recadinhos`):``].filter(Boolean)),s=e.mosaico,c=X(s.filter(t=>{var n;return t.id!==((n=e.destaque)==null?void 0:n.id)&&t.momento!==`cerimonia`}))||X(s.filter(t=>{var n;return t.id!==((n=e.destaque)==null?void 0:n.id)}));if(n.push({id:`abertura`,ms:7e3,html:`<div class="r-slide">${J(o.capa)}
    ${T(`${w()} · ${ne()}`,.2,`div`,`r-kick`)}
    <div class="r-bottom">
      <div class="r-h">${T(`Teve um dia`,.7)}${T(`em que o tempo`,1.5)}${T(`<em>andou mais devagar.</em>`,2.3)}</div>
      ${T(`Esta é a história dele, contada por quem estava lá.`,3.6,`div`,`r-hand`)}
    </div></div>`}),e.enviou){let t=e.nPolaroids?e.nPolaroids===1?`Uma delas virou polaroid, revelada na hora. `:`${e.nPolaroids} delas viraram polaroid, reveladas na hora. `:``,r=X([...e.fotos].sort((e,t)=>(t.curtidas||0)-(e.curtidas||0))),a=r?Y(r):``;n.push({id:`voce`,ms:7500,html:`<div class="r-slide">${a}
      ${a?``:T(`O seu olhar`,.2,`div`,`r-kick`)}
      <div class="r-bottom">
        ${a?T(`O seu olhar`,.2,`div`,`r-kick`):``}
        ${T(`Você mandou <em>${S(i)}</em>.`,.7,`div`,`r-quote`)}
        ${T(`${t}Tudo isso agora faz parte do álbum que a gente vai guardar pra sempre.`,2.2,`p`,`r-p`)}
        ${e.primeiro?T(`Obrigado, ${S(e.primeiro)}.`,3.4,`div`,`r-hand`):``}
      </div></div>`})}else{let t=e.destaque?Y(X([e.destaque,...e.mosaico])):J(o.capa);n.push({id:`voce`,ms:7500,html:`<div class="r-slide">${t}
      <div class="r-bottom">
        ${T(`Você estava lá`,.2,`div`,`r-kick`)}
        ${T(`Nem toda lembrança precisa de foto.`,.7,`div`,`r-quote`)}
        ${T(`Você viveu o dia com a gente, e isso já vale o álbum inteiro. Olha só o que todo mundo guardou.`,2.2,`p`,`r-p`)}
      </div></div>`})}if(e.destaque){let r=e.destaque,i=r.curtidas||0;n.push({id:`destaque`,ms:8500,html:`<div class="r-slide">
      ${T(e.destaqueEhMeu?`A sua foto mais amada`:`A foto que todo mundo amou`,.2,`div`,`r-kick`)}
      <div class="ln r-photo-wrap" style="--d:.6s">${ce(r)}</div>
      ${T(`${e.destaqueEhMeu?`sua`:`de <b>${S(r.autor)}</b>`}${i?` · ${t(i,`curtida`,`curtidas`)}`:``}`,1.4,`p`,`r-p`,`text-align:center`)}
      ${ue(e.cmts)}
      </div>`})}if(e.nPolaroids&&n.push({id:`polaroids`,ms:8e3,html:`<div class="r-slide">
      ${T(`Reveladas na hora`,.2,`div`,`r-kick`)}
      ${T(e.nPolaroids===1?`Você revelou <em>uma polaroid</em>.`:`Você revelou <em>${e.nPolaroids} polaroids</em>.`,.6,`div`,`r-quote`)}
      <div class="r-scatter">${le(e.polaroids)}</div>
      ${T(`Com filtro de filme e recado escrito à mão, do jeitinho de antigamente.`,3.2,`p`,`r-p`)}
      </div>`}),e.escritos.length){let t=e.nEscritos;n.push({id:`recados`,ms:9e3,html:`<div class="r-slide">
      ${T(`Escrito por você`,.2,`div`,`r-kick`)}
      ${T(`No meio da festa, você parou pra escrever pra gente.${t>1?` <em>${t} vezes.</em>`:``}`,.6,`div`,`r-quote`)}
      ${Z(e.escritos,()=>e.nome||`Você`)}
      </div>`})}else e.recadosFesta.length&&n.push({id:`recados`,ms:9e3,html:`<div class="r-slide">
      ${T(`Escrito por vocês`,.2,`div`,`r-kick`)}
      ${T(`No meio da festa, vocês pararam pra escrever <em>${r.recados===1?`1 recado`:`${b(r.recados)} recados`}.</em>`,.6,`div`,`r-quote`)}
      ${Z(e.recadosFesta,e=>e.autor)}
      </div>`});if(e.pico&&e.enviou){let r=e.pico,i=X(r.posts),o=Q([r.fotos?t(r.fotos,`foto`,`fotos`):``,r.recados?t(r.recados,`recadinho`,`recadinhos`):``].filter(Boolean)),s=r.n>1?`Entre ${r.hora}h e ${(r.hora+1)%24}h você não parou: <em>${S(o)}</em>.`:`Às ${a(r.posts[0].criado_em)} você guardou o seu momento da noite.`;n.push({id:`momento`,ms:7500,html:`<div class="r-slide">${i?Y(i):``}
      ${i?``:T(`${r.hora}h · O seu momento`,.2,`div`,`r-kick`)}
      <div class="r-bottom">
        ${i?T(`${r.hora}h · O seu momento`,.2,`div`,`r-kick`):``}
        ${T(s,.7,`div`,`r-quote`)}
        ${T(`A gente ama ver a festa pelos seus olhos.`,2.6,`div`,`r-hand`)}
      </div></div>`})}n.push({id:`brinde`,ms:7e3,html:`<div class="r-slide">${c?Y(c):J(o.capa)}
    <div class="r-bottom">
      ${T(`O brinde`,.2,`div`,`r-kick`)}
      ${T(`E aí todo mundo levantou o copo.`,.6,`div`,`r-h`)}
      ${T(`Um dos momentos mais bonitos da noite. Ninguém ficou de fora.`,1.8,`p`,`r-p`)}
      ${T(`Nem a vó.`,3.2,`div`,`r-hand`)}
    </div></div>`});let l=[r.fotos?`${b(r.fotos)} ${r.fotos===1?`foto`:`fotos`}.`:``,r.pessoas>1?`${b(r.pessoas)} pares de olhos.`:``].filter(Boolean).join(` `);n.push({id:`festa`,ms:8500,html:`<div class="r-slide">${se(s)}<div class="r-shade full"></div>
    <div class="r-bottom">
      ${T(`A gente estava lá.`,.8,`div`,`r-quote`)}
      ${T(`Mas não viu quase nada disso.`,1.9,`div`,`r-quote`)}
      ${l?T(l,3.2,`p`,`r-p`):``}
      ${T(`Obrigado por terem visto por nós. <br>— ${w()}`,4.4,`div`,`r-hand`)}
    </div></div>`});let u=e.primeiro?`Para ${S(e.primeiro)},`:`Para você,`,d=e.enviou?e.paraStory:[];return n.push({id:`carta`,ms:0,html:`<div class="r-slide">
    ${T(`Uma carta pra você`,.2,`div`,`r-kick`)}
    <div class="r-letter-wrap ln" style="--d:.6s"><div class="r-letter">
      <div class="to">${u}</div>
      <p>${e.enviou?`Você mandou ${S(i)}, e agora tudo isso faz parte do nosso álbum`:`Você estava lá, e isso faz parte do nosso álbum`}, junto com as lembranças de todo mundo que a gente ama.</p>
      <p>Daqui a muitos anos, quando a gente abrir esse álbum, vai lembrar que você estava lá.</p>
      ${d.length?`<div class="pics">${d.map(e=>V(z(e),e.polaroid?`class="pol"`:``)).join(``)}</div>`:``}
      <div class="sig">Com amor, ${w()}</div>
    </div></div>
    <div class="r-end ln" style="--d:1.6s">
      <button class="btn light" id="r-share">${C}Compartilhar no story</button>
      <button class="btn ghost" id="r-again">Ver de novo</button>
    </div></div>`}),n}async function me(e,{sb:t}){E=e,D=t,O=`noivos`,H(),E.abrirTela(`retro`),q(`Preparando a retrospectiva de vocês…`);let n=++L;try{let e=y(await c(D)),t=e.topFotos[0];if(e.cmts=t?await l(D,t.id).catch(()=>[]):[],n!==L)return;I=e,ae(he(e))}catch(r){console.error(r),n===L&&ie(()=>fe(()=>me(e,{sb:t})))}}function he(e){let n=[],r=e=>e===1?`1 foto`:`${b(e)} fotos`;if(n.push({id:`abertura`,ms:7500,html:`<div class="r-slide">${J(o.capa)}
    ${T(`Para ${w()}`,.2,`div`,`r-kick`)}
    <div class="r-bottom">
      <div class="r-h">${T(`Vocês estavam`,.7)}${T(`ocupados demais`,1.4)}${T(`<em>vivendo.</em>`,2.1)}</div>
      ${T(`Então a gente guardou tudo pra vocês.`,3.4,`div`,`r-hand`)}
    </div></div>`}),e.primeira){let t=e.primeira;n.push({id:`primeira`,ms:7500,html:`<div class="r-slide">${Y(t)}
      <div class="r-bottom">
        ${T(`${a(t.criado_em)} · A primeira foto`,.2,`div`,`r-kick`)}
        ${T(`Antes de todo mundo, <em>${S(t.autor)}</em> já estava guardando o dia de vocês.`,.7,`div`,`r-quote`)}
        ${T(`Foi a primeira de ${b(e.nFotos)}.`,2.8,`div`,`r-hand`)}
      </div></div>`})}e.nCerimonia&&n.push({id:`cerimonia`,ms:8500,html:`<div class="r-slide">
      ${T(`A cerimônia`,.2,`div`,`r-kick`)}
      ${T(`Na hora do sim, vocês ganharam <em>${r(e.nCerimonia)}</em>.`,.6,`div`,`r-quote`)}
      <div class="r-scatter">${le(e.fotosCerimonia)}</div>
      ${T(e.nFesta?`E na festa, mais ${r(e.nFesta)}. Cada uma de um ângulo diferente.`:`Cada uma de um ângulo diferente. Todas guardando o mesmo segundo.`,3.4,`p`,`r-p`)}
      </div>`});let i=e.linha.filter(e=>e.fotos>0);if(e.pico&&i.length>1){let t=Math.max(...e.linha.map(e=>e.fotos)),i=e.linha.map((n,r)=>`<div class="r-hora ${n===e.pico?`pico`:``}"><i class="ln" style="--d:${1.2+r*.08}s;height:${Math.max(n.fotos?6:2,Math.round(n.fotos/t*100))}%"></i><span>${r%2==0||n===e.pico?`${n.hora}h`:``}</span></div>`).join(``);n.push({id:`horas`,ms:8e3,html:`<div class="r-slide">
      ${T(`A noite, hora a hora`,.2,`div`,`r-kick`)}
      ${T(`O pico foi às ${e.pico.hora}h: <em>${r(e.pico.fotos)}</em> em uma hora.`,.6,`div`,`r-quote`)}
      <div class="r-horas">${i}</div>
      ${T(`Cada barrinha é uma hora da festa de vocês.`,3,`p`,`r-p`)}
      </div>`})}if(e.topConvidados.length){let[t]=e.topConvidados;n.push({id:`fotografos`,ms:8e3,html:`<div class="r-slide">
      ${T(`Quem mais fotografou`,.2,`div`,`r-kick`)}
      ${T(e.nFotografos>1?`${r(e.nFotos)}, por <em>${b(e.nFotografos)} pares de olhos</em>.`:`${r(e.nFotos)}, todas pelo mesmo olhar.`,.5,`div`,`r-quote`)}
      <ol class="r-rank">${e.topConvidados.map((e,t)=>`<li class="ln" style="--d:${1.2+t*.5}s"><b>${t+1}</b><span>${S(e.nome)}</span><em>${r(e.fotos)}</em></li>`).join(``)}</ol>
      ${T(`Obrigado, ${S(_(t.nome))}!`,1.2+e.topConvidados.length*.5+.6,`div`,`r-hand`)}
      </div>`})}let s=e.topFotos[0];if(s&&n.push({id:`amada`,ms:8500,html:`<div class="r-slide">
      ${T(`A foto que todo mundo amou`,.2,`div`,`r-kick`)}
      <div class="ln r-photo-wrap" style="--d:.6s">${ce(s)}</div>
      ${T(`de <b>${S(s.autor)}</b>${s.curtidas?` · ${t(s.curtidas,`curtida`,`curtidas`)}`:``}`,1.4,`p`,`r-p`,`text-align:center`)}
      ${ue(e.cmts)}
      </div>`}),e.melhoresRecados.length){let t=e.nEscritos-e.melhoresRecados.length;n.push({id:`recados`,ms:9500,html:`<div class="r-slide">
      ${T(`Recados pra vocês`,.2,`div`,`r-kick`)}
      ${T(`No meio da festa, as pessoas paravam pra escrever pra vocês.${e.nEscritos>1?` <em>${b(e.nEscritos)} vezes.</em>`:``}`,.6,`div`,`r-quote`)}
      ${Z(e.melhoresRecados,e=>e.autor)}
      ${t>0?T(`e ${t===1?`mais 1 esperando`:`mais ${b(t)} esperando`} por vocês no álbum.`,6,`div`,`r-hand`,`font-size:26px;text-align:right;margin-top:14px`):``}
      </div>`})}if(e.ultima&&e.ultima!==e.primeira){let t=e.ultima;n.push({id:`ultima`,ms:8e3,html:`<div class="r-slide">${Y(t)}
      <div class="r-bottom">
        ${T(`${a(t.criado_em)} · A última foto`,.2,`div`,`r-kick`)}
        ${T(`A última foto da noite foi às ${a(t.criado_em)}.`,.7,`div`,`r-h`)}
        ${T(`de ${S(t.autor)}.`,2.2,`p`,`r-p`)}
        ${T(`E a festa ainda não queria acabar.`,3.4,`div`,`r-hand`)}
      </div></div>`})}if(e.autores.length){let t=e.convidados-e.autores.length;n.push({id:`creditos`,ms:Math.min(16e3,6e3+e.autores.length*400),html:`<div class="r-slide">
      ${T(`Este álbum foi feito por`,.2,`div`,`r-kick`)}
      <div class="r-credits"><ul>${e.autores.map(e=>`<li>${S(e)}</li>`).join(``)}${t>0?`<li class="more">e mais ${t===1?`1 pessoa que ama`:`${b(t)} pessoas que amam`} vocês</li>`:``}</ul></div>
      </div>`})}let c=[e.nFotos?r(e.nFotos):``,e.nRecados?t(e.nRecados,`recado`,`recados`):``,e.nPessoas?t(e.nPessoas,`pessoa`,`pessoas`):``].filter(Boolean);return n.push({id:`fim`,ms:0,html:`<div class="r-slide">${se(e.mosaico)}<div class="r-shade full"></div>
    <div class="r-bottom">
      <div class="r-h">${T(`O “para sempre”`,.5)}${T(`<em>começou assim.</em>`,1.3)}</div>
      ${c.length?T(`${Q(c)}. Tudo de vocês.`,2.3,`p`,`r-p`):``}
      <div class="r-end ln" style="--d:3.2s">
        <button class="btn light" id="r-share">${C}Compartilhar no story</button>
        <button class="btn ghost" id="r-album">Ver todas as fotos</button>
        <button class="btn ghost" id="r-again">Ver de novo</button>
      </div>
    </div></div>`}),n}function ge(){let e=I;if(!e)return;U();let t=O===`convidado`,i=(t?e.paraStory:e.topFotos.slice(0,3)).map(e=>({src:B(e),polaroid:!!e.polaroid})),a=t?`meu-olhar-${$(o.n1)}-${$(o.n2)}.jpg`:`retrospectiva-${$(o.n1)}-${$(o.n2)}.jpg`,s=t?{fotos:i,titulo:e.primeiro?`O CASAMENTO PELOS OLHOS DE ${e.primeiro.toUpperCase()}`:`O CASAMENTO PELOS MEUS OLHOS`,frase:`“Obrigado por ter visto por nós.”`,assinatura:`— ${o.n1} & ${o.n2}`}:{fotos:i,titulo:`O NOSSO DIA, POR QUEM ESTAVA LÁ`,frase:`“Obrigado por terem visto por nós.”`,assinatura:`— ${o.n1} & ${o.n2}`};E.openSheet(`<h4>Para o seu story</h4><p>${t?`Com as suas fotos e um obrigado dos noivos.`:`Com as fotos mais amadas e um obrigado de vocês.`}</p>
    <div class="story-wrap"><div class="story-load">Preparando…</div></div>
    <div class="share-actions"><button class="btn" id="sh-go" disabled>${C}Compartilhar</button><button class="btn alt" id="sh-save" disabled>Salvar</button></div>`),(async()=>{try{let e=await r(s,o),t=await n(e,`image/jpeg`,.92);e.width=e.height=1,window.__retro.ultimoStory=t;let i=URL.createObjectURL(t),c=new File([t],a,{type:`image/jpeg`}),l=x(`.story-wrap`);if(!l||!x(`#sheet.on`))return;l.innerHTML=`<img class="story-prev" src="${i}" alt="Prévia do story">`;let u=()=>{let e=document.createElement(`a`);e.href=i,e.download=a,document.body.appendChild(e),e.click(),e.remove()};x(`#sh-go`).disabled=x(`#sh-save`).disabled=!1,x(`#sh-go`).onclick=async()=>{if(navigator.canShare&&navigator.canShare({files:[c]}))try{await navigator.share({files:[c]})}catch{}else u(),E.toast(`Imagem salva. Abra o Instagram e poste no story.`)},x(`#sh-save`).onclick=u}catch(e){console.error(e);let t=x(`.story-wrap`);t&&(t.innerHTML=`<div class="story-load">Não deu pra gerar a imagem.</div>`)}})()}var $=e=>String(e).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``);window.__retro={get slides(){return k.map(e=>e.id)},get idx(){return A},get modo(){return O},get dados(){return I},ir:e=>K(e),ultimoStory:null};export{de as abrirConvidado,me as abrirNoivos,re as parar};