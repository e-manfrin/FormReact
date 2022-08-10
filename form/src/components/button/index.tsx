import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component {
    render() {
        return (
            <div className={style.botao}>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        )
    }
}

export default Button;