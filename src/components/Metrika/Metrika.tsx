'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import ym from 'react-yandex-metrika';

export function Metrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ym(String(68177191), 'hit', window.location.href);
  }, [pathname, searchParams]);

  return (
    <Script id='yandex-metrika'>{`
  (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter68177191 = new Ya.Metrika({
                    id:68177191,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            x = "https://mc.yandex.ru/metrika/watch.js",
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        for (var i = 0; i < document.scripts.length; i++) {
            if (document.scripts[i].src === x) { return; }
        }
        s.type = "text/javascript";
        s.async = true;
        s.src = x;

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks")
  `}</Script>
  );
}
