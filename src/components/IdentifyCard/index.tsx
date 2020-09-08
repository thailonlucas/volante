import React from 'react';
import {Badge, Avatar, Tag} from 'antd';
import { UserOutlined, CarOutlined } from '@ant-design/icons';
import './style.scss'

interface Props{
    title: string
    subtitle: string
    plate?: string
}

const IdentifyCard = (props:Props) => {
    const {title, subtitle, plate} = props
    return (
        <div className='identify-card-container'>
            <Avatar size={34} shape='square' icon={<CarOutlined />} style={{marginRight: 8, marginTop: 3}}/>
            <div>
                <h1 className='title'>{title}</h1>
                <h2 className='subtitle'>{subtitle}</h2>
                {plate && <Tag style={{marginLeft: -40}}><strong>HIC</strong> 1C57</Tag>}
            </div>
        </div>
    );
}

export default IdentifyCard;
