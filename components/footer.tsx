import React from 'react';
import Verse from './verse';

const Footer: React.FC = () => {
    return (
        <>
        <footer className=" bg-transparent pt-12">
            <Verse />
        </footer>
        <div className="text-center text-sm mt-3">
            created by: Eng. Hesham Aref
        </div>

</>
    );
};

export default Footer;
