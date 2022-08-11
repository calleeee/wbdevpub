import { g as getContext, c as create_ssr_component, a as subscribe } from "./index-27acdd93.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const throw_error = (verb) => {
  throw new Error(
    `Can only ${verb} session store in browser`
  );
};
const session = {
  subscribe(fn) {
    const store = getStores().session;
    return store.subscribe(fn);
  },
  set: () => throw_error("set"),
  update: () => throw_error("update")
};
const header_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-6dllrq.svelte-6dllrq{padding:0px;margin:0px;background-color:white}h1.svelte-6dllrq.svelte-6dllrq{padding:0px;margin:0px;font-size:40px;font-family:'Quicksand', sans-serif}header.svelte-6dllrq.svelte-6dllrq{display:flex;flex-direction:row;align-content:center;align-self:center;align-items:center;justify-content:center;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);height:70px;position:relative;z-index:99}#dropdown.svelte-6dllrq.svelte-6dllrq{position:absolute;right:0px}#dropdownButton.svelte-6dllrq.svelte-6dllrq{display:flex;flex-direction:column;gap:6px;height:70px;width:60px;justify-content:center;align-items:center}.dropdownContent.svelte-6dllrq.svelte-6dllrq{display:block;transform:scaleX(0);gap:10px;background-color:white;height:calc(100vh - 70px);position:absolute;top:70px;right:0px;transition:transform 200ms ease-in-out;transform-origin:right}.dropdownOption.svelte-6dllrq.svelte-6dllrq{margin-top:0px;margin-bottom:0px;padding:0px;padding-left:30px;padding-right:90px;transition:all 200ms}.dropdownOption.svelte-6dllrq.svelte-6dllrq:hover{box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2)}.admin.svelte-6dllrq.svelte-6dllrq:hover{box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2)}h2.svelte-6dllrq.svelte-6dllrq{margin:0px;padding:0px;font-size:35px;font-family:'Cairo',sans-serif}.admin.svelte-6dllrq.svelte-6dllrq{margin-top:0px;margin-bottom:0px;padding:0px;padding-left:30px;padding-right:90px;transition:all 200ms}.dot.svelte-6dllrq.svelte-6dllrq{height:7px;width:7px;background-color:rgb(24, 24, 24);border-radius:50%;display:block;transition:all 200ms}#dropdown.svelte-6dllrq:hover .dropdownContent.svelte-6dllrq{transform:scaleX(1)}#dropdown.svelte-6dllrq:hover .dot.svelte-6dllrq{position:absolute;top:29.5px;height:13px;width:13px}a.svelte-6dllrq.svelte-6dllrq{text-decoration:none;color:black}@media only screen and (orientation: portrait) and (max-width: 600px){.dropdownContent.svelte-6dllrq.svelte-6dllrq{width:100vw;transform:scaleY(0);transform-origin:top;height:fit-content}.dropdownContent.svelte-6dllrq.svelte-6dllrq:hover{transform:scaleY(1)}.admin.svelte-6dllrq.svelte-6dllrq{margin-bottom:10px}h2.svelte-6dllrq.svelte-6dllrq{font-size:30px}}@media only screen and (orientation: landscape) and (max-width: 800px){h2.svelte-6dllrq.svelte-6dllrq{font-size:20px}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `<main class="${"svelte-6dllrq"}"><header class="${"svelte-6dllrq"}"><a href="${"/"}" class="${"svelte-6dllrq"}"><h1 class="${"svelte-6dllrq"}">KREAKOM</h1></a>
        <div id="${"dropdown"}" class="${"svelte-6dllrq"}"><div id="${"dropdownButton"}" class="${"svelte-6dllrq"}"><span class="${"dot svelte-6dllrq"}"></span>
                <span class="${"dot svelte-6dllrq"}"></span>
                <span class="${"dot svelte-6dllrq"}"></span></div>
            <div class="${"dropdownContent svelte-6dllrq"}"><a href="${"/Kontakt"}" class="${"svelte-6dllrq"}"><div class="${"dropdownOption svelte-6dllrq"}"><h2 class="${"svelte-6dllrq"}">Kontakt</h2></div></a>
                <a href="${"/HR"}" class="${"svelte-6dllrq"}"><div class="${"dropdownOption svelte-6dllrq"}"><h2 class="${"svelte-6dllrq"}">HR</h2></div></a>
                <a href="${"/Rekrytering"}" class="${"svelte-6dllrq"}"><div class="${"dropdownOption svelte-6dllrq"}"><h2 class="${"svelte-6dllrq"}">Rekrytering</h2></div></a>
                <a href="${"/Ledarskap"}" class="${"svelte-6dllrq"}"><div class="${"dropdownOption svelte-6dllrq"}"><h2 class="${"svelte-6dllrq"}">Ledarskap</h2></div></a>
                <a href="${"/Bostadsutveckling"}" class="${"svelte-6dllrq"}"><div class="${"dropdownOption svelte-6dllrq"}"><h2 class="${"svelte-6dllrq"}">Bostadsutveckling</h2></div></a>
                <a href="${"/Information"}" class="${"svelte-6dllrq"}"><div class="${"dropdownOption svelte-6dllrq"}"><h2 class="${"svelte-6dllrq"}">Information</h2></div></a>
                <a href="${"/Referensuppdrag"}" class="${"svelte-6dllrq"}"><div class="${"dropdownOption svelte-6dllrq"}"><h2 class="${"svelte-6dllrq"}">Referensuppdrag</h2></div></a>
                ${!$session.user ? `<a href="${"/Login/login"}" class="${"svelte-6dllrq"}"><div class="${"admin svelte-6dllrq"}"><h2 class="${"svelte-6dllrq"}">Admin</h2></div></a>` : ``}
                ${$session.user ? `<a href="${"/Login/logout"}" class="${"svelte-6dllrq"}"><div class="${"admin svelte-6dllrq"}"><h2 class="${"svelte-6dllrq"}">Logga Ut</h2></div></a>` : ``}</div></div></header>
</main>`;
});
export {
  Header as H,
  session as s
};
