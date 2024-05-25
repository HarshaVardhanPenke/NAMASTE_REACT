const Contact=()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl">Contact us page</h1>
            <form>
               <input placeholder="name" className="border border-black p-2 m-2"></input>
               <input placeholder="feedback" className="border border-black p-2 m-2"></input>
               <button className="rounded-md border border-black p-2 m-2">Submit</button>
            </form>
        </div>
    )
}
export default Contact;  