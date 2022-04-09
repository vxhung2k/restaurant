import React from 'react'
import './Booktable.css'
import { Navbar, FooterOverlay } from '../../components'
import { MdOutlineChair } from 'react-icons/md'
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("mayvdrgg");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form className='form__booktable' onSubmit={handleSubmit}>
            <label htmlFor="name">
                Họ tên:

                <input
                    id="form__id"
                    type="text"
                    name="Họ tên"
                    placeholder="Họ tên.."
                    required
                />
            </label>
            <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
            />


            <label htmlFor="phone">
                Số điện thoại:

                <input
                    id="form__id"
                    type="text"
                    name="Số điện thoại"
                    placeholder="số điện thoại.."
                    maxLength={10}
                    required
                />
            </label>
            <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
            />

            <label htmlFor="email">Email:

                <input
                    id="form__id"
                    name="email"
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder="Email..."
                    required
                />
            </label>
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />


            <label htmlFor="datetime">Thời gian:

                <input
                    id="form__id"
                    name="Thời gian"
                    type="datetime-local"
                    required
                />
            </label>
            <ValidationError
                prefix="Datetime"
                field="datetime"
                errors={state.errors}
            />

            <label >Chọn bàn:
                <select name="Chọn bàn " id="form__id" required>
                    <option value="Bàn_1">Bàn 1</option>
                    <option value="Bàn_2">Bàn 2</option>
                    <option value="Bàn_3">Bàn 3</option>
                    <option value="Bàn_4">Bàn 4</option>
                    <option value="Bàn_5">Bàn 5</option>
                    <option value="Bàn_6">Bàn 6</option>
                    <option value="Bàn_7">Bàn 7</option>
                    <option value="Bàn_8">Bàn 8</option>
                    <option value="Bàn_9">Bàn 9</option>
                    <option value="Bàn_10">Bàn 10</option>
                    <option value="Bàn_11">Bàn 11</option>
                    <option value="Bàn_12">Bàn 12</option>
                    <option value="Bàn_13">Bàn 13</option>
                    <option value="Bàn_14">Bàn 14</option>
                    <option value="Bàn_15">Bàn 15</option>
                    <option value="Bàn_tự_do">Bàn tự do</option>
                </select>
            </label>
            <ValidationError
                prefix="Chosetable"
                field="chosetable"
                errors={state.errors}
            />
            <label htmlFor="message">Ghi chú:
                <textarea
                    id="form__id"
                    name="Ghi chú"
                    placeholder="Ghi chú..."
                />
            </label>
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            
            <input type="submit" disabled={state.submitting} />
            
            

        </form>
    );
}
const Booktable = () => {
    return (
        <section className="booktable">
            <Navbar />
            <div className="booktable__container">
                <ContactForm />


            </div>
            <div className="footer__booktable">
                <FooterOverlay />
            </div>


        </section>
    )
}

export default Booktable