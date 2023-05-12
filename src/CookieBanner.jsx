import { posthog } from "posthog-js";
import { useState } from "react";

function CookieBanner() {

    const [showBanner, setShowBanner] = useState(true);

    const acceptCookies = () => {
        posthog.opt_in_capturing();
        setShowBanner(false);
    }

    const declineCookies = () => {
        posthog.opt_out_capturing();
        setShowBanner(false);
    }

    return (
        <div className="fixed bottom-0 right-0 p-4 bg-white border shadow-lg rounded-tl-lg">
            {showBanner && (
                <div>
                    <p className="text-sm font-medium text-gray-900">Nós usamos cookies para tornar o nosso produto melhor, por favor aceite</p>
                    <button onClick={acceptCookies} className="mr-2 inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Accept</button>
                    <button onClick={declineCookies} className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Decline</button>
                </div>
            )}
        </div>
    )
}

export default CookieBanner;