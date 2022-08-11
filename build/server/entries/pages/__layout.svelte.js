import { c as create_ssr_component } from "../../_app/immutable/chunks/index-27acdd93.js";
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{padding:0%;margin:0%}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"> 
<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin> 
<link href="${"https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap"}" rel="${"stylesheet"}">

<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"> 
<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin> 
<link href="${"https://fonts.googleapis.com/css2?family=Cairo:wght@500&display=swap"}" rel="${"stylesheet"}">




    ${slots.default ? slots.default({}) : ``}`;
});
export {
  _layout as default
};
