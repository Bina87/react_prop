
import React from 'react'
import propTypes from 'prop-types'

const Profile = ({data_prop,children,funct}) => {
    return (
        <div>
             <h1>{data_prop.fullName}</h1>
            <h4>{data_prop.profession}</h4>
            <p>{data_prop.bio}</p>
               {children}
            <p><button onClick= {() => funct(data_prop.fullName)} >VOIR PLUS</button> </p>
            
        </div>
    )
}

Profile.defaultProps={
    data_prop: { fullName: 'Jack Ma' ,profession:'Président-directeur général Alibaba Group',
               bio:'Jack Ma, à travers sa fondation, a fait connaître sa volonté de financer lentrepreneuriat en Afrique en général, et les entrepreneurs du secteur du numérique en particulier. Les dés sont jetés.'
            }   

}
Profile.prototype={
    fullName: propTypes.string,
    profession: propTypes.string,
    bio: propTypes.string,
    funct:propTypes.funct,
    children:propTypes.node.isRequired
}
export default Profile


