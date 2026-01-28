
import CareerHero from '@/Components/pages/company/CareerHero';
import CareerIntro from '@/Components/pages/company/CareerIntro';
import EmployeeBenefits from '@/Components/pages/company/EmployeeBenefits';
import CareerValues from '@/Components/pages/company/CareerValues';
import CareerRoles from '@/Components/pages/company/CareerRoles';

export const metadata = {
    title: "Careers",
    description: "Build the future of education with Scholar Clone. Explore career opportunities, our culture, and benefits. Join our team today.",
    openGraph: {
        title: "Careers at Scholar Clone - Join Our Team",
        description: "Join our mission to transform education. View open positions and benefits.",
        images: ['/Images/Hero_Career.png'],
    },
};

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <CareerHero />
            <CareerIntro />
            <EmployeeBenefits />
            <CareerValues />
            <CareerRoles />
        </main>
    );
}

