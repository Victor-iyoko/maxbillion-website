import HeadingText from "../components/HeadingText"
import SubHeadingText from "../components/SubHeadingText"
import { useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const FutureDevelopments = () => {
  const images = ["1", "2","3", "4","5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    // Initialize Masonry
    const masonry = new Masonry(gridRef.current, {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
    //   percentPosition: true,
      gutter: 16, // Adjust gutter space
    });

    // Ensure Masonry layout updates after images load
    imagesLoaded(gridRef.current, () => {
      masonry.layout();
    });

    return () => masonry.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className="mx-auto mt-36 flex flex-col items-center">
        <HeadingText text="future developments" align="center" />
        <SubHeadingText text="Envisioning tomorrow's homes." align="center" />
         <p className='mb-16 text-neutral-400 leading-7 tracking-wide text-center text-[16px] max-w-5xl mx-auto'>
            At Maxbillion we're passionate about crafting unique, modern housing solutions. 
            Though we're still in our early stages, we're already dreaming up the communities of the future.
        </p>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, index) => (
              <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-lg">
                 <img src={`/developments/${src}.jpg`} alt={`House ${index}`} className="w-full drop-shadow-md" />
              </div>
        ))}
      </div>
    </div>
  );
};

export default FutureDevelopments