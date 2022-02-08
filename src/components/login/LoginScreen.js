import { useNavigate } from "react-router-dom";


export const LoginScreen = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/', {
            replace: true
        });
    }
    return <div>
        <h1>LoginScreen</h1>
        <hr />
        <button
            className="btn btn-primary"
            onClick={handleLogin}
        >
            Login
        </button>
    </div>;
};
