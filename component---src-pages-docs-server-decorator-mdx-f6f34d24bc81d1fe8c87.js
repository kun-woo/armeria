"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[9159],{16211:function(e,r,t){t.r(r),t.d(r,{pageTitle:function(){return o},_frontmatter:function(){return s},default:function(){return v}});var a=t(63366),i=(t(67294),t(64983)),n=t(28819),c=["components"],o="Decorating a service",s={},p={pageTitle:o,_frontmatter:s},l=n.Z;function v(e){var r=e.components,t=(0,a.Z)(e,c);return(0,i.kt)(l,Object.assign({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"decorating-a-service",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h1",href:"#decorating-a-service","aria-label":"decorating a service permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Decorating a service"),(0,i.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#implementing-decoratinghttpservicefunction-and-decoratingrpcservicefunction"},"Implementing DecoratingHttpServiceFunction and DecoratingRpcServiceFunction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#extending-simpledecoratinghttpservice-and-simpledecoratingrpcservice"},"Extending SimpleDecoratingHttpService and SimpleDecoratingRpcService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#extending-decoratingservice"},"Extending DecoratingService")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#unwrapping-decoration"},"Unwrapping decoration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#decorating-servicewithroutes"},"Decorating ServiceWithRoutes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#decorating-multiple-services-by-path-mapping"},"Decorating multiple services by path mapping")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#see-also"},"See also"))),(0,i.kt)("p",null,"A 'decorating service' (or a 'decorator') is a service that wraps another service\nto intercept an incoming request or an outgoing response. As its name says, it is an implementation of\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Decorator_pattern"},"the decorator pattern"),". Service decoration takes a crucial role in Armeria. A lot of core features\nsuch as logging, metrics and distributed tracing are implemented as decorators and you will also find it\nuseful when ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Separation_of_concerns"},"separating concerns"),"."),(0,i.kt)("p",null,"There are basically three ways to write a decorating service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implementing ",(0,i.kt)("a",{parentName:"li",href:"type://DecoratingHttpServiceFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingHttpServiceFunction.html"},"type://DecoratingHttpServiceFunction")," and ",(0,i.kt)("a",{parentName:"li",href:"type://DecoratingRpcServiceFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingRpcServiceFunction.html"},"type://DecoratingRpcServiceFunction")),(0,i.kt)("li",{parentName:"ul"},"Extending ",(0,i.kt)("a",{parentName:"li",href:"type://SimpleDecoratingHttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/SimpleDecoratingHttpService.html"},"type://SimpleDecoratingHttpService")," and ",(0,i.kt)("a",{parentName:"li",href:"type://SimpleDecoratingRpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/SimpleDecoratingRpcService.html"},"type://SimpleDecoratingRpcService")),(0,i.kt)("li",{parentName:"ul"},"Extending ",(0,i.kt)("a",{parentName:"li",href:"type://DecoratingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingService.html"},"type://DecoratingService"))),(0,i.kt)("h2",{id:"implementing-decoratinghttpservicefunction-and-decoratingrpcservicefunction",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#implementing-decoratinghttpservicefunction-and-decoratingrpcservicefunction","aria-label":"implementing decoratinghttpservicefunction and decoratingrpcservicefunction permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Implementing ",(0,i.kt)("inlineCode",{parentName:"h2"},"DecoratingHttpServiceFunction")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"DecoratingRpcServiceFunction")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"type://DecoratingHttpServiceFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingHttpServiceFunction.html"},"type://DecoratingHttpServiceFunction")," and ",(0,i.kt)("a",{parentName:"p",href:"type://DecoratingRpcServiceFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingRpcServiceFunction.html"},"type://DecoratingRpcServiceFunction")," are functional interfaces that\ngreatly simplify the implementation of a decorating service. They enables you to write a decorating service\nwith a single lambda expression:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.common.HttpStatus;\nimport com.linecorp.armeria.server.HttpService;\n\nServerBuilder sb = Server.builder();\nHttpService service = ...;\nsb.serviceUnder("/web", service.decorate((delegate, ctx, req) -> {\n    if (!authenticate(req)) {\n        // Authentication failed; fail the request.\n        return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n    }\n\n    // Authenticated; pass the request to the actual service.\n    return delegate.serve(ctx, req);\n});\n')),(0,i.kt)("h2",{id:"extending-simpledecoratinghttpservice-and-simpledecoratingrpcservice",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#extending-simpledecoratinghttpservice-and-simpledecoratingrpcservice","aria-label":"extending simpledecoratinghttpservice and simpledecoratingrpcservice permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Extending ",(0,i.kt)("inlineCode",{parentName:"h2"},"SimpleDecoratingHttpService")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"SimpleDecoratingRpcService")),(0,i.kt)("p",null,"If your decorator is expected to be reusable, it is recommended to define a new top-level class that extends\n",(0,i.kt)("a",{parentName:"p",href:"type://SimpleDecoratingHttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/SimpleDecoratingHttpService.html"},"type://SimpleDecoratingHttpService")," or ",(0,i.kt)("a",{parentName:"p",href:"type://SimpleDecoratingRpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/SimpleDecoratingRpcService.html"},"type://SimpleDecoratingRpcService")," depending on whether you are\ndecorating an ",(0,i.kt)("a",{parentName:"p",href:"type://HttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/HttpService.html"},"type://HttpService")," or an ",(0,i.kt)("a",{parentName:"p",href:"type://RpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/RpcService.html"},"type://RpcService"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.HttpRequest;\nimport com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.server.HttpService;\nimport com.linecorp.armeria.server.ServiceRequestContext;\nimport com.linecorp.armeria.server.SimpleDecoratingHttpService;\n\npublic class AuthService extends SimpleDecoratingHttpService {\n    public AuthService(HttpService delegate) {\n        super(delegate);\n    }\n\n    @Override\n    public HttpResponse serve(ServiceRequestContext ctx, HttpRequest req) throws Exception {\n        if (!authenticate(req)) {\n            // Authentication failed; fail the request.\n            return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n        }\n\n        HttpService delegate = unwrap();\n        return delegate.serve(ctx, req);\n    }\n}\n\nServerBuilder sb = Server.builder();\n// Using a lambda expression:\nsb.serviceUnder("/web", service.decorate(delegate -> new AuthService(delegate)));\n')),(0,i.kt)("h2",{id:"extending-decoratingservice",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#extending-decoratingservice","aria-label":"extending decoratingservice permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Extending ",(0,i.kt)("inlineCode",{parentName:"h2"},"DecoratingService")),(0,i.kt)("p",null,"So far, we only demonstrated the case where a decorating service does not transform the type of the request and\nresponse. You can do that as well, of course, using ",(0,i.kt)("a",{parentName:"p",href:"type://DecoratingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingService.html"},"type://DecoratingService"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.server.RpcService;\n\n// Transforms an RpcService into an HttpService.\npublic class MyRpcService extends DecoratingService<RpcRequest, RpcResponse,\n                                                    HttpRequest, HttpResponse> {\n\n    public MyRpcService(Service<? super RpcRequest, ? extends RpcResponse> delegate) {\n        super(delegate);\n    }\n\n    @Override\n    public HttpResponse serve(ServiceRequestContext ctx, HttpRequest req) throws Exception {\n        // This method has been greatly simplified for easier understanding.\n        // In reality, we will have to do this asynchronously.\n        RpcRequest rpcReq = convertToRpcRequest(req);\n        RpcResponse rpcRes = unwrap().serve(ctx, rpcReq);\n        return convertToHttpResponse(rpcRes);\n    }\n\n    private RpcRequest convertToRpcRequest(HttpRequest req) { ... }\n    private HttpResponse convertToHttpResponse(RpcResponse res) { ... }\n}\n")),(0,i.kt)("h2",{id:"unwrapping-decoration",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#unwrapping-decoration","aria-label":"unwrapping decoration permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Unwrapping decoration"),(0,i.kt)("p",null,"Once a service is decorated, the type of the service is not that of the original service\nanymore. Therefore, you cannot simply down-cast it to access the method exposed by the original service.\nInstead, you need to 'unwrap' the decorator using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Service.as()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"MyService service = ...;\nMyDecoratedService decoratedService = service.decorate(...);\n\nassert !(decoratedService instanceof MyService);\nassert decoratedService.as(MyService.class) == service;\nassert decoratedService.as(MyDecoratedService.class) == decoratedService;\nassert decoratedService.as(SomeOtherService.class) == null;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"as()")," is especially useful when you are looking for the service instances that implements\na certain type from a server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.server.ServerConfig;\nimport java.util.List;\n\nServer server = ...;\nServerConfig serverConfig = server.config();\nList<ServiceConfig> serviceConfigs = serverConfig.serviceConfigs();\nfor (ServiceConfig sc : serviceConfigs) {\n    if (sc.service().as(SomeType.class) != null) {\n        // Handle the service who implements or extends SomeType.\n    }\n}\n")),(0,i.kt)("h2",{id:"decorating-servicewithroutes",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#decorating-servicewithroutes","aria-label":"decorating servicewithroutes permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Decorating ",(0,i.kt)("inlineCode",{parentName:"h2"},"ServiceWithRoutes")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"type://ServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceWithRoutes.html"},"type://ServiceWithRoutes")," is a special variant of service which allows a user to register multiple\nroutes for a single service. It has a method called ",(0,i.kt)("a",{parentName:"p",href:"type://ServiceWithRoutes#routes():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceWithRoutes.html#routes()"},"type://ServiceWithRoutes#routes()")," which returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Set")," of\n",(0,i.kt)("a",{parentName:"p",href:"typeplural://Route:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html"},"typeplural://Route")," so that you do not have to specify path when registering your service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.Route;\nimport com.linecorp.armeria.server.HttpServiceWithRoutes;\nimport java.util.HashSet;\nimport java.util.Set;\n\npublic class MyServiceWithRoutes implements HttpServiceWithRoutes {\n    @Override\n    public HttpResponse serve(ServiceRequestContext ctx, HttpRequest req) { ... }\n\n    @Override\n    public Set<Route> routes() {\n        Set<Route> routes = new HashSet<>();\n        routes.add(Route.builder().path("/services/greet").build());\n        routes.add(Route.builder().path("/services/hello").build());\n        return routes;\n    }\n}\n\nServerBuilder sb = Server.builder();\n// No path is specified.\nsb.service(new MyServiceWithRoutes());\n// Override the path provided by routes().\nsb.service("/services/hola", new MyServiceWithRoutes());\n')),(0,i.kt)("p",null,"However, decorating a ",(0,i.kt)("a",{parentName:"p",href:"type://ServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceWithRoutes.html"},"type://ServiceWithRoutes")," can lead to a compilation error when you attempt to\nregister it without specifying a path explicitly, because a decorated service is not a\n",(0,i.kt)("a",{parentName:"p",href:"type://ServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceWithRoutes.html"},"type://ServiceWithRoutes")," anymore but just a service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.logging.LoggingService;\n\nServerBuilder sb = Server.builder();\n\n// Works.\nHttpServiceWithRoutes service = new MyServiceWithRoutes();\nsb.service(service);\n\n// Does not work - not a HttpServiceWithRoutes anymore due to decoration.\nHttpService decoratedService = service.decorate(LoggingService.newDecorator());\nsb.service(decoratedService); // Compilation error\n\n// Works if a path is specified explicitly.\nsb.service("/services/bonjour", decoratedService);\n')),(0,i.kt)("p",null,"Therefore, you need to specify the decorators as extra parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ServerBuilder sb = Server.builder();\n// Register a service decorated with two decorators at multiple routes.\nsb.service(new MyServiceWithRoutes(),\n           MyDecoratedService::new,\n           LoggingService.newDecorator())\n")),(0,i.kt)("p",null,"A good real-world example of ",(0,i.kt)("a",{parentName:"p",href:"type://ServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceWithRoutes.html"},"type://ServiceWithRoutes")," is ",(0,i.kt)("a",{parentName:"p",href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"},"type://GrpcService"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/server-grpc#decorating-a-grpcservice"},"Decorating a GrpcService")," for more information."),(0,i.kt)("h2",{id:"decorating-multiple-services-by-path-mapping",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#decorating-multiple-services-by-path-mapping","aria-label":"decorating multiple services by path mapping permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Decorating multiple services by path mapping"),(0,i.kt)("p",null,"If you want to decorate multiple ",(0,i.kt)("a",{parentName:"p",href:"typeplural://Service:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Service.html"},"typeplural://Service")," by path mapping or router matching, you can specify\ndecorators using ",(0,i.kt)("inlineCode",{parentName:"p"},"decoratorUnder(pathPrefix, ...)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"decorator(Route, ...)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.common.HttpHeaderNames;\n\nVipService vipService = ...;\nMemberService memberService = ...;\nHtmlService htmlService = ...;\nJsService jsService = ...;\n\nServerBuilder sb = new ServerBuilder();\n\n// Register vipService and memberService under \'/users\' path\nsb.annotatedService("/users/vip", vipService)\n  .annotatedService("/users/members", memberService);\n\n// Decorate all services under \'/users\' path\nsb.decoratorUnder("/users", (delegate, ctx, req) -> {\n    if (!authenticate(req)) {\n        return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n    }\n    return delegate.serve(ctx, req);\n});\n\n// Register htmlService and jsService under \'/public\' path\nsb.serviceUnder("/public/html", htmlService)\n  .serviceUnder("/public/js", jsService);\n\n// Decorate services only when a request method is \'GET\'\nsb.decorator(Route.builder().get("/public").build(), (delegate, ctx, req) -> {\n    final HttpResponse response = delegate.serve(ctx, req);\n    ctx.mutateAdditionalResponseHeaders(\n            mutator -> mutator.add(HttpHeaderNames.CACHE_CONTROL, "public"));\n    return response;\n});\n')),(0,i.kt)("p",null,"You can also use fluent route builder with ",(0,i.kt)("inlineCode",{parentName:"p"},"routeDecorator()")," to match services being decorated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ServerBuilder sb = new ServerBuilder();\n\n// Register vipService and memberService under \'/users\' path\nsb.annotatedService("/users/vip", vipService)\n  .annotatedService("/users/members", memberService);\n\n// Decorate services under \'/users\' path with fluent route builder\nsb.routeDecorator()\n  .pathPrefix("/users")\n  .build((delegate, ctx, req) -> {\n      if (!authenticate(req)) {\n          return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n      }\n      return delegate.serve(ctx, req);\n  });\n\n// Register htmlService and jsService under \'/public\' path\nsb.serviceUnder("/public/html", htmlService)\n  .serviceUnder("/public/js", jsService);\n\n// Decorate services under \'/public\' path using \'get\' method with path pattern\nsb.routeDecorator()\n  .get("prefix:/public")\n  .build((delegate, ctx, req) -> {\n      final HttpResponse response = delegate.serve(ctx, req);\n      ctx.mutateAdditionalResponseHeaders(\n              mutator -> mutator.add(HttpHeaderNames.CACHE_CONTROL, "public"));\n      return response;\n  });\n')),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"type://DecoratingServiceBindingBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingServiceBindingBuilder.html"},"type://DecoratingServiceBindingBuilder")," for more information."),(0,i.kt)("h2",{id:"see-also",style:{position:"relative"}},(0,i.kt)("a",{parentName:"h2",href:"#see-also","aria-label":"see also permalink",className:"anchor before"},(0,i.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/client-decorator"},"Decorating a client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/advanced-custom-attributes"},(0,i.kt)("inlineCode",{parentName:"a"},"RequestContext")," custom attributes"))))}v.isMDXComponent=!0},28819:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(25444),i=t(67294),n=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-graphql","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-multipart"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}'),c=t(46731),o=function(e){var r=(0,a.useStaticQuery)("1217743243").allMdx.nodes;return i.createElement(c.Z,Object.assign({},e,{candidateMdxNodes:r,index:n,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-decorator-mdx-f6f34d24bc81d1fe8c87.js.map