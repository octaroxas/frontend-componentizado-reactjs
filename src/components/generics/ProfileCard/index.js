import React from 'react';
import './styles.css'

export default function ProfileCard () {
    return (
        <>
        <div className="card">
            <img className="profile" src="https://github.com/octaroxas.png" />

            <article className="card-article">
                <header>
                    <h1>Octacilio C. de Almeida</h1>
                </header>
                <section>
                    <p>
                        Estudante de Ciência da Computação pela Universidade Federal do Oeste do Pará (UFOPA)
                    </p>

                    <p>
                        Estudando desenvolvimento frontend
                    </p>
                </section>
            </article>

            

        </div>
        
        </>
    )
}