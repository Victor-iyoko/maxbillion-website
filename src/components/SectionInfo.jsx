import SubHeadingText from "./SubHeadingText"
import Button from "./Button"
import InfoSnips from "./InfoSnips"
import HeadingText from "./HeadingText"

function SectionInfoOne({section}) {
  return (
       <section className="flex gap-[62px] justify-between items-start max-w-6xl mx-auto mt-36">
        <div className={`flex flex-1/2 flex-col items-start ${section.imgPos === 2 ? 'order-1' : 'order-2'}`}>
          { section.title && <HeadingText text={section.title} align="start" />}
          <SubHeadingText text={section.heading} align="start" />
              <p className='mb-7 text-neutral-400 leading-7 tracking-wide text-start text-[16px] max-w-lg'>
                {section.description}
             </p>
             <Button dark={true} text="Get in touch"/>
             <div className="flex flex-wrap gap-3 mt-7">
               {section.infoSnips.map((info, i) => <InfoSnips key={i} title={info.title} subText={info.subText} icon={info.icon} /> )}
             </div>
        </div>
        <div className={`flex-1/2 relative border-3 border-neutral-100 rounded-2xl ${section.imgPos === 1 ? 'order-1' : 'order-2'}
                        before:w-full before:h-full before:border-3 before:border-white before:rounded-2xl before:absolute before:opacity-15 before:bg-[var(--primary-color)] before:-start-14 before:-bottom-12 before:-z-10 before:scale-90
                        after:w-full after:h-full after:border-4 after:border-white after:rounded-2xl after:absolute after:opacity-30 after:bg-[var(--secondary-color)] after:-start-11 after:-bottom-9 after:-z-10 after:scale-90`}>
         <img src={section.img} alt="house and a key" className="w-full rounded-2xl object-cover h-auto z-20 drop-shadow-2xl" />
        </div>
       </section>
  )
}

export default SectionInfoOne