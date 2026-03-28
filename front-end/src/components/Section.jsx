import React from 'react';


const Section = ({ children, className = "", id = "", style = {}, ...props }) => {
    return (
        <section id={id} className={`section ${className}`} style={style} {...props}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;
