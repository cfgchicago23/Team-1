import {useState} from 'react';
function FormList(props) { // multiple inputs shown after each other
    const [tags, setTags] = useState(props.lists); //could replicate links for resources
    const [currTag, setCurrTag] = useState('');
    const updateTags = (event) => {
        const newestTag = currTag;
        // const newTagList = tags.concat(newestTag);
        // setTags(newTagList);
        // props.updateTags(newTagList);
        // event.preventDefault();
        const newTags = props.lists.concat(newestTag);
        setTags(newTags);
        props.updateTags(newTags);
        event.preventDefault();

    }
    return (
        <form >
            <p>Skills</p>
            <input name="links" onChange={(e)=>setCurrTag(e.target.value)}/>
            <button type="submit" onClick={updateTags}>Add</button>
            <br/>
            <ul>
                {tags.map((element)=> <li>{element}</li>)}
            </ul> 
        </form>
        
    );
}
export default FormList