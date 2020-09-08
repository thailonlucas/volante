import * as React from 'react';
import { useState, useEffect } from 'react';
import { IServiceOrder } from '../../entities/serviceOrder';
import { Statistic, Row, Col, Button, Layout, Form, Input, InputNumber, Table, Tag, Divider, Card, Badge, Select } from 'antd';
import './styles.scss'
import {ServiceOrderTags, SERVICE_ORDER_TAGS} from '../../entities/tags'
import {IServiceOrderItem} from '../../entities/serviceOrder'
import IdentifyCard from '../../components/IdentifyCard';
import {PrinterOutlined} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;
const {Option} = Select

interface ServiceOrderProps {
    serviceOrder?: IServiceOrder
}

const dataSourcce = [
    {
      id: '524562',
      description: 'Para-choque traseiro',
      value: 32,
      qtd: 1,
      total: 32,
      tags: 'recuperação; pintura'
    },
    {
      id: '223434',
      description: 'Junta homocinética',
      value: 42.5,
      qtd: 1,
      total: 42.5,
      tags: 'troca'
    },
  ];

const ServiceOrderPage : React.SFC<ServiceOrderProps> = ({serviceOrder}) => {
    const [dataSource, setdataSource] = useState<IServiceOrderItem[]>([])
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [qtd, setQtd] = useState(1)
    const [tags, setTags] = useState([])
   

    const columns = [
    // {
    //     title: 'ID',
    //     dataIndex: 'id',
    //     key: 'id',
    // },
    {
        title: 'Descrição',
        dataIndex: 'description',
        key: 'description',
        render: (description:string) => (<a>{description}</a>)
    },
    {
        title: 'Valor',
        dataIndex: 'value',
        key: 'value',
        render: (value:number) => (`R$${value.toFixed(2)}`)
    },
    {
        title: 'Qtd.',
        dataIndex: 'qtd',
        key: 'qtd',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
        render: (value:number) => (value ? (`R$${value?.toFixed(2)}`) : 0)
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render: (tags:string) => tags?.split(',').map(
            (value) => (<Tag>{SERVICE_ORDER_TAGS[String(value)]}</Tag>)
        )
    },
    ];

    const onAddClickHandle = () => {
        let newItem:IServiceOrderItem = {description, qtd, tags:(tags ? tags.join(',') : ''), total: (value*qtd), value}
        let newDataSource:IServiceOrderItem[] = [newItem, ...dataSource]
        if(newItem)
            setdataSource(newDataSource)
    }

    const getTotalValue = (dataSource:any) => {
        try{
            return(dataSource.map((field:IServiceOrderItem)=> field.total)?.reduce((acc:number,field:number) => Number(acc)+ Number(field)))
        }catch{
            return 0
        }
    }

    
    return (
        <Layout style={{height: '100vh'}}>
            <Sider width={300}>
                <IdentifyCard title='Jonatas Faro da Silva Santos' subtitle='422.433.453-98'/>
                <IdentifyCard title='Chery Celler' subtitle='Ford' plate={'HIC-9527'}/>
            </Sider>
            <Layout className='os-container'>
                <Divider orientation='left'> Orçamento <strong>090808</strong></Divider>
                <Content>
                    <Form>
                        <Row style={{padding: 8, alignItems:'flex-end'}}>
                            <label style={{flex: 1}}>
                                Descrição
                                <Input placeholder="Descrição" onChange={(e) => setDescription(e.target.value)}/>
                            </label>
                            <label>
                                Valor
                                <InputNumber placeholder="Valor" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} style={{width: 160}} onChange={(value) => setValue(Number(value))}/>
                            </label>
                            <label>
                                Quantidade
                                <InputNumber placeholder="Valor" defaultValue={1} style={{width: 100}} onChange={(value) => setQtd(Number(value))}/>
                            </label>
                            <label>
                                Tags
                                <Select mode="tags" style={{ width: 220 }} placeholder="Tags" onChange={(value:[]) => setTags(value)} tokenSeparators={[',']}>
                                    {ServiceOrderTags.map((tag) => <Option key={tag.value} value={tag.value}>{tag.label}</Option>)}
                                </Select>
                            </label>
                            <Button type='primary' style={{marginBottom: 4, marginLeft: 4}} onClick={onAddClickHandle}>Adicionar</Button>
                        </Row>
                    </Form>
                    <Table dataSource={dataSource} columns={columns} style={{paddingLeft:12, paddingRight: 8}}/>
                </Content>
                <Row align='middle' justify='space-between'>
                    <Row>
                        <Statistic title="Peças" value={0} precision={2} prefix={'R$'}/>
                        <Statistic title="Mão de obra" value={0} precision={2} prefix={'R$'}/>
                        <Statistic title="Desconto" value={0} precision={2} prefix={'R$'}/>
                    </Row>
                    <Statistic title="Valor total" value={getTotalValue(dataSource)} precision={2} prefix={'R$'}/>
                </Row>
                <Footer style={{padding: 8}}>
                    <Row justify='end'>
                        <Button icon={<PrinterOutlined/>} style={{marginRight: 8}}>Imprimir</Button>
                        <Button style={{marginRight: 8}}>Cancelar</Button>
                        <Button type='primary'>Salvar</Button>
                    </Row>
                </Footer>
            </Layout>
        </Layout>
    )
}

export default ServiceOrderPage