import React from 'react';
import '../stylesheets/layout/_collapsable-header.scss';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';


function Form() {
  return (
    <div className="bg__container--design">
      <div className="main__pageContainer">
        <Design />
        <Fill />
        <Share />
      </div>
    </div>
  );
}
export default Form;
