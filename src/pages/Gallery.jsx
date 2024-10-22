import { useState } from 'react';
import Image from '../components/LazyLoadImage';
import exteriorImg from '../assets/gallery/pic-0.jpeg';
import interiorImg from '../assets/gallery/pic-1.jpeg';
import teamImg from '../assets/gallery/pic-2.jpeg';
import openDayImg from '../assets/gallery/pic-3.jpeg';
import 'boxicons';

const galleryItems = [
    {
        src: exteriorImg,
        alt: 'Pharmacy Exterior',
        title: 'KanuniAfya Exterior',
        caption:
            'Pharmacy clearly visible and accessible to customers and patients.',
    },
    {
        src: interiorImg,
        alt: 'Pharmacy Interior',
        title: 'KanuniAfya Interior',
        caption:
            'Pharmacy interior with a wide range of products and services.',
    },
    {
        src: teamImg,
        alt: 'Exemplary Team',
        title: 'KanuniAfya Team',
        caption:
            'Our team of professionals is dedicated to providing quality services.',
    },
    {
        src: openDayImg,
        alt: 'Pharmacy Open day',
        title: 'KanuniAfya Open Day',
        caption: 'Customer service open day.',
    },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className='container mx-auto py-16 px-4'>
                <h1 className='text-4xl font-bold text-center mb-12 text-[#146D16]'>
                    Gallery
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className='relative cursor-pointer w-[300px] h-[220px] rounded-lg overflow-hidden'
                        >
                            <Image
                                image={{
                                    src: item.src,
                                    alt: item.alt,
                                    className:
                                        'transition duration-300 ease-in-out transform hover:scale-105 object-cover',
                                }}
                                onClick={() => setSelectedImage(item)}
                            />
                            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-lg flex flex-col items-center justify-center'>
                                <p className='text-white text-center font-semibold px-4 mb-2'>
                                    {item.title}
                                </p>
                                <p className='text-white text-center text-sm px-4'>
                                    {item.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
                    <div className='relative max-w-4xl w-full'>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className='absolute top-4 right-4 text-white hover:text-[#DBC078] transition duration-300 ease-in-out'
                            aria-label='Close image'
                        >
                            <box-icon name='x'></box-icon>
                        </button>
                        <Image
                            image={{
                                src: galleryItems[selectedImage].src,
                                alt: galleryItems[selectedImage].alt,
                                // width: {800},
                                // height: {600},
                                // layout: 'responsive',
                                className: 'rounded-lg',
                            }}
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg'>
                            <h3 className='text-xl font-semibold mb-2'>
                                {galleryItems[selectedImage].title}
                            </h3>
                            <p>{galleryItems[selectedImage].caption}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
