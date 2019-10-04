/* SiteCatalyst code version: H.24.4.
Copyright 1996-2012 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

/* Code updates

2013-02-28 Update with Video Tracking code
2012-05-17 Updated code to H244
2012-05-14 Update PPV and referrers into an eVar
2012-04-17 Updated eVar duplication into Dynamic Variables

*/

var SCCodeVersion="H24.4|2012.5.17"

var s_account_legacy="gjincslegacyinc" // need to populate with DEV/PROD report suite depending on the environment
var s_legacy=s_gi(s_account_legacy)
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
s_legacy.charSet="UTF-8"
/* Conversion Config */
s_legacy.currencyCode="USD"
/* Link Tracking Config */
s_legacy.trackDownloadLinks=true
s_legacy.trackExternalLinks=true
s_legacy.trackInlineStats=true
s_legacy.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s_legacy.linkInternalFilters="javascript:,inc.com,etouches.com"
s_legacy.linkLeaveQueryString=false
s_legacy.linkTrackVars="None"
s_legacy.linkTrackEvents="None"
s_legacy.enableVideoTracking=true

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s_legacy.trackingServer="grunerandjahr.112.2o7.net"

/* Form Analysis Config (should be above doPlugins section) */
s_legacy.formList="ICM_iPad_Premium1" //comma delimeted list
s_legacy.trackFormList=true
s_legacy.trackPageName=true
s_legacy.useCommerce=false
s_legacy.varUsed="prop24"
s_legacy.eventList="" //Abandon,Success,Error

/* Plugin Config */
s_legacy.usePlugins=true
function s_doPlugins(s_legacy) {

	s_legacy.plugins=""; //stop sending browser plug-ins

	


  /* JS Version Control */
	s_legacy.prop25=SCCodeVersion;

  /* Track External Campaign */
	if(!s_legacy.campaign)
		s_legacy.campaign=s_legacy.getQueryParam('cid');
		s_legacy.campaign=s_legacy.getValOnce(s_legacy.campaign,'s_campaign',0);
		
	/* Campaign Stacking */
	s_legacy.eVar19=s_legacy.crossVisitParticipation(s_legacy.campaign,'s_cpm','30','5','>');

  /* Navigation Source */
	s_legacy.prop7=s_legacy.eVar7=s_legacy.getQueryParam('nav');
    s_legacy.eVar7=s_legacy.getValOnce(s_legacy.eVar7,'s_nav',0);

	
  /* Populate Time Parting */
	var currentDate = new Date()
	var year = currentDate.getFullYear()
	s_legacy.prop17=s_legacy.getTimeParting('h','-5',year)+":"+s_legacy.getTimeParting('d','-5',year)+":"+s_legacy.getTimeParting('w','-5',year);
	s_legacy.eVar15="D=c17";
	
  /* New-Returning Visit */
	s_legacy.prop18=s_legacy.getNewRepeat();
	s_legacy.eVar16="D=c18";
	
  /* Get Visit number for duration of the month */
	s_legacy.prop19=s_legacy.getVisitNum('m');
	s_legacy.eVar17="D=c19";
	
  /* Days since last visit */
	s_legacy.prop20=s_legacy.getDaysSinceLastVisit('s_lv');
	s_legacy.eVar18="D=c20";
	
  /* Set the Hierachy 1 from the Page Name */
	if(s_legacy.prop4 && s_legacy.prop4!=""){
		/* Returns page name as lowercase */
		s_legacy.prop4=s_legacy.prop4.toLowerCase();
		// Sets hierarchy to be equal to the pageName
		s_legacy.hier1="D=pageName";
	}
	
	/* Plugin: formAnalysis 2.1  */
	s_legacy.setupFormAnalysis();
	
	/* Related Article */
	var relatedArticle = s_legacy.getQueryParam('nav');
	if (relatedArticle == 'rel') {
		s_legacy.prop12=s_legacy.getPreviousValue(s_legacy.prop4,'gpv_p12');
	}
	s_legacy.getPreviousValue(s_legacy.prop4,'gpv_p12',''); 
	
	/* Department */
	if(s_legacy.prop1&&!s_legacy.eVar1) s_legacy.eVar1="D=c1";
	
	/* Topic */
	if(s_legacy.prop2&&!s_legacy.eVar2) s_legacy.eVar2="D=c2";
	
	/* Story name */
	if(s_legacy.prop3&&!s_legacy.eVar3) s_legacy.eVar3="D=c3";
	
	/* Content Series */
	if(s_legacy.prop5&&!s_legacy.eVar5) s_legacy.eVar5="D=c5";
	
	/* Content Package */
	if(s_legacy.prop6&&!s_legacy.eVar6) s_legacy.eVar6="D=c6";
	
	/* Navigation Source */
	if(s_legacy.prop7&&!s_legacy.eVar7) s_legacy.eVar7="D=c7";
	
	/* Article Author */
	if(s_legacy.prop8&&!s_legacy.eVar8) s_legacy.eVar8="D=c8";
	
	/* Article Date */
	if(s_legacy.prop9&&!s_legacy.eVar9) s_legacy.eVar9="D=c9";
	
	/* Article ID */
	if(s_legacy.prop10&&!s_legacy.eVar10) s_legacy.eVar10="D=c10";
	
	/* Article Editor */
	if(s_legacy.prop11&&!s_legacy.eVar11) s_legacy.eVar11="D=c11";
	
	/* Unique Visitor ID */
	s_legacy.eVar29=s_legacy.prop26="D=s_vi";
	
	 /* Track Internal Campaign */
	if(!s_legacy.eVar33)
		s_legacy.eVar33=s_legacy.getQueryParam('icid');
		s_legacy.eVar33=s_legacy.getValOnce(s_legacy.eVar33,'eVar33',0);
		
	/* Internal Search Term */
	if(s_legacy.prop14&&!s_legacy.eVar12) s_legacy.eVar12="D=c14";
	
	/* Internal Search # of results */
	if(s_legacy.prop15&&!s_legacy.eVar13) s_legacy.eVar13="D=c15";
	
	/* Internal Search # of page */
	if(s_legacy.prop16&&!s_legacy.eVar14) s_legacy.eVar14="D=c16";
	
	/* Log Status */
	if(s_legacy.prop21&&!s_legacy.eVar23) s_legacy.eVar23="D=c21";
	
	/* Percent Page Viewed */
	s_legacy.prop29=s_legacy.getPercentPageViewed();
	
	/* Reffering URL */
	if (document.referrer.indexOf("inc.com") < 0) s_legacy.eVar44="D=r";
	
	/* Newsletter to List Var */
	if(s_legacy.eVar40&&!s_legacy.list1) s_legacy.list1="D=v40";
	
	/* Ad ID to List Var */
	if(s_legacy.eVar43&&!s_legacy.list2) s_legacy.list2="D=v43";

}
s_legacy.doPlugins=s_doPlugins	

if (s_legacy.enableVideoTracking) {
        s_legacy.loadModule("Media")
        s_legacy.Media.autoTrack = false;
        s_legacy.Media.trackWhilePlaying = true;
        s_legacy.Media.trackVars = "events,prop31,eVar30,eVar31";
        s_legacy.Media.trackEvents = "event10,event11,event12,event13,event24,event25,event26";
        s_legacy.Media.trackMilestones = "25,50,75";
        s_legacy.Media.playerName = "HTML5 Basic";
        s_legacy.Media.segmentByMilestones = true;
        s_legacy.Media.trackUsingContextData = true;
        s_legacy.Media.contextDataMapping = {
            "a.media.name": "eVar30,prop31",
            "a.media.segment": "eVar31",
            "a.contentType": "eVar32",
            "a.media.timePlayed": "event10",
            "a.media.view": "event11",
            "a.media.segmentView": "event13",
            "a.media.complete": "event12",
            "a.media.milestones": {
                25: "event24",
                50: "event25",
                75: "event26"

            }
        };
    };
	
/************************** PLUGINS SECTION *************************/

/*
 * Plugin: getValOnce_v1.0
 */
s_legacy.getValOnce=new Function("v","c","e",""
+"var s_legacy=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s_legacy.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s_legacy.c_w(c,v,e?a:0);}return"
+" v==k?'':v");

