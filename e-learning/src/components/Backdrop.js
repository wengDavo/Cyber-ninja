function BackDrop({children, onClick}){
    return <div className="fixed top-0 left-0 h-screen w-screen z-10" onClick={onClick} style={{background:"#000000e1"}}>
        {children}
    </div>
};
export default BackDrop;