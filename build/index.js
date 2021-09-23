!function(){"use strict";var e,n={794:function(){var e=window.wp.element,n=window.wp.blocks,t=window.wp.components,r=window.wp.i18n,a=window.wp.primitives,i=(0,e.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},(0,e.createElement)(a.Path,{d:"M42.451,12.088h-6.92V6.269C35.531,3.749,34.4,0,31.274,0H16.726c-1.711,0-4.257,1.67-4.257,6.269v5.819H5.55c-3.06,0-5.55,3.273-5.55,7.3V48H48V19.385C48,15.361,45.51,12.088,42.451,12.088ZM32.815,32.567H26.168v7.077H22.435V32.567H15.788V28.524h6.647V21.447h3.733v7.077h6.647Zm.013-20.993H15.172V7.024c0-.849.183-2.827,1.869-2.864H30.964c.551,0,1.838.28,1.864,2.864Z"})),d=window.wp.blockEditor;function l({attributes:n,setAttributes:a,setState:i}){return(0,e.createElement)(d.InspectorControls,{key:"settting"},(0,e.createElement)(t.PanelBody,{title:(0,r.__)("APIKEY","mindd"),initialOpen:!1},(0,e.createElement)("div",{className:"mindd-controlls-api-key"},(0,e.createElement)(t.TextControl,{label:(0,r.__)("API-key","mindd"),value:n.ApiKey,onChange:e=>a({ApiKey:e}),placeholder:(0,r.__)("Required","mindd")}),(0,e.createElement)("div",null,(0,r.__)("Om de widget te kunnen gebruiken dient u een geheime sleutel (API-key) in te voeren.","mindd"),(0,e.createElement)("br",null),(0,e.createElement)(t.ExternalLink,{href:"https://www.moetiknaardedokter.nl/informatie-voor-huisartsen/aanvraag-api-key/"},(0,r.__)("Hier kunt u een API-key aanvragen.","mindd"))))),n.ApiKey&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.PanelBody,{title:(0,r.__)("Teksten","mindd"),initialOpen:!1},(0,e.createElement)(t.TextareaControl,{label:(0,r.__)("Welkomsttekst","mindd"),value:n.welcome_text,onChange:e=>a({welcome_text:e})}),(0,e.createElement)(t.TextControl,{label:(0,r.__)("Huisartspraktijknaam","mindd"),value:n.branding_name,onChange:e=>a({branding_name:e})}),(0,e.createElement)(t.TextControl,{label:(0,r.__)("Telefoonnummer label","mindd"),value:n.branding_phone_label,onChange:e=>a({branding_phone_label:e})}),n.branding_phone_label&&(0,e.createElement)(t.BaseControl,{id:"mindd-controlls-branding_phone_number",label:(0,r.__)("Telefoonnummer","mindd")},(0,e.createElement)("input",{type:"tel",value:n.branding_phone_number,onChange:e=>{a({branding_phone_number:e.target.value})},placeholder:(0,r.__)("0031123456790","mindd")}))),(0,e.createElement)(d.PanelColorSettings,{title:(0,r.__)("Kleuren","mindd"),initialOpen:!1,colorSettings:[{value:n.widget_background,onChange:e=>a({widget_background:e}),label:(0,r.__)("Background","mindd")},{value:n.widget_foreground,onChange:e=>a({widget_foreground:e}),label:(0,r.__)("Algemene Text","mindd")},{value:n.widget_accent,onChange:e=>a({widget_accent:e}),label:(0,r.__)("Accent","mindd")}]})))}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function m({attributes:n,setAttributes:t}){return n.ApiKey?(0,e.createElement)("div",o({},(0,d.useBlockProps)(),{style:{backgroundColor:n.widget_background,color:n.widget_foreground}}),(0,e.createElement)("style",null,`\n\t\t\t\t.wp-block-mindd-mindd {\n\t\t\t\t\t--mindd-button-accent: ${n.widget_accent}\n\t\t\t\t}`),(0,e.createElement)("div",{className:"mindd-header"},(0,e.createElement)("div",{className:"mindd-header-branding-name"},n.branding_name),(0,e.createElement)("div",{className:"mindd-header-branding-phone"},n.branding_phone_label&&n.branding_phone_number&&(0,e.createElement)("a",{href:`tel:${n.branding_phone_number}`},n.branding_phone_label),n.branding_phone_label&&!n.branding_phone_number&&n.branding_phone_label)),(0,e.createElement)("div",{className:"mindd-pre-body"},(0,e.createElement)("div",{className:"mindd-pre-body-welcome"},n.welcome_text)),(0,e.createElement)("div",{className:"mindd-question-card"},(0,e.createElement)("div",{className:"mindd-question-title"},(0,r.__)("Bent u een man of een vrouw?","mindd")),(0,e.createElement)("div",{className:"mindd-question-gender"},(0,e.createElement)("button",{className:"mindd-question-gender-m"},(0,r.__)("Man","mindd")),(0,e.createElement)("button",{className:"mindd-question-gender-f"},(0,r.__)("Vrouw","mindd")))),(0,e.createElement)("div",{className:"mindd-question-card"},(0,e.createElement)("div",{className:"mindd-question-title"},(0,r.__)("Wat is uw geboortedatum?","mindd")),(0,e.createElement)("div",{className:"mindd-question-birthday"},(0,e.createElement)("div",{className:"mindd-question-birthday-day"},(0,r.__)("dd","mindd")),(0,e.createElement)("div",{className:"mindd-question-birthday-month"},(0,r.__)("mm","mindd")),(0,e.createElement)("div",{className:"mindd-question-birthday-year"},(0,r.__)("yyyy","mindd"))),(0,e.createElement)("div",{className:"mindd-question-submit"},(0,e.createElement)("button",null,(0,r.__)("Bevestigen","mindd"))))):(0,e.createElement)("div",(0,d.useBlockProps)(),(0,e.createElement)("div",null,"TODO uitleg tekstje voor het krijgen van een API key"))}(0,n.registerBlockType)("mindd/mindd",{apiVersion:2,icon:(0,e.createElement)(t.Icon,{icon:i}),attributes:{ApiKey:{type:"string"},widget_accent:{type:"string",default:"#00b2ff"},widget_background:{type:"string"},widget_foreground:{type:"string"},welcome_text:{type:"string",default:(0,r.__)("Voordat u belt, doorloop eerst deze vragen.","mindd")},branding_termsOfUseUrl:{type:"string",default:""},branding_name:{type:"string",default:(0,r.__)("Praktijk naam","mindd")},branding_phone_label:{type:"string",default:(0,r.__)("Telefoonnummer","mindd")},branding_phone_number:{type:"string",default:""}},edit:function(n){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(l,n),(0,e.createElement)(m,n))},save:function({attributes:n}){return(0,e.createElement)("div",o({},d.useBlockProps.save(),{style:{backgroundColor:n.bg_color,color:n.text_color}}),n.message)}})}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,t,a,i){if(!t){var d=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],i=e[c][2];for(var l=!0,o=0;o<t.length;o++)(!1&i||d>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[o])}))?t.splice(o--,1):(l=!1,i<d&&(d=i));if(l){e.splice(c--,1);var m=a();void 0!==m&&(n=m)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,a,i]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,46:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,i,d=t[0],l=t[1],o=t[2],m=0;if(d.some((function(n){return 0!==e[n]}))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(o)var c=o(r)}for(n&&n(t);m<d.length;m++)i=d[m],r.o(e,i)&&e[i]&&e[i][0](),e[d[m]]=0;return r.O(c)},t=self.webpackChunkmindd=self.webpackChunkmindd||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var a=r.O(void 0,[46],(function(){return r(794)}));a=r.O(a)}();