/*
 * Plugin: getQueryParam 2.3
 */
s_legacy.getQueryParam=new Function("p","d","u",""
+"var s_legacy=this,v='',i,t;d=d?d:'';u=u?u:(s_legacy.pageURL?s_legacy.pageURL:s_legacy.wd.locati"
+"on);if(u=='f')u=s_legacy.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s_legacy.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s_legacy.p_gpv=new Function("k","u",""
+"var s_legacy=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s_legacy.pt(q,'&','p_gvf',k)}return v");
s_legacy.p_gvf=new Function("t","k",""
+"if(t){var s_legacy=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s_legacy."
+"epa(v)}return ''");

/*
 *	Plug-in: crossVisitParticipation v1.7 - stacks values from
 *	specified variable in cookie and returns value
 */

s_legacy.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s_legacy=this,ce;if(typeof(dv)==='undefined')dv=0;if(s_legacy.events&&ev){var"
+" ay=s_legacy.split(ev,',');var ea=s_legacy.split(s_legacy.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s_legacy.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s_legacy.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s_legacy.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s_legacy.repl(z,'[','');z=s_legacy.repl(z,']','');z=s_legacy.repl(z,\"'\",'');arry"
+"[q]=s_legacy.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s_legacy.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s_legacy.c_w(cn,data,e);var r=s_legacy.join(h,{deli"
+"m:dl});if(ce)s_legacy.c_w(cn,'');return r;");

/*
 * Utility Functions: apl, p_c, p_gh, split, replace, join
 */ 
//append list
s_legacy.apl=new Function("L","v","d","u","var s_legacy=this,m=0;if(!L)L='';if(u){var i,n,a=s_legacy.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L");

