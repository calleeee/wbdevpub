import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component, d as each } from "../../../_app/immutable/chunks/index-27acdd93.js";
import { s as session, H as Header } from "../../../_app/immutable/chunks/header-bbf6ddf3.js";
import { I as Icon } from "../../../_app/immutable/chunks/icon-bb2bb200.js";
const referens_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-1f3tioh.svelte-1f3tioh{display:flex;flex-direction:column;gap:10px;align-items:center;width:300px;height:250px;background-color:rgb(255, 255, 255);box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);border-radius:15px;font-family:'Quicksand', sans-serif;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;overflow:hidden}h1.svelte-1f3tioh.svelte-1f3tioh{margin:0%;margin-top:20px;padding:0%;font-size:25px}p.svelte-1f3tioh.svelte-1f3tioh{margin:0%;padding:0%;font-size:15px;width:90%}.circle.svelte-1f3tioh.svelte-1f3tioh{width:24px;height:24px;display:grid;place-content:center;padding:var(--spacing-16);border-radius:50%;transition:all 0.3s}.remove.svelte-1f3tioh.svelte-1f3tioh:hover{color:hsl(0 100% 50%)}.remove.svelte-1f3tioh:hover .circle.svelte-1f3tioh{background-color:hsla(0 100% 50% / 4%)}button.svelte-1f3tioh.svelte-1f3tioh{border:none;background-color:rgba(255, 255, 255, 0)}form.svelte-1f3tioh.svelte-1f3tioh{margin-top:120px}",
  map: null
};
const Referens = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let { ref } = $$props;
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  $$result.css.add(css$1);
  $$unsubscribe_session();
  return `<main><div class="${"card svelte-1f3tioh"}"><h1 class="${"svelte-1f3tioh"}">${escape(ref.title)}</h1>
        <p class="${"svelte-1f3tioh"}">${escape(ref.descrip)}</p>
        
        ${$session.user ? `<form action="${"/Referensuppdrag?_method=delete"}" method="${"post"}" class="${"svelte-1f3tioh"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", ref.id, 0)}>
                <button aria-label="${"Remove tweet"}" class="${"btn remove svelte-1f3tioh"}" title="${"Remove"}" type="${"submit"}"><div class="${"circle svelte-1f3tioh"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      width: "24",
      height: "24",
      name: "remove"
    },
    {},
    {}
  )}</div></button></form>` : ``}</div>

     
</main>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1krbggg.svelte-1krbggg{margin:0%;padding:0%;display:flex;flex-direction:column;align-items:center;justify-content:center}.pageTitle.svelte-1krbggg.svelte-1krbggg{display:flex;flex-direction:column;align-items:center;width:100%;color:black;font-family:'Quicksand',sans-serif;font-size:17px;box-shadow:0px 6px 8px 0px rgba(0,0,0,0.2)}.pageTitle.svelte-1krbggg h1.svelte-1krbggg{margin-top:11px;margin-bottom:10px;padding:0%}.content.svelte-1krbggg.svelte-1krbggg{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:30px;margin-top:40px;margin-bottom:50px}form.svelte-1krbggg.svelte-1krbggg{display:flex;flex-direction:column;margin-bottom:50px}@media only screen and (max-width: 600px){.content.svelte-1krbggg.svelte-1krbggg{grid-template-columns:1fr}}@media only screen and (max-width: 1200px) and (min-width: 601px){.content.svelte-1krbggg.svelte-1krbggg{grid-template-columns:1fr 1fr}}",
  map: null
};
const Referensuppdrag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let { refs } = $$props;
  if ($$props.refs === void 0 && $$bindings.refs && refs !== void 0)
    $$bindings.refs(refs);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"svelte-1krbggg"}"><div class="${"pageTitle svelte-1krbggg"}"><h1 class="${"svelte-1krbggg"}">Referensuppdrag</h1></div>
    <div class="${"content svelte-1krbggg"}">${each(refs, (ref) => {
    return `${validate_component(Referens, "Referens").$$render($$result, { ref }, {}, {})}`;
  })}</div>

    ${$session.user ? `<form action="${"/Referensuppdrag"}" method="${"POST"}" class="${"svelte-1krbggg"}"><input type="${"text"}" name="${"title"}" placeholder="${"Titel"}">
            <textarea name="${"descrip"}" placeholder="${"Beskrivning"}"></textarea>
            <input type="${"submit"}" name="${"submit"}"></form>` : ``}
</main>`;
});
export {
  Referensuppdrag as default
};
