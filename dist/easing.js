define("arale/easing/1.0.0/easing",["$"],function(n,t,e){var u=Math.PI,r=Math.pow,o=Math.sin,c=1.70158,a={easeNone:function(n){return n},easeIn:function(n){return n*n},easeOut:function(n){return(2-n)*n},easeBoth:function(n){return 1>(n*=2)?.5*n*n:.5*(1- --n*(n-2))},easeInStrong:function(n){return n*n*n*n},easeOutStrong:function(n){return 1- --n*n*n*n},easeBothStrong:function(n){return 1>(n*=2)?.5*n*n*n*n:.5*(2-(n-=2)*n*n*n)},backIn:function(n){return 1===n&&(n-=.001),n*n*((c+1)*n-c)},backOut:function(n){return(n-=1)*n*((c+1)*n+c)+1},backBoth:function(n){var t=c,e=(t*=1.525)+1;return 1>(n*=2)?.5*n*n*(e*n-t):.5*((n-=2)*n*(e*n+t)+2)},elasticIn:function(n){var t=.3,e=t/4;return 0===n||1===n?n:-(r(2,10*(n-=1))*o(2*(n-e)*u/t))},elasticOut:function(n){var t=.3,e=t/4;return 0===n||1===n?n:r(2,-10*n)*o(2*(n-e)*u/t)+1},elasticBoth:function(n){var t=.45,e=t/4;return 0===n||2===(n*=2)?n:1>n?-.5*r(2,10*(n-=1))*o(2*(n-e)*u/t):.5*r(2,-10*(n-=1))*o(2*(n-e)*u/t)+1},bounceIn:function(n){return 1-a.bounceOut(1-n)},bounceOut:function(n){var t,e=7.5625;return t=1/2.75>n?e*n*n:2/2.75>n?e*(n-=1.5/2.75)*n+.75:2.5/2.75>n?e*(n-=2.25/2.75)*n+.9375:e*(n-=2.625/2.75)*n+.984375},bounceBoth:function(n){return.5>n?.5*a.bounceIn(2*n):.5*a.bounceOut(2*n-1)+.5}};e.exports=a;var i=n("$");i.extend(i.easing,a)});