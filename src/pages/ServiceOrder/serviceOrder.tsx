import * as React from 'react';
import { useState, useEffect } from 'react';
import { IServiceOrder } from '../../entities/serviceOrder';
import { Statistic, Row, Col, Button, Layout, Form, Input, InputNumber, Table, Tag, Divider } from 'antd';
import './styles.scss'
const { Header, Footer, Sider, Content } = Layout;

interface ServiceOrderProps {
    serviceOrder?: IServiceOrder
}

const ServiceOrderPage : React.SFC<ServiceOrderProps> = ({serviceOrder}) => {

    useEffect(()=>{
        console.log(serviceOrder?.id);
    }, [])

    const dataSource = [
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
      
      const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
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
            render: (value:number) => (`R$${value.toFixed(2)}`)
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
            render: (tags:string) => tags.split(';').map(value => (<Tag>{value}</Tag>))
        },
      ];
    
    return (
        <Layout style={{height: '100vh'}}>
            <Sider>
                <h1>em construção</h1>
            </Sider>
            <Layout className='os-container'>
                <Divider orientation='left'> Orçamento <strong>090808</strong></Divider>
                <Row align='middle' justify='space-between'>
                    <Row>
                        <Statistic title="Peças" value={3959.48} precision={2} prefix={'R$'}/>
                        <Statistic title="Mão de obra" value={3959.48} precision={2} prefix={'R$'}/>
                        <Statistic title="Desconto" value={3959.48} precision={2} prefix={'R$'}/>
                    </Row>
                    <Statistic title="Valor total" value={7890.45} precision={2} prefix={'R$'}/>
                </Row>
                <Content>
                    <Form>
                        <Row style={{padding: 8, alignItems:'flex-end'}}>
                            <label style={{flex: 1}}>
                                Descrição
                                <Input placeholder="Descrição"/>
                            </label>
                            <label>
                                Valor
                                <InputNumber placeholder="Valor" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} style={{width: 160}}/>
                            </label>
                            <label>
                                Quantidade
                                <InputNumber placeholder="Valor" defaultValue={1} style={{width: 160}}/>
                            </label>
                            <label>
                                Tags
                                <Input placeholder="Tags"/>
                            </label>
                            <Button type='primary' style={{marginBottom: 4, marginLeft: 4}}>Adicionar</Button>
                        </Row>
                    </Form>
                    <Table dataSource={dataSource} columns={columns} style={{paddingLeft:12, paddingRight: 8}}/>
                </Content>
                <Footer style={{padding: 8}}>
                    <Row justify='end'>
                        <Button style={{marginRight: 8}}>Cancelar</Button>
                        <Button type='primary'>Finalizar</Button>
                    </Row>
                </Footer>
            </Layout>
        </Layout>
    )
}

export default ServiceOrderPage