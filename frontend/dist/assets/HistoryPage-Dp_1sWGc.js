import{r as a,T as l,c as i,j as t,L as m,F as x}from"./index-DvTs7cMd.js";const b="_texter_161gj_1",k="_text_161gj_1",g="_videocontainer_161gj_29",j="_horizont_161gj_67",s={texter:b,text:k,videocontainer:g,horizont:j},p=()=>{const{theme:r}=a.useContext(l),e=r==="dark"?s.dark:"",c=i(s.texter,e);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:c,children:t.jsxs("h2",{className:s.text,children:["КАК ВАРЯТ ПИВО ",t.jsx("br",{}),"НА ЗАВОДЕ XIX ВЕКА"]})}),t.jsx("div",{className:`${s.videocontainer} ${s.horizont}`,children:t.jsx("iframe",{src:"https://rutube.ru/play/embed/e5565e32053da4b3fe3c9f32036ab458",frameBorder:"0",allow:"clipboard-write; autoplay",allowFullScreen:!0})})]})},v="_historyPage_1d3xr_1",y="_pageContent_1d3xr_5",f="_menuopen_1d3xr_11",w="_dark_1d3xr_16",N="_button_container_1d3xr_20",T="_button_back_link_1d3xr_44",C="_button_back_1d3xr_44",o={historyPage:v,pageContent:y,menuopen:f,dark:w,button_container:N,button_back_link:T,button_back:C},P=()=>{a.useLayoutEffect(()=>{window.scrollTo({top:0,left:0,behavior:"auto"})});const r=window.localStorage.getItem("theme"),[e,c]=a.useState(r||"light");a.useEffect(()=>{const n=document.documentElement,h=n.style.scrollBehavior;n.style.scrollBehavior="auto",window.scrollTo(0,0),n.style.scrollBehavior=h,window.localStorage.setItem("theme",e),document.body.style.backgroundColor=e==="dark"?"#000":"#fff"},[e]);const d=()=>{c(n=>n==="light"?"dark":"light")},_=e==="dark"?o.dark:"",u=i(o.historyPage,_);return t.jsx(l.Provider,{value:{theme:e,toggleTheme:d},children:t.jsxs("div",{className:u,children:[t.jsx("div",{className:o.button_container,children:t.jsx(m,{to:"/home",className:o.button_back_link,children:t.jsx("button",{className:`${o.button_back} ${e==="dark"?o.dark:""}`})})}),t.jsx("div",{className:o.pageContent,children:t.jsx(p,{})}),t.jsx(x,{})]})})};export{P as default};