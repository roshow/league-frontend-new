import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
	<div className="container">
    <nav>
      <Link to='/players' className="btn btn-secondary" activeClassName="active">Players</Link>
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