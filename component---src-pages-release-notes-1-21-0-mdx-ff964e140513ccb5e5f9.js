"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[7406],{35926:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return h}});var r,i=t(63366),n=(t(67294),t(64983)),o=t(20370),l=["components"],s={},c=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),m={_frontmatter:s},p=o.Z;function h(e){var a=e.components,t=(0,i.Z)(e,l);return(0,n.kt)(p,Object.assign({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",{className:"date"},"22nd December 2022"),(0,n.kt)("h2",{id:"-new-features",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now use ",(0,n.kt)("a",{parentName:"p",href:"type://@RequestTimeout:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/decorator/RequestTimeout.html"},"type://@RequestTimeout")," to set a request timeout to annotated services and\ngRPC services. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4463"},"#4463")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4499"},"#4499")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.annotation.decorator.RequestTimeout;\n\n@RequestTimeout(value = 1, unit = TimeUnit.SECONDS) // 👈👈👈\nclass MyAnnotationService {\n  // A request gets timed out after 1 second.\n  @Get("/fast/api")\n  public CompletableFuture<MyResponse> fastApi() {\n    ...\n  }\n\n  // A request gets timed out after 5 seconds.\n  @RequestTimeout(value = 5, unit = TimeUnit.SECONDS) // 👈👈👈\n  public CompletableFuture<MyResponse> slowApi() {\n    ...\n  }\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now set the default ",(0,n.kt)("inlineCode",{parentName:"p"},"MeterRegistry")," by implementing a custom ",(0,n.kt)("a",{parentName:"p",href:"type://FlagsProvider:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/FlagsProvider.html"},"type://FlagsProvider"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4541"},"#4541")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class CustomFlagsProvider implements FlagsProvider {\n  @Override\n  public MeterRegistry meterRegistry() {\n    return PrometheusMeterRegistries.newRegistry(); // 👈👈👈\n  }\n}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now set the default ",(0,n.kt)("a",{parentName:"p",href:"type://HttpHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpHeaders.html"},"type://HttpHeaders")," to ",(0,n.kt)("a",{parentName:"p",href:"type://Server:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html"},"type://Server"),", ",(0,n.kt)("a",{parentName:"p",href:"type://VirtualHost:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/VirtualHost.html"},"type://VirtualHost")," and\n",(0,n.kt)("a",{parentName:"p",href:"type://Service:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Service.html"},"type://Service"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4520"},"#4520")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'static AsciiString CUSTOM_HEADER =\n  HttpHeaderNames.of("x-custom-header");\n\nServer\n  .builder()\n  .setHeader(CUSTOM_HEADER, "server-default-header")\n  .virtualHost("foo.com")\n  .setHeader(CUSTOM_HEADER, "vhost-default-header").and()\n  .route()\n  .path("/foo")\n  .setHeader(CUSTOM_HEADER, "service-default-header")\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now set ",(0,n.kt)("inlineCode",{parentName:"p"},":authority")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Host")," header whose value is different from ",(0,n.kt)("a",{parentName:"p",href:"type://Endpoint#host():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html#host()"},"type://Endpoint#host()")," using\n",(0,n.kt)("a",{parentName:"p",href:"type://ClientBuilder#setHeader(CharSequence,Object):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html#setHeader(java.lang.CharSequence,java.lang.Object)"},"type://ClientBuilder#setHeader(CharSequence,Object)"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4440"},"#4440")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4520"},"#4520")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This will be useful when you want to send a request through a proxy server.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"WebClient\n  // A request is sent to 'reverse-proxy.example.com'.\n  .builder(\"http://reverse-proxy.example.com/\")\n  // but 'my-order.service.com' is used for the ':authority' header.\n  .setHeader(HeaderNames.AUTHORITY, \"my-order.service.com\")\n  ...\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient")," can now be used with arbitrary ",(0,n.kt)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," implementations. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4426"},"#4426"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Added ",(0,n.kt)("a",{parentName:"p",href:"type://Bytes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/Bytes.html"},"type://Bytes")," that represents binary data. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4505"},"#4505"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now see the description of services in the overview section of ",(0,n.kt)("a",{parentName:"p",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4480"},"#4480")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4537"},"#4537"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can now override an authority of a gRPC client using ",(0,n.kt)("inlineCode",{parentName:"p"},"CallOptions"),". ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4445"},"#4445")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/4520"},"#4520")))),(0,n.kt)("h2",{id:"-improvements",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://DecodingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/encoding/DecodingClient.html"},"type://DecodingClient")," and ",(0,n.kt)("a",{parentName:"li",href:"type://DecodingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/encoding/DecodingService.html"},"type://DecodingService")," can now limit the maximum length of decompressed\ndata. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4469"},"#4469")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4564"},"#4564")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"synchronized")," blocks have been replaced with ",(0,n.kt)("a",{parentName:"li",href:"type://ReentrantLock"},"type://ReentrantLock")," for better virtual thread\ncompatibility. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4551"},"#4551")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4549"},"#4549")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://ServiceSpecification:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/ServiceSpecification.html"},"type://ServiceSpecification")," for ",(0,n.kt)("a",{parentName:"li",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," is lazily loaded so as to not block a ",(0,n.kt)("a",{parentName:"li",href:"type://Server:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html"},"type://Server"),"\nfrom starting. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4491"},"#4491"))),(0,n.kt)("h2",{id:"️-bug-fixes",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://HttpHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpHeaders.html"},"type://HttpHeaders")," set by ",(0,n.kt)("a",{parentName:"li",href:"type://ClientBuilder#setHeader(CharSequence,Object):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html#setHeader(java.lang.CharSequence,java.lang.Object)"},"type://ClientBuilder#setHeader(CharSequence,Object)")," is now stored in\n",(0,n.kt)("a",{parentName:"li",href:"type://ClientRequestContext#defaultRequestHeaders():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html#defaultRequestHeaders()"},"type://ClientRequestContext#defaultRequestHeaders()")," which has the lowest priority and doesn't override\nvalues in ",(0,n.kt)("a",{parentName:"li",href:"type://RequestHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestHeaders.html"},"type://RequestHeaders"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Previously, the ",(0,n.kt)("a",{parentName:"li",href:"type://HttpHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpHeaders.html"},"type://HttpHeaders")," set via ",(0,n.kt)("a",{parentName:"li",href:"type://ClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html"},"type://ClientBuilder")," were stored in\n",(0,n.kt)("a",{parentName:"li",href:"type://ClientRequestContext#additionalRequestHeaders():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html#additionalRequestHeaders()"},"type://ClientRequestContext#additionalRequestHeaders()")," which overrode the values in\n",(0,n.kt)("a",{parentName:"li",href:"type://RequestHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestHeaders.html"},"type://RequestHeaders")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4440"},"#4440")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4520"},"#4520")))),(0,n.kt)("li",{parentName:"ul"},"Fixed a regression where ",(0,n.kt)("inlineCode",{parentName:"li"},"void")," methods return ",(0,n.kt)("inlineCode",{parentName:"li"},"200 OK")," instead of ",(0,n.kt)("inlineCode",{parentName:"li"},"204 NoContent")," if a ",(0,n.kt)("a",{parentName:"li",href:"type://@Produces:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Produces.html"},"type://@Produces"),"\nannotation is added. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4575"},"#4575")),(0,n.kt)("li",{parentName:"ul"},"Deleted uncompressed ",(0,n.kt)("a",{parentName:"li",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," assets that were added unintentionally. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4500"},"#4500")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4568"},"#4568")),(0,n.kt)("li",{parentName:"ul"},"An exception raised in ",(0,n.kt)("a",{parentName:"li",href:"type://Authorizer:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/auth/Authorizer.html"},"type://Authorizer")," is now properly peeled using\n",(0,n.kt)("a",{parentName:"li",href:"type://Exceptions#peel(Throwable):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/util/Exceptions.html#peel(java.lang.Throwable)"},"type://Exceptions#peel(Throwable)"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4567"},"#4567")),(0,n.kt)("li",{parentName:"ul"},"Exceptions raised in decorators can now be used to determine whether to retry by ",(0,n.kt)("a",{parentName:"li",href:"type://RetryingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryingClient.html"},"type://RetryingClient"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4558"},"#4558")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4559"},"#4559")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://EndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointGroup.html"},"type://EndpointGroup")," is now correctly copied to a newly derived client. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4556"},"#4556")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://RequestContextExportingAppender:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/logback/RequestContextExportingAppender.html"},"type://RequestContextExportingAppender")," can now be used with logback ",(0,n.kt)("inlineCode",{parentName:"li"},"SocketAppender"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4546"},"#4546")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4547"},"#4547")),(0,n.kt)("li",{parentName:"ul"},"Reversed HTTP/1.1 responses are now correctly ordered when HTTP/1.1 pipelining is enabled. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4536"},"#4536")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4470"},"#4470")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"414 Request-URI Too Long")," is now correctly returned for a long URI in HTTP/1.1. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4478"},"#4478")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4532"},"#4532")),(0,n.kt)("li",{parentName:"ul"},"Fixed to propagate the cause of a decoder failure of an HTTP/1.1 request to\n",(0,n.kt)("a",{parentName:"li",href:"type://ServerErrorHandler#onProtocolViolation(ServiceConfig,RequestHeaders,HttpStatus,String,Throwable):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerErrorHandler.html#onProtocolViolation(com.linecorp.armeria.server.ServiceConfig,com.linecorp.armeria.common.RequestHeaders,com.linecorp.armeria.common.HttpStatus,java.lang.String,java.lang.Throwable)"},"type://ServerErrorHandler#onProtocolViolation(ServiceConfig,RequestHeaders,HttpStatus,String,Throwable)")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4478"},"#4478")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4532"},"#4532")),(0,n.kt)("li",{parentName:"ul"},"You can use ",(0,n.kt)("a",{parentName:"li",href:"type://DocService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/DocService.html"},"type://DocService")," even when ",(0,n.kt)("a",{parentName:"li",href:"type://Server#reconfigure(ServerConfigurator):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Server.html#reconfigure(com.linecorp.armeria.server.ServerConfigurator)"},"type://Server#reconfigure(ServerConfigurator)")," is called. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4491"},"#4491")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4513"},"#4513")),(0,n.kt)("li",{parentName:"ul"},"Context leak stack trace is more readable now. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4517"},"#4517"))),(0,n.kt)("h2",{id:"️-deprecations",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"N/A")),(0,n.kt)("h2",{id:"️-breaking-changes",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FieldInfo.childFieldInfo")," has been removed to eliminate duplicate information on ",(0,n.kt)("a",{parentName:"li",href:"type://StructInfo:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/docs/StructInfo.html"},"type://StructInfo"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/4566"},"#4566"))),(0,n.kt)("h2",{id:"-dependencies",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Apache Curator 5.3.0 → 5.4.0"),(0,n.kt)("li",{parentName:"ul"},"Brave 5.14.0 → 5.14.1"),(0,n.kt)("li",{parentName:"ul"},"Dropwizard 2.1.1 → 2.1.4"),(0,n.kt)("li",{parentName:"ul"},"Eureka 1.10.17 → 2.0.0"),(0,n.kt)("li",{parentName:"ul"},"GraphQL Java 19.2 → 20.0"),(0,n.kt)("li",{parentName:"ul"},"Jackson 2.13.4 → 2.14.1"),(0,n.kt)("li",{parentName:"ul"},"java-jwt 4.0.0 → 4.2.1"),(0,n.kt)("li",{parentName:"ul"},"Jetty 9.4.48 → 9.4.50"),(0,n.kt)("li",{parentName:"ul"},"Kafka client 3.3.0 → 3.3.1"),(0,n.kt)("li",{parentName:"ul"},"Kotlin 1.7.20 → 1.7.22"),(0,n.kt)("li",{parentName:"ul"},"Micrometer 1.9.4 → 1.10.2"),(0,n.kt)("li",{parentName:"ul"},"Netty 4.1.82 → 4.1.86",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"io_uring 0.0.15 → 0.0.16"))),(0,n.kt)("li",{parentName:"ul"},"Reactor 3.4.23 → 3.4.26"),(0,n.kt)("li",{parentName:"ul"},"Sangria 3.3.0 → 3.4.1"),(0,n.kt)("li",{parentName:"ul"},"Sangria slowlog 2.0.4 → 2.0.5"),(0,n.kt)("li",{parentName:"ul"},"Scala 2.13.9 → 2.13.10"),(0,n.kt)("li",{parentName:"ul"},"scala-collection-compat 2.8.1 → 2.9.0"),(0,n.kt)("li",{parentName:"ul"},"ScalaPB 0.11.11 → 0.11.12"),(0,n.kt)("li",{parentName:"ul"},"Tomcat 8.5.81 → 8.5.84, 9.0.65 → 9.0.70"),(0,n.kt)("li",{parentName:"ul"},"ZooKeeper 3.6.3 → 3.7.1")),(0,n.kt)("h2",{id:"-thank-you",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),(0,n.kt)(c,{usernames:["Bue-von-hon","Dogacel","Jimexist","Lincong","Yuri999","chris-ryan-square","ikhoon","j-min5u","jrhee17","ks-yim","minwoox","tobias-","Trustin"],mdxType:"ThankYou"}))}h.isMDXComponent=!0},20370:function(e,a,t){t(88025);var r=t(1923),i=t(25444),n=t(67294),o=t(55746),l=t(8284),s=t(96759),c=t(46731),m=t(9396),p=r.Z.Title,h=Object.keys(l)[0],d=u(h);function u(e){return e.substring(e.lastIndexOf("/")+1)}a.Z=function(e){var a={},t={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(o).forEach((function(e){var t=e[0],r=e[1];a[r]=t})),Object.entries(l).forEach((function(e){var a=e[0],r=e[1];t[r]=a}));var v=(0,m.Z)(e.location),k=e.version||u(v);return k.match(/^[0-9]/)||(k=void 0),n.createElement(c.Z,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:k?k+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),k&&k!==d?n.createElement(s.Ch,null,"You're seeing the release note of an old version. Check out"," ",n.createElement(i.Link,{to:h},"the latest release note"),"."):"",k?n.createElement(p,{id:"release-notes",level:1},n.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),k," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.21.0":"v1.21.0","/release-notes/1.20.3":"v1.20.3","/release-notes/1.20.2":"v1.20.2","/release-notes/1.20.1":"v1.20.1","/release-notes/1.20.0":"v1.20.0","/release-notes/1.19.0":"v1.19.0","/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2","/release-notes/1.17.1":"v1.17.1","/release-notes/1.17.0":"v1.17.0","/release-notes/1.16.1":"v1.16.1","/release-notes/1.16.0":"v1.16.0","/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-1-21-0-mdx-ff964e140513ccb5e5f9.js.map