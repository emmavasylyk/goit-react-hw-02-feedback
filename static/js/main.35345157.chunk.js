(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,a){t.exports={StatisticsText:"Statistics_StatisticsText__uI_MM",StatisticsValue:"Statistics_StatisticsValue__3JIJP"}},10:function(t,e,a){t.exports={SectionTitle:"Section_SectionTitle__2PQxj"}},17:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){"use strict";a.r(e);var c=a(2),n=a.n(c),s=a(6),i=a.n(s),r=(a(17),a(7)),o=a(8),l=a(9),d=a(12),b=a(11),u=a(4),j=a.n(u),p=a(0),h=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(p.jsx)("div",{className:j.a.FeedbackOptionsWrapper,children:e.map((function(t){return Object(p.jsx)("button",{className:j.a.FeedbackOptionsButton,type:"button",name:t,onClick:a,children:t},t)}))})},O=a(5),x=a.n(O),g=a(10),k=a.n(g),f=function(t){var e=t.title,a=t.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:k.a.SectionTitle,children:e}),a]})};f.protoTypes={title:x.a.string,children:x.a.string};var v=f,F=a(1),m=a.n(F),S=function(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,s=t.positivePercentage;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{className:m.a.StatisticsText,children:["good: ",Object(p.jsx)("span",{className:m.a.StatisticsValue,children:e})]}),Object(p.jsxs)("p",{className:m.a.StatisticsText,children:["neutral:",Object(p.jsx)("span",{className:m.a.StatisticsValue,children:a})]}),Object(p.jsxs)("p",{className:m.a.StatisticsText,children:["bad:",Object(p.jsx)("span",{className:m.a.StatisticsValue,children:c})]}),Object(p.jsxs)("p",{className:m.a.StatisticsText,children:["total:",Object(p.jsx)("span",{className:m.a.StatisticsValue,children:n})]}),Object(p.jsxs)("p",{className:m.a.StatisticsText,children:["positivePercentage:",Object(p.jsxs)("span",{className:m.a.StatisticsValue,children:[s,"%"]})]})]})},T=function(t){var e=t.message;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("p",{children:e})})},_=(a(21),["WrapperFeedback"]),N=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good;return Math.round(e/t.countTotalFeedback()*100)||0},t.onLeaveFeedback=function(e){var a=e.target.name;t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,c=t.bad,n=Object.keys(this.state);return Object(p.jsxs)("div",{className:_,children:[Object(p.jsx)(v,{title:"Please leave feedback",children:Object(p.jsx)(h,{options:n,onLeaveFeedback:this.onLeaveFeedback})}),0===this.countTotalFeedback()?Object(p.jsx)(T,{message:"There is no feedback"}):Object(p.jsx)(v,{title:"Statistics",children:Object(p.jsx)(S,{good:e,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(c.Component),P=N,y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),y()},4:function(t,e,a){t.exports={FeedbackOptionsButton:"FeedbackOptions_FeedbackOptionsButton__fTVcS",FeedbackOptionsWrapper:"FeedbackOptions_FeedbackOptionsWrapper__9Mh1y"}}},[[22,1,2]]]);
//# sourceMappingURL=main.35345157.chunk.js.map