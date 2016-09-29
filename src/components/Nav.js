import React from 'react';
import { Link, browserHistory } from 'react-router';

const handleClick = ({ target: { value }}) => browserHistory.push(value || '/players');

const Nav = () => (
	<div className="container">
    <nav>
      <Link to='/players' className="btn btn-secondary" activeClassName="active">Players</Link>
      <button onClick={ handleClick } value="/matches" className="btn btn-secondary">Goto Matches?</button>
      <button onClick={ handleClick } value="/rankings/argent/2" className="btn btn-secondary">Goto A s2</button>
      <button onClick={ handleClick } value="/rankings/ultima/1" className="btn btn-secondary">Goto U s1</button>
      <button onClick={ handleClick } value="/rankings/ultima/2" className="btn btn-secondary">Goto U s2</button>
      <button onClick={ browserHistory.goBack } className="btn btn-secondary">Go Back!!</button>
    </nav>
		<nav>
			<Link to='/rankings/argent/1' className="btn btn-secondary" activeClassName="active">argent season 1</Link>
			<Link to='/rankings/argent/2' className="btn btn-secondary" activeClassName="active">argent season 2</Link>
			<Link to='/rankings/ultima/1' className="btn btn-secondary" activeClassName="active">ultima season 1</Link>
			<Link to='/rankings/ultima/2' className="btn btn-secondary" activeClassName="active">ultima season 2</Link>
		</nav>
	</div>
);

export default Nav;