console.log("NightCareers has arrived");

let style = null;

function injectDarkMode() {
    style = document.createElement('style');
    style.textContent = `
        #suggestion-0, #suggestion-1, #suggestion-2, #suggestion-3, #suggestion-4, #suggestion-5, #suggestion-6, #suggestion-7, #suggestion-8, #suggestion-9 {
            background-color: #000 !important;
        }
      
        .form-tooltip-gap {
            opacity: 0%;
        }
      
        .form-tooltip-info {
            background-color: #E8E8ED !important;
        }
            
        p {
            color: #777 !important;
        }
      
        /* ELEMENTS */
        html, main, div, footer, .pl-0 {
            background-color: #000 !important;
        }
      
        /* NAVIGATION BAR */
        #globalnav, .globalnav-content, .globalnav-link {
            background-color: #000 !important;
        }
      
        .localnav-content, .localnav-background, .localnav-menu-tray, .localnav-actions, .localnav-title {
            background-color: #000 !important;
        }
      
        /* TEXT */
        a, h1, h2, label, .search-typeahead-input, .pill-text, #search-result-count, .text-center, .button-block {
            color: #FFF !important;
        }
      
        /* SPAN, JOB POSTING DATE, JOB ROLE NUMBER, JOB WEEKLY HOURS, LIST ITEM */
        span, #jobdetails-postingdate, #jobdetails-rolenumber, #jobdetails-weeklyworkinghours, li, #suggestions-list, .search-typeahead-list-item, .search-typeahead-list, .search-typeahead-container, .search-input-container {
            color: #CCC !important;
        }
      
        /* LINKS */
        button, .link-inline, #jobdetails-jobdetailheader-backtosearch, #jobdetails-jobdetailfooter-backtosearch, #jobdetails-jobdetailfooter-findmore, .ml-10 {
            color: rgb(75, 150, 255) !important;
        }
      
        /* SEARCH FILTER PILL, INPUT, TERTIARY BACKGROUND FILL */
        #search-pillbtn-0, input, .background-fill-tertiary, #filter-pillbtn-0 {
            background-color: #1A1A1A !important;
        }
      
        .localnav-button {
            background-color: #333 !important;
        }
      
        .full-width-dropdown {
            border-bottom: 1px solid #444;
        }
      
        /* SHOP FOOTER, COPYRIGHT, PARAGRAPH */
        .ac-gf-footer-shop, .ac-gf-footer-legal-copyright{
            color: #AAA !important;
        }
      
        /* NEUTRAL STATE BUTTON */
        .button-neutral {
            background-color: #444 !important; 
        }
      
        /* MARKERS */
        ::marker {
            color: white;
        }
      `;
    document.head.appendChild(style);
    console.log("[NightCareers] Injected Dark Mode!")
}

injectDarkMode();
