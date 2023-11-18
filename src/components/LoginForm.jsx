import React, { useState } from 'react';
import { sendRequest } from '../dataServices/api';
import photo from '../images/photo.jpg';
import SettingsPopup from './popups/SettingsPopup';
import EmptyInputAlert from './alerts/EmptyInputAlert';
import { AnimatePresence } from 'framer-motion';

const LoginForm = () => {
    const [settingsPopup, setSettingsPopup] = useState(false);
    const [alert, setAlert] = useState(false);

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const onClickHandler = (event) => {
        event.preventDefault();
        setSettingsPopup(!settingsPopup);
    };

    const inputHandler = (prop, val) => {
        setData({
            ...data,
            [prop]: val,
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (data.email === '' || data.password === '') {
            setAlert(true);
        } else {
            sendRequest(data);
        }

        setTimeout(() => setAlert(false), 2000);
    };

    return (
        <div className="flex flex-col justify-center items-center w-[650px] h-[600px] bg-white m-8 rounded-md">
            <div>
                <img src={photo} alt="" width={500} />
            </div>
            <div className="flex flex-col gap-6 w-[300px]">
                <form action="" className="flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => inputHandler('email', e.target.value)}
                        className="px-4 py-2 rounded-3xl transition duration-600 ease-in-out focus:outline-none bg-slate-100 focus:bg-white focus:border"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) =>
                            inputHandler('password', e.target.value)
                        }
                        className="px-4 py-2 rounded-3xl transition duration-300 ease-in-out focus:outline-none bg-slate-100 focus:bg-white focus:border"
                    />
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            onClick={onSubmitHandler}
                            className="w-9/12 px-4 py-2 rounded-3xl bg-sky-300 uppercase text-white font-semibold"
                        >
                            Login
                        </button>
                        <button onClick={onClickHandler}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-10 h-10 text-sky-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
                <div>
                    <AnimatePresence>
                        {settingsPopup && (
                            <SettingsPopup
                                settingsPopup={settingsPopup}
                                setSettingsPopup={setSettingsPopup}
                            />
                        )}
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {alert && <EmptyInputAlert />}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default LoginForm;
