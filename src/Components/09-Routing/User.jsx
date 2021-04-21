import {useParams} from 'react-router-dom';
// npm install --save dev react-router-dom

const User = () => {
    
    const {id} = useParams(); 

    return( <p>The value from the URL is: {id}</p> )

}

export default User; 