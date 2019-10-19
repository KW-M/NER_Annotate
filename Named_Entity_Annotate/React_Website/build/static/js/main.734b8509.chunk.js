(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(2),i=n(4),o=n(3),l=n(5),r=n(0),c=n.n(r),u=n(7),p=n.n(u),h=(n(14),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={visible:!1},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="toast ".concat(this.props.level," ");return e+=this.state.visible?"visible":"",c.a.createElement("div",{className:e},c.a.createElement("p",null,this.props.message))}},{key:"componentWillReceiveProps",value:function(e){this.props.visible!==e.visible&&this.setState({visible:e.visible})}}]),t}(c.a.Component)),d=(n(15),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.generateHTML(this.props.text,this.props.spans)}},{key:"generateHTML",value:function(e,t){for(var n=this,a=[],s=0,i=function(i){var o=t[i],l=o.label,r=o.start,u=o.end;l=l.toUpperCase();var p=e.slice(r,u),h=e.slice(s,r).split("\n");h.forEach(function(e,t){a.push(e),h.length>1&&t!==h.length-1&&a.push(c.a.createElement("br",null))});var d=n.intToHSL(n.hashCode(l)),v=!1;a.push(c.a.createElement("span",{"data-entity":l,style:{background:d},onClick:function(e){if(v)return v=!1,!1;n.props.cycleSpanLabel(i)}},p,c.a.createElement("button",{onClick:function(e){v=!0,n.props.deleteSpan(i)}},"x"))),s=u},o=0;o<t.length;o++)i(o);var l=e.slice(s,e.length).split("\n");return l.forEach(function(e,t){a.push(e),l.length>1&&t!==l.length-1&&a.push(c.a.createElement("br",null))}),a}},{key:"hashCode",value:function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return t-100*e.length}},{key:"intToHSL",value:function(e){return"hsla("+(e-400)%360+", 90%, 65%, 1)"}}]),t}(c.a.Component)),v=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).lastUsedEntity=null,n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("figure",{id:"ner_visualizer_container",onMouseUp:function(t){e.handleMouseUp(t)}},c.a.createElement(d,{text:this.props.text,avalableEntities:this.props.avalableEntities,spans:this.props.spans,deleteSpan:this.deleteSpan.bind(this),cycleSpanLabel:this.cycleSpanLabel.bind(this)}))}},{key:"deleteSpan",value:function(e){var t=this.props.spans.slice();t.splice(e,1),this.props.updateSpans(t)}},{key:"cycleSpanLabel",value:function(e){var t=this.props.spans.slice(),n=this.props.avalableEntities,a=n[(n.indexOf(t[e].label)+1)%n.length]||"No avalable Entities provided";this.lastUsedEntity=a,t[e]={start:t[e].start,end:t[e].end,label:a},this.props.updateSpans(t)}},{key:"handleMouseUp",value:function(e){var t=this;setTimeout(function(){var e=t.props.spans.slice();if((a=t.getSelectionRange()).start===a.end)return!1;var n=t.findSpansOverlapingSelection(e,a),a=(e=n.spans,n.selection);console.log("selection: "+t.props.text.slice(a.start,a.end),a),a.label=t.lastUsedEntity||t.props.avalableEntities[0]||"No avalable Entities provided",console.log(e,a);for(var s=0;e[s]&&e[s].end<a.start;)s++;s>=e.length?e.push(a):e.splice(s,0,a),t.props.updateSpans(e)},500)}},{key:"findSpansOverlapingSelection",value:function(e,t){for(var n=0;n<e.length;n++){var a=e[n];t.start<=a.end&&a.end<=t.end&&t.start<=a.start&&a.start<=t.end?(console.log("splicing",e[n]),e.splice(n,1),n--):t.start<=a.start&&a.start<=t.end?(console.log("trimming end to: "+(a.end+1),e[n]),t.end=a.start):t.start<=a.end&&a.end<=t.end?(console.log("trimming start to: "+(a.end+1),e[n]),t.start=a.end):console.log("not splicing",e[n])}return{spans:e,selection:t}}},{key:"getSelectionRange",value:function(){var e=window.getSelection();if(0===e.rangeCount)return{start:0,end:0};var t=e.getRangeAt(0);console.log(t);var n=e.getRangeAt(e.rangeCount-1);console.log(n);var a=0,s=0,i=0;return document.getElementById("ner_visualizer_container").childNodes.forEach(function(e){e!==t.startContainer&&e!==t.startContainer.parentNode||(a=i+t.startOffset),e!==n.endContainer&&e!==n.endContainer.parentNode?("BR"===e.nodeName?(i+=1,console.log("here")):1===e.nodeType&&e.hasAttribute("data-entity")&&(i-=1),i+=e.textContent.length):s=i+n.endOffset}),e.removeAllRanges(),{start:a,end:s}}}]),t}(c.a.Component),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={currentlyFetching:!1,avalableEntities:[],currentExampleHistoryIndex:0,exampleHistory:[],visibleToastObj:null},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchAvalableEntities(),this.showNextExample(),document.addEventListener("keydown",this.handleKeyPress.bind(this),!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress.bind(this),!1)}},{key:"handleKeyPress",value:function(e){console.log(e),this.setState({visibleToastObj:null}),"ArrowRight"===e.key?this.showNextExample():"ArrowLeft"===e.key?this.showPrevExample():"z"!==e.key||!0!==e.ctrlKey&&!0!==e.metaKey||this.undo()}},{key:"undo",value:function(){var e=this.state.exampleHistory,t=e[this.state.currentExampleHistoryIndex];if(t.undoHistory.length<=1)return!1;t.undoHistory.pop(),this.setState({exampleHistory:e})}},{key:"showPrevExample",value:function(){var e=this.state.currentExampleHistoryIndex;e>0&&this.setState({currentExampleHistoryIndex:e-1})}},{key:"showNextExample",value:function(e){var t=this;if(!0!==this.state.currentlyFetching){var n=this.state.exampleHistory,a=this.state.currentExampleHistoryIndex;1!=e&&this.saveAnnotations(n[a]),a<n.length-1?this.setState({currentExampleHistoryIndex:a+1}):(this.setState({currentlyFetching:!0}),this.fetchNextExample().then(function(e){if(console.log(e),"No More Examples"===e.NER_Annotate_Message)alert("All done - No more examples left to annotate.\nEverything is saved. You can close this page now."),t.setState({currentlyFetching:!1});else{e.undoHistory=[{spans:e.ents}],delete e.ents;var a=n.concat([e]);t.setState({currentlyFetching:!1,exampleHistory:a,currentExampleHistoryIndex:a.length-1})}}))}}},{key:"fetchNextExample",value:function(){return fetch("http://localhost:8080/next").then(function(e){return e.json()})}},{key:"saveAnnotations",value:function(e){console.log(e),this.showToast("Annotations Saved","success",3e3)}},{key:"fetchAvalableEntities",value:function(){var e=this;fetch("http://localhost:8080/avalable_ents").then(function(e){return e.json()}).then(function(t){var n=t;console.log(n),e.setState({avalableEntities:n})})}},{key:"updateSpans",value:function(e){var t=this.state.exampleHistory,n=t[this.state.currentExampleHistoryIndex];n.undoHistory=n.undoHistory.concat([{spans:e}]),this.setState({exampleHistory:t})}},{key:"render",value:function(){var e=this.state.exampleHistory[this.state.currentExampleHistoryIndex],t=null;if(this.state.currentlyFetching&&(t=c.a.createElement("progress",{id:"Fetching_Indicator"})),void 0!==e){var n=e.undoHistory,a=n[n.length-1];return c.a.createElement("div",{className:"App"},t,c.a.createElement(v,{text:e.text,spans:a.spans,avalableEntities:this.state.avalableEntities,updateSpans:this.updateSpans.bind(this)}),c.a.createElement(h,{level:(this.state.visibleToastObj||{}).level||"",message:(this.state.visibleToastObj||{}).message||"",visible:null!=this.state.visibleToastObj}))}return"Loading..."}},{key:"showToast",value:function(e,t,n){var a=this;this.setState({visibleToastObj:{message:e,level:t}}),setTimeout(function(){a.setState({visibleToastObj:null})},n)}}]),t}(c.a.Component),y=document.getElementById("root");p.a.render(c.a.createElement(f,null),y)},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.734b8509.chunk.js.map