import fs from "node:fs/promises";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const OUT = "C:/Users/xl24j/Documents/FSU-CIS4930-CIS5930-Future-Edge-Networks/slides/Class_8_WiFi_History/WiFi_History_Protocols_and_Waveforms.pptx";
const RENDER = "C:/Users/xl24j/Documents/FSU-CIS4930-CIS5930-Future-Edge-Networks/.codex_tmp/wifi-history/rendered";

const W=1280,H=720;
const C={ink:"#111111",muted:"#5D6470",panel:"#EDEDED",rule:"#B8BCC4",blue:"#3D8DFF",light:"#DDF2FC",orange:"#FF8A3D",orangeLight:"#FFF0E5",green:"#39A96B",white:"#FFFFFF",dark:"#20242A"};
const FONT="Arial";
const SRC={
  ieeeTimeline:"https://standards.ieee.org/wp-content/uploads/interactive/web/wi-fi-timeline/index.html",
  ieeeFamily:"https://standards.ieee.org/ieee/802.11/10548/",
  ieeeBe:"https://standards.ieee.org/ieee/802.11be/7516/",
  ieeeIot:"https://standards.ieee.org/wp-content/uploads/import/documents/other/geps_07-iot_smart_cities.pdf",
  alliance:"https://extr-p-001.sitecorecontenthub.cloud/api/public/content/3f5d887b048d49cba95392b829960d1b?download=true&v=564c5124",
  ciscoAx:"https://www.cisco.com/c/en/us/products/collateral/wireless/white-paper-c11-740788.html",
  ciscoAc:"https://www.cisco.com/c/en/us/td/docs/wireless/controller/technotes/8-4/b_cisco_aironet_series_migrating_to802_11_ac.html",
  ciscoRates:"https://www.cisco.com/c/en/us/support/docs/wireless-mobility/wireless-lan-wlan/212892-802-11ac-wireless-throughput-testing-and.html",
  keysightAd:"https://helpfiles.keysight.com/csg/n7637/Content/Main/802.11ad%20Concepts.htm",
  keysightAdPdf:"https://www.keysight.com/us/en/assets/7018-03292/application-notes/5990-9697.pdf"
};

const p=Presentation.create({slideSize:{width:W,height:H}});

function box(s,x,y,w,h,fill=C.panel,lineFill="none",lineWidth=0,name="box"){
  return s.shapes.add({geometry:"rect",name,position:{left:x,top:y,width:w,height:h},fill,line:{style:"solid",fill:lineFill,width:lineWidth}});
}
function txt(s,text,x,y,w,h,size=22,color=C.ink,bold=false,align="left",name="text"){
  const sh=s.shapes.add({geometry:"textbox",name,position:{left:x,top:y,width:w,height:h},fill:"none",line:{style:"solid",fill:"none",width:0}});
  sh.text=text;
  sh.text.style={fontFamily:FONT,fontSize:size,color,bold,alignment:align,verticalAlignment:"middle"};
  return sh;
}
function circle(s,x,y,d,fill,label,labelColor=C.white,size=20){
  s.shapes.add({geometry:"ellipse",position:{left:x,top:y,width:d,height:d},fill,line:{style:"solid",fill:"none",width:0}});
  txt(s,label,x,y,d,d,size,labelColor,true,"center","circle-label");
}
function line(s,x,y,w,h,color=C.rule,width=2){box(s,x,y,w,h,color,color,width,"rule");}
function title(s,t,kicker="WI-FI HISTORY"){
  txt(s,kicker,54,30,500,24,13,C.muted,true,"left","kicker");
  txt(s,t,54,61,1172,56,35,C.ink,true,"left","slide-title");
  line(s,54,126,1172,2,C.rule,0);
}
function footer(s,n){txt(s,String(n).padStart(2,"0"),1170,684,52,18,12,C.muted,false,"right","page");}
function addSlide(t,k){const s=p.slides.add();s.background.fill=C.white;if(t)title(s,t,k);footer(s,p.slides.items.length);return s;}
function notes(s,bullets,sources){
  const body=bullets.map(x=>"• "+x).join("\n");
  const sourceBlock="[Sources]\n"+sources.map(x=>"- "+x).join("\n");
  s.speakerNotes.textFrame.setText(body+"\n\n"+sourceBlock);
}
function metric(s,x,y,w,label,value,accent=C.blue){
  txt(s,value,x,y,w,68,48,accent,true,"left","metric-value");
  txt(s,label,x,y+70,w,46,18,C.muted,false,"left","metric-label");
}
function pill(s,text,x,y,w,fill=C.light,color=C.ink){box(s,x,y,w,34,fill,"none",0,"pill");txt(s,text,x,y,w,34,15,color,true,"center","pill-text");}
function sectionLabel(s,text,y,color=C.blue){line(s,54,y+12,18,3,color,0);txt(s,text,84,y,260,28,16,C.muted,true,"left","section-label");}
function bullets(s,items,x,y,w,size=21,gap=48,color=C.ink){items.forEach((v,i)=>{circle(s,x,y+i*gap+6,14,C.blue,"",C.white,1);txt(s,v,x+28,y+i*gap,w-28,38,size,color,false,"left","bullet");});}
function genBand(s,label,year,x,w,color=C.blue){
  box(s,x,515,w,42,color,"none",0,"generation-band");txt(s,label,x,515,w,42,17,C.white,true,"center","generation-label");txt(s,year,x,562,w,26,14,C.muted,true,"center","generation-year");
}

