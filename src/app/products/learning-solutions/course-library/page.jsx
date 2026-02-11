import React from 'react';
import ProductComponent from '@/Components/pages/products/learning-solutions/course-library/index';

export const metadata = {
    title: "Course Library | Learning Solutions | Scholar Clone",
    description: "Access a vast library of pre-built courses covering various industries and skills with Scholar Clone.",
    keywords: ["Course Library", "eLearning Content", "Training Catalog", "Scholar Clone"],
    openGraph: {
        title: "Course Library | Learning Solutions | Scholar Clone",
        description: "Access a vast library of pre-built courses covering various industries and skills with Scholar Clone.",
    }
};

export default function CourseLibraryPage() {
    return <ProductComponent />;
}
