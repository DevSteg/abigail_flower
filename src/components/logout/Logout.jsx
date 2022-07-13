import { logout, reset } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./_logout.scss";

const Logout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onClick = () => {
		dispatch(logout());
	};

	const { isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isSuccess) {
			toast.success(message);
			navigate("/");
		}

		dispatch(reset());
	}, [isSuccess]);
	return (
		<>
			<h6 className="logout" onClick={onClick}>
				Logout
			</h6>
		</>
	);
};

export default Logout;