// 1 — cover
{
 const s=addSlide(null);
 txt(s,"FUTURE EDGE NETWORKS",54,38,600,24,14,C.muted,true);
 txt(s,"A Brief History\nof Wi‑Fi",54,154,650,152,62,C.ink,true);
 txt(s,"Protocols, PHY waveforms, and the design choices behind 802.11b → be — plus the 60 GHz ad/ay branch",58,338,650,112,24,C.muted,false);
 box(s,790,118,360,410,C.dark);
 for(let i=0;i<9;i++){const hh=40+Math.abs(4-i)*22;box(s,825+i*33,345-hh,13,hh,i===4?C.orange:C.blue);}
 txt(s,"frequency",808,377,318,28,16,C.white,false,"center");
 for(let i=0;i<4;i++) line(s,832,450+i*18,275-i*36,3,i===2?C.orange:C.white,0);
 txt(s,"CIS4930 / CIS5930",54,638,420,28,17,C.muted,true);
 notes(s,["Open with a familiar question: why does the Wi‑Fi icon look unchanged while the radio underneath has changed repeatedly?","The lecture follows two threads: historical standardization and the PHY resource dimensions used to gain capacity."],[SRC.ieeeTimeline,SRC.alliance]);
}

// 2
{
 const s=addSlide("Wi‑Fi improved by spending new resource dimensions");
 const labels=[["SPECTRUM","2.4 → 5 → 6 → 60 GHz"],["BANDWIDTH","20 → 40 → 80 → 160 → 320 MHz"],["CONSTELLATION","BPSK → 64/256/1024/4096‑QAM"],["SPACE","SISO → SU‑MIMO → MU‑MIMO"],["SCHEDULING","one user → OFDMA resource units"],["LINKS","one band → multi‑link operation"]];
 labels.forEach((d,i)=>{const x=54+(i%3)*388,y=170+Math.floor(i/3)*205;txt(s,d[0],x,y,340,24,15,i===5?C.orange:C.blue,true);txt(s,d[1],x,y+38,340,78,25,C.ink,true);line(s,x,y+132,340,2,C.rule,0);});
 notes(s,["Use this as the organizing framework for the whole lecture.","Every later amendment keeps the core 802.11 family identity but adds one or more dimensions for peak rate, capacity, reliability, or latency."],[SRC.ieeeFamily,SRC.ieeeBe,SRC.ciscoAx]);
}

// 3
{
 const s=addSlide("An amendment name and a Wi‑Fi generation are not the same thing");
 const rows=[
  ["802.11b","Wi‑Fi 1","HR‑DSSS / CCK"],["802.11a","Wi‑Fi 2","OFDM at 5 GHz"],["802.11g","Wi‑Fi 3","OFDM at 2.4 GHz"],["802.11n","Wi‑Fi 4","HT: MIMO + 40 MHz"],["802.11ac","Wi‑Fi 5","VHT: wider + 256‑QAM"],["802.11ax","Wi‑Fi 6 / 6E","HE: OFDMA + 1024‑QAM"],["802.11be","Wi‑Fi 7","EHT: MLO + 320 MHz"],["802.11ad / ay","WiGig","Directional 60 GHz"]
 ];
 ["IEEE amendment","Market name","PHY shorthand"].forEach((v,i)=>txt(s,v,64+[0,260,510][i],158,[230,220,590][i],34,17,C.muted,true));
 rows.forEach((r,j)=>{const y=200+j*53;if(j%2===0)box(s,54,y-4,1172,48,"#F5F5F5");txt(s,r[0],66,y,220,38,20,j===7?C.orange:C.ink,true);txt(s,r[1],324,y,210,38,20,C.ink,false);txt(s,r[2],574,y,620,38,20,C.ink,false);});
 notes(s,["Explain that IEEE names technical amendments; the Wi‑Fi Alliance later introduced simpler generation names.","802.11ad and 802.11ay are a parallel 60 GHz branch commonly associated with WiGig rather than the numbered Wi‑Fi 1–7 sequence."],[SRC.ieeeTimeline,SRC.ieeeFamily,SRC.keysightAd]);
}

// 4
{
 const s=addSlide("Four milestones made consumer Wi‑Fi possible by 1999");
 line(s,100,350,1060,4,C.rule,0);
 const ms=[{x:130,y:"1971",h:"ALOHAnet",d:"Wireless packet networking proves shared radio access."},{x:470,y:"1985",h:"Unlicensed ISM",d:"FCC opens spectrum for spread-spectrum systems."},{x:810,y:"1990–97",h:"IEEE 802.11",d:"A common MAC/PHY standard replaces vendor islands."},{x:1100,y:"1999",h:"Wi‑Fi",d:"802.11a/b and interoperability certification arrive."}];
 ms.forEach((m,i)=>{circle(s,m.x-12,338,28,i===3?C.orange:C.blue,"",C.white,1);txt(s,m.y,m.x-70,278,140,34,18,C.muted,true,"center");txt(s,m.h,m.x-112,395,224,34,24,C.ink,true,"center");txt(s,m.d,m.x-118,442,236,94,17,C.muted,false,"center");});
 notes(s,["Connect ALOHAnet to random access, then connect unlicensed spectrum to permissionless innovation.","The 1997 base standard existed before the Wi‑Fi brand; 1999 is the commercial inflection point with 802.11a/b and interoperability certification."],[SRC.ieeeTimeline,SRC.alliance]);
}