// split v1.5
s_legacy.split=new Function("l","d","var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

// ver. 1.0 - s_legacy.join(v,p)| v - Array | p - formatting parameters (front,back,delim,wrap)
s_legacy.join=new Function("v","p","var s_legacy=this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back:'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0;x<v.length;x++){if(typeof(v[x])=='object' )str+=s_legacy.join( v[x],p);else str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Plugin Utility: Replace v1.0
 */
s_legacy.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

// getTimeParting ver. 2.0
s_legacy.getTimeParting=new Function("t","z","y","l", "var s_legacy=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=String(A);if(s_legacy.dstStart&&s_legacy.dstEnd){B=s_legacy.dstStart;C=s_legacy.dstEnd}else{;U=U.substring(2,4);X='090801|101407|111306|121104|131003|140902|150801|161306|171205|181104|191003';X=s_legacy.split(X,'|');for(W=0;W<=10;W++){Z=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substring(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.getTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.getHours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Available'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){return A}}else{return Z+', '+W}}}");

/*
 * Plugin: getNewRepeat 1.1 - Return whether user is new or repeat
 */
s_legacy.getNewRepeat=new Function("d",""
+"var s_legacy=this,e=new Date(),cval,sval,ct=e.getTime();e.setTime(ct+d*24*"
+"60*60*1000);cval=s_legacy.c_r('s_nr');if(cval.length==0){s_legacy.c_w('s_nr',ct+'"
+"-New',e);return 'New';}sval=cval.split('-');if(ct-sval[0]<30*60*100"
+"0&&sval[1]=='New'){s_legacy.c_w('s_nr',ct+'-New',e);return 'New';}else {s_legacy."
+"c_w('s_nr',ct+'-Repeat',e);return 'Repeat';}");

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s_legacy.getPreviousValue=new Function("v","c","el",""
+"var s_legacy=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s_legacy.events){i=s_legacy.split(el,',');j=s_legacy.split(s_legacy.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s_legacy.c_r(c)) r=s_legacy.c_r(c);v?s_legacy.c_w(c,v,t)"
+":s_legacy.c_w(c,'no value',t);return r}}}}}else{if(s_legacy.c_r(c)) r=s_legacy.c_r(c);v?"
+"s_legacy.c_w(c,v,t):s_legacy.c_w(c,'no value',t);return r}");

/*
 * Utility Function: p_c
 */
s_legacy.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");

/*
 * Plugin: getVisitNum - version 3.0
 */
s_legacy.getVisitNum=new Function("tp","c","c2",""
+"var s_legacy=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
+"if(tp=='m'||tp=='w'||tp=='d'){eo=s_legacy.endof(tp),y=eo.getTime();e.setTi"
+"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
+"c2){c2='s_invisit';}cval=s_legacy.c_r(c);if(cval){var i=cval.indexOf('&vn="
+"'),str=cval.substring(i+4,cval.length),k;}cvisit=s_legacy.c_r(c2);if(cvisi"
+"t){if(str){e.setTime(ct+1800000);s_legacy.c_w(c2,'true',e);return str;}els"
+"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
+"ng(0,i);e.setTime(k);s_legacy.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
+"s_legacy.c_w(c2,'true',e);return str;}else {s_legacy.c_w(c,e.getTime()+'&vn=1',e)"
+";e.setTime(ct+1800000);s_legacy.c_w(c2,'true',e);return 1;}}");
s_legacy.dimo=new Function("m","y",""
+"var d=new Date(y,m+1,0);return d.getDate();");
s_legacy.endof=new Function("x",""
+"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
+"'m'){d=s_legacy.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
+"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
+"t;");

/*
 * Plugin: Days since last Visit 1.1.H - capture time from last visit
 */
s_legacy.getDaysSinceLastVisit=new Function("c",""
+"var s_legacy=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s_legacy.c_r(c);if(cval.length==0){s_legacy.c_w(c,ct,e);"
+"s_legacy.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s_legacy.c_w(c,ct,e);s_legacy.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s_legacy.c_w(c,ct,e);s_legacy.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s_legacy."
+"c_w(c,ct,e);s_legacy.c_w(c+'_s',f4,es);}else if(d<day+1){s_legacy.c_w(c,ct,e);s_legacy.c"
+"_w(c+'_s',f5,es);}}else{s_legacy.c_w(c,ct,e);cval_ss=s_legacy.c_r(c+'_s');s_legacy.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s_legacy.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");

/*
 * Plugin: Form Analysis 2.1 (Success, Error, Abandonment)
 */
s_legacy.setupFormAnalysis=new Function(""
+"var s_legacy=this;if(!s_legacy.fa){s_legacy.fa=new Object;var f=s_legacy.fa;f.ol=s_legacy.wd.onload;s_legacy."
+"wd.onload=s_legacy.faol;f.uc=s_legacy.useCommerce;f.vu=s_legacy.varUsed;f.vl=f.uc?s_legacy.even"
+"tList:'';f.tfl=s_legacy.trackFormList;f.fl=s_legacy.formList;f.va=new Array('',''"
+",'','')}");
s_legacy.sendFormEvent=new Function("t","pn","fn","en",""
+"var s_legacy=this,f=s_legacy.fa;t=t=='s_legacy'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='"
+"s_legacy'?'Success':en;s_legacy.fasl(t);f.va[1]='';f.va[3]='';");
s_legacy.faol=new Function("e",""
+"var s_legacy=s_c_il["+s_legacy._in+"],f=s_legacy.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s_legacy.wd."
+"event;f.os=new Array;if(f.ol)r=f.ol(e);if(s_legacy.d.forms&&s_legacy.d.forms.leng"
+"th>0){for(i=s_legacy.d.forms.length-1;i>=0;i--){fo=s_legacy.d.forms[i];fn=fo.name"
+";tf=f.tfl&&s_legacy.pt(f.fl,',','ee',fn)||!f.tfl&&!s_legacy.pt(f.fl,',','ee',fn);"
+"if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s_legacy.faos;f.va[1]=fn;f.va[3]='"
+"No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"
+"s_legacy[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on"
+"mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin"
+"g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd"
+"=md;el.s_fakd=kd;el.onmousedown=s_legacy.fam;el.onkeydown=s_legacy.fam}}}}}f.ul=s_legacy"
+".wd.onunload;s_legacy.wd.onunload=s_legacy.fasl;}return r;");
s_legacy.faos=new Function("e",""
+"var s_legacy=s_c_il["+s_legacy._in+"],f=s_legacy.fa,su;if(!e)e=s_legacy.wd.event;if(f.vu){s_legacy[f.v"
+"u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"
+"e;");
s_legacy.fasl=new Function("e",""
+"var s_legacy=s_c_il["+s_legacy._in+"],f=s_legacy.fa,a=f.va,l=s_legacy.wd.location,ip=s_legacy.trackPag"
+"eName,p=s_legacy.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"
+"name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="
+"'Error';else if(e=='s_legacy')a[2]='Success';else a[2]='Abandon'}else a[2]"
+"='';var tp=ip?a[0]+':':'',t3=e!='s_legacy'?':('+a[3]+')':'',ym=!f.uc&&a[3]"
+"!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s_legacy.linkTrackV"
+"ars,lte=s_legacy.linkTrackEvents,up=s_legacy.usePlugins;if(f.uc){s_legacy.linkTrackVars="
+"ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s_legacy.linkTrackEvents=lt"
+"e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s_legacy.events=s_legacy.pt(f.vl,'"
+",','fage',2);else if(e=='s_legacy')s_legacy.events=s_legacy.pt(f.vl,',','fage',1);else s_legacy"
+".events=s_legacy.pt(f.vl,',','fage',0)}else{s_legacy.linkTrackVars=ltv=='None'?f."
+"vu:ltv+','+f.vu}s_legacy[f.vu]=ym;s_legacy.usePlugins=false;var faLink=new Object"
+"();faLink.href='#';s_legacy.tl(faLink,'o','Form Analysis');s_legacy[f.vu]='';s_legacy.us"
+"ePlugins=up}return f.ul&&e!='e'&&e!='s_legacy'?f.ul(e):true;");
s_legacy.fam=new Function("e",""
+"var s_legacy=s_c_il["+s_legacy._in+"],f=s_legacy.fa;if(!e) e=s_legacy.wd.event;var o=s_legacy.trackLas"
+"tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."
+"form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."
+"which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"
+"N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"
+"AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"
+"n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"
+"){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["
+"1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s_legacy"
+"_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"
+"d(e);");
s_legacy.ee=new Function("e","n",""
+"return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s_legacy.fage=new Function("e","a",""
+"var s_legacy=this,f=s_legacy.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");

/*
 * Plugin: getPreviousValue v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s_legacy.getPreviousValue=new Function("v","c","el",""
+"var s_legacy=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s_legacy.events){i=s_legacy.split(el,',');j=s_legacy.split(s_legacy.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s_legacy.c_r(c)) r=s_legacy.c_r(c);v?s_legacy.c_w(c,v,t)"
+":s_legacy.c_w(c,'no value',t);return r}}}}}else{if(s_legacy.c_r(c)) r=s_legacy.c_r(c);v?"
+"s_legacy.c_w(c,v,t):s_legacy.c_w(c,'no value',t);return r}");

/*
* Plugin: getPercentPageViewed v1.4
*/
s_legacy.handlePPVevents=new Function("",""
+"if(!s_legacy.getPPVid)return;var dh=Math.max(Math.max(s_legacy.d.body.scrollHeigh"
+"t,s_legacy.d.documentElement.scrollHeight),Math.max(s_legacy.d.body.offsetHeight,"
+"s_legacy.d.documentElement.offsetHeight),Math.max(s_legacy.d.body.clientHeight,s_legacy."
+"d.documentElement.clientHeight)),vph=s_legacy.wd.innerHeight||(s_legacy.d.documen"
+"tElement.clientHeight||s_legacy.d.body.clientHeight),st=s_legacy.wd.pageYOffset||"
+"(s_legacy.wd.document.documentElement.scrollTop||s_legacy.wd.document.body.scroll"
+"Top),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c=s_legacy.c_r('s_pp"
+"v'),a=(c.indexOf(',')>-1)?c.split(',',4):[],id=(a.length>0)?(a[0]):"
+"escape(s_legacy.getPPVid),cv=(a.length>1)?parseInt(a[1]):(0),p0=(a.length>"
+"2)?parseInt(a[2]):(pv),cy=(a.length>3)?parseInt(a[3]):(0),cn=(pv>0)"
+"?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy)?vh:cy)):'';s_legacy.c_w('s_pp"
+"v',cn);");
s_legacy.getPercentPageViewed=new Function("pid",""
+"pid=pid?pid:'-';var s_legacy=this,ist=!s_legacy.getPPVid?true:false;if(typeof(s_legacy.l"
+"inkType)!='undefined'&&s_legacy.linkType!='e')return'';var v=s_legacy.c_r('s_ppv'"
+"),a=(v.indexOf(',')>-1)?v.split(',',4):[];if(a.length<4){for(var i="
+"3;i>0;i--){a[i]=(i<a.length)?(a[i-1]):('');}a[0]='';}a[0]=unescape("
+"a[0]);s_legacy.getPPVpid=pid;s_legacy.c_w('s_ppv',escape(pid));if(ist){s_legacy.getPPVid"
+"=(pid)?(pid):(s_legacy.pageName?s_legacy.pageName:document.location.href);s_legacy.c_w('"
+"s_ppv',escape(s_legacy.getPPVid));if(s_legacy.wd.addEventListener){s_legacy.wd.addEventL"
+"istener('load',s_legacy.handlePPVevents,false);s_legacy.wd.addEventListener('scro"
+"ll',s_legacy.handlePPVevents,false);s_legacy.wd.addEventListener('resize',s_legacy.handl"
+"ePPVevents,false);}else if(s_legacy.wd.attachEvent){s_legacy.wd.attachEvent('onlo"
+"ad',s_legacy.handlePPVevents);s_legacy.wd.attachEvent('onscroll',s_legacy.handlePPVevent"
+"s_legacy);s_legacy.wd.attachEvent('onresize',s_legacy.handlePPVevents);}}return(pid!='-'"
+")?(a):(a[1]);");

/*
 * Plugin: YouTube plugin SC14.9/15 v1.1
 */
try{var k0='undefined',k1='function',k2='object',k3='number',k4='string';var s_YTO={};s_YTO.v=new Array();s_YTO.ya=s_YTisa()?2:0;s_YTO.ut=s_YTO.uf=0;s_YTO.vp='YouTube Player';if(document.loaded){s_YTp()}else if(window.addEventListener){window.addEventListener('load',s_YTp,false)}else if(window.attachEvent){window.attachEvent('onload',s_YTp)}else{s_YTp()}}catch(e){};function onYouTubePlayerReady(id){try{if(id&&id!=k0){var p=document.getElementById(id);if(typeof p==k1&&!s_YTO.v[id])s_YTO.v[id]=new s_YTv(id,1)}}catch(e){}}function s_YTp(){try{var f=document.getElementsByTagName('iframe');if(s_YTisa())s_YTO.ya=2;for(var i=0;i<f.length;i++){var k=s_YTgk(f[i].src),id=f[i].id;if(k){if(!s_YTO.ya){s_YTO.ya=1;var t=document.createElement('script'),f;t.src='http://www.youtube.com/player_api';f=document.getElementsByTagName('script')[0];f.parentNode.insertBefore(t,f)}else if(s_YTO.ya==2&&!s_YTO.v[id]){s_YTO.v[id]=new s_YTv(id)}}}}catch(e){};s_YTO.ut=setTimeout('s_YTp()',1000)}function s_YTisa(){try{return typeof YT==k2&&typeof YT.Player==k1}catch(e){};return 0}function s_YTism(){try{return typeof s_legacy==k2&&typeof s_legacy.Media==k2&&typeof s_legacy.Media.open==k1}catch(e){};return 0}function s_YTgk(u){try{var a,b,c,d,r='';if(!u.indexOf('http://www.youtube.com/watch')){a=u.indexOf('?');if(a>-1){b='&'+u.substring(a+1);c=b.indexOf('&v=');if(c>-1){r=b.substring(c+3);d=r.indexOf('&');if(d>-1)r=r.substring(0,d)}}}if(!u.indexOf('http://www.youtube.com/embed/')){a=u.indexOf('/embed/')+7;r=u.substring(a+7);d=r.indexOf('?');if(d>-1)r=r.substring(0,d)}}catch(e){};return r}function onYouTubePlayerAPIReady(){try{s_YTO.ya=2;if(s_YTO.ut)clearTimeout(s_YTO.ut);s_YTp()}catch(e){}}function s_YTdi(){try{if(!s_YTism())return;if(typeof s_legacy.Media.trackWhilePlaying!=k0){s_YTO.twp=s_legacy.Media.trackWhilePlaying;s_legacy.Media.trackWhilePlaying=false}if(typeof s_legacy.Media.trackSeconds!=k0){s_YTO.ts=s_legacy.Media.trackSeconds;delete s_legacy.Media.trackSeconds}}catch(e){}}function s_YTei(){try{if(!s_YTism())return;if(typeof s_YTO.twp!=k0){s_legacy.Media.trackWhilePlaying=s_YTO.twp;delete s_YTO.twp}if(typeof s_YTO.ts!=k0){s_legacy.Media.trackSeconds=s_YTO.ts;delete s_YTO.ts}}catch(e){}}function s_YTut(){try{s_YTO.uf=0;s_YTei()}catch(e){}}function s_YTdv(id){try{if(!id)return;var v=s_YTO.v[id]||0;if(v){if(v.ss){if(s_legacy.Media)s_legacy.Media.close(v.sv);v.ss=0}}v.vc()}catch(e){}}function s_YTv(id){try{var t=this;t.vc=function(){try{var t=this;t.id=t.st=t.sv=t.sl='';t.yt=t.yp=t.ys=t.ss=t.ts=t.ql=t.qs=0}catch(e){}};t.vg=function(yp){try{var pt=typeof yp;if(pt!=k2&&pt!=k1)return;var t=this,u=x=y='';if(typeof yp.getVideoUrl==k1)u=yp.getVideoUrl();if(typeof yp.getVideoData==k1){x=yp.getVideoData();if(typeof x==k2){if(typeof x.video_id==k4)y=x.video_id;if(typeof x.title==k4)s_legacy.st=x.title}}if(!y&&u)y=s_YTgk(u);t.sv='YouTube';t.sv+='|'+(y?y:t.id);if(t.st)t.sv+='|'+t.st;if((typeof yp.getPlayerState)==k1){x=yp.getPlayerState();if(typeof x==k3)t.ys=x}t.qs=0;if((typeof yp.getCurrentTime)==k1){x=yp.getCurrentTime();t.qs=(typeof x==k3)?Math.round(x):0}t.ts=0;if((typeof yp.getDuration)==k1){x=yp.getDuration();t.ts=(typeof x==k3)?Math.round(x):0}}catch(e){}};t.ve=function(){try{var t=this;if(!s_YTism()||!t.sv)return;t.vg(t.yp);if(t.sv!=t.sl&&t.ss){if(t.ss==2){s_legacy.Media.stop(t.sl,t.ql);t.ss=1}s_legacy.Media.close(t.sl);t.sl=t.sv;t.ss=t.ql=0}switch(t.ys){case 1:if(t.ss==2){if(t.qs>=t.ql&&Math.abs(t.qs-t.ql)<1.0)return;s_legacy.Media.stop(t.sl,t.ql)}if(!t.ss){s_legacy.Media.open(t.sv,t.ts,s_YTO.vp);t.qs=t.ql=0;t.sl=t.sv;t.ss=1}s_legacy.Media.play(t.sv,t.qs);t.ql=t.qs;t.ss=2;break;case 0:if(t.ss){if(t.ss!=1){if(Math.abs(t.qs-t.ts)<=1)t.qs=t.ts;s_legacy.Media.stop(t.sv,t.qs);t.ql=t.qs;t.ss=1}s_legacy.Media.close(t.sv);t.ss=t.qs=t.ql=0;t.sv=t.sl=''}break;case 2:if(!t.ss){s_legacy.Media.open(t.sv,t.ts,s_YTO.vp);t.ss=1;t.sl=t.sv}if(t.ss!=1){s_legacy.Media.stop(t.sv,t.qs);t.ql=t.qs;t.ss=1}break;case 3:if(s_YTO.uf){clearTimeout(s_YTO.uf)}else{s_YTdi()}s_YTO.uf=setTimeout('s_YTut()',3000);break;case 5:break;case-1:s_legacy.Media.open(t.sv,t.ts,s_YTO.vp);t.ss=1;t.sl=t.sv;break;default:break}}catch(e){}};t.fsc=function(ye){t.ys=ye;t.vg(t.yp);setTimeout('s_YTO.v["'+t.id+'"].ve()',10)};t.isc=function(ye){t.ys=ye.data;t.vg(ye.target);setTimeout('s_YTO.v["'+t.id+'"].ve()',10)};var o=document.getElementById(id);if(!id||!o)return null;t.vc();t.id=id;var ar=arguments;if(ar.length>1&&ar[1]==1){t.yt=1;t.yp=o;t.yp.addEventListener('onStateChange','s_YTO.v["'+id+'"].fsc',false)}else{t.yt=2;var a=new Object();if(ar.length>1)a.videoId=ar[1];if(ar.length>3){a.width=w;a.height=h}a.events=new Object();a.events.onStateChange=t.isc;t.yp=new YT.Player(id,a);if(!t.yp){s_YTdv(id);return null}}}catch(e){return null}}


/****************************** MODULES *****************************/
/* Module: Media */
s_legacy.m_Media_c="var m=s_legacy.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
+"this;return m.s_legacy.rep(m.s_legacy.rep(m.s_legacy.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s_legacy=Math.floor(tm"
+".getTime()/1000);i.lx=0;i.lt=i.s_legacy;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m._delete=function(n){var"
+" m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;"
+"i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s_legacy.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.complete=function(n,o){th"
+"is.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.context"
+"Data,x;c['a.contentType']='video';c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0){c[ns+'length']=i.l;}c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns"
+"+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i"
+".lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3='video';vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x i"
+"n d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s_legacy.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]="
+"c[x]}else if(y){if(y=='view'||y=='segmentView'||y=='complete'||y=='timePlayed'){if(e)e+=','+a;if(c[x]){if(y=='timePlayed'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events"
+"2+=(vo.events2?',':'')+a}}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,"
+"x.length-1);if(c[x]&&d[x+'s_legacy'][c[x]]){if(e)e+=','+d[x+'s_legacy'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s_legacy'][c[x]]}}}vo.contextData=0}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){v"
+"ar m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s_legacy.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s_legacy.ape(i.p)+d+Math.floor(i.t)+d+i.s_legacy+d+(i.to>=0?'L'+Math.fl"
+"oor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvent"
+"s_legacy,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;n=m.cn(n);i=n&&m.l&&"
+"m.l[n]?m.l[n]:0;if(i){if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name"
+"=n;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s_legacy*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP"
+"':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':('CLOSE'))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i"
+".lo=o;if((x<=3||x==5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s_legacy.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i"
+".l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s_legacy.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z"
+".length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s_legacy.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat('"
+"'+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s_legacy.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if("
+"c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-"
+"i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||i.x>"
+"=100){x=0;m.e(n,2,-1,0,0,-1,pd);v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}e"
+"k=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePl"
+"ayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s_legacy,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo"
+".linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s_legacy.t(vo);if(i.us){i.sn=sn;i.sx="
+"sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthReq"
+"uired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,x"
+"c=m.s_legacy.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_legacy"
+"_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s_legacy.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.curre"
+"ntMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o'"
+",'var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-"
+"1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}"
+"';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s_legacy.isie&&xc){x=m.s_legacy.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateC"
+"hange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()"
+"?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+"
+"';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l"
+",\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '"
+"+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if"
+"(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'"
+"+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s_legacy.wd[f1])o[f2]=m.s_legacy.wd[f1];m.s_legacy.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)"
+"\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s_legacy.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s_legacy.d.getElementsByTagName){l=m.s_legacy.d.getElementsByTag"
+"Name(m.s_legacy.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s_legacy.wd.attachEvent)s_legacy.wd.attachEvent('onload',m.as);else if(s_legacy.wd.addEventListener)s_legacy.wd.addEventListener('load',m.as,fal"
+"se);if(m.onLoad)m.onLoad(s_legacy,m)";
s_legacy.m_i("Media");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s_legacy.version='H.24.4';s_legacy.an=s_an;s_legacy.logDebug=function(m){var s_legacy=this,tcf=new Function('var e;try{console.log(\"'+s_legacy.rep(s_legacy.rep(m,\"\\n\",\"\\\\n\"),\""
+"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s_legacy.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s_legacy.fl=function(x,l){retur"
+"n x?(''+x).substring(0,l):x};s_legacy.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s_legacy.num=function(x){x=''+x;for(var p=0;p"
+"<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s_legacy.rep=s_rep;s_legacy.sp=s_sp;s_legacy.jn=s_jn;s_legacy.ape=function(x){var s_legacy=this,h='0123456789ABCDEF',i,c=s_legacy.charSet,n,l,e,y='';c=c?c.toU"
+"pperCase():'';if(x){x=''+x;if(s_legacy.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s_legacy.rep(x,'+','%2B');if(c&&c!='AUTO'&&s_legacy.em==1&&x.indexOf('%u')<0&&x.indexOf('"
+"%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s_legacy.epa=function(x)"
+"{var s_legacy=this;if(x){x=s_legacy.rep(''+x,'+',' ');return s_legacy.em==3?decodeURIComponent(x):unescape(x)}return x};s_legacy.pt=function(x,d,f,a){var s_legacy=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
+"ng(0,y);r=s_legacy[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s_legacy.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
+"=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s_legacy.fsf=function(t,a){var s_legacy=this;if(s_legacy.pt(a,',','isf',t))s_legacy.fsg+=(s_legacy.fsg!=''?',':'')+t;return 0};s_legacy.fs=function(x,f){var"
+" s_legacy=this;s_legacy.fsg='';s_legacy.pt(x,',','fsf',f);return s_legacy.fsg};s_legacy.mpc=function(m,a){var s_legacy=this,c,l,n,v;v=s_legacy.d.visibilityState;if(!v)v=s_legacy.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s_legacy.mpq){s_legacy.mpq=new Array;l="
+"s_legacy.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s_legacy.d.addEventListener(l[n],new Function('var s_legacy=s_c_il['+s_legacy._in+'],c,v;v=s_legacy.d.visibilityState;if(!v)v=s_legacy.d.webkitVisibilitySta"
+"te;if(s_legacy.mpq&&v==\"visible\"){while(s_legacy.mpq.length>0){c=s_legacy.mpq.shift();s_legacy[c.m].apply(s_legacy,c.a)}s_legacy.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s_legacy.mpq.push(c);return 1}return 0};s_legacy.si=function(){var s_legacy=this,i,k,v,"
+"c=s_gi+'var s_legacy=s_gi(\"'+s_legacy.oun+'\");s_legacy.sa(\"'+s_legacy.un+'\");';for(i=0;i<s_legacy.va_g.length;i++){k=s_legacy.va_g[i];v=s_legacy[k];if(v!=undefined){if(typeof(v)!='number')c+='s_legacy.'+k+'=\"'+s_fe(v)+'\";';else c+='s_legacy.'+k+'='+v+';'"
+"}}c+=\"s_legacy.lnk=s_legacy.eo=s_legacy.linkName=s_legacy.linkType=s_legacy.wd.s_objectID=s_legacy.ppu=s_legacy.pe=s_legacy.pev1=s_legacy.pev2=s_legacy.pev3='';\";return c};s_legacy.c_d='';s_legacy.c_gdf=function(t,a){var s_legacy=this;if(!s_legacy.num(t))return 1;return 0};s_legacy.c_gd=function(){v"
+"ar s_legacy=this,d=s_legacy.wd.location.hostname,n=s_legacy.fpCookieDomainPeriods,p;if(!n)n=s_legacy.cookieDomainPeriods;if(d&&!s_legacy.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf"
+"('.',p-1);n--}s_legacy.c_d=p>0&&s_legacy.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s_legacy.c_d};s_legacy.c_r=function(k){var s_legacy=this;k=s_legacy.ape(k);var c=' '+s_legacy.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':"
+"s_legacy.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s_legacy.c_w=function(k,v,e){var s_legacy=this,d=s_legacy.c_gd(),l=s_legacy.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='N"
+"ONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s_legacy.d.cookie=k+'='+s_legacy.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString"
+"()+';':'')+(d?' domain='+d+';':'');return s_legacy.c_r(k)==v}return 0};s_legacy.eh=function(o,e,r,f){var s_legacy=this,b='s_'+e+'_'+s_legacy._in,n=-1,l,i,x;if(!s_legacy.ehl)s_legacy.ehl=new Array;l=s_legacy.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i"
+"].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s_legacy.cet=function(f,a,t,o,b){var s_legacy=this,r,tcf;if(s_legacy.a"
+"pv>=5&&(!s_legacy.isopera||s_legacy.apv>=7)){tcf=new Function('s_legacy','f','a','t','var e,r;try{r=s_legacy[f](a)}catch(e){r=s_legacy[t](e)}return r');r=tcf(s_legacy,f,a,t)}else{if(s_legacy.ismac&&s_legacy.u.indexOf('MSIE 4')>=0)r=s_legacy[b](a);else{s_legacy.eh(s_legacy.w"
+"d,'onerror',0,o);r=s_legacy[f](a);s_legacy.eh(s_legacy.wd,'onerror',1)}}return r};s_legacy.gtfset=function(e){var s_legacy=this;return s_legacy.tfs};s_legacy.gtfsoe=new Function('e','var s_legacy=s_c_il['+s_legacy._in+'],c;s_legacy.eh(window,\"onerror\",1);s_legacy.etfs=1;c"
+"=s_legacy.t();if(c)s_legacy.d.write(c);s_legacy.etfs=0;return true');s_legacy.gtfsfb=function(a){return window};s_legacy.gtfsf=function(w){var s_legacy=this,p=w.parent,l=w.location;s_legacy.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s_legacy.tf"
+"s_legacy=p;return s_legacy.gtfsf(s_legacy.tfs)}return s_legacy.tfs};s_legacy.gtfs=function(){var s_legacy=this;if(!s_legacy.tfs){s_legacy.tfs=s_legacy.wd;if(!s_legacy.etfs)s_legacy.tfs=s_legacy.cet('gtfsf',s_legacy.tfs,'gtfset',s_legacy.gtfsoe,'gtfsfb')}return s_legacy.tfs};s_legacy.mrq=function(u){var s_legacy=thi"
+"s,l=s_legacy.rl[u],n,r;s_legacy.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s_legacy.mr(0,0,r.r,r.t,r.u)}};s_legacy.flushBufferedRequests=function(){};s_legacy.mr=function(sess,q,rs,ta,u){var s_legacy=this,dc=s_legacy.dc,t1=s_legacy.trackingServer,t2=s_legacy."
+"trackingServerSecure,tb=s_legacy.trackingServerBase,p='.sc',ns=s_legacy.visitorNamespace,un=s_legacy.cls(u?u:(ns?ns:s_legacy.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s_legacy.ssl)t1=t2}else{if(!tb)tb='2o7.ne"
+"t';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s_legacy.ssl?'s':'')+'://'+t1+'/b/ss/'+s_legacy.un+'/'+(s_legacy.mob"
+"ile?'5.1':'1')+'/'+s_legacy.version+(s_legacy.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s_legacy.isie&&!s_legacy.ismac)rs=s_legacy.fl(rs,2047)}if(s_legacy.d.images&&s_legacy.apv>=3&&(!s_legacy.isopera||s_legacy.apv>=7)&&(s_legacy.ns6<0||s_legacy.apv>=6.1)){if"
+"(!s_legacy.rc)s_legacy.rc=new Object;if(!s_legacy.rc[un]){s_legacy.rc[un]=1;if(!s_legacy.rl)s_legacy.rl=new Object;s_legacy.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s_legacy._in+'].mrq(\"'+un+'\")',750)}else{l=s_legacy.rl[un];if(l){r.t=ta;"
+"r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s_legacy.rc[un];s_legacy.rc[un]++}im=s_legacy.wd[imn];if(!im)im=s_legacy.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s_legacy;if(wd.s_c_il){s_legacy=wd.s_c_"
+"il['+s_legacy._in+'];s_legacy.mrq(\"'+un+'\");s_legacy.nrs--;if(!s_legacy.nrs)s_legacy.m_m(\"rr\")}');if(!s_legacy.nrs){s_legacy.nrs=1;s_legacy.m_m('rs')}else s_legacy.nrs++;if(s_legacy.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s_legacy.sp(rs,'&'),dln;for(dln=0;dl"
+"n<dl.length;dln++)d+=\"\\n\\t\"+s_legacy.epa(dl[dln]);s_legacy.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s_legacy.wd.name&&ta==s_legacy.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-"
+"b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s_legacy.gg=function(v){var s_legacy=this;if(!s_legacy.wd['s_'+v])s_legacy.wd['s_'+v]='';return s_legacy.wd['s_'+v]};s_legacy.glf="
+"function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s_legacy=this,v=s_legacy.gg(t);if(v)s_legacy[t]=v};s_legacy.gl=function(v){var s_legacy=this;if(s_legacy.pg)s_legacy.pt(v,',','glf',0)};s_legacy.rf=function(x){var s_legacy=this,y,i,j,h,p,l=0,q,a,b='"
+"',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+="
+"8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if"
+"(l&&q){a=s_legacy.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c='"
+"'}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s_legacy.s2q=function(k,v,vf,vfp,f){var s_legacy=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\""
+";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nf"
+"l.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substr"
+"ing(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s_legacy.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f"
+".indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s_legacy.num(ss)){if(sp=='prop')s_legacy"
+"k='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s_legacy.ape(sk)+'='+s_legacy.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s_legacy.hav=f"
+"unction(){var s_legacy=this,qs='',l,fv='',fe='',mn,i,e;if(s_legacy.lightProfileID){l=s_legacy.va_m;fv=s_legacy.lightTrackVars;if(fv)fv=','+fv+','+s_legacy.vl_mr+','}else{l=s_legacy.va_t;if(s_legacy.pe||s_legacy.linkType){fv=s_legacy.linkTrackVars;fe=s_legacy.linkTrac"
+"kEvents;if(s_legacy.pe){mn=s_legacy.pe.substring(0,1).toUpperCase()+s_legacy.pe.substring(1);if(s_legacy[mn]){fv=s_legacy[mn].trackVars;fe=s_legacy[mn].trackEvents}}}if(fv)fv=','+fv+','+s_legacy.vl_l+','+s_legacy.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',e"
+"vents,'}if (s_legacy.events2)e=(e?',':'')+s_legacy.events2}for(i=0;i<l.length;i++){var k=l[i],v=s_legacy[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf"
+"(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s_legacy.fl(v,255)}else if(k=="
+"'referrer'){q='r';v=s_legacy.fl(s_legacy.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s_legacy.ssl&&s_legacy.visitorMigrationServerSecure)v=''}else if(k=='visit"
+"orMigrationServerSecure'){q='vmf';if(!s_legacy.ssl&&s_legacy.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s_legacy.em==2||s_legacy.em==3)v='UTF-8'}else if(k=='visit"
+"orNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';el"
+"se if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s_legacy';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else i"
+"f(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=="
+"'events'){if(e)v+=(v?',':'')+e;if(fe)v=s_legacy.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s_legacy.s2q('c',s_legacy[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSe"
+"conds'){q='mtss';if(!s_legacy.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s_legacy.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';els"
+"e if(k=='retrieveLightData'){if(s_legacy.retrieveLightProfiles)qs+=s_legacy.s2q('mts',s_legacy[k],fv,k,0);v=''}else if(s_legacy.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier"
+"'){q='h'+n;v=s_legacy.fl(v,255)}}if(v)qs+='&'+s_legacy.ape(q)+'='+(k.substring(0,3)!='pev'?s_legacy.ape(v):v)}}return qs};s_legacy.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0"
+"?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s_legacy.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s_legacy"
+".lt=function(h){var s_legacy=this,lft=s_legacy.linkDownloadFileTypes,lef=s_legacy.linkExternalFilters,lif=s_legacy.linkInternalFilters;lif=lif?lif:s_legacy.wd.location.hostname;h=h.toLowerCase();if(s_legacy.trackDownloadLinks&&lft&&s_legacy.pt(lf"
+"t,',','ltdf',h))return 'd';if(s_legacy.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s_legacy.pt(lef,',','ltef',h))&&(!lif||!s_legacy.pt(lif,',','ltef',h)))return 'e';return ''};s_legacy.lc=new Function('e','v"
+"ar s_legacy=s_c_il['+s_legacy._in+'],b=s_legacy.eh(this,\"onclick\");s_legacy.lnk=s_legacy.co(this);s_legacy.t();s_legacy.lnk=0;if(b)return this[b](e);return true');s_legacy.bc=new Function('e','var s_legacy=s_c_il['+s_legacy._in+'],f,tcf;if(s_legacy.d&&s_legacy.d.all&&s_legacy.d.all.cpp"
+"XYctnr)return;s_legacy.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s_legacy\",\"var e;try{if(s_legacy.eo&&(s_legacy.eo.tagName||s_legacy.eo.parentElement||s_legacy.eo.parentNode))s_legacy.t()}catch(e){}\");tcf(s_legacy);s_legacy.eo=0');s_legacy.oh=functi"
+"on(o){var s_legacy=this,l=s_legacy.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l"
+".protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s_legacy.ot=function(o)"
+"{var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type."
+"toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s_legacy.oid=function(o){var s_legacy=this,t=s_legacy.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&("
+"!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s_legacy.oh(o);else if(c){n=s_legacy.rep(s_legacy.rep(s_legacy.rep(s_legacy.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o."
+"value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s_legacy.fl(n,100);o.s_oidt=x}}return o.s_oid};s_legacy.rqf=function(t,un){var s_legacy="
+"this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s_legacy.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s_legacy.un&&s_legacy.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return '"
+"'};s_legacy.rq=function(un){if(!un)un=this.un;var s_legacy=this,c=un.indexOf(','),v=s_legacy.c_r('s_sq'),q='';if(c<0)return s_legacy.pt(v,'&','rqf',un);return s_legacy.pt(un,',','rq',0)};s_legacy.sqp=function(t,a){var s_legacy=this,e=t.indexOf('="
+"'),q=e<0?'':s_legacy.epa(t.substring(e+1));s_legacy.sqq[q]='';if(e>=0)s_legacy.pt(t.substring(0,e),',','sqs',q);return 0};s_legacy.sqs=function(un,q){var s_legacy=this;s_legacy.squ[un]=q;return 0};s_legacy.sq=function(q){var s_legacy=this,k='s_sq',v=s_legacy.c"
+"_r(k),x,c=0;s_legacy.sqq=new Object;s_legacy.squ=new Object;s_legacy.sqq[q]='';s_legacy.pt(v,'&','sqp',0);s_legacy.pt(s_legacy.un,',','sqs',q);v='';for(x in s_legacy.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s_legacy.sqq[s_legacy.squ[x]]+=(s_legacy"
+".sqq[s_legacy.squ[x]]?',':'')+x;for(x in s_legacy.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s_legacy.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s_legacy.sqq[x]+'='+s_legacy.ape(x);c++}return s_legacy.c_w(k,v,0)};s_legacy.wdl=new Funct"
+"ion('e','var s_legacy=s_c_il['+s_legacy._in+'],r=true,b=s_legacy.eh(s_legacy.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s_legacy.d.links.length;i++){o=s_legacy.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0|"
+"|oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s_legacy.eh(o,\"onclick\",0,s_legacy.lc);}return r');s_legacy.wds=function(){var s_legacy=this;if(s_legacy.apv>3&&(!s_legacy.isie||!s_legacy.ismac||s_legacy.apv>=5)){if(s_legacy.b&&s_legacy.b.attachEvent)s_legacy.b.attachE"
+"vent('onclick',s_legacy.bc);else if(s_legacy.b&&s_legacy.b.addEventListener)s_legacy.b.addEventListener('click',s_legacy.bc,false);else s_legacy.eh(s_legacy.wd,'onload',0,s_legacy.wdl)}};s_legacy.vs=function(x){var s_legacy=this,v=s_legacy.visitorSampling,g=s_legacy.visitorSamplin"
+"gGroup,k='s_vsn_'+s_legacy.un+(g?'_'+g:''),n=s_legacy.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s_legacy.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s_legacy.dyasmf=fu"
+"nction(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s_legacy.dyasf=function(t,m){var s_legacy=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s_legacy.pt(x,',','dyasmf',m))re"
+"turn n}return 0};s_legacy.uns=function(){var s_legacy=this,x=s_legacy.dynamicAccountSelection,l=s_legacy.dynamicAccountList,m=s_legacy.dynamicAccountMatch,n,i;s_legacy.un=s_legacy.un.toLowerCase();if(x&&l){if(!m)m=s_legacy.wd.location.host;if(!m.toLower"
+"Case)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s_legacy.pt(l,';','dyasf',m);if(n)s_legacy.un=n}i=s_legacy.un.indexOf(',');s_legacy.fun=i<0?s_legacy.un:s_legacy.un.substring(0,i)};s_legacy.sa=function(un){var s_legacy=this;if(s_legacy.un&&s_legacy.mpc('sa',argument"
+"s_legacy))return;s_legacy.un=un;if(!s_legacy.oun)s_legacy.oun=un;else if((','+s_legacy.oun+',').indexOf(','+un+',')<0)s_legacy.oun+=','+un;s_legacy.uns()};s_legacy.m_i=function(n,a){var s_legacy=this,m,f=n.substring(0,1),r,l,i;if(!s_legacy.m_l)s_legacy.m_l=new Object;if(!s_legacy."
+"m_nl)s_legacy.m_nl=new Array;m=s_legacy.m_l[n];if(!a&&m&&m._e&&!m._i)s_legacy.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s_legacy.wd.s_c_in;m._il=s_legacy._il;m._il[m._in]=m;s_legacy.wd.s_c_in++;m.s_legacy=s_legacy;m._n=n;m._l=new Array('_c','_in','_il"
+"','_i','_e','_d','_dl','s_legacy','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s_legacy.m_l[n]=m;s_legacy.m_nl[s_legacy.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]]"
+")r[l[i]]=m[l[i]];r._il[r._in]=r;m=s_legacy.m_l[n]=r}if(f==f.toUpperCase())s_legacy[n]=m;return m};s_legacy.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s_legacy=s_c_il['+s_legacy._in+'],c=s_legacy[g+\"_c\"],m,x,f=0;if(s_legacy.mpc(\"m_a\",a"
+"rguments))return;if(!c)c=s_legacy.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s_legacy[g]=new Function(\"s_legacy\",s_ft(s_d(c)));x=s_legacy[g];if(!x)x=s_legacy.wd[\\'s_\\'+g];if(!x)x=s_legacy.wd[g];m=s_legacy.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if(("
+"\"\"+x).indexOf(\"function\")>=0)x(s_legacy);else s_legacy.m_m(\"x\",n,x,e)}m=s_legacy.m_i(n,1);if(m._dl)m._dl=m._d=0;s_legacy.dlt();return f');s_legacy.m_m=function(t,n,d,e){t='_'+t;var s_legacy=this,i,x,m,f='_'+t,r=0,u;if(s_legacy.m_l&&s_legacy.m_nl)f"
+"or(i=0;i<s_legacy.m_nl.length;i++){x=s_legacy.m_nl[i];if(!n||x==n){m=s_legacy.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){"
+"if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s_legacy.m_ll=function(){var s_legacy=this,g=s_legacy.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g["
+"i];if(o)s_legacy.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s_legacy.loadModule=function(n,u,d,l,e,ln){var s_legacy=this,m=0,i,g,o=0,f1,f2,c=s_legacy.h?s_legacy.h:s_legacy.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.subs"
+"tring(0,i)}else g=\"m_\"+n;m=s_legacy.m_i(n)}if((l||(n&&!s_legacy.m_a(n,g)))&&u&&s_legacy.d&&c&&s_legacy.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s_legacy.ssl)u=s_legacy.rep(u,'http:','https:');i='s_s:'+s_legacy._in+':'+n+':'+g;b='var s_legacy=s_"
+"c_il['+s_legacy._in+'],o=s_legacy.d.getElementById(\"'+i+'\");if(s_legacy&&o){if(!o.l&&s_legacy.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s_legacy.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s_legacy.maxDelay)s_legacy.m"
+"axDelay=250;if(!o.l&&o.c<(s_legacy.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s_legacy','c','i','u','f1','f2','var e,o=0;try{o=s_legacy.d.createElement(\"script\");if(o){o.t"
+"ype=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o"
+"=tcf(s_legacy,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s_legacy.m_dl;if(!g)g=s_legacy.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s_legacy.m_i(n);m._e=1}return m};s_legacy.voa=funct"
+"ion(vo,r){var s_legacy=this,l=s_legacy.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s_legacy[k])for(x in s_legacy[k])if(!v[x])v[x]=s_legacy[k][x];s_legacy[k]=v}"
+"}};s_legacy.vob=function(vo){var s_legacy=this,l=s_legacy.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s_legacy[k];if(!vo[k])vo['!'+k]=1}};s_legacy.dlt=new Function('var s_legacy=s_c_il['+s_legacy._in+'],d=new Date,i,vo,f=0;if(s_legacy.dll)for(i=0;i<s_legacy."
+"dll.length;i++){vo=s_legacy.dll[i];if(vo){if(!s_legacy.m_m(\"d\")||d.getTime()-vo._t>=s_legacy.maxDelay){s_legacy.dll[i]=0;s_legacy.t(vo)}else f=1}}if(s_legacy.dli)clearTimeout(s_legacy.dli);s_legacy.dli=0;if(f){if(!s_legacy.dli)s_legacy.dli=setTimeout(s_legacy.dlt,s_legacy.maxDel"
+"ay)}else s_legacy.dll=0');s_legacy.dl=function(vo){var s_legacy=this,d=new Date;if(!vo)vo=new Object;s_legacy.vob(vo);vo._t=d.getTime();if(!s_legacy.dll)s_legacy.dll=new Array;s_legacy.dll[s_legacy.dll.length]=vo;if(!s_legacy.maxDelay)s_legacy.maxDelay=250;s_legacy.dlt()};s_legacy"
+".track=s_legacy.t=function(vo){var s_legacy=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s_legacy'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt="
+"tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s_legacy.gtfs(),ta=-1,q='',qs='',code='',v"
+"b=new Object;if(s_legacy.mpc('t',arguments))return;s_legacy.gl(s_legacy.vl_g);s_legacy.uns();s_legacy.m_ll();if(!s_legacy.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s_legacy.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn"
+"=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s_legacy.isie&&s_legacy.ismac&&s_legacy.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new "
+"Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s_legacy.apv>=4)x=screen.width+'x'+screen.height;if(s_legacy.isns||s_legacy.isopera){if(s_legacy.apv>=3){v"
+"=s_legacy.n.javaEnabled()?'Y':'N';if(s_legacy.apv>=4){c=screen.pixelDepth;bw=s_legacy.wd.innerWidth;bh=s_legacy.wd.innerHeight}}s_legacy.pl=s_legacy.n.plugins}else if(s_legacy.isie){if(s_legacy.apv>=4){v=s_legacy.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if("
+"s_legacy.apv>=5){bw=s_legacy.d.documentElement.offsetWidth;bh=s_legacy.d.documentElement.offsetHeight;if(!s_legacy.ismac&&s_legacy.b){tcf=new Function('s_legacy','tl','var e,hp=0;try{s_legacy.b.addBehavior(\"#default#homePage\");hp=s_legacy.b.isHomePage"
+"(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s_legacy,tl);tcf=new Function('s_legacy','var e,ct=0;try{s_legacy.b.addBehavior(\"#default#clientCaps\");ct=s_legacy.b.connectionType}catch(e){}return ct');ct=tcf(s_legacy)}}}else r=''}i"
+"f(s_legacy.pl)while(pn<s_legacy.pl.length&&pn<30){ps=s_legacy.fl(s_legacy.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s_legacy.resolution=x;s_legacy.colorDepth=c;s_legacy.javascriptVersion=j;s_legacy.javaEnabled=v;s_legacy.cookiesEnabled=k;s_legacy.browserWidt"
+"h=bw;s_legacy.browserHeight=bh;s_legacy.connectionType=ct;s_legacy.homepage=hp;s_legacy.plugins=p;s_legacy.td=1}if(vo){s_legacy.vob(vb);s_legacy.voa(vo)}if((vo&&vo._t)||!s_legacy.m_m('d')){if(s_legacy.usePlugins)s_legacy.doPlugins(s_legacy);var l=s_legacy.wd.location,r=tfs.documen"
+"t.referrer;if(!s_legacy.pageURL)s_legacy.pageURL=l.href?l.href:l;if(!s_legacy.referrer&&!s_legacy._1_referrer){s_legacy.referrer=r;s_legacy._1_referrer=1}s_legacy.m_m('g');if(s_legacy.lnk||s_legacy.eo){var o=s_legacy.eo?s_legacy.eo:s_legacy.lnk,p=s_legacy.pageName,w=1,t=s_legacy.ot(o),n=s_legacy.oid(o"
+"),x=o.s_oidt,h,l,i,oc;if(s_legacy.eo&&o==s_legacy.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s_legacy.ot(o);n=s_legacy.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.o"
+"nclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s_legacy.oh(o);i=h.indexOf('?');h=s_legacy.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s_legacy.link"
+"Name;t=s_legacy.linkType?s_legacy.linkType.toLowerCase():s_legacy.lt(h);if(t&&(h||l)){s_legacy.pe='lnk_'+(t=='d'||t=='e'?t:'o');s_legacy.pev1=(h?s_legacy.ape(h):'');s_legacy.pev2=(l?s_legacy.ape(l):'')}else trk=0;if(s_legacy.trackInlineStats){if(!p){p=s_legacy.pageUR"
+"L;w=0}t=s_legacy.ot(o);i=o.sourceIndex;if(s_legacy.gg('objectID')){n=s_legacy.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s_legacy.ape(s_legacy.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s_legacy.ape(s_legacy.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s_legacy.ape("
+"t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s_legacy.sampled=s_legacy.vs(sed);if(trk){if(s_legacy.sampled)code=s_legacy.mr(sess,(vt?'&t='+s_legacy.ape(vt):'')+s_legacy.hav()+q+(qs?qs:s_legacy.rq()),0,ta);qs='';s_legacy.m_m('t');if(s_legacy.p_r)s_legacy.p_r();s_legacy.referre"
+"r=s_legacy.lightProfileID=s_legacy.retrieveLightProfiles=s_legacy.deleteLightProfiles=''}s_legacy.sq(qs)}}else s_legacy.dl(vo);if(vo)s_legacy.voa(vb,1);s_legacy.lnk=s_legacy.eo=s_legacy.linkName=s_legacy.linkType=s_legacy.wd.s_objectID=s_legacy.ppu=s_legacy.pe=s_legacy.pev1=s_legacy.pev2=s_legacy.pev3='';if("
+"s_legacy.pg)s_legacy.wd.s_lnk=s_legacy.wd.s_eo=s_legacy.wd.s_linkName=s_legacy.wd.s_linkType='';return code};s_legacy.trackLink=s_legacy.tl=function(o,t,n,vo){var s_legacy=this;s_legacy.lnk=s_legacy.co(o);s_legacy.linkType=t;s_legacy.linkName=n;s_legacy.t(vo)};s_legacy.trackLight=function(p,ss,"
+"i,vo){var s_legacy=this;s_legacy.lightProfileID=p;s_legacy.lightStoreForSeconds=ss;s_legacy.lightIncrementBy=i;s_legacy.t(vo)};s_legacy.setTagContainer=function(n){var s_legacy=this,l=s_legacy.wd.s_c_il,i,t,x,y;s_legacy.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i"
+"];if(t&&t._c=='s_l'&&t.tagContainerName==n){s_legacy.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s_legacy[y]&&!s_legacy[y+'_c']){s_legacy[y]=t[y];s_legacy[y+'_c']=t[y+'_c']}s_legacy.loadModule(x.n,x.u,x.d)}if(t.ml"
+")for(x in t.ml)if(s_legacy[x]){y=s_legacy[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if"
+"(s_legacy[x.m]){y=s_legacy[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s_legacy.t(t.tq[i]);t.s_legacy=s_legacy;return}}};s_legacy.wd=window;s_legacy.ssl=(s_legacy.wd.loc"
+"ation.protocol.toLowerCase().indexOf('https')>=0);s_legacy.d=document;s_legacy.b=s_legacy.d.body;if(s_legacy.d.getElementsByTagName){s_legacy.h=s_legacy.d.getElementsByTagName('HEAD');if(s_legacy.h)s_legacy.h=s_legacy.h[0]}s_legacy.n=navigator;s_legacy.u=s_legacy.n.userAgent;s_legacy.ns6"
+"=s_legacy.u.indexOf('Netscape6/');var apn=s_legacy.n.appName,v=s_legacy.n.appVersion,ie=v.indexOf('MSIE '),o=s_legacy.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s_legacy.isie=(apn=='Microsoft Internet Explorer')"
+";s_legacy.isns=(apn=='Netscape');s_legacy.isopera=(apn=='Opera');s_legacy.ismac=(s_legacy.u.indexOf('Mac')>=0);if(o>0)s_legacy.apv=parseFloat(s_legacy.u.substring(o+6));else if(ie>0){s_legacy.apv=parseInt(i=v.substring(ie+5));if(s_legacy.apv>3)s_legacy.apv=par"
+"seFloat(i)}else if(s_legacy.ns6>0)s_legacy.apv=parseFloat(s_legacy.u.substring(s_legacy.ns6+10));else s_legacy.apv=parseFloat(v);s_legacy.em=0;if(s_legacy.em.toPrecision)s_legacy.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpp"
+"erCase();s_legacy.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s_legacy.oun)s_legacy.sa(s_legacy.oun);s_legacy.sa(un);s_legacy.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServer"
+"Secure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,"
+"deleteLightProfiles,retrieveLightData';s_legacy.va_l=s_legacy.sp(s_legacy.vl_l,',');s_legacy.vl_mr=s_legacy.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,"
+"lightIncrementBy';s_legacy.vl_t=s_legacy.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s_legacy.vl_t+=',"
+"prop'+n+',eVar'+n;s_legacy.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s_legacy.vl_t+=',hier'+n;for(n=1;n<=3;n++)s_legacy.vl_t+=',list'+n;s_legacy.va_m=s_legacy.sp(s_legacy.vl_m,',');s_legacy.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,jav"
+"ascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s_legacy.vl_t+=s_legacy.vl_l2;s_legacy.va_t=s_legacy.sp(s_legacy.vl_t,',');s_legacy.vl_g=s_legacy.vl_t+',trackingServer,trackingServerSecure,tra"
+"ckingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExte"
+"rnalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s_legacy.va_g=s_legacy."
+"sp(s_legacy.vl_g,',');s_legacy.pg=pg;s_legacy.gl(s_legacy.vl_g);s_legacy.contextData=new Object;s_legacy.retrieveLightData=new Object;if(!ss)s_legacy.wds();if(pg){s_legacy.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s_legacy.wd.s_gs=function(un){s_gi(un,1,1).t("
+")};s_legacy.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s_legacy;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s_legacy=l[i];x=s_legacy._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s_legacy.oun==un||(s_legacy.fs&&s_legacy.sa&&s_legacy.fs(s_legacy.oun,un)))){if(s_legacy.sa)s_legacy.sa(un);if(x=='s_c')return s_legacy}else s_legacy=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s_legacy=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s_legacy>=0&&s_legacy<e){c=f.substring(s_legacy,s_legacy+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s_legacy++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s_legacy,e,o,a,d,q,f,h,x;s_legacy=c.indexOf('=function(');while(s_legacy>=0){s_legacy++;d=1;q='';x=0;f=c.substring(s_legacy);a=s_fa(f);e=o=c.indexOf('{',s_legacy);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s_legacy)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s_legacy=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s_legacy){s_legacy=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s_legacy._il=w.s_c_il;s_legacy._in=w.s_c_in;s_legacy._il[s_legacy._in]=s_legacy;w.s_c_in++;}s_legacy._c='s_c';(new Function("s_legacy","un","pg","ss",c))(s_legacy,un,pg,ss);return s_legacy}
function s_giqf(){var w=window,q=w.s_giq,i,t,s_legacy;if(q)for(i=0;i<q.length;i++){t=q[i];s_legacy=s_gi(t.oun);s_legacy.sa(t.un);s_legacy.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()
