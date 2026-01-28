import Image from 'next/image';
import { Check } from 'lucide-react';

import { EMPLOYEE_BENEFITS_DATA } from '@/lib/data';

export default function EmployeeBenefits() {
    const benefits = EMPLOYEE_BENEFITS_DATA;

    return (
        <section className="pt-20 pb-0 bg-white">
            <div className="container mx-auto px-4">
                <div className="
                    flex flex-col lg:flex-row items-center
                    relative
                    top-0 lg:top-[-300px]
                    left-0
                ">
                    {/* Left Side: Image */}
                    <div className="
                        w-full 
                        relative 
                        rounded-2xl overflow-hidden shadow-lg
                        lg:w-[50%]
                        h-[280px] md:h-[350px] lg:h-[470px]
                    ">
                        <Image
                            src="/assets/Employee_Benifits_Career.png"
                            alt="Employee Benefits at Scholar Clone"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* Right Side: Benefits Card */}
                    <div className="
                        w-full 
                        relative z-10
                        lg:w-[70%]
                        mt-4 lg:mt-0
                        lg:ml-[-130px]
                    ">
                        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-slate-100">
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">
                                Employee Benefits & Perks
                            </h2>
                            <ul className="space-y-2">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded bg-green-500 flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-black text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
