import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from "../../../../_app/immutable/chunks/index-27acdd93.js";
import { s as session, H as Header } from "../../../../_app/immutable/chunks/header-bbf6ddf3.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1rlduap{display:flex;flex-direction:column;height:calc(100vh - 70px);justify-content:center;align-items:center}.error.svelte-1rlduap{font-family:'Quicksand', sans-serif;color:tomato}form.svelte-1rlduap{display:flex;flex-direction:column;align-items:center;gap:10px}input.svelte-1rlduap{border:none;background-color:rgb(255, 255, 255);border-radius:10px;padding-left:20px;padding-top:10px;padding-bottom:12px;box-shadow:0px 3px 8px rgba(0, 0, 0, 0.255)}button.svelte-1rlduap{border:none;background-color:rgb(255, 255, 255);border-radius:10px;padding-top:8px;padding-bottom:9px;box-shadow:0px 3px 8px rgba(0, 0, 0, 0.255);transition:all 200ms ease-in-out}button.svelte-1rlduap:hover{background-color:rgb(49, 124, 255);color:white}",
  map: null
};
const load = ({ session: session2, props }) => {
  if (session2.user) {
    return { status: 302, redirect: "/" };
  }
  return { props };
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => value);
  let { error } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

  <main class="${"svelte-1rlduap"}"><form method="${"post"}" class="${"svelte-1rlduap"}"><div><input id="${"username"}" name="${"username"}" type="${"text"}" placeholder="${"Username"}" required class="${"svelte-1rlduap"}"></div>
    
        <div><input id="${"password"}" name="${"password"}" type="${"password"}" placeholder="${"Password"}" required class="${"svelte-1rlduap"}"></div>
    
        ${error ? `<p class="${"error svelte-1rlduap"}">${escape(error)}</p>` : ``}
    
        <button type="${"submit"}" class="${"svelte-1rlduap"}">Sign In</button></form>
  </main>`;
});
export {
  Login as default,
  load
};
