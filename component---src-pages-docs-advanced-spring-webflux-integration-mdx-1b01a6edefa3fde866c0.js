"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[6772],{85257:function(e,r,t){t.r(r),t.d(r,{pageTitle:function(){return c},_frontmatter:function(){return s},default:function(){return g}});var n=t(63366),a=(t(67294),t(64983)),i=t(28819),o=["components"],c="Using Armeria with Spring WebFlux",s={},l=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)}},u=l("Tip"),p=l("RequiredDependencies"),d={pageTitle:c,_frontmatter:s},m=i.Z;function g(e){var r=e.components,t=(0,n.Z)(e,o);return(0,a.kt)(m,Object.assign({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-armeria-with-spring-webflux",style:{position:"relative"}},(0,a.kt)("a",{parentName:"h1",href:"#using-armeria-with-spring-webflux","aria-label":"using armeria with spring webflux permalink",className:"anchor before"},(0,a.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using Armeria with Spring WebFlux"),(0,a.kt)(u,{mdxType:"Tip"},(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/line/armeria-examples"},"armeria-examples")," to find a fully working example.")),(0,a.kt)("p",null,"Spring framework provides powerful features which are necessary for building a web application, such as\ndependency injection, data binding, AOP, transaction, etc. In addition, if your Spring application integrates\nwith Armeria, you can leverage the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rich support for Apache ",(0,a.kt)("a",{parentName:"li",href:"https://thrift.apache.org/"},"Thrift")," and ",(0,a.kt)("a",{parentName:"li",href:"https://grpc.io/"},"gRPC"),",\nincluding ",(0,a.kt)("a",{parentName:"li",href:"/docs/server-docservice"},"the fancy web console")," that enables you to send Thrift and gRPC requests\nfrom a web browser"),(0,a.kt)("li",{parentName:"ul"},"Ability to run HTTP REST service and RPC service in the same port"),(0,a.kt)("li",{parentName:"ul"},"Full HTTP/2 support for both server-side and client-side, including ",(0,a.kt)("inlineCode",{parentName:"li"},"h2c")," (plaintext HTTP/2)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt"},"PROXY protocol")," support which provides\ninteroperability with load balancers such as ",(0,a.kt)("a",{parentName:"li",href:"https://www.haproxy.org/"},"HAProxy")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/elasticloadbalancing/"},"AWS ELB"))),(0,a.kt)("p",null,"Armeria can be plugged in as the underlying HTTP server for a Spring Boot 2 WebFlux application by adding\nthe following dependency:"),(0,a.kt)(p,{boms:[{groupId:"com.linecorp.armeria",artifactId:"armeria-bom"},{groupId:"io.netty",artifactId:"netty-bom"}],dependencies:[{groupId:"com.linecorp.armeria",artifactId:"armeria-spring-boot2-webflux-starter"}],mdxType:"RequiredDependencies"}),(0,a.kt)("p",null,"The above starter configures Armeria as the HTTP server for WebFlux to run on by referring to ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml"),"\nwhen the application starts up. A user can customize the server configuration with the same properties\nprovided by Spring Boot as for other servers supported with WebFlux such as Tomcat or Reactor Netty.\nThe following is a simple example for configuring the server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  address: 127.0.0.1\n  port: 8080\n")),(0,a.kt)("p",null,"For a user who wants to customize the web server, ",(0,a.kt)("a",{parentName:"p",href:"type://ArmeriaServerConfigurator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/spring/ArmeriaServerConfigurator.html"},"type://ArmeriaServerConfigurator")," is provided.\nThe user can customize the server by defining a bean of the type in the configuration as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class ArmeriaConfiguration {\n    // A user can configure the server by providing an ArmeriaServerConfigurator bean.\n    @Bean\n    public ArmeriaServerConfigurator armeriaServerConfigurator() {\n        // Customize the server using the given ServerBuilder. For example:\n        return builder -> {\n            // Add DocService that enables you to send Thrift and gRPC requests\n            // from web browser.\n            builder.serviceUnder("/docs", new DocService());\n\n            // Log every message which the server receives and responds.\n            builder.decorator(LoggingService.newDecorator());\n\n            // Write access log after completing a request.\n            builder.accessLogWriter(AccessLogWriter.combined(), false);\n\n            // You can also bind asynchronous RPC services such as Thrift and gRPC:\n            // builder.service(THttpService.of(...));\n            // builder.service(GrpcService.builder()...build());\n        };\n    }\n}\n')),(0,a.kt)("p",null,"Armeria can also be plugged as the underlying HTTP client for the Spring ",(0,a.kt)("inlineCode",{parentName:"p"},"WebClient"),". To customize\nclient settings for the Armeria HTTP client, simply define an ",(0,a.kt)("a",{parentName:"p",href:"type://ArmeriaClientConfigurator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/spring/web/reactive/ArmeriaClientConfigurator.html"},"type://ArmeriaClientConfigurator")," bean\nin your configuration as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class ArmeriaConfiguration {\n    // Returns a custom ClientFactory with TLS certificate validation disabled,\n    // which means any certificate received from the server will be accepted\n    // without any verification. It is used for an example which makes the client\n    // send an HTTPS request to the server running on localhost with a self-signed\n    // certificate. Do NOT use ClientFactory.insecure() or\n    // ClientFactoryBuilder.tlsNoVerify() in production.\n    @Bean\n    public ClientFactory clientFactory() {\n        return ClientFactory.insecure();\n    }\n\n    // A user can configure a Client by providing an ArmeriaClientConfigurator bean.\n    @Bean\n    public ArmeriaClientConfigurator\n            armeriaClientConfigurator(ClientFactory clientFactory) {\n\n        // Customize the client using the given WebClientBuilder. For example:\n        return builder -> {\n            // Use a circuit breaker for each remote host.\n            final CircuitBreakerRule rule =\n                    CircuitBreakerRule.onServerErrorStatus();\n            builder.decorator(CircuitBreakerClient.builder(rule)\n                                                  .newDecorator());\n\n            // Set a custom client factory.\n            builder.factory(clientFactory);\n        };\n    }\n}\n")),(0,a.kt)(u,{mdxType:"Tip"},(0,a.kt)("p",null,"If you are not familiar with Spring Boot and Spring WebFlux, please refer to\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/"},"Spring Boot Reference Guide")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring/docs/current/spring-framework-reference/web-reactive.html"},"Web on Reactive Stack"),".")))}g.isMDXComponent=!0},28819:function(e,r,t){t.d(r,{Z:function(){return c}});var n=t(25444),a=t(67294),i=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-graphql","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-multipart"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}'),o=t(46731),c=function(e){var r=(0,n.useStaticQuery)("1217743243").allMdx.nodes;return a.createElement(o.Z,Object.assign({},e,{candidateMdxNodes:r,index:i,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-spring-webflux-integration-mdx-1b01a6edefa3fde866c0.js.map