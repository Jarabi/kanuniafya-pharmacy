import { useRef } from 'react';
import html2canvas from 'html2canvas';
import 'boxicons';
import logoImage from '../assets/logo.png';

function ContactInfo() {
    const businessCardRef = useRef(null);

    const downloadBusinessCard = async () => {
        if (businessCardRef.current) {
            const canvas = await html2canvas(businessCardRef.current);
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'KanuniAfya_BusinessCard.png';
            link.click();
        }
    };

    return (
        <div>
            <h2 className='text-2xl font-semibold mb-8 text-[#146D16]'>
                Contact Information
            </h2>
            <div className='flex mb-4'>
                <div
                    ref={businessCardRef}
                    className='bg-white rounded-lg shadow-lg p-6 w-full'
                >
                    <div className='flex'>
                        <div className='flex flex-col items-center w-1/2 pr-4 border-r border-gray-300'>
                            <img
                                src={logoImage}
                                alt='KanuniAfya Logo'
                                className='w-20 h-20 mb-4'
                            />
                            <h3 className='text-xl font-bold text-[#146D16]'>
                                KanuniAfya Pharmacy
                            </h3>
                            <p className='text-md text-gray-600'>
                                Health Guaranteed
                            </p>
                        </div>
                        <div className='w-1/2 pl-4 flex flex-col gap-1'>
                            <h4 className='text-lg font-semibold'>
                                Winnie Njeri
                            </h4>
                            <p className='text-sm text-gray-600 mb-3'>
                                Pharmacist
                            </p>
                            {[
                                {
                                    icon: 'phone',
                                    detail: '+254 712 559 704',
                                },
                                {
                                    icon: 'envelope',
                                    detail: 'kanuniafya@gmail.com',
                                },
                                {
                                    icon: 'globe',
                                    detail: 'kanuniafya.com',
                                },
                                {
                                    icon: 'map',
                                    detail: 'El-Elyon Buiding, Kawangware, Nairobi',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className='flex items-center mb-1 gap-2'
                                >
                                    <box-icon
                                        name={item.icon}
                                        size='sm'
                                        color='#146D16'
                                    ></box-icon>
                                    <p className='text-sm'>{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={downloadBusinessCard}
                    className='bg-[#146D16] text-white px-4 py-2 rounded hover:bg-opacity-90 flex items-center'
                >
                    <box-icon
                        name='download'
                        size='sm'
                        color='white'
                    ></box-icon>
                    <span className='ml-2'>Download Business Card</span>
                </button>
            </div>
        </div>
    );
}

export default ContactInfo;
