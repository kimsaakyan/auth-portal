import React from 'react';
import { motion } from 'framer-motion';

const EmptyInputAlert = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
        >
            <span className="font-medium">
                Kindly note that the password and email fields cannot be left
                empty!
            </span>
        </motion.div>
    );
};

export default EmptyInputAlert;
