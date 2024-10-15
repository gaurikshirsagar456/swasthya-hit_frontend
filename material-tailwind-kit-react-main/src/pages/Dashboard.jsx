import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import './dashboard.css'; // Custom styles
import Footer from '../widgets/layout/footer'; // Import Footer

export function Dashboard() {
    return (
        <div>
            <div className="dashboard-container">
                {/* Left Panel with roles */}
                <div className="left-panel">
                    <div className="circle-container">
                        {/* Admin Role */}
                        <div className="circle-image">
                            <img src="/img/admin.png" alt="Admin" />
                        </div>
                        <p className="role-text">Admin</p>

                        {/* Doctor Role */}
                        <div className="circle-image">
                            <img src="/img/doctor.png" alt="Doctor" />
                        </div>
                        <p className="role-text">Doctor</p>

                        {/* Medical Role */}
                        <div className="circle-image">
                            <img src="/img/medical.png" alt="Medical" />
                        </div>
                        <p className="role-text">Medical</p>

                        {/* Receptionist Role */}
                        <div className="circle-image">
                            <img src="/img/receptionist.png" alt="Receptionist" />
                        </div>
                        <p className="role-text">Receptionist</p>
                    </div>
                </div>

                {/* Right Panel with form */}
                <div className="right-panel">
                    <Typography variant="h4" className="text-center mb-4">
                        Create Parent Account
                    </Typography>
                    <div className="form-container">
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <button>Create Account</button>
                    </div>
                </div>
            </div>

            {/* Footer at full width */}
            <Footer />
        </div>
    );
}

export default Dashboard;
