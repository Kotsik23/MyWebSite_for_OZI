import React, {useState} from "react";
import {axiosInstance} from "../util/requsets";

const Home = () => {
    const [auth, setAuth] = useState(null);

    axiosInstance.get('/home', { headers: {
        Authentication: `Bearer ${localStorage.getItem('_token')}`
        }}).then((res) => {
        console.log(res.data);
        setAuth(res.data);
    });

    return(
        <div>
            <div style={{textAlign: "center"}}>
                <div style={{fontSize: 40}}>{auth === null ? 'Please Wait' : auth ?
                    <div>
                        <ul>
                            <li className="product_wrapper">
                                <div className="product">
                                    <div className="product_photo">
                                        <span className="description">
                                            <h3>«Непобедимое солнце»</h3>
                                            <h5>Виктор Пелевин</h5>
                                            <div className="info">Каждую осень новый роман прославленного автора приходит к читателям,
                                                немедленно становится бестселлером и начинаются споры – лучше ли он прежних?
                                                В новом – только представьте себе – главная героиня женщина!
                                            </div>
                                            <a href="https://book24.ru/product/nepobedimoe-solntse-5824673/?utm_source=zen_yandex&utm_medium=smm&utm_campaign=blog&utm_term=https_book24_ru_product_nepobedimoe_solntse_5824673&utm_content=post"
                                               target="_blank" rel="noreferrer">Подробнее</a>
                                        </span>
                                        <img src="https://ndc.book24.ru/medialibrary/11a/11a7a03e8eeacc58bf628629c1db9fbd/71a0f9d33a32db842a9e6fd42bca44da.jpg" alt="«Непобедимое солнце»"/>
                                    </div>
                                </div>
                            </li>
                            <li className="product_wrapper">
                                <div className="product">
                                    <div className="product_photo">
                                        <span className="description">
                                            <h3>«Краткие ответы на большие вопросы»</h3>
                                            <h5>Стивен Хокинг</h5>
                                            <div className="info">Это вышедшая уже после ухода известного ученого книга представляет
                                                собой увлекательный рассказ о Вселенной, ее пока еще неразгаданных тайнах,
                                                черных дырах и различных космических излучениях.
                                            </div>
                                            <a href="https://book24.ru/product/kratkie-otvety-na-bolshie-voprosy-4152419/?utm_source=zen_yandex&utm_medium=smm&utm_campaign=blog&utm_term=https_book24_ru_product_kratkie_otvety_na_bolshie_voprosy_4152419&utm_content=post"
                                               target="_blank" rel="noreferrer">Подробнее</a>
                                        </span>
                                        <img src="https://ndc.book24.ru/medialibrary/b7a/b7a04d3e25c8773fd22de95674d507fb/74b784c171a5c44ebf15c2deaf9d8a3a.jpg" alt="«Краткие ответы на большие вопросы»"/>
                                    </div>
                                </div>
                            </li>
                            <li className="product_wrapper">
                                <div className="product">
                                    <div className="product_photo">
                                        <span className="description">
                                            <h3 style={{fontSize: 20}}>«Воры, вандалы и идиоты: Криминальная история русского искусства»</h3>
                                            <h5>Софья Багдасарова</h5>
                                            <div className="info">Что делать, если встретите самого Воланда?.. Главное – ни в коем случае не спорьте.
                                                И вообще лучше не разговаривайте со всякими странными персонажами.
                                            </div>
                                            <a href="https://book24.ru/product/master-i-margarita-191247/?utm_source=zen_yandex&utm_medium=smm&utm_campaign=blog&utm_term=https_book24_ru_product_master_i_margarita_191247&utm_content=post"
                                               target="_blank" rel="noreferrer">Подробнее</a>
                                        </span>
                                        <img src="https://ndc.book24.ru/medialibrary/b42/b42f3133a0662390027a20386a0f667f/6a18df280fa6c59ce1c1be1b58fb4111.jpg" alt="«Воры, вандалы и идиоты: Криминальная история русского искусства»"/>
                                    </div>
                                </div>
                            </li>
                            <li className="product_wrapper">
                                <div className="product">
                                    <div className="product_photo">
                                        <span className="description">
                                            <h3>«Мастер и Маргарита»</h3>
                                            <h5>Михаил Булгаков</h5>
                                            <div className="info">Настоящее искусство требует не только жертв, но и больших средств для его приобретения.
                                                В книге автора весело и непринужденно рассказывается о том, как многие в нашем Отечестве хотели заработать целую кучу
                                                денег на подделках и ограблениях музеев и коллекций. И что из этого вышло?..
                                            </div>
                                            <a href="https://book24.ru/product/vory-vandaly-i-idioty-kriminalnaya-istoriya-russkogo-iskusstva-5402301/?utm_source=zen_yandex&utm_medium=smm&utm_campaign=blog&utm_term=https_book24_ru_product_vory_vandaly_i_idioty_kriminalnaya_istoriya_russkogo_iskusstva_5402301&utm_content=post"
                                               target="_blank" rel="noreferrer">Подробнее</a>
                                        </span>
                                        <img src="https://ndc.book24.ru/medialibrary/e28/e28b2eee68120de47bfdaab5d549cac3/6ef997ab89cd8edf6382ec441b67d872.jpg" alt="«Мастер и Маргарита»"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    :   //Condition
                    <div className="access_denied">
                        Access denied. You need to be authorized.<br/>
                        <img src="https://www.pinclipart.com/picdir/big/305-3053307_black-multiplication-sign-clipart-png-download-transparent-png.png" alt="Access denied"/>
                    </div>
                }</div>
            </div>
        </div>

    );
}

export default Home;