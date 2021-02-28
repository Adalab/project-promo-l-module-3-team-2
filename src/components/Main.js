import React from 'react';
import '../stylesheets/layout/_page.scss';
import CardPreview from './CardPreview';
import Form from './Form';

function Main(props) {
  return (
    <div className="bg__container">
      <main className="main--flex">
        <CardPreview
          name={props.name}
          email={props.email}
          job={props.job}
          phone={props.phone}
          linkedin={props.linkedin}
          github={props.github}
        />
        <Form handleInput={props.handleInput} />
      </main>
    </div>
  );
}

export default Main;
