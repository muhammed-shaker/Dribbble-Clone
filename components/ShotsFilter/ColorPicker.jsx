import Image from 'next/image'
import { useState } from 'react'
import { useFilterContext } from '@/contexts/ShotsFilterContext'
import colors from '@/data/colors'

export default function ColorPicker() {

    const { color, setColor } = useFilterContext()
    
    const [activeColorPlate, setActiveColorPlate] = useState(false)
    const [inputValue, setInputValue] = useState(color)

    function handleColor(value) {
        

        if (isValidHexColor(value)) {

            const hex = value.length === 3 ? value.split('').map(char => char.repeat(2)).join('') : value
            setInputValue(hex)
            setColor(hex)

        } else {

            setInputValue('')
            setColor('')
        }

        setActiveColorPlate(false)
    }



    function isValidHexColor(hex) {
        const cleanHex = hex.replace(/^#/, '')
        return /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(cleanHex)
    }


    return (
        <div className="relative">
            <div className="text-sm font-semibold">
                Color
            </div>
            <div className="flex items-center gap-1 border-[1.5px]  border-gray-300 rounded-lg px-4 filter-input mt-4">
                {
                    true ?
                        (
                            <div style={{ backgroundColor: `#${inputValue}` }} className="size-5 min-w-5 rounded-full flex justify-center items-center">
                                <div className="size-2 rounded-full bg-white"></div>
                            </div>
                        )
                        :
                        (
                            <Image src="/images/color-plate-icon.svg" width={20} height={21} alt="color plate" />
                        )
                }

                #

                <input
                    type="text"
                    className="outline-none flex-1 py-3"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    onFocus={() => setActiveColorPlate(true)}
                    onBlur={() => handleColor(inputValue)}
                    

                />

                {
                    activeColorPlate &&
                    <div className="border-[1.5px] border-gray-300 rounded-lg p-4 grid grid-cols-15 absolute -bottom-4 translate-y-full w-[380px] left-0 min-w-full">
                        {
                            colors.map(color => {
                                return <button
                                    key={color}
                                    style={{ backgroundColor: `#${color}` }}
                                    className="h-4 cursor-pointer relative group"
                                    onMouseDown={() => handleColor(color)}

                                >
                                    <span style={{ backgroundColor: `#${color}` }} className="hidden group-hover:block h-[150%] w-[120%] absolute top-1/2 left-1/2 -translate-1/2 z-90"></span>
                                </button>
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}
