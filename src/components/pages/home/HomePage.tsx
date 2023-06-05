import { Layout, Space, Button, Modal, Input } from 'antd';
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

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = (values: Idea): void => {
        console.log(values);
        setIsModalOpen(false);

    };

    const handleCancel = () => {
        setIsModalOpen(false);
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
    return (
        <Space direction="vertical" style={{ width: '100%', height: '100vh' }} size={[0, 48]}>
            <Layout>
                <Header >
                    <div style={{ textAlign: 'end' }}>
                        <div style={{ position: 'absolute' }}>
                            <span style={{ color: 'white' }}>NOMBRE DEL ESPACIO CREATIVO</span>
                        </div>
                        <Button type='link' style={{ color: 'red', fontSize: '20px' }} onClick={showModal}> <PlusOutlined /></Button>
                        <Button type='link' style={{ color: 'red', fontSize: '20px' }}><UnorderedListOutlined /></Button>
                    </div>
                </Header>
                <Content>
                    <div style={{ height: '100vh' }}>
                        <Modal title="Write you idea" open={isModalOpen} onOk={() => formik.handleSubmit()} onCancel={handleCancel}>
                            <form onSubmit={formik.handleSubmit}>
                                <Input bordered={false}
                                    id="title"
                                    name="title"
                                    type='text'
                                    onChange={formik.handleChange} placeholder='title'
                                    value={formik.values.title}
                                    style={{ marginTop: '5px', marginBottom: '5px' }}
                                />

                                <TextArea rows={4} id="description"
                                    name="description"
                                    onChange={formik.handleChange}
                                    placeholder='description'
                                    value={formik.values.description}
                                    style={{ marginTop: '5px', marginBottom: '5px' }}
                                />
                            </form>
                        </Modal>
                        <ListCard />
                    </div>
                </Content>
            </Layout>
        </Space>
    )
}
