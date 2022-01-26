import {useRouter} from "next/router";
import Link from 'next/link';

const CoffeeStore=()=>{
    const {query}=useRouter();

    console.log(query)
    return (
        <>
        <div>Coffee Store Page {query.id}</div>
            <Link href={'/'}><a>Back to Home</a></Link>
        </>)
}
export default CoffeeStore;