// 5
{
 const s=addSlide("The recognizable 802.11 protocol lives above changing PHYs");
 const layers=[{y:170,h:78,l:"LLC / IP / applications",f:"Outside 802.11"},{y:260,h:115,l:"802.11 MAC",f:"Association • framing • ACK • security • CSMA/CA"},{y:387,h:115,l:"PLCP",f:"Preamble • header • rate signaling • PPDU format"},{y:514,h:90,l:"PMD / waveform",f:"DSSS • OFDM • MIMO • OFDMA • single carrier"}];
 layers.forEach((a,i)=>{box(s,90,a.y,700,a.h,i<1?"#F5F5F5":i===1?C.light:i===2?"#D8E7FF":C.dark,C.white,0);txt(s,a.l,116,a.y+8,250,a.h-16,25,i===3?C.white:C.ink,true);txt(s,a.f,380,a.y+8,380,a.h-16,18,i===3?C.white:C.muted,false);});
 txt(s,"Same family",870,220,280,36,28,C.blue,true,"center");txt(s,"Different ways to turn bits into radio energy",850,315,320,120,26,C.ink,true,"center");line(s,1004,448,4,122,C.orange,0);txt(s,"PHY evolution",884,580,244,30,18,C.orange,true,"center");
 notes(s,["Define a PPDU as the PHY-layer transmission unit placed on air.","The MAC delivers familiar behaviors across generations, while PLCP/PMD details define the preamble, coding, modulation, channel width, and spatial streams."],[SRC.ieeeFamily]);
}

// 6
{
 const s=addSlide("The 1997 baseline solved shared access before it solved speed");
 sectionLabel(s,"COMMON MAC IDEA",157);
 txt(s,"Listen → wait → random backoff → transmit → ACK",54,196,720,52,28,C.ink,true);
 for(let i=0;i<5;i++){box(s,60+i*143,300,118,58,i===3?C.blue:C.panel);txt(s,["sense","DIFS","backoff","DATA","ACK"][i],60+i*143,300,118,58,17,i===3?C.white:C.ink,true,"center");if(i<4)txt(s,"→",179+i*143,309,23,40,22,C.muted,true,"center");}
 box(s,840,168,330,390,"#F5F5F5");txt(s,"Original PHY choices",870,198,270,34,24,C.ink,true);bullets(s,["2.4 GHz","1 or 2 Mb/s","FHSS","DSSS","Infrared option"],880,260,250,20,52);
 txt(s,"CSMA/CA avoids collisions; it cannot detect them while transmitting.",54,480,700,76,23,C.muted,false);
 notes(s,["Contrast Ethernet collision detection with wireless collision avoidance.","A station may not hear every other station, and its own transmission overwhelms the receiver; hence carrier sense, random backoff, positive ACK, and optional RTS/CTS."],[SRC.ieeeTimeline,SRC.ieeeFamily]);
}

// 7
{
 const s=addSlide("802.11b made 2.4 GHz practical with coded spreading");
 metric(s,54,162,230,"maximum PHY rate","11 Mb/s");metric(s,304,162,230,"channel width","≈22 MHz");metric(s,554,162,230,"band","2.4 GHz");
 txt(s,"One symbol becomes a patterned chip sequence",54,310,620,34,24,C.ink,true);
 const chips=[1,1,-1,1,-1,-1,1,-1];
 chips.forEach((v,i)=>{const x=64+i*66;box(s,x,390,54,68,v>0?C.blue:C.dark);txt(s,v>0?"+":"−",x,390,54,68,28,C.white,true,"center");});
 txt(s,"CCK encodes information in the phase relationships of code words; spreading provides processing gain and robustness.",54,490,600,94,20,C.muted,false);
 box(s,770,174,400,390,C.light);txt(s,"PHY path",808,204,324,30,19,C.muted,true);txt(s,"bits",808,274,82,40,24,C.ink,true,"center");txt(s,"→",896,274,42,40,24,C.blue,true,"center");txt(s,"CCK code",944,274,150,40,24,C.ink,true,"center");txt(s,"→",1095,274,42,40,24,C.blue,true,"center");txt(s,"DSSS",950,345,150,48,30,C.blue,true,"center");txt(s,"1 / 2 Mb/s: Barker coding\n5.5 / 11 Mb/s: CCK",828,430,284,72,19,C.ink,false,"center");
 notes(s,["Start with 802.11b because DSSS is intuitive: replace each symbol with a longer chip pattern.","Avoid saying that CCK merely repeats bits. It selects complex code words whose phases carry multiple bits while preserving useful correlation properties.","The familiar three non-overlapping 2.4 GHz channels in North America arise because the occupied channels are much wider than their 5 MHz center spacing."],[SRC.ieeeTimeline,SRC.ieeeFamily]);
}

