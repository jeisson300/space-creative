import { useFormik } from "formik";
import { Button, Input } from 'antd';

interface LoginForm {
    email: string,
    password: string
}

export const LoginForm: React.FC = () => {

    const onHandleFrom = (values: LoginForm): void => {
        console.log(values)
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values: LoginForm, { resetForm }) => {
            onHandleFrom(values);
            resetForm();
        }
    });

    return (
        <div className="login-formData">
            <h1>Welcome to freedom creative</h1>
            <form onSubmit={formik.handleSubmit}>
                <Input id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required={true}
                    placeholder="Email"
                    style={{
                        marginBottom: 15
                    }}
                    autoComplete="off"
                />
                <Input.Password
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    required={true}
                    placeholder="Password"
                    style={{
                        marginBottom: 15
                    }}
                />
                <Button htmlType="submit" style={{
                    marginBottom: 15,
                    marginTop: 30
                }}>Continue</Button>
            </form>
        </div>
    )
}
