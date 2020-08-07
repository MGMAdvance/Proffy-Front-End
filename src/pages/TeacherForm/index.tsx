import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from './../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from './../../assets/images/icons/warning.svg';

import './style.css';

function TeacherForm(){
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: ''},
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: '',
            }
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrivel que você quer da aulas." 
                description="O primeiro passo é preencher o formulario de inscrição"        
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                    <Textarea name="bio" label="Biografia"/>
                </fieldset>

                <fieldset>
                    <legend>Sobra a aulas</legend>
                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes'},
                            { value: 'Biologia', label: 'Biologia'},
                            { value: 'Matemática', label: 'Matemática'},
                            { value: 'Portugues', label: 'Portugues'},
                        ]}
                    />
                    <Input name="cost" label="Custo por hora"/>
                </fieldset>

                <fieldset>
                    <legend>Horários disponiveis
                        <button onClick={addNewScheduleItem} type="button">
                        + Novo horário
                        </button>
                    </legend>
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana"
                                    options={[
                                        { value: '0', label: 'Domingo'},
                                        { value: '1', label: 'Segunda-feira'},
                                        { value: '2', label: 'Terça-feira'},
                                        { value: '3', label: 'Quarta-feira'},
                                        { value: '4', label: 'Quita-feira'},
                                        { value: '5', label: 'Sexta-feira'},
                                        { value: '6', label: 'Sábado'},
                                    ]}
                                />
                                <Input name="from" label="Das" type="time"/>
                                <Input name="to" label="Até" type="time"/>
                            </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;