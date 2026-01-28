
import ServicesHero from '@/Components/pages/services/ServicesHero';
import AttendanceSystem from '@/Components/pages/services/AttendanceSystem';
import ServicesBenefits from '@/Components/pages/services/ServicesBenefits';
import VehicleTrackingSystem from '@/Components/pages/services/VehicleTrackingSystem';
import VehicleTrackingBenefits from '@/Components/pages/services/VehicleTrackingBenefits';
import VisualizeModule from '@/Components/pages/services/VisualizeModule';

export const metadata = {
  title: 'Services & Support | Scholar Clone',
  description: 'Scholar Clone provides comprehensive services including implementation, 24/7 support, training programs, and digital transformation consulting for educational institutions.',
  keywords: 'education services, implementation, technical support, training, consulting, digital transformation',
  openGraph: {
    title: 'Scholar Clone Services - Implementation, Support & Training',
    description: 'Comprehensive services to help your institution succeed with our education management solutions.',
    images: ['/Images/Logo.png'],
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServicesHero />

      {/* Attendance System Section */}
      <AttendanceSystem />

      {/* Benefits Section */}
      <ServicesBenefits />

      {/* Vehicle Tracking System Section */}
      <VehicleTrackingSystem />

      {/* Vehicle Tracking Benefits Section */}
      <VehicleTrackingBenefits />

      {/* Visualize Module Section */}
      <VisualizeModule />
    </main>
  );
}

