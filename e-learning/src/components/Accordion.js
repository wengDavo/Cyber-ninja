import wrong from "./assets/icons/wrong.svg";
function Accordion({ summary, detail}) {
  return (
    <div className="faq bg-abs-white md:p-5 rounded-regular my-1">
      <details className="faq--detail group text-sm text-grey-30 p-5 border border-white-95">
        <summary className="faq--summary text-grey-15 font-medium text-lg cursor-pointer list-none relative">
          <figure className="absolute -right-0 -top-1 bg-orange-95 p-4">
            <img
              src={wrong}
              alt=""
              className="group-open:rotate-0 rotate-45 transition-all duration-300"
            />
          </figure>
          <p className="w-[80%]">{summary}</p>
        </summary>
        <p className="pl-1  mt-4 w-[60%] border-t border-t-white-90 ">
         {detail}
        </p>
      </details>
    </div>
  );
}
export default Accordion;