// 8
{
 const s=addSlide("802.11a replaced spreading with many orthogonal subcarriers");
 metric(s,54,158,200,"maximum rate","54 Mb/s");metric(s,280,158,200,"channel","20 MHz");metric(s,506,158,200,"band","5 GHz");
 txt(s,"OFDM spectrum: overlapping subcarriers, orthogonal at sampling points",54,290,820,34,23,C.ink,true);
 for(let i=0;i<16;i++){const h=35+145*Math.pow(Math.sin((i+1)*1.7),2);box(s,72+i*42,524-h,14,h,i%4===0?C.orange:C.blue);}
 line(s,62,526,700,3,C.dark,0);txt(s,"frequency →",642,545,130,24,15,C.muted,true,"right");
 box(s,820,170,350,385,"#F5F5F5");txt(s,"20 MHz OFDM",852,200,286,36,25,C.ink,true);bullets(s,["64-point FFT","48 data subcarriers","4 pilot subcarriers","BPSK to 64-QAM","6–54 Mb/s"],850,265,286,20,51);
 notes(s,["Explain orthogonality operationally: each subcarrier is sampled where the others cross zero, allowing spectra to overlap without ideal inter-carrier interference.","The cyclic prefix converts multipath delay spread into a manageable guard interval and supports simple frequency-domain equalization.","802.11a reached 54 Mb/s but early 5 GHz propagation and device cost slowed mass adoption relative to 802.11b."],[SRC.ieeeTimeline,SRC.ieeeFamily]);
}

// 9
{
 const s=addSlide("802.11g brought the 802.11a waveform back to 2.4 GHz");
 box(s,70,180,470,330,C.light);txt(s,"802.11b neighborhood",104,216,400,38,26,C.ink,true,"center");txt(s,"2.4 GHz",104,286,400,54,42,C.blue,true,"center");txt(s,"DSSS / CCK",104,365,400,40,26,C.ink,true,"center");
 box(s,740,180,470,330,"#F5F5F5");txt(s,"802.11a engine",774,216,400,38,26,C.ink,true,"center");txt(s,"OFDM",774,286,400,54,42,C.blue,true,"center");txt(s,"up to 54 Mb/s",774,365,400,40,26,C.ink,true,"center");
 txt(s,"+",603,282,74,66,52,C.orange,true,"center");txt(s,"Backward-compatible mixed networks pay protection overhead when legacy 802.11b stations are present.",160,550,960,54,22,C.muted,false,"center");
 notes(s,["Frame 802.11g as a strategic recombination: the OFDM PHY ideas of 802.11a in the popular 2.4 GHz ecosystem.","Backward compatibility accelerated adoption but created mixed-mode protection overhead."],[SRC.ieeeTimeline,SRC.ieeeFamily]);
}

// 10
{
 const s=addSlide("802.11n scales rate in bandwidth, space, and time");
 const labels=[["40 MHz","channel bonding"],["4 streams","SU‑MIMO"],["64‑QAM","denser symbols"],["A‑MPDU","frame aggregation"]];
 labels.forEach((d,i)=>{const x=54+(i%2)*586,y=168+Math.floor(i/2)*170;txt(s,d[0],x,y,250,52,36,C.blue,true);txt(s,d[1],x,y+56,450,34,21,C.muted,false);line(s,x,y+115,500,2,C.rule,0);});
 txt(s,"Antenna arrays turn multipath from an impairment into parallel spatial streams.",54,526,700,72,26,C.ink,true);
 circle(s,875,540,60,C.dark,"AP",C.white,18);circle(s,1100,540,60,C.blue,"STA",C.white,18);
 [0,1,2].forEach(i=>{const y=526+i*24;line(s,935,y,165,3,i===1?C.orange:C.blue,0);});
 pill(s,"2.4 + 5 GHz",885,620,220,C.light);
 notes(s,["802.11n is the major architectural jump: MIMO, channel bonding, short guard interval, and aggregation work together.","Maximum standardized configuration reaches 600 Mb/s using four spatial streams, 40 MHz, 64-QAM 5/6, and short GI; typical client devices implement fewer streams."],[SRC.ieeeTimeline,SRC.ciscoRates]);
}

