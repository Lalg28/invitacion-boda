
import { useFormik } from 'formik';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import emailjs from '@emailjs/browser'
import { useSnackbar } from 'notistack';


const Contact1 = ({ guest }) => {
    const [isOpen, setOpen] = useState(false)
    const { enqueueSnackbar: notification } = useSnackbar()
    const formik = useFormik({
        initialValues: {
            confirmation: '',
            name: '',
            email: '',
            numberOfGuests: null,
            notes: '',
        },
        onSubmit: values => {
            if (values.confirmation === '') {
                return notification(
                    'Por favor selecciona si asistirás o no', 
                    { 
                        variant: 'error',
                        autoHideDuration: 3000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        style: {
                            fontSize: '1.3rem',
                        }
                    }
                )
            }

            if (values.numberOfGuests === null && ((values.confirmation === '' && values.numberOfGuests === 0) || values.numberOfGuests > guest?.guests)) {
                return notification(
                    `Por favor selecciona un número de asistentes correcto, máximo ${guest?.guests}`, 
                    { 
                        variant: 'error',
                        autoHideDuration: 3000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        style: {
                            fontSize: '1.3rem',
                        }
                    }
                )
            }

            emailjs.send(
                'service_1gydmbi', 
                'template_vcrh6df', 
                {
                    message: `
                        ID de invitado: ${guest?.id}
                        Nombre: ${values.name}
                        Correo: ${values.email}
                        Confirmación: ${values.confirmation}
                        Número de asistentes: ${values.numberOfGuests}
                        Notas: ${values.notes}
                    `
                }, 
                { publicKey: '6bxuV4TETfiGmH4ne'}
            ).then(() => {
                formik.resetForm()
                notification(
                    'Gracias por tu respuesta', 
                    { 
                        variant: 'success',
                        autoHideDuration: 3000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        style: {
                            fontSize: '1.3rem',
                        }
                    }
                )
                window.scrollTo(0, document.body.scrollHeight)
            }).catch(() => {
                notification(
                    'Ocurrió un error, por favor intenta de nuevo', 
                    { 
                        variant: 'error',
                        autoHideDuration: 3000,
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'center',
                        },
                        style: {
                            fontSize: '1.3rem',
                        }
                    }
                )
            
            })
        },
        enableReinitialize: true
    })


    return (
        <>
            <section className="contact-section pt-0" id="formulario">
                <div className="auto-container">
                    <div className="row">
                        <div className="form-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="300ms">
                            <div className="inner-column">
                                <div className="icon-leave bounce-x"></div>
                                <div className="contact-form-one wow fadeInRight">
                                    <h6 className="title">¿Asistirás a la boda? {`(Invitados: ${guest?.guests})`} </h6>

                                    <form onSubmit={formik.handleSubmit} method="post" action="get" id="contact-form">
                                        <div className="row">
                                            <div role="group" className='row'>
                                                <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                                    <div className="radio-box">
                                                        <label className="custom-radio-box-two">Estaré ahí con gusto
                                                            <input 
                                                                type="radio" 
                                                                name="confirmation" 
                                                                value="Asistiré" 
                                                                onChange={formik.handleChange} 
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-6 col-md-6 col-sm-6 mb-20">
                                                    <div className="radio-box">
                                                        <label className="custom-radio-box-two">No podré asistir
                                                            <input 
                                                                type="radio" 
                                                                name="confirmation" 
                                                                value="No asistiré" 
                                                                onChange={formik.handleChange} 
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <input 
                                                        type="text" 
                                                        name="name" 
                                                        placeholder="Nombre completo"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.name}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                
                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <input 
                                                        type="email" 
                                                        name="email" 
                                                        placeholder="Correo electrónico"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email} 
                                                        required
                                                    />
                                                </div>
                                            </div>
                                
                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <input 
                                                        type="number" 
                                                        name="numberOfGuests" 
                                                        placeholder="Número de asistentes"
                                                        min={0}
                                                        max={guest?.guests || 1}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.numberOfGuests}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group col-lg-12">
                                                <div className="input-outer">
                                                    <textarea 
                                                        name="notes" 
                                                        placeholder="Notas (Opcional)"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.notes}
                                                    ></textarea>
                                                </div>
                                            </div>
                            
                                            <div className="form-group col-lg-12">
                                                <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Enviar</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="video-column col-lg-6 col-md-12 wow fadeInLeft">
                            <div className="inner-column">
                                <div className="video-box">
                                    <figure className="image"><img src="images/resource/contact1-2.png" alt=""/></figure>
                                    <div className="icon-leaves-27 rotate-x"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contact1