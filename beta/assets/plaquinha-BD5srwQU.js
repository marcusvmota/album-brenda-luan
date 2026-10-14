import{n as e,r as t}from"./evento-Df0FEiAg.js";import{t as n}from"./qr-BfAQ0H7T.js";var r=(e,t=document)=>t.querySelector(e),i=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),a={A6:[105,148],A5:[148,210]};function o(){var a;document.title=`Plaquinha · ${e.n1} & ${e.n2}`;let o=((a=new URLSearchParams(location.search).get(`papel`))==null?void 0:a.toUpperCase())===`A5`?`A5`:`A6`,l=t.replace(/^https?:\/\//,``).replace(/\/$/,``);document.body.insertAdjacentHTML(`beforeend`,`
    <div class="pq-palco" id="pq-palco">
      <div class="pq-barra">
        <div class="pq-papel" role="group" aria-label="Tamanho do papel">
          <button data-papel="A6">A6 · 10,5 × 14,8 cm</button><button data-papel="A5">A5 · 14,8 × 21 cm</button>
        </div>
        <button class="btn" id="pq-imprimir">Imprimir</button>
      </div>
      <div class="pq-escala" id="pq-escala">
        <article class="pq-card" id="pq-card">
          <div class="pq-kick">Álbum dos convidados</div>
          <div class="pq-names">${i(e.n1)} <em>&amp;</em> ${i(e.n2)}</div>
          <div class="pq-meta">${i(e.meta)}</div>
          <div class="pq-rule"></div>
          <p class="pq-q">Este álbum é feito por vocês.<br>Fotografe, escreva, guarde com a gente.</p>
          <div class="pq-qr">${n(t,{titulo:`QR Code do álbum`,margem:2})}</div>
          <div class="pq-link">${i(l)}</div>
          <div class="pq-steps">
            <div><b>1</b>Aponte a câmera do celular</div>
            <div><b>2</b>Digite seu nome</div>
            <div><b>3</b>Mande suas fotos e recados</div>
          </div>
          <div class="pq-foot"><span>Sem cadastro e sem baixar app</span></div>
        </article>
      </div>
      <p class="pq-dica">No diálogo de impressão: papel ${o}, margens “Nenhuma”, escala 100%.</p>
    </div>`),r(`#pq-imprimir`).addEventListener(`click`,()=>window.print()),r(`.pq-papel`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-papel]`);t&&s(t.dataset.papel)}),s(o),addEventListener(`resize`,c),window.__plaquinha={definirPapel:s,get papel(){return document.body.dataset.papel}}}function s(e){let[t,n]=a[e]||a.A6;document.body.dataset.papel=e,document.documentElement.style.setProperty(`--pw`,`${t}mm`),document.documentElement.style.setProperty(`--ph`,`${n}mm`),document.documentElement.style.setProperty(`--u`,`${t/105}mm`);let i=r(`#pq-pagina`);i||(i=document.createElement(`style`),i.id=`pq-pagina`,document.head.appendChild(i)),i.textContent=`@page{size:${t}mm ${n}mm;margin:0}`,document.querySelectorAll(`[data-papel]`).forEach(t=>t.classList.toggle(`on`,t.dataset.papel===e));let o=r(`.pq-dica`);o&&(o.textContent=`No diálogo de impressão: papel ${e}, margens “Nenhuma”, escala 100%.`);let s=new URL(location.href);s.searchParams.set(`papel`,e),history.replaceState(null,``,s),c()}function c(){let e=r(`#pq-card`),t=r(`#pq-escala`);if(!e)return;e.style.transform=``;let n=e.offsetWidth,i=e.offsetHeight,a=innerWidth-32,o=innerHeight-r(`.pq-barra`).offsetHeight-90,s=Math.min(1.6,a/n,Math.max(.3,o/i));e.style.transform=`scale(${s})`,t.style.width=`${n*s}px`,t.style.height=`${i*s}px`}export{o as iniciar};