// 11
{
 const s=addSlide("802.11ac pushes the 5 GHz OFDM formula harder");
 const xs=[54,330,606,882];const big=["160 MHz","256‑QAM","8 streams","DL MU‑MIMO"];const small=["up to 80+80 / 160","8 bits per symbol","standard maximum","Wave 2 capability"];
 big.forEach((v,i)=>{txt(s,v,xs[i],178,240,56,33,i===3?C.orange:C.blue,true,"center");txt(s,small[i],xs[i],244,240,42,17,C.muted,false,"center");});
 line(s,54,315,1068,2,C.rule,0);
 txt(s,"Wider",70,370,240,42,28,C.ink,true);box(s,70,430,100,42,C.blue);box(s,174,430,200,42,C.light);txt(s,"20",88,480,64,24,15,C.muted,true,"center");txt(s,"+ 40 + 80 + 160 MHz",174,480,200,24,15,C.muted,true,"center");
 txt(s,"Tighter",448,370,240,42,28,C.ink,true);const pts=[[0,0],[0,1],[1,0],[1,1]];for(let i=0;i<8;i++)for(let j=0;j<8;j++)circle(s,470+i*23,438+j*16,6,(i+j)%3===0?C.orange:C.blue,"",C.white,1);
 txt(s,"More users",824,370,280,42,28,C.ink,true);circle(s,854,452,58,C.dark,"AP",C.white,18);[0,1,2].forEach(i=>{const yy=440+i*65;circle(s,1025,yy-20,42,C.blue,"U"+(i+1),C.white,14);line(s,912,yy,113,3,i===1?C.orange:C.blue,0);});
 notes(s,["Summarize 802.11ac with Cisco's memorable dimensions: wider channels, tighter modulation, more spatial streams, and downlink MU-MIMO.","256-QAM carries 8 coded bits per subcarrier symbol but requires higher SNR than 64-QAM.","Maximum PHY rates are configuration ceilings, not expected application throughput."],[SRC.ciscoAc,SRC.ciscoRates]);
}

// 12
{
 const s=addSlide("802.11ax optimizes dense efficiency, not only peak speed");
 txt(s,"Before: one user occupies the channel",54,172,530,36,24,C.ink,true);txt(s,"802.11ax: users share frequency in one PPDU",660,172,566,36,24,C.ink,true);
 const users=[C.blue,C.orange,C.green,"#8B6CEF"];
 box(s,60,254,510,100,"#F5F5F5");for(let i=0;i<20;i++)box(s,72+i*24,278,18,52,C.blue);txt(s,"one scheduled user",60,374,510,26,18,C.muted,false,"center");
 box(s,666,254,510,100,"#F5F5F5");for(let i=0;i<20;i++)box(s,678+i*24,278,18,52,users[Math.floor(i/5)]);txt(s,"four resource-unit allocations",666,374,510,26,18,C.muted,false,"center");
 const call=[["OFDMA","frequency scheduling"],["UL + DL MU‑MIMO","spatial scheduling"],["1024‑QAM","10 bits/symbol"],["BSS coloring","spatial reuse"],["TWT","power scheduling"]];
 call.forEach((d,i)=>{const x=64+i*230;txt(s,d[0],x,470,210,34,20,i===4?C.orange:C.blue,true,"center");txt(s,d[1],x,510,210,48,16,C.muted,false,"center");});
 notes(s,["OFDMA is the conceptual center: an AP partitions OFDM subcarriers into resource units for multiple stations in the same transmission opportunity.","802.11ax adds frequency as a multiuser allocation dimension on top of time and space.","The design target is high efficiency in dense deployments, not simply a larger single-link headline rate."],[SRC.ciscoAx,SRC.ieeeFamily]);
}

// 13
{
 const s=addSlide("802.11ax uses 4× narrower subcarrier spacing");
 const rows=[{y:190,l:"802.11a/g/n/ac",sub:"312.5 kHz spacing • 3.2 μs useful symbol",n:16,color:C.dark},{y:405,l:"802.11ax HE",sub:"78.125 kHz spacing • 12.8 μs useful symbol",n:40,color:C.blue}];
 rows.forEach(r=>{txt(s,r.l,54,r.y,260,36,23,r.color,true);txt(s,r.sub,54,r.y+42,340,48,17,C.muted,false);line(s,430,r.y+72,720,3,C.rule,0);for(let i=0;i<r.n;i++){const x=444+i*(680/(r.n-1));box(s,x,r.y+24,4,48,r.color);}});
 txt(s,"4× more FFT points in the same 20 MHz channel",700,325,450,42,28,C.orange,true,"center");
 txt(s,"Longer symbols improve tolerance to delay spread and create finer-grained resource units; guard intervals adapt to the environment.",420,558,750,56,20,C.ink,false,"center");
 notes(s,["For a 20 MHz channel, legacy OFDM uses 312.5 kHz subcarrier spacing and 3.2 μs useful symbol time; HE OFDM uses 78.125 kHz and 12.8 μs.","A longer OFDM symbol reduces the relative cost of a longer guard interval and creates more subcarriers that can be grouped into resource units.","The diagram is conceptual and not a literal spectrum mask."],[SRC.ciscoAx]);
}

// 14
{
 const s=addSlide("Wi‑Fi 6E adds spectrum, not a new 802.11 waveform");
 const bands=[{x:54,w:310,l:"2.4 GHz",s:"range + legacy",c:C.dark},{x:384,w:370,l:"5 GHz",s:"capacity + mature ecosystem",c:C.blue},{x:774,w:452,l:"6 GHz",s:"clean wide channels for Wi‑Fi 6E/7",c:C.orange}];
 bands.forEach(b=>{box(s,b.x,235,b.w,160,b.c);txt(s,b.l,b.x,260,b.w,55,36,C.white,true,"center");txt(s,b.s,b.x+16,330,b.w-32,42,18,C.white,false,"center");});
 txt(s,"Same HE PHY/MAC toolbox",54,470,420,44,28,C.ink,true);txt(s,"New operating spectrum and channel plan",54,525,540,44,28,C.orange,true);
 txt(s,"A band extension is not the same as a new IEEE amendment.",720,490,460,66,23,C.muted,false,"center");
 notes(s,["Clarify the naming trap: Wi‑Fi 6E is Wi‑Fi 6 / 802.11ax extended into 6 GHz; it is not a separate PHY generation.","Regulatory channel availability varies by country, so avoid implying identical 6 GHz allocations worldwide."],[SRC.ieeeFamily,SRC.ciscoRates]);
}

