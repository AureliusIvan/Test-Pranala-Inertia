// styling
import Guest from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import React, { useEffect } from 'react';
import HeroSection from './Section/HeroSection';
import DescriptionSection from './Section/DescriptionSection';
import TestimonySection from './Section/TestimonySection';
import Slider from '@/Components/General/Slider';
import ProductSection from './Section/ProductSection';
import CollaborateCard from '@/Components/General/CollaborateCard';
import SectionContainer from '@/Components/General/SectionContainer';
import AboutIcon from "./Asset/about-icon.svg"
import ServiceIcon from "./Asset/services-icon.svg"
import AboutSection from './Section/AboutSection';
import CollaborateSection from './Section/CollaborateSection';
import WebscreenImage from "@/Assets/Images/webscreen.webp"
import "./HomePage.scss"

export default function HomePage() {
    const page: any = usePage().props;

    return (
        <>
            Hello World
        </>
    )
}