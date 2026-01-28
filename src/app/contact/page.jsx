
import ContactHero from '@/Components/pages/contact/ContactHero';
import ContactForm from '@/Components/pages/contact/ContactForm';
import ContactMap from '@/Components/pages/contact/ContactMap';

export const metadata = {
    title: 'Contact Us - Get in Touch',
    description: 'Contact Scholar Clone for inquiries about our education management solutions. We\'re here to help transform your institution.',
    keywords: 'contact, support, inquiry, demo request',
    openGraph: {
        title: 'Contact Scholar Clone',
        description: 'Get in touch with our team to learn how we can help your institution.',
        images: ['/Images/Logo.png'],
        type: 'website',
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <h1 className="sr-only">Contact Scholar Clone</h1>
            <ContactHero />

            <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <p className="text-lg text-black leading-relaxed">
                    We are here to help you transform your educational institution. whether you have questions about our ERP features, need a customized demo, or require technical support, our team is ready to assist you. Reach out to us via the form below, email, or visit our office. Let's build the future of education together.
                </p>
            </div>

            <ContactForm />

            <ContactMap />

        </main>
    );
}