// 15
{
 const s=addSlide("802.11be makes several links behave like one connection");
 circle(s,142,350,90,C.dark,"AP",C.white,24);circle(s,1055,350,90,C.blue,"STA",C.white,22);
 const lanes=[{y:245,c:C.dark,l:"2.4 GHz"},{y:350,c:C.blue,l:"5 GHz"},{y:455,c:C.orange,l:"6 GHz"}];
 lanes.forEach(a=>{line(s,232,a.y+43,823,8,a.c,0);pill(s,a.l,555,a.y+18,170,a.c,C.white);});
 txt(s,"MULTI‑LINK OPERATION",450,160,390,34,22,C.orange,true,"center");
 const feats=[["320 MHz","channel width"],["4096‑QAM","12 bits/symbol"],["puncturing","use clean subchannels"],[">30 Gb/s","required max mode"]];
 feats.forEach((d,i)=>{const x=80+i*292;txt(s,d[0],x,568,250,40,28,i===3?C.orange:C.blue,true,"center");txt(s,d[1],x,611,250,30,16,C.muted,false,"center");});
 notes(s,["MLO lets a device establish and coordinate links across bands; implementations can use links for throughput, load balancing, redundancy, or latency reduction.","802.11be adds 320 MHz channels, 4096-QAM, flexible puncturing, and other enhancements while preserving backward compatibility.","IEEE 802.11be-2024 requires at least one mode supporting at least 30 Gb/s at the MAC service access point; marketing peak PHY figures may be higher."],[SRC.ieeeBe,SRC.ieeeFamily]);
}

// 16
{
 const s=addSlide("802.11ad uses enormous bandwidth at 60 GHz");
 metric(s,54,160,250,"channel width","2.16 GHz",C.orange);metric(s,340,160,250,"maximum PHY rate","≈6.8 Gb/s",C.orange);metric(s,626,160,250,"range","room scale",C.orange);
 box(s,54,320,710,220,C.orangeLight);txt(s,"Three PHY modes",84,350,250,32,23,C.ink,true);bullets(s,["Control PHY: robust spread BPSK","Single‑carrier PHY: practical high rate","OFDM PHY: multicarrier option"],90,408,620,20,48,C.ink);
 circle(s,910,330,72,C.dark,"AP",C.white,20);circle(s,1095,480,60,C.orange,"STA",C.white,17);
 for(let i=0;i<5;i++){line(s,976,354+i*7,122+i*5,3,C.orange,0);}
 txt(s,"Beam training is essential",820,576,350,36,22,C.ink,true,"center");
 notes(s,["802.11ad is the Directional Multi-Gigabit branch around 60 GHz.","Its 2.16 GHz-wide channels make multi-gigabit rates possible without relying only on extremely dense modulation.","High path and penetration loss shrink coverage but enable directional reuse; beam training aligns transmit and receive sectors."],[SRC.ieeeFamily,SRC.keysightAd,SRC.keysightAdPdf]);
}

// 17
{
 const s=addSlide("802.11ay turns the 60 GHz link into a wider, spatial system");
 const before={x:70,y:210,w:460,h:310};const after={x:750,y:210,w:460,h:310};
 box(s,before.x,before.y,before.w,before.h,"#F5F5F5");box(s,after.x,after.y,after.w,after.h,C.orangeLight);
 txt(s,"802.11ad",before.x,before.y+34,before.w,42,30,C.ink,true,"center");txt(s,"one 2.16 GHz channel\ndirectional single link",before.x+40,before.y+120,before.w-80,100,24,C.muted,false,"center");
 txt(s,"802.11ay",after.x,after.y+34,after.w,42,30,C.orange,true,"center");txt(s,"channel bonding + MIMO\nat least one ≥20 Gb/s mode",after.x+40,after.y+120,after.w-80,100,24,C.ink,false,"center");
 txt(s,"→",592,322,96,60,52,C.blue,true,"center");
 txt(s,"60 GHz evolves from a cable-replacement idea toward high-capacity access and backhaul.",130,570,1020,62,25,C.ink,true,"center");
 notes(s,["802.11ay enhances operation in license-exempt bands above 45 GHz and requires at least one mode delivering at least 20 Gb/s at the MAC service access point.","Key extensions include channel bonding/aggregation, MIMO, improved beamforming, and longer-range use cases."],[SRC.ieeeFamily,SRC.ieeeIot]);
}

