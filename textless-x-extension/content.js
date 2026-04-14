(function() {
    const style = document.createElement('style');
    style.id = 'media-grid-styles';
    style.innerHTML = `
        /* Hide Ads */
        body.media-mode-active [data-testid="placementTracking"],
        body.media-mode-active article:has(span:contains("Ad")),
        body.media-mode-active article:has(span:contains("Promoted")) {
            display: none !important;
        }

        /* Hide Sidebars/Grok */
        body.media-mode-active header[role="banner"], 
        body.media-mode-active [data-testid="sidebarColumn"],
        body.media-mode-active [data-testid="bottomBar"],
        body.media-mode-active a[aria-label="Grok"],
        body.media-mode-active [data-testid="grok-button"] {
            display: none !important;
        }

        /* Center main column */
        body.media-mode-active main[role="main"] { align-items: center !important; }
        body.media-mode-active div[data-testid="primaryColumn"] {
            max-width: 100vw !important;
            width: 100% !important;
            border: none !important;
        }

        /* Hide text-only posts */
        body.media-mode-active [data-testid="cellInnerDiv"]:not(:has([data-testid="tweetPhoto"], [data-testid="videoPlayer"])) {
            display: none !important;
        }

        /* Hides text and buttons inside posts */
        body.media-mode-active article [data-testid="tweetText"],
        body.media-mode-active article [role="group"],
        body.media-mode-active article [data-testid="caret"],
        body.media-mode-active article [data-testid="User-Names"],
        body.media-mode-active article div[style*="color: rgb(113, 118, 123)"] {
            display: none !important;
        }

        /* Toggle button */
        #media-mode-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            padding: 10px 20px;
            background-color: #1d9bf0;
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
            font-family: sans-serif;
        }
    `;
    document.head.appendChild(style);

    const btn = document.createElement('button');
    btn.id = 'media-mode-toggle';
    btn.innerText = 'Media Mode: OFF';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        const isActive = document.body.classList.toggle('media-mode-active');
        btn.innerText = isActive ? 'Media Mode: ON' : 'Media Mode: OFF';
        btn.style.backgroundColor = isActive ? '#666666' : '#1d9bf0';
    });
})();