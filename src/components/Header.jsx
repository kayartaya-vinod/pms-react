const Header = ({ title, developer }) => <>
    <div className="alert alert-primary">
        <div className="container">
            <h1>{title}</h1>
        </div>
    </div>;
    <div className="container">
        <p>Developed by {developer}, powered by React.</p>
    </div>
</>;

export default Header;