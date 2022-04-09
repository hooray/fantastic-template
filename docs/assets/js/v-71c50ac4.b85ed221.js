"use strict";(self.webpackChunkfantastic_template_docs=self.webpackChunkfantastic_template_docs||[]).push([[748],{8507:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-71c50ac4",path:"/guide/router.html",title:"路由",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"基于文件系统的路由",slug:"基于文件系统的路由",children:[]}],filePathRelative:"guide/router.md",git:{updatedTime:null,contributors:[]}}},9514:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var t=a(1655);const p=(0,t._)("h1",{id:"路由",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#路由","aria-hidden":"true"},"#"),(0,t.Uk)(" 路由")],-1),e=(0,t._)("p",null,[(0,t.Uk)("路由实现了自动注册，路由配置存放在 "),(0,t._)("code",null,"/src/router/modules/"),(0,t.Uk)(" 目录下，每一个 js 文件会被视为一个路由模块，可参考 "),(0,t._)("code",null,"/src/router/modules/example.js"),(0,t.Uk)(" 文件。")],-1),o=(0,t.Uk)("更多使用技巧请移步至 Vue-router "),c={href:"https://next.router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("官方文档"),i=(0,t.Uk)("。"),u=(0,t._)("h2",{id:"基于文件系统的路由",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#基于文件系统的路由","aria-hidden":"true"},"#"),(0,t.Uk)(" 基于文件系统的路由")],-1),r=(0,t.Uk)("该特性由 "),k={href:"https://github.com/hannoeru/vite-plugin-pages",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("vite-plugin-pages"),d=(0,t.Uk)(" 和 "),v={href:"https://github.com/JohnCampionJr/vite-plugin-vue-layouts",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("vite-plugin-vue-layouts"),m=(0,t.Uk)(" 提供支持。"),x=(0,t.uE)('<p>传统使用路由的方式需要手动编写路由，而基于文件系统的路由则会根据文件的目录结构自动生成路由结构，从而节省开发周期。</p><p>本模版默认未开启该模式，如果需要启用，到 <code>/src/router/index.js</code> 文件里找到下面代码片段，通过开启/关闭注释修改成下面这样：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\n<span class="token comment">// 注释以下代码</span>\n<span class="token comment">// const routesContext = import.meta.globEager(&#39;./modules/*.js&#39;)</span>\n<span class="token comment">// Object.keys(routesContext).forEach(v =&gt; {</span>\n<span class="token comment">//     routes.push(routesContext[v].default)</span>\n<span class="token comment">// })</span>\n<span class="token comment">// routes.push({</span>\n<span class="token comment">//     path: &#39;/:pathMatch(.*)*&#39;,</span>\n<span class="token comment">//     component: () =&gt; import(&#39;@/views/[...all].vue&#39;),</span>\n<span class="token comment">//     meta: {</span>\n<span class="token comment">//         title: &#39;找不到页面&#39;</span>\n<span class="token comment">//     }</span>\n<span class="token comment">// })</span>\n<span class="token comment">// routes = routes.flat()</span>\n\n<span class="token comment">// 开启以下代码</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> setupLayouts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;virtual:generated-layouts&#39;</span>\n<span class="token keyword">import</span> generatedRoutes <span class="token keyword">from</span> <span class="token string">&#39;virtual:generated-pages&#39;</span>\ngeneratedRoutes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token operator">?.</span>meta<span class="token operator">?.</span>layout <span class="token operator">!=</span> <span class="token boolean">false</span> <span class="token operator">?</span> <span class="token function">setupLayouts</span><span class="token punctuation">(</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> v<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div></div><p>启用基于文件系统的路由后，<code>/src/router/modules/</code> 目录将不再被需要，而 <code>/src/views/</code> 目录下的文件会自动被注册成路由。</p><div class="language-text ext-text"><pre class="language-text"><code>文件系统                           路由地址                          路由 name\n\nviews\n├─ example\n│    ├─ components\n│    │    └─ List\n│    │         └─ index.vue\n│    ├─ params\n│    │    └─ [id].vue              /example/params/:id              example-params\n│    ├─ axios.vue                  /example/axios                   example-axios\n│    ├─ cookie.vue                 /example/cookie                  example-cookie\n│    └─ svgicon.vue                /example/svgicon                 example-svgicon\n├─ [...all].vue                    /:all(.*)*                       all\n├─ index.vue                       /                                index\n└─ login.vue                       /login                           login\n</code></pre></div><p>通过上面的示例，可以看出几个特性：</p><ul><li>使用路由参数需通过 <code>[ ]</code> 将参数名包裹，并设为文件名</li><li>文件夹不会生成路由，例如 example 文件夹并没有生成 <code>/example</code> 路由</li><li>路由 name 会根据文件的目录结构自动生成，并用 <code>-</code> 连接，可确保 name 的唯一性</li><li>所有 components 目录均不会生成路由</li></ul><hr><p>默认生成的所有路由均为嵌套路由，父级 component 指向 <code>/src/layout/index.vue</code> 组件，即：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 生成的路由</span>\n<span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/layout/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/views/login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                layout<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>你可以在 SFC 单文件组件里设置 layout ：</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span><span class="token punctuation">&gt;</span></span>\n{\n    meta: {\n        layout: &#39;example&#39;\n    }\n}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>login 页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 生成的路由</span>\n<span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/layout/example.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/views/login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                layout<span class="token operator">:</span> <span class="token string">&#39;example&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div></div><p>同样也可以设置成 <code>layout: false</code> ，这样该路由就不会生成嵌套路由。</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span><span class="token punctuation">&gt;</span></span>\n{\n    meta: {\n        layout: false\n    }\n}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>login 页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 生成的路由</span>\n<span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/views/login.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        layout<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><hr><p>SFC 单文件组件里的 <code>&lt;route&gt;&lt;/route&gt;</code> 接收标准路由配置数据，所以你可以在里面配置符合路由规则的参数，例如：</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token comment">&lt;!-- /src/views/example/params.vue --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>route</span><span class="token punctuation">&gt;</span></span>\n{\n    path: &#39;/example/params/:id&#39;,\n    name: &#39;exampleParams&#39;,\n    meta: {\n        layout: &#39;example&#39;,\n        title: &#39;这是 params 页面&#39;,\n        requireLogin: true\n    }\n}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>route</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 生成的路由</span>\n<span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/example/params/:id&#39;</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/layout/example.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            path<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/src/views/example/params.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            name<span class="token operator">:</span> <span class="token string">&#39;exampleParams&#39;</span><span class="token punctuation">,</span>\n            meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                layout<span class="token operator">:</span> <span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;这是 params 页面&#39;</span><span class="token punctuation">,</span>\n                requireLogin<span class="token operator">:</span> <span class="token boolean">true</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>不过既然使用了基于文件系统的路由，不建议再手动去设置 <code>path</code> 和 <code>name</code> ，更多的使用场景应该是根据业务需求去扩展 <code>meta</code> 对象里的属性。</p>',21),b={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,(0,t._)("p",null,[o,(0,t._)("a",c,[l,(0,t.Wm)(a)]),i]),u,(0,t._)("blockquote",null,[(0,t._)("p",null,[r,(0,t._)("a",k,[g,(0,t.Wm)(a)]),d,(0,t._)("a",v,[h,(0,t.Wm)(a)]),m])]),x],64)}}}}]);