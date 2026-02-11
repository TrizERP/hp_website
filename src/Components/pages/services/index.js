import React from 'react';
import ServicesHero from './ServicesHero';
import ServicesBenefits from './ServicesBenefits';
import AttendanceSystem from './AttendanceSystem';
import VehicleTrackingSystem from './VehicleTrackingSystem';

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main>
                <ServicesHero />
                <ServicesBenefits />
                <AttendanceSystem />
                <VehicleTrackingSystem />
            </main>
        </div>
    );
}

