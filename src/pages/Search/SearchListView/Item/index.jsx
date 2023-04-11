import React from 'react';
import './style.less'

const Item = (props) => {
    const data = props.data
    // console.log(data)
    return (
        <div className="list=item">
            <img src={data.img} alt="" />
            <div className="mask">
                <div className="left">
                    <p>{data.title}</p>
                    <p>{data.type}</p>
                    <p dangerouslySetInnerHTML={{__html:data.description}}></p>
                    <h3 style={{ backgroundColor: data.specialPrice ? 'yellow' : 'none' }}>{`$ ${data.price}`}</h3>
                    <p>{data.status}</p>
                    <p>{`${data.star} (${data.commentNum})`}</p>
                </div>
                {/* <div className="right">
                    <div className="btn">
                        {data.star}
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Item;
