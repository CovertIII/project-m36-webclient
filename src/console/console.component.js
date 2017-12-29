import React, { Component } from 'react';

import { Relation } from '../Relation';

export const ConsoleComponent = ({expr = 'test', result, resultType = 'string', history = [], updateInput, evaluate}) => (
  <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
    <h1>TutorialD Console</h1>
    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Enter TutorialD Here</label>
      <textarea onChange={updateInput}  className="form-control" id="exampleFormControlTextarea1" rows="5" value={expr}></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">History</label>
      <select onChange={updateInput}  className="form-control" id="exampleFormControlSelect1">
        { history.map( (e, i) => ( <option value={e} key={i}> {e} </option>) ) }
      </select>
    </div>
    <button className="btn btn-primary" onClick={ () => evaluate(expr) }>Evaluate</button>
    { resultType === 'relation' ?
      (<div className="table-responsive">
        { Relation(result) }
      </div>) : null
    }
    { resultType === 'string' ?
      (<div className="">
        { result }
      </div>) : null
    }
  </main>
);
