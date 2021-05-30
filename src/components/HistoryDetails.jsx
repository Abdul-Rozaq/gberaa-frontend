import React from 'react'; 
import { Button } from '@material-ui/core';
import { ArrowRightOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import routes from '../utils/routes';
import { selectCurrentUser } from '../features/authSlice';
import { useSelector } from 'react-redux';
import axios from '../utils/axios';

const HistoryDetails = ({ data }) => {
    const {authorities} = useSelector(selectCurrentUser);

    const handleUpdate = (id) => {
        if (authorities[0]?.authority === "ROLE_RIDER") {
            console.log(id);
            Swal.fire({
                title: "Do you want to update this delivery?",
                showDenyButton: true,
                confirmButtonText: "Update",
                denyButtonText: "cancel",
            }).then(async result => {
                if (result.isConfirmed) {
                    const { status } = await axios.put(`api/v1/deliveries/${id}/status`);
                    status === 200 && Swal.fire("Updated", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Updates are not made", "", "info")
                }
            })
        }
    }

    return (
        <div className="history__details">
            <small>{new Date(data.createdDate).toDateString()}</small>
            
            {data.price ? (
                <p>&#8358;{data.price}</p>
            ) : (
                <small>under review</small>
            )}
            
            <div>
                <Button
                    variant="contained" 
                    className={`history__status ${data.status}`}
                    onClick={() => handleUpdate(data.id)}
                >
                    {data.status}
                </Button>

                <Link to={`${routes.DELIVERY}/${data.id}`} className="link">
                    <ArrowRightOutlined className="history__icon" />
                </Link>
            </div>
        </div>
    )
}

export default HistoryDetails
