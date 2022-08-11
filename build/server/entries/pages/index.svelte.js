import { c as create_ssr_component, e as escape, v as validate_component } from "../../_app/immutable/chunks/index-27acdd93.js";
import { H as Header } from "../../_app/immutable/chunks/header-bbf6ddf3.js";
const card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".cardBody.svelte-1c9ozon.svelte-1c9ozon{height:250px;width:300px;display:flex;flex-direction:column;align-items:center;border-radius:15px;box-shadow:0px 3px 10px 0px rgba(0,0,0,0.2);transition:all 200ms}h1.svelte-1c9ozon.svelte-1c9ozon{margin-top:33%;padding:0px;font-family:'Cairo', sans-serif}p.svelte-1c9ozon.svelte-1c9ozon{color:rgba(255, 255, 255, 0);transition:all 200ms;padding-top:23px;font-family:'Quicksand', sans-serif}.cardBody.svelte-1c9ozon:hover p.svelte-1c9ozon{color:black}.cardBody.svelte-1c9ozon.svelte-1c9ozon:hover{box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2)}@media only screen and (orientation: portrait) and (max-width: 600px){.cardBody.svelte-1c9ozon.svelte-1c9ozon{height:fit-content}p.svelte-1c9ozon.svelte-1c9ozon{display:none}h1.svelte-1c9ozon.svelte-1c9ozon{margin-top:20px;margin-bottom:20px}}@media only screen and (orientation: landscape) and (max-width: 800px){.cardBody.svelte-1c9ozon.svelte-1c9ozon{height:fit-content;width:190px}p.svelte-1c9ozon.svelte-1c9ozon{display:none}h1.svelte-1c9ozon.svelte-1c9ozon{margin-top:20px;margin-bottom:20px;font-size:20px}}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { color } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$1);
  return `<main><div class="${"cardBody svelte-1c9ozon"}" style="${"background-color: " + escape(color, true) + ";"}"><h1 class="${"cardTitle svelte-1c9ozon"}">${escape(title)}</h1>
        <p class="${"description svelte-1c9ozon"}">Klicka h\xE4r</p></div>
</main>`;
});
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: `#firstSegment.svelte-a42yku.svelte-a42yku{display:flex;flex-direction:column;height:calc(100vh - 70px);background-image:linear-gradient(0deg, rgba(255,255,255,0) 19%, rgba(255,255,255,1) 100%), url("/Images/jay-mantri-TFyi0QOx08c-unsplash.jpg");background-size:cover;align-items:center;justify-content:center;overflow:hidden}.content.svelte-a42yku.svelte-a42yku{display:flex;flex-direction:row;gap:20px}a.svelte-a42yku.svelte-a42yku{color:black;text-decoration:none}.kontakt.svelte-a42yku.svelte-a42yku{background-color:white;font-family:'Quicksand', sans-serif;border-radius:7px;transition:all 200ms;margin-top:80px;box-shadow:0px 3px 10px 0px rgba(0,0,0,0.2)}.kontakt.svelte-a42yku h1.svelte-a42yku{margin:0px;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:12px;font-size:25px}.kontakt.svelte-a42yku.svelte-a42yku:hover{background-color:rgb(242, 242, 242);box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2)}@media only screen and (orientation: portrait) and (max-width: 600px){#firstSegment.svelte-a42yku.svelte-a42yku{height:100vh;background-size:cover}.content.svelte-a42yku.svelte-a42yku{flex-direction:column}.kontakt.svelte-a42yku.svelte-a42yku{margin-top:20px}}@media only screen and (min-width: 601px) and (max-width: 1100px){.kontakt.svelte-a42yku.svelte-a42yku{margin-top:10px}.content.svelte-a42yku.svelte-a42yku{display:grid;grid-template-columns:1fr 1fr}}`,
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

    <div id="${"firstSegment"}" class="${"svelte-a42yku"}"><div class="${"content svelte-a42yku"}"><a href="${"/HR"}" class="${"svelte-a42yku"}">${validate_component(Card, "Card").$$render($$result, { title: "HR", color: "white" }, {}, {})}</a>
            <a href="${"/Rekrytering"}" class="${"svelte-a42yku"}">${validate_component(Card, "Card").$$render($$result, { title: "Rekrytering", color: "white" }, {}, {})}</a>
            <a href="${"/Ledarskap"}" class="${"svelte-a42yku"}">${validate_component(Card, "Card").$$render($$result, { title: "Ledarskap", color: "white" }, {}, {})}</a>
            <a href="${"/Bostadsutveckling"}" class="${"svelte-a42yku"}">${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Bostadsutveckling",
      color: "white"
    },
    {},
    {}
  )}</a></div>
        <a href="${"/Kontakt"}" class="${"kontaktClick svelte-a42yku"}"><div class="${"kontakt svelte-a42yku"}"><h1 class="${"svelte-a42yku"}">Kontakt</h1></div></a></div>
</main>`;
});
export {
  Routes as default
};
