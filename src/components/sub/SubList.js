import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {getSubs} from '../../functions/sub'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
const SubList= () => {
    const [subs , setSubs] = useState([]);
    const [loading , setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        getSubs().then((res) => {
            setSubs(res.data);
            setLoading(false);
        })
    }, []);

    const showSubs = () => subs.map((s) => (<><Bounce bottom><div  key = {s._id} className = ' col  btn btn-outlined-primary btn-lg btn-block btn-raised m-3'>
        <Link to = {`/sub/${s.slug}`}> {s.name} </Link>
    </div></Bounce></>))

    return(
        <div className ='container'>
            {/* <Fade top cascade>
  <ul className="some-class">
    <li>First Item</li>
    <li>Another Item</li>
    <li>Last Item</li>
  </ul>
</Fade> */}
            <div className = 'row'>
                {loading ? (<h4 className = 'text-center'>Loading...</h4>) : showSubs()}
            </div>
        </div>
    )
 };

 export default SubList;