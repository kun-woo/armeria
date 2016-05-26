"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[1051],{66170:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return h}});var n,i=a(63366),r=(a(67294),a(64983)),l=a(20370),s=["components"],o={},p=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),c={_frontmatter:o},m=l.Z;function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)(m,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"date"},"29th July 2019"),(0,r.kt)("h2",{id:"new-features",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now specify decorators for all services in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Server")," in a functional way. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1882"},"#1882")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1900"},"#1900")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = new ServerBuilder();\nsb.service(...);\n// After:\nsb.decorator((delegate, ctx, req) -> {\n    ...\n    return delegate.serve(ctx, req);\n});\n// Before:\nsb.decorator(delegate -> new SimpleServiceDecorator<HttpRequest, HttpResponse>(delegate) {\n    @Override\n    public HttpResponse serve(ServiceRequestContext ctx, HttpRequest req) throws Exception {\n        ...\n        return delegate().serve(ctx, req);\n    }\n});\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now use ",(0,r.kt)("inlineCode",{parentName:"p"},"HealthCheckService")," which has richer functionality than its predecessor ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpHealthCheckService"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1878"},"#1878")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = new ServerBuilder();\nsb.service("/internal/l7check",\n           HealthCheckService.builder()\n                             .checkers(...)\n                             .healthyResponse(...)\n                             .unhealthyResponse(...)\n                             .longPolling(Durations.ofMinutes(1))\n                             .updatable(true)\n                             .build());\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Long-polling query support",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can wait until the server becomes healthy or unhealthy and get notified immediately."))),(0,r.kt)("li",{parentName:"ul"},"Easy customization of healthy/unhealthy responses"),(0,r.kt)("li",{parentName:"ul"},"Easy customization of update request handler"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You now know exact host you are sending your request to when using Armeria client. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1917"},"#1917")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It was previously not possible when you specified an ",(0,r.kt)("inlineCode",{parentName:"li"},"EndpointGroup")," as the destination."),(0,r.kt)("li",{parentName:"ul"},"Therefore, ",(0,r.kt)("inlineCode",{parentName:"li"},"ClientRequestContext.endpoint()")," may return ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," since this release when Armeria failed to determine the destination host."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClientRequestContext.endpointSelector()")," has been added so that you still know which ",(0,r.kt)("inlineCode",{parentName:"li"},"EndpointGroup")," you are connecting to."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"BraveClient")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BraveService")," now accept ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpTracing")," as well as ",(0,r.kt)("inlineCode",{parentName:"p"},"Tracing"),". ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1223"},"#1223")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1906"},"#1906")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Tracing tracing = ...;\n\n// Server-side\nServerBuilder sb = new ServerBuilder();\n//// Before\nsb.service("/", myService.decorate(BraveService.newDecorator(tracing)));\n//// After\nHttpTracing httpTracing = HttpTracing.create(tracing);\nsb.service("/", myService.decorate(BraveService.newDecorator(httpTracing)));\n\n// Client-side\nHttpClientBuilder cb = new HttpClientBuilder(...);\n//// Before\ncb.decorator(BraveClient.newDecorator(tracing, "myBackend"));\n//// After\ncb.decorator(BraveClient.newDecorator(httpTracing.clientOf("myBackend")));\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can now create a decorating ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," in a less verbose way by extending new ",(0,r.kt)("inlineCode",{parentName:"p"},"SimpleDecorating*")," classes. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1881"},"#1881")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1925"},"#1925")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SimpleDecoratingHttpService extends SimpleDecoratingService<HttpRequest, HttpResponse>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SimpleDecoratingRpcService extends SimpleDecoratingService<RpcRequest, RpcResponse>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SimpleDecoratingHttpClient extends SimpleDecoratingClient<HttpRequest, HttpResponse>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SimpleDecoratingRpcClient extends SimpleDecoratingClient<RpcRequest, RpcResponse>")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"RpcService")," has been added for your convenience. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1881"},"#1881")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1925"},"#1925")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RpcService extends Service<RpcRequest, RpcResponse>"))))),(0,r.kt)("h2",{id:"improvements",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#improvements","aria-label":"improvements permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The output type of ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestLog")," sanitizer functions has been relaxed to ",(0,r.kt)("inlineCode",{parentName:"li"},"?")," so that a user can write much simpler and more efficient sanitizer function. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1810"},"#1810")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1879"},"#1879"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// Before\nFunction<HttpHeaders, HttpHeaders> sanitizer = headers -> {\n    return headers.toBuilder().removeAndThen("authorization").build();\n};\n// After\nFunction<HttpHeaders, Object> sanitizer = headers -> {\n    // No need to construct a new HttpHeaders object.\n    return headers.toBuilder().removeAndThen("authorization").toString();\n};\n// Even more efficiently\nFunction<HttpHeaders, Object> sanitizer = headers -> "sanitized!";\n'))),(0,r.kt)("li",{parentName:"ul"},"A glob path mapping is not translated into a regex path mapping when combined with path prefix anymore. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1929"},"#1929")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ByteBufHttpData.toInputStream()")," does not perform extra memory copy anymore. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1918"},"#1918")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1919"},"#1919"))),(0,r.kt)("h2",{id:"bug-fixes",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Armeria client now sends ",(0,r.kt)("inlineCode",{parentName:"li"},"OPTIONS * HTTP/1.1")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"HEAD / HTTP/1.1"),", so that the initial protocol upgrade does not trigger business logic when a server has business logic bound at ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1895"},"#1895")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1896"},"#1896")),(0,r.kt)("li",{parentName:"ul"},"Response content is not sanitized twice anymore. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1879"},"#1879")),(0,r.kt)("li",{parentName:"ul"},"gRPC message compression is now enabled by default on the server side, so that the default behavior matches that of the upstream implementation. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1885"},"#1885")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1889"},"#1889")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"max-age")," attribute in a ",(0,r.kt)("inlineCode",{parentName:"li"},"set-cookie")," header is now handled correctly when using Spring WebFlux. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1904"},"#1904")),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the base URL of the received request is set incorrectly when using Spring WebFlux. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1904"},"#1904")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HttpHealthCheckedEndpoint")," does not leak connections and requests after ",(0,r.kt)("inlineCode",{parentName:"li"},"close()")," is called. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1899"},"#1899")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BraveClient")," does not trigger ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestLogAvailabilityException")," anymore when the request being traced has failed without sending any data. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1911"},"#1911")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1912"},"#1912")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@ConsumesJson")," annotation now accepts JSON documents with any charsets rather than only ",(0,r.kt)("inlineCode",{parentName:"li"},"UTF-8"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1920"},"#1920")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"IllegalStateException")," raised by ",(0,r.kt)("inlineCode",{parentName:"li"},"pushIfAbsent()")," is now propagated properly to the ",(0,r.kt)("inlineCode",{parentName:"li"},"CompletableFuture")," created by ",(0,r.kt)("inlineCode",{parentName:"li"},"RequestContext.makeContextAware()"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1920"},"#1920"))),(0,r.kt)("h2",{id:"deprecations",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Deprecations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HttpHealthCheckService")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SettableHttpHealthCheckService")," have been deprecated in favor of ",(0,r.kt)("inlineCode",{parentName:"li"},"HealthCheckService")," and its builder. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1878"},"#1878"))),(0,r.kt)("h2",{id:"breaking-changes",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClientRequestContext.endpoint()")," may return ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," since this release. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1917"},"#1917")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Endpoint")," returned by ",(0,r.kt)("inlineCode",{parentName:"li"},"ClientRequestContext.endpoint()")," now always refers to a single host, not an ",(0,r.kt)("inlineCode",{parentName:"li"},"EndpointGroup"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1917"},"#1917"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"ClientRequestContext.endpointSelector().group()")," to retrieve the related ",(0,r.kt)("inlineCode",{parentName:"li"},"EndpointGroup"),".")))),(0,r.kt)("h2",{id:"dependencies",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"gRPC 1.21.0 -> 1.22.1"),(0,r.kt)("li",{parentName:"ul"},"Netty 4.1.37 -> 4.1.38"),(0,r.kt)("li",{parentName:"ul"},"Tomcat 9.0.21 -> 9.0.22, 8.5.42 -> 8.5.43")),(0,r.kt)("h2",{id:"thank-you",style:{position:"relative"}},(0,r.kt)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},(0,r.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),(0,r.kt)(p,{usernames:["anuraaga","babjo","codefromthecrypt","hirakida","hyeonjames","ikhoon","imasahiro","kojilin","minwoox","trustin","woohhan"],mdxType:"ThankYou"}))}h.isMDXComponent=!0},20370:function(e,t,a){a(88025);var n=a(1923),i=a(25444),r=a(67294),l=a(55746),s=a(8284),o=a(96759),p=a(46731),c=a(9396),m=n.Z.Title,h=Object.keys(s)[0],u=d(h);function d(e){return e.substring(e.lastIndexOf("/")+1)}t.Z=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(l).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var k=(0,c.Z)(e.location),N=e.version||d(k);return N.match(/^[0-9]/)||(N=void 0),r.createElement(p.Z,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:N?N+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),N&&N!==u?r.createElement(o.Ch,null,"You're seeing the release note of an old version. Check out"," ",r.createElement(i.Link,{to:h},"the latest release note"),"."):"",N?r.createElement(m,{id:"release-notes",level:1},r.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),N," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2","/release-notes/1.17.1":"v1.17.1","/release-notes/1.17.0":"v1.17.0","/release-notes/1.16.0":"v1.16.0","/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-89-0-mdx-f483343376414f061e7a.js.map