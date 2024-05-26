import React, { useState, useEffect } from 'react';
import './vv_doctor_dtls.css';
import Vv_Navbar from '../../vv_Navbar/vv_navbar';

const DoctorDetails = () => {
    const [doctorDetails, setDoctorDetails] = useState(null);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState(null);
    const [appointmentMessage, setAppointmentMessage] = useState('');
    const [isAppointmentScheduled, setIsAppointmentScheduled] = useState(false);

    useEffect(() => {
        // Simulate fetching doctor details
        const fetchDoctorDetails = async () => {
            // You can replace this with actual API fetching logic
            const doctorData = {
                name: 'Dr. John Doe',
                specialization: 'Cardiologist',
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                availableTimings: [
                    '10:00 AM - 11:00 AM',
                    '02:00 PM - 03:00 PM',
                    '04:00 PM - 05:00 PM'
                ]
            };
            setDoctorDetails(doctorData);
        };

        fetchDoctorDetails();
    }, []);

    const handleTimeSlotSelection = (timeSlot) => {
        setSelectedTimeSlot(timeSlot);
    };

    const handleAppointmentDateChange = (date) => {
        setAppointmentDate(date);
    };

    const handleAppointmentBooking = () => {
        if (selectedTimeSlot && appointmentDate) {
            // Submit appointment request to backend (simulated here)
            const appointmentDetails = {
                doctor: doctorDetails.name,
                date: appointmentDate,
                time: selectedTimeSlot
            };
            setAppointmentMessage(`Appointment scheduled with ${doctorDetails.name} on ${appointmentDate} at ${selectedTimeSlot}`);
            setIsAppointmentScheduled(true);
        } else {
            setAppointmentMessage('Please select appointment date and time slot.');
        }
    };

    return (
        <div><Vv_Navbar/>
        <div className="doctor-details-container">
            {/* Display doctor details */}
            {doctorDetails && (
                <div className="doctor-details">
                    <h2>{doctorDetails.name}</h2>
                    <p>{doctorDetails.specialization}</p>
                    <p>{doctorDetails.bio}</p>
                </div>
            )}

            {/* Display available timings */}
            <div className="available-timings">
                <h3>Available Timings</h3>
                {/* Display available time slots */}
                <ul>
                    {doctorDetails &&
                        doctorDetails.availableTimings.map((timeSlot, index) => (
                            <li key={index} onClick={() => handleTimeSlotSelection(timeSlot)}>
                                {timeSlot}
                            </li>
                        ))}
                </ul>
            </div>

            {/* Appointment scheduling */}
            <div className="appointment-schedule">
                <h3>Schedule Appointment</h3>
                {/* Date picker for selecting appointment date */}
                <input
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => handleAppointmentDateChange(e.target.value)}
                />
                {/* Appointment booking button */}
                <button onClick={handleAppointmentBooking}>Book Appointment</button>
                {/* Display appointment message */}
                {appointmentMessage && <p>{appointmentMessage}</p>}
            </div>
        </div>
        </div>
    );
};

export default DoctorDetails;
