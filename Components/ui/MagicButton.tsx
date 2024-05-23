import React from 'react'

type Data = {
    title: string,
    icon: React.ReactNode,
    position: string,
    handleClick?: () => void,
    otherClasees?: string
}

function MagicButton({ title, icon, position, handleClick, otherClasees }: { title: string, icon: React.ReactNode, position: string, handleClick?: () => void, otherClasees?: string }) {
    return (
        <div>
            {icon}
            <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus-outline-none md:w-40 md:mt-5">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasees}`}>
                    {position === "left" && icon}  {title} {position === "right" && icon}
                </span>

            </button></div>
    )
}

export default MagicButton