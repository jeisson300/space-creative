import { Card, Input, Button } from 'antd'
import { useFormik } from "formik";
import { Idea } from '../HomePage';
import { motion } from "framer-motion";
import {
    FormOutlined,
    DeleteOutlined
} from '@ant-design/icons';

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
        return (
            <div>
                <motion.div drag >
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
        <div>
            {listData.map(({ title, description, id }) => (
                <CardForm key={id} title={title} description={description} />
            ))}
        </div>
    )
}

