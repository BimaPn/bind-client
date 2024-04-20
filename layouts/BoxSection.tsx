import { BoxSectionProps } from "@/types/types"

const BoxSection = ({children,className,parentClass,sectionColor}:BoxSectionProps) => {
    return(
    <section className={`${parentClass} w-full flexCenter px-3 sm:px-5 `} style={{ backgroundColor: sectionColor }}>
        <div className={`boxWidth ${className}`}>
          {children}
        </div>
    </section>
    )
}

export default BoxSection