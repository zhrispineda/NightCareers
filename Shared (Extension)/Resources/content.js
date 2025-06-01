console.log("NightCareers has arrived");

let style = null;

function injectDarkMode() {
    style = document.createElement('style');
    style.textContent = `
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
        a, h1, h2, label, .search-typeahead-input {
            color: #FFF !important;
        }
      
        /* SPAN, JOB POSTING DATE, JOB ROLE NUMBER, JOB WEEKLY HOURS, LIST ITEM */
        span, #jobdetails-postingdate, #jobdetails-rolenumber, #jobdetails-weeklyworkinghours, li, #suggestions-list, .search-typeahead-list-item, .search-typeahead-list, .search-typeahead-container, .search-input-container {
            color: #CCC !important;
        }
      
        /* LINKS */
        button, .link-inline, #jobdetails-jobdetailheader-backtosearch, #jobdetails-jobdetailfooter-backtosearch, #jobdetails-jobdetailfooter-findmore {
            color: rgb(75, 150, 255) !important;
        }
      
        /* SEARCH FILTER PILL, INPUT, TERTIARY BACKGROUND FILL */
        #search-pillbtn-0, input, .background-fill-tertiary {
            background-color: #1A1A1A !important;
        }
      
        /* SHOP FOOTER, COPYRIGHT, PARAGRAPH */
        .ac-gf-footer-shop, .ac-gf-footer-legal-copyright, p {
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
