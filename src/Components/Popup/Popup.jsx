// PopupBanner.js
import React, { useState, useEffect } from 'react';

const PopupBanner = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        // Set a timeout to open the popup after 5 seconds
        const timeoutId = setTimeout(() => {
            const hasPopupBeenShown = localStorage.getItem('hasPopupBeenShown');
            if (!hasPopupBeenShown) {
                setPopupVisible(true);
            }
        }, 2000);

        // Cleanup the timeout when the component is unmounted or the popup is closed
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const closePopup = () => {
        setPopupVisible(false);
        localStorage.setItem('hasPopupBeenShown', 'true');
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            // Reset the flag in local storage when the page is reloaded
            localStorage.removeItem('hasPopupBeenShown');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        isPopupVisible && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="p-4 md:p-6 lg:p-8 xl:p-10 rounded-md text-center  max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                    {/* Add your banner image and any other content here */}
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzpktXMWqK3lL1FNR6GiQGgNasq2yeB1VPA&usqp=CAU"
                        alt="Popup Banner"
                        className="max-w-full mb-4"
                    />
                    <button
                        onClick={closePopup}
                        className="absolute top-0 right-0 m-4 text-black bg-black hover:text-gray-700 focus:outline-none"
                    >
                       
                    </button>
                    <button
                        className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                        onClick={closePopup}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    );
};

export default PopupBanner;
