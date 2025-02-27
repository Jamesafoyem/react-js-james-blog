import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario James');
    const [isLoading, setIsLoading] = useState(false);

    const history  = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };
        setIsLoading(true)
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog added");
            setIsLoading(false);
            history('/') //return to the home page
        })


    };

    return ( 
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label >Blog title: </label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Blog body: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label >Blog author: </label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario James">Mario James</option>
                    <option value="Luigi Brenda">Luigi Brenda</option>
                </select>
                { !isLoading && <button>Add Blog</button> }  
                { isLoading && <button>Adding Blog</button>}                            
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
     );
}
 
export default Create;