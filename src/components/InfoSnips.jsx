function InfoSnips({title, subText, icon}) {
  return (
        <div className="bg-white flex items-center gap-3 rounded-xl p-3 drop-shadow-xs hover:drop-shadow-none">
            <div className="p-1 rounded-lg bg-[var(--primary-accent-color)] flex items-center justify-center">
                <img src={icon} className="w-4 aspect-square" alt="info-snippets" />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-[13px] font-semibold tracking-wider md:tracking-wide text-neutral-500">
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