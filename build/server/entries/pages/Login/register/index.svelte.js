import { c as create_ssr_component, e as escape } from "../../../../_app/immutable/chunks/index-27acdd93.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-8viesj{color:tomato}",
  map: null
};
const load = ({ session, props }) => {
  if (session.user) {
    return { status: 302, redirect: "/" };
  }
  return { props };
};
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  let { success } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0)
    $$bindings.success(success);
  $$result.css.add(css);
  return `<form method="${"post"}"><div><label for="${"username"}">Username</label>
        <input id="${"username"}" name="${"username"}" type="${"text"}" required></div>
    
      <div><label for="${"password"}">Password</label>
        <input id="${"password"}" name="${"password"}" type="${"password"}" required></div>
    
      ${error ? `<p class="${"error svelte-8viesj"}">${escape(error)}</p>` : ``}
    
      ${success ? `<p>Thank you for signing up!</p>
        <p><a href="${"/auth/login"}">You can log in.</a></p>` : ``}
    
      <button type="${"submit"}">Sign Up</button>
    </form>`;
});
export {
  Register as default,
  load
};
