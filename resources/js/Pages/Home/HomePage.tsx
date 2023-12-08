// styling
import Guest from '@/Layouts/GuestLayout';
import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

export default function HomePage() {
    const page: any = usePage().props;

    const [input, setInput] = useState<number>();

    const [type, setType] = useState<number>(0);
    const [result, setResult] = useState<any>();
    const [array, setArray] = useState<any[]>([]);

    const handleChange = (e: any) => {
        setInput(e.target.value)
    }

    //for checking the input
    useEffect(() => {
        console.log(input);
    }, [input])

    useEffect(() => {
        console.log("array", array);
    }, [array])


    function numCheck(i: any) {
        let regex = "/^[0-9]+$/"
        if (isNaN(i)) {
            return false;
        }
        return true
    }

    const handleTriangle = async (type: number) => {
        if (input === null) {
            alert("Input tidak boleh kosong");
            return false;
        }
        if (numCheck(input) === false) {
            alert("Input harus berupa angka!");
            return false;
        }
        setType(type);
        axios.post("api/pyramid", {
            num: input,
            type: type
        })
            .then((response) => {
                console.log(response.data.array);
                setArray(response.data.array);
                setResult(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleOdd = async (type: number) => {
        setType(type);
        axios.post("api/generateodd", {
            num: input,
            type: type
        })
            .then((response) => {
                console.log("data: ", response.data.array);
                let array = Object.values(response.data.array);
                setArray(array);
                setResult(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handlePrime = async (type: number) => {
        setType(type);
        axios.post("api/generateprime", {
            num: input,
            type: type
        })
            .then((response) => {
                console.log("data: ", response.data);
                let array = Object.values(response.data.array);
                setArray(array);
                setResult(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <>
            <form
                className='p-[20px] flex flex-col gap-[1rem]'
            >
                <div
                    className=''
                >
                    <input type="text"
                        onChange={handleChange}
                        className='border border-primaryBlack'
                        placeholder='input angka'
                    />
                </div>
                <div
                    className='flex gap-[1rem]'
                >
                    <button
                        onClick={(e: any) => {
                            e.preventDefault();
                            handleTriangle(0)
                        }}
                        type='button'
                        className='p-[2px] bg-primaryPink'
                    >
                        Generate segitiga
                    </button>
                    <button
                        onClick={(e: any) => {
                            e.preventDefault();
                            // handleSubmit(1)
                            handleOdd(1);
                        }}
                        className='p-[2px] bg-primaryPink'
                    >
                        Generate Bilangan Ganjil
                    </button>
                    <button
                        onClick={(e: any) => {
                            e.preventDefault();
                            handlePrime(2)
                        }}
                        className='p-[2px] bg-primaryPink'
                    >
                        Generate Bilangan Prisma
                    </button>
                </div>

                <div>
                    <h1
                        className='font-bold'
                    >
                        Result :
                    </h1>
                    <div>
                        {type === 0 ?
                            array?.map((item: any, index: any) => {
                                return (
                                    <div>
                                        {item}
                                        0
                                        {Array.from(Array(index)).map((num) => {
                                            return 0
                                        })}
                                    </div>)
                            })
                            :
                            type === 1 ?
                                <>
                                    {
                                        array?.map((item: any, index: any) => {
                                            return (
                                                <div>
                                                    {item}
                                                </div>)
                                        })
                                    }
                                </>
                                :
                                <>
                                    {
                                        array?.map((item: any, index: any) => {
                                            return (
                                                <div>
                                                    {item}
                                                </div>)
                                        })
                                    }
                                </>

                        }
                    </div>
                </div>
            </form>
        </>
    )
}