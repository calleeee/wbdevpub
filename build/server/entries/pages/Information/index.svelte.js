import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, v as validate_component, d as each } from "../../../_app/immutable/chunks/index-27acdd93.js";
import { s as session, H as Header } from "../../../_app/immutable/chunks/header-bbf6ddf3.js";
import { I as Icon } from "../../../_app/immutable/chunks/icon-bb2bb200.js";
const info_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "main.svelte-1rpf54n.svelte-1rpf54n{width:100%;display:flex;flex-direction:row}.info.svelte-1rpf54n.svelte-1rpf54n{background-color:rgb(254, 254, 254);width:70vw;height:fit-content;border-radius:15px;box-shadow:0px 4px 10px 0px rgba(0,0,0,0.2);font-family:'Quicksand',sans-serif}.text.svelte-1rpf54n.svelte-1rpf54n{margin-left:2%;max-width:98%}.date.svelte-1rpf54n.svelte-1rpf54n{color:rgba(0, 0, 0, 0.475);margin:0%;padding:0%;margin-left:10px;margin-top:10px}.circle.svelte-1rpf54n.svelte-1rpf54n{width:24px;height:24px;display:grid;place-content:center;padding:var(--spacing-16);border-radius:50%;transition:all 0.3s}.remove.svelte-1rpf54n.svelte-1rpf54n:hover{color:hsl(0 100% 50%)}.remove.svelte-1rpf54n:hover .circle.svelte-1rpf54n{background-color:hsla(0 100% 50% / 4%)}button.svelte-1rpf54n.svelte-1rpf54n{border:none;background-color:rgba(255, 255, 255, 0)}@media only screen and (max-width: 600px){.info.svelte-1rpf54n.svelte-1rpf54n{width:90vw}.text.svelte-1rpf54n.svelte-1rpf54n{margin-left:7.5%;max-width:85%}.date.svelte-1rpf54n.svelte-1rpf54n{margin-left:10px}}",
  map: null
};
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let { info } = $$props;
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  $$result.css.add(css$1);
  $$unsubscribe_session();
  return `<main class="${"svelte-1rpf54n"}"><div class="${"info svelte-1rpf54n"}"><p class="${"date svelte-1rpf54n"}">${escape(info.posted)}</p>
        <p class="${"text svelte-1rpf54n"}">${escape(info.content)}</p></div>

    ${$session.user ? `<form action="${"/Information?_method=delete"}" method="${"post"}"><input type="${"hidden"}" name="${"id"}"${add_attribute("value", info.id, 0)}>
            <button aria-label="${"Remove tweet"}" class="${"btn remove svelte-1rpf54n"}" title="${"Remove"}" type="${"submit"}"><div class="${"circle svelte-1rpf54n"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      width: "24",
      height: "24",
      name: "remove"
    },
    {},
    {}
  )}</div></button></form>` : ``}    
    
</main>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ycd7hj.svelte-ycd7hj{display:flex;flex-direction:column;align-items:center;height:calc(100vh - 70px)}.pageTitle.svelte-ycd7hj.svelte-ycd7hj{display:flex;flex-direction:column;align-items:center;width:100%;color:black;font-family:'Quicksand',sans-serif;font-size:17px;box-shadow:0px 6px 8px 0px rgba(0, 0, 0, 0.146)}.pageTitle.svelte-ycd7hj h1.svelte-ycd7hj{margin-top:10px;margin-bottom:10px;padding:0%}form.svelte-ycd7hj.svelte-ycd7hj{margin-top:50px}.infoStream.svelte-ycd7hj.svelte-ycd7hj{margin-top:5%;display:flex;flex-direction:column;gap:20px}",
  map: null
};
const Information = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  let { infos } = $$props;
  if ($$props.infos === void 0 && $$bindings.infos && infos !== void 0)
    $$bindings.infos(infos);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"svelte-ycd7hj"}"><div class="${"pageTitle svelte-ycd7hj"}"><h1 class="${"svelte-ycd7hj"}">Information</h1></div>
    <div class="${"infoStream svelte-ycd7hj"}">${each(infos, (info) => {
    return `${validate_component(Info, "Info").$$render($$result, { info }, {}, {})}`;
  })}</div>

    ${$session.user ? `<form action="${"/Information"}" method="${"POST"}" class="${"svelte-ycd7hj"}"><textarea type="${"textarea"}" rows="${"6"}" id="${"info"}" name="${"info"}" placeholder="${"Info (1 stycke)"}"></textarea>
        <input type="${"submit"}" value="${"Submit"}"></form>` : ``}
</main>`;
});
export {
  Information as default
};
