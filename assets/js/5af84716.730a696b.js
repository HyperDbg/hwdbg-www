"use strict";(self.webpackChunkhwdbg_website=self.webpackChunkhwdbg_website||[]).push([[905],{8461:(A,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var o=i(4848),t=i(8453);const n={sidebar_position:2},s="Ring Oscillator (RO)",r={id:"sensors/ring-oscillator",title:"Ring Oscillator (RO)",description:"A ring oscillator is a type of electronic oscillator consisting of an odd number of inverters connected in a loop. It generates a periodic oscillating signal by continuously switching states, creating a sequence of voltage pulses. The frequency of this oscillation is influenced by factors such as voltage, temperature, and the manufacturing process, making ring oscillators useful for detecting variations in these parameters. The following figure illustrates a ring oscillator with an odd number of stages.",source:"@site/docs/sensors/ring-oscillator.md",sourceDirName:"sensors",slug:"/sensors/ring-oscillator",permalink:"/docs/sensors/ring-oscillator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sensors/ring-oscillator.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Debugging Sensors",permalink:"/docs/sensors/"},next:{title:"Time-to-Digital Converter (TDC)",permalink:"/docs/sensors/time-to-digital-converter"}},a={},c=[];function l(A){const e={h1:"h1",img:"img",p:"p",strong:"strong",...(0,t.R)(),...A.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"ring-oscillator-ro",children:"Ring Oscillator (RO)"}),"\n",(0,o.jsxs)(e.p,{children:["A ring oscillator is a type of electronic oscillator consisting of an ",(0,o.jsx)(e.strong,{children:"odd number of inverters"})," connected in a loop. It generates a periodic oscillating signal by continuously switching states, creating a sequence of voltage pulses. The frequency of this oscillation is influenced by factors such as voltage, temperature, and the manufacturing process, making ring oscillators useful for detecting variations in these parameters. The following figure illustrates a ring oscillator with an odd number of stages."]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"An Illustration of a Ring Oscillator (RO). (Source: https://analogcircuitdesign.com/ring-oscillator/)",src:i(5244).A+"",width:"577",height:"159"})}),"\n",(0,o.jsx)(e.p,{children:"A ring oscillator module is embedded in hwdbg. It\r\ninvolves a circuit with an odd number of inverters. These circuits are often embedded in IP cores and the oscillation result is integrated with hardware debuggers to provide real-time frequency data, helping engineers and security researchers monitor and adjust system state accordingly. These sensors can help detect changes in operating conditions that might affect the performance and reliability of microchips and IP cores."})]})}function g(A={}){const{wrapper:e}={...(0,t.R)(),...A.components};return e?(0,o.jsx)(e,{...A,children:(0,o.jsx)(l,{...A})}):l(A)}},5244:(A,e,i)=>{i.d(e,{A:()=>o});const o="data:image/png;base64,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"},8453:(A,e,i)=>{i.d(e,{R:()=>s,x:()=>r});var o=i(6540);const t={},n=o.createContext(t);function s(A){const e=o.useContext(n);return o.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function r(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(t):A.components||t:s(A.components),o.createElement(n.Provider,{value:e},A.children)}}}]);