"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[4953],{95293:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var r,i=a(63366),n=(a(67294),a(64983)),o=a(20370),l=["components"],s={},m=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),p={_frontmatter:s},c=o.Z;function u(e){var t=e.components,a=(0,i.Z)(e,l);return(0,n.kt)(c,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{className:"date"},"7th July 2020"),(0,n.kt)("h2",{id:"-new-features",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can now use ",(0,n.kt)("a",{parentName:"li",href:"type://ClientRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html"},"type://ClientRequestContext")," to build a complex ",(0,n.kt)("a",{parentName:"li",href:"type://RetryRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRule.html"},"type://RetryRule")," and\n",(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"},"type://CircuitBreakerRule"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2851"},"#2851"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"RetryRuleWithContent.<RpcResponse>builder()\n                    .onServerErrorStatus()\n                     // Now it's the BiPredicate that takes ctx as well.\n                    .onException((ctx, ex) -> {\n                        RpcRequest request = ctx.rpcRequest();\n                        if (request != null &&\n                            !safeMethods.contains(request.method())) {\n                            return isRetryableException(throwable);\n                        } else {\n                            return false;\n                        }\n                    })\n                    .thenBackoff(backoff);\n"))),(0,n.kt)("li",{parentName:"ul"},"You can now run the gRPC server/client stubs generated by ScalaPB with Armeria. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2719"},"#2719"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Please refer to the fully working ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/tree/master/examples/grpc-scala"},"example"),"."))),(0,n.kt)("li",{parentName:"ul"},"You can now parse a response trailers from a response body for gRPC-Web using\n",(0,n.kt)("a",{parentName:"li",href:"type://GrpcWebUtil#parseTrailers(HttpData)"},"type://GrpcWebUtil#parseTrailers(HttpData)"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2848"},"#2848"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Clients.builder(...)\n       .decorator(RetryingClient.newDecorator(\n               RetryRuleWithContent.onResponse(response -> {\n                   return response.aggregate().thenApply(aggregated -> {\n                      HttpHeaders trailers =\n                              GrpcWebUtil.parseTrailers(aggregated.content());\n                      // Retry if the 'grpc-status' is not equal to 0.\n                      return trailers != null &&\n                             trailers.getInt(GrpcHeaderNames.GRPC_STATUS) != 0;\n                  });\n              })))\n      .build(MyGrpcStub.class);\n"))),(0,n.kt)("li",{parentName:"ul"},"You can now access the metadata of ",(0,n.kt)("a",{parentName:"li",href:"type://HttpFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/HttpFile.html"},"type://HttpFile")," and ",(0,n.kt)("a",{parentName:"li",href:"type://FileService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/FileService.html"},"type://FileService")," asynchronously. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1668"},"#1668")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2845"},"#2845"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"HttpFile httpFile = HttpFile.of(...);\nCompletableFuture<HttpFileAttributes> attrs =\n        httpFile.readAttributes(CommonPools.blockingTaskExecutor());\nCompletableFuture<ResponseHeaders> headers =\n        httpFile.readHeaders(CommonPools.blockingTaskExecutor());\n"))),(0,n.kt)("li",{parentName:"ul"},"You can now easily customize ",(0,n.kt)("a",{parentName:"li",href:"type://MeterIdPrefixFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/metric/MeterIdPrefixFunction.html"},"type://MeterIdPrefixFunction")," using\n",(0,n.kt)("a",{parentName:"li",href:"type://MeterIdPrefixFunction#andThen(MeterIdPrefixFunctionCustomizer):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/metric/MeterIdPrefixFunction.html#andThen(com.linecorp.armeria.common.metric.MeterIdPrefixFunctionCustomizer)"},"type://MeterIdPrefixFunction#andThen(MeterIdPrefixFunctionCustomizer)"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2839"},"#2839"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},'MeterIdPrefixFunction\n        .ofDefault("hoge")\n        .andThen((registry, log, id) -> id.withTags(\n                "grpc-status", log.responseTrailers().get("grpc-status")));\n'))),(0,n.kt)("li",{parentName:"ul"},"Both synchronous and asynchronous APIs to select an ",(0,n.kt)("a",{parentName:"li",href:"type://Endpoint:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html"},"type://Endpoint")," are added to\n",(0,n.kt)("a",{parentName:"li",href:"type://EndpointSelector:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointSelector.html"},"type://EndpointSelector")," and thus ",(0,n.kt)("a",{parentName:"li",href:"type://EndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointGroup.html"},"type://EndpointGroup")," which is a sub-interface. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1910"},"#1910")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2837"},"#2837"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ClientRequestContext ctx = ...\nEndpointGroup group = ...\n// synchronous selection!\nEndpoint endpoint = group.selectNow(ctx);\n// asynchronous selection!\nCompletableFuture<Endpoint> future =\n        group.select(ctx, ctx.eventLoop(), 1000 /* timeout */ );\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Thanks to this change, you can now avoid the ",(0,n.kt)("a",{parentName:"li",href:"type://EmptyEndpointGroupException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EmptyEndpointGroupException.html"},"type://EmptyEndpointGroupException")," at least\nfor the case where the ",(0,n.kt)("a",{parentName:"li",href:"typeplural://Endpoint:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html"},"typeplural://Endpoint")," disappear temporarily."))),(0,n.kt)("li",{parentName:"ul"},"You can now get the snapshot status of circuit breakers from monitoring system. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2841"},"#2841"))),(0,n.kt)("h2",{id:"-improvements",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can now schedule a request timeout in nanoseconds. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2864"},"#2864"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://ServiceRequestContext#setRequestTimeout(TimeoutMode,Duration):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html#setRequestTimeout(com.linecorp.armeria.common.util.TimeoutMode,java.time.Duration)"},"type://ServiceRequestContext#setRequestTimeout(TimeoutMode,Duration)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://ClientRequestContext#setResponseTimeout(TimeoutMode,Duration):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html#setResponseTimeout(com.linecorp.armeria.common.util.TimeoutMode,java.time.Duration)"},"type://ClientRequestContext#setResponseTimeout(TimeoutMode,Duration)")))),(0,n.kt)("li",{parentName:"ul"},"You can now see the error message by ",(0,n.kt)("inlineCode",{parentName:"li"},"ResourceLeakDetector")," if the ",(0,n.kt)("inlineCode",{parentName:"li"},"DefaultClientFactory")," is not closed\nproperly. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2847"},"#2847")),(0,n.kt)("li",{parentName:"ul"},"The initial connection latency is lowered by giving up hopeless HTTP/1.1 connection early when\nHTTP/2 upgrade request fails. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2852"},"#2852"))),(0,n.kt)("h2",{id:"️-bug-fixes",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Armeria server does not convert the ",(0,n.kt)("inlineCode",{parentName:"li"},"Host")," header to ",(0,n.kt)("inlineCode",{parentName:"li"},":authority")," header anymore. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2846"},"#2846")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2850"},"#2850"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://RequestHeaders#authority():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestHeaders.html#authority()"},"type://RequestHeaders#authority()")," looks into ",(0,n.kt)("inlineCode",{parentName:"li"},"Host")," header if ",(0,n.kt)("inlineCode",{parentName:"li"},":authority")," header is missing."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://FileService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/FileService.html"},"type://FileService")," is not blocked by ",(0,n.kt)("inlineCode",{parentName:"li"},"ClassLoader")," lock anymore. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1668"},"#1668")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2845"},"#2845")),(0,n.kt)("li",{parentName:"ul"},"You can retry when ",(0,n.kt)("a",{parentName:"li",href:"type://DnsTimeoutException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/DnsTimeoutException.html"},"type://DnsTimeoutException")," is raised using ",(0,n.kt)("a",{parentName:"li",href:"type://RetryRule#onUnprocessed():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRule.html#onUnprocessed()"},"type://RetryRule#onUnprocessed()"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2836"},"#2836")),(0,n.kt)("li",{parentName:"ul"},"You no longer see ",(0,n.kt)("inlineCode",{parentName:"li"},"Http2Exception: failed to consume a HEADERS frame")," error. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2832"},"#2832")),(0,n.kt)("li",{parentName:"ul"},"You no longer see ",(0,n.kt)("inlineCode",{parentName:"li"},"You tried to set the content preview twice")," warning unless\nyou really did apply content previewing decorator twice. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2830"},"#2830")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2832"},"#2832")),(0,n.kt)("li",{parentName:"ul"},"A non-base ",(0,n.kt)("a",{parentName:"li",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," respects the user defined scheme correctly. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2835"},"#2835")),(0,n.kt)("li",{parentName:"ul"},"The specified port when building ",(0,n.kt)("a",{parentName:"li",href:"type://EurekaUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/EurekaUpdatingListener.html"},"type://EurekaUpdatingListener")," and ",(0,n.kt)("a",{parentName:"li",href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"},"type://ZooKeeperUpdatingListener"),"\nis used in the registration information of an Armeria server. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2826"},"#2826"))),(0,n.kt)("h2",{id:"️-deprecations",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All Spring registration beans are deprecated. Use ",(0,n.kt)("a",{parentName:"li",href:"type://ArmeriaServerConfigurator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/spring/ArmeriaServerConfigurator.html"},"type://ArmeriaServerConfigurator")," and\n",(0,n.kt)("a",{parentName:"li",href:"type://DocServiceConfigurator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/spring/DocServiceConfigurator.html"},"type://DocServiceConfigurator")," instead. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2787"},"#2787")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2838"},"#2838"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Deprecated beans: ",(0,n.kt)("inlineCode",{parentName:"li"},"HttpServiceRegistrationBean"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"AnnotatedServiceRegistrationBean"),",\n",(0,n.kt)("inlineCode",{parentName:"li"},"GrpcServiceRegistrationBean")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"ThriftServiceRegistrationBean")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MeterIdPrefixFunctionFactory")," has been deprecated in favor of ",(0,n.kt)("a",{parentName:"li",href:"type://RequestLog#serviceName()"},"type://RequestLog#serviceName()"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2780"},"#2780")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2820"},"#2820")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"executor()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"contextAwareExecutor()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"contextAwareEventLoop()")," methods in\n",(0,n.kt)("a",{parentName:"li",href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"},"type://RequestContext")," are deprecated. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2834"},"#2834")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"on*(Predicate)")," methods in the followings classes are deprecated. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2851"},"#2851"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://RetryRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRule.html"},"type://RetryRule")," and ",(0,n.kt)("a",{parentName:"li",href:"type://RetryRuleBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRuleBuilder.html"},"type://RetryRuleBuilder")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://RetryRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRuleWithContent.html"},"type://RetryRuleWithContent")," and ",(0,n.kt)("a",{parentName:"li",href:"type://RetryRuleWithContentBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRuleWithContentBuilder.html"},"type://RetryRuleWithContentBuilder")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"},"type://CircuitBreakerRule")," and ",(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerRuleBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleBuilder.html"},"type://CircuitBreakerRuleBuilder")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleWithContent.html"},"type://CircuitBreakerRuleWithContent")," and ",(0,n.kt)("a",{parentName:"li",href:"type://CircuitBreakerRuleWithContentBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleWithContentBuilder.html"},"type://CircuitBreakerRuleWithContentBuilder")),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"on*(BiPredicate)")," methods instead."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RequestLogBuilder.defer*Content*()")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"isDefer*Content*Set()")," have been deprecated in favor of\n",(0,n.kt)("inlineCode",{parentName:"li"},"defer(RequestLogProperty)")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"isDeferred(RequestLogProperty)"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2832"},"#2832")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MeterIdPrefixFunction.andThen(BiFunction<MeterRegistry, MeterIdPrefix, MeterIdPrefix>")," is deprecated. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2839"},"#2839")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"UnprocessedRequestException(Throwable)")," constructor is deprecated.\nUse ",(0,n.kt)("a",{parentName:"li",href:"type://UnprocessedRequestException#of(Throwable):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/UnprocessedRequestException.html#of(java.lang.Throwable)"},"type://UnprocessedRequestException#of(Throwable)")," instead. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2836"},"#2836"))),(0,n.kt)("h2",{id:"️-breaking-changes",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The names of various artifacts are changed. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2676"},"#2676")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2677"},"#2677")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2829"},"#2829")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2843"},"#2843"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-dropwizard")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-dropwizard2"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-jetty")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-jetty9"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-rxjava")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-rxjava3"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rxjava")," package is renamed to ",(0,n.kt)("inlineCode",{parentName:"li"},"rxjava3"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot-actuator-autoconfigure")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot2-actuator-autoconfigure"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot-actuator-starter")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot2-actuator-starter"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot-autoconfigure")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot2-autoconfigure"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot-starter")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot2-starter"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot-webflux-autoconfigure")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot2-webflux-autoconfigure"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot-webflux-starter")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-spring-boot2-webflux-starter"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-testing-common")," has been removed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-testing-junit4")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-junit4"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-testing-junit")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-junit5"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"junit")," package is renamed to ",(0,n.kt)("inlineCode",{parentName:"li"},"junit5"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-thrift")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-thrift0.13"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-tomcat")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-tomcat9"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"armeria-zookeeper")," is now ",(0,n.kt)("inlineCode",{parentName:"li"},"armeria-zookeeper3"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://RequestContext#eventLoop():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html#eventLoop()"},"type://RequestContext#eventLoop()")," now returns ",(0,n.kt)("a",{parentName:"li",href:"type://ContextAwareEventLoop:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/ContextAwareEventLoop.html"},"type://ContextAwareEventLoop")," which always set the\n",(0,n.kt)("a",{parentName:"li",href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"},"type://RequestContext")," before executing any submitted tasks. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2629"},"#2629")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2834"},"#2834")),(0,n.kt)("li",{parentName:"ul"},"The default logging level for successful requests and response has been changed. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2696"},"#2696")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2855"},"#2855"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"INFO")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"DEBUG")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"Logging{Client,Service}.newDecorator()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"TRACE")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"DEBUG")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"Logging{Client,Service}Builder")))),(0,n.kt)("li",{parentName:"ul"},"The APIs of ",(0,n.kt)("a",{parentName:"li",href:"type://HttpFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/HttpFile.html"},"type://HttpFile")," and ",(0,n.kt)("a",{parentName:"li",href:"type://HttpVfs:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/HttpVfs.html"},"type://HttpVfs")," have been changed. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1668"},"#1668")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2845"},"#2845")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2861"},"#2861")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://AggregatedHttpFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/AggregatedHttpFile.html"},"type://AggregatedHttpFile")," does not extend ",(0,n.kt)("a",{parentName:"li",href:"type://HttpFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/HttpFile.html"},"type://HttpFile")," anymore. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2861"},"#2861")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://AbstractHttpFile#headers()"},"type://AbstractHttpFile#headers()")," is now ",(0,n.kt)("a",{parentName:"li",href:"type://AbstractHttpFile#additionalHeaders():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/AbstractHttpFile.html#additionalHeaders()"},"type://AbstractHttpFile#additionalHeaders()"),". ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2861"},"#2861")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://EndpointSelector:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointSelector.html"},"type://EndpointSelector")," API has been changed. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2837"},"#2837"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1910"},"#1910"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"It is not a functional interface anymore."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"select()")," has been renamed to ",(0,n.kt)("a",{parentName:"li",href:"type://EndpointSelector#selectNow(ClientRequestContext):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointSelector.html#selectNow(com.linecorp.armeria.client.ClientRequestContext)"},"type://EndpointSelector#selectNow(ClientRequestContext)"),"."),(0,n.kt)("li",{parentName:"ul"},"An asynchronous ",(0,n.kt)("a",{parentName:"li",href:"type://EndpointSelector#select(ClientRequestContext,ScheduledExecutorService,long):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointSelector.html#select(com.linecorp.armeria.client.ClientRequestContext,java.util.concurrent.ScheduledExecutorService,long)"},"type://EndpointSelector#select(ClientRequestContext,ScheduledExecutorService,long)"),"\nhas been added."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"type://UserClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/UserClient.html"},"type://UserClient")," API has been changed. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2837"},"#2837"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Its constructor requires more parameters."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"execute()")," requires less parameters."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"StreamMessage.drainAll()")," and its variants have been removed. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2782"},"#2782")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2827"},"#2827"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"They are only used for unit tests and you can use ",(0,n.kt)("inlineCode",{parentName:"li"},"reactor.test.StepVerifier")," instead."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"UnprocessedRequestException(String, Throwable)")," constructor has been removed without replacement. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2836"},"#2836")),(0,n.kt)("li",{parentName:"ul"},"Deprecated timeout APIs in ",(0,n.kt)("inlineCode",{parentName:"li"},"{Service,Client}RequestContext")," have been removed. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2864"},"#2864"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"extend{Request,Response}TimeoutMillis(long)")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"extend{Request,Response}Timeout(Duration)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set{Request,Response}TimeoutAfterMillis(long)")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"set{Request,Response}TimeoutAfter(Duration)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"set{Request,Response}TimeoutAtMillis(long)")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"set{Request,Response}TimeoutAt(Duration)"))))),(0,n.kt)("h2",{id:"-dependencies",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"gRPC-Java 1.30.1 → 1.30.2"),(0,n.kt)("li",{parentName:"ul"},"Jackson 2.11.0 → 2.11.1"),(0,n.kt)("li",{parentName:"ul"},"Kafka 1.1.1 → 2.5.0"),(0,n.kt)("li",{parentName:"ul"},"Micrometer 1.5.1 → 1.5.2"),(0,n.kt)("li",{parentName:"ul"},"Reactor 3.3.6 → 3.3.7"),(0,n.kt)("li",{parentName:"ul"},"Shaded dependencies",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Caffeine 2.8.4 → 2.8.5"))),(0,n.kt)("li",{parentName:"ul"},"Examples:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Dagger 2.28 → 2.28.1"),(0,n.kt)("li",{parentName:"ul"},"monix_reactive 3.2.2"),(0,n.kt)("li",{parentName:"ul"},"ScalaPB 0.10.6"))),(0,n.kt)("li",{parentName:"ul"},"Build:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Checkstyle 8.33 → 8.34"),(0,n.kt)("li",{parentName:"ul"},"Eureka 1.9.23 → 1.9.25"),(0,n.kt)("li",{parentName:"ul"},"Finagle ServerSets 20.5.0 → 20.6.0"),(0,n.kt)("li",{parentName:"ul"},"Gradle 6.5 → 6.5.1"),(0,n.kt)("li",{parentName:"ul"},"gRPC-Kotlin 0.1.3 → 0.1.4")))),(0,n.kt)("h2",{id:"-thank-you",style:{position:"relative"}},(0,n.kt)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},(0,n.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),(0,n.kt)(m,{usernames:["anuraaga","gary-lo","heowc","hexoul","ikhoon","jongmin92","minwoox","okue","tobias-","trustin"],mdxType:"ThankYou"}))}u.isMDXComponent=!0},20370:function(e,t,a){a(88025);var r=a(1923),i=a(25444),n=a(67294),o=a(55746),l=a(8284),s=a(96759),m=a(46731),p=a(9396),c=r.Z.Title,u=Object.keys(l)[0],h=d(u);function d(e){return e.substring(e.lastIndexOf("/")+1)}t.Z=function(e){var t={},a={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(o).forEach((function(e){var a=e[0],r=e[1];t[r]=a})),Object.entries(l).forEach((function(e){var t=e[0],r=e[1];a[r]=t}));var k=(0,p.Z)(e.location),N=e.version||d(k);return N.match(/^[0-9]/)||(N=void 0),n.createElement(m.Z,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:N?N+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),N&&N!==h?n.createElement(s.Ch,null,"You're seeing the release note of an old version. Check out"," ",n.createElement(i.Link,{to:u},"the latest release note"),"."):"",N?n.createElement(c,{id:"release-notes",level:1},n.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),N," release notes"):"",e.children)}},55746:function(e){e.exports=JSON.parse('{"/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2","/release-notes/1.17.1":"v1.17.1","/release-notes/1.17.0":"v1.17.0","/release-notes/1.16.0":"v1.16.0","/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-8-mdx-1714e6a2e0e33f1981ee.js.map