import InfoSnips from "../components/InfoSnips"
import SubHeadingText from "../components/SubHeadingText"
import data from "../data"

function DarkSectionInfoOne() {
  const {vision} = data

  return (
    <section className="bg-[var(--primary-color)] mt-36 p-2 rounded-4xl">
  
        <div className="relative z-10 text-white rounded-3xl h-full border-2 border-neutral-300 p-10 pb-12">
            {/* <h2 className="text-3xl font-bold">Your Vision, Our Commitment.</h2> */}
            <SubHeadingText text={vision.heading} light align="center"/>
            <p className='mb-5 mx-auto text-neutral-300 leading-7 tracking-wide text-center text-[16px] max-w-4xl'>
              {vision.text}
            </p>
            <div className="mb-7 flex gap-6 justify-center items-center">
                 {/* <div className="bg-white flex items-center gap-3 rounded-xl p-3 drop-shadow-xs absolute top-4 z-40 start-12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="text-neutral-600 bi bi-key" viewBox="0 0 16 16">
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                    <div className="flex flex-col gap-2">
                        <span className="text-[13px] font-semibold tracking-wide text-neutral-500">
                            Affordable Luxury 
                        </span>
                        <span className="text-[11px] text-neutral-500">
                            Premium homes at competitive prices.
                        </span>
                    </div>
                </div>
                <div className="bg-white flex items-center gap-3 rounded-xl p-3 drop-shadow-xs absolute -bottom-2 z-40 start-96">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="text-neutral-600 bi bi-key" viewBox="0 0 16 16">
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                    <div className="flex flex-col gap-2">
                        <span className="text-[13px] font-semibold tracking-wide text-neutral-500">
                            Affordable Luxury 
                        </span>
                        <span className="text-[11px] text-neutral-500">
                            Premium homes at competitive prices.
                        </span>
                    </div>
                </div>

                 <div className="bg-white flex items-center gap-3 rounded-xl p-3 drop-shadow-xs absolute top-0 translate-y-40 z-40 end-12">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="text-neutral-600 bi bi-key" viewBox="0 0 16 16">
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                    <div className="flex flex-col gap-2">
                        <span className="text-[13px] font-semibold tracking-wide text-neutral-500">
                            Affordable Luxury 
                        </span>
                        <span className="text-[11px] text-neutral-500">
                            Premium homes at competitive prices.
                        </span>
                    </div>
                </div> */}
               {vision.infoSnips.map((info, i) => <InfoSnips key={i} title={info.title} subText={info.subText} icon={info.icon} /> )}
            </div>
            <video className="w-full max-w-2xl rounded-2xl drop-shadow-xl place-self-center" autoPlay muted loop playsInline>
                <source src="/videos/vision.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </section>
  )
}

export default DarkSectionInfoOne