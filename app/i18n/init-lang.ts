/**
 * Runs before React hydrates. Reads stored language and sets html lang/dir
 * to prevent flash of wrong language. Inlined in layout <head>.
 */
export const initLangScript = `(function(){var s=document.documentElement,r=localStorage.getItem('digni-language');if(r==='fr'||r==='ar'){s.lang=r==='ar'?'ar':'fr';s.dir=r==='ar'?'rtl':'ltr'}else{s.lang='en';s.dir='ltr'}})();`
