import { c as create_ssr_component, v as validate_component } from "../../../_app/immutable/chunks/index-27acdd93.js";
import { H as Header } from "../../../_app/immutable/chunks/header-bbf6ddf3.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-aqlj99{display:grid;grid-template-columns:35% 65%}.image.svelte-aqlj99{display:flex;flex-direction:column;height:calc(100vh - 70px);justify-content:center;color:rgba(0, 0, 0, 0.481);box-shadow:5px 8px 16px 0px rgba(0,0,0,0.2)}.img.svelte-aqlj99{width:80%;margin-left:auto;margin-right:auto;box-shadow:0px 8px 10px 0px rgba(0,0,0,0.2);border-radius:4px}.name.svelte-aqlj99{margin:0px;padding:0px;font-family:'Cairo', sans-serif;margin-left:10%}.role.svelte-aqlj99{margin:0px;padding:0px;font-family:'Cairo', sans-serif;margin-left:10%}.fbLogo.svelte-aqlj99{font-size:100px;margin-left:auto;margin-right:auto;margin-bottom:8px;font-family:'Quicksand',sans-serif}.contact.svelte-aqlj99{display:grid;grid-template-columns:1fr 1fr;height:80%}.mail.svelte-aqlj99{margin:auto;font-family:'Quicksand',sans-serif;text-align:center}.symbolAt.svelte-aqlj99{font-size:90px;margin:0px;padding:0%;margin-bottom:34px}.Button.svelte-aqlj99{display:flex;flex-direction:column;background-color:rgb(255, 255, 255);width:310px;height:50px;justify-content:center;align-items:center;border-radius:10px;box-shadow:0px 2px 6px 0px rgba(0,0,0,0.2);transition:all 200ms}.phone.svelte-aqlj99{margin:auto;text-align:center}.symbolTel.svelte-aqlj99{font-size:98px;margin:0%;padding:0%;height:fit-content}.telText.svelte-aqlj99{font-family:'Quicksand', sans-serif}.facebook.svelte-aqlj99{display:flex;flex-direction:column;margin:auto}.fbText.svelte-aqlj99{font-family:'Quicksand',sans-serif}.click.svelte-aqlj99{text-decoration:none;color:black}.Button.svelte-aqlj99:hover{box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);background-color:rgb(239, 239, 239)}@media only screen and (max-width: 800px){img.svelte-aqlj99{display:none}.image.svelte-aqlj99{height:60px;align-items:center}.name.svelte-aqlj99{padding:0%;margin:0%}.role.svelte-aqlj99{padding:0%;margin:0%}.contact.svelte-aqlj99{grid-template-columns:1fr;margin-bottom:50px}.fbLogo.svelte-aqlj99{font-size:70px}.symbolAt.svelte-aqlj99{font-size:70px}.symbolTel.svelte-aqlj99{font-size:80px}.Button.svelte-aqlj99{width:270px}.fbText.svelte-aqlj99{font-size:25px}.telText.svelte-aqlj99{font-size:25px}.mailText.svelte-aqlj99{font-size:25px}main.svelte-aqlj99{display:flex;flex-direction:column}}@media only screen and (orientation: portrait){.contact.svelte-aqlj99{grid-template-columns:1fr}}",
  map: null
};
const Kontakt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="${"svelte-aqlj99"}"><div class="${"image svelte-aqlj99"}"><img src="${"/Images/bba1c527b67202a3_org.jpeg"}" alt="${"Johan Engstr\xF6m"}" class="${"img svelte-aqlj99"}">
        <p class="${"name svelte-aqlj99"}">Johan Engstr\xF6m</p>
        <p class="${"role svelte-aqlj99"}">\xC4gare och VD</p></div>
    <div class="${"contact svelte-aqlj99"}"><div class="${"mail svelte-aqlj99"}"><h1 class="${"symbolAt svelte-aqlj99"}">@</h1>
            <a href="${"mailto:johan@viddenbostad.se"}" class="${"click svelte-aqlj99"}"><div class="${"Button svelte-aqlj99"}"><h1 class="${"mailText svelte-aqlj99"}">Mejla</h1></div></a></div>
        <div class="${"phone svelte-aqlj99"}"><h1 class="${"symbolTel svelte-aqlj99"}">\u260E</h1>
            <a href="${"tel:+46761479397"}" class="${"click svelte-aqlj99"}"><div class="${"Button svelte-aqlj99"}"><h1 class="${"telText svelte-aqlj99"}">Ring</h1></div></a></div>
        <div class="${"facebook svelte-aqlj99"}"><h1 class="${"fbLogo svelte-aqlj99"}">f</h1>
            <a href="${"https://www.facebook.com/Kreakom-AB-334055227011855"}" class="${"click svelte-aqlj99"}"><div class="${"Button svelte-aqlj99"}"><h1 class="${"fbText svelte-aqlj99"}">V\xE5r Facebooksida</h1></div></a></div>
        <div class="${"facebook svelte-aqlj99"}"><h1 class="${"fbLogo svelte-aqlj99"}">in</h1>
            <a href="${"https://se.linkedin.com/in/johan-engstrom-1195342/sv?trk=people-guest_people_search-card"}" class="${"click svelte-aqlj99"}"><div class="${"Button svelte-aqlj99"}"><h1 class="${"fbText svelte-aqlj99"}">V\xE5r LinkedIn</h1></div></a></div></div>
</main>`;
});
export {
  Kontakt as default
};
