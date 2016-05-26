"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[5809],{24233:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n,r=a(63366),i=(a(67294),a(64983)),s=a(20370),l=["components"],o={},p=(n="ThankYou",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),u={_frontmatter:o},m=s.Z;function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(m,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"date"},"4th October 2019"),(0,i.kt)("h2",{id:"new-features",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#new-features","aria-label":"new features permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"New features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now decorate multiple services by path mapping. See the ",(0,i.kt)("a",{parentName:"p",href:"https://armeria.dev/docs/server-decorator#decorating-multiple-services-by-path-mapping"},"documentation")," for more information. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/582"},"#582")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2040"},"#2040")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2057"},"#2057")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = new ServerBuilder();\n// Register vipService and memberService under \'/users\' path\nsb.annotatedService("/users/vip", vipService)\n  .annotatedService("/users/members", memberService);\n\n// Decorate all services under \'/users\' path\nsb.decoratorUnder("/users", (delegate, ctx, req) -> {\n    if (!authenticate(req)) {\n        return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n    }\n    return delegate.serve(ctx, req);\n});\n')),(0,i.kt)("p",{parentName:"li"},"You can also use fluent route builder with ",(0,i.kt)("inlineCode",{parentName:"p"},"routeDecorator()")," to decorate more than one service by path mapping."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Decorate services under '/users' path with fluent route builder\nsb.routeDecorator()\n  .pathPrefix(\"/users\")\n  .build((delegate, ctx, req) -> {\n      if (!authenticate(req)) {\n          return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n      }\n      return delegate.serve(ctx, req);\n  });\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now get the current ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpRequest")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RpcRequest")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestContext")," so you don’t need to downcast ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpRequest")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"RpcRequest"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2089"},"#2089")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2120"},"#2120")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Before:\nRequest req = ctx.request();\nif (req instanceof HttpRequest) {\n    RequestHeaders headers = (HttpRequest) req).headers();\n}\n// After:\nRequestHeaders headers = ctx.request().headers();\n\n// Before:\nif (req instanceof RpcRequest) {\n    String rpcMethod = (RpcRequest) requestContent).method();\n}\n// After:\n// `rpcRequest()` method will return `null` when the request being handled is not\n// an RPC request or not decoded into an RPC request yet.\nString rpcMethod = ctx.rpcRequest().method();\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now set example headers when using ",(0,i.kt)("inlineCode",{parentName:"p"},"{Annotated,Grpc,Thrift}ServiceRegisrationBean")," for Spring Boot integration. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2100"},"#2100")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic AnnotatedServiceRegistrationBean annotatedService() {\n    return new AnnotatedServiceRegistrationBean()\n               .setServiceName("annotatedService")\n               .setService(new AnnotatedService())\n               // Add example headers for annotated service\n               .addExampleHeaders("x-additional-header", "headerVal")\n               .addExampleHeaders("get", "x-additional-header", "headerVal");\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now create the following classes using the ",(0,i.kt)("inlineCode",{parentName:"p"},"builder()")," method instead of their ",(0,i.kt)("inlineCode",{parentName:"p"},"*Builder")," constructors. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1719"},"#1719")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2085"},"#2085")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CircuitBreaker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CircuitBreakerHttpClient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CircuitBreakerRpcClient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DnsAddressEndpointGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DnsServiceEndpointGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DnsTextEndpointGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GrpcService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RetryingHttpClient")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RetryingRpcClient"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Before:\nServer server = new ServerBuilder()\n                      .service("/hello", (ctx, req) -> HttpResponse.of(OK))\n                      .build();\n// After:\nServer server = Server.builder()\n                      .service("/hello", (ctx, req) -> HttpResponse.of(OK))\n                      .build();\n')))))),(0,i.kt)("h2",{id:"improvement",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#improvement","aria-label":"improvement permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Improvement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can use Java 9 version specific ",(0,i.kt)("inlineCode",{parentName:"li"},"RequestContextAwareFuture")," for ",(0,i.kt)("a",{parentName:"li",href:"https://www.baeldung.com/java-9-completablefuture"},"the recent changes of CompletableFuture API"),", thanks to the ",(0,i.kt)("a",{parentName:"li",href:"https://openjdk.java.net/jeps/238"},"Multi-Release JAR Files"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1991"},"#1991")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2052"},"#2052")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2127"},"#2127"))),(0,i.kt)("h2",{id:"bug-fixes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ResponseTimeoutException")," is not logged more than once anymore when the response has been timed out. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2000"},"#2000")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2138"},"#2138")),(0,i.kt)("li",{parentName:"ul"},"You no longer see ",(0,i.kt)("inlineCode",{parentName:"li"},"AbortedStreamException")," while sending long-lived requests with ",(0,i.kt)("inlineCode",{parentName:"li"},"RetryingHttpClient"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2134"},"#2134")),(0,i.kt)("li",{parentName:"ul"},"You can now see a warning message when JSON request conversion fails in an annotated service. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2041"},"#2041")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2131"},"#2131"))),(0,i.kt)("h2",{id:"deprecations",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AbstractBindingBuilder.pathUnder(String prefix)")," has been deprecated in favor of ",(0,i.kt)("inlineCode",{parentName:"li"},"pathPrefix(String prefix)"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2040"},"#2040")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RouteBuilder.prefix(String prefix, ...)")," has been deprecated in favor of ",(0,i.kt)("inlineCode",{parentName:"li"},"pathPrefix(String prefix, ...)"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2040"},"#2040")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RouteBuilder.pathWithPrefix(String prefix, String pathPattern)")," has been deprecated in favor of ",(0,i.kt)("inlineCode",{parentName:"li"},"path(String prefix, String pathPattern)"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2040"},"#2040")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"new *Builder()")," constructors which are mentioned in 'New Features' have been deprecated in favor of ",(0,i.kt)("inlineCode",{parentName:"li"},"*.builder()"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1719"},"#1719")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2085"},"#2085"))),(0,i.kt)("h2",{id:"breaking-changes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#breaking-changes","aria-label":"breaking changes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Breaking changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"armeria-zipkin")," has been removed for further clean-up. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2120"},"#2120")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RequestContext.request()")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpRequest")," instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"Request"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2120"},"#2120"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RequestContext.updateRequest()")," always updates an ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpRequest"),". It returns ",(0,i.kt)("inlineCode",{parentName:"li"},"void")," now because it never fails, unless ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," is specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RequestContext.newDerivedContext(Request)")," now requires both ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpRequest")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"RpcRequest"),"."))),(0,i.kt)("li",{parentName:"ul"},"A default virtual host service can serve any virtual host requests. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2057"},"#2057")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2040"},"#2040"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Before: If a custom virtual host fails to match the given request to a service, it returns ",(0,i.kt)("inlineCode",{parentName:"li"},"NOT_FOUND")," status."),(0,i.kt)("li",{parentName:"ul"},"After: If a custom virtual host fails to match the given request to a service, looking up a default virtual host services to match the request."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AbstractStreamMessageDuplicator.close()")," does not abort all children ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamMessage"),"s. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2134"},"#2134"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You should use ",(0,i.kt)("inlineCode",{parentName:"li"},"AbstractStreamMessageDuplicator.abort()")," to abort all children ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamMessage"),"s anymore.")))),(0,i.kt)("h2",{id:"dependencies",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gRPC 1.23.0 -> 1.24.0"),(0,i.kt)("li",{parentName:"ul"},"Dropwizard Metrics 4.0.0 -> 4.1.0"),(0,i.kt)("li",{parentName:"ul"},"Jetty 9.4.20.v20190813 -> 9.4.21.v20190926"),(0,i.kt)("li",{parentName:"ul"},"Jackson 2.9.9.20190807 -> 2.10.0"),(0,i.kt)("li",{parentName:"ul"},"Java JWT 3.8.2 -> 3.8.3"),(0,i.kt)("li",{parentName:"ul"},"Micrometer 1.2.1 -> 1.3.0")),(0,i.kt)("h2",{id:"thank-you",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Thank you"),(0,i.kt)(p,{usernames:["4whomtbts","anuraaga","codefromthecrypt","heowc","ikhoon","kojilin","minwoox","moonchanyong","sivaalli","trustin","young891221"],mdxType:"ThankYou"}))}c.isMDXComponent=!0},20370:function(e,t,a){a(88025);var n=a(1923),r=a(25444),i=a(67294),s=a(55746),l=a(8284),o=a(96759),p=a(46731),u=a(9396),m=n.Z.Title,c=Object.keys(l)[0],h=d(c);function d(e){return e.substring(e.lastIndexOf("/")+1)}t.Z=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(s).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(l).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var k=(0,u.Z)(e.location),N=e.version||d(k);return N.match(/^[0-9]/)||(N=void 0),i.createElement(p.Z,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:N?N+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),N&&N!==h?i.createElement(o.Ch,null,"You're seeing the release note of an old version. Check out"," ",i.createElement(r.Link,{to:c},"the latest release note"),"."):"",N?i.createElement(m,{id:"release-notes",level:1},i.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),N," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2","/release-notes/1.17.1":"v1.17.1","/release-notes/1.17.0":"v1.17.0","/release-notes/1.16.0":"v1.16.0","/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-94-0-mdx-8cabd13bdefce0ba8664.js.map