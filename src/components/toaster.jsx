import { Toast, ToastContainer } from "react-bootstrap";

function Toaster({ body, variant, position, showToaster, setShow }) {
 
    return (
        <>
            <ToastContainer
                className="p-3"
                position={position}
                style={{ zIndex: 1 }}
            >
                <Toast onClose={() => setShow(false)} show={showToaster} delay={6000} autohide
                    className="d-inline-block m-1"
                    bg={variant.toLowerCase()}

                >
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                    </Toast.Header>
                    <Toast.Body className={variant === 'Dark' && 'text-white'}>
                        {body}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default Toaster;