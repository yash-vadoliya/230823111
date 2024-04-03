import React from 'react';

function Resume() {
    return (
        <div>
    background-color: #333b47;
            <h1 style={{ padding: "0 0 50px 0", textalign: "center", marginLeft: "30%", fontsize: "72px" , backgroundColor:"#333b47"}}>IshaanAgarwal</h1>
        
        <div style={{ display: 'flex',gap:"20px", justifyContent: "center", alignItems: "start", width: "80%", margin: "0 auto",height:"100%" }}>
            <div style={{ flex: 1, background: "#6f4e37", color: "white",height:"110vh" , padding : '20px'}}>
                <div>
                    <ul style={{ listStyleType: "none" }}>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" /></svg>
                            New Dehli 110034
                        </li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" /></svg> +91 964685132</li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277" /></svg> ALen</li>
                    </ul>
                </div>
                <h1>Professional Summary</h1>

                <p>Customer-focused Retail & Sales professional with in-depth understanding of retail dynamics, marketing, and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer expectations and needs. Demonstrated record of exceeding revenue targets by leveraging sales expertise and communication skills.</p>

                <h2>Core Qualifications</h2>
                <ul>
                    <li>Cash register operator</li>
                    <li>POS system operation</li>
                    <li>Sales expertise</li>
                    <li>Teamwork</li>
                    <li>Inventory management</li>
                    <li>Accurate money handling</li>
                    <li>Documentation & record keeping</li>
                    <li>Retail merchandising expertise</li>
                </ul>
                <h2>Languages</h2>
                <ul>
                    <li>Hindi (Native)</li>
                    <li>English (Fluent)</li>
                    <li>Bengali (Intermediate)</li>
                </ul>
                <div style={{ marginTop: '20px' }}>
                    <h2>Additional Information</h2>
                    <ul>
                        <li>Taught lifesaving skills and CPR classes</li>
                        <li>Red Cross volunteer</li>
                    </ul>

                </div>
            </div>

            <div style={{ flex: 3 }}>
                <div style={{ }}>
                    
                    <hr></hr>
                    <h2>Experience</h2>
                    <div style={{ marginBottom: '20px' }}>
                        <h3>Retail Sales Associate at ZARA, New Delhi, India (February 2021 - Current)</h3>
                        <p>Increased monthly sales by 10% by effectively upselling and cross-selling products to maximize profitability</p>
                        <p>Prevented store losses by identifying and investigating concerns with awareness, attention to detail, and integrity</p>
                        <p>Processed payments and maintained accurate drawers to meet financial targets</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h3>Barista at Dunkin' Donuts, New Delhi, India (March 2019 - January 2021)</h3>
                        <p>Upsold seasonal drinks and pastries, boosting average weekly sales by $1500</p>
                        <p>Managed morning rush of over 300 customers daily with efficient and level-headed customer service</p>
                        <p>Trained 15 baristas in new smoothie offerings and procedures</p>
                        <p>Developed creative and appealing latte art techniques and instructed coworkers in the method</p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <h3>Cashier at Burger King, New Delhi, India (July 2017 - February 2019)</h3>
                        <p>Processed all sales transactions accurately and promptly</p>
                        <p>Entered requested menu items into the POS terminal, modifying orders with substitutions and add-ons</p>
                        <p>Accurately made change for cash transactions</p>
                        <p>Verified orders and bagged items for easy transport</p>
                        <p>Completed opening, closing, and shift change tasks to promote store efficiency</p>
                        <p>Monitored and counted food stock and supplies and reordered as needed</p>
                        <p>Kept customer and food preparation areas clean and organized for maximum efficiency</p>
                    </div>
                </div>

                <div>
                    <hr></hr>
                    <h2>Education</h2>
                    <p>Financial Accounting, Oxford Software Institute & Oxford School of English, New Delhi, India (2018)</p>

                    <hr></hr>
                    <h2>Interests</h2>
                    <p>Recreational Football League: Team captain (two-time league champions)</p>
                    <p>Local community theater: Organized several shows and performances</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Resume;
