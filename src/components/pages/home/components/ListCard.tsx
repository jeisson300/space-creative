import { Card, Input, Button, Row, Col } from 'antd'
import { useFormik } from "formik";
import { Idea } from '../HomePage';
import { motion } from "framer-motion";
import {
    FormOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { useRef } from 'react';
export const ListCard = () => {

    const listData = [
        {
            "id": 1,
            "title": "example1",
            "description": "idea billion"
        },
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        },
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        },
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        },
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        },
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        },
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        },
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        },
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
        ,
        {
            "id": 2,
            "title": "example2",
            "description": "idea billion2"
        }
    ]

    const { TextArea } = Input;

    const CardForm = ({ title, description }: Idea): JSX.Element => {
        const formik = useFormik({
            initialValues: {
                title: title,
                description: description
            },
            onSubmit: (values: Idea, { resetForm }) => {
                handleUpdate(values);
                resetForm();
            }
        });

        const handleUpdate = (values: Idea) => {
            console.log(values)
        }

        const limitMove = useRef(null);
        return (
            <div >
                <motion.div className='limitMove' ref={limitMove} />
                <motion.div drag dragConstraints={limitMove}>
                    <form onSubmit={formik.handleSubmit}>
                        <Card title={<Input type='text' bordered={false} name="title" id="title" onChange={formik.handleChange} value={formik.values.title} placeholder="title" />}
                            bordered={false}
                            style={{ width: 300 }}>
                            <TextArea id="description" name="description" value={formik.values.description} onChange={formik.handleChange} placeholder="description" />
                            <Button htmlType='submit' type='link' ><FormOutlined /></Button>
                            <Button type='link' ><DeleteOutlined style={{ color: 'red' }} /></Button>
                        </Card>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div >
            <Row gutter={[16, 24]} style={{ marginTop: '50px', marginLeft: '10px' }}>
                {
                    listData.map(({ title, description, id }) => (
                        <Col className="gutter-row" span={6} key={id}>
                            <CardForm key={id} title={title} description={description} />
                        </Col>
                    ))}
            </Row>
        </div >
    )
}

