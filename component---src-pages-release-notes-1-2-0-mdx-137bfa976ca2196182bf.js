"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[3236],{51467:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return h}});var r,n=a(63366),i=(a(67294),a(64983)),s=a(20370),o=["components"],l={},c=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),p={_frontmatter:l},m=s.Z;function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)(m,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{className:"date"},"22nd October 2020"),(0,i.kt)("h2",{id:"-new-features",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now bind a ",(0,i.kt)("a",{parentName:"p",href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"},"type://GrpcService")," to a custom route path. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3072"},"#3072")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3083"},"#3083"),"\nThis is useful if you want to serve an unframed gRPC service with RESTful routes."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = ...\nsb.service(GrpcService.builder()\n                      // Bind 'getProfile()' method to '/v1/api/users/profile'\n                      .addService(\"/v1/api/users/profile\", userService,\n                                  UserServiceGrpc.getProfile())\n                      // Bind 'getFriends()' method to '/v1/api/users/friends'\n                      .addService(\"/v1/api/users/friends\", userService,\n                                  UserServiceGrpc.getFriends())\n                      .build());\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now use ",(0,i.kt)("a",{parentName:"p",href:"type://DecodingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/encoding/DecodingService.html"},"type://DecodingService")," for decoding a compressed request. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1521"},"#1521")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3087"},"#3087"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now use ",(0,i.kt)("a",{parentName:"p",href:"type://HttpResponse#ofRedirect(String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpResponse.html#ofRedirect(java.lang.String)"},"type://HttpResponse#ofRedirect(String)")," for easily sending a redirect response. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/914"},"#914")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3059"},"#3059")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// The status is HttpStatus.TEMPORARY_REDIRECT.\nHttpResponse.ofRedirect("/new-location");\nHttpResponse.ofRedirect("/new-location/%s", someVar);\n// Redirect with the specified redirection status.\nHttpResponse.ofRedirect(HttpStatus.MOVED_PERMANENTLY, "/new-location");\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now choose a path when a Thrift/gRPC service has more than one path\nin the ",(0,i.kt)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2167"},"#2167")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3024"},"#3024"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can now cancel a service's request or client's response with ",(0,i.kt)("a",{parentName:"p",href:"type://CancellationException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/CancellationException.html"},"type://CancellationException")," or\nany ",(0,i.kt)("inlineCode",{parentName:"p"},"Throwable")," using ",(0,i.kt)("a",{parentName:"p",href:"type://RequestContext#cancel():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html#cancel()"},"type://RequestContext#cancel()")," or\n",(0,i.kt)("a",{parentName:"p",href:"type://RequestContext#cancel(Throwable):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html#cancel(java.lang.Throwable)?full"},"type://RequestContext#cancel(Throwable)?full"),". ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3046"},"#3046")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/3080"},"#3080")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ClientRequestContext cctx = ...;\n// Cancel a client\'s response with ResponseCancellationException\ncctx.cancel();\ncctx.cancel(new RuntimeException("A custom error message"));\n\nServiceRequestContext sctx = ...;\n// Cancel a service\'s request with RequestCancellationException\nsctx.cancel();\nsctx.cancel(new RuntimeException("A custom error message"));\n')))),(0,i.kt)("h2",{id:"-improvements",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not launch two servers if both ",(0,i.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot2-autoconfigure")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot2-webflux-autoconfigure")," are in the class path. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3056"},"#3056")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3102"},"#3102")),(0,i.kt)("li",{parentName:"ul"},"You no longer see a previously selected input when the input box of ",(0,i.kt)("inlineCode",{parentName:"li"},"Go to")," menu is clicked. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3095"},"#3095"))),(0,i.kt)("h2",{id:"️-bug-fixes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You now get proper 404 Not Found status when ",(0,i.kt)("inlineCode",{parentName:"li"},"routeDecorator()")," is used and\nthe endpoint of the request doesn't exist. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3120"},"#3120")),(0,i.kt)("li",{parentName:"ul"},"You no longer see duplicated MDC keys anymore when ",(0,i.kt)("inlineCode",{parentName:"li"},"armeria-logback")," is applied. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3044"},"#3044")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3105"},"#3105")),(0,i.kt)("li",{parentName:"ul"},"You can now get the normal response even though the request is not fully sent. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3115"},"#3115")),(0,i.kt)("li",{parentName:"ul"},"You can now use milliseconds as an interval unit in ",(0,i.kt)("a",{parentName:"li",href:"type://EurekaEndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/eureka/EurekaEndpointGroup.html"},"type://EurekaEndpointGroup"),". ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3108"},"#3108")),(0,i.kt)("li",{parentName:"ul"},"You no longer see ",(0,i.kt)("inlineCode",{parentName:"li"},"UNKNOWN")," error code while sending stream messages with Reactive gRPC stub. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3090"},"#3090")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3099"},"#3099")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TTEXT_NAMED_ENUM")," now correctly serializes enums when used inside maps. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3091"},"#3091")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://BraveClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/brave/BraveClient.html"},"type://BraveClient")," and ",(0,i.kt)("a",{parentName:"li",href:"type://BraveService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/brave/BraveService.html"},"type://BraveService")," do not override\nthe default ",(0,i.kt)("inlineCode",{parentName:"li"},"(Client|Server)(Request|Response)Parser")," anymore. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3023"},"#3023")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3111"},"#3111")),(0,i.kt)("li",{parentName:"ul"},"Armeria client now sets the default path(",(0,i.kt)("inlineCode",{parentName:"li"},"/"),") properly if a path is empty. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3098"},"#3098")),(0,i.kt)("li",{parentName:"ul"},"You no longer see an outdated JS bundle in the browser\nwhen the ",(0,i.kt)("a",{parentName:"li",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," page is rebuilt. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3094"},"#3094"))),(0,i.kt)("h2",{id:"️-deprecations",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The following methods have been deprecated in favor of their ",(0,i.kt)("inlineCode",{parentName:"li"},"millis"),"-accepting versions: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3108"},"#3108"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://EurekaEndpointGroupBuilder.registryFetchIntervalSeconds()"},"type://EurekaEndpointGroupBuilder.registryFetchIntervalSeconds()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://EurekaUpdatingServerListener.leaseDurationSeconds()"},"type://EurekaUpdatingServerListener.leaseDurationSeconds()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://EurekaUpdatingServerListener.renewalIntervalSeconds()"},"type://EurekaUpdatingServerListener.renewalIntervalSeconds()")))),(0,i.kt)("li",{parentName:"ul"},"The following methods have been deprecated in favor of their ",(0,i.kt)("inlineCode",{parentName:"li"},"*Cancelling")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"*Cancelled")," versions: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/3080"},"#3080"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://ClientRequestContext.whenResponseTimingOut()"},"type://ClientRequestContext.whenResponseTimingOut()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://ClientRequestContext.whenResponseTimedOut()"},"type://ClientRequestContext.whenResponseTimedOut()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://ServiceRequestContext.whenRequestTimingOut()"},"type://ServiceRequestContext.whenRequestTimingOut()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"type://ServiceRequestContext.whenRequestTimedOut()"},"type://ServiceRequestContext.whenRequestTimedOut()"))))),(0,i.kt)("h2",{id:"-dependencies",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Brave 5.12.6 → 5.12.7"),(0,i.kt)("li",{parentName:"ul"},"Caffeine 2.8.5 → 2.8.6"),(0,i.kt)("li",{parentName:"ul"},"Dropwizard 1.3.24 → 1.3.25"),(0,i.kt)("li",{parentName:"ul"},"Dropwizard Metrics 4.1.12.1 → 4.1.13"),(0,i.kt)("li",{parentName:"ul"},"Eureka 1.9.26 → 1.10.7"),(0,i.kt)("li",{parentName:"ul"},"gRPC-Java 1.32.1 → 1.33.0"),(0,i.kt)("li",{parentName:"ul"},"Guava 29.0 → 30.0"),(0,i.kt)("li",{parentName:"ul"},"java-jwt 3.10.3 → 3.11.0"),(0,i.kt)("li",{parentName:"ul"},"Jetty 9.4.31 → 9.4.32"),(0,i.kt)("li",{parentName:"ul"},"Micrometer 1.3.12 → 1.3.14"),(0,i.kt)("li",{parentName:"ul"},"Netty 4.1.52 → 4.1.53"),(0,i.kt)("li",{parentName:"ul"},"RxJava2 2.2.19 → 2.2.20"),(0,i.kt)("li",{parentName:"ul"},"RxJava3 3.0.6 → 3.0.7"),(0,i.kt)("li",{parentName:"ul"},"Spring Boot 2.1.16 → 2.1.17"),(0,i.kt)("li",{parentName:"ul"},"Spring 5.1.17 → 5.1.18"),(0,i.kt)("li",{parentName:"ul"},"Tomcat8 8.5.57 → 8.5.58"),(0,i.kt)("li",{parentName:"ul"},"Tomcat9 9.0.38 → 9.0.39")),(0,i.kt)("h2",{id:"-thank-you",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),(0,i.kt)(c,{usernames:["anuraaga","cnabro","codefromthecrypt","ghkim3221","heowc","ikhoon","joonhaeng","jrhee17","KarboniteKream","kojilin","kowshikn","minwoox","policeman-kh","trustin","tumile"],mdxType:"ThankYou"}))}h.isMDXComponent=!0},20370:function(e,t,a){a(88025);var r=a(1923),n=a(25444),i=a(67294),s=a(55746),o=a(8284),l=a(96759),c=a(46731),p=a(9396),m=r.Z.Title,h=Object.keys(o)[0],u=d(h);function d(e){return e.substring(e.lastIndexOf("/")+1)}t.Z=function(e){var t={},a={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(s).forEach((function(e){var a=e[0],r=e[1];t[r]=a})),Object.entries(o).forEach((function(e){var t=e[0],r=e[1];a[r]=t}));var v=(0,p.Z)(e.location),k=e.version||d(v);return k.match(/^[0-9]/)||(k=void 0),i.createElement(c.Z,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:k?k+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),k&&k!==u?i.createElement(l.Ch,null,"You're seeing the release note of an old version. Check out"," ",i.createElement(n.Link,{to:h},"the latest release note"),"."):"",k?i.createElement(m,{id:"release-notes",level:1},i.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),k," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2","/release-notes/1.17.1":"v1.17.1","/release-notes/1.17.0":"v1.17.0","/release-notes/1.16.0":"v1.16.0","/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-1-2-0-mdx-137bfa976ca2196182bf.js.map