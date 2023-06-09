import { Layout, Space, Button, Modal, Input, Drawer, List } from 'antd';
import { useState } from 'react';
import { useFormik } from "formik";
import {
    PlusOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import { ListCard } from './components/ListCard';


export interface Idea {
    title: string,
    description: string
}

export const HomePage = () => {
    const { Header, Content } = Layout;
    const { TextArea } = Input;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPropertVisible, setisPropertVisible] = useState({ visible: false, name: "" });
    const [open, setOpen] = useState(false);

    const showModal = (property: number) => {
        setisPropertVisible({
            visible: property == 1 ? true : false,
            name: property == 1 ? "Write your idea" : "Write your name of space creative"
        })
        setIsModalOpen(true);
    };

    const handleOk = (values: Idea): void => {
        console.log(values);
        setIsModalOpen(false);

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const formik = useFormik({
        initialValues: {
            title: '',
            description: ''
        },
        onSubmit: (values: Idea, { resetForm }) => {
            handleOk(values);
            resetForm();
        }
    });


    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];


    return (
        <Space direction="vertical" style={{ width: '100%', height: '100vh' }} size={[0, 48]}>
            <Layout>
                <Header >
                    <div style={{ textAlign: 'end' }}>
                        <div style={{ position: 'absolute' }}>
                            <span style={{ color: 'white' }}>NOMBRE DEL ESPACIO CREATIVO</span>
                        </div>
                        <Button type='link' style={{ color: 'red', fontSize: '20px' }} onClick={() => showModal(1)}> <PlusOutlined /></Button>
                        <Button type='link' style={{ color: 'red', fontSize: '20px' }} onClick={showDrawer}> <UnorderedListOutlined /></Button>
                    </div>
                </Header>
                <Content>
                    <div style={{ height: '90vh', overflowX: 'hidden' }}>
                        <Modal title={isPropertVisible.name} open={isModalOpen} onOk={() => formik.handleSubmit()} onCancel={handleCancel}>
                            <form onSubmit={formik.handleSubmit}>
                                <Input bordered={false}
                                    id="title"
                                    name="title"
                                    type='text'
                                    onChange={formik.handleChange} placeholder='title'
                                    value={formik.values.title}
                                    style={{ marginTop: '5px', marginBottom: '5px' }}
                                />

                                {isPropertVisible.visible && <TextArea rows={4} id="description"
                                    name="description"
                                    onChange={formik.handleChange}
                                    placeholder='description'
                                    value={formik.values.description}
                                    style={{ marginTop: '5px', marginBottom: '5px' }}
                                />}
                            </form>
                        </Modal>

                        <Drawer
                            title="Your spaces Creative"
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            open={open}
                            getContainer={false}
                        >
                            <List
                                size="small"
                                bordered
                                dataSource={data}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                            <Button type='link' style={{ color: 'red', fontSize: '20px' }} onClick={() => showModal(2)}> <PlusOutlined /></Button>
                        </Drawer>
                        <ListCard />
                    </div>
                </Content>
            </Layout>
        </Space>
    )
}
