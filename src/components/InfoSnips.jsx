function InfoSnips({title, subText, icon}) {
  return (
        <div className="bg-white flex items-center gap-3 rounded-xl p-3 drop-shadow-xs hover:drop-shadow-none">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-neutral-600 bi bi-key" viewBox="0 0 16 16">
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg> */}
            <img src={icon} className="w-5 aspect-square" alt="info-snippets" />
            <div className="flex flex-col gap-2">
                <span className="text-[13px] font-semibold tracking-wide text-neutral-500">
                    {title}
                </span>
                <span className="text-[11px] text-neutral-500">
                    {subText}
                </span>
            </div>
         </div>
  )
}

export default InfoSnips