// 18
{
 const s=addSlide("Four waveform ideas explain most of Wi‑Fi’s PHY history");
 const cols=[{x:54,t:"DSSS / CCK",d:"Spread symbols across chips",c:C.dark},{x:350,t:"OFDM",d:"Parallel orthogonal tones",c:C.blue},{x:646,t:"OFDMA",d:"Assign tone groups to users",c:C.green},{x:942,t:"60 GHz SC",d:"Very wide directional carrier",c:C.orange}];
 cols.forEach((a,i)=>{txt(s,a.t,a.x,170,250,40,26,a.c,true,"center");box(s,a.x,230,250,220,"#F5F5F5");if(i===0){[1,1,-1,1,-1,-1].forEach((v,j)=>box(s,a.x+28+j*32,310,25,v>0?58:30,a.c));}if(i===1){for(let j=0;j<9;j++)box(s,a.x+30+j*22,365-(25+75*Math.pow(Math.sin(j*1.3),2)),8,25+75*Math.pow(Math.sin(j*1.3),2),a.c);}if(i===2){const cs=[C.green,C.blue,C.orange];for(let r=0;r<3;r++)for(let j=0;j<7;j++)box(s,a.x+28+j*28,270+r*48,22,38,cs[r]);}if(i===3){for(let j=0;j<80;j++){const v=Math.sin(j*.7)*Math.exp(-Math.pow((j-40)/25,2));box(s,a.x+25+j*2.5,338-v*70,3,4,a.c);}}txt(s,a.d,a.x+10,478,230,62,18,C.muted,false,"center");});
 txt(s,"Waveform choice follows the channel: interference, delay spread, bandwidth, mobility, and hardware constraints.",95,584,1090,52,23,C.ink,true,"center");
 notes(s,["Use this slide for retrieval practice: ask students to match standards to waveform families.","DSSS/CCK: 802.11b. OFDM: 802.11a/g/n/ac and the basis of ax/be. OFDMA: multiuser extension emphasized by ax/be. 60 GHz single carrier: widely used in ad and enhanced by ay.","The sketches are conceptual, not calibrated time-domain or spectrum-mask plots."],[SRC.ieeeFamily,SRC.ciscoAx,SRC.keysightAd]);
}

// 19
{
 const s=addSlide("The mainstream branch evolves continuously from b to be");
 const rows=[
  ["b","1999","2.4","≈22","CCK","11 Mb/s"],["a","1999","5","20","OFDM","54 Mb/s"],["g","2003","2.4","20","OFDM","54 Mb/s"],["n","2009","2.4/5","20/40","OFDM + MIMO","600 Mb/s"],["ac","2013","5","20–160","OFDM + MU‑MIMO","6.9 Gb/s"],["ax","2021","2.4/5/6*","20–160","OFDMA + MU‑MIMO","9.6 Gb/s"],["be","2024","2.4/5/6","20–320","EHT + MLO","≥30 Gb/s†"]
 ];
 const head=["802.11","year","GHz","MHz","key PHY idea","headline maximum"];
 const widths=[100,130,155,155,330,250],xs=[];let xx=54;widths.forEach(w=>{xs.push(xx);xx+=w;});
 head.forEach((v,i)=>txt(s,v,xs[i]+8,155,widths[i]-16,36,15,C.muted,true));
 rows.forEach((r,j)=>{const y=198+j*56;if(j%2===0)box(s,54,y-4,1172,50,"#F5F5F5");r.forEach((v,i)=>txt(s,v,xs[i]+8,y,widths[i]-16,40,i===0?22:18,i===0?(j===6?C.orange:C.blue):C.ink,i===0));});
 txt(s,"* 6 GHz via Wi‑Fi 6E certification / regulation.  † IEEE 802.11be requirement is measured at the MAC SAP.",54,628,1090,26,14,C.muted,false);
 notes(s,["Treat the maxima as comparison anchors, not promised throughput.","The years are standard milestones; commercial availability and Wi‑Fi certification dates can differ.","The standards allow configurations beyond what typical phones and access points implement."],[SRC.ieeeTimeline,SRC.ieeeFamily,SRC.ieeeBe,SRC.ciscoRates]);
}

// 20
{
 const s=addSlide("A PHY rate is the product of several optimistic choices");
 txt(s,"Rate ∝",90,200,160,54,38,C.ink,true);pill(s,"bandwidth",250,205,170,C.light);txt(s,"×",430,205,40,36,28,C.muted,true,"center");pill(s,"bits / symbol",480,205,190,C.light);txt(s,"×",680,205,40,36,28,C.muted,true,"center");pill(s,"code rate",730,205,160,C.light);txt(s,"×",900,205,40,36,28,C.muted,true,"center");pill(s,"spatial streams",950,205,210,C.orangeLight);
 const losses=[["preamble + pilots","airtime overhead"],["contention + ACK","MAC overhead"],["retries","channel loss"],["TCP / app","protocol overhead"]];
 losses.forEach((d,i)=>{const x=64+i*292;txt(s,d[0],x,395,250,38,22,C.blue,true,"center");txt(s,d[1],x,443,250,34,17,C.muted,false,"center");line(s,x+24,500,202,5,C.rule,0);});
 txt(s,"Application throughput is always lower—and depends on distance, interference, clients, and scheduler behavior.",120,570,1040,60,25,C.ink,true,"center");
 notes(s,["Use this slide to inoculate students against comparing standards only by their maximum PHY rate.","Wider bandwidth and higher QAM require suitable spectrum and SNR; more spatial streams require antennas and favorable channels; multiuser gains require traffic from multiple users.","Ask which factor fails first when moving farther from the access point."],[SRC.ciscoRates,SRC.ciscoAc]);
}

