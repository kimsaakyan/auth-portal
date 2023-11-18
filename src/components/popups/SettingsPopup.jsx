import React from 'react';
import { motion } from 'framer-motion';

const SettingsPopup = ({ settingsPopup, setSettingsPopup }) => {
    const onClickHandler = () => {
        setSettingsPopup(!settingsPopup);
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="bg-white p-4 rounded-md flex flex-col gap-2"
            >
                <button className="px-4 py-2 rounded-3xl border transition-all duration-200 hover:bg-slate-200">
                    Forgot Username / Password?
                </button>
                <button className="px-4 py-2 rounded-3xl border transition-all duration-200 hover:bg-slate-200">
                    Create your Account{' '}
                </button>
                <button
                    onClick={onClickHandler}
                    className="px-4 py-2 rounded-3xl bg-red-300 text-white transition-all duration-200 hover:bg-red-400"
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
};

export default SettingsPopup;
