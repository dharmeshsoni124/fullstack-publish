import  "./publish.css";
const Publish=()=>{

    return (
       <div className="body">
        
        <button>10x academy</button>

        <nav   className="nav">
            <ul className="ul">
                <li>Publish content</li>
                <li>comments</li>
             <li>History</li>

            </ul>
           
            <button>Logout</button>
            </nav >
            <form className="form">
                <input type="text"/>
                <button>Edit</button>
                <button>Save</button>
                <button>Publish</button>
            </form>
       
       </div>
    )
}

export default Publish;