// 21
{
 const s=addSlide("The MAC and security story evolves alongside the waveform");
 line(s,100,350,1060,4,C.rule,0);
 const m=[
  {x:140,y:"1997",h:"CSMA/CA",d:"DCF, ACK, RTS/CTS",c:C.blue},
  {x:350,y:"1999",h:"WEP",d:"privacy goal; later broken",c:C.dark},
  {x:560,y:"2004",h:"WPA2",d:"802.11i / CCMP",c:C.blue},
  {x:770,y:"2009",h:"aggregation",d:"A‑MPDU / A‑MSDU",c:C.green},
  {x:980,y:"2018+",h:"WPA3",d:"SAE + stronger protection",c:C.orange},
  {x:1140,y:"2024",h:"MLO",d:"coordinate links",c:C.orange}
 ];
 m.forEach(a=>{circle(s,a.x-11,339,24,a.c,"",C.white,1);txt(s,a.y,a.x-65,284,130,28,16,C.muted,true,"center");txt(s,a.h,a.x-82,390,164,34,20,C.ink,true,"center");txt(s,a.d,a.x-84,434,168,62,16,C.muted,false,"center");});
 txt(s,"PHY innovation changes what is possible; MAC innovation determines who gets airtime and how safely.",130,565,1020,56,24,C.ink,true,"center");
 notes(s,["Keep security chronology high level: WEP's weaknesses motivated WPA as a transition and 802.11i/WPA2 as a durable redesign; WPA3 strengthens authentication and protection.","Aggregation was essential because faster PHYs otherwise expose fixed per-frame overhead.","MLO is both a PHY/MAC coordination story: multiple links must be discovered, negotiated, and scheduled."],[SRC.ieeeFamily,SRC.alliance,SRC.ieeeBe]);
}

// 22
{
 const s=addSlide("Wi‑Fi and cellular optimize different edges of the same network");
 box(s,54,172,520,370,C.light);box(s,706,172,520,370,C.orangeLight);
 txt(s,"Wi‑Fi",54,205,520,48,34,C.blue,true,"center");bullets(s,["unlicensed spectrum","local ownership","contention-based access","very wide local channels","rapid device ecosystem"],104,285,420,20,49);
 txt(s,"Cellular",706,205,520,48,34,C.orange,true,"center");bullets(s,["licensed / managed spectrum","operator control","scheduled access","wide-area mobility","integrated service guarantees"],756,285,420,20,49);
 txt(s,"Future edge systems choose, combine, and hand off across both.",220,590,840,46,27,C.ink,true,"center");
 notes(s,["Relate the Wi‑Fi history back to Future Edge Networks.","Avoid a winner/loser framing: Wi‑Fi excels at locally owned, high-capacity access; cellular excels at managed wide-area mobility. Modern devices and edge services use both.","Invite examples: campus offload, AR/VR, industrial links, fixed wireless access, and multi-access edge computing."],[SRC.ieeeIot]);
}

// 23
{
 const s=addSlide("Read any new Wi‑Fi generation through five questions");
 const qs=["What spectrum does it use?","What does one PPDU look like?","How are users separated?","What channel conditions does it assume?","Which bottleneck moved next?"];
 qs.forEach((q,i)=>{txt(s,String(i+1).padStart(2,"0"),74,162+i*86,68,48,26,i===4?C.orange:C.blue,true,"center");txt(s,q,160,162+i*86,940,48,27,C.ink,true);line(s,160,219+i*86,940,2,C.rule,0);});
 txt(s,"b → a/g → n → ac → ax → be",760,625,390,30,18,C.muted,true,"right");
 notes(s,["Close by asking students to apply the five questions to one generation not emphasized in class.","Suggested check: Why can 4096-QAM increase peak rate but reduce robustness? Why can OFDMA improve efficiency without changing the total channel bandwidth? Why is 60 GHz directional?","The durable lesson is not memorizing letters; it is recognizing the resource dimension and engineering tradeoff each amendment introduces."],[SRC.ieeeFamily,SRC.ieeeBe]);
}

async function writeBlob(path,blob){await fs.writeFile(path,new Uint8Array(await blob.arrayBuffer()));}
await fs.mkdir(RENDER,{recursive:true});
for(const [i,s] of p.slides.items.entries()){
  const stem=`slide-${String(i+1).padStart(2,"0")}`;
  await writeBlob(`${RENDER}/${stem}.png`,await p.export({slide:s,format:"png",scale:1}));
  const layout=await s.export({format:"layout"});
  await fs.writeFile(`${RENDER}/${stem}.layout.json`,await layout.text());
}
await writeBlob(`${RENDER}/montage.webp`,await p.export({format:"webp",montage:true,scale:1}));
const pptx=await PresentationFile.exportPptx(p);
await pptx.save(OUT);
console.log(`Wrote ${OUT} with ${p.slides.items.length} slides`);
