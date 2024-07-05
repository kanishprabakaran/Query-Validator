import {Link} from 'react-router-dom';

export default function Home() {
    return (
      <>
        <h1 >Home Page</h1>
        <h5 >An SQL query validator is a tool or functionality within a software application that checks SQL queries for correctness before they are executed against a database.</h5>
        <div className="w-100 text-center mt-6" style={{ fontSize: '24px' }}> {/* Enlarge font size */}
  <Link to="/signup" style={{ marginRight: '20px' ,marginLeft:'-50px'}}>Sign Up</Link> {/* Add right margin for spacing */}
  <Link to="/Login">Login</Link>
</div>
      
      </>
    );
  }
  