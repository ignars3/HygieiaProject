import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.removeClass(document.body, 'mat-typography');
    this.removeHeader();
    this.addHeader();
  }

  removeHeader(): void {
    let element = document.getElementById('wp-block-library-css');
    element != null ? document.getElementsByTagName('head')[0].removeChild(element) : element = null;
  }

  addHeader(): void {
     // Under Head
     let nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/linkid.js";
     nodeScript.type = 'text/javascript';
     nodeScript.async = true;
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
     
     nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/recaptcha__uk.js";
     nodeScript.type = 'text/javascript';
     nodeScript.async = true;
     nodeScript.crossOrigin = 'anonymous';
     nodeScript.integrity = 'sha384-HaLqZJnNwoVc4yS5F84Qro080uVyUmXSxXJsVhQPRD20X1nOUHONjEs2yXAvsmlJ'
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/webfont.js";
     nodeScript.type = 'text/javascript';
     nodeScript.async = true;
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/analytics.js";
     nodeScript.type = 'text/javascript';
     nodeScript.async = true;
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     nodeScript = document.createElement('script');
     nodeScript.type = 'application/ld+json';
     nodeScript.innerHTML = '{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"","url":"","name":"HealthCheck","description":"Testing and Health Status Verification Platform","potentialAction":[{"@type":"SearchAction","target":"","query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"ImageObject","@id":"","inLanguage":"en-US","url":"","width":200,"height":38,"caption":"Healthcheck_white"},{"@type":"WebPage","@id":"","url":"","name":"Home - HealthCheck","isPartOf":{"@id":""},"primaryImageOfPage":{"@id":""},"datePublished":"2020-09-19T07:32:56+00:00","dateModified":"2022-02-08T00:01:19+00:00","description":"Turnkey testing and vaccination verification solution for employers and schools but on the SAFE Platform and operated in partnership with Mayo Clinic.","breadcrumb":{"@id":""},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":[""]}]},{"@type":"BreadcrumbList","@id":"","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"WebPage","@id":"","url":"","name":"Home"}}]}]}';
     nodeScript.classList.add('yoast-schema-graph');
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     let nodeLink = document.createElement('link');
     nodeLink.rel = "dns-prefetch";
     nodeLink.href = 'https://www.google.com/';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "dns-prefetch";
     nodeLink.href = 'https://s.w.org/';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     let nodeStyle = document.createElement('style');
     nodeStyle.type = "text/css";
     nodeStyle.innerHTML = 'img.wp-smiley,img.emoji{display:inline!important;border:none!important;box-shadow:none!important;height:1em!important;width:1em!important;margin:0 .07em!important;vertical-align:-.1em!important;background:none!important;padding:0!important}';
     document.getElementsByTagName('head')[0].appendChild(nodeStyle);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'wp-block-library-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/style_003.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'wp-components-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/style_006.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'wp-block-editor-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/style.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'wp-nux-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/style_007.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'wp-editor-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/style_008.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'author-avatars-style-css-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/blocks.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'contact-form-7-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/styles.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'cookie-consent-style-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/style_004.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'rs-plugin-settings-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/settings.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeStyle = document.createElement('style');
     nodeStyle.id = 'rs-plugin-settings-inline-css';
     nodeStyle.type = "text/css";
     nodeStyle.innerHTML = '#rs-demo-id{}';
     document.getElementsByTagName('head')[0].appendChild(nodeStyle);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'monsterinsights-popular-posts-style-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/frontend_002.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'bootstrap-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/bootstrap.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'font-awesome-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/font-awesome.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'linea-font-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/linea-font.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'et-lineicons-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/style_005.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'slick-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/slick.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'animate-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/animate.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'magnific-popup-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/magnific-popup.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'definity_main-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/style_002.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'definity_responsive-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/responsive.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'author-avatars-widget-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/widget.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-icons-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/elementor-icons.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-animations-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/animations.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-frontend-legacy-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/frontend-legacy.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-frontend-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/frontend_003.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-post-5-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/post-5.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-pro-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/frontend.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-global-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/global.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-post-70-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/post-70.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'author-avatars-shortcode-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/shortcode.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'google-fonts-1-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/css_002.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-icons-shared-0-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/fontawesome.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
     
     nodeLink = document.createElement('link');
     nodeLink.rel = "stylesheet";
     nodeLink.id = 'elementor-icons-fa-brands-css';
     nodeLink.href = 'assets/javascripts/HealthCheck_files/brands.css';
     nodeLink.type = 'text/css';
     nodeLink.media = 'all';
     document.getElementsByTagName('head')[0].appendChild(nodeLink);
 
     nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/frontend-gtag.js";
     nodeScript.type = 'text/javascript';
     nodeScript.id = 'monsterinsights-frontend-script-js';
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/jquery_009.js";
     nodeScript.type = 'text/javascript';
     nodeScript.id = 'jquery-core-js';
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/jquery-migrate.js";
     nodeScript.type = 'text/javascript';
     nodeScript.id = 'jquery-migrate-js';
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/jquery_005.js";
     nodeScript.type = 'text/javascript';
     nodeScript.id = 'tp-tools-js';
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/jquery_007.js";
     nodeScript.type = 'text/javascript';
     nodeScript.id = 'revmin-js';
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     nodeScript = document.createElement('script');
     nodeScript.src = "assets/javascripts/HealthCheck_files/jquery_003.js";
     nodeScript.type = 'text/javascript';
     nodeScript.id = 'easing-js';
     document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
     nodeStyle = document.createElement('style');
     nodeStyle.type = "text/css";
     nodeStyle.id = "ctcc-css";
     nodeStyle.media = "screen";
     nodeStyle.innerHTML = '#catapult-cookie-bar{box-sizing:border-box;max-height:0;opacity:0;z-index:99999;overflow:hidden;color:#464646;position:fixed;left:0;bottom:0;width:100%;background-color:#fff}#catapult-cookie-bar a{color:#6ec1e4}#catapult-cookie-bar .x_close span{background-color:#fff}button#catapultCookie{background:#6ec1e4;color:#fff;border:0;padding:6px 9px;border-radius:3px}#catapult-cookie-bar h3{color:#464646}.has-cookie-bar #catapult-cookie-bar{opacity:1;max-height:999px;min-height:30px}';
     document.getElementsByTagName('head')[0].appendChild(nodeStyle);
 
     nodeStyle = document.createElement('style');
     nodeStyle.type = "text/css";
     nodeStyle.innerHTML = '.recentcomments a{display:inline!important;padding:0!important;margin:0!important}';
     document.getElementsByTagName('head')[0].appendChild(nodeStyle);
 
      nodeScript = document.createElement('script');
      nodeScript.type = 'text/javascript';
      nodeScript.innerHTML = 'function setREVStartSize(e){try{var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if(c)jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})}catch(d){console.log("Failure at Presize of Slider:"+d)}};';
      document.getElementsByTagName('head')[0].appendChild(nodeScript);
 
      nodeStyle = document.createElement('style');
      nodeStyle.innerHTML = '.pswp.pafe-lightbox-modal{display:none}';
      document.getElementsByTagName('head')[0].appendChild(nodeStyle);
 
      nodeLink = document.createElement('link');
      nodeLink.rel = "stylesheet";
      nodeLink.href = 'assets/javascripts/HealthCheck_files/css.css';
      nodeLink.media = 'all';
      document.getElementsByTagName('head')[0].appendChild(nodeLink);
     // Under Head
 
     // Under Body
     let node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/hooks.js";
     node.type = 'text/javascript';
     node.id = 'wp-hooks-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/i18n.js";
     node.type = 'text/javascript';
     node.id = 'wp-i18n-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/lodash.js";
     node.type = 'text/javascript';
     node.id = 'lodash-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/url.js";
     node.type = 'text/javascript';
     node.id = 'wp-url-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/api-fetch.js";
     node.type = 'text/javascript';
     node.id = 'wp-api-fetch-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/index_002.js";
     node.type = 'text/javascript';
     node.id = 'contact-form-7-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/google-fonts.js";
     node.type = 'text/javascript';
     node.id = 'definity_google_fonts-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/bootstrap.js";
     node.type = 'text/javascript';
     node.id = 'bootstrap-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/jquery_006.js";
     node.type = 'text/javascript';
     node.id = 'stellar-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/slick.js";
     node.type = 'text/javascript';
     node.id = 'slick-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/jquery_004.js";
     node.type = 'text/javascript';
     node.id = 'easypiechart-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/countup.js";
     node.type = 'text/javascript';
     node.id = 'countup-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/isotope.js";
     node.type = 'text/javascript';
     node.id = 'isotope-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/jquery.js";
     node.type = 'text/javascript';
     node.id = 'magnific-popup-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/wow.js";
     node.type = 'text/javascript';
     node.id = 'wow-js';
     document.getElementsByTagName('body')[0].appendChild(node);
     
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/packery-mode.js";
     node.type = 'text/javascript';
     node.id = 'packery-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/anim-dots.js";
     node.type = 'text/javascript';
     node.id = 'anim-dots-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/main.js";
     node.type = 'text/javascript';
     node.id = 'definity_main-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/wp-embed.js";
     node.type = 'text/javascript';
     node.id = 'wp-embed-js';
     document.getElementsByTagName('body')[0].appendChild(node);
    
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/jquery_008.js";
     node.type = 'text/javascript';
     node.id = 'smartmenus-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/frontend-modules.js";
     node.type = 'text/javascript';
     node.id = 'elementor-frontend-modules-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/jquery_002.js";
     node.type = 'text/javascript';
     node.id = 'elementor-sticky-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.type = 'text/javascript';
     node.id = 'elementor-pro-frontend-js-before';
     node.innerHTML = 'var ElementorProFrontendConfig={"nonce":"e9420d4472","i18n":{"toc_no_headings_found":"No headings were found on this page."},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"google":{"title":"Google+","has_counter":true},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"delicious":{"title":"Delicious"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"weixin":{"title":"WeChat"},"weibo":{"title":"Weibo"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{}};';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/frontend_002.js";
     node.type = 'text/javascript';
     node.id = 'elementor-pro-frontend-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/core.js";
     node.type = 'text/javascript';
     node.id = 'jquery-ui-core-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/dialog.js";
     node.type = 'text/javascript';
     node.id = 'elementor-dialog-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/waypoints.js";
     node.type = 'text/javascript';
     node.id = 'elementor-waypoints-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/swiper.js";
     node.type = 'text/javascript';
     node.id = 'swiper-js';
     document.getElementsByTagName('body')[0].appendChild(node);
     
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/share-link.js";
     node.type = 'text/javascript';
     node.id = 'share-link-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.type = 'text/javascript';
     node.id = 'elementor-frontend-js-before';
     node.innerHTML = 'var elementorFrontendConfig={"environmentMode":{"edit":false,"wpPreview":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"version":"3.0.9","is_static":false,"legacyMode":{"elementWrappers":true},"settings":{"page":[],"editorPreferences":[]},"kit":{"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":70,"title":"HealthCheck%20%E2%80%93%20Testing%20and%20Health%20Status%20Verification%20Platform","excerpt":"","featuredImage":false}};';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     node = document.createElement('script');
     node.src = "assets/javascripts/HealthCheck_files/frontend.js";
     node.type = 'text/javascript';
     node.id = 'elementor-frontend-js';
     document.getElementsByTagName('body')[0].appendChild(node);
 
     let node1 = document.createElement('span');
     node.classList.add('elementor-screen-only');
     node.id = 'elementor-device-mode';
     document.getElementsByTagName('body')[0].appendChild(node1);
     // Under Body
  }
}
