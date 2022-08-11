export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","Images/.DS_Store","Images/Full Stack Web Development in the Cloud Course - Svelte, Postgres, Vercel, Gitpod - YouTube.html","Images/IMG_0340.JPG","Images/Unknown.jpeg","Images/bba1c527b67202a3_org.jpeg","Images/deeksha-pahariya-jXScMh_1GM4-unsplash.jpg","Images/ian-dooley-DJ7bWa-Gwks-unsplash.jpg","Images/jason-goodman-Oalh2MojUuk-unsplash.jpg","Images/jay-mantri-TFyi0QOx08c-unsplash.jpg","Images/thor-alvis-s2f7p_q7Xfc-unsplash.jpg","Images/thought-catalog-505eectW54k-unsplash.jpg","favicon.png"]),
	mimeTypes: {".html":"text/html",".JPG":"image/jpeg",".jpeg":"image/jpeg",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-5a3e5961.js","imports":["_app/immutable/start-5a3e5961.js","_app/immutable/chunks/index-b5f26bb7.js"],"stylesheets":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/11.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/5.js'),
			() => import('./server/nodes/6.js'),
			() => import('./server/nodes/9.js'),
			() => import('./server/nodes/10.js'),
			() => import('./server/nodes/7.js'),
			() => import('./server/nodes/8.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "Bostadsutveckling",
				pattern: /^\/Bostadsutveckling\/?$/,
				names: [],
				types: [],
				path: "/Bostadsutveckling",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "HR",
				pattern: /^\/HR\/?$/,
				names: [],
				types: [],
				path: "/HR",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "Information",
				pattern: /^\/Information\/?$/,
				names: [],
				types: [],
				path: "/Information",
				shadow: () => import('./server/entries/endpoints/Information/index.ts.js'),
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "Kontakt",
				pattern: /^\/Kontakt\/?$/,
				names: [],
				types: [],
				path: "/Kontakt",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "Ledarskap",
				pattern: /^\/Ledarskap\/?$/,
				names: [],
				types: [],
				path: "/Ledarskap",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "Referensuppdrag",
				pattern: /^\/Referensuppdrag\/?$/,
				names: [],
				types: [],
				path: "/Referensuppdrag",
				shadow: () => import('./server/entries/endpoints/Referensuppdrag/index.ts.js'),
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "Rekrytering",
				pattern: /^\/Rekrytering\/?$/,
				names: [],
				types: [],
				path: "/Rekrytering",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "Login/logout",
				pattern: /^\/Login\/logout\/?$/,
				names: [],
				types: [],
				load: () => import('./server/entries/endpoints/Login/logout/index.ts.js')
			},
			{
				type: 'page',
				id: "Login/login",
				pattern: /^\/Login\/login\/?$/,
				names: [],
				types: [],
				path: "/Login/login",
				shadow: () => import('./server/entries/endpoints/Login/login/index.ts.js'),
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "Login/register",
				pattern: /^\/Login\/register\/?$/,
				names: [],
				types: [],
				path: "/Login/register",
				shadow: () => import('./server/entries/endpoints/Login/register/index.ts.js'),
				a: [0,11],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
