
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css'

export const Posts = () => {
    const {id} = useParams();
    const [qs] = useSearchParams();

    return( 
    <div>
        <h1>Post {`Params ${id}`} {`QS: ${qs.get('seach')}`}</h1>

        <Outlet/>
    </div>
    );
};