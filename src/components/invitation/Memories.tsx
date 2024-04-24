'use client'
import Image from "next/image"
import Title from "../ui/Title"
import { useEffect, useState } from "react"
import ArrowLeft from "../ui/ArrowLeft"
import ArrowRight from "../ui/ArrowRight"

export default function Memories() {
    const [currentImage, setCurrentImage] = useState(0); // For help in the automatic change of image
    const [ width, setWidth ] = useState(50);

    const images = [ 
        'https://futoikarasu.com/wp-content/uploads/2023/03/image-41.png', 
        'https://futoikarasu.com/wp-content/uploads/2023/03/image-33.png?w=840'
    ]
    
    // Change to next image
    const nextSlide = () => {
        setCurrentImage((currentImage + 1) % images.length);
        console.log(currentImage)
    };

    // Change to prev image
    const prevSlide = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
        console.log(currentImage)
    };

    // Automatic change
    useEffect(()=> {
        const interval = setInterval(() => {
            setCurrentImage((currentImage + 1) % images.length);
        }, 5000)

        return () => clearInterval(interval);
    }, [currentImage, images.length])

    return (
        <>
            <Title title="Momentos"/>

            <div className="relative mt-8">
                
                <div className="overflow-hidden">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className={`w-full mx-auto ${index === currentImage ? 'animate-carousel' : 'hidden'}`}
                            width={900}
                            height={500}
                        />
                    ))}
                </div>
                <div className={`flex gap-2 justify-center my-2 w-1/12 p-1 rounded-md mx-auto bg-purple-700`}>
                    {
                        images.map( ( image, index ) => (
                            <p key={index} className={`${ index === currentImage? 'bg-purple-400' : 'bg-purple-400 bg-opacity-30' } rounded-full w-3 h-3`}></p>
                        ))
                    }
                </div>
                <div className="flex justify-between absolute w-full top-1/2 transform -translate-y-1/2 px-2">
                    <button onClick={prevSlide} className="bg-purple-900 bg-opacity-50 px-2 py-2 rounded-full">
                        {/* Icon from Heroicons */}
                        <ArrowLeft/>
                    </button>
                    <button onClick={nextSlide} className="bg-purple-900 bg-opacity-50 px-2 py-2 rounded-full">
                        {/* Icon from Heroicons */}
                        <ArrowRight/>
                    </button>
                </div>
            </div>
        </>
    )
}