import { useState } from 'react';
import left from './assets/icons/arrow-left.svg'
import right from './assets/icons/arrow-right.svg'

function Carousel({children}){
    let [cur, setCur] = useState(0);
    let next = () => (cur == children.length - 1 ? setCur(0) : setCur(++cur));
    let prev = () => (cur == 0 ? setCur(children.length - 1) : setCur(--cur));
    return (
      <article className="relative overflow-hidden">
        <div
          className="flex  transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${cur * 100}%)` }}
        >
          {children}
        </div>
        <div className="absolute right-0 top-1/2" onClick={next}>
          <img src={right} alt="" className="h-4 md:h-6" />
        </div>
        <div className="absolute left-0 top-1/2" onClick={prev}>
          <img src={left} alt="" className="h-4 md:h-6" />
        </div>
        <div className="absolute flex justify-center w-full space-x-1 bottom-2 ">
          {children.map((_, i) => {
            return (
              <div
                className={`rounded-[50%] w-1  bg-abs-black  ${
                  cur == i
                    ? "p-1 bg-neutral-40"
                    : "p-1 opacity-10 bg-abs-white"
                }`}
              />
            );
          })}
        </div>
      </article>
    );
};

export default Carousel;