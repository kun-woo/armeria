"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[2478],{44181:function(e,a,t){t.r(a),t.d(a,{pageTitle:function(){return m},_frontmatter:function(){return l},default:function(){return u}});var r,i=t(63366),o=(t(67294),t(64983)),n=t(28819),p=["components"],m="Handling a multipart request",l={},c=(r="Tip",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),s={pageTitle:m,_frontmatter:l},d=n.Z;function u(e){var a=e.components,t=(0,i.Z)(e,p);return(0,o.kt)(d,Object.assign({},s,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"handling-a-multipart-request",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h1",href:"#handling-a-multipart-request","aria-label":"handling a multipart request permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Handling a multipart request"),(0,o.kt)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#building-a-multipart-request"},"Building a multipart request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sending-a-multipart-request"},"Sending a multipart request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#receiving-a-multipart-request"},"Receiving a multipart request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-typeparam-annotation"},"Using type://@Param annotation"))),(0,o.kt)("p",null,"Armeria provides ",(0,o.kt)("a",{parentName:"p",href:"type://Multipart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/Multipart.html"},"type://Multipart")," encoder and decoder built on top of\n",(0,o.kt)("a",{parentName:"p",href:"https://www.reactive-streams.org/"},"Reactive Streams"),"."),(0,o.kt)("h2",{id:"building-a-multipart-request",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#building-a-multipart-request","aria-label":"building a multipart request permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Building a multipart request"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"type://Multipart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/Multipart.html"},"type://Multipart")," consists of multiple ",(0,o.kt)("a",{parentName:"p",href:"typeplural://BodyPart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/BodyPart.html"},"typeplural://BodyPart"),".\nEach ",(0,o.kt)("a",{parentName:"p",href:"type://BodyPart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/BodyPart.html"},"type://BodyPart")," is divided into headers and a body. A ",(0,o.kt)("a",{parentName:"p",href:"type://BodyPart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/BodyPart.html"},"type://BodyPart")," headers can be created simply\nusing ",(0,o.kt)("a",{parentName:"p",href:"type://ContentDisposition:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/ContentDisposition.html"},"type://ContentDisposition"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,o.kt)("a",{parentName:"p",href:"type://HttpData:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpData.html"},"type://HttpData"),", or ",(0,o.kt)("a",{parentName:"p",href:"type://StreamMessage:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/stream/StreamMessage.html"},"type://StreamMessage")," can be set as the body of the ",(0,o.kt)("a",{parentName:"p",href:"type://BodyPart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/BodyPart.html"},"type://BodyPart"),"."),(0,o.kt)(c,{mdxType:"Tip"},(0,o.kt)("p",null,"You can also use ",(0,o.kt)("a",{parentName:"p",href:"type://HttpHeaders:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpHeaders.html"},"type://HttpHeaders")," to set complex headers for ",(0,o.kt)("a",{parentName:"p",href:"type://BobyPart#headers()"},"type://BobyPart#headers()"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.nio.file.Path;\nimport com.linecorp.armeria.common.ContentDisposition;\nimport com.linecorp.armeria.common.multipart.BodyPart;\n\n// Create a \'Content-Disposition\' header with the \'name\' parameter set to \'name\'.\nContentDisposition nameDisposition = \n    ContentDisposition.of("form-data", "name");\n// Create a BodyPart with \'Content-Disposition\' header and its data.\nBodyPart bodyPart1 = BodyPart.of(nameDisposition, "Meri Kim");\n\n// Create a \'Content-Disposition\' header with the name parameter set to "image", \n// and the filename parameter set to "profile.png"\nContentDisposition imageDisposition =\n    ContentDisposition.of("form-data", "image", "profile.png");\nPath image = Paths.get("/path/to/image");\n// Create a BodyPart with \'Content-Disposition\' header and its file.\nBodyPart bodyPart2 = BodyPart.of(imageDisposition, StreamMessage.of(image));\n\n// Create a new multipart with the two body parts.\nMultipart multipart = Multipart.of(bodyPart1, bodyPart2);\n')),(0,o.kt)("p",null,"If we encode and print the ",(0,o.kt)("a",{parentName:"p",href:"type://Multipart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/Multipart.html"},"type://Multipart")," created above,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"for (HttpData httpData : multipart.toStreamMessage().collect().join()) {\n  System.out.print(httpData.toStringUtf8());\n}\n")),(0,o.kt)("p",null,"we can see how the ",(0,o.kt)("a",{parentName:"p",href:"type://Multipart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/Multipart.html"},"type://Multipart")," is encoded as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--ArmeriaBoundaryEsbNVr9Z66DAIYIN\ncontent-disposition:form-data; name="name"\ncontent-type:text/plain\n\nMeri Kim\n--ArmeriaBoundaryEsbNVr9Z66DAIYIN\ncontent-disposition:form-data; name="image"; filename="profile.png"\ncontent-type:application/octet-stream\n\n<binary-data>\n--ArmeriaBoundaryEsbNVr9Z66DAIYIN--\n')),(0,o.kt)("h2",{id:"sending-a-multipart-request",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#sending-a-multipart-request","aria-label":"sending a multipart request permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Sending a multipart request"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"type://Multipart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/Multipart.html"},"type://Multipart")," created in this way can be converted to an ",(0,o.kt)("a",{parentName:"p",href:"type://HttpRequest:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/HttpRequest.html"},"type://HttpRequest")," through\n",(0,o.kt)("a",{parentName:"p",href:"type://MultiPart#toHttpRequest(String)"},"type://MultiPart#toHttpRequest(String)")," and transmitted to a server using a ",(0,o.kt)("a",{parentName:"p",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'WebClient client = WebClient.of("https://armeria.dev");\n// Encode a `Multipart` into an `HttpRequest`\nHttpRequest request = multipart.toHttpRequest("/upload");\nclient.execute(request).aggregate()...;\n')),(0,o.kt)("h2",{id:"receiving-a-multipart-request",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#receiving-a-multipart-request","aria-label":"receiving a multipart request permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Receiving a multipart request"),(0,o.kt)("p",null,"On the server side, the multipart request sent from the client can be decoded into a ",(0,o.kt)("a",{parentName:"p",href:"type://Multipart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/Multipart.html"},"type://Multipart"),"\nusing ",(0,o.kt)("a",{parentName:"p",href:"type://Multipart#from(HttpRequest):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/Multipart.html#from(com.linecorp.armeria.common.HttpRequest)"},"type://Multipart#from(HttpRequest)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Server.builder()\n      .service((ctx, req) -> {\n        // Decode an `HttpRequest` into a `Multipart`\n        Multipart multipart = Multipart.from(req);\n        ...\n      })\n")),(0,o.kt)("p",null,"Since ",(0,o.kt)("a",{parentName:"p",href:"type://Multipart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/Multipart.html"},"type://Multipart")," does not have the actual multipart data, you can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"Multipart.bodyParts().subscribe(...)")," to read data little by little as needed.\nIf the size of the data is not large, the data can be read after being loaded into memory through\n",(0,o.kt)("a",{parentName:"p",href:"type://Multipart#aggregate():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/Multipart.html#aggregate()"},"type://Multipart#aggregate()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// Use a `Subscriber` to read the data with backpressure.\nmultipart.bodyParts().subsribe(new Subscriber() {\n   ...\n});\n\n// Read the data after aggregation.\nMultipart.from(req).aggregate()\n         .thenAccept(multipart -> {\n             for (AggregatedBodyPart bodyPart : multipart.bodyParts()) {\n                 String content = bodyPart.contentUtf8();\n                 ...\n             }\n         });\n")),(0,o.kt)("h2",{id:"using-typeparam-annotation",style:{position:"relative"}},(0,o.kt)("a",{parentName:"h2",href:"#using-typeparam-annotation","aria-label":"using typeparam annotation permalink",className:"anchor before"},(0,o.kt)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Using ",(0,o.kt)("a",{parentName:"h2",href:"type://@Param:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Param.html"},"type://@Param")," annotation"),(0,o.kt)("p",null,"In annotated services, a body part content of ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," can be directly mapped into a ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Path"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"File"),", or ",(0,o.kt)("a",{parentName:"p",href:"type://MultipartFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/MultipartFile.html"},"type://MultipartFile")," using the ",(0,o.kt)("a",{parentName:"p",href:"type://@Param:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Param.html"},"type://@Param")," annotation."),(0,o.kt)(c,{mdxType:"Tip"},(0,o.kt)("p",null,"Note that a ",(0,o.kt)("a",{parentName:"p",href:"type://BodyPart:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/BodyPart.html"},"type://BodyPart")," can be converted into a ",(0,o.kt)("inlineCode",{parentName:"p"},"Path"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"File")," or ",(0,o.kt)("a",{parentName:"p",href:"type://MultipartFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/MultipartFile.html"},"type://MultipartFile")," only when\nthe ",(0,o.kt)("a",{parentName:"p",href:"type://BodyPart#filename():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/BodyPart.html#filename()"},"type://BodyPart#filename()")," and ",(0,o.kt)("a",{parentName:"p",href:"type://BodyPart#name():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/multipart/BodyPart.html#name()"},"type://BodyPart#name()")," is specified.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.io.File;\nimport java.nio.file.Path;\n\nimport com.linecorp.armeria.common.MediaTypeNames;\nimport com.linecorp.armeria.common.multipart.MultipartFile;\nimport com.linecorp.armeria.server.annotation.Consumes;\nimport com.linecorp.armeria.server.annotation.Post;\n\n@Consumes(MediaTypeNames.MULTIPART_FORM_DATA)\n@Post("/upload")\npublic HttpResponse upload(\n    @Param String param,\n    @Param File file,\n    @Param Path path,\n    @Param MultipartFile multipartFile) {\n    // Do something with the multipart data\n    ...\n}\n')),(0,o.kt)(c,{mdxType:"Tip"},(0,o.kt)("p",null,"The multipart files uploaded to an annotated service are stored into\n",(0,o.kt)("a",{parentName:"p",href:"type://ServerBuilder#multipartUploadsLocation(Path):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html#multipartUploadsLocation(java.nio.file.Path)"},"type://ServerBuilder#multipartUploadsLocation(Path)")," and the files are not removed automatically.\nYou should explicitly ",(0,o.kt)("strong",{parentName:"p"},"delete")," the files after use.")))}u.isMDXComponent=!0},28819:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(25444),i=t(67294),o=JSON.parse('{"root":["index","setup"],"Useful links":{"Tutorials":"/tutorials","Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-graphql","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration","server-multipart"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-streaming-backpressure","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}'),n=t(46731),p=function(e){var a=(0,r.useStaticQuery)("1217743243").allMdx.nodes;return i.createElement(n.Z,Object.assign({},e,{candidateMdxNodes:a,index:o,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-multipart-mdx-36122205aa9c264dca79.js.map