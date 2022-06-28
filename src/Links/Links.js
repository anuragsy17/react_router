import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { pageDetails } from '../Mock/Mock';


class Links extends Component {
    state = {}
    render() {
        return (
            <nav className='navBar'>
                <img src="../images/mphasisLogo.png" alt="not found" />
                <ul>
                {
                    pageDetails.map((data) => {
                        return (
                            <li>
                                <Link className='links' to={data.path}>{data.name}</Link>
                            </li>
                        )
                    })
                }
                </ul>


                {/* <ul>
                    <li>
                        <Link className='links' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='links' to='about'>About</Link>
                    </li>
                    <li>
                        <Link className='links' to='services'>Services</Link>
                    </li>
                </ul> */}
            </nav>
        );
    }
}

export default Links;