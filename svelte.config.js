import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
            base: dev ? "" : "/Api-country-w-svelteKit",
        },
        
    }
};

export default config;